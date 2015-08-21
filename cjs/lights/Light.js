Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

var _mathColor = require('../math/Color');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$Light(color) {
	this.isLight = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.type = 'Light';

	this.color = new _mathColor.THREE$Color(color);
};

THREE$Light.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$Light.prototype.constructor = THREE$Light;

THREE$Light.prototype.copy = function (source) {

	_coreObject3D.THREE$Object3D.prototype.copy.call(this, source);

	this.color.copy(source.color);

	return this;
};

exports.THREE$Light = THREE$Light;