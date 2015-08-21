'use strict';

exports.THREE$Light = THREE$Light;

var Object3D = require('../core/Object3D');
var Color = require('../math/Color');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$Light ( color ) {
	this.isLight = true;

	Object3D.THREE$Object3D.call( this );

	this.type = 'Light';

	this.color = new Color.THREE$Color( color );

};

THREE$Light.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$Light.prototype.constructor = THREE$Light;

THREE$Light.prototype.copy = function ( source ) {
	
	Object3D.THREE$Object3D.prototype.copy.call( this, source );
	
	this.color.copy( source.color );
	
	return this;

};