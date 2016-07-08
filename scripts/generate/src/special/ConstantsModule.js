const { basename, dirname, extname, relative, resolve } = require( 'path' );
const { readdirSync, readFileSync } = require( 'sander' );
const { parse } = require( 'acorn' );
const MagicString = require( 'magic-string' );
const attachScopes = require( '../ast/attachScopes' );
const walk = require( '../ast/walk' );
const getKeypath = require( '../utils/getKeypath' );

module.exports = class ConstantsModule {
	constructor ( file ) {
		this.file = file.replace( 'Three.js', 'constants.js' );
		this.dir = dirname( file );

		this.src = readFileSync( file ).toString();

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

	analyse () {
		let scope = attachScopes( this.ast );
		let names = scope.names;

		let depth = -1;

		walk( this.ast, {
			enter: ( node, parent ) => {
				if ( node.type === 'CallExpression' && getKeypath( node.callee ) === 'Object.assign' ) {
					const objectLiteral = node.arguments[1];

					this.constants = objectLiteral.properties.map( prop => {
						const key = prop.key.name;
						const value = this.src.slice( prop.value.start, prop.value.end ).replace( /^THREE\./, '' );

						this.exports[ `THREE.${key}` ] = true;
						return { key, value };
					});
				}
			}
		});
	}

	render () {
		return this.constants.map( c => `export var ${c.key} = ${c.value};` ).join( '\n' );
	}
};
