Object.defineProperty(exports, '__esModule', {
	value: true
});

var _objectsLineSegments = require('../../objects/LineSegments');

var _materialsLineBasicMaterial = require('../../materials/LineBasicMaterial');

var _geometriesWireframeGeometry = require('../geometries/WireframeGeometry');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$WireframeHelper(object, hex) {
	this.isWireframeHelper = true;

	var color = hex !== undefined ? hex : 0xffffff;

	_objectsLineSegments.THREE$LineSegments.call(this, new _geometriesWireframeGeometry.THREE$WireframeGeometry(object.geometry), new _materialsLineBasicMaterial.THREE$LineBasicMaterial({ color: color }));

	this.matrix = object.matrixWorld;
	this.matrixAutoUpdate = false;
};

THREE$WireframeHelper.prototype = Object.create(_objectsLineSegments.THREE$LineSegments.prototype);
THREE$WireframeHelper.prototype.constructor = THREE$WireframeHelper;

exports.THREE$WireframeHelper = THREE$WireframeHelper;