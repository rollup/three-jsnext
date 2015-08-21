Object.defineProperty(exports, '__esModule', {
	value: true
});

var _PolyhedronGeometry = require('./PolyhedronGeometry');

/**
 * @author timothypratley / https://github.com/timothypratley
 */

function THREE$TetrahedronGeometry(radius, detail) {
	this.isTetrahedronGeometry = true;

	var vertices = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1];

	var indices = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];

	_PolyhedronGeometry.THREE$PolyhedronGeometry.call(this, vertices, indices, radius, detail);

	this.type = 'TetrahedronGeometry';

	this.parameters = {
		radius: radius,
		detail: detail
	};
};

THREE$TetrahedronGeometry.prototype = Object.create(_PolyhedronGeometry.THREE$PolyhedronGeometry.prototype);
THREE$TetrahedronGeometry.prototype.constructor = THREE$TetrahedronGeometry;

THREE$TetrahedronGeometry.prototype.clone = function () {

	var geometry = new THREE$TetrahedronGeometry(this.parameters.radius, this.parameters.detail);

	geometry.copy(this);

	return geometry;
};

exports.THREE$TetrahedronGeometry = THREE$TetrahedronGeometry;