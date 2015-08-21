Object.defineProperty(exports, '__esModule', {
	value: true
});

var _ShaderMaterial = require('./ShaderMaterial');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$RawShaderMaterial(parameters) {
	this.isRawShaderMaterial = true;

	_ShaderMaterial.THREE$ShaderMaterial.call(this, parameters);

	this.type = 'RawShaderMaterial';
};

THREE$RawShaderMaterial.prototype = Object.create(_ShaderMaterial.THREE$ShaderMaterial.prototype);
THREE$RawShaderMaterial.prototype.constructor = THREE$RawShaderMaterial;

exports.THREE$RawShaderMaterial = THREE$RawShaderMaterial;