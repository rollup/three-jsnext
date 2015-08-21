'use strict';

exports.THREE$BoundingBoxHelper = THREE$BoundingBoxHelper;

var Mesh = require('../../objects/Mesh');
var MeshBasicMaterial = require('../../materials/MeshBasicMaterial');
var BoxGeometry = require('../geometries/BoxGeometry');
var Box3 = require('../../math/Box3');

/**
 * @author WestLangley / http://github.com/WestLangley
 */

// a helper to show the world-axis-aligned bounding box for an object

function THREE$BoundingBoxHelper ( object, hex ) {
	this.isBoundingBoxHelper = true;

	var color = ( hex !== undefined ) ? hex : 0x888888;

	this.object = object;

	this.box = new Box3.THREE$Box3();

	Mesh.THREE$Mesh.call( this, new BoxGeometry.THREE$BoxGeometry( 1, 1, 1 ), new MeshBasicMaterial.THREE$MeshBasicMaterial( { color: color, wireframe: true } ) );

};

THREE$BoundingBoxHelper.prototype = Object.create( Mesh.THREE$Mesh.prototype );
THREE$BoundingBoxHelper.prototype.constructor = THREE$BoundingBoxHelper;

THREE$BoundingBoxHelper.prototype.update = function () {

	this.box.setFromObject( this.object );

	this.box.size( this.scale );

	this.box.center( this.position );

};