import * as fs from 'fs';

// this is a hack to enable THREE.AudioContext to work
var outro = `
Object.defineProperty( exports, 'AudioContext', {
	get: function () {
		return exports.getAudioContext();
	}
});`;

var footer = fs.readFileSync( 'three.js/src/Three.Legacy.js', 'utf-8' );

export default {
	entry: 'src/index.js',
	dest: 'build/three.js',
	moduleName: 'THREE',
	format: 'umd',

	outro: outro,
	footer: footer
};
