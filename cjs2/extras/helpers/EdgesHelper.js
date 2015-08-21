'use strict';

exports.THREE$EdgesHelper = THREE$EdgesHelper;

var LineSegments = require('../../objects/LineSegments');
var LineBasicMaterial = require('../../materials/LineBasicMaterial');
var EdgesGeometry = require('../geometries/EdgesGeometry');

/**
 * @author WestLangley / http://github.com/WestLangley
 * @param object THREE.Mesh whose geometry will be used
 * @param hex line color
 * @param thresholdAngle the minimum angle (in degrees),
 * between the face normals of adjacent faces,
 * that is required to render an edge. A value of 10 means
 * an edge is only rendered if the angle is at least 10 degrees.
 */

function THREE$EdgesHelper ( object, hex, thresholdAngle ) {
	this.isEdgesHelper = true;

	var color = ( hex !== undefined ) ? hex : 0xffffff;

	LineSegments.THREE$LineSegments.call( this, new EdgesGeometry.THREE$EdgesGeometry( object.geometry, thresholdAngle ), new LineBasicMaterial.THREE$LineBasicMaterial( { color: color } ) );

	this.matrix = object.matrixWorld;
	this.matrixAutoUpdate = false;

};

THREE$EdgesHelper.prototype = Object.create( LineSegments.THREE$LineSegments.prototype );
THREE$EdgesHelper.prototype.constructor = THREE$EdgesHelper;