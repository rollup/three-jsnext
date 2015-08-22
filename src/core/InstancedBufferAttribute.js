import { DynamicBufferAttribute } from './DynamicBufferAttribute';

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

function InstancedBufferAttribute (array, itemSize, meshPerAttribute, dynamic) {
	this.isInstancedBufferAttribute = true;

	DynamicBufferAttribute.call( this, array, itemSize );

	this.dynamic = dynamic || false;
	this.meshPerAttribute = meshPerAttribute || 1;

};

InstancedBufferAttribute.prototype = Object.create( DynamicBufferAttribute.prototype );
InstancedBufferAttribute.prototype.constructor = InstancedBufferAttribute;

InstancedBufferAttribute.prototype.clone = function () {

	return new InstancedBufferAttribute( new this.array.constructor( this.array ), this.itemSize, this.meshPerAttribute, this.dynamic );

};


export { InstancedBufferAttribute };