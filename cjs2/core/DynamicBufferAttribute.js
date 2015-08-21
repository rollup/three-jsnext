'use strict';

exports.THREE$DynamicBufferAttribute = THREE$DynamicBufferAttribute;

var BufferAttribute = require('./BufferAttribute');

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$DynamicBufferAttribute ( array, itemSize ) {
	this.isDynamicBufferAttribute = true;

	BufferAttribute.THREE$BufferAttribute.call( this, array, itemSize );

	this.updateRange = { offset: 0, count: - 1 };

};

THREE$DynamicBufferAttribute.prototype = Object.create( BufferAttribute.THREE$BufferAttribute.prototype );
THREE$DynamicBufferAttribute.prototype.constructor = THREE$DynamicBufferAttribute;