'use strict';

exports.THREE$LineSegments = THREE$LineSegments;

var Line = require('./Line');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$LineSegments ( geometry, material ) {
	this.isLineSegments = true;

	Line.THREE$Line.call( this, geometry, material );

	this.type = 'LineSegments';

};

THREE$LineSegments.prototype = Object.create( Line.THREE$Line.prototype );
THREE$LineSegments.prototype.constructor = THREE$LineSegments;