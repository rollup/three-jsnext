import { THREE$ShaderMaterial } from './ShaderMaterial';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$RawShaderMaterial ( parameters ) {
	this.isRawShaderMaterial = true;

	THREE$ShaderMaterial.call( this, parameters );

	this.type = 'RawShaderMaterial';

};

THREE$RawShaderMaterial.prototype = Object.create( THREE$ShaderMaterial.prototype );
THREE$RawShaderMaterial.prototype.constructor = THREE$RawShaderMaterial;

THREE$RawShaderMaterial.prototype.clone = function () {

	var material = new THREE$RawShaderMaterial();

	THREE$ShaderMaterial.prototype.clone.call( this, material );

	return material;

};


export { THREE$RawShaderMaterial };