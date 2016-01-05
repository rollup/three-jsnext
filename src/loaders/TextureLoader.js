import { ImageLoader } from './ImageLoader';
import { Texture } from '../textures/Texture';
import { DefaultLoadingManager } from './LoadingManager';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function TextureLoader ( manager ) {
	this.isTextureLoader = true;

	this.manager = ( manager !== undefined ) ? manager : DefaultLoadingManager;

};

TextureLoader.prototype = {

	constructor: TextureLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var texture = new Texture();

		var loader = new ImageLoader( this.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.setPath( this.path );
		loader.load( url, function ( image ) {

			texture.image = image;
			texture.needsUpdate = true;

			if ( onLoad !== undefined ) {

				onLoad( texture );

			}

		}, onProgress, onError );

		return texture;

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	setPath: function ( value ) {

		this.path = value;

	}

};


export { TextureLoader };