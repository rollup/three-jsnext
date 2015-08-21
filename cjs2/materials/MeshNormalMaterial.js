'use strict';

exports.THREE$MeshNormalMaterial = THREE$MeshNormalMaterial;

var Material = require('./Material');

/**
 * @author mrdoob / http://mrdoob.com/
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  shading: THREE.FlatShading,
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */

function THREE$MeshNormalMaterial ( parameters ) {
	this.isMeshNormalMaterial = true;

	Material.THREE$Material.call( this, parameters );

	this.type = 'MeshNormalMaterial';

	this.wireframe = false;
	this.wireframeLinewidth = 1;

	this.morphTargets = false;

	this.setValues( parameters );

};

THREE$MeshNormalMaterial.prototype = Object.create( Material.THREE$Material.prototype );
THREE$MeshNormalMaterial.prototype.constructor = THREE$MeshNormalMaterial;

THREE$MeshNormalMaterial.prototype.copy = function ( source ) {

	Material.THREE$Material.prototype.copy.call( this, source );

	this.wireframe = source.wireframe;
	this.wireframeLinewidth = source.wireframeLinewidth;

	return this;

};