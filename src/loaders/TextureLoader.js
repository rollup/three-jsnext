import { Texture } from '../textures/Texture';
import { ImageLoader } from './ImageLoader';
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

		var scope = this;

		var loader = new ImageLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( image ) {

			var texture = new Texture( image );
			texture.needsUpdate = true;

			if ( onLoad !== undefined ) {

				onLoad( texture );

			}

		}, onProgress, onError );

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	}

};


export { TextureLoader };