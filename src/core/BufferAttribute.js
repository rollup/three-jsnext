import { THREE$Vector4 } from '../math/Vector4';
import { THREE$Vector3 } from '../math/Vector3';
import { THREE$Vector2 } from '../math/Vector2';
import { THREE$Color } from '../math/Color';
import { THREE$Math } from '../math/Math';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$BufferAttribute ( array, itemSize ) {
	this.isBufferAttribute = true;

	this.uuid = THREE$Math.generateUUID();

	this.array = array;
	this.itemSize = itemSize;

	this.needsUpdate = false;

};

THREE$BufferAttribute.prototype = {

	constructor: THREE$BufferAttribute,

	get length () {

		console.warn( 'THREE.BufferAttribute: .length has been deprecated. Please use .count.' );
		return this.array.length;

	},

	get count() {

		return this.array.length / this.itemSize;

	},

	copyAt: function ( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( var i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	},

	copyArray: function ( array ) {

		this.array.set( array );

		return this;

	},

	copyColorsArray: function ( colors ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = colors.length; i < l; i ++ ) {

			var color = colors[ i ];

			if ( color === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyColorsArray(): color is undefined', i );
				color = new THREE$Color();

			}

			array[ offset ++ ] = color.r;
			array[ offset ++ ] = color.g;
			array[ offset ++ ] = color.b;

		}

		return this;

	},

	copyIndicesArray: function ( indices ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = indices.length; i < l; i ++ ) {

			var index = indices[ i ];

			array[ offset ++ ] = index.a;
			array[ offset ++ ] = index.b;
			array[ offset ++ ] = index.c;

		}

		return this;

	},

	copyVector2sArray: function ( vectors ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = vectors.length; i < l; i ++ ) {

			var vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector2sArray(): vector is undefined', i );
				vector = new THREE$Vector2();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;

		}

		return this;

	},

	copyVector3sArray: function ( vectors ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = vectors.length; i < l; i ++ ) {

			var vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector3sArray(): vector is undefined', i );
				vector = new THREE$Vector3();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;
			array[ offset ++ ] = vector.z;

		}

		return this;

	},

	copyVector4sArray: function ( vectors ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = vectors.length; i < l; i ++ ) {

			var vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector4sArray(): vector is undefined', i );
				vector = new THREE$Vector4();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;
			array[ offset ++ ] = vector.z;
			array[ offset ++ ] = vector.w;

		}

		return this;

	},

	set: function ( value, offset ) {

		if ( offset === undefined ) offset = 0;

		this.array.set( value, offset );

		return this;

	},

	getX: function ( index ) {

		return this.array[ index * this.itemSize ];

	},

	setX: function ( index, x ) {

		this.array[ index * this.itemSize ] = x;

		return this;

	},

	getY: function ( index ) {

		return this.array[ index * this.itemSize + 1 ];

	},

	setY: function ( index, y ) {

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	},

	getZ: function ( index ) {

		return this.array[ index * this.itemSize + 2 ];

	},

	setZ: function ( index, z ) {

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	},

	getW: function ( index ) {

		return this.array[ index * this.itemSize + 3 ];

	},

	setW: function ( index, w ) {

		this.array[ index * this.itemSize + 3 ] = w;

		return this;

	},

	setXY: function ( index, x, y ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;

		return this;

	},

	setXYZ: function ( index, x, y, z ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	},

	setXYZW: function ( index, x, y, z, w ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
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

function THREE$Int8Attribute ( array, itemSize ) {
	this.isInt8Attribute = true;

	return new THREE$BufferAttribute( new Int8Array( array ), itemSize );

};

function THREE$Uint8Attribute ( array, itemSize ) {
	this.isUint8Attribute = true;

	return new THREE$BufferAttribute( new Uint8Array( array ), itemSize );

};

function THREE$Uint8ClampedAttribute ( array, itemSize ) {
	this.isUint8ClampedAttribute = true;

	return new THREE$BufferAttribute( new Uint8ClampedArray( array ), itemSize );

};

function THREE$Int16Attribute ( array, itemSize ) {
	this.isInt16Attribute = true;

	return new THREE$BufferAttribute( new Int16Array( array ), itemSize );

};

function THREE$Uint16Attribute ( array, itemSize ) {
	this.isUint16Attribute = true;

	return new THREE$BufferAttribute( new Uint16Array( array ), itemSize );

};

function THREE$Int32Attribute ( array, itemSize ) {
	this.isInt32Attribute = true;

	return new THREE$BufferAttribute( new Int32Array( array ), itemSize );

};

function THREE$Uint32Attribute ( array, itemSize ) {
	this.isUint32Attribute = true;

	return new THREE$BufferAttribute( new Uint32Array( array ), itemSize );

};

function THREE$Float32Attribute ( array, itemSize ) {
	this.isFloat32Attribute = true;

	return new THREE$BufferAttribute( new Float32Array( array ), itemSize );

};

function THREE$Float64Attribute ( array, itemSize ) {
	this.isFloat64Attribute = true;

	return new THREE$BufferAttribute( new Float64Array( array ), itemSize );

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