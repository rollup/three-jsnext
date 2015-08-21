Object.defineProperty(exports, '__esModule', {
	value: true
});

var _objectsLineSegments = require('../../objects/LineSegments');

var _mathVector3 = require('../../math/Vector3');

var _mathColor = require('../../math/Color');

var _Three = require('../../Three');

var _materialsLineBasicMaterial = require('../../materials/LineBasicMaterial');

var _coreGeometry = require('../../core/Geometry');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$GridHelper(size, step) {
	this.isGridHelper = true;

	var geometry = new _coreGeometry.THREE$Geometry();
	var material = new _materialsLineBasicMaterial.THREE$LineBasicMaterial({ vertexColors: _Three.THREE$VertexColors });

	this.color1 = new _mathColor.THREE$Color(0x444444);
	this.color2 = new _mathColor.THREE$Color(0x888888);

	for (var i = -size; i <= size; i += step) {

		geometry.vertices.push(new _mathVector3.THREE$Vector3(-size, 0, i), new _mathVector3.THREE$Vector3(size, 0, i), new _mathVector3.THREE$Vector3(i, 0, -size), new _mathVector3.THREE$Vector3(i, 0, size));

		var color = i === 0 ? this.color1 : this.color2;

		geometry.colors.push(color, color, color, color);
	}

	_objectsLineSegments.THREE$LineSegments.call(this, geometry, material);
};

THREE$GridHelper.prototype = Object.create(_objectsLineSegments.THREE$LineSegments.prototype);
THREE$GridHelper.prototype.constructor = THREE$GridHelper;

THREE$GridHelper.prototype.setColors = function (colorCenterLine, colorGrid) {

	this.color1.set(colorCenterLine);
	this.color2.set(colorGrid);

	this.geometry.colorsNeedUpdate = true;
};

exports.THREE$GridHelper = THREE$GridHelper;