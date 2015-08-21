Object.defineProperty(exports, '__esModule', {
	value: true
});

var _objectsBone = require('../../objects/Bone');

var _mathMatrix4 = require('../../math/Matrix4');

var _objectsLineSegments = require('../../objects/LineSegments');

var _Three = require('../../Three');

var _materialsLineBasicMaterial = require('../../materials/LineBasicMaterial');

var _mathColor = require('../../math/Color');

var _mathVector3 = require('../../math/Vector3');

var _coreGeometry = require('../../core/Geometry');

/**
 * @author Sean Griffin / http://twitter.com/sgrif
 * @author Michael Guerrero / http://realitymeltdown.com
 * @author mrdoob / http://mrdoob.com/
 * @author ikerr / http://verold.com
 */

function THREE$SkeletonHelper(object) {
	this.isSkeletonHelper = true;

	this.bones = this.getBoneList(object);

	var geometry = new _coreGeometry.THREE$Geometry();

	for (var i = 0; i < this.bones.length; i++) {

		var bone = this.bones[i];

		if (bone.parent && bone.parent.isBone) {

			geometry.vertices.push(new _mathVector3.THREE$Vector3());
			geometry.vertices.push(new _mathVector3.THREE$Vector3());
			geometry.colors.push(new _mathColor.THREE$Color(0, 0, 1));
			geometry.colors.push(new _mathColor.THREE$Color(0, 1, 0));
		}
	}

	geometry.dynamic = true;

	var material = new _materialsLineBasicMaterial.THREE$LineBasicMaterial({ vertexColors: _Three.THREE$VertexColors, depthTest: false, depthWrite: false, transparent: true });

	_objectsLineSegments.THREE$LineSegments.call(this, geometry, material);

	this.root = object;

	this.matrix = object.matrixWorld;
	this.matrixAutoUpdate = false;

	this.update();
};

THREE$SkeletonHelper.prototype = Object.create(_objectsLineSegments.THREE$LineSegments.prototype);
THREE$SkeletonHelper.prototype.constructor = THREE$SkeletonHelper;

THREE$SkeletonHelper.prototype.getBoneList = function (object) {

	var boneList = [];

	if (object && object.isBone) {

		boneList.push(object);
	}

	for (var i = 0; i < object.children.length; i++) {

		boneList.push.apply(boneList, this.getBoneList(object.children[i]));
	}

	return boneList;
};

THREE$SkeletonHelper.prototype.update = function () {

	var geometry = this.geometry;

	var matrixWorldInv = new _mathMatrix4.THREE$Matrix4().getInverse(this.root.matrixWorld);

	var boneMatrix = new _mathMatrix4.THREE$Matrix4();

	var j = 0;

	for (var i = 0; i < this.bones.length; i++) {

		var bone = this.bones[i];

		if (bone.parent && bone.parent.isBone) {

			boneMatrix.multiplyMatrices(matrixWorldInv, bone.matrixWorld);
			geometry.vertices[j].setFromMatrixPosition(boneMatrix);

			boneMatrix.multiplyMatrices(matrixWorldInv, bone.parent.matrixWorld);
			geometry.vertices[j + 1].setFromMatrixPosition(boneMatrix);

			j += 2;
		}
	}

	geometry.verticesNeedUpdate = true;

	geometry.computeBoundingSphere();
};

exports.THREE$SkeletonHelper = THREE$SkeletonHelper;