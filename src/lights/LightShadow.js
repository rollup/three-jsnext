import { Vector2 } from '../math/Vector2';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function LightShadow ( camera ) {
	this.isLightShadow = true;

	this.camera = camera;

	this.bias = 0;
	this.darkness = 1;

	this.mapSize = new Vector2( 512, 512 );

	this.map = null;
	this.matrix = null;

};

LightShadow.prototype = {

	constructor: LightShadow,

	copy: function ( source ) {

		this.camera = source.camera.clone();

		this.bias = source.bias;
		this.darkness = source.darkness;

		this.mapSize.copy( source.mapSize );

		return this;

	},

	clone: function () {

		return new this.constructor().copy( this );

	}

};


export { LightShadow };