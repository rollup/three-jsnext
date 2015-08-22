import { Object3D } from '../core/Object3D';
import { BufferGeometry } from '../core/BufferGeometry';
import { Vector3 } from '../math/Vector3';
import { Ray } from '../math/Ray';
import { Matrix4 } from '../math/Matrix4';
import { PointCloudMaterial } from '../materials/PointCloudMaterial';
import { Geometry } from '../core/Geometry';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function PointCloud ( geometry, material ) {
	this.isPointCloud = true;

	Object3D.call( this );

	this.type = 'PointCloud';

	this.geometry = geometry !== undefined ? geometry : new Geometry();
	this.material = material !== undefined ? material : new PointCloudMaterial( { color: Math.random() * 0xffffff } );

};

PointCloud.prototype = Object.create( Object3D.prototype );
PointCloud.prototype.constructor = PointCloud;

PointCloud.prototype.raycast = ( function () {

	var inverseMatrix = new Matrix4();
	var ray = new Ray();

	return function ( raycaster, intersects ) {

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
		var position = new Vector3();

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
				var offsets = geometry.offsets;

				if ( offsets.length === 0 ) {

					offsets.push( {
						start: 0,
						count: indices.length,
						index: 0
					} );

				}

				for ( var oi = 0, ol = offsets.length; oi < ol; ++ oi ) {

					var offset = offsets[ oi ];

					var start = offset.start;
					var count = offset.count;
					var index = offset.index;

					for ( var i = start, il = start + count; i < il; i ++ ) {

						var a = index + indices[ i ];

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

PointCloud.prototype.clone = function ( object ) {

	if ( object === undefined ) object = new PointCloud( this.geometry, this.material );

	Object3D.prototype.clone.call( this, object );

	return object;

};

PointCloud.prototype.toJSON = function ( meta ) {

	var data = Object3D.prototype.toJSON.call( this, meta );

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

function ParticleSystem ( geometry, material ) {
	this.isParticleSystem = true;

	console.warn( 'THREE.ParticleSystem has been renamed to THREE.PointCloud.' );
	return new PointCloud( geometry, material );

};


export { ParticleSystem, PointCloud };