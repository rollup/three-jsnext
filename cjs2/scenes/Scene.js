'use strict';

exports.THREE$Scene = THREE$Scene;

var Object3D = require('../core/Object3D');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$Scene () {
	this.isScene = true;

	Object3D.THREE$Object3D.call( this );

	this.type = 'Scene';

	this.fog = null;
	this.overrideMaterial = null;

	this.autoUpdate = true; // checked by the renderer

};

THREE$Scene.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$Scene.prototype.constructor = THREE$Scene;

THREE$Scene.prototype.copy = function ( source ) {

	Object3D.THREE$Object3D.prototype.copy.call( this, source );

	if ( source.fog !== null ) this.fog = source.fog.clone();
	if ( source.overrideMaterial !== null ) this.overrideMaterial = source.overrideMaterial.clone();

	this.autoUpdate = source.autoUpdate;
	this.matrixAutoUpdate = source.matrixAutoUpdate;

	return this;

};