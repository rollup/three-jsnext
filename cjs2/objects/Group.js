'use strict';

exports.THREE$Group = THREE$Group;

var Object3D = require('../core/Object3D');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$Group () {
	this.isGroup = true;

	Object3D.THREE$Object3D.call( this );

	this.type = 'Group';

};

THREE$Group.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$Group.prototype.constructor = THREE$Group;