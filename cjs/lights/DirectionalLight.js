Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

var _Light = require('./Light');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$DirectionalLight(color, intensity) {
	this.isDirectionalLight = true;

	_Light.THREE$Light.call(this, color);

	this.type = 'DirectionalLight';

	this.position.set(0, 1, 0);
	this.updateMatrix();

	this.target = new _coreObject3D.THREE$Object3D();

	this.intensity = intensity !== undefined ? intensity : 1;

	this.castShadow = false;
	this.onlyShadow = false;

	this.shadowCameraNear = 50;
	this.shadowCameraFar = 5000;

	this.shadowCameraLeft = -500;
	this.shadowCameraRight = 500;
	this.shadowCameraTop = 500;
	this.shadowCameraBottom = -500;

	this.shadowCameraVisible = false;

	this.shadowBias = 0;
	this.shadowDarkness = 0.5;

	this.shadowMapWidth = 512;
	this.shadowMapHeight = 512;

	this.shadowMap = null;
	this.shadowMapSize = null;
	this.shadowCamera = null;
	this.shadowMatrix = null;
};

THREE$DirectionalLight.prototype = Object.create(_Light.THREE$Light.prototype);
THREE$DirectionalLight.prototype.constructor = THREE$DirectionalLight;

THREE$DirectionalLight.prototype.copy = function (source) {

	_Light.THREE$Light.prototype.copy.call(this, source);

	this.intensity = source.intensity;
	this.target = source.target.clone();

	this.castShadow = source.castShadow;
	this.onlyShadow = source.onlyShadow;

	this.shadowCameraNear = source.shadowCameraNear;
	this.shadowCameraFar = source.shadowCameraFar;

	this.shadowCameraLeft = source.shadowCameraLeft;
	this.shadowCameraRight = source.shadowCameraRight;
	this.shadowCameraTop = source.shadowCameraTop;
	this.shadowCameraBottom = source.shadowCameraBottom;

	this.shadowCameraVisible = source.shadowCameraVisible;

	this.shadowBias = source.shadowBias;
	this.shadowDarkness = source.shadowDarkness;

	this.shadowMapWidth = source.shadowMapWidth;
	this.shadowMapHeight = source.shadowMapHeight;

	return this;
};

THREE$DirectionalLight.prototype.toJSON = function (meta) {

	var data = _coreObject3D.THREE$Object3D.prototype.toJSON.call(this, meta);

	data.object.color = this.color.getHex();
	data.object.intensity = this.intensity;

	return data;
};

exports.THREE$DirectionalLight = THREE$DirectionalLight;