'use strict';

exports.THREE$AxisHelper = THREE$AxisHelper;

var LineSegments = require('../../objects/LineSegments');
var Three = require('../../Three');
var LineBasicMaterial = require('../../materials/LineBasicMaterial');
var BufferAttribute = require('../../core/BufferAttribute');
var BufferGeometry = require('../../core/BufferGeometry');

/**
 * @author sroucheray / http://sroucheray.org/
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$AxisHelper ( size ) {
	this.isAxisHelper = true;

	size = size || 1;

	var vertices = new Float32Array( [
		0, 0, 0,  size, 0, 0,
		0, 0, 0,  0, size, 0,
		0, 0, 0,  0, 0, size
	] );

	var colors = new Float32Array( [
		1, 0, 0,  1, 0.6, 0,
		0, 1, 0,  0.6, 1, 0,
		0, 0, 1,  0, 0.6, 1
	] );

	var geometry = new BufferGeometry.THREE$BufferGeometry();
	geometry.addAttribute( 'position', new BufferAttribute.THREE$BufferAttribute( vertices, 3 ) );
	geometry.addAttribute( 'color', new BufferAttribute.THREE$BufferAttribute( colors, 3 ) );

	var material = new LineBasicMaterial.THREE$LineBasicMaterial( { vertexColors: Three.THREE$VertexColors } );

	LineSegments.THREE$LineSegments.call( this, geometry, material );

};

THREE$AxisHelper.prototype = Object.create( LineSegments.THREE$LineSegments.prototype );
THREE$AxisHelper.prototype.constructor = THREE$AxisHelper;