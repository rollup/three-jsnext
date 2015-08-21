'use strict';

exports.THREE$PointLight = THREE$PointLight;

var Object3D = require('../core/Object3D');
var Light = require('./Light');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$PointLight ( color, intensity, distance, decay ) {
	this.isPointLight = true;

	Light.THREE$Light.call( this, color );

	this.type = 'PointLight';

	this.intensity = ( intensity !== undefined ) ? intensity : 1;
	this.distance = ( distance !== undefined ) ? distance : 0;
	this.decay = ( decay !== undefined ) ? decay : 1;	// for physically correct lights, should be 2.

};

THREE$PointLight.prototype = Object.create( Light.THREE$Light.prototype );
THREE$PointLight.prototype.constructor = THREE$PointLight;

THREE$PointLight.prototype.copy = function ( source ) {

	Light.THREE$Light.prototype.copy.call( this, source );

	this.intensity = source.intensity;
	this.distance = source.distance;
	this.decay = source.decay;

	return this;

};

THREE$PointLight.prototype.toJSON = function ( meta ) {

	var data = Object3D.THREE$Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();
	data.object.intensity = this.intensity;
	data.object.distance = this.distance;
	data.object.decay = this.decay;

	return data;

};