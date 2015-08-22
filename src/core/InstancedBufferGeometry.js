import { EventDispatcher } from './EventDispatcher';
import { BufferGeometry } from './BufferGeometry';

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

function InstancedBufferGeometry () {
	this.isInstancedBufferGeometry = true;

	BufferGeometry.call( this );

	this.type = 'InstancedBufferGeometry';
	this.maxInstancedCount = undefined;

};

InstancedBufferGeometry.prototype = Object.create( BufferGeometry.prototype );
InstancedBufferGeometry.prototype.constructor = InstancedBufferGeometry;

InstancedBufferGeometry.prototype.addDrawCall = function ( start, count, indexOffset, instances ) {

	this.drawcalls.push( {

		start: start,
		count: count,
		index: indexOffset !== undefined ? indexOffset : 0,
		instances: instances

	} );

},

InstancedBufferGeometry.prototype.clone = function () {

	var geometry = new InstancedBufferGeometry();

	for ( var attr in this.attributes ) {

		var sourceAttr = this.attributes[attr];
		geometry.addAttribute( attr, sourceAttr.clone() );

	}

	for ( var i = 0, il = this.offsets.length; i < il; i++ ) {

		var offset = this.offsets[i];

		geometry.offsets.push( {

			start: offset.start,
			index: offset.index,
			count: offset.count,
			instances: offset.instances

		} );

	}

	return geometry;

};

EventDispatcher.prototype.apply( InstancedBufferGeometry.prototype );


export { InstancedBufferGeometry };