import { THREE } from '../Three';
import { THREE$ShaderMaterial } from './ShaderMaterial';

var THREE$RawShaderMaterial;

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE$RawShaderMaterial = function ( parameters ) {

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