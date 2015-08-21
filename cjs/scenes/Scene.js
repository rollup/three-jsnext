Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$Scene() {
	this.isScene = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.type = 'Scene';

	this.fog = null;
	this.overrideMaterial = null;

	this.autoUpdate = true; // checked by the renderer
};

THREE$Scene.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$Scene.prototype.constructor = THREE$Scene;

THREE$Scene.prototype.copy = function (source) {

	_coreObject3D.THREE$Object3D.prototype.copy.call(this, source);

	if (source.fog !== null) this.fog = source.fog.clone();
	if (source.overrideMaterial !== null) this.overrideMaterial = source.overrideMaterial.clone();

	this.autoUpdate = source.autoUpdate;
	this.matrixAutoUpdate = source.matrixAutoUpdate;

	return this;
};

exports.THREE$Scene = THREE$Scene;