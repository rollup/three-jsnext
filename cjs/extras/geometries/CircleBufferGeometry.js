Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreBufferGeometry = require('../../core/BufferGeometry');

var _mathVector3 = require('../../math/Vector3');

var _mathSphere = require('../../math/Sphere');

var _coreBufferAttribute = require('../../core/BufferAttribute');

var _coreIndexBufferAttribute = require('../../core/IndexBufferAttribute');

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

function THREE$CircleBufferGeometry(radius, segments, thetaStart, thetaLength) {
	this.isCircleBufferGeometry = true;

	_coreBufferGeometry.THREE$BufferGeometry.call(this);

	this.type = 'CircleBufferGeometry';

	this.parameters = {
		radius: radius,
		segments: segments,
		thetaStart: thetaStart,
		thetaLength: thetaLength
	};

	radius = radius || 50;
	segments = segments !== undefined ? Math.max(3, segments) : 8;

	thetaStart = thetaStart !== undefined ? thetaStart : 0;
	thetaLength = thetaLength !== undefined ? thetaLength : Math.PI * 2;

	var vertices = segments + 2;

	var positions = new Float32Array(vertices * 3);
	var normals = new Float32Array(vertices * 3);
	var uvs = new Float32Array(vertices * 2);

	// center data is already zero, but need to set a few extras
	normals[3] = 1.0;
	uvs[0] = 0.5;
	uvs[1] = 0.5;

	for (var s = 0, i = 3, ii = 2; s <= segments; s++, i += 3, ii += 2) {

		var segment = thetaStart + s / segments * thetaLength;

		positions[i] = radius * Math.cos(segment);
		positions[i + 1] = radius * Math.sin(segment);

		normals[i + 2] = 1; // normal z

		uvs[ii] = (positions[i] / radius + 1) / 2;
		uvs[ii + 1] = (positions[i + 1] / radius + 1) / 2;
	}

	var indices = [];

	for (var i = 1; i <= segments; i++) {

		indices.push(i);
		indices.push(i + 1);
		indices.push(0);
	}

	this.addAttribute('index', new _coreIndexBufferAttribute.THREE$IndexBufferAttribute(new Uint16Array(indices), 1));
	this.addAttribute('position', new _coreBufferAttribute.THREE$BufferAttribute(positions, 3));
	this.addAttribute('normal', new _coreBufferAttribute.THREE$BufferAttribute(normals, 3));
	this.addAttribute('uv', new _coreBufferAttribute.THREE$BufferAttribute(uvs, 2));

	this.boundingSphere = new _mathSphere.THREE$Sphere(new _mathVector3.THREE$Vector3(), radius);
};

THREE$CircleBufferGeometry.prototype = Object.create(_coreBufferGeometry.THREE$BufferGeometry.prototype);
THREE$CircleBufferGeometry.prototype.constructor = THREE$CircleBufferGeometry;

THREE$CircleBufferGeometry.prototype.clone = function () {

	var geometry = new THREE$CircleBufferGeometry(this.parameters.radius, this.parameters.segments, this.parameters.thetaStart, this.parameters.thetaLength);

	geometry.copy(this);

	return geometry;
};

exports.THREE$CircleBufferGeometry = THREE$CircleBufferGeometry;