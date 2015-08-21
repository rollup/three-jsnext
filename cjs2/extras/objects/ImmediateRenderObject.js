'use strict';

exports.THREE$ImmediateRenderObject = THREE$ImmediateRenderObject;

var Object3D = require('../../core/Object3D');

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$ImmediateRenderObject () {
	this.isImmediateRenderObject = true;

	Object3D.THREE$Object3D.call( this );

	this.render = function ( renderCallback ) {};

};

THREE$ImmediateRenderObject.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$ImmediateRenderObject.prototype.constructor = THREE$ImmediateRenderObject;