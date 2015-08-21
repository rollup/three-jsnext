Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

var _Light = require('./Light');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$AmbientLight(color) {
	this.isAmbientLight = true;

	_Light.THREE$Light.call(this, color);

	this.type = 'AmbientLight';
};

THREE$AmbientLight.prototype = Object.create(_Light.THREE$Light.prototype);
THREE$AmbientLight.prototype.constructor = THREE$AmbientLight;

THREE$AmbientLight.prototype.toJSON = function (meta) {

	var data = _coreObject3D.THREE$Object3D.prototype.toJSON.call(this, meta);

	data.object.color = this.color.getHex();

	return data;
};

exports.THREE$AmbientLight = THREE$AmbientLight;