'use strict';

exports.THREE$ImageLoader = THREE$ImageLoader;

var Cache = require('./Cache');
var LoadingManager = require('./LoadingManager');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$ImageLoader ( manager ) {
	this.isImageLoader = true;

	this.manager = ( manager !== undefined ) ? manager : LoadingManager.THREE$DefaultLoadingManager;

};

THREE$ImageLoader.prototype = {

	constructor: THREE$ImageLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var cached = Cache.THREE$Cache.get( url );

		if ( cached !== undefined ) {

			if ( onLoad ) {

				setTimeout( function () {

					onLoad( cached );

				}, 0 );

			}

			return cached;

		}

		var image = document.createElement( 'img' );

		image.addEventListener( 'load', function ( event ) {

			Cache.THREE$Cache.add( url, this );

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

		scope.manager.itemStart( url );

		image.src = url;

		return image;

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	}

};