const { basename, dirname, extname, relative, resolve } = require( 'path' );
const { readdirSync, readFileSync } = require( 'sander' );
const { parse } = require( 'acorn' );
const MagicString = require( 'magic-string' );
const attachScopes = require( '../ast/attachScopes' );
const walk = require( '../ast/walk' );
const getKeypath = require( '../utils/getKeypath' );
const Module = require( '../Module' );

const code = `
var context;

export function getAudioContext () {
	if ( context === undefined ) {
		context = new ( window.AudioContext || window.webkitAudioContext )();
	}

	return context;
}`.trim();

class AudioContextModule {
	constructor ( file ) {
		this.file = file;
		this.dir = dirname( file );

		this.strongDeps = {};
		this.weakDeps = {};
		this.exports = {
			'THREE.getAudioContext': true
		};
	}

	analyse ( prototypeChains ) {
		// noop
	}

	render () {
		return code;
	}
};

module.exports = AudioContextModule;
