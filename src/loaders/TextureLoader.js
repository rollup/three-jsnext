import { THREE } from '../Three';
import { THREE$Texture } from '../textures/Texture';
import { THREE$ImageLoader } from './ImageLoader';
import { THREE$DefaultLoadingManager } from './LoadingManager';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$TextureLoader ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE$DefaultLoadingManager;

};

THREE$TextureLoader.prototype = {

	constructor: THREE$TextureLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new THREE$ImageLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( image ) {

			var texture = new THREE$Texture( image );
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


export { THREE$TextureLoader };