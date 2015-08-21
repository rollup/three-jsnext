'use strict';

exports.THREE$DirectionalLightHelper = THREE$DirectionalLightHelper;

var Vector3 = require('../../math/Vector3');
var Object3D = require('../../core/Object3D');
var Line = require('../../objects/Line');
var LineBasicMaterial = require('../../materials/LineBasicMaterial');
var Geometry = require('../../core/Geometry');

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 */

function THREE$DirectionalLightHelper ( light, size ) {
	this.isDirectionalLightHelper = true;

	Object3D.THREE$Object3D.call( this );

	this.light = light;
	this.light.updateMatrixWorld();

	this.matrix = light.matrixWorld;
	this.matrixAutoUpdate = false;

	size = size || 1;

	var geometry = new Geometry.THREE$Geometry();
	geometry.vertices.push(
		new Vector3.THREE$Vector3( - size,   size, 0 ),
		new Vector3.THREE$Vector3(   size,   size, 0 ),
		new Vector3.THREE$Vector3(   size, - size, 0 ),
		new Vector3.THREE$Vector3( - size, - size, 0 ),
		new Vector3.THREE$Vector3( - size,   size, 0 )
	);

	var material = new LineBasicMaterial.THREE$LineBasicMaterial( { fog: false } );
	material.color.copy( this.light.color ).multiplyScalar( this.light.intensity );

	this.lightPlane = new Line.THREE$Line( geometry, material );
	this.add( this.lightPlane );

	geometry = new Geometry.THREE$Geometry();
	geometry.vertices.push(
		new Vector3.THREE$Vector3(),
		new Vector3.THREE$Vector3()
	);

	material = new LineBasicMaterial.THREE$LineBasicMaterial( { fog: false } );
	material.color.copy( this.light.color ).multiplyScalar( this.light.intensity );

	this.targetLine = new Line.THREE$Line( geometry, material );
	this.add( this.targetLine );

	this.update();

};

THREE$DirectionalLightHelper.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$DirectionalLightHelper.prototype.constructor = THREE$DirectionalLightHelper;

THREE$DirectionalLightHelper.prototype.dispose = function () {

	this.lightPlane.geometry.dispose();
	this.lightPlane.material.dispose();
	this.targetLine.geometry.dispose();
	this.targetLine.material.dispose();

};

THREE$DirectionalLightHelper.prototype.update = function () {

	var v1 = new Vector3.THREE$Vector3();
	var v2 = new Vector3.THREE$Vector3();
	var v3 = new Vector3.THREE$Vector3();

	return function () {

		v1.setFromMatrixPosition( this.light.matrixWorld );
		v2.setFromMatrixPosition( this.light.target.matrixWorld );
		v3.subVectors( v2, v1 );

		this.lightPlane.lookAt( v3 );
		this.lightPlane.material.color.copy( this.light.color ).multiplyScalar( this.light.intensity );

		this.targetLine.geometry.vertices[ 1 ].copy( v3 );
		this.targetLine.geometry.verticesNeedUpdate = true;
		this.targetLine.material.color.copy( this.lightPlane.material.color );

	};

}();