'use strict';

exports.THREE$MeshDepthMaterial = THREE$MeshDepthMaterial;

var Material = require('./Material');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */

function THREE$MeshDepthMaterial ( parameters ) {
	this.isMeshDepthMaterial = true;

	Material.THREE$Material.call( this );

	this.type = 'MeshDepthMaterial';

	this.morphTargets = false;
	this.wireframe = false;
	this.wireframeLinewidth = 1;

	this.setValues( parameters );

};

THREE$MeshDepthMaterial.prototype = Object.create( Material.THREE$Material.prototype );
THREE$MeshDepthMaterial.prototype.constructor = THREE$MeshDepthMaterial;

THREE$MeshDepthMaterial.prototype.copy = function ( source ) {

	Material.THREE$Material.prototype.copy.call( this, source );

	this.wireframe = source.wireframe;
	this.wireframeLinewidth = source.wireframeLinewidth;

	return this;

};