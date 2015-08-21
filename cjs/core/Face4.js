Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Face3 = require('./Face3');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$Face4(a, b, c, d, normal, color, materialIndex) {
	this.isFace4 = true;

	console.warn('THREE.Face4 has been removed. A THREE.Face3 will be created instead.');
	return new _Face3.THREE$Face3(a, b, c, normal, color, materialIndex);
};

exports.THREE$Face4 = THREE$Face4;