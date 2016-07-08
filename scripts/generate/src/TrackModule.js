const { basename, dirname, extname, relative, resolve } = require( 'path' );
const { readdirSync, readFileSync } = require( 'sander' );
const { parse } = require( 'acorn' );
const MagicString = require( 'magic-string' );
const attachScopes = require( './ast/attachScopes' );
const walk = require( './ast/walk' );
const getKeypath = require( './utils/getKeypath' );
const Module = require( './Module' );

class TrackModule {
	constructor ( file ) {
		this.file = file;
		this.dir = dirname( file );

		this.src = readFileSync( file ).toString()
			.replace( 'KeyframeTrack.call', 'KeyframeTrackConstructor.call' )
			.replace( /\bKeyframeTrack\.prototype/, 'KeyframeTrackPrototype' );

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

TrackModule.prototype.analyse = Module.prototype.analyse;
TrackModule.prototype.render = Module.prototype.render;

module.exports = TrackModule;
