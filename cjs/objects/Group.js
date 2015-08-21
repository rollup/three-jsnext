Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$Group() {
	this.isGroup = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.type = 'Group';
};

THREE$Group.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$Group.prototype.constructor = THREE$Group;

exports.THREE$Group = THREE$Group;