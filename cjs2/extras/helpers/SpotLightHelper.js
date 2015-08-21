'use strict';

exports.THREE$SpotLightHelper = THREE$SpotLightHelper;

var Vector3 = require('../../math/Vector3');
var Object3D = require('../../core/Object3D');
var Mesh = require('../../objects/Mesh');
var MeshBasicMaterial = require('../../materials/MeshBasicMaterial');
var CylinderGeometry = require('../geometries/CylinderGeometry');

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/

function THREE$SpotLightHelper ( light ) {
	this.isSpotLightHelper = true;

	Object3D.THREE$Object3D.call( this );

	this.light = light;
	this.light.updateMatrixWorld();

	this.matrix = light.matrixWorld;
	this.matrixAutoUpdate = false;

	var geometry = new CylinderGeometry.THREE$CylinderGeometry( 0, 1, 1, 8, 1, true );

	geometry.translate( 0, - 0.5, 0 );
	geometry.rotateX( - Math.PI / 2 );

	var material = new MeshBasicMaterial.THREE$MeshBasicMaterial( { wireframe: true, fog: false } );

	this.cone = new Mesh.THREE$Mesh( geometry, material );
	this.add( this.cone );

	this.update();

};

THREE$SpotLightHelper.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$SpotLightHelper.prototype.constructor = THREE$SpotLightHelper;

THREE$SpotLightHelper.prototype.dispose = function () {

	this.cone.geometry.dispose();
	this.cone.material.dispose();

};

THREE$SpotLightHelper.prototype.update = function () {

	var vector = new Vector3.THREE$Vector3();
	var vector2 = new Vector3.THREE$Vector3();

	return function () {

		var coneLength = this.light.distance ? this.light.distance : 10000;
		var coneWidth = coneLength * Math.tan( this.light.angle );

		this.cone.scale.set( coneWidth, coneWidth, coneLength );

		vector.setFromMatrixPosition( this.light.matrixWorld );
		vector2.setFromMatrixPosition( this.light.target.matrixWorld );

		this.cone.lookAt( vector2.sub( vector ) );

		this.cone.material.color.copy( this.light.color ).multiplyScalar( this.light.intensity );

	};

}();