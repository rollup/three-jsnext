'use strict';

exports.THREE$FogExp2 = THREE$FogExp2;

var Color = require('../math/Color');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$FogExp2 ( color, density ) {
	this.isFogExp2 = true;

	this.name = '';

	this.color = new Color.THREE$Color( color );
	this.density = ( density !== undefined ) ? density : 0.00025;

};

THREE$FogExp2.prototype.clone = function () {

	return new THREE$FogExp2( this.color.getHex(), this.density );

};