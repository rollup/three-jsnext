Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mathMatrix3 = require('../../math/Matrix3');

var _mathVector3 = require('../../math/Vector3');

var _objectsLineSegments = require('../../objects/LineSegments');

var _materialsLineBasicMaterial = require('../../materials/LineBasicMaterial');

var _coreBufferAttribute = require('../../core/BufferAttribute');

var _coreBufferGeometry = require('../../core/BufferGeometry');

var _coreGeometry = require('../../core/Geometry');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/

function THREE$FaceNormalsHelper(object, size, hex, linewidth) {
	this.isFaceNormalsHelper = true;

	// FaceNormalsHelper only supports THREE.Geometry

	this.object = object;

	this.size = size !== undefined ? size : 1;

	var color = hex !== undefined ? hex : 0xffff00;

	var width = linewidth !== undefined ? linewidth : 1;

	//

	var nNormals = 0;

	var objGeometry = this.object.geometry;

	if (objGeometry && objGeometry.isGeometry) {

		nNormals = objGeometry.faces.length;
	} else {

		console.warn('THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.');
	}

	//

	var geometry = new _coreBufferGeometry.THREE$BufferGeometry();

	var positions = new _coreBufferAttribute.THREE$Float32Attribute(nNormals * 2 * 3, 3);

	geometry.addAttribute('position', positions);

	_objectsLineSegments.THREE$LineSegments.call(this, geometry, new _materialsLineBasicMaterial.THREE$LineBasicMaterial({ color: color, linewidth: width }));

	//

	this.matrixAutoUpdate = false;
	this.update();
};

THREE$FaceNormalsHelper.prototype = Object.create(_objectsLineSegments.THREE$LineSegments.prototype);
THREE$FaceNormalsHelper.prototype.constructor = THREE$FaceNormalsHelper;

THREE$FaceNormalsHelper.prototype.update = (function () {

	var v1 = new _mathVector3.THREE$Vector3();
	var v2 = new _mathVector3.THREE$Vector3();
	var normalMatrix = new _mathMatrix3.THREE$Matrix3();

	return function update() {

		this.object.updateMatrixWorld(true);

		normalMatrix.getNormalMatrix(this.object.matrixWorld);

		var matrixWorld = this.object.matrixWorld;

		var position = this.geometry.attributes.position;

		//

		var objGeometry = this.object.geometry;

		var vertices = objGeometry.vertices;

		var faces = objGeometry.faces;

		var idx = 0;

		for (var i = 0, l = faces.length; i < l; i++) {

			var face = faces[i];

			var normal = face.normal;

			v1.copy(vertices[face.a]).add(vertices[face.b]).add(vertices[face.c]).divideScalar(3).applyMatrix4(matrixWorld);

			v2.copy(normal).applyMatrix3(normalMatrix).normalize().multiplyScalar(this.size).add(v1);

			position.setXYZ(idx, v1.x, v1.y, v1.z);

			idx = idx + 1;

			position.setXYZ(idx, v2.x, v2.y, v2.z);

			idx = idx + 1;
		}

		position.needsUpdate = true;

		return this;
	};
})();

exports.THREE$FaceNormalsHelper = THREE$FaceNormalsHelper;