import { Sphere } from '../math/Sphere';
import { Vector3 } from '../math/Vector3';
import { Geometry } from '../core/Geometry';
import { XHRLoader } from './XHRLoader';
import { DefaultLoadingManager } from './LoadingManager';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function GeometryLoader ( manager ) {
	this.isGeometryLoader = true;

	this.manager = ( manager !== undefined ) ? manager : DefaultLoadingManager;

};

GeometryLoader.prototype = {

	constructor: GeometryLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new XHRLoader();
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( text ) {

			onLoad( scope.parse( JSON.parse( text ) ) );

		}, onProgress, onError );

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	parse: function ( json ) {

		var geometry = new Geometry();

		geometry.indices = json.indices;
		geometry.vertices = json.vertices;
		geometry.normals = json.normals;
		geometry.uvs = json.uvs;

		var boundingSphere = json.boundingSphere;

		if ( boundingSphere !== undefined ) {

			var center = new Vector3();

			if ( boundingSphere.center !== undefined ) {

				center.fromArray( boundingSphere.center );

			}

			geometry.boundingSphere = new Sphere( center, boundingSphere.radius );

		}

		return geometry;

	}

};


export { GeometryLoader };