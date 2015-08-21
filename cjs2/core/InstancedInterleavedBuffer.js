'use strict';

exports.THREE$InstancedInterleavedBuffer = THREE$InstancedInterleavedBuffer;

var InterleavedBuffer = require('./InterleavedBuffer');

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

function THREE$InstancedInterleavedBuffer ( array, stride, dynamic, meshPerAttribute ) {
	this.isInstancedInterleavedBuffer = true;

	InterleavedBuffer.THREE$InterleavedBuffer.call( this, array, stride, dynamic );

	this.meshPerAttribute = meshPerAttribute || 1;

};

THREE$InstancedInterleavedBuffer.prototype = Object.create( InterleavedBuffer.THREE$InterleavedBuffer.prototype );
THREE$InstancedInterleavedBuffer.prototype.constructor = THREE$InstancedInterleavedBuffer;

THREE$InstancedInterleavedBuffer.prototype.clone = function () {

	return new this.constructor( new this.array.constructor( this.array ), this.stride, this.dynamic, this.meshPerAttribute );

};