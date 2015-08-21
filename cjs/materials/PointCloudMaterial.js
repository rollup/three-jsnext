Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Material = require('./Material');

var _Three = require('../Three');

var _mathColor = require('../math/Color');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  size: <float>,
 *  sizeAttenuation: <bool>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: <bool>,
 *
 *  fog: <bool>
 * }
 */

function THREE$PointCloudMaterial(parameters) {
	this.isPointCloudMaterial = true;

	_Material.THREE$Material.call(this);

	this.type = 'PointCloudMaterial';

	this.color = new _mathColor.THREE$Color(0xffffff);

	this.map = null;

	this.size = 1;
	this.sizeAttenuation = true;

	this.vertexColors = _Three.THREE$NoColors;

	this.fog = true;

	this.setValues(parameters);
};

THREE$PointCloudMaterial.prototype = Object.create(_Material.THREE$Material.prototype);
THREE$PointCloudMaterial.prototype.constructor = THREE$PointCloudMaterial;

THREE$PointCloudMaterial.prototype.copy = function (source) {

	_Material.THREE$Material.prototype.copy.call(this, source);

	this.color.copy(source.color);

	this.map = source.map;

	this.size = source.size;
	this.sizeAttenuation = source.sizeAttenuation;

	this.vertexColors = source.vertexColors;

	this.fog = source.fog;

	return this;
};

// backwards compatibility

function THREE$ParticleBasicMaterial(parameters) {
	this.isParticleBasicMaterial = true;

	console.warn('THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.');
	return new THREE$PointCloudMaterial(parameters);
};

function THREE$ParticleSystemMaterial(parameters) {
	this.isParticleSystemMaterial = true;

	console.warn('THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.');
	return new THREE$PointCloudMaterial(parameters);
};

exports.THREE$ParticleSystemMaterial = THREE$ParticleSystemMaterial;
exports.THREE$ParticleBasicMaterial = THREE$ParticleBasicMaterial;
exports.THREE$PointCloudMaterial = THREE$PointCloudMaterial;