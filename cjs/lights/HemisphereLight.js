Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

var _Light = require('./Light');

var _mathColor = require('../math/Color');

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$HemisphereLight(skyColor, groundColor, intensity) {
	this.isHemisphereLight = true;

	_Light.THREE$Light.call(this, skyColor);

	this.type = 'HemisphereLight';

	this.position.set(0, 100, 0);
	this.updateMatrix();

	this.groundColor = new _mathColor.THREE$Color(groundColor);
	this.intensity = intensity !== undefined ? intensity : 1;
};

THREE$HemisphereLight.prototype = Object.create(_Light.THREE$Light.prototype);
THREE$HemisphereLight.prototype.constructor = THREE$HemisphereLight;

THREE$HemisphereLight.prototype.copy = function (source) {

	_Light.THREE$Light.prototype.copy.call(this, source);

	this.groundColor.copy(source.groundColor);
	this.intensity = source.intensity;

	return this;
};

THREE$HemisphereLight.prototype.toJSON = function (meta) {

	var data = _coreObject3D.THREE$Object3D.prototype.toJSON.call(this, meta);

	data.object.color = this.color.getHex();
	data.object.groundColor = this.groundColor.getHex();
	data.object.intensity = this.intensity;

	return data;
};

exports.THREE$HemisphereLight = THREE$HemisphereLight;