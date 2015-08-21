Object.defineProperty(exports, '__esModule', {
	value: true
});

var _objectsMesh = require('../../objects/Mesh');

var _materialsMeshBasicMaterial = require('../../materials/MeshBasicMaterial');

var _geometriesBoxGeometry = require('../geometries/BoxGeometry');

var _mathBox3 = require('../../math/Box3');

/**
 * @author WestLangley / http://github.com/WestLangley
 */

// a helper to show the world-axis-aligned bounding box for an object

function THREE$BoundingBoxHelper(object, hex) {
	this.isBoundingBoxHelper = true;

	var color = hex !== undefined ? hex : 0x888888;

	this.object = object;

	this.box = new _mathBox3.THREE$Box3();

	_objectsMesh.THREE$Mesh.call(this, new _geometriesBoxGeometry.THREE$BoxGeometry(1, 1, 1), new _materialsMeshBasicMaterial.THREE$MeshBasicMaterial({ color: color, wireframe: true }));
};

THREE$BoundingBoxHelper.prototype = Object.create(_objectsMesh.THREE$Mesh.prototype);
THREE$BoundingBoxHelper.prototype.constructor = THREE$BoundingBoxHelper;

THREE$BoundingBoxHelper.prototype.update = function () {

	this.box.setFromObject(this.object);

	this.box.size(this.scale);

	this.box.center(this.position);
};

exports.THREE$BoundingBoxHelper = THREE$BoundingBoxHelper;