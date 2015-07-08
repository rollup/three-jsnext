import { THREE, THREE$warn } from '../Three';

var THREE$Float64Attribute;
var THREE$Float32Attribute;
var THREE$Uint32Attribute;
var THREE$Int32Attribute;
var THREE$Uint16Attribute;
var THREE$Int16Attribute;
var THREE$Uint8ClampedAttribute;
var THREE$Uint8Attribute;
var THREE$Int8Attribute;
var THREE$BufferAttribute;

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE$BufferAttribute = function ( array, itemSize ) {

	this.array = array;
	this.itemSize = itemSize;

	this.needsUpdate = false;

};

THREE$BufferAttribute.prototype = {

	constructor: THREE$BufferAttribute,

	get length () {

		return this.array.length;

	},

	copyAt: function ( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( var i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	},

	set: function ( value, offset ) {

		if ( offset === undefined ) offset = 0;

		this.array.set( value, offset );

		return this;

	},

	setX: function ( index, x ) {

		this.array[ index * this.itemSize ] = x;

		return this;

	},

	setY: function ( index, y ) {

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	},

	setZ: function ( index, z ) {

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	},

	setXY: function ( index, x, y ) {

		index *= this.itemSize;

		this.array[ index     ] = x;
		this.array[ index + 1 ] = y;

		return this;

	},

	setXYZ: function ( index, x, y, z ) {

		index *= this.itemSize;

		this.array[ index     ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	},

	setXYZW: function ( index, x, y, z, w ) {

		index *= this.itemSize;

		this.array[ index     ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;
		this.array[ index + 3 ] = w;

		return this;

	},

	clone: function () {

		return new THREE$BufferAttribute( new this.array.constructor( this.array ), this.itemSize );

	}

};

//

THREE$Int8Attribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

THREE$Uint8Attribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

THREE$Uint8ClampedAttribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );


};

THREE$Int16Attribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

THREE$Uint16Attribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

THREE$Int32Attribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

THREE$Uint32Attribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

THREE$Float32Attribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

THREE$Float64Attribute = function ( data, itemSize ) {

	THREE$warn( 'THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};


export {
  THREE$Float64Attribute,
  THREE$Float32Attribute,
  THREE$Uint32Attribute,
  THREE$Int32Attribute,
  THREE$Uint16Attribute,
  THREE$Int16Attribute,
  THREE$Uint8ClampedAttribute,
  THREE$Uint8Attribute,
  THREE$Int8Attribute,
  THREE$BufferAttribute
};