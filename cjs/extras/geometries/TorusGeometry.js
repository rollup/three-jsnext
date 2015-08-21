Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreGeometry = require('../../core/Geometry');

var _coreFace3 = require('../../core/Face3');

var _mathVector2 = require('../../math/Vector2');

var _mathVector3 = require('../../math/Vector3');

/**
 * @author oosmoxiecode
 * @author mrdoob / http://mrdoob.com/
 * based on http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3DLite/src/away3dlite/primitives/Torus.as?r=2888
 */

function THREE$TorusGeometry(radius, tube, radialSegments, tubularSegments, arc) {
	this.isTorusGeometry = true;

	_coreGeometry.THREE$Geometry.call(this);

	this.type = 'TorusGeometry';

	this.parameters = {
		radius: radius,
		tube: tube,
		radialSegments: radialSegments,
		tubularSegments: tubularSegments,
		arc: arc
	};

	radius = radius || 100;
	tube = tube || 40;
	radialSegments = radialSegments || 8;
	tubularSegments = tubularSegments || 6;
	arc = arc || Math.PI * 2;

	var center = new _mathVector3.THREE$Vector3(),
	    uvs = [],
	    normals = [];

	for (var j = 0; j <= radialSegments; j++) {

		for (var i = 0; i <= tubularSegments; i++) {

			var u = i / tubularSegments * arc;
			var v = j / radialSegments * Math.PI * 2;

			center.x = radius * Math.cos(u);
			center.y = radius * Math.sin(u);

			var vertex = new _mathVector3.THREE$Vector3();
			vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
			vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
			vertex.z = tube * Math.sin(v);

			this.vertices.push(vertex);

			uvs.push(new _mathVector2.THREE$Vector2(i / tubularSegments, j / radialSegments));
			normals.push(vertex.clone().sub(center).normalize());
		}
	}

	for (var j = 1; j <= radialSegments; j++) {

		for (var i = 1; i <= tubularSegments; i++) {

			var a = (tubularSegments + 1) * j + i - 1;
			var b = (tubularSegments + 1) * (j - 1) + i - 1;
			var c = (tubularSegments + 1) * (j - 1) + i;
			var d = (tubularSegments + 1) * j + i;

			var face = new _coreFace3.THREE$Face3(a, b, d, [normals[a].clone(), normals[b].clone(), normals[d].clone()]);
			this.faces.push(face);
			this.faceVertexUvs[0].push([uvs[a].clone(), uvs[b].clone(), uvs[d].clone()]);

			face = new _coreFace3.THREE$Face3(b, c, d, [normals[b].clone(), normals[c].clone(), normals[d].clone()]);
			this.faces.push(face);
			this.faceVertexUvs[0].push([uvs[b].clone(), uvs[c].clone(), uvs[d].clone()]);
		}
	}

	this.computeFaceNormals();
};

THREE$TorusGeometry.prototype = Object.create(_coreGeometry.THREE$Geometry.prototype);
THREE$TorusGeometry.prototype.constructor = THREE$TorusGeometry;

THREE$TorusGeometry.prototype.clone = function () {

	var geometry = new THREE$TorusGeometry(this.parameters.radius, this.parameters.tube, this.parameters.radialSegments, this.parameters.tubularSegments, this.parameters.arc);

	return geometry;
};

exports.THREE$TorusGeometry = THREE$TorusGeometry;