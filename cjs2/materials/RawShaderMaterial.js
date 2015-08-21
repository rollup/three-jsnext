'use strict';

exports.THREE$RawShaderMaterial = THREE$RawShaderMaterial;

var ShaderMaterial = require('./ShaderMaterial');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$RawShaderMaterial ( parameters ) {
	this.isRawShaderMaterial = true;

	ShaderMaterial.THREE$ShaderMaterial.call( this, parameters );

	this.type = 'RawShaderMaterial';

};

THREE$RawShaderMaterial.prototype = Object.create( ShaderMaterial.THREE$ShaderMaterial.prototype );
THREE$RawShaderMaterial.prototype.constructor = THREE$RawShaderMaterial;