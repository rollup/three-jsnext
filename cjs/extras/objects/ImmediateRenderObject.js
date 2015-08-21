Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../../core/Object3D');

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$ImmediateRenderObject() {
	this.isImmediateRenderObject = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.render = function (renderCallback) {};
};

THREE$ImmediateRenderObject.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$ImmediateRenderObject.prototype.constructor = THREE$ImmediateRenderObject;

exports.THREE$ImmediateRenderObject = THREE$ImmediateRenderObject;