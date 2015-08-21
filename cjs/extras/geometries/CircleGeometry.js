Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreGeometry = require('../../core/Geometry');

var _mathVector3 = require('../../math/Vector3');

var _mathSphere = require('../../math/Sphere');

var _coreFace3 = require('../../core/Face3');

var _mathVector2 = require('../../math/Vector2');

/**
 * @author hughes
 */

function THREE$CircleGeometry(radius, segments, thetaStart, thetaLength) {
	this.isCircleGeometry = true;

	_coreGeometry.THREE$Geometry.call(this);

	this.type = 'CircleGeometry';

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

	var i,
	    uvs = [],
	    center = new _mathVector3.THREE$Vector3(),
	    centerUV = new _mathVector2.THREE$Vector2(0.5, 0.5);

	this.vertices.push(center);
	uvs.push(centerUV);

	for (i = 0; i <= segments; i++) {

		var vertex = new _mathVector3.THREE$Vector3();
		var segment = thetaStart + i / segments * thetaLength;

		vertex.x = radius * Math.cos(segment);
		vertex.y = radius * Math.sin(segment);

		this.vertices.push(vertex);
		uvs.push(new _mathVector2.THREE$Vector2((vertex.x / radius + 1) / 2, (vertex.y / radius + 1) / 2));
	}

	var n = new _mathVector3.THREE$Vector3(0, 0, 1);

	for (i = 1; i <= segments; i++) {

		this.faces.push(new _coreFace3.THREE$Face3(i, i + 1, 0, [n.clone(), n.clone(), n.clone()]));
		this.faceVertexUvs[0].push([uvs[i].clone(), uvs[i + 1].clone(), centerUV.clone()]);
	}

	this.computeFaceNormals();

	this.boundingSphere = new _mathSphere.THREE$Sphere(new _mathVector3.THREE$Vector3(), radius);
};

THREE$CircleGeometry.prototype = Object.create(_coreGeometry.THREE$Geometry.prototype);
THREE$CircleGeometry.prototype.constructor = THREE$CircleGeometry;

THREE$CircleGeometry.prototype.clone = function () {

	var geometry = new THREE$CircleGeometry(this.parameters.radius, this.parameters.segments, this.parameters.thetaStart, this.parameters.thetaLength);

	return geometry;
};

exports.THREE$CircleGeometry = THREE$CircleGeometry;