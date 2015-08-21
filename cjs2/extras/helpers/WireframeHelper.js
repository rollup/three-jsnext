'use strict';

exports.THREE$WireframeHelper = THREE$WireframeHelper;

var LineSegments = require('../../objects/LineSegments');
var LineBasicMaterial = require('../../materials/LineBasicMaterial');
var WireframeGeometry = require('../geometries/WireframeGeometry');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$WireframeHelper ( object, hex ) {
	this.isWireframeHelper = true;

	var color = ( hex !== undefined ) ? hex : 0xffffff;

	LineSegments.THREE$LineSegments.call( this, new WireframeGeometry.THREE$WireframeGeometry( object.geometry ), new LineBasicMaterial.THREE$LineBasicMaterial( { color: color } ) );

	this.matrix = object.matrixWorld;
	this.matrixAutoUpdate = false;

};

THREE$WireframeHelper.prototype = Object.create( LineSegments.THREE$LineSegments.prototype );
THREE$WireframeHelper.prototype.constructor = THREE$WireframeHelper;