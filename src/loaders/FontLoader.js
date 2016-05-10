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

		var scope = this;

		var loader = new XHRLoader( this.manager );
		loader.load( url, function ( text ) {

			var font = scope.parse( JSON.parse( text.substring( 65, text.length - 2 ) ) );

			if ( onLoad ) onLoad( font );

		}, onProgress, onError );

	},

	parse: function ( json ) {

		return new Font( json );

	}

};


export { FontLoader };