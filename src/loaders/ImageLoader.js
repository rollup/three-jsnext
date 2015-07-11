import { THREE$Cache } from './Cache';
import { THREE$DefaultLoadingManager } from './LoadingManager';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$ImageLoader ( manager ) {
	this.isImageLoader = true;

	this.manager = ( manager !== undefined ) ? manager : THREE$DefaultLoadingManager;

};

THREE$ImageLoader.prototype = {

	constructor: THREE$ImageLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var cached = THREE$Cache.get( url );

		if ( cached !== undefined ) {

			onLoad( cached );
			return;

		}

		var image = document.createElement( 'img' );

		image.addEventListener( 'load', function ( event ) {

			THREE$Cache.add( url, this );

			if ( onLoad ) onLoad( this );
			
			scope.manager.itemEnd( url );

		}, false );

		if ( onProgress !== undefined ) {

			image.addEventListener( 'progress', function ( event ) {

				onProgress( event );

			}, false );

		}

		if ( onError !== undefined ) {

			image.addEventListener( 'error', function ( event ) {

				onError( event );

			}, false );

		}

		if ( this.crossOrigin !== undefined ) image.crossOrigin = this.crossOrigin;

		image.src = url;

		scope.manager.itemStart( url );

		return image;

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	}

}


export { THREE$ImageLoader };