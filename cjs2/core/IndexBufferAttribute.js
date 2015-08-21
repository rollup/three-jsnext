'use strict';

exports.THREE$IndexBufferAttribute = THREE$IndexBufferAttribute;

var BufferAttribute = require('./BufferAttribute');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$IndexBufferAttribute ( array, itemSize ) {
	this.isIndexBufferAttribute = true;

	BufferAttribute.THREE$BufferAttribute.call( this, array, itemSize );

};

THREE$IndexBufferAttribute.prototype = Object.create( BufferAttribute.THREE$BufferAttribute.prototype );
THREE$IndexBufferAttribute.prototype.constructor = THREE$IndexBufferAttribute;