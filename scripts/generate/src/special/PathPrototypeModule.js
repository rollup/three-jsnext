const { basename, dirname, extname, relative, resolve } = require( 'path' );
const { readdirSync, readFileSync } = require( 'sander' );
const { parse } = require( 'acorn' );
const MagicString = require( 'magic-string' );
const attachScopes = require( '../ast/attachScopes' );
const walk = require( '../ast/walk' );
const getKeypath = require( '../utils/getKeypath' );
const Module = require( '../Module' );

class PathModule {
	constructor ( file ) {
		this.file = file.replace( 'Path', 'PathPrototype' );
		this.dir = dirname( file );

		// manipulate source code
		let src = readFileSync( file ).toString();
		let ast = parse( src );
		let magicString = new MagicString( src );

		walk( ast, {
			enter ( node, parent ) {
				if ( node.type === 'AssignmentExpression' && getKeypath( node.left ) === 'THREE.Path.prototype' ) {
					magicString.remove( 0, node.start );
					magicString.remove( node.end, src.length );

					magicString.overwrite( node.left.start, node.left.end, 'THREE.PathPrototype' );
				}

				if ( node.type === 'Property' && node.key.name === 'constructor' ) {
					// remove constructor property
					magicString.remove( node.start, parent.properties[ parent.properties.indexOf( node ) + 1 ].start );
				}
			}
		});

		// continue as normal from here
		this.src = magicString.toString();

		this.magicString = new MagicString( this.src );

		// Attempt to parse with acorn
		try {
			this.ast = parse( this.src );
		} catch ( err ) {
			console.log( this.src );
			console.log( `error parsing ${file}: ${err.message}` );
			throw err;
		}

		this.strongDeps = {};
		this.weakDeps = {};
		this.exports = {};
	}
};

PathModule.prototype.analyse = Module.prototype.analyse;
PathModule.prototype.render = Module.prototype.render;

module.exports = PathModule;
