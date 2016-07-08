const { basename, dirname, extname, relative, resolve } = require( 'path' );
const { readdirSync, readFileSync } = require( 'sander' );
const { parse } = require( 'acorn' );
const MagicString = require( 'magic-string' );
const attachScopes = require( '../ast/attachScopes' );
const walk = require( '../ast/walk' );
const getKeypath = require( '../utils/getKeypath' );
const Module = require( '../Module' );

class KeyframeTrackModule {
	constructor ( file ) {
		this.file = file.replace( 'KeyframeTrack', 'KeyframeTrackPrototype' );
		this.dir = dirname( file );

		// manipulate source code
		let src = readFileSync( file ).toString();
		let ast = parse( src );
		let magicString = new MagicString( src );

		walk( ast, {
			enter ( node, parent ) {
				if ( node.type === 'AssignmentExpression' && getKeypath( node.left ) === 'THREE.KeyframeTrack.prototype' ) {
					magicString.remove( 0, node.start );
					magicString.remove( node.end, src.length );

					magicString.overwrite( node.left.start, node.left.end, 'THREE.KeyframeTrackPrototype' );

					// remove constructor property
					const index = node.right.properties.findIndex( prop => prop.key.name === 'constructor' );
					magicString.remove( node.right.properties[ index ].start, node.right.properties[ index + 1 ].start );

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

KeyframeTrackModule.prototype.analyse = Module.prototype.analyse;
KeyframeTrackModule.prototype.render = Module.prototype.render;

module.exports = KeyframeTrackModule;
