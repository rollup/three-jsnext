import { THREE$DynamicBufferAttribute } from './DynamicBufferAttribute';

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

function THREE$InstancedBufferAttribute (array, itemSize, meshPerAttribute, dynamic) {
	this.isInstancedBufferAttribute = true;

	THREE$DynamicBufferAttribute.call( this, array, itemSize );

	this.dynamic = dynamic || false;
	this.meshPerAttribute = meshPerAttribute || 1;

};

THREE$InstancedBufferAttribute.prototype = Object.create( THREE$DynamicBufferAttribute.prototype );
THREE$InstancedBufferAttribute.prototype.constructor = THREE$InstancedBufferAttribute;

THREE$InstancedBufferAttribute.prototype.clone = function () {

	return new THREE$InstancedBufferAttribute( new this.array.constructor( this.array ), this.itemSize, this.meshPerAttribute, this.dynamic );

};


export { THREE$InstancedBufferAttribute };