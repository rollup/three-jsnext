import { InterleavedBuffer } from './InterleavedBuffer';

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

function InstancedInterleavedBuffer ( array, stride, dynamic, meshPerAttribute ) {
	this.isInstancedInterleavedBuffer = true;

	InterleavedBuffer.call( this, array, stride, dynamic );

	this.meshPerAttribute = meshPerAttribute || 1;

};

InstancedInterleavedBuffer.prototype = Object.create( InterleavedBuffer.prototype );
InstancedInterleavedBuffer.prototype.constructor = InstancedInterleavedBuffer;

InstancedInterleavedBuffer.prototype.clone = function () {

	return new InstancedInterleavedBuffer( new this.array.constructor( this.array ), this.stride, this.dynamic, this.meshPerAttribute );

};


export { InstancedInterleavedBuffer };