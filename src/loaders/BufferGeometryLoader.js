import { THREE } from '../Three';
import { THREE$Sphere } from '../math/Sphere';
import { THREE$Vector3 } from '../math/Vector3';
import { THREE$BufferAttribute } from '../core/BufferAttribute';
import { THREE$BufferGeometry } from '../core/BufferGeometry';
import { THREE$XHRLoader } from './XHRLoader';
import { THREE$DefaultLoadingManager } from './LoadingManager';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$BufferGeometryLoader ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE$DefaultLoadingManager;

};

THREE$BufferGeometryLoader.prototype = {

	constructor: THREE$BufferGeometryLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new THREE$XHRLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( text ) {

			onLoad( scope.parse( JSON.parse( text ) ) );

		}, onProgress, onError );

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	parse: function ( json ) {

		var geometry = new THREE$BufferGeometry();

		var attributes = json.data.attributes;

		for ( var key in attributes ) {

			var attribute = attributes[ key ];
			var typedArray = new self[ attribute.type ]( attribute.array );

			geometry.addAttribute( key, new THREE$BufferAttribute( typedArray, attribute.itemSize ) );

		}

		var offsets = json.data.offsets;

		if ( offsets !== undefined ) {

			geometry.offsets = JSON.parse( JSON.stringify( offsets ) );

		}

		var boundingSphere = json.data.boundingSphere;

		if ( boundingSphere !== undefined ) {

			var center = new THREE$Vector3();

			if ( boundingSphere.center !== undefined ) {

				center.fromArray( boundingSphere.center );

			}

			geometry.boundingSphere = new THREE$Sphere( center, boundingSphere.radius );

		}

		return geometry;

	}

};


export { THREE$BufferGeometryLoader };