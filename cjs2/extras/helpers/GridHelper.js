'use strict';

exports.THREE$GridHelper = THREE$GridHelper;

var LineSegments = require('../../objects/LineSegments');
var Vector3 = require('../../math/Vector3');
var Color = require('../../math/Color');
var Three = require('../../Three');
var LineBasicMaterial = require('../../materials/LineBasicMaterial');
var Geometry = require('../../core/Geometry');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$GridHelper ( size, step ) {
	this.isGridHelper = true;

	var geometry = new Geometry.THREE$Geometry();
	var material = new LineBasicMaterial.THREE$LineBasicMaterial( { vertexColors: Three.THREE$VertexColors } );

	this.color1 = new Color.THREE$Color( 0x444444 );
	this.color2 = new Color.THREE$Color( 0x888888 );

	for ( var i = - size; i <= size; i += step ) {

		geometry.vertices.push(
			new Vector3.THREE$Vector3( - size, 0, i ), new Vector3.THREE$Vector3( size, 0, i ),
			new Vector3.THREE$Vector3( i, 0, - size ), new Vector3.THREE$Vector3( i, 0, size )
		);

		var color = i === 0 ? this.color1 : this.color2;

		geometry.colors.push( color, color, color, color );

	}

	LineSegments.THREE$LineSegments.call( this, geometry, material );

};

THREE$GridHelper.prototype = Object.create( LineSegments.THREE$LineSegments.prototype );
THREE$GridHelper.prototype.constructor = THREE$GridHelper;

THREE$GridHelper.prototype.setColors = function( colorCenterLine, colorGrid ) {

	this.color1.set( colorCenterLine );
	this.color2.set( colorGrid );

	this.geometry.colorsNeedUpdate = true;

};