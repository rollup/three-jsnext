import { BufferAttribute } from './BufferAttribute';

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 * @author mrdoob / http://mrdoob.com/
 */

function DynamicBufferAttribute ( array, itemSize ) {
	this.isDynamicBufferAttribute = true;

	BufferAttribute.call( this, array, itemSize );

	this.updateRange = { offset: 0, count: -1 };

};

DynamicBufferAttribute.prototype = Object.create( BufferAttribute.prototype );
DynamicBufferAttribute.prototype.constructor = DynamicBufferAttribute;

DynamicBufferAttribute.prototype.clone = function () {

	return new DynamicBufferAttribute( new this.array.constructor( this.array ), this.itemSize );

};


export { DynamicBufferAttribute };