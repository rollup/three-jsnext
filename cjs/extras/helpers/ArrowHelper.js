Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mathVector3 = require('../../math/Vector3');

var _coreObject3D = require('../../core/Object3D');

var _materialsMeshBasicMaterial = require('../../materials/MeshBasicMaterial');

var _objectsMesh = require('../../objects/Mesh');

var _materialsLineBasicMaterial = require('../../materials/LineBasicMaterial');

var _objectsLine = require('../../objects/Line');

var _geometriesCylinderGeometry = require('../geometries/CylinderGeometry');

var _coreGeometry = require('../../core/Geometry');

var THREE$ArrowHelper;

/**
 * @author WestLangley / http://github.com/WestLangley
 * @author zz85 / http://github.com/zz85
 * @author bhouston / http://exocortex.com
 *
 * Creates an arrow for visualizing directions
 *
 * Parameters:
 *  dir - Vector3
 *  origin - Vector3
 *  length - Number
 *  color - color in hex value
 *  headLength - Number
 *  headWidth - Number
 */

exports.THREE$ArrowHelper = THREE$ArrowHelper = (function () {

	var lineGeometry = new _coreGeometry.THREE$Geometry();
	lineGeometry.vertices.push(new _mathVector3.THREE$Vector3(0, 0, 0), new _mathVector3.THREE$Vector3(0, 1, 0));

	var coneGeometry = new _geometriesCylinderGeometry.THREE$CylinderGeometry(0, 0.5, 1, 5, 1);
	coneGeometry.translate(0, -0.5, 0);

	return function ArrowHelper(dir, origin, length, color, headLength, headWidth) {

		// dir is assumed to be normalized

		_coreObject3D.THREE$Object3D.call(this);

		if (color === undefined) color = 0xffff00;
		if (length === undefined) length = 1;
		if (headLength === undefined) headLength = 0.2 * length;
		if (headWidth === undefined) headWidth = 0.2 * headLength;

		this.position.copy(origin);

		this.line = new _objectsLine.THREE$Line(lineGeometry, new _materialsLineBasicMaterial.THREE$LineBasicMaterial({ color: color }));
		this.line.matrixAutoUpdate = false;
		this.add(this.line);

		this.cone = new _objectsMesh.THREE$Mesh(coneGeometry, new _materialsMeshBasicMaterial.THREE$MeshBasicMaterial({ color: color }));
		this.cone.matrixAutoUpdate = false;
		this.add(this.cone);

		this.setDirection(dir);
		this.setLength(length, headLength, headWidth);
	};
})();

THREE$ArrowHelper.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$ArrowHelper.prototype.constructor = THREE$ArrowHelper;

THREE$ArrowHelper.prototype.setDirection = (function () {

	var axis = new _mathVector3.THREE$Vector3();
	var radians;

	return function setDirection(dir) {

		// dir is assumed to be normalized

		if (dir.y > 0.99999) {

			this.quaternion.set(0, 0, 0, 1);
		} else if (dir.y < -0.99999) {

			this.quaternion.set(1, 0, 0, 0);
		} else {

			axis.set(dir.z, 0, -dir.x).normalize();

			radians = Math.acos(dir.y);

			this.quaternion.setFromAxisAngle(axis, radians);
		}
	};
})();

THREE$ArrowHelper.prototype.setLength = function (length, headLength, headWidth) {

	if (headLength === undefined) headLength = 0.2 * length;
	if (headWidth === undefined) headWidth = 0.2 * headLength;

	this.line.scale.set(1, length - headLength, 1);
	this.line.updateMatrix();

	this.cone.scale.set(headWidth, headLength, headWidth);
	this.cone.position.y = length;
	this.cone.updateMatrix();
};

THREE$ArrowHelper.prototype.setColor = function (color) {

	this.line.material.color.set(color);
	this.cone.material.color.set(color);
};

exports.THREE$ArrowHelper = THREE$ArrowHelper;