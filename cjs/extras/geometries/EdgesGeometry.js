Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreBufferGeometry = require('../../core/BufferGeometry');

var _coreBufferAttribute = require('../../core/BufferAttribute');

var _coreGeometry = require('../../core/Geometry');

var _mathMath = require('../../math/Math');

/**
 * @author WestLangley / http://github.com/WestLangley
 */

function THREE$EdgesGeometry(geometry, thresholdAngle) {
	this.isEdgesGeometry = true;

	_coreBufferGeometry.THREE$BufferGeometry.call(this);

	thresholdAngle = thresholdAngle !== undefined ? thresholdAngle : 1;

	var thresholdDot = Math.cos(_mathMath.THREE$Math.degToRad(thresholdAngle));

	var edge = [0, 0],
	    hash = {};
	var sortFunction = function (a, b) {

		return a - b;
	};

	var keys = ['a', 'b', 'c'];

	var geometry2;

	if (geometry && geometry.isBufferGeometry) {

		geometry2 = new _coreGeometry.THREE$Geometry();
		geometry2.fromBufferGeometry(geometry);
	} else {

		geometry2 = geometry.clone();
	}

	geometry2.mergeVertices();
	geometry2.computeFaceNormals();

	var vertices = geometry2.vertices;
	var faces = geometry2.faces;

	for (var i = 0, l = faces.length; i < l; i++) {

		var face = faces[i];

		for (var j = 0; j < 3; j++) {

			edge[0] = face[keys[j]];
			edge[1] = face[keys[(j + 1) % 3]];
			edge.sort(sortFunction);

			var key = edge.toString();

			if (hash[key] === undefined) {

				hash[key] = { vert1: edge[0], vert2: edge[1], face1: i, face2: undefined };
			} else {

				hash[key].face2 = i;
			}
		}
	}

	var coords = [];

	for (var key in hash) {

		var h = hash[key];

		if (h.face2 === undefined || faces[h.face1].normal.dot(faces[h.face2].normal) <= thresholdDot) {

			var vertex = vertices[h.vert1];
			coords.push(vertex.x);
			coords.push(vertex.y);
			coords.push(vertex.z);

			vertex = vertices[h.vert2];
			coords.push(vertex.x);
			coords.push(vertex.y);
			coords.push(vertex.z);
		}
	}

	this.addAttribute('position', new _coreBufferAttribute.THREE$BufferAttribute(new Float32Array(coords), 3));
};

THREE$EdgesGeometry.prototype = Object.create(_coreBufferGeometry.THREE$BufferGeometry.prototype);
THREE$EdgesGeometry.prototype.constructor = THREE$EdgesGeometry;

exports.THREE$EdgesGeometry = THREE$EdgesGeometry;