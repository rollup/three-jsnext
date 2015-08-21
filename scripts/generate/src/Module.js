import { basename, dirname, extname, relative, resolve } from 'path';
import { readdirSync, readFileSync } from 'sander';
import { parse } from 'acorn';
import MagicString from 'magic-string';
import attachScopes from './ast/attachScopes';
import walk from './ast/walk';
import createAlias from './utils/createAlias';
import dedupe from './utils/dedupe';
import isExport from './utils/isExport';

function isIdentifier ( node, parent ) {
	if ( node.type !== 'Identifier' ) return false;
	if ( parent.type === 'MemberExpression' && !parent.computed && node !== parent.object ) return false;
	if ( parent.type === 'Property' && node !== parent.value ) return false;

	return true;
}

function isClass ( className ) {
	// TODO there may be others... a more robust approach would be
	// to see which instanceof checks are actually used
	return !/^(log|error|warn)$/.test( className );
}

function getKeypath ( node ) {
	if ( node.type !== 'MemberExpression' || node.computed ) return null;

	let keypath = node.property.name;

	node = node.object;
	while ( node.type === 'MemberExpression' ) {
		if ( node.computed ) return null;
		keypath = `${node.property.name}.${keypath}`;

		node = node.object;
	}

	if ( node.type !== 'Identifier' ) return null;
	return `${node.name}.${keypath}`;
}

export default class Module {
	constructor ( file ) {
		this.file = file;
		this.dir = dirname( file );

		this.src = readFileSync( file ).toString();

		// special case - ShaderChunk.js. We need to inline all the shaders
		if ( basename( file ) === 'ShaderChunk.js' ) {
			readdirSync( file, '../ShaderChunk' ).forEach( shaderFile => {
				if ( extname( shaderFile ) === '.glsl' ) {
					const name = shaderFile.slice( 0, -5 );
					const definition = JSON.stringify( readFileSync( file, '../ShaderChunk', shaderFile ).toString() );

					this.src += `\nTHREE.ShaderChunk["${name}"] = ${definition};`;
				}
			});
		}

		this.magicString = new MagicString( this.src );

		// Attempt to parse with acorn
		try {
			this.ast = parse( this.src );
		} catch ( err ) {
			console.log( this.src );
			console.log( `error parsing ${file}: ${err.message}` );
			throw err;
		}

		this.exportDependencies = {};
		this.exports = {};

		this.analyse();

		this.definitions = this.ast._scope.names.slice();
	}

	analyse () {
		let scope = attachScopes( this.ast );
		let names = scope.names;

		walk( this.ast, {
			enter: ( node, parent ) => {
				if ( node._scope ) {
					scope = node._scope;
				}

				const keypath = getKeypath( node );
				if ( isExport( keypath ) ) {
					this.exportDependencies[ keypath ] = true;
				}

				// check for assignments to THREE.whatever
				if ( node.type === 'AssignmentExpression' && node.left.type === 'MemberExpression' ) {
					const keypath = getKeypath( node.left );

					if ( isExport( keypath ) ) {
						this.exports[ keypath ] = true;
					}
				}
			},

			leave: ( node, parent ) => {
				if ( node._scope ) {
					scope = scope.parent;
				}
			}
		});
	}

	render ({ pathByExportName, exportNamesByPath }) {
		const self = this;
		const magicString = this.magicString;

		let scope = this.ast._scope;
		let varsToDeclare = {};

		walk( this.ast, {
			enter ( node, parent ) {
				if ( node._skip ) return this.skip();

				if ( node._scope ) {
					scope = node._scope;
				}

				// rewrite top-level `this` as `window`
				if ( node.type === 'ThisExpression' && !scope.parent ) {
					magicString.overwrite( node.start, node.end, 'window' );
				}

				// if we encounter `THREE.whatever = ...` it gets turned into
				// `THREE$whatever = ...`, so we need to declare `var THREE$whatever`
				if ( node.type === 'AssignmentExpression' && node.left.type === 'MemberExpression' ) {
					const keypath = getKeypath( node.left );

					if ( isExport( keypath ) ) {
						const alias = createAlias( keypath );

						if ( /^THREE\.\w+IdCount$/.test( keypath ) ) {
							magicString.overwrite( node.start, node.end, `var count = 0;\nfunction ${alias} () { return count++; }` );
							return this.skip();
						} else if ( node.right.type === 'FunctionExpression' ) {
							// THREE.Geometry = function () {...} becomes
							// function THREE$Geometry () {...}, to avoid
							// tricky cyclical headaches.
							magicString.overwrite( node.start, node.right.start, '' );
							magicString.insert( node.right.start + 8, ' ' + alias );

							// We also add this.isGeometry = true, to avoid
							// instanceof checks
							const className = alias.slice( 6 );
							if ( isClass( className ) ) {
								const fnBody = node.right.body;
								magicString.insert( fnBody.start + 1, `\n\tthis.is${className} = true;` );
							}

							node.left._skip = true;
							return;
						} else {
							varsToDeclare[ alias ] = true;
						}
					}
				}

				// special case - THREE.GeometryIdCount++ and similar should be rewritten
				// as THREE.GeometryIdCount()...
				if ( node.type === 'UpdateExpression' && node.argument.type === 'MemberExpression' ) {
					const keypath = getKeypath( node.argument );

					if ( /^THREE\.\w+IdCount$/.test( keypath ) ) {
						magicString.overwrite( node.argument.end, node.end, '()' );
					}
				}

				// rewrite all instances of `THREE.whatever` to `THREE$whatever`
				if ( node.type === 'MemberExpression' ) {
					const keypath = getKeypath( node );

					if ( isExport( keypath ) ) {
						const alias = createAlias( keypath );
						magicString.overwrite( node.start, node.end, alias );
					}
				}

				// rewrite `object instanceof THREE.Geometry` to
				// `(object && object.isGeometry)`
				if ( node.type === 'BinaryExpression' && node.operator === 'instanceof' ) {
					if ( node.right.type === 'MemberExpression' ) {
						const keypath = getKeypath( node.right );

						if ( isExport( keypath ) ) {
							const left = magicString.slice( node.left.start, node.left.end );
							const name = keypath.slice( 6 );

							magicString.overwrite( node.start, node.end, `(${left} && ${left}.is${name})` );

							node.right._skip = true;
						}
					}
				}
			},

			leave ( node ) {
				if ( node._scope ) {
					scope = scope.parent;
				}
			}
		});

		let dependencies = {};

		const addDependency = ( owner, name ) => {
			if ( !owner || owner === this.file ) return;

			let relativePath = relative( this.dir, owner ).replace( /\.js$/, '' );
			if ( relativePath[0] !== '.' ) relativePath = `./${relativePath}`;

			if ( !dependencies[ relativePath ] ) {
				dependencies[ relativePath ] = [];
			}

			dependencies[ relativePath ].push( name );
		};

		Object.keys( this.exportDependencies ).forEach( keypath => {
			const keys = keypath.split( '.' );
			let owner;

			while ( keys.length ) {
				keypath = keys.join( '.' );
				owner = pathByExportName[ keypath ];
				if ( owner ) break;

				keys.pop();
			}

			if ( !owner ) return;

			addDependency( owner, createAlias( keypath ) );
		});

		const varDeclarationBlock = Object.keys( varsToDeclare )
			.map( name => `var ${name};` )
			.join( '\n' );

		if ( varDeclarationBlock ) {
			magicString.prepend( varDeclarationBlock + '\n\n' );
		}

		const importBlock = Object.keys( dependencies ).map( relativePath => {
			const names = dependencies[ relativePath ];
			return `import { ${names.join( ', ' )} } from '${relativePath}';`
		}).join( '\n' );

		if ( importBlock ) {
			magicString.prepend( importBlock + '\n\n' );
		}

		let shouldExport = dedupe(
			exportNamesByPath[ this.file ].map( createAlias )
		);

		const exportBlock = shouldExport.length > 4 ?
			`\n\nexport {\n  ${shouldExport.join(',\n  ')}\n};` :
			shouldExport.length > 0 ?
			`\n\nexport { ${shouldExport.join(', ')} };` :
			'';

		return magicString.append( exportBlock ).toString().trim();
	}
}
