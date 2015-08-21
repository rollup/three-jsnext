'use strict';

exports.THREE$OctahedronGeometry = THREE$OctahedronGeometry;

var PolyhedronGeometry = require('./PolyhedronGeometry');

/**
 * @author timothypratley / https://github.com/timothypratley
 */

function THREE$OctahedronGeometry ( radius, detail ) {
	this.isOctahedronGeometry = true;

	var vertices = [
		1, 0, 0,   - 1, 0, 0,    0, 1, 0,    0, - 1, 0,    0, 0, 1,    0, 0, - 1
	];

	var indices = [
		0, 2, 4,    0, 4, 3,    0, 3, 5,    0, 5, 2,    1, 2, 5,    1, 5, 3,    1, 3, 4,    1, 4, 2
	];

	PolyhedronGeometry.THREE$PolyhedronGeometry.call( this, vertices, indices, radius, detail );

	this.type = 'OctahedronGeometry';

	this.parameters = {
		radius: radius,
		detail: detail
	};

};

THREE$OctahedronGeometry.prototype = Object.create( PolyhedronGeometry.THREE$PolyhedronGeometry.prototype );
THREE$OctahedronGeometry.prototype.constructor = THREE$OctahedronGeometry;

THREE$OctahedronGeometry.prototype.clone = function () {

	var geometry = new THREE$OctahedronGeometry(
		this.parameters.radius,
		this.parameters.detail
	);

	geometry.copy( this );

	return geometry;

};