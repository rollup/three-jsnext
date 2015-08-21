import { THREE$BufferAttribute } from './BufferAttribute';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$IndexBufferAttribute ( array, itemSize ) {
	this.isIndexBufferAttribute = true;

	THREE$BufferAttribute.call( this, array, itemSize );

};

THREE$IndexBufferAttribute.prototype = Object.create( THREE$BufferAttribute.prototype );
THREE$IndexBufferAttribute.prototype.constructor = THREE$IndexBufferAttribute;


export { THREE$IndexBufferAttribute };