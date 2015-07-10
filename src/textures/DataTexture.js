import { THREE } from '../Three';
import { THREE$Texture } from './Texture';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$DataTexture ( data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy ) {

	THREE$Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.image = { data: data, width: width, height: height };

};

THREE$DataTexture.prototype = Object.create( THREE$Texture.prototype );
THREE$DataTexture.prototype.constructor = THREE$DataTexture;

THREE$DataTexture.prototype.clone = function () {

	var texture = new THREE$DataTexture();

	THREE$Texture.prototype.clone.call( this, texture );

	return texture;

};


export { THREE$DataTexture };