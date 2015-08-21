'use strict';

exports.THREE$Bone = THREE$Bone;

var Object3D = require('../core/Object3D');

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */

function THREE$Bone ( skin ) {
	this.isBone = true;

	Object3D.THREE$Object3D.call( this );

	this.type = 'Bone';

	this.skin = skin;

};

THREE$Bone.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$Bone.prototype.constructor = THREE$Bone;

THREE$Bone.prototype.copy = function ( source ) {
	
	Object3D.THREE$Object3D.prototype.copy.call( this, source );
	
	this.skin = source.skin;
	
	return this;

};