Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */

function THREE$Bone(skin) {
	this.isBone = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.type = 'Bone';

	this.skin = skin;
};

THREE$Bone.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$Bone.prototype.constructor = THREE$Bone;

THREE$Bone.prototype.copy = function (source) {

	_coreObject3D.THREE$Object3D.prototype.copy.call(this, source);

	this.skin = source.skin;

	return this;
};

exports.THREE$Bone = THREE$Bone;