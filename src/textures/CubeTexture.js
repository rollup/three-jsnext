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
	this.flipY = false;

};

CubeTexture.prototype = Object.create( Texture.prototype );
CubeTexture.prototype.constructor = CubeTexture;

CubeTexture.prototype.copy = function ( source ) {

	Texture.prototype.copy.call( this, source );
	
	this.images = source.images;
	
	return this;

};

export { CubeTexture };