// this is a hack to enable THREE.AudioContext to work
var outro = `
Object.defineProperty( exports, 'AudioContext', {
	get: function () {
		return exports.getAudioContext();
	}
});`;

export default {
	entry: 'src/index.js',
	dest: 'build/three.js',
	moduleName: 'THREE',
	format: 'umd',

	outro: outro
};
