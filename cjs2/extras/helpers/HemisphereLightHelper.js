'use strict';

exports.THREE$HemisphereLightHelper = THREE$HemisphereLightHelper;

var Vector3 = require('../../math/Vector3');
var Object3D = require('../../core/Object3D');
var Mesh = require('../../objects/Mesh');
var Three = require('../../Three');
var MeshBasicMaterial = require('../../materials/MeshBasicMaterial');
var SphereGeometry = require('../geometries/SphereGeometry');
var Color = require('../../math/Color');

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$HemisphereLightHelper ( light, sphereSize ) {
	this.isHemisphereLightHelper = true;

	Object3D.THREE$Object3D.call( this );

	this.light = light;
	this.light.updateMatrixWorld();

	this.matrix = light.matrixWorld;
	this.matrixAutoUpdate = false;

	this.colors = [ new Color.THREE$Color(), new Color.THREE$Color() ];

	var geometry = new SphereGeometry.THREE$SphereGeometry( sphereSize, 4, 2 );
	geometry.rotateX( - Math.PI / 2 );

	for ( var i = 0, il = 8; i < il; i ++ ) {

		geometry.faces[ i ].color = this.colors[ i < 4 ? 0 : 1 ];

	}

	var material = new MeshBasicMaterial.THREE$MeshBasicMaterial( { vertexColors: Three.THREE$FaceColors, wireframe: true } );

	this.lightSphere = new Mesh.THREE$Mesh( geometry, material );
	this.add( this.lightSphere );

	this.update();

};

THREE$HemisphereLightHelper.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$HemisphereLightHelper.prototype.constructor = THREE$HemisphereLightHelper;

THREE$HemisphereLightHelper.prototype.dispose = function () {

	this.lightSphere.geometry.dispose();
	this.lightSphere.material.dispose();

};

THREE$HemisphereLightHelper.prototype.update = function () {

	var vector = new Vector3.THREE$Vector3();

	return function () {

		this.colors[ 0 ].copy( this.light.color ).multiplyScalar( this.light.intensity );
		this.colors[ 1 ].copy( this.light.groundColor ).multiplyScalar( this.light.intensity );

		this.lightSphere.lookAt( vector.setFromMatrixPosition( this.light.matrixWorld ).negate() );
		this.lightSphere.geometry.colorsNeedUpdate = true;

	}

}();