Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Line = require('./Line');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$LineSegments(geometry, material) {
	this.isLineSegments = true;

	_Line.THREE$Line.call(this, geometry, material);

	this.type = 'LineSegments';
};

THREE$LineSegments.prototype = Object.create(_Line.THREE$Line.prototype);
THREE$LineSegments.prototype.constructor = THREE$LineSegments;

exports.THREE$LineSegments = THREE$LineSegments;