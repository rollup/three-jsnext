import { THREE$Texture } from './Texture';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$DataTexture ( data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy ) {
	this.isDataTexture = true;

	THREE$Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.image = { data: data, width: width, height: height };

};

THREE$DataTexture.prototype = Object.create( THREE$Texture.prototype );
THREE$DataTexture.prototype.constructor = THREE$DataTexture;

export { THREE$DataTexture };