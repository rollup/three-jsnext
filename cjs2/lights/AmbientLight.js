'use strict';

exports.THREE$AmbientLight = THREE$AmbientLight;

var Object3D = require('../core/Object3D');
var Light = require('./Light');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$AmbientLight ( color ) {
	this.isAmbientLight = true;

	Light.THREE$Light.call( this, color );

	this.type = 'AmbientLight';

};

THREE$AmbientLight.prototype = Object.create( Light.THREE$Light.prototype );
THREE$AmbientLight.prototype.constructor = THREE$AmbientLight;

THREE$AmbientLight.prototype.toJSON = function ( meta ) {

	var data = Object3D.THREE$Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();

	return data;

};