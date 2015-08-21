Object.defineProperty(exports, '__esModule', {
	value: true
});

var _objectsMesh = require('../../objects/Mesh');

var _materialsMeshBasicMaterial = require('../../materials/MeshBasicMaterial');

var _geometriesSphereGeometry = require('../geometries/SphereGeometry');

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$PointLightHelper(light, sphereSize) {
	this.isPointLightHelper = true;

	this.light = light;
	this.light.updateMatrixWorld();

	var geometry = new _geometriesSphereGeometry.THREE$SphereGeometry(sphereSize, 4, 2);
	var material = new _materialsMeshBasicMaterial.THREE$MeshBasicMaterial({ wireframe: true, fog: false });
	material.color.copy(this.light.color).multiplyScalar(this.light.intensity);

	_objectsMesh.THREE$Mesh.call(this, geometry, material);

	this.matrix = this.light.matrixWorld;
	this.matrixAutoUpdate = false;

	/*
 var distanceGeometry = new THREE.IcosahedronGeometry( 1, 2 );
 var distanceMaterial = new THREE.MeshBasicMaterial( { color: hexColor, fog: false, wireframe: true, opacity: 0.1, transparent: true } );
 	this.lightSphere = new THREE.Mesh( bulbGeometry, bulbMaterial );
 this.lightDistance = new THREE.Mesh( distanceGeometry, distanceMaterial );
 	var d = light.distance;
 	if ( d === 0.0 ) {
 		this.lightDistance.visible = false;
 	} else {
 		this.lightDistance.scale.set( d, d, d );
 	}
 	this.add( this.lightDistance );
 */
};

THREE$PointLightHelper.prototype = Object.create(_objectsMesh.THREE$Mesh.prototype);
THREE$PointLightHelper.prototype.constructor = THREE$PointLightHelper;

THREE$PointLightHelper.prototype.dispose = function () {

	this.geometry.dispose();
	this.material.dispose();
};

THREE$PointLightHelper.prototype.update = function () {

	this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);

	/*
 var d = this.light.distance;
 	if ( d === 0.0 ) {
 		this.lightDistance.visible = false;
 	} else {
 		this.lightDistance.visible = true;
 	this.lightDistance.scale.set( d, d, d );
 	}
 */
};

exports.THREE$PointLightHelper = THREE$PointLightHelper;