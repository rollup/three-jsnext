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
		this.file = file;
		this.dir = dirname( file );

		// manipulate source code
		let src = readFileSync( file ).toString();
		let ast = parse( src );
		let magicString = new MagicString( src );

		walk( ast, {
			enter ( node, parent ) {
				if ( node.type === 'AssignmentExpression' && getKeypath( node.left ) === 'THREE.Path.prototype' ) {
					magicString.overwrite( node.right.start, node.right.end, 'THREE.PathPrototype;\nTHREE.PathPrototype.constructor = THREE.Path' );
					return this.skip();
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
