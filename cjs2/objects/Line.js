'use strict';

exports.THREE$Line = THREE$Line;

var Object3D = require('../core/Object3D');
var Geometry = require('../core/Geometry');
var BufferGeometry = require('../core/BufferGeometry');
var LineSegments = require('./LineSegments');
var Vector3 = require('../math/Vector3');
var Sphere = require('../math/Sphere');
var Ray = require('../math/Ray');
var Matrix4 = require('../math/Matrix4');
var LineBasicMaterial = require('../materials/LineBasicMaterial');

var THREE$LinePieces;
var THREE$LineStrip;

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$Line ( geometry, material, mode ) {
	this.isLine = true;

	if ( mode === 1 ) {

		console.error( 'THREE.Line: THREE.LinePieces mode has been removed. Use THREE.LineSegments instead.' );

	}

	Object3D.THREE$Object3D.call( this );

	this.type = 'Line';

	this.geometry = geometry !== undefined ? geometry : new Geometry.THREE$Geometry();
	this.material = material !== undefined ? material : new LineBasicMaterial.THREE$LineBasicMaterial( { color: Math.random() * 0xffffff } );

};

THREE$Line.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$Line.prototype.constructor = THREE$Line;

THREE$Line.prototype.raycast = ( function () {

	var inverseMatrix = new Matrix4.THREE$Matrix4();
	var ray = new Ray.THREE$Ray();
	var sphere = new Sphere.THREE$Sphere();

	return function raycast( raycaster, intersects ) {

		var precision = raycaster.linePrecision;
		var precisionSq = precision * precision;

		var geometry = this.geometry;

		if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

		// Checking boundingSphere distance to ray

		sphere.copy( geometry.boundingSphere );
		sphere.applyMatrix4( this.matrixWorld );

		if ( raycaster.ray.isIntersectionSphere( sphere ) === false ) {

			return;

		}

		inverseMatrix.getInverse( this.matrixWorld );
		ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

		var vStart = new Vector3.THREE$Vector3();
		var vEnd = new Vector3.THREE$Vector3();
		var interSegment = new Vector3.THREE$Vector3();
		var interRay = new Vector3.THREE$Vector3();
		var step = (this && this.isLineSegments) ? 2 : 1;

		if ( (geometry && geometry.isBufferGeometry) ) {

			var attributes = geometry.attributes;

			if ( attributes.index !== undefined ) {

				var indices = attributes.index.array;
				var positions = attributes.position.array;
				var offsets = geometry.drawcalls;

				if ( offsets.length === 0 ) {

					geometry.addDrawCall( 0, indices.length );

				}

				for ( var oi = 0; oi < offsets.length; oi ++ ) {

					var offset = offsets[ oi ];

					var start = offset.start;
					var count = offset.count;

					for ( var i = start; i < start + count - 1; i += step ) {

						var a = indices[ i ];
						var b = indices[ i + 1 ];

						vStart.fromArray( positions, a * 3 );
						vEnd.fromArray( positions, b * 3 );

						var distSq = ray.distanceSqToSegment( vStart, vEnd, interRay, interSegment );

						if ( distSq > precisionSq ) continue;

						var distance = ray.origin.distanceTo( interRay );

						if ( distance < raycaster.near || distance > raycaster.far ) continue;

						intersects.push( {

							distance: distance,
							// What do we want? intersection point on the ray or on the segment??
							// point: raycaster.ray.at( distance ),
							point: interSegment.clone().applyMatrix4( this.matrixWorld ),
							index: i,
							offsetIndex: oi,
							face: null,
							faceIndex: null,
							object: this

						} );

					}

				}

			} else {

				var positions = attributes.position.array;

				for ( var i = 0; i < positions.length / 3 - 1; i += step ) {

					vStart.fromArray( positions, 3 * i );
					vEnd.fromArray( positions, 3 * i + 3 );

					var distSq = ray.distanceSqToSegment( vStart, vEnd, interRay, interSegment );

					if ( distSq > precisionSq ) continue;

					var distance = ray.origin.distanceTo( interRay );

					if ( distance < raycaster.near || distance > raycaster.far ) continue;

					intersects.push( {

						distance: distance,
						// What do we want? intersection point on the ray or on the segment??
						// point: raycaster.ray.at( distance ),
						point: interSegment.clone().applyMatrix4( this.matrixWorld ),
						index: i,
						face: null,
						faceIndex: null,
						object: this

					} );

				}

			}

		} else if ( (geometry && geometry.isGeometry) ) {

			var vertices = geometry.vertices;
			var nbVertices = vertices.length;

			for ( var i = 0; i < nbVertices - 1; i += step ) {

				var distSq = ray.distanceSqToSegment( vertices[ i ], vertices[ i + 1 ], interRay, interSegment );

				if ( distSq > precisionSq ) continue;

				var distance = ray.origin.distanceTo( interRay );

				if ( distance < raycaster.near || distance > raycaster.far ) continue;

				intersects.push( {

					distance: distance,
					// What do we want? intersection point on the ray or on the segment??
					// point: raycaster.ray.at( distance ),
					point: interSegment.clone().applyMatrix4( this.matrixWorld ),
					index: i,
					face: null,
					faceIndex: null,
					object: this

				} );

			}

		}

	};

}() );

THREE$Line.prototype.clone = function () {

	return new this.constructor( this.geometry, this.material ).copy( this );

};

THREE$Line.prototype.toJSON = function ( meta ) {

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

// DEPRECATED

THREE$LineStrip = 0;
THREE$LinePieces = 1;

exports.THREE$LinePieces = THREE$LinePieces;
exports.THREE$LineStrip = THREE$LineStrip;