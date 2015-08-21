'use strict';

var Object3D = require('../core/Object3D');
var Vector3 = require('../math/Vector3');
var SpriteMaterial = require('../materials/SpriteMaterial');
var BufferAttribute = require('../core/BufferAttribute');
var IndexBufferAttribute = require('../core/IndexBufferAttribute');
var BufferGeometry = require('../core/BufferGeometry');

var THREE$Particle;
var THREE$Sprite;

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

THREE$Sprite = ( function () {

	var indices = new Uint16Array( [ 0, 1, 2,  0, 2, 3 ] );
	var vertices = new Float32Array( [ - 0.5, - 0.5, 0,   0.5, - 0.5, 0,   0.5, 0.5, 0,   - 0.5, 0.5, 0 ] );
	var uvs = new Float32Array( [ 0, 0,   1, 0,   1, 1,   0, 1 ] );

	var geometry = new BufferGeometry.THREE$BufferGeometry();
	geometry.addAttribute( 'index', new IndexBufferAttribute.THREE$IndexBufferAttribute( indices, 1 ) );
	geometry.addAttribute( 'position', new BufferAttribute.THREE$BufferAttribute( vertices, 3 ) );
	geometry.addAttribute( 'uv', new BufferAttribute.THREE$BufferAttribute( uvs, 2 ) );

	return function Sprite( material ) {

		Object3D.THREE$Object3D.call( this );

		this.type = 'Sprite';

		this.geometry = geometry;
		this.material = ( material !== undefined ) ? material : new SpriteMaterial.THREE$SpriteMaterial();

	};

} )();

THREE$Sprite.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$Sprite.prototype.constructor = THREE$Sprite;

THREE$Sprite.prototype.raycast = ( function () {

	var matrixPosition = new Vector3.THREE$Vector3();

	return function raycast( raycaster, intersects ) {

		matrixPosition.setFromMatrixPosition( this.matrixWorld );

		var distanceSq = raycaster.ray.distanceSqToPoint( matrixPosition );
		var guessSizeSq = this.scale.x * this.scale.y;

		if ( distanceSq > guessSizeSq ) {

			return;

		}

		intersects.push( {

			distance: Math.sqrt( distanceSq ),
			point: this.position,
			face: null,
			object: this

		} );

	};

}() );

THREE$Sprite.prototype.clone = function () {

	return new this.constructor( this.material ).copy( this );

};

THREE$Sprite.prototype.toJSON = function ( meta ) {

	var data = Object3D.THREE$Object3D.prototype.toJSON.call( this, meta );

	// only serialize if not in meta materials cache
	if ( meta.materials[ this.material.uuid ] === undefined ) {

		meta.materials[ this.material.uuid ] = this.material.toJSON();

	}

	data.object.material = this.material.uuid;

	return data;

};

// Backwards compatibility

THREE$Particle = THREE$Sprite;

exports.THREE$Particle = THREE$Particle;
exports.THREE$Sprite = THREE$Sprite;