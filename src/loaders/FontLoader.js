import { Font } from '../extras/core/Font';
import { XHRLoader } from './XHRLoader';
import { DefaultLoadingManager } from './LoadingManager';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function FontLoader ( manager ) {
	this.isFontLoader = true;

	this.manager = ( manager !== undefined ) ? manager : DefaultLoadingManager;

};

FontLoader.prototype = {

	constructor: FontLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var loader = new XHRLoader( this.manager );
		loader.load( url, function ( text ) {

			onLoad( new Font( JSON.parse( text.substring( 65, text.length - 2 ) ) ) );

		}, onProgress, onError );

	}

};


export { FontLoader };