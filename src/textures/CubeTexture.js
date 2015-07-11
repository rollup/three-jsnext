import { THREE$Texture } from './Texture';
import { THREE$CubeReflectionMapping } from '../Three';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$CubeTexture ( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
	this.isCubeTexture = true;

	mapping = mapping !== undefined ? mapping : THREE$CubeReflectionMapping;
	
	THREE$Texture.call( this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.images = images;

};

THREE$CubeTexture.prototype = Object.create( THREE$Texture.prototype );
THREE$CubeTexture.prototype.constructor = THREE$CubeTexture;

THREE$CubeTexture.clone = function ( texture ) {

	if ( texture === undefined ) texture = new THREE$CubeTexture();

	THREE$Texture.prototype.clone.call( this, texture );

	texture.images = this.images;

	return texture;

};


export { THREE$CubeTexture };