Object.defineProperty(exports, '__esModule', {
	value: true
});

var _objectsLineSegments = require('../../objects/LineSegments');

var _Three = require('../../Three');

var _materialsLineBasicMaterial = require('../../materials/LineBasicMaterial');

var _coreBufferAttribute = require('../../core/BufferAttribute');

var _coreBufferGeometry = require('../../core/BufferGeometry');

/**
 * @author sroucheray / http://sroucheray.org/
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$AxisHelper(size) {
	this.isAxisHelper = true;

	size = size || 1;

	var vertices = new Float32Array([0, 0, 0, size, 0, 0, 0, 0, 0, 0, size, 0, 0, 0, 0, 0, 0, size]);

	var colors = new Float32Array([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1]);

	var geometry = new _coreBufferGeometry.THREE$BufferGeometry();
	geometry.addAttribute('position', new _coreBufferAttribute.THREE$BufferAttribute(vertices, 3));
	geometry.addAttribute('color', new _coreBufferAttribute.THREE$BufferAttribute(colors, 3));

	var material = new _materialsLineBasicMaterial.THREE$LineBasicMaterial({ vertexColors: _Three.THREE$VertexColors });

	_objectsLineSegments.THREE$LineSegments.call(this, geometry, material);
};

THREE$AxisHelper.prototype = Object.create(_objectsLineSegments.THREE$LineSegments.prototype);
THREE$AxisHelper.prototype.constructor = THREE$AxisHelper;

exports.THREE$AxisHelper = THREE$AxisHelper;