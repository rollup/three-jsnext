'use strict';

exports.THREE$TextureLoader = THREE$TextureLoader;

var Texture = require('../textures/Texture');
var ImageLoader = require('./ImageLoader');
var LoadingManager = require('./LoadingManager');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$TextureLoader ( manager ) {
	this.isTextureLoader = true;

	this.manager = ( manager !== undefined ) ? manager : LoadingManager.THREE$DefaultLoadingManager;

};

THREE$TextureLoader.prototype = {

	constructor: THREE$TextureLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new ImageLoader.THREE$ImageLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( image ) {

			var texture = new Texture.THREE$Texture( image );
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