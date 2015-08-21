'use strict';

exports.THREE$ParticleSystem = THREE$ParticleSystem;
exports.THREE$PointCloud = THREE$PointCloud;

var Object3D = require('../core/Object3D');
var BufferGeometry = require('../core/BufferGeometry');
var Vector3 = require('../math/Vector3');
var Ray = require('../math/Ray');
var Matrix4 = require('../math/Matrix4');
var PointCloudMaterial = require('../materials/PointCloudMaterial');
var Geometry = require('../core/Geometry');

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$PointCloud ( geometry, material ) {
	this.isPointCloud = true;

	Object3D.THREE$Object3D.call( this );

	this.type = 'PointCloud';

	this.geometry = geometry !== undefined ? geometry : new Geometry.THREE$Geometry();
	this.material = material !== undefined ? material : new PointCloudMaterial.THREE$PointCloudMaterial( { color: Math.random() * 0xffffff } );

};

THREE$PointCloud.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$PointCloud.prototype.constructor = THREE$PointCloud;

THREE$PointCloud.prototype.raycast = ( function () {

	var inverseMatrix = new Matrix4.THREE$Matrix4();
	var ray = new Ray.THREE$Ray();

	return function raycast( raycaster, intersects ) {

		var object = this;
		var geometry = object.geometry;
		var threshold = raycaster.params.PointCloud.threshold;

		inverseMatrix.getInverse( this.matrixWorld );
		ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

		if ( geometry.boundingBox !== null ) {

			if ( ray.isIntersectionBox( geometry.boundingBox ) === false ) {

				return;

			}

		}

		var localThreshold = threshold / ( ( this.scale.x + this.scale.y + this.scale.z ) / 3 );
		var localThresholdSq = localThreshold * localThreshold;
		var position = new Vector3.THREE$Vector3();

		var testPoint = function ( point, index ) {

			var rayPointDistanceSq = ray.distanceSqToPoint( point );

			if ( rayPointDistanceSq < localThresholdSq ) {

				var intersectPoint = ray.closestPointToPoint( point );
				intersectPoint.applyMatrix4( object.matrixWorld );

				var distance = raycaster.ray.origin.distanceTo( intersectPoint );

				if ( distance < raycaster.near || distance > raycaster.far ) return;

				intersects.push( {

					distance: distance,
					distanceToRay: Math.sqrt( rayPointDistanceSq ),
					point: intersectPoint.clone(),
					index: index,
					face: null,
					object: object

				} );

			}

		};

		if ( (geometry && geometry.isBufferGeometry) ) {

			var attributes = geometry.attributes;
			var positions = attributes.position.array;

			if ( attributes.index !== undefined ) {

				var indices = attributes.index.array;
				var offsets = geometry.drawcalls;

				if ( offsets.length === 0 ) {

					geometry.addDrawCall( 0, indices.length );

				}

				for ( var oi = 0, ol = offsets.length; oi < ol; ++ oi ) {

					var offset = offsets[ oi ];

					var start = offset.start;
					var count = offset.count;

					for ( var i = start, il = start + count; i < il; i ++ ) {

						var a = indices[ i ];

						position.fromArray( positions, a * 3 );

						testPoint( position, a );

					}

				}

			} else {

				for ( var i = 0, l = positions.length / 3; i < l; i ++ ) {

					position.fromArray( positions, i * 3 );

					testPoint( position, i );

				}

			}

		} else {

			var vertices = geometry.vertices;

			for ( var i = 0, l = vertices.length; i < l; i ++ ) {

				testPoint( vertices[ i ], i );

			}

		}

	};

}() );

THREE$PointCloud.prototype.clone = function () {

	return new this.constructor( this.geometry, this.material ).copy( this );

};

THREE$PointCloud.prototype.toJSON = function ( meta ) {

	var data = Object3D.THREE$Object3D.prototype.toJSON.call( this, meta );

	// only serialize if not in meta geometries cache
	if ( meta.geometries[ this.geometry.uuid ] === undefined ) {

		meta.geometries[ this.geometry.uuid ] = this.geometry.toJSON();

	}

	// only serialize if not in meta materials cache
	if ( meta.materials[ this.material.uuid ] === undefined ) {

		meta.materials[ this.material.uuid ] = this.material.toJSON();

	}

	data.object.geometry = this.geometry.uuid;
	data.object.material = this.material.uuid;

	return data;

};

// Backwards compatibility

function THREE$ParticleSystem ( geometry, material ) {
	this.isParticleSystem = true;

	console.warn( 'THREE.ParticleSystem has been renamed to THREE.PointCloud.' );
	return new THREE$PointCloud( geometry, material );

};