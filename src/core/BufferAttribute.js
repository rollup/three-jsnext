import { THREE, THREE$warn } from '../Three';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$BufferAttribute ( array, itemSize ) {

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

function THREE$Int8Attribute ( data, itemSize ) {

	THREE$warn( 'THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

function THREE$Uint8Attribute ( data, itemSize ) {

	THREE$warn( 'THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

function THREE$Uint8ClampedAttribute ( data, itemSize ) {

	THREE$warn( 'THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );


};

function THREE$Int16Attribute ( data, itemSize ) {

	THREE$warn( 'THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

function THREE$Uint16Attribute ( data, itemSize ) {

	THREE$warn( 'THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

function THREE$Int32Attribute ( data, itemSize ) {

	THREE$warn( 'THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

function THREE$Uint32Attribute ( data, itemSize ) {

	THREE$warn( 'THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

function THREE$Float32Attribute ( data, itemSize ) {

	THREE$warn( 'THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.' );
	return new THREE$BufferAttribute( data, itemSize );

};

function THREE$Float64Attribute ( data, itemSize ) {

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