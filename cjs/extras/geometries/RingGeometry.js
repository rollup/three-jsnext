Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreGeometry = require('../../core/Geometry');

var _mathVector3 = require('../../math/Vector3');

var _mathSphere = require('../../math/Sphere');

var _coreFace3 = require('../../core/Face3');

var _mathVector2 = require('../../math/Vector2');

/**
 * @author Kaleb Murphy
 */

function THREE$RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) {
	this.isRingGeometry = true;

	_coreGeometry.THREE$Geometry.call(this);

	this.type = 'RingGeometry';

	this.parameters = {
		innerRadius: innerRadius,
		outerRadius: outerRadius,
		thetaSegments: thetaSegments,
		phiSegments: phiSegments,
		thetaStart: thetaStart,
		thetaLength: thetaLength
	};

	innerRadius = innerRadius || 0;
	outerRadius = outerRadius || 50;

	thetaStart = thetaStart !== undefined ? thetaStart : 0;
	thetaLength = thetaLength !== undefined ? thetaLength : Math.PI * 2;

	thetaSegments = thetaSegments !== undefined ? Math.max(3, thetaSegments) : 8;
	phiSegments = phiSegments !== undefined ? Math.max(1, phiSegments) : 8;

	var i,
	    o,
	    uvs = [],
	    radius = innerRadius,
	    radiusStep = (outerRadius - innerRadius) / phiSegments;

	for (i = 0; i < phiSegments + 1; i++) {

		// concentric circles inside ring

		for (o = 0; o < thetaSegments + 1; o++) {

			// number of segments per circle

			var vertex = new _mathVector3.THREE$Vector3();
			var segment = thetaStart + o / thetaSegments * thetaLength;
			vertex.x = radius * Math.cos(segment);
			vertex.y = radius * Math.sin(segment);

			this.vertices.push(vertex);
			uvs.push(new _mathVector2.THREE$Vector2((vertex.x / outerRadius + 1) / 2, (vertex.y / outerRadius + 1) / 2));
		}

		radius += radiusStep;
	}

	var n = new _mathVector3.THREE$Vector3(0, 0, 1);

	for (i = 0; i < phiSegments; i++) {

		// concentric circles inside ring

		var thetaSegment = i * (thetaSegments + 1);

		for (o = 0; o < thetaSegments; o++) {

			// number of segments per circle

			var segment = o + thetaSegment;

			var v1 = segment;
			var v2 = segment + thetaSegments + 1;
			var v3 = segment + thetaSegments + 2;

			this.faces.push(new _coreFace3.THREE$Face3(v1, v2, v3, [n.clone(), n.clone(), n.clone()]));
			this.faceVertexUvs[0].push([uvs[v1].clone(), uvs[v2].clone(), uvs[v3].clone()]);

			v1 = segment;
			v2 = segment + thetaSegments + 2;
			v3 = segment + 1;

			this.faces.push(new _coreFace3.THREE$Face3(v1, v2, v3, [n.clone(), n.clone(), n.clone()]));
			this.faceVertexUvs[0].push([uvs[v1].clone(), uvs[v2].clone(), uvs[v3].clone()]);
		}
	}

	this.computeFaceNormals();

	this.boundingSphere = new _mathSphere.THREE$Sphere(new _mathVector3.THREE$Vector3(), radius);
};

THREE$RingGeometry.prototype = Object.create(_coreGeometry.THREE$Geometry.prototype);
THREE$RingGeometry.prototype.constructor = THREE$RingGeometry;

THREE$RingGeometry.prototype.clone = function () {

	var geometry = new THREE$RingGeometry(this.parameters.innerRadius, this.parameters.outerRadius, this.parameters.thetaSegments, this.parameters.phiSegments, this.parameters.thetaStart, this.parameters.thetaLength);

	return geometry;
};

exports.THREE$RingGeometry = THREE$RingGeometry;