import { Texture } from './Texture';
import { CubeReflectionMapping } from '../Three';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function CubeTexture ( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
	this.isCubeTexture = true;

	mapping = mapping !== undefined ? mapping : CubeReflectionMapping;
	
	Texture.call( this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.images = images;

};

CubeTexture.prototype = Object.create( Texture.prototype );
CubeTexture.prototype.constructor = CubeTexture;

CubeTexture.clone = function ( texture ) {

	if ( texture === undefined ) texture = new CubeTexture();

	Texture.prototype.clone.call( this, texture );

	texture.images = this.images;

	return texture;

};


export { CubeTexture };