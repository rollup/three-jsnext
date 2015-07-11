import { THREE$Sphere } from '../math/Sphere';
import { THREE$Vector3 } from '../math/Vector3';
import { THREE$Geometry } from '../core/Geometry';
import { THREE$XHRLoader } from './XHRLoader';
import { THREE$DefaultLoadingManager } from './LoadingManager';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$GeometryLoader ( manager ) {
	this.isGeometryLoader = true;

	this.manager = ( manager !== undefined ) ? manager : THREE$DefaultLoadingManager;

};

THREE$GeometryLoader.prototype = {

	constructor: THREE$GeometryLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new THREE$XHRLoader();
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( text ) {

			onLoad( scope.parse( JSON.parse( text ) ) );

		}, onProgress, onError );

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	parse: function ( json ) {

		var geometry = new THREE$Geometry();

		geometry.indices = json.indices;
		geometry.vertices = json.vertices;
		geometry.normals = json.normals;
		geometry.uvs = json.uvs;

		var boundingSphere = json.boundingSphere;

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


export { THREE$GeometryLoader };