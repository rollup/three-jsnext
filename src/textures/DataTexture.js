import { Texture } from './Texture';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function DataTexture ( data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy ) {
	this.isDataTexture = true;

	Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.image = { data: data, width: width, height: height };

};

DataTexture.prototype = Object.create( Texture.prototype );
DataTexture.prototype.constructor = DataTexture;

DataTexture.prototype.clone = function () {

	var texture = new DataTexture();

	Texture.prototype.clone.call( this, texture );

	return texture;

};


export { DataTexture };