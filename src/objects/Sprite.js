import { Object3D } from '../core/Object3D';
import { Vector3 } from '../math/Vector3';
import { SpriteMaterial } from '../materials/SpriteMaterial';
import { BufferAttribute } from '../core/BufferAttribute';
import { BufferGeometry } from '../core/BufferGeometry';

var Particle;
var Sprite;

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

Sprite = ( function () {

	var indices = new Uint16Array( [ 0, 1, 2,  0, 2, 3 ] );
	var vertices = new Float32Array( [ - 0.5, - 0.5, 0,   0.5, - 0.5, 0,   0.5, 0.5, 0,   - 0.5, 0.5, 0 ] );
	var uvs = new Float32Array( [ 0, 0,   1, 0,   1, 1,   0, 1 ] );

	var geometry = new BufferGeometry();
	geometry.addAttribute( 'index', new BufferAttribute( indices, 1 ) );
	geometry.addAttribute( 'position', new BufferAttribute( vertices, 3 ) );
	geometry.addAttribute( 'uv', new BufferAttribute( uvs, 2 ) );

	return function ( material ) {

		Object3D.call( this );

		this.type = 'Sprite';

		this.geometry = geometry;
		this.material = ( material !== undefined ) ? material : new SpriteMaterial();

	};

} )();

Sprite.prototype = Object.create( Object3D.prototype );
Sprite.prototype.constructor = Sprite;

Sprite.prototype.raycast = ( function () {

	var matrixPosition = new Vector3();

	return function ( raycaster, intersects ) {

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

Sprite.prototype.clone = function ( object ) {

	if ( object === undefined ) object = new Sprite( this.material );

	Object3D.prototype.clone.call( this, object );

	return object;

};

Sprite.prototype.toJSON = function ( meta ) {

	var data = Object3D.prototype.toJSON.call( this, meta );

	// only serialize if not in meta materials cache
	if ( meta.materials[ this.material.uuid ] === undefined ) {
		meta.materials[ this.material.uuid ] = this.material.toJSON();
	}

	data.object.material = this.material.uuid;

	return data;

};

// Backwards compatibility

Particle = Sprite;


export { Particle, Sprite };