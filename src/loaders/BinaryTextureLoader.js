import { THREE$LinearFilter, THREE$LinearMipMapLinearFilter, THREE$ClampToEdgeWrapping } from '../Three';
import { THREE$XHRLoader } from './XHRLoader';
import { THREE$DataTexture } from '../textures/DataTexture';
import { THREE$DefaultLoadingManager } from './LoadingManager';

var THREE$DataTextureLoader;

/**
 * @author Nikos M. / https://github.com/foo123/
 *
 * Abstract Base class to load generic binary textures formats (rgbe, hdr, ...)
 */

THREE$DataTextureLoader = function THREE$BinaryTextureLoader ( manager ) {
	this.isBinaryTextureLoader = true;

	this.manager = ( manager !== undefined ) ? manager : THREE$DefaultLoadingManager;

	// override in sub classes
	this._parser = null;

};

THREE$BinaryTextureLoader.prototype = {

	constructor: THREE$BinaryTextureLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var texture = new THREE$DataTexture();

		var loader = new THREE$XHRLoader( this.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.setResponseType( 'arraybuffer' );

		loader.load( url, function ( buffer ) {

			var texData = scope._parser( buffer );

			if ( ! texData ) return;

			if ( undefined !== texData.image ) {

				texture.image = texData.image;

			} else if ( undefined !== texData.data ) {

				texture.image.width = texData.width;
				texture.image.height = texData.height;
				texture.image.data = texData.data;

			}

			texture.wrapS = undefined !== texData.wrapS ? texData.wrapS : THREE$ClampToEdgeWrapping;
			texture.wrapT = undefined !== texData.wrapT ? texData.wrapT : THREE$ClampToEdgeWrapping;

			texture.magFilter = undefined !== texData.magFilter ? texData.magFilter : THREE$LinearFilter;
			texture.minFilter = undefined !== texData.minFilter ? texData.minFilter : THREE$LinearMipMapLinearFilter;

			texture.anisotropy = undefined !== texData.anisotropy ? texData.anisotropy : 1;

			if ( undefined !== texData.format ) {

				texture.format = texData.format;

			}
			if ( undefined !== texData.type ) {

				texture.type = texData.type;

			}

			if ( undefined !== texData.mipmaps ) {

				texture.mipmaps = texData.mipmaps;

			}

			if ( 1 === texData.mipmapCount ) {

				texture.minFilter = THREE$LinearFilter;

			}

			texture.needsUpdate = true;

			if ( onLoad ) onLoad( texture, texData );

		}, onProgress, onError );


		return texture;

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	}

};


export { THREE$DataTextureLoader, THREE$BinaryTextureLoader };