(function () { 'use strict';

  var THREE$RGBA_PVRTC_2BPPV1_Format;
  var THREE$RGBA_PVRTC_4BPPV1_Format;
  var THREE$RGB_PVRTC_2BPPV1_Format;
  var THREE$RGB_PVRTC_4BPPV1_Format;
  var THREE$RGBA_S3TC_DXT5_Format;
  var THREE$RGBA_S3TC_DXT3_Format;
  var THREE$RGBA_S3TC_DXT1_Format;
  var THREE$RGB_S3TC_DXT1_Format;

  var THREE$LuminanceAlphaFormat;
  var THREE$LuminanceFormat;
  var THREE$RGBAFormat;
  var THREE$RGBFormat;
  var THREE$AlphaFormat;
  var THREE$UnsignedShort565Type;
  var THREE$UnsignedShort5551Type;
  var THREE$UnsignedShort4444Type;
  var THREE$HalfFloatType;
  var THREE$FloatType;
  var THREE$UnsignedIntType;
  var THREE$IntType;
  var THREE$UnsignedShortType;
  var THREE$ShortType;
  var THREE$ByteType;
  var THREE$UnsignedByteType;
  var THREE$LinearMipMapLinearFilter;
  var THREE$LinearMipMapNearestFilter;
  var THREE$LinearFilter;
  var THREE$NearestMipMapLinearFilter;
  var THREE$NearestMipMapNearestFilter;
  var THREE$NearestFilter;
  var THREE$MirroredRepeatWrapping;
  var THREE$ClampToEdgeWrapping;
  var THREE$RepeatWrapping;
  var THREE$SphericalReflectionMapping;
  var THREE$EquirectangularRefractionMapping;
  var THREE$EquirectangularReflectionMapping;
  var THREE$CubeRefractionMapping;
  var THREE$CubeReflectionMapping;
  var THREE$UVMapping;
  var THREE$AddOperation;
  var THREE$MixOperation;
  var THREE$MultiplyOperation;
  var THREE$SrcAlphaSaturateFactor;
  var THREE$OneMinusDstColorFactor;
  var THREE$DstColorFactor;
  var THREE$OneMinusDstAlphaFactor;
  var THREE$DstAlphaFactor;
  var THREE$OneMinusSrcAlphaFactor;
  var THREE$SrcAlphaFactor;
  var THREE$OneMinusSrcColorFactor;
  var THREE$SrcColorFactor;
  var THREE$OneFactor;
  var THREE$ZeroFactor;
  var THREE$MaxEquation;
  var THREE$MinEquation;
  var THREE$ReverseSubtractEquation;
  var THREE$SubtractEquation;
  var THREE$AddEquation;
  var THREE$CustomBlending;
  var THREE$MultiplyBlending;
  var THREE$SubtractiveBlending;
  var THREE$AdditiveBlending;
  var THREE$NormalBlending;
  var THREE$NoBlending;
  var THREE$VertexColors;
  var THREE$FaceColors;
  var THREE$NoColors;
  var THREE$SmoothShading;
  var THREE$FlatShading;

  var THREE$DoubleSide;
  var THREE$BackSide;
  var THREE$FrontSide;
  var THREE$PCFSoftShadowMap;
  var THREE$PCFShadowMap;

  var THREE$FrontFaceDirectionCW;

  var THREE$CullFaceFront;
  var THREE$CullFaceBack;
  var THREE$CullFaceNone;

  function THREE$warn() { console.warn.apply( console, arguments ); }
  function THREE$error() { console.error.apply( console, arguments ); }


  // GL STATE CONSTANTS

  THREE$CullFaceNone = 0;
  THREE$CullFaceBack = 1;
  THREE$CullFaceFront = 2;

  THREE$FrontFaceDirectionCW = 0;

  THREE$PCFShadowMap = 1;
  THREE$PCFSoftShadowMap = 2;


  // MATERIAL CONSTANTS

  // side

  THREE$FrontSide = 0;
  THREE$BackSide = 1;
  THREE$DoubleSide = 2;

  THREE$FlatShading = 1;
  THREE$SmoothShading = 2;


  // colors

  THREE$NoColors = 0;
  THREE$FaceColors = 1;
  THREE$VertexColors = 2;


  // blending modes

  THREE$NoBlending = 0;
  THREE$NormalBlending = 1;
  THREE$AdditiveBlending = 2;
  THREE$SubtractiveBlending = 3;
  THREE$MultiplyBlending = 4;
  THREE$CustomBlending = 5;


  // custom blending equations
  // (numbers start from 100 not to clash with other
  //  mappings to OpenGL constants defined in Texture.js)

  THREE$AddEquation = 100;
  THREE$SubtractEquation = 101;
  THREE$ReverseSubtractEquation = 102;
  THREE$MinEquation = 103;
  THREE$MaxEquation = 104;


  // custom blending destination factors

  THREE$ZeroFactor = 200;
  THREE$OneFactor = 201;
  THREE$SrcColorFactor = 202;
  THREE$OneMinusSrcColorFactor = 203;
  THREE$SrcAlphaFactor = 204;
  THREE$OneMinusSrcAlphaFactor = 205;
  THREE$DstAlphaFactor = 206;
  THREE$OneMinusDstAlphaFactor = 207;

  // custom blending source factors

  //THREE.ZeroFactor = 200;
  //THREE.OneFactor = 201;
  //THREE.SrcAlphaFactor = 204;
  //THREE.OneMinusSrcAlphaFactor = 205;
  //THREE.DstAlphaFactor = 206;
  //THREE.OneMinusDstAlphaFactor = 207;
  THREE$DstColorFactor = 208;
  THREE$OneMinusDstColorFactor = 209;
  THREE$SrcAlphaSaturateFactor = 210;


  // TEXTURE CONSTANTS

  THREE$MultiplyOperation = 0;
  THREE$MixOperation = 1;
  THREE$AddOperation = 2;


  // Mapping modes

  THREE$UVMapping = 300;

  THREE$CubeReflectionMapping = 301;
  THREE$CubeRefractionMapping = 302;

  THREE$EquirectangularReflectionMapping = 303;
  THREE$EquirectangularRefractionMapping = 304;

  THREE$SphericalReflectionMapping = 305;


  // Wrapping modes

  THREE$RepeatWrapping = 1000;
  THREE$ClampToEdgeWrapping = 1001;
  THREE$MirroredRepeatWrapping = 1002;


  // Filters

  THREE$NearestFilter = 1003;
  THREE$NearestMipMapNearestFilter = 1004;
  THREE$NearestMipMapLinearFilter = 1005;
  THREE$LinearFilter = 1006;
  THREE$LinearMipMapNearestFilter = 1007;
  THREE$LinearMipMapLinearFilter = 1008;


  // Data types

  THREE$UnsignedByteType = 1009;
  THREE$ByteType = 1010;
  THREE$ShortType = 1011;
  THREE$UnsignedShortType = 1012;
  THREE$IntType = 1013;
  THREE$UnsignedIntType = 1014;
  THREE$FloatType = 1015;
  THREE$HalfFloatType = 1025;

  // Pixel types

  //THREE.UnsignedByteType = 1009;
  THREE$UnsignedShort4444Type = 1016;
  THREE$UnsignedShort5551Type = 1017;
  THREE$UnsignedShort565Type = 1018;


  // Pixel formats

  THREE$AlphaFormat = 1019;
  THREE$RGBFormat = 1020;
  THREE$RGBAFormat = 1021;
  THREE$LuminanceFormat = 1022;
  THREE$LuminanceAlphaFormat = 1023;


  // DDS / ST3C Compressed texture formats

  THREE$RGB_S3TC_DXT1_Format = 2001;
  THREE$RGBA_S3TC_DXT1_Format = 2002;
  THREE$RGBA_S3TC_DXT3_Format = 2003;
  THREE$RGBA_S3TC_DXT5_Format = 2004;


  // PVRTC compressed texture formats

  THREE$RGB_PVRTC_4BPPV1_Format = 2100;
  THREE$RGB_PVRTC_2BPPV1_Format = 2101;
  THREE$RGBA_PVRTC_4BPPV1_Format = 2102;
  THREE$RGBA_PVRTC_2BPPV1_Format = 2103;

  var THREE$Math;


  /**
   * @author alteredq / http://alteredqualia.com/
   * @author mrdoob / http://mrdoob.com/
   */

  THREE$Math = {

  	generateUUID: function () {

  		// http://www.broofa.com/Tools/Math.uuid.htm

  		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split( '' );
  		var uuid = new Array( 36 );
  		var rnd = 0, r;

  		return function () {

  			for ( var i = 0; i < 36; i ++ ) {

  				if ( i == 8 || i == 13 || i == 18 || i == 23 ) {

  					uuid[ i ] = '-';

  				} else if ( i == 14 ) {

  					uuid[ i ] = '4';

  				} else {

  					if ( rnd <= 0x02 ) rnd = 0x2000000 + ( Math.random() * 0x1000000 ) | 0;
  					r = rnd & 0xf;
  					rnd = rnd >> 4;
  					uuid[ i ] = chars[ ( i == 19 ) ? ( r & 0x3 ) | 0x8 : r ];

  				}
  			}

  			return uuid.join( '' );

  		};

  	}(),

  	// Clamp value to range <a, b>

  	clamp: function ( x, a, b ) {

  		return ( x < a ) ? a : ( ( x > b ) ? b : x );

  	},

  	// Clamp value to range <a, inf)

  	clampBottom: function ( x, a ) {

  		return x < a ? a : x;

  	},

  	// Linear mapping from range <a1, a2> to range <b1, b2>

  	mapLinear: function ( x, a1, a2, b1, b2 ) {

  		return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

  	},

  	// http://en.wikipedia.org/wiki/Smoothstep

  	smoothstep: function ( x, min, max ) {

  		if ( x <= min ) return 0;
  		if ( x >= max ) return 1;

  		x = ( x - min ) / ( max - min );

  		return x * x * ( 3 - 2 * x );

  	},

  	smootherstep: function ( x, min, max ) {

  		if ( x <= min ) return 0;
  		if ( x >= max ) return 1;

  		x = ( x - min ) / ( max - min );

  		return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

  	},

  	// Random float from <0, 1> with 16 bits of randomness
  	// (standard Math.random() creates repetitive patterns when applied over larger space)

  	random16: function () {

  		return ( 65280 * Math.random() + 255 * Math.random() ) / 65535;

  	},

  	// Random integer from <low, high> interval

  	randInt: function ( low, high ) {

  		return Math.floor( this.randFloat( low, high ) );

  	},

  	// Random float from <low, high> interval

  	randFloat: function ( low, high ) {

  		return low + Math.random() * ( high - low );

  	},

  	// Random float from <-range/2, range/2> interval

  	randFloatSpread: function ( range ) {

  		return range * ( 0.5 - Math.random() );

  	},

  	degToRad: function () {

  		var degreeToRadiansFactor = Math.PI / 180;

  		return function ( degrees ) {

  			return degrees * degreeToRadiansFactor;

  		};

  	}(),

  	radToDeg: function () {

  		var radianToDegreesFactor = 180 / Math.PI;

  		return function ( radians ) {

  			return radians * radianToDegreesFactor;

  		};

  	}(),

  	isPowerOfTwo: function ( value ) {

  		return ( value & ( value - 1 ) ) === 0 && value !== 0;

  	},

  	nextPowerOfTwo: function ( value ) {

  		value --;
  		value |= value >> 1;
  		value |= value >> 2;
  		value |= value >> 4;
  		value |= value >> 8;
  		value |= value >> 16;
  		value ++;

  		return value;

  	}

  };



  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author bhouston / http://exocortex.com
   */

  function THREE$Quaternion ( x, y, z, w ) {

  	this._x = x || 0;
  	this._y = y || 0;
  	this._z = z || 0;
  	this._w = ( w !== undefined ) ? w : 1;

  }

  THREE$Quaternion.prototype = {

  	constructor: THREE$Quaternion,

  	_x: 0,_y: 0, _z: 0, _w: 0,

  	get x () {

  		return this._x;

  	},

  	set x ( value ) {

  		this._x = value;
  		this.onChangeCallback();

  	},

  	get y () {

  		return this._y;

  	},

  	set y ( value ) {

  		this._y = value;
  		this.onChangeCallback();

  	},

  	get z () {

  		return this._z;

  	},

  	set z ( value ) {

  		this._z = value;
  		this.onChangeCallback();

  	},

  	get w () {

  		return this._w;

  	},

  	set w ( value ) {

  		this._w = value;
  		this.onChangeCallback();

  	},

  	set: function ( x, y, z, w ) {

  		this._x = x;
  		this._y = y;
  		this._z = z;
  		this._w = w;

  		this.onChangeCallback();

  		return this;

  	},

  	copy: function ( quaternion ) {

  		this._x = quaternion.x;
  		this._y = quaternion.y;
  		this._z = quaternion.z;
  		this._w = quaternion.w;

  		this.onChangeCallback();

  		return this;

  	},

  	setFromEuler: function ( euler, update ) {

  		if ( euler instanceof THREE$Euler === false ) {

  			throw new Error( 'THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );
  		}

  		// http://www.mathworks.com/matlabcentral/fileexchange/
  		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
  		//	content/SpinCalc.m

  		var c1 = Math.cos( euler._x / 2 );
  		var c2 = Math.cos( euler._y / 2 );
  		var c3 = Math.cos( euler._z / 2 );
  		var s1 = Math.sin( euler._x / 2 );
  		var s2 = Math.sin( euler._y / 2 );
  		var s3 = Math.sin( euler._z / 2 );

  		if ( euler.order === 'XYZ' ) {

  			this._x = s1 * c2 * c3 + c1 * s2 * s3;
  			this._y = c1 * s2 * c3 - s1 * c2 * s3;
  			this._z = c1 * c2 * s3 + s1 * s2 * c3;
  			this._w = c1 * c2 * c3 - s1 * s2 * s3;

  		} else if ( euler.order === 'YXZ' ) {

  			this._x = s1 * c2 * c3 + c1 * s2 * s3;
  			this._y = c1 * s2 * c3 - s1 * c2 * s3;
  			this._z = c1 * c2 * s3 - s1 * s2 * c3;
  			this._w = c1 * c2 * c3 + s1 * s2 * s3;

  		} else if ( euler.order === 'ZXY' ) {

  			this._x = s1 * c2 * c3 - c1 * s2 * s3;
  			this._y = c1 * s2 * c3 + s1 * c2 * s3;
  			this._z = c1 * c2 * s3 + s1 * s2 * c3;
  			this._w = c1 * c2 * c3 - s1 * s2 * s3;

  		} else if ( euler.order === 'ZYX' ) {

  			this._x = s1 * c2 * c3 - c1 * s2 * s3;
  			this._y = c1 * s2 * c3 + s1 * c2 * s3;
  			this._z = c1 * c2 * s3 - s1 * s2 * c3;
  			this._w = c1 * c2 * c3 + s1 * s2 * s3;

  		} else if ( euler.order === 'YZX' ) {

  			this._x = s1 * c2 * c3 + c1 * s2 * s3;
  			this._y = c1 * s2 * c3 + s1 * c2 * s3;
  			this._z = c1 * c2 * s3 - s1 * s2 * c3;
  			this._w = c1 * c2 * c3 - s1 * s2 * s3;

  		} else if ( euler.order === 'XZY' ) {

  			this._x = s1 * c2 * c3 - c1 * s2 * s3;
  			this._y = c1 * s2 * c3 - s1 * c2 * s3;
  			this._z = c1 * c2 * s3 + s1 * s2 * c3;
  			this._w = c1 * c2 * c3 + s1 * s2 * s3;

  		}

  		if ( update !== false ) this.onChangeCallback();

  		return this;

  	},

  	setFromAxisAngle: function ( axis, angle ) {

  		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

  		// assumes axis is normalized

  		var halfAngle = angle / 2, s = Math.sin( halfAngle );

  		this._x = axis.x * s;
  		this._y = axis.y * s;
  		this._z = axis.z * s;
  		this._w = Math.cos( halfAngle );

  		this.onChangeCallback();

  		return this;

  	},

  	setFromRotationMatrix: function ( m ) {

  		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

  		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

  		var te = m.elements,

  			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
  			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
  			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

  			trace = m11 + m22 + m33,
  			s;

  		if ( trace > 0 ) {

  			s = 0.5 / Math.sqrt( trace + 1.0 );

  			this._w = 0.25 / s;
  			this._x = ( m32 - m23 ) * s;
  			this._y = ( m13 - m31 ) * s;
  			this._z = ( m21 - m12 ) * s;

  		} else if ( m11 > m22 && m11 > m33 ) {

  			s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

  			this._w = ( m32 - m23 ) / s;
  			this._x = 0.25 * s;
  			this._y = ( m12 + m21 ) / s;
  			this._z = ( m13 + m31 ) / s;

  		} else if ( m22 > m33 ) {

  			s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

  			this._w = ( m13 - m31 ) / s;
  			this._x = ( m12 + m21 ) / s;
  			this._y = 0.25 * s;
  			this._z = ( m23 + m32 ) / s;

  		} else {

  			s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

  			this._w = ( m21 - m12 ) / s;
  			this._x = ( m13 + m31 ) / s;
  			this._y = ( m23 + m32 ) / s;
  			this._z = 0.25 * s;

  		}

  		this.onChangeCallback();

  		return this;

  	},

  	setFromUnitVectors: function () {

  		// http://lolengine.net/blog/2014/02/24/quaternion-from-two-vectors-final

  		// assumes direction vectors vFrom and vTo are normalized

  		var v1, r;

  		var EPS = 0.000001;

  		return function ( vFrom, vTo ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();

  			r = vFrom.dot( vTo ) + 1;

  			if ( r < EPS ) {

  				r = 0;

  				if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

  					v1.set( - vFrom.y, vFrom.x, 0 );

  				} else {

  					v1.set( 0, - vFrom.z, vFrom.y );

  				}

  			} else {

  				v1.crossVectors( vFrom, vTo );

  			}

  			this._x = v1.x;
  			this._y = v1.y;
  			this._z = v1.z;
  			this._w = r;

  			this.normalize();

  			return this;

  		}

  	}(),

  	inverse: function () {

  		this.conjugate().normalize();

  		return this;

  	},

  	conjugate: function () {

  		this._x *= - 1;
  		this._y *= - 1;
  		this._z *= - 1;

  		this.onChangeCallback();

  		return this;

  	},

  	dot: function ( v ) {

  		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

  	},

  	lengthSq: function () {

  		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

  	},

  	length: function () {

  		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

  	},

  	normalize: function () {

  		var l = this.length();

  		if ( l === 0 ) {

  			this._x = 0;
  			this._y = 0;
  			this._z = 0;
  			this._w = 1;

  		} else {

  			l = 1 / l;

  			this._x = this._x * l;
  			this._y = this._y * l;
  			this._z = this._z * l;
  			this._w = this._w * l;

  		}

  		this.onChangeCallback();

  		return this;

  	},

  	multiply: function ( q, p ) {

  		if ( p !== undefined ) {

  			THREE$warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' );
  			return this.multiplyQuaternions( q, p );

  		}

  		return this.multiplyQuaternions( this, q );

  	},

  	multiplyQuaternions: function ( a, b ) {

  		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

  		var qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
  		var qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

  		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
  		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
  		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
  		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

  		this.onChangeCallback();

  		return this;

  	},

  	multiplyVector3: function ( vector ) {

  		THREE$warn( 'THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.' );
  		return vector.applyQuaternion( this );

  	},

  	slerp: function ( qb, t ) {

  		if ( t === 0 ) return this;
  		if ( t === 1 ) return this.copy( qb );

  		var x = this._x, y = this._y, z = this._z, w = this._w;

  		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

  		var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

  		if ( cosHalfTheta < 0 ) {

  			this._w = - qb._w;
  			this._x = - qb._x;
  			this._y = - qb._y;
  			this._z = - qb._z;

  			cosHalfTheta = - cosHalfTheta;

  		} else {

  			this.copy( qb );

  		}

  		if ( cosHalfTheta >= 1.0 ) {

  			this._w = w;
  			this._x = x;
  			this._y = y;
  			this._z = z;

  			return this;

  		}

  		var halfTheta = Math.acos( cosHalfTheta );
  		var sinHalfTheta = Math.sqrt( 1.0 - cosHalfTheta * cosHalfTheta );

  		if ( Math.abs( sinHalfTheta ) < 0.001 ) {

  			this._w = 0.5 * ( w + this._w );
  			this._x = 0.5 * ( x + this._x );
  			this._y = 0.5 * ( y + this._y );
  			this._z = 0.5 * ( z + this._z );

  			return this;

  		}

  		var ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
  		ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

  		this._w = ( w * ratioA + this._w * ratioB );
  		this._x = ( x * ratioA + this._x * ratioB );
  		this._y = ( y * ratioA + this._y * ratioB );
  		this._z = ( z * ratioA + this._z * ratioB );

  		this.onChangeCallback();

  		return this;

  	},

  	equals: function ( quaternion ) {

  		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

  	},

  	fromArray: function ( array, offset ) {

  		if ( offset === undefined ) offset = 0;

  		this._x = array[ offset ];
  		this._y = array[ offset + 1 ];
  		this._z = array[ offset + 2 ];
  		this._w = array[ offset + 3 ];

  		this.onChangeCallback();

  		return this;

  	},

  	toArray: function ( array, offset ) {

  		if ( array === undefined ) array = [];
  		if ( offset === undefined ) offset = 0;

  		array[ offset ] = this._x;
  		array[ offset + 1 ] = this._y;
  		array[ offset + 2 ] = this._z;
  		array[ offset + 3 ] = this._w;

  		return array;

  	},

  	onChange: function ( callback ) {

  		this.onChangeCallback = callback;

  		return this;

  	},

  	onChangeCallback: function () {},

  	clone: function () {

  		return new THREE$Quaternion( this._x, this._y, this._z, this._w );

  	}

  };

  THREE$Quaternion.slerp = function ( qa, qb, qm, t ) {

  	return qm.copy( qa ).slerp( qb, t );

  }



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author bhouston / http://exocortex.com
   */

  function THREE$Euler ( x, y, z, order ) {

  	this._x = x || 0;
  	this._y = y || 0;
  	this._z = z || 0;
  	this._order = order || THREE$Euler.DefaultOrder;

  }

  THREE$Euler.RotationOrders = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];

  THREE$Euler.DefaultOrder = 'XYZ';

  THREE$Euler.prototype = {

  	constructor: THREE$Euler,

  	_x: 0, _y: 0, _z: 0, _order: THREE$Euler.DefaultOrder,

  	get x () {

  		return this._x;

  	},

  	set x ( value ) {

  		this._x = value;
  		this.onChangeCallback();

  	},

  	get y () {

  		return this._y;

  	},

  	set y ( value ) {

  		this._y = value;
  		this.onChangeCallback();

  	},

  	get z () {

  		return this._z;

  	},

  	set z ( value ) {

  		this._z = value;
  		this.onChangeCallback();

  	},

  	get order () {

  		return this._order;

  	},

  	set order ( value ) {

  		this._order = value;
  		this.onChangeCallback();

  	},

  	set: function ( x, y, z, order ) {

  		this._x = x;
  		this._y = y;
  		this._z = z;
  		this._order = order || this._order;

  		this.onChangeCallback();

  		return this;

  	},

  	copy: function ( euler ) {

  		this._x = euler._x;
  		this._y = euler._y;
  		this._z = euler._z;
  		this._order = euler._order;

  		this.onChangeCallback();

  		return this;

  	},

  	setFromRotationMatrix: function ( m, order, update ) {

  		var clamp = THREE$Math.clamp;

  		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

  		var te = m.elements;
  		var m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
  		var m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
  		var m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

  		order = order || this._order;

  		if ( order === 'XYZ' ) {

  			this._y = Math.asin( clamp( m13, - 1, 1 ) );

  			if ( Math.abs( m13 ) < 0.99999 ) {

  				this._x = Math.atan2( - m23, m33 );
  				this._z = Math.atan2( - m12, m11 );

  			} else {

  				this._x = Math.atan2( m32, m22 );
  				this._z = 0;

  			}

  		} else if ( order === 'YXZ' ) {

  			this._x = Math.asin( - clamp( m23, - 1, 1 ) );

  			if ( Math.abs( m23 ) < 0.99999 ) {

  				this._y = Math.atan2( m13, m33 );
  				this._z = Math.atan2( m21, m22 );

  			} else {

  				this._y = Math.atan2( - m31, m11 );
  				this._z = 0;

  			}

  		} else if ( order === 'ZXY' ) {

  			this._x = Math.asin( clamp( m32, - 1, 1 ) );

  			if ( Math.abs( m32 ) < 0.99999 ) {

  				this._y = Math.atan2( - m31, m33 );
  				this._z = Math.atan2( - m12, m22 );

  			} else {

  				this._y = 0;
  				this._z = Math.atan2( m21, m11 );

  			}

  		} else if ( order === 'ZYX' ) {

  			this._y = Math.asin( - clamp( m31, - 1, 1 ) );

  			if ( Math.abs( m31 ) < 0.99999 ) {

  				this._x = Math.atan2( m32, m33 );
  				this._z = Math.atan2( m21, m11 );

  			} else {

  				this._x = 0;
  				this._z = Math.atan2( - m12, m22 );

  			}

  		} else if ( order === 'YZX' ) {

  			this._z = Math.asin( clamp( m21, - 1, 1 ) );

  			if ( Math.abs( m21 ) < 0.99999 ) {

  				this._x = Math.atan2( - m23, m22 );
  				this._y = Math.atan2( - m31, m11 );

  			} else {

  				this._x = 0;
  				this._y = Math.atan2( m13, m33 );

  			}

  		} else if ( order === 'XZY' ) {

  			this._z = Math.asin( - clamp( m12, - 1, 1 ) );

  			if ( Math.abs( m12 ) < 0.99999 ) {

  				this._x = Math.atan2( m32, m22 );
  				this._y = Math.atan2( m13, m11 );

  			} else {

  				this._x = Math.atan2( - m23, m33 );
  				this._y = 0;

  			}

  		} else {

  			THREE$warn( 'THREE.Euler: .setFromRotationMatrix() given unsupported order: ' + order )

  		}

  		this._order = order;

  		if ( update !== false ) this.onChangeCallback();

  		return this;

  	},

  	setFromQuaternion: function () {

  		var matrix;

  		return function ( q, order, update ) {

  			if ( matrix === undefined ) matrix = new THREE$Matrix4();
  			matrix.makeRotationFromQuaternion( q );
  			this.setFromRotationMatrix( matrix, order, update );

  			return this;

  		};

  	}(),

  	setFromVector3: function ( v, order ) {

  		return this.set( v.x, v.y, v.z, order || this._order );

  	},

  	reorder: function () {

  		// WARNING: this discards revolution information -bhouston

  		var q = new THREE$Quaternion();

  		return function ( newOrder ) {

  			q.setFromEuler( this );
  			this.setFromQuaternion( q, newOrder );

  		};

  	}(),

  	equals: function ( euler ) {

  		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

  	},

  	fromArray: function ( array ) {

  		this._x = array[ 0 ];
  		this._y = array[ 1 ];
  		this._z = array[ 2 ];
  		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

  		this.onChangeCallback();

  		return this;

  	},

  	toArray: function ( array, offset ) {

  		if ( array === undefined ) array = [];
  		if ( offset === undefined ) offset = 0;

  		array[ offset ] = this._x;
  		array[ offset + 1 ] = this._y;
  		array[ offset + 2 ] = this._z;
  		array[ offset + 3 ] = this._order;

  		return array;
  	},

  	toVector3: function ( optionalResult ) {

  		if ( optionalResult ) {

  			return optionalResult.set( this._x, this._y, this._z );

  		} else {

  			return new THREE$Vector3( this._x, this._y, this._z );

  		}

  	},

  	onChange: function ( callback ) {

  		this.onChangeCallback = callback;

  		return this;

  	},

  	onChangeCallback: function () {},

  	clone: function () {

  		return new THREE$Euler( this._x, this._y, this._z, this._order );

  	}

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author supereggbert / http://www.paulbrunt.co.uk/
   * @author philogb / http://blog.thejit.org/
   * @author jordi_ros / http://plattsoft.com
   * @author D1plo1d / http://github.com/D1plo1d
   * @author alteredq / http://alteredqualia.com/
   * @author mikael emtinger / http://gomo.se/
   * @author timknip / http://www.floorplanner.com/
   * @author bhouston / http://exocortex.com
   * @author WestLangley / http://github.com/WestLangley
   */

  function THREE$Matrix4 () {

  	this.elements = new Float32Array( [

  		1, 0, 0, 0,
  		0, 1, 0, 0,
  		0, 0, 1, 0,
  		0, 0, 0, 1

  	] );

  	if ( arguments.length > 0 ) {

  		THREE$error( 'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.' );

  	}

  }

  THREE$Matrix4.prototype = {

  	constructor: THREE$Matrix4,

  	set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

  		var te = this.elements;

  		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
  		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
  		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
  		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

  		return this;

  	},

  	identity: function () {

  		this.set(

  			1, 0, 0, 0,
  			0, 1, 0, 0,
  			0, 0, 1, 0,
  			0, 0, 0, 1

  		);

  		return this;

  	},

  	copy: function ( m ) {

  		this.elements.set( m.elements );

  		return this;

  	},

  	extractPosition: function ( m ) {

  		THREE$warn( 'THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().' );
  		return this.copyPosition( m );

  	},

  	copyPosition: function ( m ) {

  		var te = this.elements;
  		var me = m.elements;

  		te[ 12 ] = me[ 12 ];
  		te[ 13 ] = me[ 13 ];
  		te[ 14 ] = me[ 14 ];

  		return this;

  	},

  	extractBasis: function ( xAxis, yAxis, zAxis ) {
   
  		var te = this.elements;
   
  		xAxis.set( te[ 0 ], te[ 1 ], te[ 2 ] );
  		yAxis.set( te[ 4 ], te[ 5 ], te[ 6 ] );
  		zAxis.set( te[ 8 ], te[ 9 ], te[ 10 ] );
   
  		return this;
   		
  	},
   
  	makeBasis: function ( xAxis, yAxis, zAxis ) {

  		this.set(
  			xAxis.x, yAxis.x, zAxis.x, 0,
  			xAxis.y, yAxis.y, zAxis.y, 0,
  			xAxis.z, yAxis.z, zAxis.z, 0,
  			0,       0,       0,       1
  		);

  		return this;

  	},

  	extractRotation: function () {

  		var v1 = new THREE$Vector3();

  		return function ( m ) {

  			var te = this.elements;
  			var me = m.elements;

  			var scaleX = 1 / v1.set( me[ 0 ], me[ 1 ], me[ 2 ] ).length();
  			var scaleY = 1 / v1.set( me[ 4 ], me[ 5 ], me[ 6 ] ).length();
  			var scaleZ = 1 / v1.set( me[ 8 ], me[ 9 ], me[ 10 ] ).length();

  			te[ 0 ] = me[ 0 ] * scaleX;
  			te[ 1 ] = me[ 1 ] * scaleX;
  			te[ 2 ] = me[ 2 ] * scaleX;

  			te[ 4 ] = me[ 4 ] * scaleY;
  			te[ 5 ] = me[ 5 ] * scaleY;
  			te[ 6 ] = me[ 6 ] * scaleY;

  			te[ 8 ] = me[ 8 ] * scaleZ;
  			te[ 9 ] = me[ 9 ] * scaleZ;
  			te[ 10 ] = me[ 10 ] * scaleZ;

  			return this;

  		};

  	}(),

  	makeRotationFromEuler: function ( euler ) {

  		if ( euler instanceof THREE$Euler === false ) {

  			THREE$error( 'THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );

  		}

  		var te = this.elements;

  		var x = euler.x, y = euler.y, z = euler.z;
  		var a = Math.cos( x ), b = Math.sin( x );
  		var c = Math.cos( y ), d = Math.sin( y );
  		var e = Math.cos( z ), f = Math.sin( z );

  		if ( euler.order === 'XYZ' ) {

  			var ae = a * e, af = a * f, be = b * e, bf = b * f;

  			te[ 0 ] = c * e;
  			te[ 4 ] = - c * f;
  			te[ 8 ] = d;

  			te[ 1 ] = af + be * d;
  			te[ 5 ] = ae - bf * d;
  			te[ 9 ] = - b * c;

  			te[ 2 ] = bf - ae * d;
  			te[ 6 ] = be + af * d;
  			te[ 10 ] = a * c;

  		} else if ( euler.order === 'YXZ' ) {

  			var ce = c * e, cf = c * f, de = d * e, df = d * f;

  			te[ 0 ] = ce + df * b;
  			te[ 4 ] = de * b - cf;
  			te[ 8 ] = a * d;

  			te[ 1 ] = a * f;
  			te[ 5 ] = a * e;
  			te[ 9 ] = - b;

  			te[ 2 ] = cf * b - de;
  			te[ 6 ] = df + ce * b;
  			te[ 10 ] = a * c;

  		} else if ( euler.order === 'ZXY' ) {

  			var ce = c * e, cf = c * f, de = d * e, df = d * f;

  			te[ 0 ] = ce - df * b;
  			te[ 4 ] = - a * f;
  			te[ 8 ] = de + cf * b;

  			te[ 1 ] = cf + de * b;
  			te[ 5 ] = a * e;
  			te[ 9 ] = df - ce * b;

  			te[ 2 ] = - a * d;
  			te[ 6 ] = b;
  			te[ 10 ] = a * c;

  		} else if ( euler.order === 'ZYX' ) {

  			var ae = a * e, af = a * f, be = b * e, bf = b * f;

  			te[ 0 ] = c * e;
  			te[ 4 ] = be * d - af;
  			te[ 8 ] = ae * d + bf;

  			te[ 1 ] = c * f;
  			te[ 5 ] = bf * d + ae;
  			te[ 9 ] = af * d - be;

  			te[ 2 ] = - d;
  			te[ 6 ] = b * c;
  			te[ 10 ] = a * c;

  		} else if ( euler.order === 'YZX' ) {

  			var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

  			te[ 0 ] = c * e;
  			te[ 4 ] = bd - ac * f;
  			te[ 8 ] = bc * f + ad;

  			te[ 1 ] = f;
  			te[ 5 ] = a * e;
  			te[ 9 ] = - b * e;

  			te[ 2 ] = - d * e;
  			te[ 6 ] = ad * f + bc;
  			te[ 10 ] = ac - bd * f;

  		} else if ( euler.order === 'XZY' ) {

  			var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

  			te[ 0 ] = c * e;
  			te[ 4 ] = - f;
  			te[ 8 ] = d * e;

  			te[ 1 ] = ac * f + bd;
  			te[ 5 ] = a * e;
  			te[ 9 ] = ad * f - bc;

  			te[ 2 ] = bc * f - ad;
  			te[ 6 ] = b * e;
  			te[ 10 ] = bd * f + ac;

  		}

  		// last column
  		te[ 3 ] = 0;
  		te[ 7 ] = 0;
  		te[ 11 ] = 0;

  		// bottom row
  		te[ 12 ] = 0;
  		te[ 13 ] = 0;
  		te[ 14 ] = 0;
  		te[ 15 ] = 1;

  		return this;

  	},

  	setRotationFromQuaternion: function ( q ) {

  		THREE$warn( 'THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().' );

  		return this.makeRotationFromQuaternion( q );

  	},

  	makeRotationFromQuaternion: function ( q ) {

  		var te = this.elements;

  		var x = q.x, y = q.y, z = q.z, w = q.w;
  		var x2 = x + x, y2 = y + y, z2 = z + z;
  		var xx = x * x2, xy = x * y2, xz = x * z2;
  		var yy = y * y2, yz = y * z2, zz = z * z2;
  		var wx = w * x2, wy = w * y2, wz = w * z2;

  		te[ 0 ] = 1 - ( yy + zz );
  		te[ 4 ] = xy - wz;
  		te[ 8 ] = xz + wy;

  		te[ 1 ] = xy + wz;
  		te[ 5 ] = 1 - ( xx + zz );
  		te[ 9 ] = yz - wx;

  		te[ 2 ] = xz - wy;
  		te[ 6 ] = yz + wx;
  		te[ 10 ] = 1 - ( xx + yy );

  		// last column
  		te[ 3 ] = 0;
  		te[ 7 ] = 0;
  		te[ 11 ] = 0;

  		// bottom row
  		te[ 12 ] = 0;
  		te[ 13 ] = 0;
  		te[ 14 ] = 0;
  		te[ 15 ] = 1;

  		return this;

  	},

  	lookAt: function () {

  		var x = new THREE$Vector3();
  		var y = new THREE$Vector3();
  		var z = new THREE$Vector3();

  		return function ( eye, target, up ) {

  			var te = this.elements;

  			z.subVectors( eye, target ).normalize();

  			if ( z.length() === 0 ) {

  				z.z = 1;

  			}

  			x.crossVectors( up, z ).normalize();

  			if ( x.length() === 0 ) {

  				z.x += 0.0001;
  				x.crossVectors( up, z ).normalize();

  			}

  			y.crossVectors( z, x );


  			te[ 0 ] = x.x; te[ 4 ] = y.x; te[ 8 ] = z.x;
  			te[ 1 ] = x.y; te[ 5 ] = y.y; te[ 9 ] = z.y;
  			te[ 2 ] = x.z; te[ 6 ] = y.z; te[ 10 ] = z.z;

  			return this;

  		};

  	}(),

  	multiply: function ( m, n ) {

  		if ( n !== undefined ) {

  			THREE$warn( 'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.' );
  			return this.multiplyMatrices( m, n );

  		}

  		return this.multiplyMatrices( this, m );

  	},

  	multiplyMatrices: function ( a, b ) {

  		var ae = a.elements;
  		var be = b.elements;
  		var te = this.elements;

  		var a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
  		var a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
  		var a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
  		var a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

  		var b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
  		var b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
  		var b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
  		var b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

  		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
  		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
  		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
  		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

  		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
  		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
  		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
  		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

  		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
  		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
  		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
  		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

  		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
  		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
  		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
  		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

  		return this;

  	},

  	multiplyToArray: function ( a, b, r ) {

  		var te = this.elements;

  		this.multiplyMatrices( a, b );

  		r[ 0 ] = te[ 0 ]; r[ 1 ] = te[ 1 ]; r[ 2 ] = te[ 2 ]; r[ 3 ] = te[ 3 ];
  		r[ 4 ] = te[ 4 ]; r[ 5 ] = te[ 5 ]; r[ 6 ] = te[ 6 ]; r[ 7 ] = te[ 7 ];
  		r[ 8 ]  = te[ 8 ]; r[ 9 ]  = te[ 9 ]; r[ 10 ] = te[ 10 ]; r[ 11 ] = te[ 11 ];
  		r[ 12 ] = te[ 12 ]; r[ 13 ] = te[ 13 ]; r[ 14 ] = te[ 14 ]; r[ 15 ] = te[ 15 ];

  		return this;

  	},

  	multiplyScalar: function ( s ) {

  		var te = this.elements;

  		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
  		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
  		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
  		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

  		return this;

  	},

  	multiplyVector3: function ( vector ) {

  		THREE$warn( 'THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.' );
  		return vector.applyProjection( this );

  	},

  	multiplyVector4: function ( vector ) {

  		THREE$warn( 'THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
  		return vector.applyMatrix4( this );

  	},

  	multiplyVector3Array: function ( a ) {

  		THREE$warn( 'THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.' );
  		return this.applyToVector3Array( a );

  	},

  	applyToVector3Array: function () {

  		var v1 = new THREE$Vector3();

  		return function ( array, offset, length ) {

  			if ( offset === undefined ) offset = 0;
  			if ( length === undefined ) length = array.length;

  			for ( var i = 0, j = offset; i < length; i += 3, j += 3 ) {

  				v1.x = array[ j ];
  				v1.y = array[ j + 1 ];
  				v1.z = array[ j + 2 ];

  				v1.applyMatrix4( this );

  				array[ j ]     = v1.x;
  				array[ j + 1 ] = v1.y;
  				array[ j + 2 ] = v1.z;

  			}

  			return array;

  		};

  	}(),

  	rotateAxis: function ( v ) {

  		THREE$warn( 'THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.' );

  		v.transformDirection( this );

  	},

  	crossVector: function ( vector ) {

  		THREE$warn( 'THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
  		return vector.applyMatrix4( this );

  	},

  	determinant: function () {

  		var te = this.elements;

  		var n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
  		var n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
  		var n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
  		var n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

  		//TODO: make this more efficient
  		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

  		return (
  			n41 * (
  				+ n14 * n23 * n32
  				 - n13 * n24 * n32
  				 - n14 * n22 * n33
  				 + n12 * n24 * n33
  				 + n13 * n22 * n34
  				 - n12 * n23 * n34
  			) +
  			n42 * (
  				+ n11 * n23 * n34
  				 - n11 * n24 * n33
  				 + n14 * n21 * n33
  				 - n13 * n21 * n34
  				 + n13 * n24 * n31
  				 - n14 * n23 * n31
  			) +
  			n43 * (
  				+ n11 * n24 * n32
  				 - n11 * n22 * n34
  				 - n14 * n21 * n32
  				 + n12 * n21 * n34
  				 + n14 * n22 * n31
  				 - n12 * n24 * n31
  			) +
  			n44 * (
  				- n13 * n22 * n31
  				 - n11 * n23 * n32
  				 + n11 * n22 * n33
  				 + n13 * n21 * n32
  				 - n12 * n21 * n33
  				 + n12 * n23 * n31
  			)

  		);

  	},

  	transpose: function () {

  		var te = this.elements;
  		var tmp;

  		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
  		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
  		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

  		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
  		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
  		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

  		return this;

  	},

  	flattenToArrayOffset: function ( array, offset ) {

  		var te = this.elements;

  		array[ offset     ] = te[ 0 ];
  		array[ offset + 1 ] = te[ 1 ];
  		array[ offset + 2 ] = te[ 2 ];
  		array[ offset + 3 ] = te[ 3 ];

  		array[ offset + 4 ] = te[ 4 ];
  		array[ offset + 5 ] = te[ 5 ];
  		array[ offset + 6 ] = te[ 6 ];
  		array[ offset + 7 ] = te[ 7 ];

  		array[ offset + 8 ]  = te[ 8 ];
  		array[ offset + 9 ]  = te[ 9 ];
  		array[ offset + 10 ] = te[ 10 ];
  		array[ offset + 11 ] = te[ 11 ];

  		array[ offset + 12 ] = te[ 12 ];
  		array[ offset + 13 ] = te[ 13 ];
  		array[ offset + 14 ] = te[ 14 ];
  		array[ offset + 15 ] = te[ 15 ];

  		return array;

  	},

  	getPosition: function () {

  		var v1 = new THREE$Vector3();

  		return function () {

  			THREE$warn( 'THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.' );

  			var te = this.elements;
  			return v1.set( te[ 12 ], te[ 13 ], te[ 14 ] );

  		};

  	}(),

  	setPosition: function ( v ) {

  		var te = this.elements;

  		te[ 12 ] = v.x;
  		te[ 13 ] = v.y;
  		te[ 14 ] = v.z;

  		return this;

  	},

  	getInverse: function ( m, throwOnInvertible ) {

  		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
  		var te = this.elements;
  		var me = m.elements;

  		var n11 = me[ 0 ], n12 = me[ 4 ], n13 = me[ 8 ], n14 = me[ 12 ];
  		var n21 = me[ 1 ], n22 = me[ 5 ], n23 = me[ 9 ], n24 = me[ 13 ];
  		var n31 = me[ 2 ], n32 = me[ 6 ], n33 = me[ 10 ], n34 = me[ 14 ];
  		var n41 = me[ 3 ], n42 = me[ 7 ], n43 = me[ 11 ], n44 = me[ 15 ];

  		te[ 0 ] = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
  		te[ 4 ] = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
  		te[ 8 ] = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
  		te[ 12 ] = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
  		te[ 1 ] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
  		te[ 5 ] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
  		te[ 9 ] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
  		te[ 13 ] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
  		te[ 2 ] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
  		te[ 6 ] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
  		te[ 10 ] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
  		te[ 14 ] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
  		te[ 3 ] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
  		te[ 7 ] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
  		te[ 11 ] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
  		te[ 15 ] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;

  		var det = n11 * te[ 0 ] + n21 * te[ 4 ] + n31 * te[ 8 ] + n41 * te[ 12 ];

  		if ( det == 0 ) {

  			var msg = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";

  			if ( throwOnInvertible || false ) {

  				throw new Error( msg );

  			} else {

  				THREE$warn( msg );

  			}

  			this.identity();

  			return this;
  		}

  		this.multiplyScalar( 1 / det );

  		return this;

  	},

  	translate: function ( v ) {

  		THREE$error( 'THREE.Matrix4: .translate() has been removed.' );

  	},

  	rotateX: function ( angle ) {

  		THREE$error( 'THREE.Matrix4: .rotateX() has been removed.' );

  	},

  	rotateY: function ( angle ) {

  		THREE$error( 'THREE.Matrix4: .rotateY() has been removed.' );

  	},

  	rotateZ: function ( angle ) {

  		THREE$error( 'THREE.Matrix4: .rotateZ() has been removed.' );

  	},

  	rotateByAxis: function ( axis, angle ) {

  		THREE$error( 'THREE.Matrix4: .rotateByAxis() has been removed.' );

  	},

  	scale: function ( v ) {

  		var te = this.elements;
  		var x = v.x, y = v.y, z = v.z;

  		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
  		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
  		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
  		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

  		return this;

  	},

  	getMaxScaleOnAxis: function () {

  		var te = this.elements;

  		var scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
  		var scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
  		var scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

  		return Math.sqrt( Math.max( scaleXSq, Math.max( scaleYSq, scaleZSq ) ) );

  	},

  	makeTranslation: function ( x, y, z ) {

  		this.set(

  			1, 0, 0, x,
  			0, 1, 0, y,
  			0, 0, 1, z,
  			0, 0, 0, 1

  		);

  		return this;

  	},

  	makeRotationX: function ( theta ) {

  		var c = Math.cos( theta ), s = Math.sin( theta );

  		this.set(

  			1, 0,  0, 0,
  			0, c, - s, 0,
  			0, s,  c, 0,
  			0, 0,  0, 1

  		);

  		return this;

  	},

  	makeRotationY: function ( theta ) {

  		var c = Math.cos( theta ), s = Math.sin( theta );

  		this.set(

  			 c, 0, s, 0,
  			 0, 1, 0, 0,
  			- s, 0, c, 0,
  			 0, 0, 0, 1

  		);

  		return this;

  	},

  	makeRotationZ: function ( theta ) {

  		var c = Math.cos( theta ), s = Math.sin( theta );

  		this.set(

  			c, - s, 0, 0,
  			s,  c, 0, 0,
  			0,  0, 1, 0,
  			0,  0, 0, 1

  		);

  		return this;

  	},

  	makeRotationAxis: function ( axis, angle ) {

  		// Based on http://www.gamedev.net/reference/articles/article1199.asp

  		var c = Math.cos( angle );
  		var s = Math.sin( angle );
  		var t = 1 - c;
  		var x = axis.x, y = axis.y, z = axis.z;
  		var tx = t * x, ty = t * y;

  		this.set(

  			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
  			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
  			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
  			0, 0, 0, 1

  		);

  		 return this;

  	},

  	makeScale: function ( x, y, z ) {

  		this.set(

  			x, 0, 0, 0,
  			0, y, 0, 0,
  			0, 0, z, 0,
  			0, 0, 0, 1

  		);

  		return this;

  	},

  	compose: function ( position, quaternion, scale ) {

  		this.makeRotationFromQuaternion( quaternion );
  		this.scale( scale );
  		this.setPosition( position );

  		return this;

  	},

  	decompose: function () {

  		var vector = new THREE$Vector3();
  		var matrix = new THREE$Matrix4();

  		return function ( position, quaternion, scale ) {

  			var te = this.elements;

  			var sx = vector.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
  			var sy = vector.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
  			var sz = vector.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

  			// if determine is negative, we need to invert one scale
  			var det = this.determinant();
  			if ( det < 0 ) {
  				sx = - sx;
  			}

  			position.x = te[ 12 ];
  			position.y = te[ 13 ];
  			position.z = te[ 14 ];

  			// scale the rotation part

  			matrix.elements.set( this.elements ); // at this point matrix is incomplete so we can't use .copy()

  			var invSX = 1 / sx;
  			var invSY = 1 / sy;
  			var invSZ = 1 / sz;

  			matrix.elements[ 0 ] *= invSX;
  			matrix.elements[ 1 ] *= invSX;
  			matrix.elements[ 2 ] *= invSX;

  			matrix.elements[ 4 ] *= invSY;
  			matrix.elements[ 5 ] *= invSY;
  			matrix.elements[ 6 ] *= invSY;

  			matrix.elements[ 8 ] *= invSZ;
  			matrix.elements[ 9 ] *= invSZ;
  			matrix.elements[ 10 ] *= invSZ;

  			quaternion.setFromRotationMatrix( matrix );

  			scale.x = sx;
  			scale.y = sy;
  			scale.z = sz;

  			return this;

  		};

  	}(),

  	makeFrustum: function ( left, right, bottom, top, near, far ) {

  		var te = this.elements;
  		var x = 2 * near / ( right - left );
  		var y = 2 * near / ( top - bottom );

  		var a = ( right + left ) / ( right - left );
  		var b = ( top + bottom ) / ( top - bottom );
  		var c = - ( far + near ) / ( far - near );
  		var d = - 2 * far * near / ( far - near );

  		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
  		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
  		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
  		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

  		return this;

  	},

  	makePerspective: function ( fov, aspect, near, far ) {

  		var ymax = near * Math.tan( THREE$Math.degToRad( fov * 0.5 ) );
  		var ymin = - ymax;
  		var xmin = ymin * aspect;
  		var xmax = ymax * aspect;

  		return this.makeFrustum( xmin, xmax, ymin, ymax, near, far );

  	},

  	makeOrthographic: function ( left, right, top, bottom, near, far ) {

  		var te = this.elements;
  		var w = right - left;
  		var h = top - bottom;
  		var p = far - near;

  		var x = ( right + left ) / w;
  		var y = ( top + bottom ) / h;
  		var z = ( far + near ) / p;

  		te[ 0 ] = 2 / w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
  		te[ 1 ] = 0;	te[ 5 ] = 2 / h;	te[ 9 ] = 0;	te[ 13 ] = - y;
  		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 / p;	te[ 14 ] = - z;
  		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;

  		return this;

  	},

  	fromArray: function ( array ) {

  		this.elements.set( array );

  		return this;

  	},

  	toArray: function () {

  		var te = this.elements;

  		return [
  			te[ 0 ], te[ 1 ], te[ 2 ], te[ 3 ],
  			te[ 4 ], te[ 5 ], te[ 6 ], te[ 7 ],
  			te[ 8 ], te[ 9 ], te[ 10 ], te[ 11 ],
  			te[ 12 ], te[ 13 ], te[ 14 ], te[ 15 ]
  		];

  	},

  	clone: function () {

  		return new THREE$Matrix4().fromArray( this.elements );

  	}

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author *kile / http://kile.stravaganza.org/
   * @author philogb / http://blog.thejit.org/
   * @author mikael emtinger / http://gomo.se/
   * @author egraether / http://egraether.com/
   * @author WestLangley / http://github.com/WestLangley
   */

  function THREE$Vector3 ( x, y, z ) {

  	this.x = x || 0;
  	this.y = y || 0;
  	this.z = z || 0;

  }

  THREE$Vector3.prototype = {

  	constructor: THREE$Vector3,

  	set: function ( x, y, z ) {

  		this.x = x;
  		this.y = y;
  		this.z = z;

  		return this;

  	},

  	setX: function ( x ) {

  		this.x = x;

  		return this;

  	},

  	setY: function ( y ) {

  		this.y = y;

  		return this;

  	},

  	setZ: function ( z ) {

  		this.z = z;

  		return this;

  	},

  	setComponent: function ( index, value ) {

  		switch ( index ) {

  			case 0: this.x = value; break;
  			case 1: this.y = value; break;
  			case 2: this.z = value; break;
  			default: throw new Error( 'index is out of range: ' + index );

  		}

  	},

  	getComponent: function ( index ) {

  		switch ( index ) {

  			case 0: return this.x;
  			case 1: return this.y;
  			case 2: return this.z;
  			default: throw new Error( 'index is out of range: ' + index );

  		}

  	},

  	copy: function ( v ) {

  		this.x = v.x;
  		this.y = v.y;
  		this.z = v.z;

  		return this;

  	},

  	add: function ( v, w ) {

  		if ( w !== undefined ) {

  			THREE$warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
  			return this.addVectors( v, w );

  		}

  		this.x += v.x;
  		this.y += v.y;
  		this.z += v.z;

  		return this;

  	},

  	addScalar: function ( s ) {

  		this.x += s;
  		this.y += s;
  		this.z += s;

  		return this;

  	},

  	addVectors: function ( a, b ) {

  		this.x = a.x + b.x;
  		this.y = a.y + b.y;
  		this.z = a.z + b.z;

  		return this;

  	},

  	sub: function ( v, w ) {

  		if ( w !== undefined ) {

  			THREE$warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
  			return this.subVectors( v, w );

  		}

  		this.x -= v.x;
  		this.y -= v.y;
  		this.z -= v.z;

  		return this;

  	},
  	
  	subScalar: function ( s ) {

  		this.x -= s;
  		this.y -= s;
  		this.z -= s;

  		return this;

  	},

  	subVectors: function ( a, b ) {

  		this.x = a.x - b.x;
  		this.y = a.y - b.y;
  		this.z = a.z - b.z;

  		return this;

  	},

  	multiply: function ( v, w ) {

  		if ( w !== undefined ) {

  			THREE$warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
  			return this.multiplyVectors( v, w );

  		}

  		this.x *= v.x;
  		this.y *= v.y;
  		this.z *= v.z;

  		return this;

  	},

  	multiplyScalar: function ( scalar ) {

  		this.x *= scalar;
  		this.y *= scalar;
  		this.z *= scalar;

  		return this;

  	},

  	multiplyVectors: function ( a, b ) {

  		this.x = a.x * b.x;
  		this.y = a.y * b.y;
  		this.z = a.z * b.z;

  		return this;

  	},

  	applyEuler: function () {

  		var quaternion;

  		return function ( euler ) {

  			if ( euler instanceof THREE$Euler === false ) {

  				THREE$error( 'THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.' );

  			}

  			if ( quaternion === undefined ) quaternion = new THREE$Quaternion();

  			this.applyQuaternion( quaternion.setFromEuler( euler ) );

  			return this;

  		};

  	}(),

  	applyAxisAngle: function () {

  		var quaternion;

  		return function ( axis, angle ) {

  			if ( quaternion === undefined ) quaternion = new THREE$Quaternion();

  			this.applyQuaternion( quaternion.setFromAxisAngle( axis, angle ) );

  			return this;

  		};

  	}(),

  	applyMatrix3: function ( m ) {

  		var x = this.x;
  		var y = this.y;
  		var z = this.z;

  		var e = m.elements;

  		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
  		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
  		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

  		return this;

  	},

  	applyMatrix4: function ( m ) {

  		// input: THREE.Matrix4 affine matrix

  		var x = this.x, y = this.y, z = this.z;

  		var e = m.elements;

  		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z + e[ 12 ];
  		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z + e[ 13 ];
  		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ];

  		return this;

  	},

  	applyProjection: function ( m ) {

  		// input: THREE.Matrix4 projection matrix

  		var x = this.x, y = this.y, z = this.z;

  		var e = m.elements;
  		var d = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] ); // perspective divide

  		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z + e[ 12 ] ) * d;
  		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z + e[ 13 ] ) * d;
  		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * d;

  		return this;

  	},

  	applyQuaternion: function ( q ) {

  		var x = this.x;
  		var y = this.y;
  		var z = this.z;

  		var qx = q.x;
  		var qy = q.y;
  		var qz = q.z;
  		var qw = q.w;

  		// calculate quat * vector

  		var ix =  qw * x + qy * z - qz * y;
  		var iy =  qw * y + qz * x - qx * z;
  		var iz =  qw * z + qx * y - qy * x;
  		var iw = - qx * x - qy * y - qz * z;

  		// calculate result * inverse quat

  		this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
  		this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
  		this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

  		return this;

  	},

  	project: function () {

  		var matrix;

  		return function ( camera ) {

  			if ( matrix === undefined ) matrix = new THREE$Matrix4();

  			matrix.multiplyMatrices( camera.projectionMatrix, matrix.getInverse( camera.matrixWorld ) );
  			return this.applyProjection( matrix );

  		};

  	}(),

  	unproject: function () {

  		var matrix;

  		return function ( camera ) {

  			if ( matrix === undefined ) matrix = new THREE$Matrix4();

  			matrix.multiplyMatrices( camera.matrixWorld, matrix.getInverse( camera.projectionMatrix ) );
  			return this.applyProjection( matrix );

  		};

  	}(),

  	transformDirection: function ( m ) {

  		// input: THREE.Matrix4 affine matrix
  		// vector interpreted as a direction

  		var x = this.x, y = this.y, z = this.z;

  		var e = m.elements;

  		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z;
  		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z;
  		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

  		this.normalize();

  		return this;

  	},

  	divide: function ( v ) {

  		this.x /= v.x;
  		this.y /= v.y;
  		this.z /= v.z;

  		return this;

  	},

  	divideScalar: function ( scalar ) {

  		if ( scalar !== 0 ) {

  			var invScalar = 1 / scalar;

  			this.x *= invScalar;
  			this.y *= invScalar;
  			this.z *= invScalar;

  		} else {

  			this.x = 0;
  			this.y = 0;
  			this.z = 0;

  		}

  		return this;

  	},

  	min: function ( v ) {

  		if ( this.x > v.x ) {

  			this.x = v.x;

  		}

  		if ( this.y > v.y ) {

  			this.y = v.y;

  		}

  		if ( this.z > v.z ) {

  			this.z = v.z;

  		}

  		return this;

  	},

  	max: function ( v ) {

  		if ( this.x < v.x ) {

  			this.x = v.x;

  		}

  		if ( this.y < v.y ) {

  			this.y = v.y;

  		}

  		if ( this.z < v.z ) {

  			this.z = v.z;

  		}

  		return this;

  	},

  	clamp: function ( min, max ) {

  		// This function assumes min < max, if this assumption isn't true it will not operate correctly

  		if ( this.x < min.x ) {

  			this.x = min.x;

  		} else if ( this.x > max.x ) {

  			this.x = max.x;

  		}

  		if ( this.y < min.y ) {

  			this.y = min.y;

  		} else if ( this.y > max.y ) {

  			this.y = max.y;

  		}

  		if ( this.z < min.z ) {

  			this.z = min.z;

  		} else if ( this.z > max.z ) {

  			this.z = max.z;

  		}

  		return this;

  	},

  	clampScalar: ( function () {

  		var min, max;

  		return function ( minVal, maxVal ) {

  			if ( min === undefined ) {

  				min = new THREE$Vector3();
  				max = new THREE$Vector3();

  			}

  			min.set( minVal, minVal, minVal );
  			max.set( maxVal, maxVal, maxVal );

  			return this.clamp( min, max );

  		};

  	} )(),

  	floor: function () {

  		this.x = Math.floor( this.x );
  		this.y = Math.floor( this.y );
  		this.z = Math.floor( this.z );

  		return this;

  	},

  	ceil: function () {

  		this.x = Math.ceil( this.x );
  		this.y = Math.ceil( this.y );
  		this.z = Math.ceil( this.z );

  		return this;

  	},

  	round: function () {

  		this.x = Math.round( this.x );
  		this.y = Math.round( this.y );
  		this.z = Math.round( this.z );

  		return this;

  	},

  	roundToZero: function () {

  		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
  		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
  		this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

  		return this;

  	},

  	negate: function () {

  		this.x = - this.x;
  		this.y = - this.y;
  		this.z = - this.z;

  		return this;

  	},

  	dot: function ( v ) {

  		return this.x * v.x + this.y * v.y + this.z * v.z;

  	},

  	lengthSq: function () {

  		return this.x * this.x + this.y * this.y + this.z * this.z;

  	},

  	length: function () {

  		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

  	},

  	lengthManhattan: function () {

  		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

  	},

  	normalize: function () {

  		return this.divideScalar( this.length() );

  	},

  	setLength: function ( l ) {

  		var oldLength = this.length();

  		if ( oldLength !== 0 && l !== oldLength  ) {

  			this.multiplyScalar( l / oldLength );
  		}

  		return this;

  	},

  	lerp: function ( v, alpha ) {

  		this.x += ( v.x - this.x ) * alpha;
  		this.y += ( v.y - this.y ) * alpha;
  		this.z += ( v.z - this.z ) * alpha;

  		return this;

  	},

  	lerpVectors: function ( v1, v2, alpha ) {

  		this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

  		return this;

  	},

  	cross: function ( v, w ) {

  		if ( w !== undefined ) {

  			THREE$warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
  			return this.crossVectors( v, w );

  		}

  		var x = this.x, y = this.y, z = this.z;

  		this.x = y * v.z - z * v.y;
  		this.y = z * v.x - x * v.z;
  		this.z = x * v.y - y * v.x;

  		return this;

  	},

  	crossVectors: function ( a, b ) {

  		var ax = a.x, ay = a.y, az = a.z;
  		var bx = b.x, by = b.y, bz = b.z;

  		this.x = ay * bz - az * by;
  		this.y = az * bx - ax * bz;
  		this.z = ax * by - ay * bx;

  		return this;

  	},

  	projectOnVector: function () {

  		var v1, dot;

  		return function ( vector ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();

  			v1.copy( vector ).normalize();

  			dot = this.dot( v1 );

  			return this.copy( v1 ).multiplyScalar( dot );

  		};

  	}(),

  	projectOnPlane: function () {

  		var v1;

  		return function ( planeNormal ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();

  			v1.copy( this ).projectOnVector( planeNormal );

  			return this.sub( v1 );

  		}

  	}(),

  	reflect: function () {

  		// reflect incident vector off plane orthogonal to normal
  		// normal is assumed to have unit length

  		var v1;

  		return function ( normal ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();

  			return this.sub( v1.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

  		}

  	}(),

  	angleTo: function ( v ) {

  		var theta = this.dot( v ) / ( this.length() * v.length() );

  		// clamp, to handle numerical problems

  		return Math.acos( THREE$Math.clamp( theta, - 1, 1 ) );

  	},

  	distanceTo: function ( v ) {

  		return Math.sqrt( this.distanceToSquared( v ) );

  	},

  	distanceToSquared: function ( v ) {

  		var dx = this.x - v.x;
  		var dy = this.y - v.y;
  		var dz = this.z - v.z;

  		return dx * dx + dy * dy + dz * dz;

  	},

  	setEulerFromRotationMatrix: function ( m, order ) {

  		THREE$error( 'THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.' );

  	},

  	setEulerFromQuaternion: function ( q, order ) {

  		THREE$error( 'THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.' );

  	},

  	getPositionFromMatrix: function ( m ) {

  		THREE$warn( 'THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().' );

  		return this.setFromMatrixPosition( m );

  	},

  	getScaleFromMatrix: function ( m ) {

  		THREE$warn( 'THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().' );

  		return this.setFromMatrixScale( m );
  	},

  	getColumnFromMatrix: function ( index, matrix ) {

  		THREE$warn( 'THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().' );

  		return this.setFromMatrixColumn( index, matrix );

  	},

  	setFromMatrixPosition: function ( m ) {

  		this.x = m.elements[ 12 ];
  		this.y = m.elements[ 13 ];
  		this.z = m.elements[ 14 ];

  		return this;

  	},

  	setFromMatrixScale: function ( m ) {

  		var sx = this.set( m.elements[ 0 ], m.elements[ 1 ], m.elements[  2 ] ).length();
  		var sy = this.set( m.elements[ 4 ], m.elements[ 5 ], m.elements[  6 ] ).length();
  		var sz = this.set( m.elements[ 8 ], m.elements[ 9 ], m.elements[ 10 ] ).length();

  		this.x = sx;
  		this.y = sy;
  		this.z = sz;

  		return this;
  	},

  	setFromMatrixColumn: function ( index, matrix ) {
  		
  		var offset = index * 4;

  		var me = matrix.elements;

  		this.x = me[ offset ];
  		this.y = me[ offset + 1 ];
  		this.z = me[ offset + 2 ];

  		return this;

  	},

  	equals: function ( v ) {

  		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

  	},

  	fromArray: function ( array, offset ) {

  		if ( offset === undefined ) offset = 0;

  		this.x = array[ offset ];
  		this.y = array[ offset + 1 ];
  		this.z = array[ offset + 2 ];

  		return this;

  	},

  	toArray: function ( array, offset ) {

  		if ( array === undefined ) array = [];
  		if ( offset === undefined ) offset = 0;

  		array[ offset ] = this.x;
  		array[ offset + 1 ] = this.y;
  		array[ offset + 2 ] = this.z;

  		return array;

  	},

  	fromAttribute: function ( attribute, index, offset ) {

  		if ( offset === undefined ) offset = 0;

  		index = index * attribute.itemSize + offset;

  		this.x = attribute.array[ index ];
  		this.y = attribute.array[ index + 1 ];
  		this.z = attribute.array[ index + 2 ];

  		return this;

  	},

  	clone: function () {

  		return new THREE$Vector3( this.x, this.y, this.z );

  	}

  };



  /**
   * https://github.com/mrdoob/eventdispatcher.js/
   */

  function THREE$EventDispatcher () {}

  THREE$EventDispatcher.prototype = {

  	constructor: THREE$EventDispatcher,

  	apply: function ( object ) {

  		object.addEventListener = THREE$EventDispatcher.prototype.addEventListener;
  		object.hasEventListener = THREE$EventDispatcher.prototype.hasEventListener;
  		object.removeEventListener = THREE$EventDispatcher.prototype.removeEventListener;
  		object.dispatchEvent = THREE$EventDispatcher.prototype.dispatchEvent;

  	},

  	addEventListener: function ( type, listener ) {

  		if ( this._listeners === undefined ) this._listeners = {};

  		var listeners = this._listeners;

  		if ( listeners[ type ] === undefined ) {

  			listeners[ type ] = [];

  		}

  		if ( listeners[ type ].indexOf( listener ) === - 1 ) {

  			listeners[ type ].push( listener );

  		}

  	},

  	hasEventListener: function ( type, listener ) {

  		if ( this._listeners === undefined ) return false;

  		var listeners = this._listeners;

  		if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {

  			return true;

  		}

  		return false;

  	},

  	removeEventListener: function ( type, listener ) {

  		if ( this._listeners === undefined ) return;

  		var listeners = this._listeners;
  		var listenerArray = listeners[ type ];

  		if ( listenerArray !== undefined ) {

  			var index = listenerArray.indexOf( listener );

  			if ( index !== - 1 ) {

  				listenerArray.splice( index, 1 );

  			}

  		}

  	},

  	dispatchEvent: function ( event ) {

  		if ( this._listeners === undefined ) return;

  		var listeners = this._listeners;
  		var listenerArray = listeners[ event.type ];

  		if ( listenerArray !== undefined ) {

  			event.target = this;

  			var array = [];
  			var length = listenerArray.length;

  			for ( var i = 0; i < length; i ++ ) {

  				array[ i ] = listenerArray[ i ];

  			}

  			for ( var i = 0; i < length; i ++ ) {

  				array[ i ].call( this, event );

  			}

  		}

  	}

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$BufferAttribute ( array, itemSize ) {

  	this.array = array;
  	this.itemSize = itemSize;

  	this.needsUpdate = false;

  }

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

  var THREE$ColorKeywords;


  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$Color ( color ) {

  	if ( arguments.length === 3 ) {

  		return this.setRGB( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ] );

  	}

  	return this.set( color )

  }

  THREE$Color.prototype = {

  	constructor: THREE$Color,

  	r: 1, g: 1, b: 1,

  	set: function ( value ) {

  		if ( value instanceof THREE$Color ) {

  			this.copy( value );

  		} else if ( typeof value === 'number' ) {

  			this.setHex( value );

  		} else if ( typeof value === 'string' ) {

  			this.setStyle( value );

  		}

  		return this;

  	},

  	setHex: function ( hex ) {

  		hex = Math.floor( hex );

  		this.r = ( hex >> 16 & 255 ) / 255;
  		this.g = ( hex >> 8 & 255 ) / 255;
  		this.b = ( hex & 255 ) / 255;

  		return this;

  	},

  	setRGB: function ( r, g, b ) {

  		this.r = r;
  		this.g = g;
  		this.b = b;

  		return this;

  	},

  	setHSL: function ( h, s, l ) {

  		// h,s,l ranges are in 0.0 - 1.0

  		if ( s === 0 ) {

  			this.r = this.g = this.b = l;

  		} else {

  			var hue2rgb = function ( p, q, t ) {

  				if ( t < 0 ) t += 1;
  				if ( t > 1 ) t -= 1;
  				if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
  				if ( t < 1 / 2 ) return q;
  				if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
  				return p;

  			};

  			var p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
  			var q = ( 2 * l ) - p;

  			this.r = hue2rgb( q, p, h + 1 / 3 );
  			this.g = hue2rgb( q, p, h );
  			this.b = hue2rgb( q, p, h - 1 / 3 );

  		}

  		return this;

  	},

  	setStyle: function ( style ) {

  		// rgb(255,0,0)

  		if ( /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test( style ) ) {

  			var color = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec( style );

  			this.r = Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255;
  			this.g = Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255;
  			this.b = Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255;

  			return this;

  		}

  		// rgb(100%,0%,0%)

  		if ( /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test( style ) ) {

  			var color = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec( style );

  			this.r = Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100;
  			this.g = Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100;
  			this.b = Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100;

  			return this;

  		}

  		// #ff0000

  		if ( /^\#([0-9a-f]{6})$/i.test( style ) ) {

  			var color = /^\#([0-9a-f]{6})$/i.exec( style );

  			this.setHex( parseInt( color[ 1 ], 16 ) );

  			return this;

  		}

  		// #f00

  		if ( /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test( style ) ) {

  			var color = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec( style );

  			this.setHex( parseInt( color[ 1 ] + color[ 1 ] + color[ 2 ] + color[ 2 ] + color[ 3 ] + color[ 3 ], 16 ) );

  			return this;

  		}

  		// red

  		if ( /^(\w+)$/i.test( style ) ) {

  			this.setHex( THREE$ColorKeywords[ style ] );

  			return this;

  		}


  	},

  	copy: function ( color ) {

  		this.r = color.r;
  		this.g = color.g;
  		this.b = color.b;

  		return this;

  	},

  	copyGammaToLinear: function ( color, gammaFactor ) {

  		if ( gammaFactor === undefined ) gammaFactor = 2.0;

  		this.r = Math.pow( color.r, gammaFactor );
  		this.g = Math.pow( color.g, gammaFactor );
  		this.b = Math.pow( color.b, gammaFactor );

  		return this;

  	},

  	copyLinearToGamma: function ( color, gammaFactor ) {

  		if ( gammaFactor === undefined ) gammaFactor = 2.0;

  		var safeInverse = ( gammaFactor > 0 ) ? ( 1.0 / gammaFactor ) : 1.0;

  		this.r = Math.pow( color.r, safeInverse );
  		this.g = Math.pow( color.g, safeInverse );
  		this.b = Math.pow( color.b, safeInverse );

  		return this;

  	},

  	convertGammaToLinear: function () {

  		var r = this.r, g = this.g, b = this.b;

  		this.r = r * r;
  		this.g = g * g;
  		this.b = b * b;

  		return this;

  	},

  	convertLinearToGamma: function () {

  		this.r = Math.sqrt( this.r );
  		this.g = Math.sqrt( this.g );
  		this.b = Math.sqrt( this.b );

  		return this;

  	},

  	getHex: function () {

  		return ( this.r * 255 ) << 16 ^ ( this.g * 255 ) << 8 ^ ( this.b * 255 ) << 0;

  	},

  	getHexString: function () {

  		return ( '000000' + this.getHex().toString( 16 ) ).slice( - 6 );

  	},

  	getHSL: function ( optionalTarget ) {

  		// h,s,l ranges are in 0.0 - 1.0

  		var hsl = optionalTarget || { h: 0, s: 0, l: 0 };

  		var r = this.r, g = this.g, b = this.b;

  		var max = Math.max( r, g, b );
  		var min = Math.min( r, g, b );

  		var hue, saturation;
  		var lightness = ( min + max ) / 2.0;

  		if ( min === max ) {

  			hue = 0;
  			saturation = 0;

  		} else {

  			var delta = max - min;

  			saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

  			switch ( max ) {

  				case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
  				case g: hue = ( b - r ) / delta + 2; break;
  				case b: hue = ( r - g ) / delta + 4; break;

  			}

  			hue /= 6;

  		}

  		hsl.h = hue;
  		hsl.s = saturation;
  		hsl.l = lightness;

  		return hsl;

  	},

  	getStyle: function () {

  		return 'rgb(' + ( ( this.r * 255 ) | 0 ) + ',' + ( ( this.g * 255 ) | 0 ) + ',' + ( ( this.b * 255 ) | 0 ) + ')';

  	},

  	offsetHSL: function ( h, s, l ) {

  		var hsl = this.getHSL();

  		hsl.h += h; hsl.s += s; hsl.l += l;

  		this.setHSL( hsl.h, hsl.s, hsl.l );

  		return this;

  	},

  	add: function ( color ) {

  		this.r += color.r;
  		this.g += color.g;
  		this.b += color.b;

  		return this;

  	},

  	addColors: function ( color1, color2 ) {

  		this.r = color1.r + color2.r;
  		this.g = color1.g + color2.g;
  		this.b = color1.b + color2.b;

  		return this;

  	},

  	addScalar: function ( s ) {

  		this.r += s;
  		this.g += s;
  		this.b += s;

  		return this;

  	},

  	multiply: function ( color ) {

  		this.r *= color.r;
  		this.g *= color.g;
  		this.b *= color.b;

  		return this;

  	},

  	multiplyScalar: function ( s ) {

  		this.r *= s;
  		this.g *= s;
  		this.b *= s;

  		return this;

  	},

  	lerp: function ( color, alpha ) {

  		this.r += ( color.r - this.r ) * alpha;
  		this.g += ( color.g - this.g ) * alpha;
  		this.b += ( color.b - this.b ) * alpha;

  		return this;

  	},

  	equals: function ( c ) {

  		return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

  	},

  	fromArray: function ( array ) {

  		this.r = array[ 0 ];
  		this.g = array[ 1 ];
  		this.b = array[ 2 ];

  		return this;

  	},

  	toArray: function ( array, offset ) {

  		if ( array === undefined ) array = [];
  		if ( offset === undefined ) offset = 0;

  		array[ offset ] = this.r;
  		array[ offset + 1 ] = this.g;
  		array[ offset + 2 ] = this.b;

  		return array;
  	},

  	clone: function () {

  		return new THREE$Color().setRGB( this.r, this.g, this.b );

  	}

  };

  THREE$ColorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
  'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
  'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
  'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
  'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
  'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
  'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
  'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
  'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
  'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
  'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
  'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
  'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
  'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
  'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
  'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
  'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
  'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
  'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
  'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
  'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
  'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
  'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
  'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Material () {

  	Object.defineProperty( this, 'id', { value: THREE$MaterialIdCount() } );

  	this.uuid = THREE$Math.generateUUID();

  	this.name = '';
  	this.type = 'Material';

  	this.side = THREE$FrontSide;

  	this.opacity = 1;
  	this.transparent = false;

  	this.blending = THREE$NormalBlending;

  	this.blendSrc = THREE$SrcAlphaFactor;
  	this.blendDst = THREE$OneMinusSrcAlphaFactor;
  	this.blendEquation = THREE$AddEquation;
  	this.blendSrcAlpha = null;
  	this.blendDstAlpha = null;
  	this.blendEquationAlpha = null;

  	this.depthTest = true;
  	this.depthWrite = true;

  	this.colorWrite = true;

  	this.polygonOffset = false;
  	this.polygonOffsetFactor = 0;
  	this.polygonOffsetUnits = 0;

  	this.alphaTest = 0;

  	this.overdraw = 0; // Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer

  	this.visible = true;

  	this._needsUpdate = true;

  }

  THREE$Material.prototype = {

  	constructor: THREE$Material,

  	get needsUpdate () {

  		return this._needsUpdate;

  	},

  	set needsUpdate ( value ) {

  		if ( value === true ) this.update();

  		this._needsUpdate = value;

  	},

  	setValues: function ( values ) {

  		if ( values === undefined ) return;

  		for ( var key in values ) {

  			var newValue = values[ key ];

  			if ( newValue === undefined ) {

  				THREE$warn( "THREE.Material: '" + key + "' parameter is undefined." );
  				continue;

  			}

  			if ( key in this ) {

  				var currentValue = this[ key ];

  				if ( currentValue instanceof THREE$Color ) {

  					currentValue.set( newValue );

  				} else if ( currentValue instanceof THREE$Vector3 && newValue instanceof THREE$Vector3 ) {

  					currentValue.copy( newValue );

  				} else if ( key == 'overdraw' ) {

  					// ensure overdraw is backwards-compatable with legacy boolean type
  					this[ key ] = Number( newValue );

  				} else {

  					this[ key ] = newValue;

  				}

  			}

  		}

  	},

  	toJSON: function () {

  		var output = {
  			metadata: {
  				version: 4.2,
  				type: 'material',
  				generator: 'MaterialExporter'
  			},
  			uuid: this.uuid,
  			type: this.type
  		};

  		if ( this.name !== "" ) output.name = this.name;

  		if ( this instanceof THREE$MeshBasicMaterial ) {

  			output.color = this.color.getHex();
  			if ( this.vertexColors !== THREE$NoColors ) output.vertexColors = this.vertexColors;
  			if ( this.blending !== THREE$NormalBlending ) output.blending = this.blending;
  			if ( this.side !== THREE$FrontSide ) output.side = this.side;

  		} else if ( this instanceof THREE$MeshLambertMaterial ) {

  			output.color = this.color.getHex();
  			output.emissive = this.emissive.getHex();
  			if ( this.vertexColors !== THREE$NoColors ) output.vertexColors = this.vertexColors;
  			if ( this.shading !== THREE$SmoothShading ) output.shading = this.shading;
  			if ( this.blending !== THREE$NormalBlending ) output.blending = this.blending;
  			if ( this.side !== THREE$FrontSide ) output.side = this.side;

  		} else if ( this instanceof THREE$MeshPhongMaterial ) {

  			output.color = this.color.getHex();
  			output.emissive = this.emissive.getHex();
  			output.specular = this.specular.getHex();
  			output.shininess = this.shininess;
  			if ( this.vertexColors !== THREE$NoColors ) output.vertexColors = this.vertexColors;
  			if ( this.shading !== THREE$SmoothShading ) output.shading = this.shading;
  			if ( this.blending !== THREE$NormalBlending ) output.blending = this.blending;
  			if ( this.side !== THREE$FrontSide ) output.side = this.side;

  		} else if ( this instanceof THREE$MeshNormalMaterial ) {

  			if ( this.blending !== THREE$NormalBlending ) output.blending = this.blending;
  			if ( this.side !== THREE$FrontSide ) output.side = this.side;

  		} else if ( this instanceof THREE$MeshDepthMaterial ) {

  			if ( this.blending !== THREE$NormalBlending ) output.blending = this.blending;
  			if ( this.side !== THREE$FrontSide ) output.side = this.side;

  		} else if ( this instanceof THREE$PointCloudMaterial ) {

  			output.size  = this.size;
  			output.sizeAttenuation = this.sizeAttenuation;
  			output.color = this.color.getHex();

  			if ( this.vertexColors !== THREE$NoColors ) output.vertexColors = this.vertexColors;
  			if ( this.blending !== THREE$NormalBlending ) output.blending = this.blending;

  		} else if ( this instanceof THREE$ShaderMaterial ) {

  			output.uniforms = this.uniforms;
  			output.vertexShader = this.vertexShader;
  			output.fragmentShader = this.fragmentShader;

  		} else if ( this instanceof THREE$SpriteMaterial ) {

  			output.color = this.color.getHex();

  		}

  		if ( this.opacity < 1 ) output.opacity = this.opacity;
  		if ( this.transparent !== false ) output.transparent = this.transparent;
  		if ( this.wireframe !== false ) output.wireframe = this.wireframe;

  		return output;

  	},

  	clone: function ( material ) {

  		if ( material === undefined ) material = new THREE$Material();

  		material.name = this.name;

  		material.side = this.side;

  		material.opacity = this.opacity;
  		material.transparent = this.transparent;

  		material.blending = this.blending;

  		material.blendSrc = this.blendSrc;
  		material.blendDst = this.blendDst;
  		material.blendEquation = this.blendEquation;
  		material.blendSrcAlpha = this.blendSrcAlpha;
  		material.blendDstAlpha = this.blendDstAlpha;
  		material.blendEquationAlpha = this.blendEquationAlpha;

  		material.depthTest = this.depthTest;
  		material.depthWrite = this.depthWrite;

  		material.polygonOffset = this.polygonOffset;
  		material.polygonOffsetFactor = this.polygonOffsetFactor;
  		material.polygonOffsetUnits = this.polygonOffsetUnits;

  		material.alphaTest = this.alphaTest;

  		material.overdraw = this.overdraw;

  		material.visible = this.visible;

  		return material;

  	},

  	update: function () {

  		this.dispatchEvent( { type: 'update' } );

  	},

  	dispose: function () {

  		this.dispatchEvent( { type: 'dispose' } );

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$Material.prototype );

  var __count = 0;
  function THREE$MaterialIdCount () { return __count++; }


  /**
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  color: <hex>,
   *  opacity: <float>,
   *  map: new THREE.Texture( <Image> ),
   *
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *	uvOffset: new THREE.Vector2(),
   *	uvScale: new THREE.Vector2(),
   *
   *  fog: <bool>
   * }
   */

  function THREE$SpriteMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'SpriteMaterial';

  	this.color = new THREE$Color( 0xffffff );
  	this.map = null;

  	this.rotation = 0;

  	this.fog = false;

  	// set parameters

  	this.setValues( parameters );

  }

  THREE$SpriteMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$SpriteMaterial.prototype.constructor = THREE$SpriteMaterial;

  THREE$SpriteMaterial.prototype.clone = function () {

  	var material = new THREE$SpriteMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.color.copy( this.color );
  	material.map = this.map;

  	material.rotation = this.rotation;

  	material.fog = this.fog;

  	return material;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author philogb / http://blog.thejit.org/
   * @author egraether / http://egraether.com/
   * @author zz85 / http://www.lab4games.net/zz85/blog
   */

  function THREE$Vector2 ( x, y ) {

  	this.x = x || 0;
  	this.y = y || 0;

  }

  THREE$Vector2.prototype = {

  	constructor: THREE$Vector2,

  	set: function ( x, y ) {

  		this.x = x;
  		this.y = y;

  		return this;

  	},

  	setX: function ( x ) {

  		this.x = x;

  		return this;

  	},

  	setY: function ( y ) {

  		this.y = y;

  		return this;

  	},

  	setComponent: function ( index, value ) {

  		switch ( index ) {

  			case 0: this.x = value; break;
  			case 1: this.y = value; break;
  			default: throw new Error( 'index is out of range: ' + index );

  		}

  	},

  	getComponent: function ( index ) {

  		switch ( index ) {

  			case 0: return this.x;
  			case 1: return this.y;
  			default: throw new Error( 'index is out of range: ' + index );

  		}

  	},

  	copy: function ( v ) {

  		this.x = v.x;
  		this.y = v.y;

  		return this;

  	},

  	add: function ( v, w ) {

  		if ( w !== undefined ) {

  			THREE$warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
  			return this.addVectors( v, w );

  		}

  		this.x += v.x;
  		this.y += v.y;

  		return this;

  	},

  	addScalar: function ( s ) {

  		this.x += s;
  		this.y += s;

  		return this;

  	},

  	addVectors: function ( a, b ) {

  		this.x = a.x + b.x;
  		this.y = a.y + b.y;

  		return this;

  	},

  	sub: function ( v, w ) {

  		if ( w !== undefined ) {

  			THREE$warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
  			return this.subVectors( v, w );

  		}

  		this.x -= v.x;
  		this.y -= v.y;

  		return this;

  	},

  	subScalar: function ( s ) {

  		this.x -= s;
  		this.y -= s;

  		return this;

  	},

  	subVectors: function ( a, b ) {

  		this.x = a.x - b.x;
  		this.y = a.y - b.y;

  		return this;

  	},

  	multiply: function ( v ) {

  		this.x *= v.x;
  		this.y *= v.y;

  		return this;

  	},

  	multiplyScalar: function ( s ) {

  		this.x *= s;
  		this.y *= s;

  		return this;

  	},

  	divide: function ( v ) {

  		this.x /= v.x;
  		this.y /= v.y;

  		return this;

  	},

  	divideScalar: function ( scalar ) {

  		if ( scalar !== 0 ) {

  			var invScalar = 1 / scalar;

  			this.x *= invScalar;
  			this.y *= invScalar;

  		} else {

  			this.x = 0;
  			this.y = 0;

  		}

  		return this;

  	},

  	min: function ( v ) {

  		if ( this.x > v.x ) {

  			this.x = v.x;

  		}

  		if ( this.y > v.y ) {

  			this.y = v.y;

  		}

  		return this;

  	},

  	max: function ( v ) {

  		if ( this.x < v.x ) {

  			this.x = v.x;

  		}

  		if ( this.y < v.y ) {

  			this.y = v.y;

  		}

  		return this;

  	},

  	clamp: function ( min, max ) {

  		// This function assumes min < max, if this assumption isn't true it will not operate correctly

  		if ( this.x < min.x ) {

  			this.x = min.x;

  		} else if ( this.x > max.x ) {

  			this.x = max.x;

  		}

  		if ( this.y < min.y ) {

  			this.y = min.y;

  		} else if ( this.y > max.y ) {

  			this.y = max.y;

  		}

  		return this;
  	},

  	clampScalar: ( function () {

  		var min, max;

  		return function ( minVal, maxVal ) {

  			if ( min === undefined ) {

  				min = new THREE$Vector2();
  				max = new THREE$Vector2();

  			}

  			min.set( minVal, minVal );
  			max.set( maxVal, maxVal );

  			return this.clamp( min, max );

  		};

  	} )(),

  	floor: function () {

  		this.x = Math.floor( this.x );
  		this.y = Math.floor( this.y );

  		return this;

  	},

  	ceil: function () {

  		this.x = Math.ceil( this.x );
  		this.y = Math.ceil( this.y );

  		return this;

  	},

  	round: function () {

  		this.x = Math.round( this.x );
  		this.y = Math.round( this.y );

  		return this;

  	},

  	roundToZero: function () {

  		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
  		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );

  		return this;

  	},

  	negate: function () {

  		this.x = - this.x;
  		this.y = - this.y;

  		return this;

  	},

  	dot: function ( v ) {

  		return this.x * v.x + this.y * v.y;

  	},

  	lengthSq: function () {

  		return this.x * this.x + this.y * this.y;

  	},

  	length: function () {

  		return Math.sqrt( this.x * this.x + this.y * this.y );

  	},

  	normalize: function () {

  		return this.divideScalar( this.length() );

  	},

  	distanceTo: function ( v ) {

  		return Math.sqrt( this.distanceToSquared( v ) );

  	},

  	distanceToSquared: function ( v ) {

  		var dx = this.x - v.x, dy = this.y - v.y;
  		return dx * dx + dy * dy;

  	},

  	setLength: function ( l ) {

  		var oldLength = this.length();

  		if ( oldLength !== 0 && l !== oldLength ) {

  			this.multiplyScalar( l / oldLength );
  		}

  		return this;

  	},

  	lerp: function ( v, alpha ) {

  		this.x += ( v.x - this.x ) * alpha;
  		this.y += ( v.y - this.y ) * alpha;

  		return this;

  	},

  	lerpVectors: function ( v1, v2, alpha ) {

  		this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

  		return this;

  	},

  	equals: function ( v ) {

  		return ( ( v.x === this.x ) && ( v.y === this.y ) );

  	},

  	fromArray: function ( array, offset ) {

  		if ( offset === undefined ) offset = 0;

  		this.x = array[ offset ];
  		this.y = array[ offset + 1 ];

  		return this;

  	},

  	toArray: function ( array, offset ) {

  		if ( array === undefined ) array = [];
  		if ( offset === undefined ) offset = 0;

  		array[ offset ] = this.x;
  		array[ offset + 1 ] = this.y;

  		return array;

  	},

  	fromAttribute: function ( attribute, index, offset ) {

  		if ( offset === undefined ) offset = 0;

  		index = index * attribute.itemSize + offset;

  		this.x = attribute.array[ index ];
  		this.y = attribute.array[ index + 1 ];

  		return this;

  	},

  	clone: function () {

  		return new THREE$Vector2( this.x, this.y );

  	}

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   * @author szimek / https://github.com/szimek/
   */

  function THREE$Texture ( image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {

  	Object.defineProperty( this, 'id', { value: THREE$TextureIdCount() } );

  	this.uuid = THREE$Math.generateUUID();

  	this.name = '';
  	this.sourceFile = '';

  	this.image = image !== undefined ? image : THREE$Texture.DEFAULT_IMAGE;
  	this.mipmaps = [];

  	this.mapping = mapping !== undefined ? mapping : THREE$Texture.DEFAULT_MAPPING;

  	this.wrapS = wrapS !== undefined ? wrapS : THREE$ClampToEdgeWrapping;
  	this.wrapT = wrapT !== undefined ? wrapT : THREE$ClampToEdgeWrapping;

  	this.magFilter = magFilter !== undefined ? magFilter : THREE$LinearFilter;
  	this.minFilter = minFilter !== undefined ? minFilter : THREE$LinearMipMapLinearFilter;

  	this.anisotropy = anisotropy !== undefined ? anisotropy : 1;

  	this.format = format !== undefined ? format : THREE$RGBAFormat;
  	this.type = type !== undefined ? type : THREE$UnsignedByteType;

  	this.offset = new THREE$Vector2( 0, 0 );
  	this.repeat = new THREE$Vector2( 1, 1 );

  	this.generateMipmaps = true;
  	this.premultiplyAlpha = false;
  	this.flipY = true;
  	this.unpackAlignment = 4; // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

  	this._needsUpdate = false;
  	this.onUpdate = null;

  }

  THREE$Texture.DEFAULT_IMAGE = undefined;
  THREE$Texture.DEFAULT_MAPPING = THREE$UVMapping;

  THREE$Texture.prototype = {

  	constructor: THREE$Texture,

  	get needsUpdate () {

  		return this._needsUpdate;

  	},

  	set needsUpdate ( value ) {

  		if ( value === true ) this.update();

  		this._needsUpdate = value;

  	},

  	clone: function ( texture ) {

  		if ( texture === undefined ) texture = new THREE$Texture();

  		texture.image = this.image;
  		texture.mipmaps = this.mipmaps.slice( 0 );

  		texture.mapping = this.mapping;

  		texture.wrapS = this.wrapS;
  		texture.wrapT = this.wrapT;

  		texture.magFilter = this.magFilter;
  		texture.minFilter = this.minFilter;

  		texture.anisotropy = this.anisotropy;

  		texture.format = this.format;
  		texture.type = this.type;

  		texture.offset.copy( this.offset );
  		texture.repeat.copy( this.repeat );

  		texture.generateMipmaps = this.generateMipmaps;
  		texture.premultiplyAlpha = this.premultiplyAlpha;
  		texture.flipY = this.flipY;
  		texture.unpackAlignment = this.unpackAlignment;

  		return texture;

  	},

  	update: function () {

  		this.dispatchEvent( { type: 'update' } );

  	},

  	dispose: function () {

  		this.dispatchEvent( { type: 'dispose' } );

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$Texture.prototype );

  var ___count = 0;
  function THREE$TextureIdCount () { return ___count++; }


  /**
   * @author supereggbert / http://www.paulbrunt.co.uk/
   * @author philogb / http://blog.thejit.org/
   * @author mikael emtinger / http://gomo.se/
   * @author egraether / http://egraether.com/
   * @author WestLangley / http://github.com/WestLangley
   */

  function THREE$Vector4 ( x, y, z, w ) {

  	this.x = x || 0;
  	this.y = y || 0;
  	this.z = z || 0;
  	this.w = ( w !== undefined ) ? w : 1;

  }

  THREE$Vector4.prototype = {

  	constructor: THREE$Vector4,

  	set: function ( x, y, z, w ) {

  		this.x = x;
  		this.y = y;
  		this.z = z;
  		this.w = w;

  		return this;

  	},

  	setX: function ( x ) {

  		this.x = x;

  		return this;

  	},

  	setY: function ( y ) {

  		this.y = y;

  		return this;

  	},

  	setZ: function ( z ) {

  		this.z = z;

  		return this;

  	},

  	setW: function ( w ) {

  		this.w = w;

  		return this;

  	},

  	setComponent: function ( index, value ) {

  		switch ( index ) {

  			case 0: this.x = value; break;
  			case 1: this.y = value; break;
  			case 2: this.z = value; break;
  			case 3: this.w = value; break;
  			default: throw new Error( 'index is out of range: ' + index );

  		}

  	},

  	getComponent: function ( index ) {

  		switch ( index ) {

  			case 0: return this.x;
  			case 1: return this.y;
  			case 2: return this.z;
  			case 3: return this.w;
  			default: throw new Error( 'index is out of range: ' + index );

  		}

  	},

  	copy: function ( v ) {

  		this.x = v.x;
  		this.y = v.y;
  		this.z = v.z;
  		this.w = ( v.w !== undefined ) ? v.w : 1;

  		return this;

  	},

  	add: function ( v, w ) {

  		if ( w !== undefined ) {

  			THREE$warn( 'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
  			return this.addVectors( v, w );

  		}

  		this.x += v.x;
  		this.y += v.y;
  		this.z += v.z;
  		this.w += v.w;

  		return this;

  	},

  	addScalar: function ( s ) {

  		this.x += s;
  		this.y += s;
  		this.z += s;
  		this.w += s;

  		return this;

  	},

  	addVectors: function ( a, b ) {

  		this.x = a.x + b.x;
  		this.y = a.y + b.y;
  		this.z = a.z + b.z;
  		this.w = a.w + b.w;

  		return this;

  	},

  	sub: function ( v, w ) {

  		if ( w !== undefined ) {

  			THREE$warn( 'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
  			return this.subVectors( v, w );

  		}

  		this.x -= v.x;
  		this.y -= v.y;
  		this.z -= v.z;
  		this.w -= v.w;

  		return this;

  	},

  	subScalar: function ( s ) {

  		this.x -= s;
  		this.y -= s;
  		this.z -= s;
  		this.w -= s;

  		return this;

  	},

  	subVectors: function ( a, b ) {

  		this.x = a.x - b.x;
  		this.y = a.y - b.y;
  		this.z = a.z - b.z;
  		this.w = a.w - b.w;

  		return this;

  	},

  	multiplyScalar: function ( scalar ) {

  		this.x *= scalar;
  		this.y *= scalar;
  		this.z *= scalar;
  		this.w *= scalar;

  		return this;

  	},

  	applyMatrix4: function ( m ) {

  		var x = this.x;
  		var y = this.y;
  		var z = this.z;
  		var w = this.w;

  		var e = m.elements;

  		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
  		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
  		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
  		this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

  		return this;

  	},

  	divideScalar: function ( scalar ) {

  		if ( scalar !== 0 ) {

  			var invScalar = 1 / scalar;

  			this.x *= invScalar;
  			this.y *= invScalar;
  			this.z *= invScalar;
  			this.w *= invScalar;

  		} else {

  			this.x = 0;
  			this.y = 0;
  			this.z = 0;
  			this.w = 1;

  		}

  		return this;

  	},

  	setAxisAngleFromQuaternion: function ( q ) {

  		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

  		// q is assumed to be normalized

  		this.w = 2 * Math.acos( q.w );

  		var s = Math.sqrt( 1 - q.w * q.w );

  		if ( s < 0.0001 ) {

  			 this.x = 1;
  			 this.y = 0;
  			 this.z = 0;

  		} else {

  			 this.x = q.x / s;
  			 this.y = q.y / s;
  			 this.z = q.z / s;

  		}

  		return this;

  	},

  	setAxisAngleFromRotationMatrix: function ( m ) {

  		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

  		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

  		var angle, x, y, z,		// variables for result
  			epsilon = 0.01,		// margin to allow for rounding errors
  			epsilon2 = 0.1,		// margin to distinguish between 0 and 180 degrees

  			te = m.elements,

  			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
  			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
  			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

  		if ( ( Math.abs( m12 - m21 ) < epsilon )
  		   && ( Math.abs( m13 - m31 ) < epsilon )
  		   && ( Math.abs( m23 - m32 ) < epsilon ) ) {

  			// singularity found
  			// first check for identity matrix which must have +1 for all terms
  			// in leading diagonal and zero in other terms

  			if ( ( Math.abs( m12 + m21 ) < epsilon2 )
  			   && ( Math.abs( m13 + m31 ) < epsilon2 )
  			   && ( Math.abs( m23 + m32 ) < epsilon2 )
  			   && ( Math.abs( m11 + m22 + m33 - 3 ) < epsilon2 ) ) {

  				// this singularity is identity matrix so angle = 0

  				this.set( 1, 0, 0, 0 );

  				return this; // zero angle, arbitrary axis

  			}

  			// otherwise this singularity is angle = 180

  			angle = Math.PI;

  			var xx = ( m11 + 1 ) / 2;
  			var yy = ( m22 + 1 ) / 2;
  			var zz = ( m33 + 1 ) / 2;
  			var xy = ( m12 + m21 ) / 4;
  			var xz = ( m13 + m31 ) / 4;
  			var yz = ( m23 + m32 ) / 4;

  			if ( ( xx > yy ) && ( xx > zz ) ) { // m11 is the largest diagonal term

  				if ( xx < epsilon ) {

  					x = 0;
  					y = 0.707106781;
  					z = 0.707106781;

  				} else {

  					x = Math.sqrt( xx );
  					y = xy / x;
  					z = xz / x;

  				}

  			} else if ( yy > zz ) { // m22 is the largest diagonal term

  				if ( yy < epsilon ) {

  					x = 0.707106781;
  					y = 0;
  					z = 0.707106781;

  				} else {

  					y = Math.sqrt( yy );
  					x = xy / y;
  					z = yz / y;

  				}

  			} else { // m33 is the largest diagonal term so base result on this

  				if ( zz < epsilon ) {

  					x = 0.707106781;
  					y = 0.707106781;
  					z = 0;

  				} else {

  					z = Math.sqrt( zz );
  					x = xz / z;
  					y = yz / z;

  				}

  			}

  			this.set( x, y, z, angle );

  			return this; // return 180 deg rotation

  		}

  		// as we have reached here there are no singularities so we can handle normally

  		var s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 )
  						  + ( m13 - m31 ) * ( m13 - m31 )
  						  + ( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

  		if ( Math.abs( s ) < 0.001 ) s = 1;

  		// prevent divide by zero, should not happen if matrix is orthogonal and should be
  		// caught by singularity test above, but I've left it in just in case

  		this.x = ( m32 - m23 ) / s;
  		this.y = ( m13 - m31 ) / s;
  		this.z = ( m21 - m12 ) / s;
  		this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

  		return this;

  	},

  	min: function ( v ) {

  		if ( this.x > v.x ) {

  			this.x = v.x;

  		}

  		if ( this.y > v.y ) {

  			this.y = v.y;

  		}

  		if ( this.z > v.z ) {

  			this.z = v.z;

  		}

  		if ( this.w > v.w ) {

  			this.w = v.w;

  		}

  		return this;

  	},

  	max: function ( v ) {

  		if ( this.x < v.x ) {

  			this.x = v.x;

  		}

  		if ( this.y < v.y ) {

  			this.y = v.y;

  		}

  		if ( this.z < v.z ) {

  			this.z = v.z;

  		}

  		if ( this.w < v.w ) {

  			this.w = v.w;

  		}

  		return this;

  	},

  	clamp: function ( min, max ) {

  		// This function assumes min < max, if this assumption isn't true it will not operate correctly

  		if ( this.x < min.x ) {

  			this.x = min.x;

  		} else if ( this.x > max.x ) {

  			this.x = max.x;

  		}

  		if ( this.y < min.y ) {

  			this.y = min.y;

  		} else if ( this.y > max.y ) {

  			this.y = max.y;

  		}

  		if ( this.z < min.z ) {

  			this.z = min.z;

  		} else if ( this.z > max.z ) {

  			this.z = max.z;

  		}

  		if ( this.w < min.w ) {

  			this.w = min.w;

  		} else if ( this.w > max.w ) {

  			this.w = max.w;

  		}

  		return this;

  	},

  	clampScalar: ( function () {

  		var min, max;

  		return function ( minVal, maxVal ) {

  			if ( min === undefined ) {

  				min = new THREE$Vector4();
  				max = new THREE$Vector4();

  			}

  			min.set( minVal, minVal, minVal, minVal );
  			max.set( maxVal, maxVal, maxVal, maxVal );

  			return this.clamp( min, max );

  		};

  	} )(),

    floor: function () {

  		this.x = Math.floor( this.x );
  		this.y = Math.floor( this.y );
  		this.z = Math.floor( this.z );
  		this.w = Math.floor( this.w );

  		return this;

    },

    ceil: function () {

  		this.x = Math.ceil( this.x );
  		this.y = Math.ceil( this.y );
  		this.z = Math.ceil( this.z );
  		this.w = Math.ceil( this.w );

  		return this;

    },

    round: function () {

  		this.x = Math.round( this.x );
  		this.y = Math.round( this.y );
  		this.z = Math.round( this.z );
  		this.w = Math.round( this.w );

  		return this;

    },

    roundToZero: function () {

  		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
  		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
  		this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );
  		this.w = ( this.w < 0 ) ? Math.ceil( this.w ) : Math.floor( this.w );

  		return this;

    },

  	negate: function () {

  		this.x = - this.x;
  		this.y = - this.y;
  		this.z = - this.z;
  		this.w = - this.w;

  		return this;

  	},

  	dot: function ( v ) {

  		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

  	},

  	lengthSq: function () {

  		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

  	},

  	length: function () {

  		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

  	},

  	lengthManhattan: function () {

  		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w );

  	},

  	normalize: function () {

  		return this.divideScalar( this.length() );

  	},

  	setLength: function ( l ) {

  		var oldLength = this.length();

  		if ( oldLength !== 0 && l !== oldLength ) {

  			this.multiplyScalar( l / oldLength );

  		}

  		return this;

  	},

  	lerp: function ( v, alpha ) {

  		this.x += ( v.x - this.x ) * alpha;
  		this.y += ( v.y - this.y ) * alpha;
  		this.z += ( v.z - this.z ) * alpha;
  		this.w += ( v.w - this.w ) * alpha;

  		return this;

  	},

  	lerpVectors: function ( v1, v2, alpha ) {

  		this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

  		return this;

  	},

  	equals: function ( v ) {

  		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

  	},

  	fromArray: function ( array, offset ) {

  		if ( offset === undefined ) offset = 0;

  		this.x = array[ offset ];
  		this.y = array[ offset + 1 ];
  		this.z = array[ offset + 2 ];
  		this.w = array[ offset + 3 ];

  		return this;

  	},

  	toArray: function ( array, offset ) {

  		if ( array === undefined ) array = [];
  		if ( offset === undefined ) offset = 0;

  		array[ offset ] = this.x;
  		array[ offset + 1 ] = this.y;
  		array[ offset + 2 ] = this.z;
  		array[ offset + 3 ] = this.w;

  		return array;

  	},

  	fromAttribute: function ( attribute, index, offset ) {

  		if ( offset === undefined ) offset = 0;

  		index = index * attribute.itemSize + offset;

  		this.x = attribute.array[ index ];
  		this.y = attribute.array[ index + 1 ];
  		this.z = attribute.array[ index + 2 ];
  		this.w = attribute.array[ index + 3 ];

  		return this;

  	},

  	clone: function () {

  		return new THREE$Vector4( this.x, this.y, this.z, this.w );

  	}

  };


  var THREE$UniformsUtils;


  /**
   * Uniform Utilities
   */

  THREE$UniformsUtils = {

  	merge: function ( uniforms ) {

  		var merged = {};

  		for ( var u = 0; u < uniforms.length; u ++ ) {

  			var tmp = this.clone( uniforms[ u ] );

  			for ( var p in tmp ) {

  				merged[ p ] = tmp[ p ];

  			}

  		}

  		return merged;

  	},

  	clone: function ( uniforms_src ) {

  		var uniforms_dst = {};

  		for ( var u in uniforms_src ) {

  			uniforms_dst[ u ] = {};

  			for ( var p in uniforms_src[ u ] ) {

  				var parameter_src = uniforms_src[ u ][ p ];

  				if ( parameter_src instanceof THREE$Color ||
  					 parameter_src instanceof THREE$Vector2 ||
  					 parameter_src instanceof THREE$Vector3 ||
  					 parameter_src instanceof THREE$Vector4 ||
  					 parameter_src instanceof THREE$Matrix4 ||
  					 parameter_src instanceof THREE$Texture ) {

  					uniforms_dst[ u ][ p ] = parameter_src.clone();

  				} else if ( parameter_src instanceof Array ) {

  					uniforms_dst[ u ][ p ] = parameter_src.slice();

  				} else {

  					uniforms_dst[ u ][ p ] = parameter_src;

  				}

  			}

  		}

  		return uniforms_dst;

  	}

  };



  /**
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  defines: { "label" : "value" },
   *  uniforms: { "parameter1": { type: "f", value: 1.0 }, "parameter2": { type: "i" value2: 2 } },
   *
   *  fragmentShader: <string>,
   *  vertexShader: <string>,
   *
   *  shading: THREE.SmoothShading,
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  wireframe: <boolean>,
   *  wireframeLinewidth: <float>,
   *
   *  lights: <bool>,
   *
   *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
   *
   *  skinning: <bool>,
   *  morphTargets: <bool>,
   *  morphNormals: <bool>,
   *
   *	fog: <bool>
   * }
   */

  function THREE$ShaderMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'ShaderMaterial';

  	this.defines = {};
  	this.uniforms = {};
  	this.attributes = null;

  	this.vertexShader = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}';
  	this.fragmentShader = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}';

  	this.shading = THREE$SmoothShading;

  	this.linewidth = 1;

  	this.wireframe = false;
  	this.wireframeLinewidth = 1;

  	this.fog = false; // set to use scene fog

  	this.lights = false; // set to use scene lights

  	this.vertexColors = THREE$NoColors; // set to use "color" attribute stream

  	this.skinning = false; // set to use skinning attribute streams

  	this.morphTargets = false; // set to use morph targets
  	this.morphNormals = false; // set to use morph normals

  	// When rendered geometry doesn't include these attributes but the material does,
  	// use these default values in WebGL. This avoids errors when buffer data is missing.
  	this.defaultAttributeValues = {
  		'color': [ 1, 1, 1 ],
  		'uv': [ 0, 0 ],
  		'uv2': [ 0, 0 ]
  	};

  	this.index0AttributeName = undefined;

  	this.setValues( parameters );

  }

  THREE$ShaderMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$ShaderMaterial.prototype.constructor = THREE$ShaderMaterial;

  THREE$ShaderMaterial.prototype.clone = function () {

  	var material = new THREE$ShaderMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.fragmentShader = this.fragmentShader;
  	material.vertexShader = this.vertexShader;

  	material.uniforms = THREE$UniformsUtils.clone( this.uniforms );

  	material.attributes = this.attributes;
  	material.defines = this.defines;

  	material.shading = this.shading;

  	material.wireframe = this.wireframe;
  	material.wireframeLinewidth = this.wireframeLinewidth;

  	material.fog = this.fog;

  	material.lights = this.lights;

  	material.vertexColors = this.vertexColors;

  	material.skinning = this.skinning;

  	material.morphTargets = this.morphTargets;
  	material.morphNormals = this.morphNormals;

  	return material;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  color: <hex>,
   *  opacity: <float>,
   *  map: new THREE.Texture( <Image> ),
   *
   *  size: <float>,
   *  sizeAttenuation: <bool>,
   *
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  vertexColors: <bool>,
   *
   *  fog: <bool>
   * }
   */

  function THREE$PointCloudMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'PointCloudMaterial';

  	this.color = new THREE$Color( 0xffffff );

  	this.map = null;

  	this.size = 1;
  	this.sizeAttenuation = true;

  	this.vertexColors = THREE$NoColors;

  	this.fog = true;

  	this.setValues( parameters );

  }

  THREE$PointCloudMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$PointCloudMaterial.prototype.constructor = THREE$PointCloudMaterial;

  THREE$PointCloudMaterial.prototype.clone = function () {

  	var material = new THREE$PointCloudMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.color.copy( this.color );

  	material.map = this.map;

  	material.size = this.size;
  	material.sizeAttenuation = this.sizeAttenuation;

  	material.vertexColors = this.vertexColors;

  	material.fog = this.fog;

  	return material;

  };


  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  opacity: <float>,
   *
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  wireframe: <boolean>,
   *  wireframeLinewidth: <float>
   * }
   */

  function THREE$MeshDepthMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'MeshDepthMaterial';

  	this.morphTargets = false;
  	this.wireframe = false;
  	this.wireframeLinewidth = 1;

  	this.setValues( parameters );

  }

  THREE$MeshDepthMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$MeshDepthMaterial.prototype.constructor = THREE$MeshDepthMaterial;

  THREE$MeshDepthMaterial.prototype.clone = function () {

  	var material = new THREE$MeshDepthMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.wireframe = this.wireframe;
  	material.wireframeLinewidth = this.wireframeLinewidth;

  	return material;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   *
   * parameters = {
   *  opacity: <float>,
   *
   *  shading: THREE.FlatShading,
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  wireframe: <boolean>,
   *  wireframeLinewidth: <float>
   * }
   */

  function THREE$MeshNormalMaterial ( parameters ) {

  	THREE$Material.call( this, parameters );

  	this.type = 'MeshNormalMaterial';

  	this.wireframe = false;
  	this.wireframeLinewidth = 1;

  	this.morphTargets = false;

  	this.setValues( parameters );

  }

  THREE$MeshNormalMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$MeshNormalMaterial.prototype.constructor = THREE$MeshNormalMaterial;

  THREE$MeshNormalMaterial.prototype.clone = function () {

  	var material = new THREE$MeshNormalMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.wireframe = this.wireframe;
  	material.wireframeLinewidth = this.wireframeLinewidth;

  	return material;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  color: <hex>,
   *  emissive: <hex>,
   *  specular: <hex>,
   *  shininess: <float>,
   *  opacity: <float>,
   *
   *  map: new THREE.Texture( <Image> ),
   *
   *  lightMap: new THREE.Texture( <Image> ),
   *
   *  bumpMap: new THREE.Texture( <Image> ),
   *  bumpScale: <float>,
   *
   *  normalMap: new THREE.Texture( <Image> ),
   *  normalScale: <Vector2>,
   *
   *  specularMap: new THREE.Texture( <Image> ),
   *
   *  alphaMap: new THREE.Texture( <Image> ),
   *
   *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
   *  combine: THREE.Multiply,
   *  reflectivity: <float>,
   *  refractionRatio: <float>,
   *
   *  shading: THREE.SmoothShading,
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  wireframe: <boolean>,
   *  wireframeLinewidth: <float>,
   *
   *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
   *
   *  skinning: <bool>,
   *  morphTargets: <bool>,
   *  morphNormals: <bool>,
   *
   *	fog: <bool>
   * }
   */

  function THREE$MeshPhongMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'MeshPhongMaterial';

  	this.color = new THREE$Color( 0xffffff ); // diffuse
  	this.emissive = new THREE$Color( 0x000000 );
  	this.specular = new THREE$Color( 0x111111 );
  	this.shininess = 30;

  	this.metal = false;

  	this.wrapAround = false;
  	this.wrapRGB = new THREE$Vector3( 1, 1, 1 );

  	this.map = null;

  	this.lightMap = null;

  	this.bumpMap = null;
  	this.bumpScale = 1;

  	this.normalMap = null;
  	this.normalScale = new THREE$Vector2( 1, 1 );

  	this.specularMap = null;

  	this.alphaMap = null;

  	this.envMap = null;
  	this.combine = THREE$MultiplyOperation;
  	this.reflectivity = 1;
  	this.refractionRatio = 0.98;

  	this.fog = true;

  	this.shading = THREE$SmoothShading;

  	this.wireframe = false;
  	this.wireframeLinewidth = 1;
  	this.wireframeLinecap = 'round';
  	this.wireframeLinejoin = 'round';

  	this.vertexColors = THREE$NoColors;

  	this.skinning = false;
  	this.morphTargets = false;
  	this.morphNormals = false;

  	this.setValues( parameters );

  }

  THREE$MeshPhongMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$MeshPhongMaterial.prototype.constructor = THREE$MeshPhongMaterial;

  THREE$MeshPhongMaterial.prototype.clone = function () {

  	var material = new THREE$MeshPhongMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.color.copy( this.color );
  	material.emissive.copy( this.emissive );
  	material.specular.copy( this.specular );
  	material.shininess = this.shininess;

  	material.metal = this.metal;

  	material.wrapAround = this.wrapAround;
  	material.wrapRGB.copy( this.wrapRGB );

  	material.map = this.map;

  	material.lightMap = this.lightMap;

  	material.bumpMap = this.bumpMap;
  	material.bumpScale = this.bumpScale;

  	material.normalMap = this.normalMap;
  	material.normalScale.copy( this.normalScale );

  	material.specularMap = this.specularMap;

  	material.alphaMap = this.alphaMap;

  	material.envMap = this.envMap;
  	material.combine = this.combine;
  	material.reflectivity = this.reflectivity;
  	material.refractionRatio = this.refractionRatio;

  	material.fog = this.fog;

  	material.shading = this.shading;

  	material.wireframe = this.wireframe;
  	material.wireframeLinewidth = this.wireframeLinewidth;
  	material.wireframeLinecap = this.wireframeLinecap;
  	material.wireframeLinejoin = this.wireframeLinejoin;

  	material.vertexColors = this.vertexColors;

  	material.skinning = this.skinning;
  	material.morphTargets = this.morphTargets;
  	material.morphNormals = this.morphNormals;

  	return material;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  color: <hex>,
   *  emissive: <hex>,
   *  opacity: <float>,
   *
   *  map: new THREE.Texture( <Image> ),
   *
   *  lightMap: new THREE.Texture( <Image> ),
   *
   *  specularMap: new THREE.Texture( <Image> ),
   *
   *  alphaMap: new THREE.Texture( <Image> ),
   *
   *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
   *  combine: THREE.Multiply,
   *  reflectivity: <float>,
   *  refractionRatio: <float>,
   *
   *  shading: THREE.SmoothShading,
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  wireframe: <boolean>,
   *  wireframeLinewidth: <float>,
   *
   *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
   *
   *  skinning: <bool>,
   *  morphTargets: <bool>,
   *  morphNormals: <bool>,
   *
   *	fog: <bool>
   * }
   */

  function THREE$MeshLambertMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'MeshLambertMaterial';

  	this.color = new THREE$Color( 0xffffff ); // diffuse
  	this.emissive = new THREE$Color( 0x000000 );

  	this.wrapAround = false;
  	this.wrapRGB = new THREE$Vector3( 1, 1, 1 );

  	this.map = null;

  	this.lightMap = null;

  	this.specularMap = null;

  	this.alphaMap = null;

  	this.envMap = null;
  	this.combine = THREE$MultiplyOperation;
  	this.reflectivity = 1;
  	this.refractionRatio = 0.98;

  	this.fog = true;

  	this.shading = THREE$SmoothShading;

  	this.wireframe = false;
  	this.wireframeLinewidth = 1;
  	this.wireframeLinecap = 'round';
  	this.wireframeLinejoin = 'round';

  	this.vertexColors = THREE$NoColors;

  	this.skinning = false;
  	this.morphTargets = false;
  	this.morphNormals = false;

  	this.setValues( parameters );

  }

  THREE$MeshLambertMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$MeshLambertMaterial.prototype.constructor = THREE$MeshLambertMaterial;

  THREE$MeshLambertMaterial.prototype.clone = function () {

  	var material = new THREE$MeshLambertMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.color.copy( this.color );
  	material.emissive.copy( this.emissive );

  	material.wrapAround = this.wrapAround;
  	material.wrapRGB.copy( this.wrapRGB );

  	material.map = this.map;

  	material.lightMap = this.lightMap;

  	material.specularMap = this.specularMap;

  	material.alphaMap = this.alphaMap;

  	material.envMap = this.envMap;
  	material.combine = this.combine;
  	material.reflectivity = this.reflectivity;
  	material.refractionRatio = this.refractionRatio;

  	material.fog = this.fog;

  	material.shading = this.shading;

  	material.wireframe = this.wireframe;
  	material.wireframeLinewidth = this.wireframeLinewidth;
  	material.wireframeLinecap = this.wireframeLinecap;
  	material.wireframeLinejoin = this.wireframeLinejoin;

  	material.vertexColors = this.vertexColors;

  	material.skinning = this.skinning;
  	material.morphTargets = this.morphTargets;
  	material.morphNormals = this.morphNormals;

  	return material;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  color: <hex>,
   *  opacity: <float>,
   *  map: new THREE.Texture( <Image> ),
   *
   *  lightMap: new THREE.Texture( <Image> ),
   *
   *  specularMap: new THREE.Texture( <Image> ),
   *
   *  alphaMap: new THREE.Texture( <Image> ),
   *
   *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
   *  combine: THREE.Multiply,
   *  reflectivity: <float>,
   *  refractionRatio: <float>,
   *
   *  shading: THREE.SmoothShading,
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  wireframe: <boolean>,
   *  wireframeLinewidth: <float>,
   *
   *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
   *
   *  skinning: <bool>,
   *  morphTargets: <bool>,
   *
   *  fog: <bool>
   * }
   */

  function THREE$MeshBasicMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'MeshBasicMaterial';

  	this.color = new THREE$Color( 0xffffff ); // emissive

  	this.map = null;

  	this.lightMap = null;

  	this.specularMap = null;

  	this.alphaMap = null;

  	this.envMap = null;
  	this.combine = THREE$MultiplyOperation;
  	this.reflectivity = 1;
  	this.refractionRatio = 0.98;

  	this.fog = true;

  	this.shading = THREE$SmoothShading;

  	this.wireframe = false;
  	this.wireframeLinewidth = 1;
  	this.wireframeLinecap = 'round';
  	this.wireframeLinejoin = 'round';

  	this.vertexColors = THREE$NoColors;

  	this.skinning = false;
  	this.morphTargets = false;

  	this.setValues( parameters );

  }

  THREE$MeshBasicMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$MeshBasicMaterial.prototype.constructor = THREE$MeshBasicMaterial;

  THREE$MeshBasicMaterial.prototype.clone = function () {

  	var material = new THREE$MeshBasicMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.color.copy( this.color );

  	material.map = this.map;

  	material.lightMap = this.lightMap;

  	material.specularMap = this.specularMap;

  	material.alphaMap = this.alphaMap;

  	material.envMap = this.envMap;
  	material.combine = this.combine;
  	material.reflectivity = this.reflectivity;
  	material.refractionRatio = this.refractionRatio;

  	material.fog = this.fog;

  	material.shading = this.shading;

  	material.wireframe = this.wireframe;
  	material.wireframeLinewidth = this.wireframeLinewidth;
  	material.wireframeLinecap = this.wireframeLinecap;
  	material.wireframeLinejoin = this.wireframeLinejoin;

  	material.vertexColors = this.vertexColors;

  	material.skinning = this.skinning;
  	material.morphTargets = this.morphTargets;

  	return material;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$MeshFaceMaterial ( materials ) {

  	this.uuid = THREE$Math.generateUUID();

  	this.type = 'MeshFaceMaterial';
  	
  	this.materials = materials instanceof Array ? materials : [];

  }

  THREE$MeshFaceMaterial.prototype = {

  	constructor: THREE$MeshFaceMaterial,

  	toJSON: function () {

  		var output = {
  			metadata: {
  				version: 4.2,
  				type: 'material',
  				generator: 'MaterialExporter'
  			},
  			uuid: this.uuid,
  			type: this.type,
  			materials: []
  		};

  		for ( var i = 0, l = this.materials.length; i < l; i ++ ) {

  			output.materials.push( this.materials[ i ].toJSON() );

  		}

  		return output;

  	},

  	clone: function () {

  		var material = new THREE$MeshFaceMaterial();

  		for ( var i = 0; i < this.materials.length; i ++ ) {

  			material.materials.push( this.materials[ i ].clone() );

  		}

  		return material;

  	}

  };



  /**
   * @author alteredq / http://alteredqualia.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author bhouston / http://exocortex.com
   */

  function THREE$Matrix3 () {

  	this.elements = new Float32Array( [

  		1, 0, 0,
  		0, 1, 0,
  		0, 0, 1

  	] );

  	if ( arguments.length > 0 ) {

  		THREE$error( 'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.' );

  	}

  }

  THREE$Matrix3.prototype = {

  	constructor: THREE$Matrix3,

  	set: function ( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

  		var te = this.elements;

  		te[ 0 ] = n11; te[ 3 ] = n12; te[ 6 ] = n13;
  		te[ 1 ] = n21; te[ 4 ] = n22; te[ 7 ] = n23;
  		te[ 2 ] = n31; te[ 5 ] = n32; te[ 8 ] = n33;

  		return this;

  	},

  	identity: function () {

  		this.set(

  			1, 0, 0,
  			0, 1, 0,
  			0, 0, 1

  		);

  		return this;

  	},

  	copy: function ( m ) {

  		var me = m.elements;

  		this.set(

  			me[ 0 ], me[ 3 ], me[ 6 ],
  			me[ 1 ], me[ 4 ], me[ 7 ],
  			me[ 2 ], me[ 5 ], me[ 8 ]

  		);

  		return this;

  	},

  	multiplyVector3: function ( vector ) {

  		THREE$warn( 'THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.' );
  		return vector.applyMatrix3( this );

  	},

  	multiplyVector3Array: function ( a ) {

  		THREE$warn( 'THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.' );
  		return this.applyToVector3Array( a );

  	},

  	applyToVector3Array: function () {

  		var v1 = new THREE$Vector3();

  		return function ( array, offset, length ) {

  			if ( offset === undefined ) offset = 0;
  			if ( length === undefined ) length = array.length;

  			for ( var i = 0, j = offset; i < length; i += 3, j += 3 ) {

  				v1.x = array[ j ];
  				v1.y = array[ j + 1 ];
  				v1.z = array[ j + 2 ];

  				v1.applyMatrix3( this );

  				array[ j ]     = v1.x;
  				array[ j + 1 ] = v1.y;
  				array[ j + 2 ] = v1.z;

  			}

  			return array;

  		};

  	}(),

  	multiplyScalar: function ( s ) {

  		var te = this.elements;

  		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
  		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
  		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

  		return this;

  	},

  	determinant: function () {

  		var te = this.elements;

  		var a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
  			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
  			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

  		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

  	},

  	getInverse: function ( matrix, throwOnInvertible ) {

  		// input: THREE.Matrix4
  		// ( based on http://code.google.com/p/webgl-mjs/ )

  		var me = matrix.elements;
  		var te = this.elements;

  		te[ 0 ] =   me[ 10 ] * me[ 5 ] - me[ 6 ] * me[ 9 ];
  		te[ 1 ] = - me[ 10 ] * me[ 1 ] + me[ 2 ] * me[ 9 ];
  		te[ 2 ] =   me[ 6 ] * me[ 1 ] - me[ 2 ] * me[ 5 ];
  		te[ 3 ] = - me[ 10 ] * me[ 4 ] + me[ 6 ] * me[ 8 ];
  		te[ 4 ] =   me[ 10 ] * me[ 0 ] - me[ 2 ] * me[ 8 ];
  		te[ 5 ] = - me[ 6 ] * me[ 0 ] + me[ 2 ] * me[ 4 ];
  		te[ 6 ] =   me[ 9 ] * me[ 4 ] - me[ 5 ] * me[ 8 ];
  		te[ 7 ] = - me[ 9 ] * me[ 0 ] + me[ 1 ] * me[ 8 ];
  		te[ 8 ] =   me[ 5 ] * me[ 0 ] - me[ 1 ] * me[ 4 ];

  		var det = me[ 0 ] * te[ 0 ] + me[ 1 ] * te[ 3 ] + me[ 2 ] * te[ 6 ];

  		// no inverse

  		if ( det === 0 ) {

  			var msg = "Matrix3.getInverse(): can't invert matrix, determinant is 0";

  			if ( throwOnInvertible || false ) {

  				throw new Error( msg );

  			} else {

  				THREE$warn( msg );

  			}

  			this.identity();

  			return this;

  		}

  		this.multiplyScalar( 1.0 / det );

  		return this;

  	},

  	transpose: function () {

  		var tmp, m = this.elements;

  		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
  		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
  		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

  		return this;

  	},

  	flattenToArrayOffset: function ( array, offset ) {

  		var te = this.elements;

  		array[ offset     ] = te[ 0 ];
  		array[ offset + 1 ] = te[ 1 ];
  		array[ offset + 2 ] = te[ 2 ];

  		array[ offset + 3 ] = te[ 3 ];
  		array[ offset + 4 ] = te[ 4 ];
  		array[ offset + 5 ] = te[ 5 ];

  		array[ offset + 6 ] = te[ 6 ];
  		array[ offset + 7 ] = te[ 7 ];
  		array[ offset + 8 ]  = te[ 8 ];

  		return array;

  	},

  	getNormalMatrix: function ( m ) {

  		// input: THREE.Matrix4

  		this.getInverse( m ).transpose();

  		return this;

  	},

  	transposeIntoArray: function ( r ) {

  		var m = this.elements;

  		r[ 0 ] = m[ 0 ];
  		r[ 1 ] = m[ 3 ];
  		r[ 2 ] = m[ 6 ];
  		r[ 3 ] = m[ 1 ];
  		r[ 4 ] = m[ 4 ];
  		r[ 5 ] = m[ 7 ];
  		r[ 6 ] = m[ 2 ];
  		r[ 7 ] = m[ 5 ];
  		r[ 8 ] = m[ 8 ];

  		return this;

  	},

  	fromArray: function ( array ) {

  		this.elements.set( array );

  		return this;

  	},

  	toArray: function () {

  		var te = this.elements;

  		return [
  			te[ 0 ], te[ 1 ], te[ 2 ],
  			te[ 3 ], te[ 4 ], te[ 5 ],
  			te[ 6 ], te[ 7 ], te[ 8 ]
  		];

  	},

  	clone: function () {

  		return new THREE$Matrix3().fromArray( this.elements );

  	}

  };



  /**
   * @author bhouston / http://exocortex.com
   */

  function THREE$Plane ( normal, constant ) {

  	this.normal = ( normal !== undefined ) ? normal : new THREE$Vector3( 1, 0, 0 );
  	this.constant = ( constant !== undefined ) ? constant : 0;

  }

  THREE$Plane.prototype = {

  	constructor: THREE$Plane,

  	set: function ( normal, constant ) {

  		this.normal.copy( normal );
  		this.constant = constant;

  		return this;

  	},

  	setComponents: function ( x, y, z, w ) {

  		this.normal.set( x, y, z );
  		this.constant = w;

  		return this;

  	},

  	setFromNormalAndCoplanarPoint: function ( normal, point ) {

  		this.normal.copy( normal );
  		this.constant = - point.dot( this.normal );	// must be this.normal, not normal, as this.normal is normalized

  		return this;

  	},

  	setFromCoplanarPoints: function () {

  		var v1 = new THREE$Vector3();
  		var v2 = new THREE$Vector3();

  		return function ( a, b, c ) {

  			var normal = v1.subVectors( c, b ).cross( v2.subVectors( a, b ) ).normalize();

  			// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?

  			this.setFromNormalAndCoplanarPoint( normal, a );

  			return this;

  		};

  	}(),


  	copy: function ( plane ) {

  		this.normal.copy( plane.normal );
  		this.constant = plane.constant;

  		return this;

  	},

  	normalize: function () {

  		// Note: will lead to a divide by zero if the plane is invalid.

  		var inverseNormalLength = 1.0 / this.normal.length();
  		this.normal.multiplyScalar( inverseNormalLength );
  		this.constant *= inverseNormalLength;

  		return this;

  	},

  	negate: function () {

  		this.constant *= - 1;
  		this.normal.negate();

  		return this;

  	},

  	distanceToPoint: function ( point ) {

  		return this.normal.dot( point ) + this.constant;

  	},

  	distanceToSphere: function ( sphere ) {

  		return this.distanceToPoint( sphere.center ) - sphere.radius;

  	},

  	projectPoint: function ( point, optionalTarget ) {

  		return this.orthoPoint( point, optionalTarget ).sub( point ).negate();

  	},

  	orthoPoint: function ( point, optionalTarget ) {

  		var perpendicularMagnitude = this.distanceToPoint( point );

  		var result = optionalTarget || new THREE$Vector3();
  		return result.copy( this.normal ).multiplyScalar( perpendicularMagnitude );

  	},

  	isIntersectionLine: function ( line ) {

  		// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.

  		var startSign = this.distanceToPoint( line.start );
  		var endSign = this.distanceToPoint( line.end );

  		return ( startSign < 0 && endSign > 0 ) || ( endSign < 0 && startSign > 0 );

  	},

  	intersectLine: function () {

  		var v1 = new THREE$Vector3();

  		return function ( line, optionalTarget ) {

  			var result = optionalTarget || new THREE$Vector3();

  			var direction = line.delta( v1 );

  			var denominator = this.normal.dot( direction );

  			if ( denominator == 0 ) {

  				// line is coplanar, return origin
  				if ( this.distanceToPoint( line.start ) == 0 ) {

  					return result.copy( line.start );

  				}

  				// Unsure if this is the correct method to handle this case.
  				return undefined;

  			}

  			var t = - ( line.start.dot( this.normal ) + this.constant ) / denominator;

  			if ( t < 0 || t > 1 ) {

  				return undefined;

  			}

  			return result.copy( direction ).multiplyScalar( t ).add( line.start );

  		};

  	}(),


  	coplanarPoint: function ( optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();
  		return result.copy( this.normal ).multiplyScalar( - this.constant );

  	},

  	applyMatrix4: function () {

  		var v1 = new THREE$Vector3();
  		var v2 = new THREE$Vector3();
  		var m1 = new THREE$Matrix3();

  		return function ( matrix, optionalNormalMatrix ) {

  			// compute new normal based on theory here:
  			// http://www.songho.ca/opengl/gl_normaltransform.html
  			var normalMatrix = optionalNormalMatrix || m1.getNormalMatrix( matrix );
  			var newNormal = v1.copy( this.normal ).applyMatrix3( normalMatrix );

  			var newCoplanarPoint = this.coplanarPoint( v2 );
  			newCoplanarPoint.applyMatrix4( matrix );

  			this.setFromNormalAndCoplanarPoint( newNormal, newCoplanarPoint );

  			return this;

  		};

  	}(),

  	translate: function ( offset ) {

  		this.constant = this.constant - offset.dot( this.normal );

  		return this;

  	},

  	equals: function ( plane ) {

  		return plane.normal.equals( this.normal ) && ( plane.constant == this.constant );

  	},

  	clone: function () {

  		return new THREE$Plane().copy( this );

  	}

  };



  /**
   * @author bhouston / http://exocortex.com
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$Triangle ( a, b, c ) {

  	this.a = ( a !== undefined ) ? a : new THREE$Vector3();
  	this.b = ( b !== undefined ) ? b : new THREE$Vector3();
  	this.c = ( c !== undefined ) ? c : new THREE$Vector3();

  }

  THREE$Triangle.normal = function () {

  	var v0 = new THREE$Vector3();

  	return function ( a, b, c, optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();

  		result.subVectors( c, b );
  		v0.subVectors( a, b );
  		result.cross( v0 );

  		var resultLengthSq = result.lengthSq();
  		if ( resultLengthSq > 0 ) {

  			return result.multiplyScalar( 1 / Math.sqrt( resultLengthSq ) );

  		}

  		return result.set( 0, 0, 0 );

  	};

  }();

  // static/instance method to calculate barycoordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  THREE$Triangle.barycoordFromPoint = function () {

  	var v0 = new THREE$Vector3();
  	var v1 = new THREE$Vector3();
  	var v2 = new THREE$Vector3();

  	return function ( point, a, b, c, optionalTarget ) {

  		v0.subVectors( c, a );
  		v1.subVectors( b, a );
  		v2.subVectors( point, a );

  		var dot00 = v0.dot( v0 );
  		var dot01 = v0.dot( v1 );
  		var dot02 = v0.dot( v2 );
  		var dot11 = v1.dot( v1 );
  		var dot12 = v1.dot( v2 );

  		var denom = ( dot00 * dot11 - dot01 * dot01 );

  		var result = optionalTarget || new THREE$Vector3();

  		// colinear or singular triangle
  		if ( denom == 0 ) {
  			// arbitrary location outside of triangle?
  			// not sure if this is the best idea, maybe should be returning undefined
  			return result.set( - 2, - 1, - 1 );
  		}

  		var invDenom = 1 / denom;
  		var u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom;
  		var v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

  		// barycoordinates must always sum to 1
  		return result.set( 1 - u - v, v, u );

  	};

  }();

  THREE$Triangle.containsPoint = function () {

  	var v1 = new THREE$Vector3();

  	return function ( point, a, b, c ) {

  		var result = THREE$Triangle.barycoordFromPoint( point, a, b, c, v1 );

  		return ( result.x >= 0 ) && ( result.y >= 0 ) && ( ( result.x + result.y ) <= 1 );

  	};

  }();

  THREE$Triangle.prototype = {

  	constructor: THREE$Triangle,

  	set: function ( a, b, c ) {

  		this.a.copy( a );
  		this.b.copy( b );
  		this.c.copy( c );

  		return this;

  	},

  	setFromPointsAndIndices: function ( points, i0, i1, i2 ) {

  		this.a.copy( points[ i0 ] );
  		this.b.copy( points[ i1 ] );
  		this.c.copy( points[ i2 ] );

  		return this;

  	},

  	copy: function ( triangle ) {

  		this.a.copy( triangle.a );
  		this.b.copy( triangle.b );
  		this.c.copy( triangle.c );

  		return this;

  	},

  	area: function () {

  		var v0 = new THREE$Vector3();
  		var v1 = new THREE$Vector3();

  		return function () {

  			v0.subVectors( this.c, this.b );
  			v1.subVectors( this.a, this.b );

  			return v0.cross( v1 ).length() * 0.5;

  		};

  	}(),

  	midpoint: function ( optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();
  		return result.addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 );

  	},

  	normal: function ( optionalTarget ) {

  		return THREE$Triangle.normal( this.a, this.b, this.c, optionalTarget );

  	},

  	plane: function ( optionalTarget ) {

  		var result = optionalTarget || new THREE$Plane();

  		return result.setFromCoplanarPoints( this.a, this.b, this.c );

  	},

  	barycoordFromPoint: function ( point, optionalTarget ) {

  		return THREE$Triangle.barycoordFromPoint( point, this.a, this.b, this.c, optionalTarget );

  	},

  	containsPoint: function ( point ) {

  		return THREE$Triangle.containsPoint( point, this.a, this.b, this.c );

  	},

  	equals: function ( triangle ) {

  		return triangle.a.equals( this.a ) && triangle.b.equals( this.b ) && triangle.c.equals( this.c );

  	},

  	clone: function () {

  		return new THREE$Triangle().copy( this );

  	}

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Face3 ( a, b, c, normal, color, materialIndex ) {

  	this.a = a;
  	this.b = b;
  	this.c = c;

  	this.normal = normal instanceof THREE$Vector3 ? normal : new THREE$Vector3();
  	this.vertexNormals = normal instanceof Array ? normal : [];

  	this.color = color instanceof THREE$Color ? color : new THREE$Color();
  	this.vertexColors = color instanceof Array ? color : [];

  	this.vertexTangents = [];

  	this.materialIndex = materialIndex !== undefined ? materialIndex : 0;

  }

  THREE$Face3.prototype = {

  	constructor: THREE$Face3,

  	clone: function () {

  		var face = new THREE$Face3( this.a, this.b, this.c );

  		face.normal.copy( this.normal );
  		face.color.copy( this.color );

  		face.materialIndex = this.materialIndex;

  		for ( var i = 0, il = this.vertexNormals.length; i < il; i ++ ) {

  			face.vertexNormals[ i ] = this.vertexNormals[ i ].clone();

  		}

  		for ( var i = 0, il = this.vertexColors.length; i < il; i ++ ) {

  			face.vertexColors[ i ] = this.vertexColors[ i ].clone();

  		}

  		for ( var i = 0, il = this.vertexTangents.length; i < il; i ++ ) {

  			face.vertexTangents[ i ] = this.vertexTangents[ i ].clone();

  		}

  		return face;

  	}

  };



  /**
   * @author bhouston / http://exocortex.com
   * @author WestLangley / http://github.com/WestLangley
   */

  function THREE$Box3 ( min, max ) {

  	this.min = ( min !== undefined ) ? min : new THREE$Vector3( Infinity, Infinity, Infinity );
  	this.max = ( max !== undefined ) ? max : new THREE$Vector3( - Infinity, - Infinity, - Infinity );

  }

  THREE$Box3.prototype = {

  	constructor: THREE$Box3,

  	set: function ( min, max ) {

  		this.min.copy( min );
  		this.max.copy( max );

  		return this;

  	},

  	setFromPoints: function ( points ) {

  		this.makeEmpty();

  		for ( var i = 0, il = points.length; i < il; i ++ ) {

  			this.expandByPoint( points[ i ] )

  		}

  		return this;

  	},

  	setFromCenterAndSize: function () {

  		var v1 = new THREE$Vector3();

  		return function ( center, size ) {

  			var halfSize = v1.copy( size ).multiplyScalar( 0.5 );

  			this.min.copy( center ).sub( halfSize );
  			this.max.copy( center ).add( halfSize );

  			return this;

  		};

  	}(),

  	setFromObject: function () {

  		// Computes the world-axis-aligned bounding box of an object (including its children),
  		// accounting for both the object's, and childrens', world transforms

  		var v1 = new THREE$Vector3();

  		return function ( object ) {

  			var scope = this;

  			object.updateMatrixWorld( true );

  			this.makeEmpty();

  			object.traverse( function ( node ) {

  				var geometry = node.geometry;

  				if ( geometry !== undefined ) {

  					if ( geometry instanceof THREE$Geometry ) {

  						var vertices = geometry.vertices;

  						for ( var i = 0, il = vertices.length; i < il; i ++ ) {

  							v1.copy( vertices[ i ] );

  							v1.applyMatrix4( node.matrixWorld );

  							scope.expandByPoint( v1 );

  						}

  					} else if ( geometry instanceof THREE$BufferGeometry && geometry.attributes[ 'position' ] !== undefined ) {

  						var positions = geometry.attributes[ 'position' ].array;

  						for ( var i = 0, il = positions.length; i < il; i += 3 ) {

  							v1.set( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] );

  							v1.applyMatrix4( node.matrixWorld );

  							scope.expandByPoint( v1 );

  						}

  					}

  				}

  			} );

  			return this;

  		};

  	}(),

  	copy: function ( box ) {

  		this.min.copy( box.min );
  		this.max.copy( box.max );

  		return this;

  	},

  	makeEmpty: function () {

  		this.min.x = this.min.y = this.min.z = Infinity;
  		this.max.x = this.max.y = this.max.z = - Infinity;

  		return this;

  	},

  	empty: function () {

  		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

  		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

  	},

  	center: function ( optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();
  		return result.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

  	},

  	size: function ( optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();
  		return result.subVectors( this.max, this.min );

  	},

  	expandByPoint: function ( point ) {

  		this.min.min( point );
  		this.max.max( point );

  		return this;

  	},

  	expandByVector: function ( vector ) {

  		this.min.sub( vector );
  		this.max.add( vector );

  		return this;

  	},

  	expandByScalar: function ( scalar ) {

  		this.min.addScalar( - scalar );
  		this.max.addScalar( scalar );

  		return this;

  	},

  	containsPoint: function ( point ) {

  		if ( point.x < this.min.x || point.x > this.max.x ||
  		     point.y < this.min.y || point.y > this.max.y ||
  		     point.z < this.min.z || point.z > this.max.z ) {

  			return false;

  		}

  		return true;

  	},

  	containsBox: function ( box ) {

  		if ( ( this.min.x <= box.min.x ) && ( box.max.x <= this.max.x ) &&
  			 ( this.min.y <= box.min.y ) && ( box.max.y <= this.max.y ) &&
  			 ( this.min.z <= box.min.z ) && ( box.max.z <= this.max.z ) ) {

  			return true;

  		}

  		return false;

  	},

  	getParameter: function ( point, optionalTarget ) {

  		// This can potentially have a divide by zero if the box
  		// has a size dimension of 0.

  		var result = optionalTarget || new THREE$Vector3();

  		return result.set(
  			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
  			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
  			( point.z - this.min.z ) / ( this.max.z - this.min.z )
  		);

  	},

  	isIntersectionBox: function ( box ) {

  		// using 6 splitting planes to rule out intersections.

  		if ( box.max.x < this.min.x || box.min.x > this.max.x ||
  		     box.max.y < this.min.y || box.min.y > this.max.y ||
  		     box.max.z < this.min.z || box.min.z > this.max.z ) {

  			return false;

  		}

  		return true;

  	},

  	clampPoint: function ( point, optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();
  		return result.copy( point ).clamp( this.min, this.max );

  	},

  	distanceToPoint: function () {

  		var v1 = new THREE$Vector3();

  		return function ( point ) {

  			var clampedPoint = v1.copy( point ).clamp( this.min, this.max );
  			return clampedPoint.sub( point ).length();

  		};

  	}(),

  	getBoundingSphere: function () {

  		var v1 = new THREE$Vector3();

  		return function ( optionalTarget ) {

  			var result = optionalTarget || new THREE$Sphere();

  			result.center = this.center();
  			result.radius = this.size( v1 ).length() * 0.5;

  			return result;

  		};

  	}(),

  	intersect: function ( box ) {

  		this.min.max( box.min );
  		this.max.min( box.max );

  		return this;

  	},

  	union: function ( box ) {

  		this.min.min( box.min );
  		this.max.max( box.max );

  		return this;

  	},

  	applyMatrix4: function () {

  		var points = [
  			new THREE$Vector3(),
  			new THREE$Vector3(),
  			new THREE$Vector3(),
  			new THREE$Vector3(),
  			new THREE$Vector3(),
  			new THREE$Vector3(),
  			new THREE$Vector3(),
  			new THREE$Vector3()
  		];

  		return function ( matrix ) {

  			// NOTE: I am using a binary pattern to specify all 2^3 combinations below
  			points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
  			points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
  			points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
  			points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
  			points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
  			points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
  			points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
  			points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix );  // 111

  			this.makeEmpty();
  			this.setFromPoints( points );

  			return this;

  		};

  	}(),

  	translate: function ( offset ) {

  		this.min.add( offset );
  		this.max.add( offset );

  		return this;

  	},

  	equals: function ( box ) {

  		return box.min.equals( this.min ) && box.max.equals( this.max );

  	},

  	clone: function () {

  		return new THREE$Box3().copy( this );

  	}

  };



  /**
   * @author bhouston / http://exocortex.com
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$Sphere ( center, radius ) {

  	this.center = ( center !== undefined ) ? center : new THREE$Vector3();
  	this.radius = ( radius !== undefined ) ? radius : 0;

  }

  THREE$Sphere.prototype = {

  	constructor: THREE$Sphere,

  	set: function ( center, radius ) {

  		this.center.copy( center );
  		this.radius = radius;

  		return this;
  	},

  	setFromPoints: function () {

  		var box = new THREE$Box3();

  		return function ( points, optionalCenter ) {

  			var center = this.center;

  			if ( optionalCenter !== undefined ) {

  				center.copy( optionalCenter );

  			} else {

  				box.setFromPoints( points ).center( center );

  			}

  			var maxRadiusSq = 0;

  			for ( var i = 0, il = points.length; i < il; i ++ ) {

  				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

  			}

  			this.radius = Math.sqrt( maxRadiusSq );

  			return this;

  		};

  	}(),

  	copy: function ( sphere ) {

  		this.center.copy( sphere.center );
  		this.radius = sphere.radius;

  		return this;

  	},

  	empty: function () {

  		return ( this.radius <= 0 );

  	},

  	containsPoint: function ( point ) {

  		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

  	},

  	distanceToPoint: function ( point ) {

  		return ( point.distanceTo( this.center ) - this.radius );

  	},

  	intersectsSphere: function ( sphere ) {

  		var radiusSum = this.radius + sphere.radius;

  		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

  	},

  	clampPoint: function ( point, optionalTarget ) {

  		var deltaLengthSq = this.center.distanceToSquared( point );

  		var result = optionalTarget || new THREE$Vector3();
  		result.copy( point );

  		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

  			result.sub( this.center ).normalize();
  			result.multiplyScalar( this.radius ).add( this.center );

  		}

  		return result;

  	},

  	getBoundingBox: function ( optionalTarget ) {

  		var box = optionalTarget || new THREE$Box3();

  		box.set( this.center, this.center );
  		box.expandByScalar( this.radius );

  		return box;

  	},

  	applyMatrix4: function ( matrix ) {

  		this.center.applyMatrix4( matrix );
  		this.radius = this.radius * matrix.getMaxScaleOnAxis();

  		return this;

  	},

  	translate: function ( offset ) {

  		this.center.add( offset );

  		return this;

  	},

  	equals: function ( sphere ) {

  		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

  	},

  	clone: function () {

  		return new THREE$Sphere().copy( this );

  	}

  };



  /**
   * @author bhouston / http://exocortex.com
   */

  function THREE$Ray ( origin, direction ) {

  	this.origin = ( origin !== undefined ) ? origin : new THREE$Vector3();
  	this.direction = ( direction !== undefined ) ? direction : new THREE$Vector3();

  }

  THREE$Ray.prototype = {

  	constructor: THREE$Ray,

  	set: function ( origin, direction ) {

  		this.origin.copy( origin );
  		this.direction.copy( direction );

  		return this;

  	},

  	copy: function ( ray ) {

  		this.origin.copy( ray.origin );
  		this.direction.copy( ray.direction );

  		return this;

  	},

  	at: function ( t, optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();

  		return result.copy( this.direction ).multiplyScalar( t ).add( this.origin );

  	},

  	recast: function () {

  		var v1 = new THREE$Vector3();

  		return function ( t ) {

  			this.origin.copy( this.at( t, v1 ) );

  			return this;

  		};

  	}(),

  	closestPointToPoint: function ( point, optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();
  		result.subVectors( point, this.origin );
  		var directionDistance = result.dot( this.direction );

  		if ( directionDistance < 0 ) {

  			return result.copy( this.origin );

  		}

  		return result.copy( this.direction ).multiplyScalar( directionDistance ).add( this.origin );

  	},

  	distanceToPoint: function () {

  		var v1 = new THREE$Vector3();

  		return function ( point ) {

  			var directionDistance = v1.subVectors( point, this.origin ).dot( this.direction );

  			// point behind the ray

  			if ( directionDistance < 0 ) {

  				return this.origin.distanceTo( point );

  			}

  			v1.copy( this.direction ).multiplyScalar( directionDistance ).add( this.origin );

  			return v1.distanceTo( point );

  		};

  	}(),

  	distanceSqToSegment: function () {

  		var segCenter = new THREE$Vector3();
  		var segDir = new THREE$Vector3();
  		var diff = new THREE$Vector3();

  		return function ( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

  			// from http://www.geometrictools.com/LibMathematics/Distance/Wm5DistRay3Segment3.cpp
  			// It returns the min distance between the ray and the segment
  			// defined by v0 and v1
  			// It can also set two optional targets :
  			// - The closest point on the ray
  			// - The closest point on the segment

  			segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
  			segDir.copy( v1 ).sub( v0 ).normalize();
  			diff.copy( this.origin ).sub( segCenter );

  			var segExtent = v0.distanceTo( v1 ) * 0.5;
  			var a01 = - this.direction.dot( segDir );
  			var b0 = diff.dot( this.direction );
  			var b1 = - diff.dot( segDir );
  			var c = diff.lengthSq();
  			var det = Math.abs( 1 - a01 * a01 );
  			var s0, s1, sqrDist, extDet;

  			if ( det > 0 ) {

  				// The ray and segment are not parallel.

  				s0 = a01 * b1 - b0;
  				s1 = a01 * b0 - b1;
  				extDet = segExtent * det;

  				if ( s0 >= 0 ) {

  					if ( s1 >= - extDet ) {

  						if ( s1 <= extDet ) {

  							// region 0
  							// Minimum at interior points of ray and segment.

  							var invDet = 1 / det;
  							s0 *= invDet;
  							s1 *= invDet;
  							sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

  						} else {

  							// region 1

  							s1 = segExtent;
  							s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
  							sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

  						}

  					} else {

  						// region 5

  						s1 = - segExtent;
  						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
  						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

  					}

  				} else {

  					if ( s1 <= - extDet ) {

  						// region 4

  						s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
  						s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
  						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

  					} else if ( s1 <= extDet ) {

  						// region 3

  						s0 = 0;
  						s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
  						sqrDist = s1 * ( s1 + 2 * b1 ) + c;

  					} else {

  						// region 2

  						s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
  						s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
  						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

  					}

  				}

  			} else {

  				// Ray and segment are parallel.

  				s1 = ( a01 > 0 ) ? - segExtent : segExtent;
  				s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
  				sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

  			}

  			if ( optionalPointOnRay ) {

  				optionalPointOnRay.copy( this.direction ).multiplyScalar( s0 ).add( this.origin );

  			}

  			if ( optionalPointOnSegment ) {

  				optionalPointOnSegment.copy( segDir ).multiplyScalar( s1 ).add( segCenter );

  			}

  			return sqrDist;

  		};

  	}(),


  	isIntersectionSphere: function ( sphere ) {

  		return this.distanceToPoint( sphere.center ) <= sphere.radius;

  	},

  	intersectSphere: function () {

  		// from http://www.scratchapixel.com/lessons/3d-basic-lessons/lesson-7-intersecting-simple-shapes/ray-sphere-intersection/

  		var v1 = new THREE$Vector3();

  		return function ( sphere, optionalTarget ) {

  			v1.subVectors( sphere.center, this.origin );

  			var tca = v1.dot( this.direction );

  			var d2 = v1.dot( v1 ) - tca * tca;

  			var radius2 = sphere.radius * sphere.radius;

  			if ( d2 > radius2 ) return null;

  			var thc = Math.sqrt( radius2 - d2 );

  			// t0 = first intersect point - entrance on front of sphere
  			var t0 = tca - thc;

  			// t1 = second intersect point - exit point on back of sphere
  			var t1 = tca + thc;

  			// test to see if both t0 and t1 are behind the ray - if so, return null
  			if ( t0 < 0 && t1 < 0 ) return null;

  			// test to see if t0 is behind the ray:
  			// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
  			// in order to always return an intersect point that is in front of the ray.
  			if ( t0 < 0 ) return this.at( t1, optionalTarget );

  			// else t0 is in front of the ray, so return the first collision point scaled by t0 
  			return this.at( t0, optionalTarget );

  		}

  	}(),

  	isIntersectionPlane: function ( plane ) {

  		// check if the ray lies on the plane first

  		var distToPoint = plane.distanceToPoint( this.origin );

  		if ( distToPoint === 0 ) {

  			return true;

  		}

  		var denominator = plane.normal.dot( this.direction );

  		if ( denominator * distToPoint < 0 ) {

  			return true;

  		}

  		// ray origin is behind the plane (and is pointing behind it)

  		return false;

  	},

  	distanceToPlane: function ( plane ) {

  		var denominator = plane.normal.dot( this.direction );
  		if ( denominator == 0 ) {

  			// line is coplanar, return origin
  			if ( plane.distanceToPoint( this.origin ) == 0 ) {

  				return 0;

  			}

  			// Null is preferable to undefined since undefined means.... it is undefined

  			return null;

  		}

  		var t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

  		// Return if the ray never intersects the plane

  		return t >= 0 ? t :  null;

  	},

  	intersectPlane: function ( plane, optionalTarget ) {

  		var t = this.distanceToPlane( plane );

  		if ( t === null ) {

  			return null;
  		}

  		return this.at( t, optionalTarget );

  	},

  	isIntersectionBox: function () {

  		var v = new THREE$Vector3();

  		return function ( box ) {

  			return this.intersectBox( box, v ) !== null;

  		};

  	}(),

  	intersectBox: function ( box, optionalTarget ) {

  		// http://www.scratchapixel.com/lessons/3d-basic-lessons/lesson-7-intersecting-simple-shapes/ray-box-intersection/

  		var tmin,tmax,tymin,tymax,tzmin,tzmax;

  		var invdirx = 1 / this.direction.x,
  			invdiry = 1 / this.direction.y,
  			invdirz = 1 / this.direction.z;

  		var origin = this.origin;

  		if ( invdirx >= 0 ) {

  			tmin = ( box.min.x - origin.x ) * invdirx;
  			tmax = ( box.max.x - origin.x ) * invdirx;

  		} else {

  			tmin = ( box.max.x - origin.x ) * invdirx;
  			tmax = ( box.min.x - origin.x ) * invdirx;
  		}

  		if ( invdiry >= 0 ) {

  			tymin = ( box.min.y - origin.y ) * invdiry;
  			tymax = ( box.max.y - origin.y ) * invdiry;

  		} else {

  			tymin = ( box.max.y - origin.y ) * invdiry;
  			tymax = ( box.min.y - origin.y ) * invdiry;
  		}

  		if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

  		// These lines also handle the case where tmin or tmax is NaN
  		// (result of 0 * Infinity). x !== x returns true if x is NaN

  		if ( tymin > tmin || tmin !== tmin ) tmin = tymin;

  		if ( tymax < tmax || tmax !== tmax ) tmax = tymax;

  		if ( invdirz >= 0 ) {

  			tzmin = ( box.min.z - origin.z ) * invdirz;
  			tzmax = ( box.max.z - origin.z ) * invdirz;

  		} else {

  			tzmin = ( box.max.z - origin.z ) * invdirz;
  			tzmax = ( box.min.z - origin.z ) * invdirz;
  		}

  		if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

  		if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

  		if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

  		//return point closest to the ray (positive side)

  		if ( tmax < 0 ) return null;

  		return this.at( tmin >= 0 ? tmin : tmax, optionalTarget );

  	},

  	intersectTriangle: function () {

  		// Compute the offset origin, edges, and normal.
  		var diff = new THREE$Vector3();
  		var edge1 = new THREE$Vector3();
  		var edge2 = new THREE$Vector3();
  		var normal = new THREE$Vector3();

  		return function ( a, b, c, backfaceCulling, optionalTarget ) {

  			// from http://www.geometrictools.com/LibMathematics/Intersection/Wm5IntrRay3Triangle3.cpp

  			edge1.subVectors( b, a );
  			edge2.subVectors( c, a );
  			normal.crossVectors( edge1, edge2 );

  			// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
  			// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
  			//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
  			//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
  			//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
  			var DdN = this.direction.dot( normal );
  			var sign;

  			if ( DdN > 0 ) {

  				if ( backfaceCulling ) return null;
  				sign = 1;

  			} else if ( DdN < 0 ) {

  				sign = - 1;
  				DdN = - DdN;

  			} else {

  				return null;

  			}

  			diff.subVectors( this.origin, a );
  			var DdQxE2 = sign * this.direction.dot( edge2.crossVectors( diff, edge2 ) );

  			// b1 < 0, no intersection
  			if ( DdQxE2 < 0 ) {

  				return null;

  			}

  			var DdE1xQ = sign * this.direction.dot( edge1.cross( diff ) );

  			// b2 < 0, no intersection
  			if ( DdE1xQ < 0 ) {

  				return null;

  			}

  			// b1+b2 > 1, no intersection
  			if ( DdQxE2 + DdE1xQ > DdN ) {

  				return null;

  			}

  			// Line intersects triangle, check if ray does.
  			var QdN = - sign * diff.dot( normal );

  			// t < 0, no intersection
  			if ( QdN < 0 ) {

  				return null;

  			}

  			// Ray intersects triangle.
  			return this.at( QdN / DdN, optionalTarget );

  		};

  	}(),

  	applyMatrix4: function ( matrix4 ) {

  		this.direction.add( this.origin ).applyMatrix4( matrix4 );
  		this.origin.applyMatrix4( matrix4 );
  		this.direction.sub( this.origin );
  		this.direction.normalize();

  		return this;
  	},

  	equals: function ( ray ) {

  		return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

  	},

  	clone: function () {

  		return new THREE$Ray().copy( this );

  	}

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   * @author WestLangley / http://github.com/WestLangley
   */

  function THREE$Object3D () {

  	Object.defineProperty( this, 'id', { value: THREE$Object3DIdCount() } );

  	this.uuid = THREE$Math.generateUUID();

  	this.name = '';
  	this.type = 'Object3D';

  	this.parent = undefined;
  	this.children = [];

  	this.up = THREE$Object3D.DefaultUp.clone();

  	var position = new THREE$Vector3();
  	var rotation = new THREE$Euler();
  	var quaternion = new THREE$Quaternion();
  	var scale = new THREE$Vector3( 1, 1, 1 );

  	var onRotationChange = function () {
  		quaternion.setFromEuler( rotation, false );
  	};

  	var onQuaternionChange = function () {
  		rotation.setFromQuaternion( quaternion, undefined, false );
  	};

  	rotation.onChange( onRotationChange );
  	quaternion.onChange( onQuaternionChange );

  	Object.defineProperties( this, {
  		position: {
  			enumerable: true,
  			value: position
  		},
  		rotation: {
  			enumerable: true,
  			value: rotation
  		},
  		quaternion: {
  			enumerable: true,
  			value: quaternion
  		},
  		scale: {
  			enumerable: true,
  			value: scale
  		}
  	} );

  	this.rotationAutoUpdate = true;

  	this.matrix = new THREE$Matrix4();
  	this.matrixWorld = new THREE$Matrix4();

  	this.matrixAutoUpdate = true;
  	this.matrixWorldNeedsUpdate = false;

  	this.visible = true;

  	this.castShadow = false;
  	this.receiveShadow = false;

  	this.frustumCulled = true;
  	this.renderOrder = 0;

  	this.userData = {};

  }

  THREE$Object3D.DefaultUp = new THREE$Vector3( 0, 1, 0 );

  THREE$Object3D.prototype = {

  	constructor: THREE$Object3D,

  	get eulerOrder () {

  		THREE$warn( 'THREE.Object3D: .eulerOrder has been moved to .rotation.order.' );

  		return this.rotation.order;

  	},

  	set eulerOrder ( value ) {

  		THREE$warn( 'THREE.Object3D: .eulerOrder has been moved to .rotation.order.' );

  		this.rotation.order = value;

  	},

  	get useQuaternion () {

  		THREE$warn( 'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

  	},

  	set useQuaternion ( value ) {

  		THREE$warn( 'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

  	},

  	applyMatrix: function ( matrix ) {

  		this.matrix.multiplyMatrices( matrix, this.matrix );

  		this.matrix.decompose( this.position, this.quaternion, this.scale );

  	},

  	setRotationFromAxisAngle: function ( axis, angle ) {

  		// assumes axis is normalized

  		this.quaternion.setFromAxisAngle( axis, angle );

  	},

  	setRotationFromEuler: function ( euler ) {

  		this.quaternion.setFromEuler( euler, true );

  	},

  	setRotationFromMatrix: function ( m ) {

  		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

  		this.quaternion.setFromRotationMatrix( m );

  	},

  	setRotationFromQuaternion: function ( q ) {

  		// assumes q is normalized

  		this.quaternion.copy( q );

  	},

  	rotateOnAxis: function () {

  		// rotate object on axis in object space
  		// axis is assumed to be normalized

  		var q1 = new THREE$Quaternion();

  		return function ( axis, angle ) {

  			q1.setFromAxisAngle( axis, angle );

  			this.quaternion.multiply( q1 );

  			return this;

  		}

  	}(),

  	rotateX: function () {

  		var v1 = new THREE$Vector3( 1, 0, 0 );

  		return function ( angle ) {

  			return this.rotateOnAxis( v1, angle );

  		};

  	}(),

  	rotateY: function () {

  		var v1 = new THREE$Vector3( 0, 1, 0 );

  		return function ( angle ) {

  			return this.rotateOnAxis( v1, angle );

  		};

  	}(),

  	rotateZ: function () {

  		var v1 = new THREE$Vector3( 0, 0, 1 );

  		return function ( angle ) {

  			return this.rotateOnAxis( v1, angle );

  		};

  	}(),

  	translateOnAxis: function () {

  		// translate object by distance along axis in object space
  		// axis is assumed to be normalized

  		var v1 = new THREE$Vector3();

  		return function ( axis, distance ) {

  			v1.copy( axis ).applyQuaternion( this.quaternion );

  			this.position.add( v1.multiplyScalar( distance ) );

  			return this;

  		}

  	}(),

  	translate: function ( distance, axis ) {

  		THREE$warn( 'THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.' );
  		return this.translateOnAxis( axis, distance );

  	},

  	translateX: function () {

  		var v1 = new THREE$Vector3( 1, 0, 0 );

  		return function ( distance ) {

  			return this.translateOnAxis( v1, distance );

  		};

  	}(),

  	translateY: function () {

  		var v1 = new THREE$Vector3( 0, 1, 0 );

  		return function ( distance ) {

  			return this.translateOnAxis( v1, distance );

  		};

  	}(),

  	translateZ: function () {

  		var v1 = new THREE$Vector3( 0, 0, 1 );

  		return function ( distance ) {

  			return this.translateOnAxis( v1, distance );

  		};

  	}(),

  	localToWorld: function ( vector ) {

  		return vector.applyMatrix4( this.matrixWorld );

  	},

  	worldToLocal: function () {

  		var m1 = new THREE$Matrix4();

  		return function ( vector ) {

  			return vector.applyMatrix4( m1.getInverse( this.matrixWorld ) );

  		};

  	}(),

  	lookAt: function () {

  		// This routine does not support objects with rotated and/or translated parent(s)

  		var m1 = new THREE$Matrix4();

  		return function ( vector ) {

  			m1.lookAt( vector, this.position, this.up );

  			this.quaternion.setFromRotationMatrix( m1 );

  		};

  	}(),

  	add: function ( object ) {

  		if ( arguments.length > 1 ) {

  			for ( var i = 0; i < arguments.length; i ++ ) {

  				this.add( arguments[ i ] );

  			}

  			return this;

  		};

  		if ( object === this ) {

  			THREE$error( "THREE.Object3D.add: object can't be added as a child of itself.", object );
  			return this;

  		}

  		if ( object instanceof THREE$Object3D ) {

  			if ( object.parent !== undefined ) {

  				object.parent.remove( object );

  			}

  			object.parent = this;
  			object.dispatchEvent( { type: 'added' } );

  			this.children.push( object );

  		} else {

  			THREE$error( "THREE.Object3D.add: object not an instance of THREE.Object3D.", object );

  		}

  		return this;

  	},

  	remove: function ( object ) {

  		if ( arguments.length > 1 ) {

  			for ( var i = 0; i < arguments.length; i ++ ) {

  				this.remove( arguments[ i ] );

  			}

  		};

  		var index = this.children.indexOf( object );

  		if ( index !== - 1 ) {

  			object.parent = undefined;

  			object.dispatchEvent( { type: 'removed' } );

  			this.children.splice( index, 1 );

  		}

  	},

  	getChildByName: function ( name ) {

  		THREE$warn( 'THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().' );
  		return this.getObjectByName( name );

  	},

  	getObjectById: function ( id ) {

  		return this.getObjectByProperty( 'id', id );

  	},

  	getObjectByName: function ( name ) {

  		return this.getObjectByProperty( 'name', name );

  	},

  	getObjectByProperty: function ( name, value ) {

  		if ( this[ name ] === value ) return this;

  		for ( var i = 0, l = this.children.length; i < l; i ++ ) {

  			var child = this.children[ i ];
  			var object = child.getObjectByProperty( name, value );

  			if ( object !== undefined ) {

  				return object;

  			}

  		}

  		return undefined;

  	},

  	getWorldPosition: function ( optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();

  		this.updateMatrixWorld( true );

  		return result.setFromMatrixPosition( this.matrixWorld );

  	},

  	getWorldQuaternion: function () {

  		var position = new THREE$Vector3();
  		var scale = new THREE$Vector3();

  		return function ( optionalTarget ) {

  			var result = optionalTarget || new THREE$Quaternion();

  			this.updateMatrixWorld( true );

  			this.matrixWorld.decompose( position, result, scale );

  			return result;

  		}

  	}(),

  	getWorldRotation: function () {

  		var quaternion = new THREE$Quaternion();

  		return function ( optionalTarget ) {

  			var result = optionalTarget || new THREE$Euler();

  			this.getWorldQuaternion( quaternion );

  			return result.setFromQuaternion( quaternion, this.rotation.order, false );

  		}

  	}(),

  	getWorldScale: function () {

  		var position = new THREE$Vector3();
  		var quaternion = new THREE$Quaternion();

  		return function ( optionalTarget ) {

  			var result = optionalTarget || new THREE$Vector3();

  			this.updateMatrixWorld( true );

  			this.matrixWorld.decompose( position, quaternion, result );

  			return result;

  		}

  	}(),

  	getWorldDirection: function () {

  		var quaternion = new THREE$Quaternion();

  		return function ( optionalTarget ) {

  			var result = optionalTarget || new THREE$Vector3();

  			this.getWorldQuaternion( quaternion );

  			return result.set( 0, 0, 1 ).applyQuaternion( quaternion );

  		}

  	}(),

  	raycast: function () {},

  	traverse: function ( callback ) {

  		callback( this );

  		for ( var i = 0, l = this.children.length; i < l; i ++ ) {

  			this.children[ i ].traverse( callback );

  		}

  	},

  	traverseVisible: function ( callback ) {

  		if ( this.visible === false ) return;

  		callback( this );

  		for ( var i = 0, l = this.children.length; i < l; i ++ ) {

  			this.children[ i ].traverseVisible( callback );

  		}

  	},

  	traverseAncestors: function ( callback ) {

  		if ( this.parent ) {

  			callback( this.parent );

  			this.parent.traverseAncestors( callback );

  		}

  	},

  	updateMatrix: function () {

  		this.matrix.compose( this.position, this.quaternion, this.scale );

  		this.matrixWorldNeedsUpdate = true;

  	},

  	updateMatrixWorld: function ( force ) {

  		if ( this.matrixAutoUpdate === true ) this.updateMatrix();

  		if ( this.matrixWorldNeedsUpdate === true || force === true ) {

  			if ( this.parent === undefined ) {

  				this.matrixWorld.copy( this.matrix );

  			} else {

  				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

  			}

  			this.matrixWorldNeedsUpdate = false;

  			force = true;

  		}

  		// update children

  		for ( var i = 0, l = this.children.length; i < l; i ++ ) {

  			this.children[ i ].updateMatrixWorld( force );

  		}

  	},

  	toJSON: function () {

  		var output = {
  			metadata: {
  				version: 4.3,
  				type: 'Object',
  				generator: 'ObjectExporter'
  			}
  		};

  		//

  		var geometries = {};

  		var parseGeometry = function ( geometry ) {

  			if ( output.geometries === undefined ) {

  				output.geometries = [];

  			}

  			if ( geometries[ geometry.uuid ] === undefined ) {

  				var json = geometry.toJSON();

  				delete json.metadata;

  				geometries[ geometry.uuid ] = json;

  				output.geometries.push( json );

  			}

  			return geometry.uuid;

  		};

  		//

  		var materials = {};

  		var parseMaterial = function ( material ) {

  			if ( output.materials === undefined ) {

  				output.materials = [];

  			}

  			if ( materials[ material.uuid ] === undefined ) {

  				var json = material.toJSON();

  				delete json.metadata;

  				materials[ material.uuid ] = json;

  				output.materials.push( json );

  			}

  			return material.uuid;

  		};

  		//

  		var parseObject = function ( object ) {

  			var data = {};

  			data.uuid = object.uuid;
  			data.type = object.type;

  			if ( object.name !== '' ) data.name = object.name;
  			if ( JSON.stringify( object.userData ) !== '{}' ) data.userData = object.userData;
  			if ( object.visible !== true ) data.visible = object.visible;

  			if ( object instanceof THREE$PerspectiveCamera ) {

  				data.fov = object.fov;
  				data.aspect = object.aspect;
  				data.near = object.near;
  				data.far = object.far;

  			} else if ( object instanceof THREE$OrthographicCamera ) {

  				data.left = object.left;
  				data.right = object.right;
  				data.top = object.top;
  				data.bottom = object.bottom;
  				data.near = object.near;
  				data.far = object.far;

  			} else if ( object instanceof THREE$AmbientLight ) {

  				data.color = object.color.getHex();

  			} else if ( object instanceof THREE$DirectionalLight ) {

  				data.color = object.color.getHex();
  				data.intensity = object.intensity;

  			} else if ( object instanceof THREE$PointLight ) {

  				data.color = object.color.getHex();
  				data.intensity = object.intensity;
  				data.distance = object.distance;
  				data.decay = object.decay;

  			} else if ( object instanceof THREE$SpotLight ) {

  				data.color = object.color.getHex();
  				data.intensity = object.intensity;
  				data.distance = object.distance;
  				data.angle = object.angle;
  				data.exponent = object.exponent;
  				data.decay = object.decay;

  			} else if ( object instanceof THREE$HemisphereLight ) {

  				data.color = object.color.getHex();
  				data.groundColor = object.groundColor.getHex();

  			} else if ( object instanceof THREE$Mesh || object instanceof THREE$Line || object instanceof THREE$PointCloud ) {

  				data.geometry = parseGeometry( object.geometry );
  				data.material = parseMaterial( object.material );

  				if ( object instanceof THREE$Line ) data.mode = object.mode;

  			} else if ( object instanceof THREE$Sprite ) {

  				data.material = parseMaterial( object.material );

  			}

  			data.matrix = object.matrix.toArray();

  			if ( object.children.length > 0 ) {

  				data.children = [];

  				for ( var i = 0; i < object.children.length; i ++ ) {

  					data.children.push( parseObject( object.children[ i ] ) );

  				}

  			}

  			return data;

  		}

  		output.object = parseObject( this );

  		return output;

  	},

  	clone: function ( object, recursive ) {

  		if ( object === undefined ) object = new THREE$Object3D();
  		if ( recursive === undefined ) recursive = true;

  		object.name = this.name;

  		object.up.copy( this.up );

  		object.position.copy( this.position );
  		object.quaternion.copy( this.quaternion );
  		object.scale.copy( this.scale );

  		object.rotationAutoUpdate = this.rotationAutoUpdate;

  		object.matrix.copy( this.matrix );
  		object.matrixWorld.copy( this.matrixWorld );

  		object.matrixAutoUpdate = this.matrixAutoUpdate;
  		object.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;

  		object.visible = this.visible;

  		object.castShadow = this.castShadow;
  		object.receiveShadow = this.receiveShadow;

  		object.frustumCulled = this.frustumCulled;

  		object.userData = JSON.parse( JSON.stringify( this.userData ) );

  		if ( recursive === true ) {

  			for ( var i = 0; i < this.children.length; i ++ ) {

  				var child = this.children[ i ];
  				object.add( child.clone() );

  			}

  		}

  		return object;

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$Object3D.prototype );

  var _count = 0;
  function THREE$Object3DIdCount () { return _count++; }


  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   * @author mikael emtinger / http://gomo.se/
   * @author jonobr1 / http://jonobr1.com/
   */

  function THREE$Mesh ( geometry, material ) {

  	THREE$Object3D.call( this );

  	this.type = 'Mesh';
  	
  	this.geometry = geometry !== undefined ? geometry : new THREE$Geometry();
  	this.material = material !== undefined ? material : new THREE$MeshBasicMaterial( { color: Math.random() * 0xffffff } );

  	this.updateMorphTargets();

  }

  THREE$Mesh.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Mesh.prototype.constructor = THREE$Mesh;

  THREE$Mesh.prototype.updateMorphTargets = function () {

  	if ( this.geometry.morphTargets !== undefined && this.geometry.morphTargets.length > 0 ) {

  		this.morphTargetBase = - 1;
  		this.morphTargetForcedOrder = [];
  		this.morphTargetInfluences = [];
  		this.morphTargetDictionary = {};

  		for ( var m = 0, ml = this.geometry.morphTargets.length; m < ml; m ++ ) {

  			this.morphTargetInfluences.push( 0 );
  			this.morphTargetDictionary[ this.geometry.morphTargets[ m ].name ] = m;

  		}

  	}

  };

  THREE$Mesh.prototype.getMorphTargetIndexByName = function ( name ) {

  	if ( this.morphTargetDictionary[ name ] !== undefined ) {

  		return this.morphTargetDictionary[ name ];

  	}

  	THREE$warn( 'THREE.Mesh.getMorphTargetIndexByName: morph target ' + name + ' does not exist. Returning 0.' );

  	return 0;

  };


  THREE$Mesh.prototype.raycast = ( function () {

  	var inverseMatrix = new THREE$Matrix4();
  	var ray = new THREE$Ray();
  	var sphere = new THREE$Sphere();

  	var vA = new THREE$Vector3();
  	var vB = new THREE$Vector3();
  	var vC = new THREE$Vector3();

  	return function ( raycaster, intersects ) {

  		var geometry = this.geometry;

  		// Checking boundingSphere distance to ray

  		if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

  		sphere.copy( geometry.boundingSphere );
  		sphere.applyMatrix4( this.matrixWorld );

  		if ( raycaster.ray.isIntersectionSphere( sphere ) === false ) {

  			return;

  		}

  		// Check boundingBox before continuing

  		inverseMatrix.getInverse( this.matrixWorld );
  		ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

  		if ( geometry.boundingBox !== null ) {

  			if ( ray.isIntersectionBox( geometry.boundingBox ) === false ) {

  				return;

  			}

  		}

  		if ( geometry instanceof THREE$BufferGeometry ) {

  			var material = this.material;

  			if ( material === undefined ) return;

  			var attributes = geometry.attributes;

  			var a, b, c;
  			var precision = raycaster.precision;

  			if ( attributes.index !== undefined ) {

  				var indices = attributes.index.array;
  				var positions = attributes.position.array;
  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					offsets = [ { start: 0, count: indices.length, index: 0 } ];

  				}

  				for ( var oi = 0, ol = offsets.length; oi < ol; ++ oi ) {

  					var start = offsets[ oi ].start;
  					var count = offsets[ oi ].count;
  					var index = offsets[ oi ].index;

  					for ( var i = start, il = start + count; i < il; i += 3 ) {

  						a = index + indices[ i ];
  						b = index + indices[ i + 1 ];
  						c = index + indices[ i + 2 ];

  						vA.fromArray( positions, a * 3 );
  						vB.fromArray( positions, b * 3 );
  						vC.fromArray( positions, c * 3 );

  						if ( material.side === THREE$BackSide ) {

  							var intersectionPoint = ray.intersectTriangle( vC, vB, vA, true );

  						} else {

  							var intersectionPoint = ray.intersectTriangle( vA, vB, vC, material.side !== THREE$DoubleSide );

  						}

  						if ( intersectionPoint === null ) continue;

  						intersectionPoint.applyMatrix4( this.matrixWorld );

  						var distance = raycaster.ray.origin.distanceTo( intersectionPoint );

  						if ( distance < precision || distance < raycaster.near || distance > raycaster.far ) continue;

  						intersects.push( {

  							distance: distance,
  							point: intersectionPoint,
  							face: new THREE$Face3( a, b, c, THREE$Triangle.normal( vA, vB, vC ) ),
  							faceIndex: null,
  							object: this

  						} );

  					}

  				}

  			} else {

  				var positions = attributes.position.array;

  				for ( var i = 0, j = 0, il = positions.length; i < il; i += 3, j += 9 ) {

  					a = i;
  					b = i + 1;
  					c = i + 2;

  					vA.fromArray( positions, j );
  					vB.fromArray( positions, j + 3 );
  					vC.fromArray( positions, j + 6 );

  					if ( material.side === THREE$BackSide ) {

  						var intersectionPoint = ray.intersectTriangle( vC, vB, vA, true );

  					} else {

  						var intersectionPoint = ray.intersectTriangle( vA, vB, vC, material.side !== THREE$DoubleSide );

  					}

  					if ( intersectionPoint === null ) continue;

  					intersectionPoint.applyMatrix4( this.matrixWorld );

  					var distance = raycaster.ray.origin.distanceTo( intersectionPoint );

  					if ( distance < precision || distance < raycaster.near || distance > raycaster.far ) continue;

  					intersects.push( {

  						distance: distance,
  						point: intersectionPoint,
  						face: new THREE$Face3( a, b, c, THREE$Triangle.normal( vA, vB, vC ) ),
  						faceIndex: null,
  						object: this

  					} );

  				}

  			}

  		} else if ( geometry instanceof THREE$Geometry ) {

  			var isFaceMaterial = this.material instanceof THREE$MeshFaceMaterial;
  			var objectMaterials = isFaceMaterial === true ? this.material.materials : null;

  			var a, b, c;
  			var precision = raycaster.precision;

  			var vertices = geometry.vertices;

  			for ( var f = 0, fl = geometry.faces.length; f < fl; f ++ ) {

  				var face = geometry.faces[ f ];

  				var material = isFaceMaterial === true ? objectMaterials[ face.materialIndex ] : this.material;

  				if ( material === undefined ) continue;

  				a = vertices[ face.a ];
  				b = vertices[ face.b ];
  				c = vertices[ face.c ];

  				if ( material.morphTargets === true ) {

  					var morphTargets = geometry.morphTargets;
  					var morphInfluences = this.morphTargetInfluences;

  					vA.set( 0, 0, 0 );
  					vB.set( 0, 0, 0 );
  					vC.set( 0, 0, 0 );

  					for ( var t = 0, tl = morphTargets.length; t < tl; t ++ ) {

  						var influence = morphInfluences[ t ];

  						if ( influence === 0 ) continue;

  						var targets = morphTargets[ t ].vertices;

  						vA.x += ( targets[ face.a ].x - a.x ) * influence;
  						vA.y += ( targets[ face.a ].y - a.y ) * influence;
  						vA.z += ( targets[ face.a ].z - a.z ) * influence;

  						vB.x += ( targets[ face.b ].x - b.x ) * influence;
  						vB.y += ( targets[ face.b ].y - b.y ) * influence;
  						vB.z += ( targets[ face.b ].z - b.z ) * influence;

  						vC.x += ( targets[ face.c ].x - c.x ) * influence;
  						vC.y += ( targets[ face.c ].y - c.y ) * influence;
  						vC.z += ( targets[ face.c ].z - c.z ) * influence;

  					}

  					vA.add( a );
  					vB.add( b );
  					vC.add( c );

  					a = vA;
  					b = vB;
  					c = vC;

  				}

  				if ( material.side === THREE$BackSide ) {

  					var intersectionPoint = ray.intersectTriangle( c, b, a, true );

  				} else {

  					var intersectionPoint = ray.intersectTriangle( a, b, c, material.side !== THREE$DoubleSide );

  				}

  				if ( intersectionPoint === null ) continue;

  				intersectionPoint.applyMatrix4( this.matrixWorld );

  				var distance = raycaster.ray.origin.distanceTo( intersectionPoint );

  				if ( distance < precision || distance < raycaster.near || distance > raycaster.far ) continue;

  				intersects.push( {

  					distance: distance,
  					point: intersectionPoint,
  					face: face,
  					faceIndex: f,
  					object: this

  				} );

  			}

  		}

  	};

  }() );

  THREE$Mesh.prototype.clone = function ( object, recursive ) {

  	if ( object === undefined ) object = new THREE$Mesh( this.geometry, this.material );

  	THREE$Object3D.prototype.clone.call( this, object, recursive );

  	return object;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author kile / http://kile.stravaganza.org/
   * @author alteredq / http://alteredqualia.com/
   * @author mikael emtinger / http://gomo.se/
   * @author zz85 / http://www.lab4games.net/zz85/blog
   * @author bhouston / http://exocortex.com
   */

  function THREE$Geometry () {

  	Object.defineProperty( this, 'id', { value: THREE$GeometryIdCount() } );

  	this.uuid = THREE$Math.generateUUID();

  	this.name = '';
  	this.type = 'Geometry';

  	this.vertices = [];
  	this.colors = [];  // one-to-one vertex colors, used in Points and Line

  	this.faces = [];

  	this.faceVertexUvs = [ [] ];

  	this.morphTargets = [];
  	this.morphColors = [];
  	this.morphNormals = [];

  	this.skinWeights = [];
  	this.skinIndices = [];

  	this.lineDistances = [];

  	this.boundingBox = null;
  	this.boundingSphere = null;

  	this.hasTangents = false;

  	this.dynamic = true; // the intermediate typed arrays will be deleted when set to false

  	// update flags

  	this.verticesNeedUpdate = false;
  	this.elementsNeedUpdate = false;
  	this.uvsNeedUpdate = false;
  	this.normalsNeedUpdate = false;
  	this.tangentsNeedUpdate = false;
  	this.colorsNeedUpdate = false;
  	this.lineDistancesNeedUpdate = false;

  	this.groupsNeedUpdate = false;

  }

  THREE$Geometry.prototype = {

  	constructor: THREE$Geometry,

  	applyMatrix: function ( matrix ) {

  		var normalMatrix = new THREE$Matrix3().getNormalMatrix( matrix );

  		for ( var i = 0, il = this.vertices.length; i < il; i ++ ) {

  			var vertex = this.vertices[ i ];
  			vertex.applyMatrix4( matrix );

  		}

  		for ( var i = 0, il = this.faces.length; i < il; i ++ ) {

  			var face = this.faces[ i ];
  			face.normal.applyMatrix3( normalMatrix ).normalize();

  			for ( var j = 0, jl = face.vertexNormals.length; j < jl; j ++ ) {

  				face.vertexNormals[ j ].applyMatrix3( normalMatrix ).normalize();

  			}

  		}

  		if ( this.boundingBox !== null ) {

  			this.computeBoundingBox();

  		}

  		if ( this.boundingSphere !== null ) {

  			this.computeBoundingSphere();

  		}

  		this.verticesNeedUpdate = true;
  		this.normalsNeedUpdate = true;

  	},

  	fromBufferGeometry: function ( geometry ) {

  		var scope = this;

  		var attributes = geometry.attributes;

  		var vertices = attributes.position.array;
  		var indices = attributes.index !== undefined ? attributes.index.array : undefined;
  		var normals = attributes.normal !== undefined ? attributes.normal.array : undefined;
  		var colors = attributes.color !== undefined ? attributes.color.array : undefined;
  		var uvs = attributes.uv !== undefined ? attributes.uv.array : undefined;

  		var tempNormals = [];
  		var tempUVs = [];

  		for ( var i = 0, j = 0; i < vertices.length; i += 3, j += 2 ) {

  			scope.vertices.push( new THREE$Vector3( vertices[ i ], vertices[ i + 1 ], vertices[ i + 2 ] ) );

  			if ( normals !== undefined ) {

  				tempNormals.push( new THREE$Vector3( normals[ i ], normals[ i + 1 ], normals[ i + 2 ] ) );

  			}

  			if ( colors !== undefined ) {

  				scope.colors.push( new THREE$Color( colors[ i ], colors[ i + 1 ], colors[ i + 2 ] ) );

  			}

  			if ( uvs !== undefined ) {

  				tempUVs.push( new THREE$Vector2( uvs[ j ], uvs[ j + 1 ] ) );

  			}

  		}

  		var addFace = function ( a, b, c ) {

  			var vertexNormals = normals !== undefined ? [ tempNormals[ a ].clone(), tempNormals[ b ].clone(), tempNormals[ c ].clone() ] : [];
  			var vertexColors = colors !== undefined ? [ scope.colors[ a ].clone(), scope.colors[ b ].clone(), scope.colors[ c ].clone() ] : [];

  			scope.faces.push( new THREE$Face3( a, b, c, vertexNormals, vertexColors ) );

  			if ( uvs !== undefined ) {

  				scope.faceVertexUvs[ 0 ].push( [ tempUVs[ a ].clone(), tempUVs[ b ].clone(), tempUVs[ c ].clone() ] );

  			}

  		};

  		if ( indices !== undefined ) {

  			var drawcalls = geometry.drawcalls;

  			if ( drawcalls.length > 0 ) {

  				for ( var i = 0; i < drawcalls.length; i ++ ) {

  					var drawcall = drawcalls[ i ];

  					var start = drawcall.start;
  					var count = drawcall.count;
  					var index = drawcall.index;

  					for ( var j = start, jl = start + count; j < jl; j += 3 ) {

  						addFace( index + indices[ j ], index + indices[ j + 1 ], index + indices[ j + 2 ] );

  					}

  				}

  			} else {

  				for ( var i = 0; i < indices.length; i += 3 ) {

  					addFace( indices[ i ], indices[ i + 1 ], indices[ i + 2 ] );

  				}

  			}

  		} else {

  			for ( var i = 0; i < vertices.length / 3; i += 3 ) {

  				addFace( i, i + 1, i + 2 );

  			}

  		}

  		this.computeFaceNormals();

  		if ( geometry.boundingBox !== null ) {

  			this.boundingBox = geometry.boundingBox.clone();

  		}

  		if ( geometry.boundingSphere !== null ) {

  			this.boundingSphere = geometry.boundingSphere.clone();

  		}

  		return this;

  	},

  	center: function () {

  		this.computeBoundingBox();

  		var offset = this.boundingBox.center().negate();

  		this.applyMatrix( new THREE$Matrix4().setPosition( offset ) );

  		return offset;

  	},

  	computeFaceNormals: function () {

  		var cb = new THREE$Vector3(), ab = new THREE$Vector3();

  		for ( var f = 0, fl = this.faces.length; f < fl; f ++ ) {

  			var face = this.faces[ f ];

  			var vA = this.vertices[ face.a ];
  			var vB = this.vertices[ face.b ];
  			var vC = this.vertices[ face.c ];

  			cb.subVectors( vC, vB );
  			ab.subVectors( vA, vB );
  			cb.cross( ab );

  			cb.normalize();

  			face.normal.copy( cb );

  		}

  	},

  	computeVertexNormals: function ( areaWeighted ) {

  		var v, vl, f, fl, face, vertices;

  		vertices = new Array( this.vertices.length );

  		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

  			vertices[ v ] = new THREE$Vector3();

  		}

  		if ( areaWeighted ) {

  			// vertex normals weighted by triangle areas
  			// http://www.iquilezles.org/www/articles/normals/normals.htm

  			var vA, vB, vC;
  			var cb = new THREE$Vector3(), ab = new THREE$Vector3();

  			for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  				face = this.faces[ f ];

  				vA = this.vertices[ face.a ];
  				vB = this.vertices[ face.b ];
  				vC = this.vertices[ face.c ];

  				cb.subVectors( vC, vB );
  				ab.subVectors( vA, vB );
  				cb.cross( ab );

  				vertices[ face.a ].add( cb );
  				vertices[ face.b ].add( cb );
  				vertices[ face.c ].add( cb );

  			}

  		} else {

  			for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  				face = this.faces[ f ];

  				vertices[ face.a ].add( face.normal );
  				vertices[ face.b ].add( face.normal );
  				vertices[ face.c ].add( face.normal );

  			}

  		}

  		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

  			vertices[ v ].normalize();

  		}

  		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  			face = this.faces[ f ];

  			face.vertexNormals[ 0 ] = vertices[ face.a ].clone();
  			face.vertexNormals[ 1 ] = vertices[ face.b ].clone();
  			face.vertexNormals[ 2 ] = vertices[ face.c ].clone();

  		}

  	},

  	computeMorphNormals: function () {

  		var i, il, f, fl, face;

  		// save original normals
  		// - create temp variables on first access
  		//   otherwise just copy (for faster repeated calls)

  		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  			face = this.faces[ f ];

  			if ( ! face.__originalFaceNormal ) {

  				face.__originalFaceNormal = face.normal.clone();

  			} else {

  				face.__originalFaceNormal.copy( face.normal );

  			}

  			if ( ! face.__originalVertexNormals ) face.__originalVertexNormals = [];

  			for ( i = 0, il = face.vertexNormals.length; i < il; i ++ ) {

  				if ( ! face.__originalVertexNormals[ i ] ) {

  					face.__originalVertexNormals[ i ] = face.vertexNormals[ i ].clone();

  				} else {

  					face.__originalVertexNormals[ i ].copy( face.vertexNormals[ i ] );

  				}

  			}

  		}

  		// use temp geometry to compute face and vertex normals for each morph

  		var tmpGeo = new THREE$Geometry();
  		tmpGeo.faces = this.faces;

  		for ( i = 0, il = this.morphTargets.length; i < il; i ++ ) {

  			// create on first access

  			if ( ! this.morphNormals[ i ] ) {

  				this.morphNormals[ i ] = {};
  				this.morphNormals[ i ].faceNormals = [];
  				this.morphNormals[ i ].vertexNormals = [];

  				var dstNormalsFace = this.morphNormals[ i ].faceNormals;
  				var dstNormalsVertex = this.morphNormals[ i ].vertexNormals;

  				var faceNormal, vertexNormals;

  				for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  					faceNormal = new THREE$Vector3();
  					vertexNormals = { a: new THREE$Vector3(), b: new THREE$Vector3(), c: new THREE$Vector3() };

  					dstNormalsFace.push( faceNormal );
  					dstNormalsVertex.push( vertexNormals );

  				}

  			}

  			var morphNormals = this.morphNormals[ i ];

  			// set vertices to morph target

  			tmpGeo.vertices = this.morphTargets[ i ].vertices;

  			// compute morph normals

  			tmpGeo.computeFaceNormals();
  			tmpGeo.computeVertexNormals();

  			// store morph normals

  			var faceNormal, vertexNormals;

  			for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  				face = this.faces[ f ];

  				faceNormal = morphNormals.faceNormals[ f ];
  				vertexNormals = morphNormals.vertexNormals[ f ];

  				faceNormal.copy( face.normal );

  				vertexNormals.a.copy( face.vertexNormals[ 0 ] );
  				vertexNormals.b.copy( face.vertexNormals[ 1 ] );
  				vertexNormals.c.copy( face.vertexNormals[ 2 ] );

  			}

  		}

  		// restore original normals

  		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  			face = this.faces[ f ];

  			face.normal = face.__originalFaceNormal;
  			face.vertexNormals = face.__originalVertexNormals;

  		}

  	},

  	computeTangents: function () {

  		// based on http://www.terathon.com/code/tangent.html
  		// tangents go to vertices

  		var f, fl, v, vl, i, vertexIndex,
  			face, uv, vA, vB, vC, uvA, uvB, uvC,
  			x1, x2, y1, y2, z1, z2,
  			s1, s2, t1, t2, r, t, test,
  			tan1 = [], tan2 = [],
  			sdir = new THREE$Vector3(), tdir = new THREE$Vector3(),
  			tmp = new THREE$Vector3(), tmp2 = new THREE$Vector3(),
  			n = new THREE$Vector3(), w;

  		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

  			tan1[ v ] = new THREE$Vector3();
  			tan2[ v ] = new THREE$Vector3();

  		}

  		function handleTriangle( context, a, b, c, ua, ub, uc ) {

  			vA = context.vertices[ a ];
  			vB = context.vertices[ b ];
  			vC = context.vertices[ c ];

  			uvA = uv[ ua ];
  			uvB = uv[ ub ];
  			uvC = uv[ uc ];

  			x1 = vB.x - vA.x;
  			x2 = vC.x - vA.x;
  			y1 = vB.y - vA.y;
  			y2 = vC.y - vA.y;
  			z1 = vB.z - vA.z;
  			z2 = vC.z - vA.z;

  			s1 = uvB.x - uvA.x;
  			s2 = uvC.x - uvA.x;
  			t1 = uvB.y - uvA.y;
  			t2 = uvC.y - uvA.y;

  			r = 1.0 / ( s1 * t2 - s2 * t1 );
  			sdir.set( ( t2 * x1 - t1 * x2 ) * r,
  					  ( t2 * y1 - t1 * y2 ) * r,
  					  ( t2 * z1 - t1 * z2 ) * r );
  			tdir.set( ( s1 * x2 - s2 * x1 ) * r,
  					  ( s1 * y2 - s2 * y1 ) * r,
  					  ( s1 * z2 - s2 * z1 ) * r );

  			tan1[ a ].add( sdir );
  			tan1[ b ].add( sdir );
  			tan1[ c ].add( sdir );

  			tan2[ a ].add( tdir );
  			tan2[ b ].add( tdir );
  			tan2[ c ].add( tdir );

  		}

  		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  			face = this.faces[ f ];
  			uv = this.faceVertexUvs[ 0 ][ f ]; // use UV layer 0 for tangents

  			handleTriangle( this, face.a, face.b, face.c, 0, 1, 2 );

  		}

  		var faceIndex = [ 'a', 'b', 'c', 'd' ];

  		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

  			face = this.faces[ f ];

  			for ( i = 0; i < Math.min( face.vertexNormals.length, 3 ); i ++ ) {

  				n.copy( face.vertexNormals[ i ] );

  				vertexIndex = face[ faceIndex[ i ] ];

  				t = tan1[ vertexIndex ];

  				// Gram-Schmidt orthogonalize

  				tmp.copy( t );
  				tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

  				// Calculate handedness

  				tmp2.crossVectors( face.vertexNormals[ i ], t );
  				test = tmp2.dot( tan2[ vertexIndex ] );
  				w = ( test < 0.0 ) ? - 1.0 : 1.0;

  				face.vertexTangents[ i ] = new THREE$Vector4( tmp.x, tmp.y, tmp.z, w );

  			}

  		}

  		this.hasTangents = true;

  	},

  	computeLineDistances: function () {

  		var d = 0;
  		var vertices = this.vertices;

  		for ( var i = 0, il = vertices.length; i < il; i ++ ) {

  			if ( i > 0 ) {

  				d += vertices[ i ].distanceTo( vertices[ i - 1 ] );

  			}

  			this.lineDistances[ i ] = d;

  		}

  	},

  	computeBoundingBox: function () {

  		if ( this.boundingBox === null ) {

  			this.boundingBox = new THREE$Box3();

  		}

  		this.boundingBox.setFromPoints( this.vertices );

  	},

  	computeBoundingSphere: function () {

  		if ( this.boundingSphere === null ) {

  			this.boundingSphere = new THREE$Sphere();

  		}

  		this.boundingSphere.setFromPoints( this.vertices );

  	},

  	merge: function ( geometry, matrix, materialIndexOffset ) {

  		if ( geometry instanceof THREE$Geometry === false ) {

  			THREE$error( 'THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.', geometry );
  			return;

  		}

  		var normalMatrix,
  		vertexOffset = this.vertices.length,
  		vertices1 = this.vertices,
  		vertices2 = geometry.vertices,
  		faces1 = this.faces,
  		faces2 = geometry.faces,
  		uvs1 = this.faceVertexUvs[ 0 ],
  		uvs2 = geometry.faceVertexUvs[ 0 ];

  		if ( materialIndexOffset === undefined ) materialIndexOffset = 0;

  		if ( matrix !== undefined ) {

  			normalMatrix = new THREE$Matrix3().getNormalMatrix( matrix );

  		}

  		// vertices

  		for ( var i = 0, il = vertices2.length; i < il; i ++ ) {

  			var vertex = vertices2[ i ];

  			var vertexCopy = vertex.clone();

  			if ( matrix !== undefined ) vertexCopy.applyMatrix4( matrix );

  			vertices1.push( vertexCopy );

  		}

  		// faces

  		for ( i = 0, il = faces2.length; i < il; i ++ ) {

  			var face = faces2[ i ], faceCopy, normal, color,
  			faceVertexNormals = face.vertexNormals,
  			faceVertexColors = face.vertexColors;

  			faceCopy = new THREE$Face3( face.a + vertexOffset, face.b + vertexOffset, face.c + vertexOffset );
  			faceCopy.normal.copy( face.normal );

  			if ( normalMatrix !== undefined ) {

  				faceCopy.normal.applyMatrix3( normalMatrix ).normalize();

  			}

  			for ( var j = 0, jl = faceVertexNormals.length; j < jl; j ++ ) {

  				normal = faceVertexNormals[ j ].clone();

  				if ( normalMatrix !== undefined ) {

  					normal.applyMatrix3( normalMatrix ).normalize();

  				}

  				faceCopy.vertexNormals.push( normal );

  			}

  			faceCopy.color.copy( face.color );

  			for ( var j = 0, jl = faceVertexColors.length; j < jl; j ++ ) {

  				color = faceVertexColors[ j ];
  				faceCopy.vertexColors.push( color.clone() );

  			}

  			faceCopy.materialIndex = face.materialIndex + materialIndexOffset;

  			faces1.push( faceCopy );

  		}

  		// uvs

  		for ( i = 0, il = uvs2.length; i < il; i ++ ) {

  			var uv = uvs2[ i ], uvCopy = [];

  			if ( uv === undefined ) {

  				continue;

  			}

  			for ( var j = 0, jl = uv.length; j < jl; j ++ ) {

  				uvCopy.push( uv[ j ].clone() );

  			}

  			uvs1.push( uvCopy );

  		}

  	},

  	mergeMesh: function ( mesh ) {

  		if ( mesh instanceof THREE$Mesh === false ) {

  			THREE$error( 'THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.', mesh );
  			return;

  		}

  		mesh.matrixAutoUpdate && mesh.updateMatrix();

  		this.merge( mesh.geometry, mesh.matrix );

  	},

  	/*
  	 * Checks for duplicate vertices with hashmap.
  	 * Duplicated vertices are removed
  	 * and faces' vertices are updated.
  	 */

  	mergeVertices: function () {

  		var verticesMap = {}; // Hashmap for looking up vertice by position coordinates (and making sure they are unique)
  		var unique = [], changes = [];

  		var v, key;
  		var precisionPoints = 4; // number of decimal points, eg. 4 for epsilon of 0.0001
  		var precision = Math.pow( 10, precisionPoints );
  		var i, il, face;
  		var indices, j, jl;

  		for ( i = 0, il = this.vertices.length; i < il; i ++ ) {

  			v = this.vertices[ i ];
  			key = Math.round( v.x * precision ) + '_' + Math.round( v.y * precision ) + '_' + Math.round( v.z * precision );

  			if ( verticesMap[ key ] === undefined ) {

  				verticesMap[ key ] = i;
  				unique.push( this.vertices[ i ] );
  				changes[ i ] = unique.length - 1;

  			} else {

  				//console.log('Duplicate vertex found. ', i, ' could be using ', verticesMap[key]);
  				changes[ i ] = changes[ verticesMap[ key ] ];

  			}

  		};


  		// if faces are completely degenerate after merging vertices, we
  		// have to remove them from the geometry.
  		var faceIndicesToRemove = [];

  		for ( i = 0, il = this.faces.length; i < il; i ++ ) {

  			face = this.faces[ i ];

  			face.a = changes[ face.a ];
  			face.b = changes[ face.b ];
  			face.c = changes[ face.c ];

  			indices = [ face.a, face.b, face.c ];

  			var dupIndex = - 1;

  			// if any duplicate vertices are found in a Face3
  			// we have to remove the face as nothing can be saved
  			for ( var n = 0; n < 3; n ++ ) {
  				if ( indices[ n ] == indices[ ( n + 1 ) % 3 ] ) {

  					dupIndex = n;
  					faceIndicesToRemove.push( i );
  					break;

  				}
  			}

  		}

  		for ( i = faceIndicesToRemove.length - 1; i >= 0; i -- ) {
  			var idx = faceIndicesToRemove[ i ];

  			this.faces.splice( idx, 1 );

  			for ( j = 0, jl = this.faceVertexUvs.length; j < jl; j ++ ) {

  				this.faceVertexUvs[ j ].splice( idx, 1 );

  			}

  		}

  		// Use unique set of vertices

  		var diff = this.vertices.length - unique.length;
  		this.vertices = unique;
  		return diff;

  	},

  	toJSON: function () {

  		var output = {
  			metadata: {
  				version: 4.0,
  				type: 'BufferGeometry',
  				generator: 'BufferGeometryExporter'
  			},
  			uuid: this.uuid,
  			type: this.type
  		};

  		if ( this.name !== "" ) output.name = this.name;

  		if ( this.parameters !== undefined ) {

  			var parameters = this.parameters;

  			for ( var key in parameters ) {

  				if ( parameters[ key ] !== undefined ) output[ key ] = parameters[ key ];

  			}

  			return output;

  		}

  		var vertices = [];

  		for ( var i = 0; i < this.vertices.length; i ++ ) {

  			var vertex = this.vertices[ i ];
  			vertices.push( vertex.x, vertex.y, vertex.z );

  		}

  		var faces = [];
  		var normals = [];
  		var normalsHash = {};
  		var colors = [];
  		var colorsHash = {};
  		var uvs = [];
  		var uvsHash = {};

  		for ( var i = 0; i < this.faces.length; i ++ ) {

  			var face = this.faces[ i ];

  			var hasMaterial = false; // face.materialIndex !== undefined;
  			var hasFaceUv = false; // deprecated
  			var hasFaceVertexUv = this.faceVertexUvs[ 0 ][ i ] !== undefined;
  			var hasFaceNormal = face.normal.length() > 0;
  			var hasFaceVertexNormal = face.vertexNormals.length > 0;
  			var hasFaceColor = face.color.r !== 1 || face.color.g !== 1 || face.color.b !== 1;
  			var hasFaceVertexColor = face.vertexColors.length > 0;

  			var faceType = 0;

  			faceType = setBit( faceType, 0, 0 );
  			faceType = setBit( faceType, 1, hasMaterial );
  			faceType = setBit( faceType, 2, hasFaceUv );
  			faceType = setBit( faceType, 3, hasFaceVertexUv );
  			faceType = setBit( faceType, 4, hasFaceNormal );
  			faceType = setBit( faceType, 5, hasFaceVertexNormal );
  			faceType = setBit( faceType, 6, hasFaceColor );
  			faceType = setBit( faceType, 7, hasFaceVertexColor );

  			faces.push( faceType );
  			faces.push( face.a, face.b, face.c );


  			/*
  			if ( hasMaterial ) {

  				faces.push( face.materialIndex );

  			}
  			*/

  			if ( hasFaceVertexUv ) {

  				var faceVertexUvs = this.faceVertexUvs[ 0 ][ i ];

  				faces.push(
  					getUvIndex( faceVertexUvs[ 0 ] ),
  					getUvIndex( faceVertexUvs[ 1 ] ),
  					getUvIndex( faceVertexUvs[ 2 ] )
  				);

  			}

  			if ( hasFaceNormal ) {

  				faces.push( getNormalIndex( face.normal ) );

  			}

  			if ( hasFaceVertexNormal ) {

  				var vertexNormals = face.vertexNormals;

  				faces.push(
  					getNormalIndex( vertexNormals[ 0 ] ),
  					getNormalIndex( vertexNormals[ 1 ] ),
  					getNormalIndex( vertexNormals[ 2 ] )
  				);

  			}

  			if ( hasFaceColor ) {

  				faces.push( getColorIndex( face.color ) );

  			}

  			if ( hasFaceVertexColor ) {

  				var vertexColors = face.vertexColors;

  				faces.push(
  					getColorIndex( vertexColors[ 0 ] ),
  					getColorIndex( vertexColors[ 1 ] ),
  					getColorIndex( vertexColors[ 2 ] )
  				);

  			}

  		}

  		function setBit( value, position, enabled ) {

  			return enabled ? value | ( 1 << position ) : value & ( ~ ( 1 << position) );

  		}

  		function getNormalIndex( normal ) {

  			var hash = normal.x.toString() + normal.y.toString() + normal.z.toString();

  			if ( normalsHash[ hash ] !== undefined ) {

  				return normalsHash[ hash ];

  			}

  			normalsHash[ hash ] = normals.length / 3;
  			normals.push( normal.x, normal.y, normal.z );

  			return normalsHash[ hash ];

  		}

  		function getColorIndex( color ) {

  			var hash = color.r.toString() + color.g.toString() + color.b.toString();

  			if ( colorsHash[ hash ] !== undefined ) {

  				return colorsHash[ hash ];

  			}

  			colorsHash[ hash ] = colors.length;
  			colors.push( color.getHex() );

  			return colorsHash[ hash ];

  		}

  		function getUvIndex( uv ) {

  			var hash = uv.x.toString() + uv.y.toString();

  			if ( uvsHash[ hash ] !== undefined ) {

  				return uvsHash[ hash ];

  			}

  			uvsHash[ hash ] = uvs.length / 2;
  			uvs.push( uv.x, uv.y );

  			return uvsHash[ hash ];

  		}

  		output.data = {};

  		output.data.vertices = vertices;
  		output.data.normals = normals;
  		if ( colors.length > 0 ) output.data.colors = colors;
  		if ( uvs.length > 0 ) output.data.uvs = [ uvs ]; // temporal backward compatibility
  		output.data.faces = faces;

  		//

  		return output;

  	},

  	clone: function () {

  		var geometry = new THREE$Geometry();

  		var vertices = this.vertices;

  		for ( var i = 0, il = vertices.length; i < il; i ++ ) {

  			geometry.vertices.push( vertices[ i ].clone() );

  		}

  		var faces = this.faces;

  		for ( var i = 0, il = faces.length; i < il; i ++ ) {

  			geometry.faces.push( faces[ i ].clone() );

  		}

  		for ( var i = 0, il = this.faceVertexUvs.length; i < il; i ++ ) {

  			var faceVertexUvs = this.faceVertexUvs[ i ];

  			if ( geometry.faceVertexUvs[ i ] === undefined ) {

  				geometry.faceVertexUvs[ i ] = [];

  			}

  			for ( var j = 0, jl = faceVertexUvs.length; j < jl; j ++ ) {

  				var uvs = faceVertexUvs[ j ], uvsCopy = [];

  				for ( var k = 0, kl = uvs.length; k < kl; k ++ ) {

  					var uv = uvs[ k ];

  					uvsCopy.push( uv.clone() );

  				}

  				geometry.faceVertexUvs[ i ].push( uvsCopy );

  			}

  		}

  		return geometry;

  	},

  	dispose: function () {

  		this.dispatchEvent( { type: 'dispose' } );

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$Geometry.prototype );

  var count = 0;
  function THREE$GeometryIdCount () { return count++; }


  /**
   * @author alteredq / http://alteredqualia.com/
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$BufferGeometry () {

  	Object.defineProperty( this, 'id', { value: THREE$GeometryIdCount() } );

  	this.uuid = THREE$Math.generateUUID();

  	this.name = '';
  	this.type = 'BufferGeometry';

  	this.attributes = {};
  	this.attributesKeys = [];

  	this.drawcalls = [];
  	this.offsets = this.drawcalls; // backwards compatibility

  	this.boundingBox = null;
  	this.boundingSphere = null;

  }

  THREE$BufferGeometry.prototype = {

  	constructor: THREE$BufferGeometry,

  	addAttribute: function ( name, attribute ) {

  		if ( attribute instanceof THREE$BufferAttribute === false ) {

  			THREE$warn( 'THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).' );

  			this.attributes[ name ] = { array: arguments[ 1 ], itemSize: arguments[ 2 ] };

  			return;

  		}

  		this.attributes[ name ] = attribute;
  		this.attributesKeys = Object.keys( this.attributes );

  	},

  	getAttribute: function ( name ) {

  		return this.attributes[ name ];

  	},

  	addDrawCall: function ( start, count, indexOffset ) {

  		this.drawcalls.push( {

  			start: start,
  			count: count,
  			index: indexOffset !== undefined ? indexOffset : 0

  		} );

  	},

  	applyMatrix: function ( matrix ) {

  		var position = this.attributes.position;

  		if ( position !== undefined ) {

  			matrix.applyToVector3Array( position.array );
  			position.needsUpdate = true;

  		}

  		var normal = this.attributes.normal;

  		if ( normal !== undefined ) {

  			var normalMatrix = new THREE$Matrix3().getNormalMatrix( matrix );

  			normalMatrix.applyToVector3Array( normal.array );
  			normal.needsUpdate = true;

  		}

  		if ( this.boundingBox !== null ) {

  			this.computeBoundingBox();

  		}

  		if ( this.boundingSphere !== null ) {

  			this.computeBoundingSphere();

  		}

  	},

  	center: function () {

  		this.computeBoundingBox();

  		var offset = this.boundingBox.center().negate();

  		this.applyMatrix( new THREE$Matrix4().setPosition( offset ) );

  		return offset;

  	},

  	fromGeometry: function ( geometry, settings ) {

  		settings = settings || { 'vertexColors': THREE$NoColors };

  		var vertices = geometry.vertices;
  		var faces = geometry.faces;
  		var faceVertexUvs = geometry.faceVertexUvs;
  		var vertexColors = settings.vertexColors;
  		var hasFaceVertexUv = faceVertexUvs[ 0 ].length > 0;
  		var hasFaceVertexNormals = faces[ 0 ].vertexNormals.length == 3;

  		var positions = new Float32Array( faces.length * 3 * 3 );
  		this.addAttribute( 'position', new THREE$BufferAttribute( positions, 3 ) );

  		var normals = new Float32Array( faces.length * 3 * 3 );
  		this.addAttribute( 'normal', new THREE$BufferAttribute( normals, 3 ) );

  		if ( vertexColors !== THREE$NoColors ) {

  			var colors = new Float32Array( faces.length * 3 * 3 );
  			this.addAttribute( 'color', new THREE$BufferAttribute( colors, 3 ) );

  		}

  		if ( hasFaceVertexUv === true ) {

  			var uvs = new Float32Array( faces.length * 3 * 2 );
  			this.addAttribute( 'uv', new THREE$BufferAttribute( uvs, 2 ) );

  		}

  		for ( var i = 0, i2 = 0, i3 = 0; i < faces.length; i ++, i2 += 6, i3 += 9 ) {

  			var face = faces[ i ];

  			var a = vertices[ face.a ];
  			var b = vertices[ face.b ];
  			var c = vertices[ face.c ];

  			positions[ i3     ] = a.x;
  			positions[ i3 + 1 ] = a.y;
  			positions[ i3 + 2 ] = a.z;

  			positions[ i3 + 3 ] = b.x;
  			positions[ i3 + 4 ] = b.y;
  			positions[ i3 + 5 ] = b.z;

  			positions[ i3 + 6 ] = c.x;
  			positions[ i3 + 7 ] = c.y;
  			positions[ i3 + 8 ] = c.z;

  			if ( hasFaceVertexNormals === true ) {

  				var na = face.vertexNormals[ 0 ];
  				var nb = face.vertexNormals[ 1 ];
  				var nc = face.vertexNormals[ 2 ];

  				normals[ i3     ] = na.x;
  				normals[ i3 + 1 ] = na.y;
  				normals[ i3 + 2 ] = na.z;

  				normals[ i3 + 3 ] = nb.x;
  				normals[ i3 + 4 ] = nb.y;
  				normals[ i3 + 5 ] = nb.z;

  				normals[ i3 + 6 ] = nc.x;
  				normals[ i3 + 7 ] = nc.y;
  				normals[ i3 + 8 ] = nc.z;

  			} else {

  				var n = face.normal;

  				normals[ i3     ] = n.x;
  				normals[ i3 + 1 ] = n.y;
  				normals[ i3 + 2 ] = n.z;

  				normals[ i3 + 3 ] = n.x;
  				normals[ i3 + 4 ] = n.y;
  				normals[ i3 + 5 ] = n.z;

  				normals[ i3 + 6 ] = n.x;
  				normals[ i3 + 7 ] = n.y;
  				normals[ i3 + 8 ] = n.z;

  			}

  			if ( vertexColors === THREE$FaceColors ) {

  				var fc = face.color;

  				colors[ i3     ] = fc.r;
  				colors[ i3 + 1 ] = fc.g;
  				colors[ i3 + 2 ] = fc.b;

  				colors[ i3 + 3 ] = fc.r;
  				colors[ i3 + 4 ] = fc.g;
  				colors[ i3 + 5 ] = fc.b;

  				colors[ i3 + 6 ] = fc.r;
  				colors[ i3 + 7 ] = fc.g;
  				colors[ i3 + 8 ] = fc.b;

  			} else if ( vertexColors === THREE$VertexColors ) {

  				var vca = face.vertexColors[ 0 ];
  				var vcb = face.vertexColors[ 1 ];
  				var vcc = face.vertexColors[ 2 ];

  				colors[ i3     ] = vca.r;
  				colors[ i3 + 1 ] = vca.g;
  				colors[ i3 + 2 ] = vca.b;

  				colors[ i3 + 3 ] = vcb.r;
  				colors[ i3 + 4 ] = vcb.g;
  				colors[ i3 + 5 ] = vcb.b;

  				colors[ i3 + 6 ] = vcc.r;
  				colors[ i3 + 7 ] = vcc.g;
  				colors[ i3 + 8 ] = vcc.b;

  			}

  			if ( hasFaceVertexUv === true ) {

  				var uva = faceVertexUvs[ 0 ][ i ][ 0 ];
  				var uvb = faceVertexUvs[ 0 ][ i ][ 1 ];
  				var uvc = faceVertexUvs[ 0 ][ i ][ 2 ];

  				uvs[ i2     ] = uva.x;
  				uvs[ i2 + 1 ] = uva.y;

  				uvs[ i2 + 2 ] = uvb.x;
  				uvs[ i2 + 3 ] = uvb.y;

  				uvs[ i2 + 4 ] = uvc.x;
  				uvs[ i2 + 5 ] = uvc.y;

  			}

  		}

  		this.computeBoundingSphere()

  		return this;

  	},

  	computeBoundingBox: function () {

  		var vector = new THREE$Vector3();

  		return function () {

  			if ( this.boundingBox === null ) {

  				this.boundingBox = new THREE$Box3();

  			}

  			var positions = this.attributes.position.array;

  			if ( positions ) {

  				var bb = this.boundingBox;
  				bb.makeEmpty();

  				for ( var i = 0, il = positions.length; i < il; i += 3 ) {

  					vector.set( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] );
  					bb.expandByPoint( vector );

  				}

  			}

  			if ( positions === undefined || positions.length === 0 ) {

  				this.boundingBox.min.set( 0, 0, 0 );
  				this.boundingBox.max.set( 0, 0, 0 );

  			}

  			if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

  				THREE$error( 'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.' );

  			}

  		}

  	}(),

  	computeBoundingSphere: function () {

  		var box = new THREE$Box3();
  		var vector = new THREE$Vector3();

  		return function () {

  			if ( this.boundingSphere === null ) {

  				this.boundingSphere = new THREE$Sphere();

  			}

  			var positions = this.attributes.position.array;

  			if ( positions ) {

  				box.makeEmpty();

  				var center = this.boundingSphere.center;

  				for ( var i = 0, il = positions.length; i < il; i += 3 ) {

  					vector.set( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] );
  					box.expandByPoint( vector );

  				}

  				box.center( center );

  				// hoping to find a boundingSphere with a radius smaller than the
  				// boundingSphere of the boundingBox:  sqrt(3) smaller in the best case

  				var maxRadiusSq = 0;

  				for ( var i = 0, il = positions.length; i < il; i += 3 ) {

  					vector.set( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] );
  					maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( vector ) );

  				}

  				this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

  				if ( isNaN( this.boundingSphere.radius ) ) {

  					THREE$error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.' );

  				}

  			}

  		}

  	}(),

  	computeFaceNormals: function () {

  		// backwards compatibility

  	},

  	computeVertexNormals: function () {

  		var attributes = this.attributes;

  		if ( attributes.position ) {

  			var positions = attributes.position.array;

  			if ( attributes.normal === undefined ) {

  				this.addAttribute( 'normal', new THREE$BufferAttribute( new Float32Array( positions.length ), 3 ) );

  			} else {

  				// reset existing normals to zero

  				var normals = attributes.normal.array;

  				for ( var i = 0, il = normals.length; i < il; i ++ ) {

  					normals[ i ] = 0;

  				}

  			}

  			var normals = attributes.normal.array;

  			var vA, vB, vC,

  			pA = new THREE$Vector3(),
  			pB = new THREE$Vector3(),
  			pC = new THREE$Vector3(),

  			cb = new THREE$Vector3(),
  			ab = new THREE$Vector3();

  			// indexed elements

  			if ( attributes.index ) {

  				var indices = attributes.index.array;

  				var offsets = ( this.offsets.length > 0 ? this.offsets : [ { start: 0, count: indices.length, index: 0 } ] );

  				for ( var j = 0, jl = offsets.length; j < jl; ++ j ) {

  					var start = offsets[ j ].start;
  					var count = offsets[ j ].count;
  					var index = offsets[ j ].index;

  					for ( var i = start, il = start + count; i < il; i += 3 ) {

  						vA = ( index + indices[ i     ] ) * 3;
  						vB = ( index + indices[ i + 1 ] ) * 3;
  						vC = ( index + indices[ i + 2 ] ) * 3;

  						pA.fromArray( positions, vA );
  						pB.fromArray( positions, vB );
  						pC.fromArray( positions, vC );

  						cb.subVectors( pC, pB );
  						ab.subVectors( pA, pB );
  						cb.cross( ab );

  						normals[ vA     ] += cb.x;
  						normals[ vA + 1 ] += cb.y;
  						normals[ vA + 2 ] += cb.z;

  						normals[ vB     ] += cb.x;
  						normals[ vB + 1 ] += cb.y;
  						normals[ vB + 2 ] += cb.z;

  						normals[ vC     ] += cb.x;
  						normals[ vC + 1 ] += cb.y;
  						normals[ vC + 2 ] += cb.z;

  					}

  				}

  			} else {

  				// non-indexed elements (unconnected triangle soup)

  				for ( var i = 0, il = positions.length; i < il; i += 9 ) {

  					pA.fromArray( positions, i );
  					pB.fromArray( positions, i + 3 );
  					pC.fromArray( positions, i + 6 );

  					cb.subVectors( pC, pB );
  					ab.subVectors( pA, pB );
  					cb.cross( ab );

  					normals[ i     ] = cb.x;
  					normals[ i + 1 ] = cb.y;
  					normals[ i + 2 ] = cb.z;

  					normals[ i + 3 ] = cb.x;
  					normals[ i + 4 ] = cb.y;
  					normals[ i + 5 ] = cb.z;

  					normals[ i + 6 ] = cb.x;
  					normals[ i + 7 ] = cb.y;
  					normals[ i + 8 ] = cb.z;

  				}

  			}

  			this.normalizeNormals();

  			attributes.normal.needsUpdate = true;

  		}

  	},

  	computeTangents: function () {

  		// based on http://www.terathon.com/code/tangent.html
  		// (per vertex tangents)

  		if ( this.attributes.index === undefined ||
  			 this.attributes.position === undefined ||
  			 this.attributes.normal === undefined ||
  			 this.attributes.uv === undefined ) {

  			THREE$warn( 'THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()' );
  			return;

  		}

  		var indices = this.attributes.index.array;
  		var positions = this.attributes.position.array;
  		var normals = this.attributes.normal.array;
  		var uvs = this.attributes.uv.array;

  		var nVertices = positions.length / 3;

  		if ( this.attributes.tangent === undefined ) {

  			this.addAttribute( 'tangent', new THREE$BufferAttribute( new Float32Array( 4 * nVertices ), 4 ) );

  		}

  		var tangents = this.attributes.tangent.array;

  		var tan1 = [], tan2 = [];

  		for ( var k = 0; k < nVertices; k ++ ) {

  			tan1[ k ] = new THREE$Vector3();
  			tan2[ k ] = new THREE$Vector3();

  		}

  		var vA = new THREE$Vector3(),
  			vB = new THREE$Vector3(),
  			vC = new THREE$Vector3(),

  			uvA = new THREE$Vector2(),
  			uvB = new THREE$Vector2(),
  			uvC = new THREE$Vector2(),

  			x1, x2, y1, y2, z1, z2,
  			s1, s2, t1, t2, r;

  		var sdir = new THREE$Vector3(), tdir = new THREE$Vector3();

  		function handleTriangle( a, b, c ) {

  			vA.fromArray( positions, a * 3 );
  			vB.fromArray( positions, b * 3 );
  			vC.fromArray( positions, c * 3 );

  			uvA.fromArray( uvs, a * 2 );
  			uvB.fromArray( uvs, b * 2 );
  			uvC.fromArray( uvs, c * 2 );

  			x1 = vB.x - vA.x;
  			x2 = vC.x - vA.x;

  			y1 = vB.y - vA.y;
  			y2 = vC.y - vA.y;

  			z1 = vB.z - vA.z;
  			z2 = vC.z - vA.z;

  			s1 = uvB.x - uvA.x;
  			s2 = uvC.x - uvA.x;

  			t1 = uvB.y - uvA.y;
  			t2 = uvC.y - uvA.y;

  			r = 1.0 / ( s1 * t2 - s2 * t1 );

  			sdir.set(
  				( t2 * x1 - t1 * x2 ) * r,
  				( t2 * y1 - t1 * y2 ) * r,
  				( t2 * z1 - t1 * z2 ) * r
  			);

  			tdir.set(
  				( s1 * x2 - s2 * x1 ) * r,
  				( s1 * y2 - s2 * y1 ) * r,
  				( s1 * z2 - s2 * z1 ) * r
  			);

  			tan1[ a ].add( sdir );
  			tan1[ b ].add( sdir );
  			tan1[ c ].add( sdir );

  			tan2[ a ].add( tdir );
  			tan2[ b ].add( tdir );
  			tan2[ c ].add( tdir );

  		}

  		var i, il;
  		var j, jl;
  		var iA, iB, iC;

  		if ( this.drawcalls.length === 0 ) {

  			this.addDrawCall( 0, indices.length, 0 );

  		}

  		var drawcalls = this.drawcalls;

  		for ( j = 0, jl = drawcalls.length; j < jl; ++ j ) {

  			var start = drawcalls[ j ].start;
  			var count = drawcalls[ j ].count;
  			var index = drawcalls[ j ].index;

  			for ( i = start, il = start + count; i < il; i += 3 ) {

  				iA = index + indices[ i ];
  				iB = index + indices[ i + 1 ];
  				iC = index + indices[ i + 2 ];

  				handleTriangle( iA, iB, iC );

  			}

  		}

  		var tmp = new THREE$Vector3(), tmp2 = new THREE$Vector3();
  		var n = new THREE$Vector3(), n2 = new THREE$Vector3();
  		var w, t, test;

  		function handleVertex( v ) {

  			n.fromArray( normals, v * 3 );
  			n2.copy( n );

  			t = tan1[ v ];

  			// Gram-Schmidt orthogonalize

  			tmp.copy( t );
  			tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

  			// Calculate handedness

  			tmp2.crossVectors( n2, t );
  			test = tmp2.dot( tan2[ v ] );
  			w = ( test < 0.0 ) ? - 1.0 : 1.0;

  			tangents[ v * 4     ] = tmp.x;
  			tangents[ v * 4 + 1 ] = tmp.y;
  			tangents[ v * 4 + 2 ] = tmp.z;
  			tangents[ v * 4 + 3 ] = w;

  		}

  		for ( j = 0, jl = drawcalls.length; j < jl; ++ j ) {

  			var start = drawcalls[ j ].start;
  			var count = drawcalls[ j ].count;
  			var index = drawcalls[ j ].index;

  			for ( i = start, il = start + count; i < il; i += 3 ) {

  				iA = index + indices[ i ];
  				iB = index + indices[ i + 1 ];
  				iC = index + indices[ i + 2 ];

  				handleVertex( iA );
  				handleVertex( iB );
  				handleVertex( iC );

  			}

  		}

  	},

  	/*
  	Compute the draw offset for large models by chunking the index buffer into chunks of 65k addressable vertices.
  	This method will effectively rewrite the index buffer and remap all attributes to match the new indices.
  	WARNING: This method will also expand the vertex count to prevent sprawled triangles across draw offsets.
  	size - Defaults to 65535, but allows for larger or smaller chunks.
  	*/
  	computeOffsets: function ( size ) {

  		if ( size === undefined ) size = 65535; // WebGL limits type of index buffer values to 16-bit.

  		var indices = this.attributes.index.array;
  		var vertices = this.attributes.position.array;

  		var facesCount = ( indices.length / 3 );

  		/*
  		console.log("Computing buffers in offsets of "+size+" -> indices:"+indices.length+" vertices:"+vertices.length);
  		console.log("Faces to process: "+(indices.length/3));
  		console.log("Reordering "+verticesCount+" vertices.");
  		*/

  		var sortedIndices = new Uint16Array( indices.length ); //16-bit buffers
  		var indexPtr = 0;
  		var vertexPtr = 0;

  		var offsets = [ { start:0, count:0, index:0 } ];
  		var offset = offsets[ 0 ];

  		var duplicatedVertices = 0;
  		var newVerticeMaps = 0;
  		var faceVertices = new Int32Array( 6 );
  		var vertexMap = new Int32Array( vertices.length );
  		var revVertexMap = new Int32Array( vertices.length );
  		for ( var j = 0; j < vertices.length; j ++ ) { vertexMap[ j ] = - 1; revVertexMap[ j ] = - 1; }

  		/*
  			Traverse every face and reorder vertices in the proper offsets of 65k.
  			We can have more than 65k entries in the index buffer per offset, but only reference 65k values.
  		*/
  		for ( var findex = 0; findex < facesCount; findex ++ ) {
  			newVerticeMaps = 0;

  			for ( var vo = 0; vo < 3; vo ++ ) {
  				var vid = indices[ findex * 3 + vo ];
  				if ( vertexMap[ vid ] == - 1 ) {
  					//Unmapped vertice
  					faceVertices[ vo * 2 ] = vid;
  					faceVertices[ vo * 2 + 1 ] = - 1;
  					newVerticeMaps ++;
  				} else if ( vertexMap[ vid ] < offset.index ) {
  					//Reused vertices from previous block (duplicate)
  					faceVertices[ vo * 2 ] = vid;
  					faceVertices[ vo * 2 + 1 ] = - 1;
  					duplicatedVertices ++;
  				} else {
  					//Reused vertice in the current block
  					faceVertices[ vo * 2 ] = vid;
  					faceVertices[ vo * 2 + 1 ] = vertexMap[ vid ];
  				}
  			}

  			var faceMax = vertexPtr + newVerticeMaps;
  			if ( faceMax > ( offset.index + size ) ) {
  				var new_offset = { start:indexPtr, count:0, index:vertexPtr };
  				offsets.push( new_offset );
  				offset = new_offset;

  				//Re-evaluate reused vertices in light of new offset.
  				for ( var v = 0; v < 6; v += 2 ) {
  					var new_vid = faceVertices[ v + 1 ];
  					if ( new_vid > - 1 && new_vid < offset.index )
  						faceVertices[ v + 1 ] = - 1;
  				}
  			}

  			//Reindex the face.
  			for ( var v = 0; v < 6; v += 2 ) {
  				var vid = faceVertices[ v ];
  				var new_vid = faceVertices[ v + 1 ];

  				if ( new_vid === - 1 )
  					new_vid = vertexPtr ++;

  				vertexMap[ vid ] = new_vid;
  				revVertexMap[ new_vid ] = vid;
  				sortedIndices[ indexPtr ++ ] = new_vid - offset.index; //XXX overflows at 16bit
  				offset.count ++;
  			}
  		}

  		/* Move all attribute values to map to the new computed indices , also expand the vertice stack to match our new vertexPtr. */
  		this.reorderBuffers( sortedIndices, revVertexMap, vertexPtr );
  		this.offsets = offsets; // TODO: Deprecate
  		this.drawcalls = offsets;

  		/*
  		var orderTime = Date.now();
  		console.log("Reorder time: "+(orderTime-s)+"ms");
  		console.log("Duplicated "+duplicatedVertices+" vertices.");
  		console.log("Compute Buffers time: "+(Date.now()-s)+"ms");
  		console.log("Draw offsets: "+offsets.length);
  		*/

  		return offsets;

  	},

  	merge: function ( geometry, offset ) {

  		if ( geometry instanceof THREE$BufferGeometry === false ) {

  			THREE$error( 'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.', geometry );
  			return;

  		}

  		if ( offset === undefined ) offset = 0;

  		var attributes = this.attributes;

  		for ( var key in attributes ) {

  			if ( geometry.attributes[ key ] === undefined ) continue;

  			var attribute1 = attributes[ key ];
  			var attributeArray1 = attribute1.array;

  			var attribute2 = geometry.attributes[ key ];
  			var attributeArray2 = attribute2.array;

  			var attributeSize = attribute2.itemSize;

  			for ( var i = 0, j = attributeSize * offset; i < attributeArray2.length; i ++, j ++ ) {

  				attributeArray1[ j ] = attributeArray2[ i ];

  			}

  		}

  		return this;

  	},

  	normalizeNormals: function () {

  		var normals = this.attributes.normal.array;

  		var x, y, z, n;

  		for ( var i = 0, il = normals.length; i < il; i += 3 ) {

  			x = normals[ i ];
  			y = normals[ i + 1 ];
  			z = normals[ i + 2 ];

  			n = 1.0 / Math.sqrt( x * x + y * y + z * z );

  			normals[ i     ] *= n;
  			normals[ i + 1 ] *= n;
  			normals[ i + 2 ] *= n;

  		}

  	},

  	/*
  		reoderBuffers:
  		Reorder attributes based on a new indexBuffer and indexMap.
  		indexBuffer - Uint16Array of the new ordered indices.
  		indexMap - Int32Array where the position is the new vertex ID and the value the old vertex ID for each vertex.
  		vertexCount - Amount of total vertices considered in this reordering (in case you want to grow the vertice stack).
  	*/
  	reorderBuffers: function ( indexBuffer, indexMap, vertexCount ) {

  		/* Create a copy of all attributes for reordering. */
  		var sortedAttributes = {};
  		for ( var attr in this.attributes ) {
  			if ( attr == 'index' )
  				continue;
  			var sourceArray = this.attributes[ attr ].array;
  			sortedAttributes[ attr ] = new sourceArray.constructor( this.attributes[ attr ].itemSize * vertexCount );
  		}

  		/* Move attribute positions based on the new index map */
  		for ( var new_vid = 0; new_vid < vertexCount; new_vid ++ ) {
  			var vid = indexMap[ new_vid ];
  			for ( var attr in this.attributes ) {
  				if ( attr == 'index' )
  					continue;
  				var attrArray = this.attributes[ attr ].array;
  				var attrSize = this.attributes[ attr ].itemSize;
  				var sortedAttr = sortedAttributes[ attr ];
  				for ( var k = 0; k < attrSize; k ++ )
  					sortedAttr[ new_vid * attrSize + k ] = attrArray[ vid * attrSize + k ];
  			}
  		}

  		/* Carry the new sorted buffers locally */
  		this.attributes[ 'index' ].array = indexBuffer;
  		for ( var attr in this.attributes ) {
  			if ( attr == 'index' )
  				continue;
  			this.attributes[ attr ].array = sortedAttributes[ attr ];
  			this.attributes[ attr ].numItems = this.attributes[ attr ].itemSize * vertexCount;
  		}
  	},

  	toJSON: function () {

  		var output = {
  			metadata: {
  				version: 4.0,
  				type: 'BufferGeometry',
  				generator: 'BufferGeometryExporter'
  			},
  			uuid: this.uuid,
  			type: this.type,
  			data: {
  				attributes: {}
  			}
  		};

  		var attributes = this.attributes;
  		var offsets = this.offsets;
  		var boundingSphere = this.boundingSphere;

  		for ( var key in attributes ) {

  			var attribute = attributes[ key ];

  			var array = Array.prototype.slice.call( attribute.array );

  			output.data.attributes[ key ] = {
  				itemSize: attribute.itemSize,
  				type: attribute.array.constructor.name,
  				array: array
  			}

  		}

  		if ( offsets.length > 0 ) {

  			output.data.offsets = JSON.parse( JSON.stringify( offsets ) );

  		}

  		if ( boundingSphere !== null ) {

  			output.data.boundingSphere = {
  				center: boundingSphere.center.toArray(),
  				radius: boundingSphere.radius
  			}

  		}

  		return output;

  	},

  	clone: function () {

  		var geometry = new THREE$BufferGeometry();

  		for ( var attr in this.attributes ) {

  			var sourceAttr = this.attributes[ attr ];
  			geometry.addAttribute( attr, sourceAttr.clone() );

  		}

  		for ( var i = 0, il = this.offsets.length; i < il; i ++ ) {

  			var offset = this.offsets[ i ];

  			geometry.offsets.push( {

  				start: offset.start,
  				index: offset.index,
  				count: offset.count

  			} );

  		}

  		return geometry;

  	},

  	dispose: function () {

  		this.dispatchEvent( { type: 'dispose' } );

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$BufferGeometry.prototype );


  var THREE$Sprite;


  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   */

  THREE$Sprite = ( function () {

  	var indices = new Uint16Array( [ 0, 1, 2,  0, 2, 3 ] );
  	var vertices = new Float32Array( [ - 0.5, - 0.5, 0,   0.5, - 0.5, 0,   0.5, 0.5, 0,   - 0.5, 0.5, 0 ] );
  	var uvs = new Float32Array( [ 0, 0,   1, 0,   1, 1,   0, 1 ] );

  	var geometry = new THREE$BufferGeometry();
  	geometry.addAttribute( 'index', new THREE$BufferAttribute( indices, 1 ) );
  	geometry.addAttribute( 'position', new THREE$BufferAttribute( vertices, 3 ) );
  	geometry.addAttribute( 'uv', new THREE$BufferAttribute( uvs, 2 ) );

  	return function ( material ) {

  		THREE$Object3D.call( this );

  		this.type = 'Sprite';

  		this.geometry = geometry;
  		this.material = ( material !== undefined ) ? material : new THREE$SpriteMaterial();

  	};

  } )();

  THREE$Sprite.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Sprite.prototype.constructor = THREE$Sprite;

  THREE$Sprite.prototype.raycast = ( function () {

  	var matrixPosition = new THREE$Vector3();

  	return function ( raycaster, intersects ) {

  		matrixPosition.setFromMatrixPosition( this.matrixWorld );

  		var distance = raycaster.ray.distanceToPoint( matrixPosition );

  		if ( distance > this.scale.x ) {

  			return;

  		}

  		intersects.push( {

  			distance: distance,
  			point: this.position,
  			face: null,
  			object: this

  		} );

  	};

  }() );

  THREE$Sprite.prototype.clone = function ( object ) {

  	if ( object === undefined ) object = new THREE$Sprite( this.material );

  	THREE$Object3D.prototype.clone.call( this, object );

  	return object;

  };


  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  color: <hex>,
   *  opacity: <float>,
   *
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  linewidth: <float>,
   *  linecap: "round",
   *  linejoin: "round",
   *
   *  vertexColors: <bool>
   *
   *  fog: <bool>
   * }
   */

  function THREE$LineBasicMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'LineBasicMaterial';

  	this.color = new THREE$Color( 0xffffff );

  	this.linewidth = 1;
  	this.linecap = 'round';
  	this.linejoin = 'round';

  	this.vertexColors = THREE$NoColors;

  	this.fog = true;

  	this.setValues( parameters );

  }

  THREE$LineBasicMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$LineBasicMaterial.prototype.constructor = THREE$LineBasicMaterial;

  THREE$LineBasicMaterial.prototype.clone = function () {

  	var material = new THREE$LineBasicMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.color.copy( this.color );

  	material.linewidth = this.linewidth;
  	material.linecap = this.linecap;
  	material.linejoin = this.linejoin;

  	material.vertexColors = this.vertexColors;

  	material.fog = this.fog;

  	return material;

  };


  var THREE$LinePieces;
  var THREE$LineStrip;


  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$Line ( geometry, material, mode ) {

  	THREE$Object3D.call( this );

  	this.type = 'Line';

  	this.geometry = geometry !== undefined ? geometry : new THREE$Geometry();
  	this.material = material !== undefined ? material : new THREE$LineBasicMaterial( { color: Math.random() * 0xffffff } );

  	this.mode = mode !== undefined ? mode : THREE$LineStrip;

  }

  THREE$LineStrip = 0;
  THREE$LinePieces = 1;

  THREE$Line.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Line.prototype.constructor = THREE$Line;

  THREE$Line.prototype.raycast = ( function () {

  	var inverseMatrix = new THREE$Matrix4();
  	var ray = new THREE$Ray();
  	var sphere = new THREE$Sphere();

  	return function ( raycaster, intersects ) {

  		var precision = raycaster.linePrecision;
  		var precisionSq = precision * precision;

  		var geometry = this.geometry;

  		if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

  		// Checking boundingSphere distance to ray

  		sphere.copy( geometry.boundingSphere );
  		sphere.applyMatrix4( this.matrixWorld );

  		if ( raycaster.ray.isIntersectionSphere( sphere ) === false ) {

  			return;

  		}

  		inverseMatrix.getInverse( this.matrixWorld );
  		ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

  		var vStart = new THREE$Vector3();
  		var vEnd = new THREE$Vector3();
  		var interSegment = new THREE$Vector3();
  		var interRay = new THREE$Vector3();
  		var step = this.mode === THREE$LineStrip ? 1 : 2;

  		if ( geometry instanceof THREE$BufferGeometry ) {

  			var attributes = geometry.attributes;

  			if ( attributes.index !== undefined ) {

  				var indices = attributes.index.array;
  				var positions = attributes.position.array;
  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					offsets = [ { start: 0, count: indices.length, index: 0 } ];

  				}

  				for ( var oi = 0; oi < offsets.length; oi ++) {

  					var start = offsets[ oi ].start;
  					var count = offsets[ oi ].count;
  					var index = offsets[ oi ].index;

  					for ( var i = start; i < start + count - 1; i += step ) {

  						var a = index + indices[ i ];
  						var b = index + indices[ i + 1 ];

  						vStart.fromArray( positions, a * 3 );
  						vEnd.fromArray( positions, b * 3 );

  						var distSq = ray.distanceSqToSegment( vStart, vEnd, interRay, interSegment );

  						if ( distSq > precisionSq ) continue;

  						var distance = ray.origin.distanceTo( interRay );

  						if ( distance < raycaster.near || distance > raycaster.far ) continue;

  						intersects.push( {

  							distance: distance,
  							// What do we want? intersection point on the ray or on the segment??
  							// point: raycaster.ray.at( distance ),
  							point: interSegment.clone().applyMatrix4( this.matrixWorld ),
  							index: i,
  							offsetIndex: oi,
  							face: null,
  							faceIndex: null,
  							object: this

  						} );

  					}

  				}

  			} else {

  				var positions = attributes.position.array;

  				for ( var i = 0; i < positions.length / 3 - 1; i += step ) {

  					vStart.fromArray( positions, 3 * i );
  					vEnd.fromArray( positions, 3 * i + 3 );

  					var distSq = ray.distanceSqToSegment( vStart, vEnd, interRay, interSegment );

  					if ( distSq > precisionSq ) continue;

  					var distance = ray.origin.distanceTo( interRay );

  					if ( distance < raycaster.near || distance > raycaster.far ) continue;

  					intersects.push( {

  						distance: distance,
  						// What do we want? intersection point on the ray or on the segment??
  						// point: raycaster.ray.at( distance ),
  						point: interSegment.clone().applyMatrix4( this.matrixWorld ),
  						index: i,
  						face: null,
  						faceIndex: null,
  						object: this

  					} );

  				}

  			}

  		} else if ( geometry instanceof THREE$Geometry ) {

  			var vertices = geometry.vertices;
  			var nbVertices = vertices.length;

  			for ( var i = 0; i < nbVertices - 1; i += step ) {

  				var distSq = ray.distanceSqToSegment( vertices[ i ], vertices[ i + 1 ], interRay, interSegment );

  				if ( distSq > precisionSq ) continue;

  				var distance = ray.origin.distanceTo( interRay );

  				if ( distance < raycaster.near || distance > raycaster.far ) continue;

  				intersects.push( {

  					distance: distance,
  					// What do we want? intersection point on the ray or on the segment??
  					// point: raycaster.ray.at( distance ),
  					point: interSegment.clone().applyMatrix4( this.matrixWorld ),
  					index: i,
  					face: null,
  					faceIndex: null,
  					object: this

  				} );

  			}

  		}

  	};

  }() );

  THREE$Line.prototype.clone = function ( object ) {

  	if ( object === undefined ) object = new THREE$Line( this.geometry, this.material, this.mode );

  	THREE$Object3D.prototype.clone.call( this, object );

  	return object;

  };



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$PointCloud ( geometry, material ) {

  	THREE$Object3D.call( this );

  	this.type = 'PointCloud';

  	this.geometry = geometry !== undefined ? geometry : new THREE$Geometry();
  	this.material = material !== undefined ? material : new THREE$PointCloudMaterial( { color: Math.random() * 0xffffff } );

  }

  THREE$PointCloud.prototype = Object.create( THREE$Object3D.prototype );
  THREE$PointCloud.prototype.constructor = THREE$PointCloud;

  THREE$PointCloud.prototype.raycast = ( function () {

  	var inverseMatrix = new THREE$Matrix4();
  	var ray = new THREE$Ray();

  	return function ( raycaster, intersects ) {

  		var object = this;
  		var geometry = object.geometry;
  		var threshold = raycaster.params.PointCloud.threshold;

  		inverseMatrix.getInverse( this.matrixWorld );
  		ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

  		if ( geometry.boundingBox !== null ) {

  			if ( ray.isIntersectionBox( geometry.boundingBox ) === false ) {

  				return;

  			}

  		}

  		var localThreshold = threshold / ( ( this.scale.x + this.scale.y + this.scale.z ) / 3 );
  		var position = new THREE$Vector3();

  		var testPoint = function ( point, index ) {

  			var rayPointDistance = ray.distanceToPoint( point );

  			if ( rayPointDistance < localThreshold ) {

  				var intersectPoint = ray.closestPointToPoint( point );
  				intersectPoint.applyMatrix4( object.matrixWorld );

  				var distance = raycaster.ray.origin.distanceTo( intersectPoint );

  				intersects.push( {

  					distance: distance,
  					distanceToRay: rayPointDistance,
  					point: intersectPoint.clone(),
  					index: index,
  					face: null,
  					object: object

  				} );

  			}

  		};

  		if ( geometry instanceof THREE$BufferGeometry ) {

  			var attributes = geometry.attributes;
  			var positions = attributes.position.array;

  			if ( attributes.index !== undefined ) {

  				var indices = attributes.index.array;
  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					var offset = {
  						start: 0,
  						count: indices.length,
  						index: 0
  					};

  					offsets = [ offset ];

  				}

  				for ( var oi = 0, ol = offsets.length; oi < ol; ++ oi ) {

  					var start = offsets[ oi ].start;
  					var count = offsets[ oi ].count;
  					var index = offsets[ oi ].index;

  					for ( var i = start, il = start + count; i < il; i ++ ) {

  						var a = index + indices[ i ];

  						position.fromArray( positions, a * 3 );

  						testPoint( position, a );

  					}

  				}

  			} else {

  				var pointCount = positions.length / 3;

  				for ( var i = 0; i < pointCount; i ++ ) {

  					position.set(
  						positions[ 3 * i ],
  						positions[ 3 * i + 1 ],
  						positions[ 3 * i + 2 ]
  					);

  					testPoint( position, i );

  				}

  			}

  		} else {

  			var vertices = this.geometry.vertices;

  			for ( var i = 0; i < vertices.length; i ++ ) {

  				testPoint( vertices[ i ], i );

  			}

  		}

  	};

  }() );

  THREE$PointCloud.prototype.clone = function ( object ) {

  	if ( object === undefined ) object = new THREE$PointCloud( this.geometry, this.material );

  	THREE$Object3D.prototype.clone.call( this, object );

  	return object;

  };


  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Light ( color ) {

  	THREE$Object3D.call( this );

  	this.type = 'Light';
  	
  	this.color = new THREE$Color( color );

  }

  THREE$Light.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Light.prototype.constructor = THREE$Light;

  THREE$Light.prototype.clone = function ( light ) {

  	if ( light === undefined ) light = new THREE$Light();

  	THREE$Object3D.prototype.clone.call( this, light );

  	light.color.copy( this.color );

  	return light;

  };



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$HemisphereLight ( skyColor, groundColor, intensity ) {

  	THREE$Light.call( this, skyColor );

  	this.type = 'HemisphereLight';

  	this.position.set( 0, 100, 0 );

  	this.groundColor = new THREE$Color( groundColor );
  	this.intensity = ( intensity !== undefined ) ? intensity : 1;

  }

  THREE$HemisphereLight.prototype = Object.create( THREE$Light.prototype );
  THREE$HemisphereLight.prototype.constructor = THREE$HemisphereLight;

  THREE$HemisphereLight.prototype.clone = function () {

  	var light = new THREE$HemisphereLight();

  	THREE$Light.prototype.clone.call( this, light );

  	light.groundColor.copy( this.groundColor );
  	light.intensity = this.intensity;

  	return light;

  };



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$SpotLight ( color, intensity, distance, angle, exponent, decay ) {

  	THREE$Light.call( this, color );

  	this.type = 'SpotLight';

  	this.position.set( 0, 1, 0 );
  	this.target = new THREE$Object3D();

  	this.intensity = ( intensity !== undefined ) ? intensity : 1;
  	this.distance = ( distance !== undefined ) ? distance : 0;
  	this.angle = ( angle !== undefined ) ? angle : Math.PI / 3;
  	this.exponent = ( exponent !== undefined ) ? exponent : 10;
  	this.decay = ( decay !== undefined ) ? decay : 1;	// for physically correct lights, should be 2.

  	this.castShadow = false;
  	this.onlyShadow = false;

  	//

  	this.shadowCameraNear = 50;
  	this.shadowCameraFar = 5000;
  	this.shadowCameraFov = 50;

  	this.shadowCameraVisible = false;

  	this.shadowBias = 0;
  	this.shadowDarkness = 0.5;

  	this.shadowMapWidth = 512;
  	this.shadowMapHeight = 512;

  	//

  	this.shadowMap = null;
  	this.shadowMapSize = null;
  	this.shadowCamera = null;
  	this.shadowMatrix = null;

  }

  THREE$SpotLight.prototype = Object.create( THREE$Light.prototype );
  THREE$SpotLight.prototype.constructor = THREE$SpotLight;

  THREE$SpotLight.prototype.clone = function () {

  	var light = new THREE$SpotLight();

  	THREE$Light.prototype.clone.call( this, light );

  	light.target = this.target.clone();

  	light.intensity = this.intensity;
  	light.distance = this.distance;
  	light.angle = this.angle;
  	light.exponent = this.exponent;
  	light.decay = this.decay;

  	light.castShadow = this.castShadow;
  	light.onlyShadow = this.onlyShadow;

  	//

  	light.shadowCameraNear = this.shadowCameraNear;
  	light.shadowCameraFar = this.shadowCameraFar;
  	light.shadowCameraFov = this.shadowCameraFov;

  	light.shadowCameraVisible = this.shadowCameraVisible;

  	light.shadowBias = this.shadowBias;
  	light.shadowDarkness = this.shadowDarkness;

  	light.shadowMapWidth = this.shadowMapWidth;
  	light.shadowMapHeight = this.shadowMapHeight;

  	return light;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$PointLight ( color, intensity, distance, decay ) {

  	THREE$Light.call( this, color );

  	this.type = 'PointLight';

  	this.intensity = ( intensity !== undefined ) ? intensity : 1;
  	this.distance = ( distance !== undefined ) ? distance : 0;
  	this.decay = ( decay !== undefined ) ? decay : 1;	// for physically correct lights, should be 2.

  }

  THREE$PointLight.prototype = Object.create( THREE$Light.prototype );
  THREE$PointLight.prototype.constructor = THREE$PointLight;

  THREE$PointLight.prototype.clone = function () {

  	var light = new THREE$PointLight();

  	THREE$Light.prototype.clone.call( this, light );

  	light.intensity = this.intensity;
  	light.distance = this.distance;
  	light.decay = this.decay;

  	return light;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$DirectionalLight ( color, intensity ) {

  	THREE$Light.call( this, color );

  	this.type = 'DirectionalLight';

  	this.position.set( 0, 1, 0 );
  	this.target = new THREE$Object3D();

  	this.intensity = ( intensity !== undefined ) ? intensity : 1;

  	this.castShadow = false;
  	this.onlyShadow = false;

  	//

  	this.shadowCameraNear = 50;
  	this.shadowCameraFar = 5000;

  	this.shadowCameraLeft = - 500;
  	this.shadowCameraRight = 500;
  	this.shadowCameraTop = 500;
  	this.shadowCameraBottom = - 500;

  	this.shadowCameraVisible = false;

  	this.shadowBias = 0;
  	this.shadowDarkness = 0.5;

  	this.shadowMapWidth = 512;
  	this.shadowMapHeight = 512;

  	//

  	this.shadowCascade = false;

  	this.shadowCascadeOffset = new THREE$Vector3( 0, 0, - 1000 );
  	this.shadowCascadeCount = 2;

  	this.shadowCascadeBias = [ 0, 0, 0 ];
  	this.shadowCascadeWidth = [ 512, 512, 512 ];
  	this.shadowCascadeHeight = [ 512, 512, 512 ];

  	this.shadowCascadeNearZ = [ - 1.000, 0.990, 0.998 ];
  	this.shadowCascadeFarZ  = [ 0.990, 0.998, 1.000 ];

  	this.shadowCascadeArray = [];

  	//

  	this.shadowMap = null;
  	this.shadowMapSize = null;
  	this.shadowCamera = null;
  	this.shadowMatrix = null;

  }

  THREE$DirectionalLight.prototype = Object.create( THREE$Light.prototype );
  THREE$DirectionalLight.prototype.constructor = THREE$DirectionalLight;

  THREE$DirectionalLight.prototype.clone = function () {

  	var light = new THREE$DirectionalLight();

  	THREE$Light.prototype.clone.call( this, light );

  	light.target = this.target.clone();

  	light.intensity = this.intensity;

  	light.castShadow = this.castShadow;
  	light.onlyShadow = this.onlyShadow;

  	//

  	light.shadowCameraNear = this.shadowCameraNear;
  	light.shadowCameraFar = this.shadowCameraFar;

  	light.shadowCameraLeft = this.shadowCameraLeft;
  	light.shadowCameraRight = this.shadowCameraRight;
  	light.shadowCameraTop = this.shadowCameraTop;
  	light.shadowCameraBottom = this.shadowCameraBottom;

  	light.shadowCameraVisible = this.shadowCameraVisible;

  	light.shadowBias = this.shadowBias;
  	light.shadowDarkness = this.shadowDarkness;

  	light.shadowMapWidth = this.shadowMapWidth;
  	light.shadowMapHeight = this.shadowMapHeight;

  	//

  	light.shadowCascade = this.shadowCascade;

  	light.shadowCascadeOffset.copy( this.shadowCascadeOffset );
  	light.shadowCascadeCount = this.shadowCascadeCount;

  	light.shadowCascadeBias = this.shadowCascadeBias.slice( 0 );
  	light.shadowCascadeWidth = this.shadowCascadeWidth.slice( 0 );
  	light.shadowCascadeHeight = this.shadowCascadeHeight.slice( 0 );

  	light.shadowCascadeNearZ = this.shadowCascadeNearZ.slice( 0 );
  	light.shadowCascadeFarZ  = this.shadowCascadeFarZ.slice( 0 );

  	return light;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$AmbientLight ( color ) {

  	THREE$Light.call( this, color );

  	this.type = 'AmbientLight';

  }

  THREE$AmbientLight.prototype = Object.create( THREE$Light.prototype );
  THREE$AmbientLight.prototype.constructor = THREE$AmbientLight;

  THREE$AmbientLight.prototype.clone = function () {

  	var light = new THREE$AmbientLight();

  	THREE$Light.prototype.clone.call( this, light );

  	return light;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author mikael emtinger / http://gomo.se/
   * @author WestLangley / http://github.com/WestLangley
  */

  function THREE$Camera () {

  	THREE$Object3D.call( this );

  	this.type = 'Camera';

  	this.matrixWorldInverse = new THREE$Matrix4();
  	this.projectionMatrix = new THREE$Matrix4();

  }

  THREE$Camera.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Camera.prototype.constructor = THREE$Camera;

  THREE$Camera.prototype.getWorldDirection = function () {

  	var quaternion = new THREE$Quaternion();

  	return function ( optionalTarget ) {

  		var result = optionalTarget || new THREE$Vector3();

  		this.getWorldQuaternion( quaternion );

  		return result.set( 0, 0, - 1 ).applyQuaternion( quaternion );

  	}

  }();

  THREE$Camera.prototype.lookAt = function () {

  	// This routine does not support cameras with rotated and/or translated parent(s)

  	var m1 = new THREE$Matrix4();

  	return function ( vector ) {

  		m1.lookAt( this.position, vector, this.up );

  		this.quaternion.setFromRotationMatrix( m1 );

  	};

  }();

  THREE$Camera.prototype.clone = function ( camera ) {

  	if ( camera === undefined ) camera = new THREE$Camera();

  	THREE$Object3D.prototype.clone.call( this, camera );

  	camera.matrixWorldInverse.copy( this.matrixWorldInverse );
  	camera.projectionMatrix.copy( this.projectionMatrix );

  	return camera;
  };



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$OrthographicCamera ( left, right, top, bottom, near, far ) {

  	THREE$Camera.call( this );

  	this.type = 'OrthographicCamera';

  	this.zoom = 1;

  	this.left = left;
  	this.right = right;
  	this.top = top;
  	this.bottom = bottom;

  	this.near = ( near !== undefined ) ? near : 0.1;
  	this.far = ( far !== undefined ) ? far : 2000;

  	this.updateProjectionMatrix();

  }

  THREE$OrthographicCamera.prototype = Object.create( THREE$Camera.prototype );
  THREE$OrthographicCamera.prototype.constructor = THREE$OrthographicCamera;

  THREE$OrthographicCamera.prototype.updateProjectionMatrix = function () {

  	var dx = ( this.right - this.left ) / ( 2 * this.zoom );
  	var dy = ( this.top - this.bottom ) / ( 2 * this.zoom );
  	var cx = ( this.right + this.left ) / 2;
  	var cy = ( this.top + this.bottom ) / 2;

  	this.projectionMatrix.makeOrthographic( cx - dx, cx + dx, cy + dy, cy - dy, this.near, this.far );

  };

  THREE$OrthographicCamera.prototype.clone = function () {

  	var camera = new THREE$OrthographicCamera();

  	THREE$Camera.prototype.clone.call( this, camera );

  	camera.zoom = this.zoom;

  	camera.left = this.left;
  	camera.right = this.right;
  	camera.top = this.top;
  	camera.bottom = this.bottom;

  	camera.near = this.near;
  	camera.far = this.far;

  	camera.projectionMatrix.copy( this.projectionMatrix );

  	return camera;
  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author greggman / http://games.greggman.com/
   * @author zz85 / http://www.lab4games.net/zz85/blog
   */

  function THREE$PerspectiveCamera ( fov, aspect, near, far ) {

  	THREE$Camera.call( this );

  	this.type = 'PerspectiveCamera';

  	this.zoom = 1;

  	this.fov = fov !== undefined ? fov : 50;
  	this.aspect = aspect !== undefined ? aspect : 1;
  	this.near = near !== undefined ? near : 0.1;
  	this.far = far !== undefined ? far : 2000;

  	this.updateProjectionMatrix();

  }

  THREE$PerspectiveCamera.prototype = Object.create( THREE$Camera.prototype );
  THREE$PerspectiveCamera.prototype.constructor = THREE$PerspectiveCamera;


  /**
   * Uses Focal Length (in mm) to estimate and set FOV
   * 35mm (fullframe) camera is used if frame size is not specified;
   * Formula based on http://www.bobatkins.com/photography/technical/field_of_view.html
   */

  THREE$PerspectiveCamera.prototype.setLens = function ( focalLength, frameHeight ) {

  	if ( frameHeight === undefined ) frameHeight = 24;

  	this.fov = 2 * THREE$Math.radToDeg( Math.atan( frameHeight / ( focalLength * 2 ) ) );
  	this.updateProjectionMatrix();

  }


  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   var w = 1920;
   *   var h = 1080;
   *   var fullWidth = w * 3;
   *   var fullHeight = h * 2;
   *
   *   --A--
   *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */

  THREE$PerspectiveCamera.prototype.setViewOffset = function ( fullWidth, fullHeight, x, y, width, height ) {

  	this.fullWidth = fullWidth;
  	this.fullHeight = fullHeight;
  	this.x = x;
  	this.y = y;
  	this.width = width;
  	this.height = height;

  	this.updateProjectionMatrix();

  };


  THREE$PerspectiveCamera.prototype.updateProjectionMatrix = function () {

  	var fov = THREE$Math.radToDeg( 2 * Math.atan( Math.tan( THREE$Math.degToRad( this.fov ) * 0.5 ) / this.zoom ) );

  	if ( this.fullWidth ) {

  		var aspect = this.fullWidth / this.fullHeight;
  		var top = Math.tan( THREE$Math.degToRad( fov * 0.5 ) ) * this.near;
  		var bottom = - top;
  		var left = aspect * bottom;
  		var right = aspect * top;
  		var width = Math.abs( right - left );
  		var height = Math.abs( top - bottom );

  		this.projectionMatrix.makeFrustum(
  			left + this.x * width / this.fullWidth,
  			left + ( this.x + this.width ) * width / this.fullWidth,
  			top - ( this.y + this.height ) * height / this.fullHeight,
  			top - this.y * height / this.fullHeight,
  			this.near,
  			this.far
  		);

  	} else {

  		this.projectionMatrix.makePerspective( fov, this.aspect, this.near, this.far );

  	}

  };

  THREE$PerspectiveCamera.prototype.clone = function () {

  	var camera = new THREE$PerspectiveCamera();

  	THREE$Camera.prototype.clone.call( this, camera );

  	camera.zoom = this.zoom;

  	camera.fov = this.fov;
  	camera.aspect = this.aspect;
  	camera.near = this.near;
  	camera.far = this.far;

  	camera.projectionMatrix.copy( this.projectionMatrix );

  	return camera;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Cube.as
   */

  function THREE$BoxGeometry ( width, height, depth, widthSegments, heightSegments, depthSegments ) {

  	THREE$Geometry.call( this );

  	this.type = 'BoxGeometry';

  	this.parameters = {
  		width: width,
  		height: height,
  		depth: depth,
  		widthSegments: widthSegments,
  		heightSegments: heightSegments,
  		depthSegments: depthSegments
  	};

  	this.widthSegments = widthSegments || 1;
  	this.heightSegments = heightSegments || 1;
  	this.depthSegments = depthSegments || 1;

  	var scope = this;

  	var width_half = width / 2;
  	var height_half = height / 2;
  	var depth_half = depth / 2;

  	buildPlane( 'z', 'y', - 1, - 1, depth, height, width_half, 0 ); // px
  	buildPlane( 'z', 'y',   1, - 1, depth, height, - width_half, 1 ); // nx
  	buildPlane( 'x', 'z',   1,   1, width, depth, height_half, 2 ); // py
  	buildPlane( 'x', 'z',   1, - 1, width, depth, - height_half, 3 ); // ny
  	buildPlane( 'x', 'y',   1, - 1, width, height, depth_half, 4 ); // pz
  	buildPlane( 'x', 'y', - 1, - 1, width, height, - depth_half, 5 ); // nz

  	function buildPlane( u, v, udir, vdir, width, height, depth, materialIndex ) {

  		var w, ix, iy,
  		gridX = scope.widthSegments,
  		gridY = scope.heightSegments,
  		width_half = width / 2,
  		height_half = height / 2,
  		offset = scope.vertices.length;

  		if ( ( u === 'x' && v === 'y' ) || ( u === 'y' && v === 'x' ) ) {

  			w = 'z';

  		} else if ( ( u === 'x' && v === 'z' ) || ( u === 'z' && v === 'x' ) ) {

  			w = 'y';
  			gridY = scope.depthSegments;

  		} else if ( ( u === 'z' && v === 'y' ) || ( u === 'y' && v === 'z' ) ) {

  			w = 'x';
  			gridX = scope.depthSegments;

  		}

  		var gridX1 = gridX + 1,
  		gridY1 = gridY + 1,
  		segment_width = width / gridX,
  		segment_height = height / gridY,
  		normal = new THREE$Vector3();

  		normal[ w ] = depth > 0 ? 1 : - 1;

  		for ( iy = 0; iy < gridY1; iy ++ ) {

  			for ( ix = 0; ix < gridX1; ix ++ ) {

  				var vector = new THREE$Vector3();
  				vector[ u ] = ( ix * segment_width - width_half ) * udir;
  				vector[ v ] = ( iy * segment_height - height_half ) * vdir;
  				vector[ w ] = depth;

  				scope.vertices.push( vector );

  			}

  		}

  		for ( iy = 0; iy < gridY; iy ++ ) {

  			for ( ix = 0; ix < gridX; ix ++ ) {

  				var a = ix + gridX1 * iy;
  				var b = ix + gridX1 * ( iy + 1 );
  				var c = ( ix + 1 ) + gridX1 * ( iy + 1 );
  				var d = ( ix + 1 ) + gridX1 * iy;

  				var uva = new THREE$Vector2( ix / gridX, 1 - iy / gridY );
  				var uvb = new THREE$Vector2( ix / gridX, 1 - ( iy + 1 ) / gridY );
  				var uvc = new THREE$Vector2( ( ix + 1 ) / gridX, 1 - ( iy + 1 ) / gridY );
  				var uvd = new THREE$Vector2( ( ix + 1 ) / gridX, 1 - iy / gridY );

  				var face = new THREE$Face3( a + offset, b + offset, d + offset );
  				face.normal.copy( normal );
  				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
  				face.materialIndex = materialIndex;

  				scope.faces.push( face );
  				scope.faceVertexUvs[ 0 ].push( [ uva, uvb, uvd ] );

  				face = new THREE$Face3( b + offset, c + offset, d + offset );
  				face.normal.copy( normal );
  				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
  				face.materialIndex = materialIndex;

  				scope.faces.push( face );
  				scope.faceVertexUvs[ 0 ].push( [ uvb.clone(), uvc, uvd.clone() ] );

  			}

  		}

  	}

  	this.mergeVertices();

  }

  THREE$BoxGeometry.prototype = Object.create( THREE$Geometry.prototype );
  THREE$BoxGeometry.prototype.constructor = THREE$BoxGeometry;



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$DataTexture ( data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy ) {

  	THREE$Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

  	this.image = { data: data, width: width, height: height };

  }

  THREE$DataTexture.prototype = Object.create( THREE$Texture.prototype );
  THREE$DataTexture.prototype.constructor = THREE$DataTexture;

  THREE$DataTexture.prototype.clone = function () {

  	var texture = new THREE$DataTexture();

  	THREE$Texture.prototype.clone.call( this, texture );

  	return texture;

  };



  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   * @author michael guerrero / http://realitymeltdown.com
   * @author ikerr / http://verold.com
   */

  function THREE$Skeleton ( bones, boneInverses, useVertexTexture ) {

  	this.useVertexTexture = useVertexTexture !== undefined ? useVertexTexture : true;

  	this.identityMatrix = new THREE$Matrix4();

  	// copy the bone array

  	bones = bones || [];

  	this.bones = bones.slice( 0 );

  	// create a bone texture or an array of floats

  	if ( this.useVertexTexture ) {

  		// layout (1 matrix = 4 pixels)
  		//      RGBA RGBA RGBA RGBA (=> column1, column2, column3, column4)
  		//  with  8x8  pixel texture max   16 bones  (8 * 8  / 4)
  		//       16x16 pixel texture max   64 bones (16 * 16 / 4)
  		//       32x32 pixel texture max  256 bones (32 * 32 / 4)
  		//       64x64 pixel texture max 1024 bones (64 * 64 / 4)

  		var size;

  		if ( this.bones.length > 256 )
  			size = 64;
  		else if ( this.bones.length > 64 )
  			size = 32;
  		else if ( this.bones.length > 16 )
  			size = 16;
  		else
  			size = 8;

  		this.boneTextureWidth = size;
  		this.boneTextureHeight = size;

  		this.boneMatrices = new Float32Array( this.boneTextureWidth * this.boneTextureHeight * 4 ); // 4 floats per RGBA pixel
  		this.boneTexture = new THREE$DataTexture( this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE$RGBAFormat, THREE$FloatType );
  		this.boneTexture.minFilter = THREE$NearestFilter;
  		this.boneTexture.magFilter = THREE$NearestFilter;
  		this.boneTexture.generateMipmaps = false;
  		this.boneTexture.flipY = false;

  	} else {

  		this.boneMatrices = new Float32Array( 16 * this.bones.length );

  	}

  	// use the supplied bone inverses or calculate the inverses

  	if ( boneInverses === undefined ) {

  		this.calculateInverses();

  	} else {

  		if ( this.bones.length === boneInverses.length ) {

  			this.boneInverses = boneInverses.slice( 0 );

  		} else {

  			THREE$warn( 'THREE.Skeleton bonInverses is the wrong length.' );

  			this.boneInverses = [];

  			for ( var b = 0, bl = this.bones.length; b < bl; b ++ ) {

  				this.boneInverses.push( new THREE$Matrix4() );

  			}

  		}

  	}

  }

  THREE$Skeleton.prototype.calculateInverses = function () {

  	this.boneInverses = [];

  	for ( var b = 0, bl = this.bones.length; b < bl; b ++ ) {

  		var inverse = new THREE$Matrix4();

  		if ( this.bones[ b ] ) {

  			inverse.getInverse( this.bones[ b ].matrixWorld );

  		}

  		this.boneInverses.push( inverse );

  	}

  };

  THREE$Skeleton.prototype.pose = function () {

  	var bone;

  	// recover the bind-time world matrices

  	for ( var b = 0, bl = this.bones.length; b < bl; b ++ ) {

  		bone = this.bones[ b ];

  		if ( bone ) {

  			bone.matrixWorld.getInverse( this.boneInverses[ b ] );

  		}

  	}

  	// compute the local matrices, positions, rotations and scales

  	for ( var b = 0, bl = this.bones.length; b < bl; b ++ ) {

  		bone = this.bones[ b ];

  		if ( bone ) {

  			if ( bone.parent ) {

  				bone.matrix.getInverse( bone.parent.matrixWorld );
  				bone.matrix.multiply( bone.matrixWorld );

  			} else {

  				bone.matrix.copy( bone.matrixWorld );

  			}

  			bone.matrix.decompose( bone.position, bone.quaternion, bone.scale );

  		}

  	}

  };

  THREE$Skeleton.prototype.update = ( function () {

  	var offsetMatrix = new THREE$Matrix4();
  	
  	return function () {

  		// flatten bone matrices to array

  		for ( var b = 0, bl = this.bones.length; b < bl; b ++ ) {

  			// compute the offset between the current and the original transform

  			var matrix = this.bones[ b ] ? this.bones[ b ].matrixWorld : this.identityMatrix;

  			offsetMatrix.multiplyMatrices( matrix, this.boneInverses[ b ] );
  			offsetMatrix.flattenToArrayOffset( this.boneMatrices, b * 16 );

  		}

  		if ( this.useVertexTexture ) {

  			this.boneTexture.needsUpdate = true;

  		}
  		
  	};

  } )();




  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   * @author ikerr / http://verold.com
   */

  function THREE$Bone ( skin ) {

  	THREE$Object3D.call( this );

  	this.type = 'Bone';

  	this.skin = skin;

  }

  THREE$Bone.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Bone.prototype.constructor = THREE$Bone;



  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   * @author ikerr / http://verold.com
   */

  function THREE$SkinnedMesh ( geometry, material, useVertexTexture ) {

  	THREE$Mesh.call( this, geometry, material );

  	this.type = 'SkinnedMesh';

  	this.bindMode = "attached";
  	this.bindMatrix = new THREE$Matrix4();
  	this.bindMatrixInverse = new THREE$Matrix4();

  	// init bones

  	// TODO: remove bone creation as there is no reason (other than
  	// convenience) for THREE.SkinnedMesh to do this.

  	var bones = [];

  	if ( this.geometry && this.geometry.bones !== undefined ) {

  		var bone, gbone, p, q, s;

  		for ( var b = 0, bl = this.geometry.bones.length; b < bl; ++ b ) {

  			gbone = this.geometry.bones[ b ];

  			p = gbone.pos;
  			q = gbone.rotq;
  			s = gbone.scl;

  			bone = new THREE$Bone( this );
  			bones.push( bone );

  			bone.name = gbone.name;
  			bone.position.set( p[ 0 ], p[ 1 ], p[ 2 ] );
  			bone.quaternion.set( q[ 0 ], q[ 1 ], q[ 2 ], q[ 3 ] );

  			if ( s !== undefined ) {

  				bone.scale.set( s[ 0 ], s[ 1 ], s[ 2 ] );

  			} else {

  				bone.scale.set( 1, 1, 1 );

  			}

  		}

  		for ( var b = 0, bl = this.geometry.bones.length; b < bl; ++ b ) {

  			gbone = this.geometry.bones[ b ];

  			if ( gbone.parent !== - 1 ) {

  				bones[ gbone.parent ].add( bones[ b ] );

  			} else {

  				this.add( bones[ b ] );

  			}

  		}

  	}

  	this.normalizeSkinWeights();

  	this.updateMatrixWorld( true );
  	this.bind( new THREE$Skeleton( bones, undefined, useVertexTexture ) );

  }


  THREE$SkinnedMesh.prototype = Object.create( THREE$Mesh.prototype );
  THREE$SkinnedMesh.prototype.constructor = THREE$SkinnedMesh;

  THREE$SkinnedMesh.prototype.bind = function( skeleton, bindMatrix ) {

  	this.skeleton = skeleton;

  	if ( bindMatrix === undefined ) {

  		this.updateMatrixWorld( true );

  		bindMatrix = this.matrixWorld;

  	}

  	this.bindMatrix.copy( bindMatrix );
  	this.bindMatrixInverse.getInverse( bindMatrix );

  };

  THREE$SkinnedMesh.prototype.pose = function () {

  	this.skeleton.pose();

  };

  THREE$SkinnedMesh.prototype.normalizeSkinWeights = function () {

  	if ( this.geometry instanceof THREE$Geometry ) {

  		for ( var i = 0; i < this.geometry.skinIndices.length; i ++ ) {

  			var sw = this.geometry.skinWeights[ i ];

  			var scale = 1.0 / sw.lengthManhattan();

  			if ( scale !== Infinity ) {

  				sw.multiplyScalar( scale );

  			} else {

  				sw.set( 1 ); // this will be normalized by the shader anyway

  			}

  		}

  	} else {

  		// skinning weights assumed to be normalized for THREE.BufferGeometry

  	}

  };

  THREE$SkinnedMesh.prototype.updateMatrixWorld = function( force ) {

  	THREE$Mesh.prototype.updateMatrixWorld.call( this, true );

  	if ( this.bindMode === "attached" ) {

  		this.bindMatrixInverse.getInverse( this.matrixWorld );

  	} else if ( this.bindMode === "detached" ) {

  		this.bindMatrixInverse.getInverse( this.bindMatrix );

  	} else {

  		THREE$warn( 'THREE.SkinnedMesh unreckognized bindMode: ' + this.bindMode );

  	}

  };

  THREE$SkinnedMesh.prototype.clone = function( object ) {

  	if ( object === undefined ) {

  		object = new THREE$SkinnedMesh( this.geometry, this.material, this.useVertexTexture );

  	}

  	THREE$Mesh.prototype.clone.call( this, object );

  	return object;

  };




  /**
   * @author szimek / https://github.com/szimek/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$WebGLRenderTarget ( width, height, options ) {

  	this.width = width;
  	this.height = height;

  	options = options || {};

  	this.wrapS = options.wrapS !== undefined ? options.wrapS : THREE$ClampToEdgeWrapping;
  	this.wrapT = options.wrapT !== undefined ? options.wrapT : THREE$ClampToEdgeWrapping;

  	this.magFilter = options.magFilter !== undefined ? options.magFilter : THREE$LinearFilter;
  	this.minFilter = options.minFilter !== undefined ? options.minFilter : THREE$LinearMipMapLinearFilter;

  	this.anisotropy = options.anisotropy !== undefined ? options.anisotropy : 1;

  	this.offset = new THREE$Vector2( 0, 0 );
  	this.repeat = new THREE$Vector2( 1, 1 );

  	this.format = options.format !== undefined ? options.format : THREE$RGBAFormat;
  	this.type = options.type !== undefined ? options.type : THREE$UnsignedByteType;

  	this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
  	this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : true;

  	this.generateMipmaps = true;

  	this.shareDepthFrom = options.shareDepthFrom !== undefined ? options.shareDepthFrom : null;

  }

  THREE$WebGLRenderTarget.prototype = {

  	constructor: THREE$WebGLRenderTarget,

  	setSize: function ( width, height ) {

  		this.width = width;
  		this.height = height;

  	},

  	clone: function () {

  		var tmp = new THREE$WebGLRenderTarget( this.width, this.height );

  		tmp.wrapS = this.wrapS;
  		tmp.wrapT = this.wrapT;

  		tmp.magFilter = this.magFilter;
  		tmp.minFilter = this.minFilter;

  		tmp.anisotropy = this.anisotropy;

  		tmp.offset.copy( this.offset );
  		tmp.repeat.copy( this.repeat );

  		tmp.format = this.format;
  		tmp.type = this.type;

  		tmp.depthBuffer = this.depthBuffer;
  		tmp.stencilBuffer = this.stencilBuffer;

  		tmp.generateMipmaps = this.generateMipmaps;

  		tmp.shareDepthFrom = this.shareDepthFrom;

  		return tmp;

  	},

  	dispose: function () {

  		this.dispatchEvent( { type: 'dispose' } );

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$WebGLRenderTarget.prototype );



  /**
   * @author alteredq / http://alteredqualia.com
   */

  function THREE$WebGLRenderTargetCube ( width, height, options ) {

  	THREE$WebGLRenderTarget.call( this, width, height, options );

  	this.activeCubeFace = 0; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5

  }

  THREE$WebGLRenderTargetCube.prototype = Object.create( THREE$WebGLRenderTarget.prototype );
  THREE$WebGLRenderTargetCube.prototype.constructor = THREE$WebGLRenderTargetCube;



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$CompressedTexture ( mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy ) {

  	THREE$Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

  	this.image = { width: width, height: height };
  	this.mipmaps = mipmaps;

  	// no flipping for cube textures
  	// (also flipping doesn't work for compressed textures )

  	this.flipY = false;

  	// can't generate mipmaps for compressed textures
  	// mips must be embedded in DDS files

  	this.generateMipmaps = false;

  }

  THREE$CompressedTexture.prototype = Object.create( THREE$Texture.prototype );
  THREE$CompressedTexture.prototype.constructor = THREE$CompressedTexture;

  THREE$CompressedTexture.prototype.clone = function () {

  	var texture = new THREE$CompressedTexture();

  	THREE$Texture.prototype.clone.call( this, texture );

  	return texture;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$CubeTexture ( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {

  	mapping = mapping !== undefined ? mapping : THREE$CubeReflectionMapping;
  	
  	THREE$Texture.call( this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

  	this.images = images;

  }

  THREE$CubeTexture.prototype = Object.create( THREE$Texture.prototype );
  THREE$CubeTexture.prototype.constructor = THREE$CubeTexture;

  THREE$CubeTexture.clone = function ( texture ) {

  	if ( texture === undefined ) texture = new THREE$CubeTexture();

  	THREE$Texture.prototype.clone.call( this, texture );

  	texture.images = this.images;

  	return texture;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$FogExp2 ( color, density ) {

  	this.name = '';

  	this.color = new THREE$Color( color );
  	this.density = ( density !== undefined ) ? density : 0.00025;

  }

  THREE$FogExp2.prototype.clone = function () {

  	return new THREE$FogExp2( this.color.getHex(), this.density );

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Fog ( color, near, far ) {

  	this.name = '';

  	this.color = new THREE$Color( color );

  	this.near = ( near !== undefined ) ? near : 1;
  	this.far = ( far !== undefined ) ? far : 1000;

  }

  THREE$Fog.prototype.clone = function () {

  	return new THREE$Fog( this.color.getHex(), this.near, this.far );

  };



  /**
   * @author alteredq / http://alteredqualia.com/
   *
   * parameters = {
   *  color: <hex>,
   *  opacity: <float>,
   *
   *  blending: THREE.NormalBlending,
   *  depthTest: <bool>,
   *  depthWrite: <bool>,
   *
   *  linewidth: <float>,
   *
   *  scale: <float>,
   *  dashSize: <float>,
   *  gapSize: <float>,
   *
   *  vertexColors: <bool>
   *
   *  fog: <bool>
   * }
   */

  function THREE$LineDashedMaterial ( parameters ) {

  	THREE$Material.call( this );

  	this.type = 'LineDashedMaterial';

  	this.color = new THREE$Color( 0xffffff );

  	this.linewidth = 1;

  	this.scale = 1;
  	this.dashSize = 3;
  	this.gapSize = 1;

  	this.vertexColors = false;

  	this.fog = true;

  	this.setValues( parameters );

  }

  THREE$LineDashedMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$LineDashedMaterial.prototype.constructor = THREE$LineDashedMaterial;

  THREE$LineDashedMaterial.prototype.clone = function () {

  	var material = new THREE$LineDashedMaterial();

  	THREE$Material.prototype.clone.call( this, material );

  	material.color.copy( this.color );

  	material.linewidth = this.linewidth;

  	material.scale = this.scale;
  	material.dashSize = this.dashSize;
  	material.gapSize = this.gapSize;

  	material.vertexColors = this.vertexColors;

  	material.fog = this.fog;

  	return material;

  };


  var THREE$WebGLShader;

  THREE$WebGLShader = ( function () {

  	var addLineNumbers = function ( string ) {

  		var lines = string.split( '\n' );

  		for ( var i = 0; i < lines.length; i ++ ) {

  			lines[ i ] = ( i + 1 ) + ': ' + lines[ i ];

  		}

  		return lines.join( '\n' );

  	};

  	return function ( gl, type, string ) {

  		var shader = gl.createShader( type ); 

  		gl.shaderSource( shader, string );
  		gl.compileShader( shader );

  		if ( gl.getShaderParameter( shader, gl.COMPILE_STATUS ) === false ) {

  			THREE$error( 'THREE.WebGLShader: Shader couldn\'t compile.' );

  		}

  		if ( gl.getShaderInfoLog( shader ) !== '' ) {

  			THREE$warn( 'THREE.WebGLShader: gl.getShaderInfoLog()', gl.getShaderInfoLog( shader ), addLineNumbers( string ) );

  		}

  		// --enable-privileged-webgl-extension
  		// console.log( type, gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );

  		return shader;

  	};

  } )();



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$RawShaderMaterial ( parameters ) {

  	THREE$ShaderMaterial.call( this, parameters );

  	this.type = 'RawShaderMaterial';

  }

  THREE$RawShaderMaterial.prototype = Object.create( THREE$ShaderMaterial.prototype );
  THREE$RawShaderMaterial.prototype.constructor = THREE$RawShaderMaterial;

  THREE$RawShaderMaterial.prototype.clone = function () {

  	var material = new THREE$RawShaderMaterial();

  	THREE$ShaderMaterial.prototype.clone.call( this, material );

  	return material;

  };


  var THREE$WebGLProgram;

  THREE$WebGLProgram = ( function () {

  	var programIdCount = 0;

  	var generateDefines = function ( defines ) {

  		var value, chunk, chunks = [];

  		for ( var d in defines ) {

  			value = defines[ d ];
  			if ( value === false ) continue;

  			chunk = '#define ' + d + ' ' + value;
  			chunks.push( chunk );

  		}

  		return chunks.join( '\n' );

  	};

  	var cacheUniformLocations = function ( gl, program, identifiers ) {

  		var uniforms = {};

  		for ( var i = 0, l = identifiers.length; i < l; i ++ ) {

  			var id = identifiers[ i ];
  			uniforms[ id ] = gl.getUniformLocation( program, id );

  		}

  		return uniforms;

  	};

  	var cacheAttributeLocations = function ( gl, program, identifiers ) {

  		var attributes = {};

  		for ( var i = 0, l = identifiers.length; i < l; i ++ ) {

  			var id = identifiers[ i ];
  			attributes[ id ] = gl.getAttribLocation( program, id );

  		}

  		return attributes;

  	};

  	return function ( renderer, code, material, parameters ) {

  		var _this = renderer;
  		var _gl = _this.context;

  		var defines = material.defines;
  		var uniforms = material.__webglShader.uniforms;
  		var attributes = material.attributes;

  		var vertexShader = material.__webglShader.vertexShader;
  		var fragmentShader = material.__webglShader.fragmentShader;

  		var index0AttributeName = material.index0AttributeName;

  		if ( index0AttributeName === undefined && parameters.morphTargets === true ) {

  			// programs with morphTargets displace position out of attribute 0

  			index0AttributeName = 'position';

  		}

  		var shadowMapTypeDefine = 'SHADOWMAP_TYPE_BASIC';

  		if ( parameters.shadowMapType === THREE$PCFShadowMap ) {

  			shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF';

  		} else if ( parameters.shadowMapType === THREE$PCFSoftShadowMap ) {

  			shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF_SOFT';

  		}

  		var envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
  		var envMapModeDefine = 'ENVMAP_MODE_REFLECTION';
  		var envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';

  		if ( parameters.envMap ) {

  			switch ( material.envMap.mapping ) {

  				case THREE$CubeReflectionMapping:
  				case THREE$CubeRefractionMapping:
  					envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
  					break;

  				case THREE$EquirectangularReflectionMapping:
  				case THREE$EquirectangularRefractionMapping:
  					envMapTypeDefine = 'ENVMAP_TYPE_EQUIREC';
  					break;

  				case THREE$SphericalReflectionMapping:
  					envMapTypeDefine = 'ENVMAP_TYPE_SPHERE';
  					break;

  			}

  			switch ( material.envMap.mapping ) {

  				case THREE$CubeRefractionMapping:
  				case THREE$EquirectangularRefractionMapping:
  					envMapModeDefine = 'ENVMAP_MODE_REFRACTION';
  					break;

  			}

  			switch ( material.combine ) {

  				case THREE$MultiplyOperation:
  					envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';
  					break;

  				case THREE$MixOperation:
  					envMapBlendingDefine = 'ENVMAP_BLENDING_MIX';
  					break;

  				case THREE$AddOperation:
  					envMapBlendingDefine = 'ENVMAP_BLENDING_ADD';
  					break;

  			}

  		}

  		var gammaFactorDefine = ( renderer.gammaFactor > 0 ) ? renderer.gammaFactor : 1.0;

  		// console.log( 'building new program ' );

  		//

  		var customDefines = generateDefines( defines );

  		//

  		var program = _gl.createProgram();

  		var prefix_vertex, prefix_fragment;

  		if ( material instanceof THREE$RawShaderMaterial ) {

  			prefix_vertex = '';
  			prefix_fragment = '';

  		} else {

  			prefix_vertex = [

  				'precision ' + parameters.precision + ' float;',
  				'precision ' + parameters.precision + ' int;',

  				customDefines,

  				parameters.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',

  				_this.gammaInput ? '#define GAMMA_INPUT' : '',
  				_this.gammaOutput ? '#define GAMMA_OUTPUT' : '',
  				'#define GAMMA_FACTOR ' + gammaFactorDefine,

  				'#define MAX_DIR_LIGHTS ' + parameters.maxDirLights,
  				'#define MAX_POINT_LIGHTS ' + parameters.maxPointLights,
  				'#define MAX_SPOT_LIGHTS ' + parameters.maxSpotLights,
  				'#define MAX_HEMI_LIGHTS ' + parameters.maxHemiLights,

  				'#define MAX_SHADOWS ' + parameters.maxShadows,

  				'#define MAX_BONES ' + parameters.maxBones,

  				parameters.map ? '#define USE_MAP' : '',
  				parameters.envMap ? '#define USE_ENVMAP' : '',
  				parameters.envMap ? '#define ' + envMapModeDefine : '',
  				parameters.lightMap ? '#define USE_LIGHTMAP' : '',
  				parameters.bumpMap ? '#define USE_BUMPMAP' : '',
  				parameters.normalMap ? '#define USE_NORMALMAP' : '',
  				parameters.specularMap ? '#define USE_SPECULARMAP' : '',
  				parameters.alphaMap ? '#define USE_ALPHAMAP' : '',
  				parameters.vertexColors ? '#define USE_COLOR' : '',

  				parameters.flatShading ? '#define FLAT_SHADED': '',

  				parameters.skinning ? '#define USE_SKINNING' : '',
  				parameters.useVertexTexture ? '#define BONE_TEXTURE' : '',

  				parameters.morphTargets ? '#define USE_MORPHTARGETS' : '',
  				parameters.morphNormals ? '#define USE_MORPHNORMALS' : '',
  				parameters.wrapAround ? '#define WRAP_AROUND' : '',
  				parameters.doubleSided ? '#define DOUBLE_SIDED' : '',
  				parameters.flipSided ? '#define FLIP_SIDED' : '',

  				parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
  				parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '',
  				parameters.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '',
  				parameters.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '',

  				parameters.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',

  				parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
  				//_this._glExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',


  				'uniform mat4 modelMatrix;',
  				'uniform mat4 modelViewMatrix;',
  				'uniform mat4 projectionMatrix;',
  				'uniform mat4 viewMatrix;',
  				'uniform mat3 normalMatrix;',
  				'uniform vec3 cameraPosition;',

  				'attribute vec3 position;',
  				'attribute vec3 normal;',
  				'attribute vec2 uv;',
  				'attribute vec2 uv2;',

  				'#ifdef USE_COLOR',

  				'	attribute vec3 color;',

  				'#endif',

  				'#ifdef USE_MORPHTARGETS',

  				'	attribute vec3 morphTarget0;',
  				'	attribute vec3 morphTarget1;',
  				'	attribute vec3 morphTarget2;',
  				'	attribute vec3 morphTarget3;',

  				'	#ifdef USE_MORPHNORMALS',

  				'		attribute vec3 morphNormal0;',
  				'		attribute vec3 morphNormal1;',
  				'		attribute vec3 morphNormal2;',
  				'		attribute vec3 morphNormal3;',

  				'	#else',

  				'		attribute vec3 morphTarget4;',
  				'		attribute vec3 morphTarget5;',
  				'		attribute vec3 morphTarget6;',
  				'		attribute vec3 morphTarget7;',

  				'	#endif',

  				'#endif',

  				'#ifdef USE_SKINNING',

  				'	attribute vec4 skinIndex;',
  				'	attribute vec4 skinWeight;',

  				'#endif',

  				''

  			].join( '\n' );

  			prefix_fragment = [

  				'precision ' + parameters.precision + ' float;',
  				'precision ' + parameters.precision + ' int;',

  				( parameters.bumpMap || parameters.normalMap || parameters.flatShading ) ? '#extension GL_OES_standard_derivatives : enable' : '',

  				customDefines,

  				'#define MAX_DIR_LIGHTS ' + parameters.maxDirLights,
  				'#define MAX_POINT_LIGHTS ' + parameters.maxPointLights,
  				'#define MAX_SPOT_LIGHTS ' + parameters.maxSpotLights,
  				'#define MAX_HEMI_LIGHTS ' + parameters.maxHemiLights,

  				'#define MAX_SHADOWS ' + parameters.maxShadows,

  				parameters.alphaTest ? '#define ALPHATEST ' + parameters.alphaTest : '',

  				_this.gammaInput ? '#define GAMMA_INPUT' : '',
  				_this.gammaOutput ? '#define GAMMA_OUTPUT' : '',
  				'#define GAMMA_FACTOR ' + gammaFactorDefine,

  				( parameters.useFog && parameters.fog ) ? '#define USE_FOG' : '',
  				( parameters.useFog && parameters.fogExp ) ? '#define FOG_EXP2' : '',

  				parameters.map ? '#define USE_MAP' : '',
  				parameters.envMap ? '#define USE_ENVMAP' : '',
  				parameters.envMap ? '#define ' + envMapTypeDefine : '',
  				parameters.envMap ? '#define ' + envMapModeDefine : '',
  				parameters.envMap ? '#define ' + envMapBlendingDefine : '',
  				parameters.lightMap ? '#define USE_LIGHTMAP' : '',
  				parameters.bumpMap ? '#define USE_BUMPMAP' : '',
  				parameters.normalMap ? '#define USE_NORMALMAP' : '',
  				parameters.specularMap ? '#define USE_SPECULARMAP' : '',
  				parameters.alphaMap ? '#define USE_ALPHAMAP' : '',
  				parameters.vertexColors ? '#define USE_COLOR' : '',

  				parameters.flatShading ? '#define FLAT_SHADED': '',

  				parameters.metal ? '#define METAL' : '',
  				parameters.wrapAround ? '#define WRAP_AROUND' : '',
  				parameters.doubleSided ? '#define DOUBLE_SIDED' : '',
  				parameters.flipSided ? '#define FLIP_SIDED' : '',

  				parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
  				parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '',
  				parameters.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '',
  				parameters.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '',

  				parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
  				//_this._glExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',

  				'uniform mat4 viewMatrix;',
  				'uniform vec3 cameraPosition;',
  				''

  			].join( '\n' );

  		}

  		var glVertexShader = new THREE$WebGLShader( _gl, _gl.VERTEX_SHADER, prefix_vertex + vertexShader );
  		var glFragmentShader = new THREE$WebGLShader( _gl, _gl.FRAGMENT_SHADER, prefix_fragment + fragmentShader );

  		_gl.attachShader( program, glVertexShader );
  		_gl.attachShader( program, glFragmentShader );

  		if ( index0AttributeName !== undefined ) {

  			// Force a particular attribute to index 0.
  			// because potentially expensive emulation is done by browser if attribute 0 is disabled.
  			// And, color, for example is often automatically bound to index 0 so disabling it

  			_gl.bindAttribLocation( program, 0, index0AttributeName );

  		}

  		_gl.linkProgram( program );

  		var programLogInfo = _gl.getProgramInfoLog( program );

  		if ( _gl.getProgramParameter( program, _gl.LINK_STATUS ) === false ) {

  			THREE$error( 'THREE.WebGLProgram: shader error: ' + _gl.getError(), 'gl.VALIDATE_STATUS', _gl.getProgramParameter( program, _gl.VALIDATE_STATUS ), 'gl.getPRogramInfoLog', programLogInfo );

  		}

  		if ( programLogInfo !== '' ) {

  			THREE$warn( 'THREE.WebGLProgram: gl.getProgramInfoLog()' + programLogInfo );
  			// THREE.warn( _gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glVertexShader ) );
  			// THREE.warn( _gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glFragmentShader ) );

  		}

  		// clean up

  		_gl.deleteShader( glVertexShader );
  		_gl.deleteShader( glFragmentShader );

  		// cache uniform locations

  		var identifiers = [

  			'viewMatrix',
  			'modelViewMatrix',
  			'projectionMatrix',
  			'normalMatrix',
  			'modelMatrix',
  			'cameraPosition',
  			'morphTargetInfluences',
  			'bindMatrix',
  			'bindMatrixInverse'

  		];

  		if ( parameters.useVertexTexture ) {

  			identifiers.push( 'boneTexture' );
  			identifiers.push( 'boneTextureWidth' );
  			identifiers.push( 'boneTextureHeight' );

  		} else {

  			identifiers.push( 'boneGlobalMatrices' );

  		}

  		if ( parameters.logarithmicDepthBuffer ) {

  			identifiers.push('logDepthBufFC');

  		}


  		for ( var u in uniforms ) {

  			identifiers.push( u );

  		}

  		this.uniforms = cacheUniformLocations( _gl, program, identifiers );

  		// cache attributes locations

  		identifiers = [

  			'position',
  			'normal',
  			'uv',
  			'uv2',
  			'tangent',
  			'color',
  			'skinIndex',
  			'skinWeight',
  			'lineDistance'

  		];

  		for ( var i = 0; i < parameters.maxMorphTargets; i ++ ) {

  			identifiers.push( 'morphTarget' + i );

  		}

  		for ( var i = 0; i < parameters.maxMorphNormals; i ++ ) {

  			identifiers.push( 'morphNormal' + i );

  		}

  		for ( var a in attributes ) {

  			identifiers.push( a );

  		}

  		this.attributes = cacheAttributeLocations( _gl, program, identifiers );
  		this.attributesKeys = Object.keys( this.attributes );

  		//

  		this.id = programIdCount ++;
  		this.code = code;
  		this.usedTimes = 1;
  		this.program = program;
  		this.vertexShader = glVertexShader;
  		this.fragmentShader = glFragmentShader;

  		return this;

  	};

  } )();


  var THREE$ShaderChunk;

  THREE$ShaderChunk = {};


  var THREE$UniformsLib;


  /**
   * Uniforms library for shared webgl shaders
   */

  THREE$UniformsLib = {

  	common: {

  		"diffuse" : { type: "c", value: new THREE$Color( 0xeeeeee ) },
  		"opacity" : { type: "f", value: 1.0 },

  		"map" : { type: "t", value: null },
  		"offsetRepeat" : { type: "v4", value: new THREE$Vector4( 0, 0, 1, 1 ) },

  		"lightMap" : { type: "t", value: null },
  		"specularMap" : { type: "t", value: null },
  		"alphaMap" : { type: "t", value: null },

  		"envMap" : { type: "t", value: null },
  		"flipEnvMap" : { type: "f", value: - 1 },
  		"reflectivity" : { type: "f", value: 1.0 },
  		"refractionRatio" : { type: "f", value: 0.98 },

  		"morphTargetInfluences" : { type: "f", value: 0 }

  	},

  	bump: {

  		"bumpMap" : { type: "t", value: null },
  		"bumpScale" : { type: "f", value: 1 }

  	},

  	normalmap: {

  		"normalMap" : { type: "t", value: null },
  		"normalScale" : { type: "v2", value: new THREE$Vector2( 1, 1 ) }
  	},

  	fog : {

  		"fogDensity" : { type: "f", value: 0.00025 },
  		"fogNear" : { type: "f", value: 1 },
  		"fogFar" : { type: "f", value: 2000 },
  		"fogColor" : { type: "c", value: new THREE$Color( 0xffffff ) }

  	},

  	lights: {

  		"ambientLightColor" : { type: "fv", value: [] },

  		"directionalLightDirection" : { type: "fv", value: [] },
  		"directionalLightColor" : { type: "fv", value: [] },

  		"hemisphereLightDirection" : { type: "fv", value: [] },
  		"hemisphereLightSkyColor" : { type: "fv", value: [] },
  		"hemisphereLightGroundColor" : { type: "fv", value: [] },

  		"pointLightColor" : { type: "fv", value: [] },
  		"pointLightPosition" : { type: "fv", value: [] },
  		"pointLightDistance" : { type: "fv1", value: [] },
  		"pointLightDecay" : { type: "fv1", value: [] },

  		"spotLightColor" : { type: "fv", value: [] },
  		"spotLightPosition" : { type: "fv", value: [] },
  		"spotLightDirection" : { type: "fv", value: [] },
  		"spotLightDistance" : { type: "fv1", value: [] },
  		"spotLightAngleCos" : { type: "fv1", value: [] },
  		"spotLightExponent" : { type: "fv1", value: [] },
  		"spotLightDecay" : { type: "fv1", value: [] }

  	},

  	particle: {

  		"psColor" : { type: "c", value: new THREE$Color( 0xeeeeee ) },
  		"opacity" : { type: "f", value: 1.0 },
  		"size" : { type: "f", value: 1.0 },
  		"scale" : { type: "f", value: 1.0 },
  		"map" : { type: "t", value: null },
  		"offsetRepeat" : { type: "v4", value: new THREE$Vector4( 0, 0, 1, 1 ) },

  		"fogDensity" : { type: "f", value: 0.00025 },
  		"fogNear" : { type: "f", value: 1 },
  		"fogFar" : { type: "f", value: 2000 },
  		"fogColor" : { type: "c", value: new THREE$Color( 0xffffff ) }

  	},

  	shadowmap: {

  		"shadowMap": { type: "tv", value: [] },
  		"shadowMapSize": { type: "v2v", value: [] },

  		"shadowBias" : { type: "fv1", value: [] },
  		"shadowDarkness": { type: "fv1", value: [] },

  		"shadowMatrix" : { type: "m4v", value: [] }

  	}

  };


  var THREE$ShaderLib;



  /**
   * Webgl Shader Library for three.js
   *
   * @author alteredq / http://alteredqualia.com/
   * @author mrdoob / http://mrdoob.com/
   * @author mikael emtinger / http://gomo.se/
   */


  THREE$ShaderLib = {

  	'basic': {

  		uniforms: THREE$UniformsUtils.merge( [

  			THREE$UniformsLib[ "common" ],
  			THREE$UniformsLib[ "fog" ],
  			THREE$UniformsLib[ "shadowmap" ]

  		] ),

  		vertexShader: [

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "map_pars_vertex" ],
  			THREE$ShaderChunk[ "lightmap_pars_vertex" ],
  			THREE$ShaderChunk[ "envmap_pars_vertex" ],
  			THREE$ShaderChunk[ "color_pars_vertex" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "skinning_pars_vertex" ],
  			THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "map_vertex" ],
  				THREE$ShaderChunk[ "lightmap_vertex" ],
  				THREE$ShaderChunk[ "color_vertex" ],
  				THREE$ShaderChunk[ "skinbase_vertex" ],

  			"	#ifdef USE_ENVMAP",

  				THREE$ShaderChunk[ "morphnormal_vertex" ],
  				THREE$ShaderChunk[ "skinnormal_vertex" ],
  				THREE$ShaderChunk[ "defaultnormal_vertex" ],

  			"	#endif",

  				THREE$ShaderChunk[ "morphtarget_vertex" ],
  				THREE$ShaderChunk[ "skinning_vertex" ],
  				THREE$ShaderChunk[ "default_vertex" ],
  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  				THREE$ShaderChunk[ "worldpos_vertex" ],
  				THREE$ShaderChunk[ "envmap_vertex" ],
  				THREE$ShaderChunk[ "shadowmap_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"uniform vec3 diffuse;",
  			"uniform float opacity;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "color_pars_fragment" ],
  			THREE$ShaderChunk[ "map_pars_fragment" ],
  			THREE$ShaderChunk[ "alphamap_pars_fragment" ],
  			THREE$ShaderChunk[ "lightmap_pars_fragment" ],
  			THREE$ShaderChunk[ "envmap_pars_fragment" ],
  			THREE$ShaderChunk[ "fog_pars_fragment" ],
  			THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
  			THREE$ShaderChunk[ "specularmap_pars_fragment" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	vec3 outgoingLight = vec3( 0.0 );",	// outgoing light does not have an alpha, the surface does
  			"	vec4 diffuseColor = vec4( diffuse, opacity );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "map_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],
  				THREE$ShaderChunk[ "alphamap_fragment" ],
  				THREE$ShaderChunk[ "alphatest_fragment" ],
  				THREE$ShaderChunk[ "specularmap_fragment" ],

  			"	outgoingLight = diffuseColor.rgb;", // simple shader

  				THREE$ShaderChunk[ "lightmap_fragment" ],		// TODO: Light map on an otherwise unlit surface doesn't make sense.
  				THREE$ShaderChunk[ "envmap_fragment" ],
  				THREE$ShaderChunk[ "shadowmap_fragment" ],		// TODO: Shadows on an otherwise unlit surface doesn't make sense.

  				THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",	// TODO, this should be pre-multiplied to allow for bright highlights on very transparent objects

  			"}"

  		].join("\n")

  	},

  	'lambert': {

  		uniforms: THREE$UniformsUtils.merge( [

  			THREE$UniformsLib[ "common" ],
  			THREE$UniformsLib[ "fog" ],
  			THREE$UniformsLib[ "lights" ],
  			THREE$UniformsLib[ "shadowmap" ],

  			{
  				"emissive" : { type: "c", value: new THREE$Color( 0x000000 ) },
  				"wrapRGB"  : { type: "v3", value: new THREE$Vector3( 1, 1, 1 ) }
  			}

  		] ),

  		vertexShader: [

  			"#define LAMBERT",

  			"varying vec3 vLightFront;",

  			"#ifdef DOUBLE_SIDED",

  			"	varying vec3 vLightBack;",

  			"#endif",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "map_pars_vertex" ],
  			THREE$ShaderChunk[ "lightmap_pars_vertex" ],
  			THREE$ShaderChunk[ "envmap_pars_vertex" ],
  			THREE$ShaderChunk[ "lights_lambert_pars_vertex" ],
  			THREE$ShaderChunk[ "color_pars_vertex" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "skinning_pars_vertex" ],
  			THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "map_vertex" ],
  				THREE$ShaderChunk[ "lightmap_vertex" ],
  				THREE$ShaderChunk[ "color_vertex" ],

  				THREE$ShaderChunk[ "morphnormal_vertex" ],
  				THREE$ShaderChunk[ "skinbase_vertex" ],
  				THREE$ShaderChunk[ "skinnormal_vertex" ],
  				THREE$ShaderChunk[ "defaultnormal_vertex" ],

  				THREE$ShaderChunk[ "morphtarget_vertex" ],
  				THREE$ShaderChunk[ "skinning_vertex" ],
  				THREE$ShaderChunk[ "default_vertex" ],
  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  				THREE$ShaderChunk[ "worldpos_vertex" ],
  				THREE$ShaderChunk[ "envmap_vertex" ],
  				THREE$ShaderChunk[ "lights_lambert_vertex" ],
  				THREE$ShaderChunk[ "shadowmap_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"uniform vec3 diffuse;",
  			"uniform vec3 emissive;",
  			"uniform float opacity;",

  			"varying vec3 vLightFront;",

  			"#ifdef DOUBLE_SIDED",

  			"	varying vec3 vLightBack;",

  			"#endif",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "color_pars_fragment" ],
  			THREE$ShaderChunk[ "map_pars_fragment" ],
  			THREE$ShaderChunk[ "alphamap_pars_fragment" ],
  			THREE$ShaderChunk[ "lightmap_pars_fragment" ],
  			THREE$ShaderChunk[ "envmap_pars_fragment" ],
  			THREE$ShaderChunk[ "fog_pars_fragment" ],
  			THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
  			THREE$ShaderChunk[ "specularmap_pars_fragment" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	vec3 outgoingLight = vec3( 0.0 );",	// outgoing light does not have an alpha, the surface does
  			"	vec4 diffuseColor = vec4( diffuse, opacity );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "map_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],
  				THREE$ShaderChunk[ "alphamap_fragment" ],
  				THREE$ShaderChunk[ "alphatest_fragment" ],
  				THREE$ShaderChunk[ "specularmap_fragment" ],

  			"	#ifdef DOUBLE_SIDED",

  					//"float isFront = float( gl_FrontFacing );",
  					//"gl_FragColor.xyz *= isFront * vLightFront + ( 1.0 - isFront ) * vLightBack;",

  			"		if ( gl_FrontFacing )",
  			"			outgoingLight += diffuseColor.rgb * vLightFront + emissive;",
  			"		else",
  			"			outgoingLight += diffuseColor.rgb * vLightBack + emissive;",

  			"	#else",

  			"		outgoingLight += diffuseColor.rgb * vLightFront + emissive;",

  			"	#endif",

  				THREE$ShaderChunk[ "lightmap_fragment" ],
  				THREE$ShaderChunk[ "envmap_fragment" ],
  				THREE$ShaderChunk[ "shadowmap_fragment" ],

  				THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",	// TODO, this should be pre-multiplied to allow for bright highlights on very transparent objects

  			"}"

  		].join("\n")

  	},

  	'phong': {

  		uniforms: THREE$UniformsUtils.merge( [

  			THREE$UniformsLib[ "common" ],
  			THREE$UniformsLib[ "bump" ],
  			THREE$UniformsLib[ "normalmap" ],
  			THREE$UniformsLib[ "fog" ],
  			THREE$UniformsLib[ "lights" ],
  			THREE$UniformsLib[ "shadowmap" ],

  			{
  				"emissive" : { type: "c", value: new THREE$Color( 0x000000 ) },
  				"specular" : { type: "c", value: new THREE$Color( 0x111111 ) },
  				"shininess": { type: "f", value: 30 },
  				"wrapRGB"  : { type: "v3", value: new THREE$Vector3( 1, 1, 1 ) }
  			}

  		] ),

  		vertexShader: [

  			"#define PHONG",

  			"varying vec3 vViewPosition;",

  			"#ifndef FLAT_SHADED",

  			"	varying vec3 vNormal;",

  			"#endif",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "map_pars_vertex" ],
  			THREE$ShaderChunk[ "lightmap_pars_vertex" ],
  			THREE$ShaderChunk[ "envmap_pars_vertex" ],
  			THREE$ShaderChunk[ "lights_phong_pars_vertex" ],
  			THREE$ShaderChunk[ "color_pars_vertex" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "skinning_pars_vertex" ],
  			THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "map_vertex" ],
  				THREE$ShaderChunk[ "lightmap_vertex" ],
  				THREE$ShaderChunk[ "color_vertex" ],

  				THREE$ShaderChunk[ "morphnormal_vertex" ],
  				THREE$ShaderChunk[ "skinbase_vertex" ],
  				THREE$ShaderChunk[ "skinnormal_vertex" ],
  				THREE$ShaderChunk[ "defaultnormal_vertex" ],

  			"#ifndef FLAT_SHADED", // Normal computed with derivatives when FLAT_SHADED

  			"	vNormal = normalize( transformedNormal );",

  			"#endif",

  				THREE$ShaderChunk[ "morphtarget_vertex" ],
  				THREE$ShaderChunk[ "skinning_vertex" ],
  				THREE$ShaderChunk[ "default_vertex" ],
  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  			"	vViewPosition = -mvPosition.xyz;",

  				THREE$ShaderChunk[ "worldpos_vertex" ],
  				THREE$ShaderChunk[ "envmap_vertex" ],
  				THREE$ShaderChunk[ "lights_phong_vertex" ],
  				THREE$ShaderChunk[ "shadowmap_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"#define PHONG",

  			"uniform vec3 diffuse;",
  			"uniform vec3 emissive;",
  			"uniform vec3 specular;",
  			"uniform float shininess;",
  			"uniform float opacity;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "color_pars_fragment" ],
  			THREE$ShaderChunk[ "map_pars_fragment" ],
  			THREE$ShaderChunk[ "alphamap_pars_fragment" ],
  			THREE$ShaderChunk[ "lightmap_pars_fragment" ],
  			THREE$ShaderChunk[ "envmap_pars_fragment" ],
  			THREE$ShaderChunk[ "fog_pars_fragment" ],
  			THREE$ShaderChunk[ "lights_phong_pars_fragment" ],
  			THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
  			THREE$ShaderChunk[ "bumpmap_pars_fragment" ],
  			THREE$ShaderChunk[ "normalmap_pars_fragment" ],
  			THREE$ShaderChunk[ "specularmap_pars_fragment" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	vec3 outgoingLight = vec3( 0.0 );",	// outgoing light does not have an alpha, the surface does
  			"	vec4 diffuseColor = vec4( diffuse, opacity );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "map_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],
  				THREE$ShaderChunk[ "alphamap_fragment" ],
  				THREE$ShaderChunk[ "alphatest_fragment" ],
  				THREE$ShaderChunk[ "specularmap_fragment" ],

  				THREE$ShaderChunk[ "lights_phong_fragment" ],

  				THREE$ShaderChunk[ "lightmap_fragment" ],
  				THREE$ShaderChunk[ "envmap_fragment" ],
  				THREE$ShaderChunk[ "shadowmap_fragment" ],

  				THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",	// TODO, this should be pre-multiplied to allow for bright highlights on very transparent objects

  			"}"

  		].join("\n")

  	},

  	'particle_basic': {

  		uniforms: THREE$UniformsUtils.merge( [

  			THREE$UniformsLib[ "particle" ],
  			THREE$UniformsLib[ "shadowmap" ]

  		] ),

  		vertexShader: [

  			"uniform float size;",
  			"uniform float scale;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "color_pars_vertex" ],
  			THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "color_vertex" ],

  			"	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

  			"	#ifdef USE_SIZEATTENUATION",
  			"		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );",
  			"	#else",
  			"		gl_PointSize = size;",
  			"	#endif",

  			"	gl_Position = projectionMatrix * mvPosition;",

  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],
  				THREE$ShaderChunk[ "worldpos_vertex" ],
  				THREE$ShaderChunk[ "shadowmap_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"uniform vec3 psColor;",
  			"uniform float opacity;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "color_pars_fragment" ],
  			THREE$ShaderChunk[ "map_particle_pars_fragment" ],
  			THREE$ShaderChunk[ "fog_pars_fragment" ],
  			THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	vec3 outgoingLight = vec3( 0.0 );",	// outgoing light does not have an alpha, the surface does
  			"	vec4 diffuseColor = vec4( psColor, opacity );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "map_particle_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],
  				THREE$ShaderChunk[ "alphatest_fragment" ],

  			"	outgoingLight = diffuseColor.rgb;", // simple shader

  				THREE$ShaderChunk[ "shadowmap_fragment" ],
  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",	// TODO, this should be pre-multiplied to allow for bright highlights on very transparent objects

  			"}"

  		].join("\n")

  	},

  	'dashed': {

  		uniforms: THREE$UniformsUtils.merge( [

  			THREE$UniformsLib[ "common" ],
  			THREE$UniformsLib[ "fog" ],

  			{
  				"scale"    : { type: "f", value: 1 },
  				"dashSize" : { type: "f", value: 1 },
  				"totalSize": { type: "f", value: 2 }
  			}

  		] ),

  		vertexShader: [

  			"uniform float scale;",
  			"attribute float lineDistance;",

  			"varying float vLineDistance;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "color_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "color_vertex" ],

  			"	vLineDistance = scale * lineDistance;",

  			"	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
  			"	gl_Position = projectionMatrix * mvPosition;",

  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"uniform vec3 diffuse;",
  			"uniform float opacity;",

  			"uniform float dashSize;",
  			"uniform float totalSize;",

  			"varying float vLineDistance;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "color_pars_fragment" ],
  			THREE$ShaderChunk[ "fog_pars_fragment" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	if ( mod( vLineDistance, totalSize ) > dashSize ) {",

  			"		discard;",

  			"	}",

  			"	vec3 outgoingLight = vec3( 0.0 );",	// outgoing light does not have an alpha, the surface does
  			"	vec4 diffuseColor = vec4( diffuse, opacity );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],

  			"	outgoingLight = diffuseColor.rgb;", // simple shader

  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",	// TODO, this should be pre-multiplied to allow for bright highlights on very transparent objects

  			"}"

  		].join("\n")

  	},

  	'depth': {

  		uniforms: {

  			"mNear": { type: "f", value: 1.0 },
  			"mFar" : { type: "f", value: 2000.0 },
  			"opacity" : { type: "f", value: 1.0 }

  		},

  		vertexShader: [

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "morphtarget_vertex" ],
  				THREE$ShaderChunk[ "default_vertex" ],
  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"uniform float mNear;",
  			"uniform float mFar;",
  			"uniform float opacity;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],

  			"	#ifdef USE_LOGDEPTHBUF_EXT",

  			"		float depth = gl_FragDepthEXT / gl_FragCoord.w;",

  			"	#else",

  			"		float depth = gl_FragCoord.z / gl_FragCoord.w;",

  			"	#endif",

  			"	float color = 1.0 - smoothstep( mNear, mFar, depth );",
  			"	gl_FragColor = vec4( vec3( color ), opacity );",   // TODO, this should be pre-multiplied to allow for bright highlights on very transparent objects

  			"}"

  		].join("\n")

  	},

  	'normal': {

  		uniforms: {

  			"opacity" : { type: "f", value: 1.0 }

  		},

  		vertexShader: [

  			"varying vec3 vNormal;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  			"	vNormal = normalize( normalMatrix * normal );",

  				THREE$ShaderChunk[ "morphtarget_vertex" ],
  				THREE$ShaderChunk[ "default_vertex" ],
  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"uniform float opacity;",
  			"varying vec3 vNormal;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],

  			"}"

  		].join("\n")

  	},

  	/* -------------------------------------------------------------------------
  	//	Cube map shader
  	 ------------------------------------------------------------------------- */

  	'cube': {

  		uniforms: { "tCube": { type: "t", value: null },
  					"tFlip": { type: "f", value: - 1 } },

  		vertexShader: [

  			"varying vec3 vWorldPosition;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  			"	vWorldPosition = transformDirection( position, modelMatrix );",

  			"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"uniform samplerCube tCube;",
  			"uniform float tFlip;",

  			"varying vec3 vWorldPosition;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],

  			"}"

  		].join("\n")

  	},

  	/* -------------------------------------------------------------------------
  	//	Cube map shader
  	 ------------------------------------------------------------------------- */

  	'equirect': {

  		uniforms: { "tEquirect": { type: "t", value: null },
  					"tFlip": { type: "f", value: - 1 } },

  		vertexShader: [

  			"varying vec3 vWorldPosition;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  			"	vWorldPosition = transformDirection( position, modelMatrix );",

  			"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			"uniform sampler2D tEquirect;",
  			"uniform float tFlip;",

  			"varying vec3 vWorldPosition;",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  				// "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
  				"vec3 direction = normalize( vWorldPosition );",
  				"vec2 sampleUV;",
  				"sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );",
  				"sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;",
  				"gl_FragColor = texture2D( tEquirect, sampleUV );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],

  			"}"

  		].join("\n")

  	},

  	/* Depth encoding into RGBA texture
  	 *
  	 * based on SpiderGL shadow map example
  	 * http://spidergl.org/example.php?id=6
  	 *
  	 * originally from
  	 * http://www.gamedev.net/topic/442138-packing-a-float-into-a-a8r8g8b8-texture-shader/page__whichpage__1%25EF%25BF%25BD
  	 *
  	 * see also
  	 * http://aras-p.info/blog/2009/07/30/encoding-floats-to-rgba-the-final/
  	 */

  	'depthRGBA': {

  		uniforms: {},

  		vertexShader: [

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "skinning_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "skinbase_vertex" ],
  				THREE$ShaderChunk[ "morphtarget_vertex" ],
  				THREE$ShaderChunk[ "skinning_vertex" ],
  				THREE$ShaderChunk[ "default_vertex" ],
  				THREE$ShaderChunk[ "logdepthbuf_vertex" ],

  			"}"

  		].join("\n"),

  		fragmentShader: [

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"vec4 pack_depth( const in float depth ) {",

  			"	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );",
  			"	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );",
  			"	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", // "	vec4 res = fract( depth * bit_shift );",
  			"	res -= res.xxyz * bit_mask;",
  			"	return res;",

  			"}",

  			"void main() {",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],

  			"	#ifdef USE_LOGDEPTHBUF_EXT",

  			"		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );",

  			"	#else",

  			"		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );",

  			"	#endif",

  				//"gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z / gl_FragCoord.w );",
  				//"float z = ( ( gl_FragCoord.z / gl_FragCoord.w ) - 3.0 ) / ( 4000.0 - 3.0 );",
  				//"gl_FragData[ 0 ] = pack_depth( z );",
  				//"gl_FragData[ 0 ] = vec4( z, z, z, 1.0 );",

  			"}"

  		].join("\n")

  	}

  };



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$ImmediateRenderObject () {

  	THREE$Object3D.call( this );

  	this.render = function ( renderCallback ) {};

  }

  THREE$ImmediateRenderObject.prototype = Object.create( THREE$Object3D.prototype );
  THREE$ImmediateRenderObject.prototype.constructor = THREE$ImmediateRenderObject;



  /**
   * @author benaadams / https://twitter.com/ben_a_adams
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$DynamicBufferAttribute ( array, itemSize ) {

  	THREE$BufferAttribute.call( this, array, itemSize );

  	this.updateRange = { offset: 0, count: -1 };

  }

  THREE$DynamicBufferAttribute.prototype = Object.create( THREE$BufferAttribute.prototype );
  THREE$DynamicBufferAttribute.prototype.constructor = THREE$DynamicBufferAttribute;

  THREE$DynamicBufferAttribute.prototype.clone = function () {

  	return new THREE$DynamicBufferAttribute( new this.array.constructor( this.array ), this.itemSize );

  };



  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$LensFlare ( texture, size, distance, blending, color ) {

  	THREE$Object3D.call( this );

  	this.lensFlares = [];

  	this.positionScreen = new THREE$Vector3();
  	this.customUpdateCallback = undefined;

  	if ( texture !== undefined ) {

  		this.add( texture, size, distance, blending, color );

  	}

  }

  THREE$LensFlare.prototype = Object.create( THREE$Object3D.prototype );
  THREE$LensFlare.prototype.constructor = THREE$LensFlare;


  /*
   * Add: adds another flare
   */

  THREE$LensFlare.prototype.add = function ( texture, size, distance, blending, color, opacity ) {

  	if ( size === undefined ) size = - 1;
  	if ( distance === undefined ) distance = 0;
  	if ( opacity === undefined ) opacity = 1;
  	if ( color === undefined ) color = new THREE$Color( 0xffffff );
  	if ( blending === undefined ) blending = THREE$NormalBlending;

  	distance = Math.min( distance, Math.max( 0, distance ) );

  	this.lensFlares.push( {
  		texture: texture, 			// THREE.Texture
  		size: size, 				// size in pixels (-1 = use texture.width)
  		distance: distance, 		// distance (0-1) from light source (0=at light source)
  		x: 0, y: 0, z: 0,			// screen position (-1 => 1) z = 0 is ontop z = 1 is back
  		scale: 1, 					// scale
  		rotation: 1, 				// rotation
  		opacity: opacity,			// opacity
  		color: color,				// color
  		blending: blending			// blending
  	} );

  };


  /*
   * Update lens flares update positions on all flares based on the screen position
   * Set myLensFlare.customUpdateCallback to alter the flares in your project specific way.
   */

  THREE$LensFlare.prototype.updateLensFlares = function () {

  	var f, fl = this.lensFlares.length;
  	var flare;
  	var vecX = - this.positionScreen.x * 2;
  	var vecY = - this.positionScreen.y * 2;

  	for ( f = 0; f < fl; f ++ ) {

  		flare = this.lensFlares[ f ];

  		flare.x = this.positionScreen.x + vecX * flare.distance;
  		flare.y = this.positionScreen.y + vecY * flare.distance;

  		flare.wantedRotation = flare.x * Math.PI * 0.25;
  		flare.rotation += ( flare.wantedRotation - flare.rotation ) * 0.25;

  	}

  };




  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$Group () {

  	THREE$Object3D.call( this );

  	this.type = 'Group';

  }

  THREE$Group.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Group.prototype.constructor = THREE$Group;



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$Scene () {

  	THREE$Object3D.call( this );

  	this.type = 'Scene';

  	this.fog = null;
  	this.overrideMaterial = null;

  	this.autoUpdate = true; // checked by the renderer

  }

  THREE$Scene.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Scene.prototype.constructor = THREE$Scene;

  THREE$Scene.prototype.clone = function ( object ) {

  	if ( object === undefined ) object = new THREE$Scene();

  	THREE$Object3D.prototype.clone.call( this, object );

  	if ( this.fog !== null ) object.fog = this.fog.clone();
  	if ( this.overrideMaterial !== null ) object.overrideMaterial = this.overrideMaterial.clone();

  	object.autoUpdate = this.autoUpdate;
  	object.matrixAutoUpdate = this.matrixAutoUpdate;

  	return object;

  };



  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$LensFlarePlugin ( renderer, flares ) {

  	var gl = renderer.context;

  	var vertexBuffer, elementBuffer;
  	var program, attributes, uniforms;
  	var hasVertexTexture;

  	var tempTexture, occlusionTexture;

  	var init = function () {

  		var vertices = new Float32Array( [
  			-1, -1,  0, 0,
  			 1, -1,  1, 0,
  			 1,  1,  1, 1,
  			-1,  1,  0, 1
  		] );

  		var faces = new Uint16Array( [
  			0, 1, 2,
  			0, 2, 3
  		] );

  		// buffers

  		vertexBuffer     = gl.createBuffer();
  		elementBuffer    = gl.createBuffer();

  		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
  		gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );

  		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );
  		gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, faces, gl.STATIC_DRAW );

  		// textures

  		tempTexture      = gl.createTexture();
  		occlusionTexture = gl.createTexture();

  		gl.bindTexture( gl.TEXTURE_2D, tempTexture );
  		gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGB, 16, 16, 0, gl.RGB, gl.UNSIGNED_BYTE, null );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );

  		gl.bindTexture( gl.TEXTURE_2D, occlusionTexture );
  		gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, 16, 16, 0, gl.RGBA, gl.UNSIGNED_BYTE, null );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );

  		hasVertexTexture = gl.getParameter( gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS ) > 0;

  		var shader;

  		if ( hasVertexTexture ) {

  			shader = {

  				vertexShader: [

  					"uniform lowp int renderType;",

  					"uniform vec3 screenPosition;",
  					"uniform vec2 scale;",
  					"uniform float rotation;",

  					"uniform sampler2D occlusionMap;",

  					"attribute vec2 position;",
  					"attribute vec2 uv;",

  					"varying vec2 vUV;",
  					"varying float vVisibility;",

  					"void main() {",

  						"vUV = uv;",

  						"vec2 pos = position;",

  						"if( renderType == 2 ) {",

  							"vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );",
  							"visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );",
  							"visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );",
  							"visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );",
  							"visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );",
  							"visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );",
  							"visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );",
  							"visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );",
  							"visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );",

  							"vVisibility =        visibility.r / 9.0;",
  							"vVisibility *= 1.0 - visibility.g / 9.0;",
  							"vVisibility *=       visibility.b / 9.0;",
  							"vVisibility *= 1.0 - visibility.a / 9.0;",

  							"pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
  							"pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;",

  						"}",

  						"gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",

  					"}"

  				].join( "\n" ),

  				fragmentShader: [

  					"uniform lowp int renderType;",

  					"uniform sampler2D map;",
  					"uniform float opacity;",
  					"uniform vec3 color;",

  					"varying vec2 vUV;",
  					"varying float vVisibility;",

  					"void main() {",

  						// pink square

  						"if( renderType == 0 ) {",

  							"gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );",

  						// restore

  						"} else if( renderType == 1 ) {",

  							"gl_FragColor = texture2D( map, vUV );",

  						// flare

  						"} else {",

  							"vec4 texture = texture2D( map, vUV );",
  							"texture.a *= opacity * vVisibility;",
  							"gl_FragColor = texture;",
  							"gl_FragColor.rgb *= color;",

  						"}",

  					"}"

  				].join( "\n" )

  			};

  		} else {

  			shader = {

  				vertexShader: [

  					"uniform lowp int renderType;",

  					"uniform vec3 screenPosition;",
  					"uniform vec2 scale;",
  					"uniform float rotation;",

  					"attribute vec2 position;",
  					"attribute vec2 uv;",

  					"varying vec2 vUV;",

  					"void main() {",

  						"vUV = uv;",

  						"vec2 pos = position;",

  						"if( renderType == 2 ) {",

  							"pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
  							"pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;",

  						"}",

  						"gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",

  					"}"

  				].join( "\n" ),

  				fragmentShader: [

  					"precision mediump float;",

  					"uniform lowp int renderType;",

  					"uniform sampler2D map;",
  					"uniform sampler2D occlusionMap;",
  					"uniform float opacity;",
  					"uniform vec3 color;",

  					"varying vec2 vUV;",

  					"void main() {",

  						// pink square

  						"if( renderType == 0 ) {",

  							"gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );",

  						// restore

  						"} else if( renderType == 1 ) {",

  							"gl_FragColor = texture2D( map, vUV );",

  						// flare

  						"} else {",

  							"float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;",
  							"visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;",
  							"visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;",
  							"visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;",
  							"visibility = ( 1.0 - visibility / 4.0 );",

  							"vec4 texture = texture2D( map, vUV );",
  							"texture.a *= opacity * visibility;",
  							"gl_FragColor = texture;",
  							"gl_FragColor.rgb *= color;",

  						"}",

  					"}"

  				].join( "\n" )

  			};

  		}

  		program = createProgram( shader );

  		attributes = {
  			vertex: gl.getAttribLocation ( program, "position" ),
  			uv:     gl.getAttribLocation ( program, "uv" )
  		}

  		uniforms = {
  			renderType:     gl.getUniformLocation( program, "renderType" ),
  			map:            gl.getUniformLocation( program, "map" ),
  			occlusionMap:   gl.getUniformLocation( program, "occlusionMap" ),
  			opacity:        gl.getUniformLocation( program, "opacity" ),
  			color:          gl.getUniformLocation( program, "color" ),
  			scale:          gl.getUniformLocation( program, "scale" ),
  			rotation:       gl.getUniformLocation( program, "rotation" ),
  			screenPosition: gl.getUniformLocation( program, "screenPosition" )
  		};

  	};

  	/*
  	 * Render lens flares
  	 * Method: renders 16x16 0xff00ff-colored points scattered over the light source area,
  	 *         reads these back and calculates occlusion.
  	 */

  	this.render = function ( scene, camera, viewportWidth, viewportHeight ) {

  		if ( flares.length === 0 ) return;

  		var tempPosition = new THREE$Vector3();

  		var invAspect = viewportHeight / viewportWidth,
  			halfViewportWidth = viewportWidth * 0.5,
  			halfViewportHeight = viewportHeight * 0.5;

  		var size = 16 / viewportHeight,
  			scale = new THREE$Vector2( size * invAspect, size );

  		var screenPosition = new THREE$Vector3( 1, 1, 0 ),
  			screenPositionPixels = new THREE$Vector2( 1, 1 );

  		if ( program === undefined ) {

  			init();

  		}

  		gl.useProgram( program );

  		gl.enableVertexAttribArray( attributes.vertex );
  		gl.enableVertexAttribArray( attributes.uv );

  		// loop through all lens flares to update their occlusion and positions
  		// setup gl and common used attribs/unforms

  		gl.uniform1i( uniforms.occlusionMap, 0 );
  		gl.uniform1i( uniforms.map, 1 );

  		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
  		gl.vertexAttribPointer( attributes.vertex, 2, gl.FLOAT, false, 2 * 8, 0 );
  		gl.vertexAttribPointer( attributes.uv, 2, gl.FLOAT, false, 2 * 8, 8 );

  		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );

  		gl.disable( gl.CULL_FACE );
  		gl.depthMask( false );

  		for ( var i = 0, l = flares.length; i < l; i ++ ) {

  			size = 16 / viewportHeight;
  			scale.set( size * invAspect, size );

  			// calc object screen position

  			var flare = flares[ i ];

  			tempPosition.set( flare.matrixWorld.elements[12], flare.matrixWorld.elements[13], flare.matrixWorld.elements[14] );

  			tempPosition.applyMatrix4( camera.matrixWorldInverse );
  			tempPosition.applyProjection( camera.projectionMatrix );

  			// setup arrays for gl programs

  			screenPosition.copy( tempPosition )

  			screenPositionPixels.x = screenPosition.x * halfViewportWidth + halfViewportWidth;
  			screenPositionPixels.y = screenPosition.y * halfViewportHeight + halfViewportHeight;

  			// screen cull

  			if ( hasVertexTexture || (
  				screenPositionPixels.x > 0 &&
  				screenPositionPixels.x < viewportWidth &&
  				screenPositionPixels.y > 0 &&
  				screenPositionPixels.y < viewportHeight ) ) {

  				// save current RGB to temp texture

  				gl.activeTexture( gl.TEXTURE1 );
  				gl.bindTexture( gl.TEXTURE_2D, tempTexture );
  				gl.copyTexImage2D( gl.TEXTURE_2D, 0, gl.RGB, screenPositionPixels.x - 8, screenPositionPixels.y - 8, 16, 16, 0 );


  				// render pink quad

  				gl.uniform1i( uniforms.renderType, 0 );
  				gl.uniform2f( uniforms.scale, scale.x, scale.y );
  				gl.uniform3f( uniforms.screenPosition, screenPosition.x, screenPosition.y, screenPosition.z );

  				gl.disable( gl.BLEND );
  				gl.enable( gl.DEPTH_TEST );

  				gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );


  				// copy result to occlusionMap

  				gl.activeTexture( gl.TEXTURE0 );
  				gl.bindTexture( gl.TEXTURE_2D, occlusionTexture );
  				gl.copyTexImage2D( gl.TEXTURE_2D, 0, gl.RGBA, screenPositionPixels.x - 8, screenPositionPixels.y - 8, 16, 16, 0 );


  				// restore graphics

  				gl.uniform1i( uniforms.renderType, 1 );
  				gl.disable( gl.DEPTH_TEST );

  				gl.activeTexture( gl.TEXTURE1 );
  				gl.bindTexture( gl.TEXTURE_2D, tempTexture );
  				gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );


  				// update object positions

  				flare.positionScreen.copy( screenPosition )

  				if ( flare.customUpdateCallback ) {

  					flare.customUpdateCallback( flare );

  				} else {

  					flare.updateLensFlares();

  				}

  				// render flares

  				gl.uniform1i( uniforms.renderType, 2 );
  				gl.enable( gl.BLEND );

  				for ( var j = 0, jl = flare.lensFlares.length; j < jl; j ++ ) {

  					var sprite = flare.lensFlares[ j ];

  					if ( sprite.opacity > 0.001 && sprite.scale > 0.001 ) {

  						screenPosition.x = sprite.x;
  						screenPosition.y = sprite.y;
  						screenPosition.z = sprite.z;

  						size = sprite.size * sprite.scale / viewportHeight;

  						scale.x = size * invAspect;
  						scale.y = size;

  						gl.uniform3f( uniforms.screenPosition, screenPosition.x, screenPosition.y, screenPosition.z );
  						gl.uniform2f( uniforms.scale, scale.x, scale.y );
  						gl.uniform1f( uniforms.rotation, sprite.rotation );

  						gl.uniform1f( uniforms.opacity, sprite.opacity );
  						gl.uniform3f( uniforms.color, sprite.color.r, sprite.color.g, sprite.color.b );

  						renderer.state.setBlending( sprite.blending, sprite.blendEquation, sprite.blendSrc, sprite.blendDst );
  						renderer.setTexture( sprite.texture, 1 );

  						gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );

  					}

  				}

  			}

  		}

  		// restore gl

  		gl.enable( gl.CULL_FACE );
  		gl.enable( gl.DEPTH_TEST );
  		gl.depthMask( true );

  		renderer.resetGLState();

  	};

  	function createProgram ( shader ) {

  		var program = gl.createProgram();

  		var fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );
  		var vertexShader = gl.createShader( gl.VERTEX_SHADER );

  		var prefix = "precision " + renderer.getPrecision() + " float;\n";

  		gl.shaderSource( fragmentShader, prefix + shader.fragmentShader );
  		gl.shaderSource( vertexShader, prefix + shader.vertexShader );

  		gl.compileShader( fragmentShader );
  		gl.compileShader( vertexShader );

  		gl.attachShader( program, fragmentShader );
  		gl.attachShader( program, vertexShader );

  		gl.linkProgram( program );

  		return program;

  	}

  }


  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$SpritePlugin ( renderer, sprites ) {

  	var gl = renderer.context;

  	var vertexBuffer, elementBuffer;
  	var program, attributes, uniforms;

  	var texture;

  	// decompose matrixWorld

  	var spritePosition = new THREE$Vector3();
  	var spriteRotation = new THREE$Quaternion();
  	var spriteScale = new THREE$Vector3();

  	var init = function () {

  		var vertices = new Float32Array( [
  			- 0.5, - 0.5,  0, 0,
  			  0.5, - 0.5,  1, 0,
  			  0.5,   0.5,  1, 1,
  			- 0.5,   0.5,  0, 1
  		] );

  		var faces = new Uint16Array( [
  			0, 1, 2,
  			0, 2, 3
  		] );

  		vertexBuffer  = gl.createBuffer();
  		elementBuffer = gl.createBuffer();

  		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
  		gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );

  		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );
  		gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, faces, gl.STATIC_DRAW );

  		program = createProgram();

  		attributes = {
  			position:			gl.getAttribLocation ( program, 'position' ),
  			uv:					gl.getAttribLocation ( program, 'uv' )
  		};

  		uniforms = {
  			uvOffset:			gl.getUniformLocation( program, 'uvOffset' ),
  			uvScale:			gl.getUniformLocation( program, 'uvScale' ),

  			rotation:			gl.getUniformLocation( program, 'rotation' ),
  			scale:				gl.getUniformLocation( program, 'scale' ),

  			color:				gl.getUniformLocation( program, 'color' ),
  			map:				gl.getUniformLocation( program, 'map' ),
  			opacity:			gl.getUniformLocation( program, 'opacity' ),

  			modelViewMatrix: 	gl.getUniformLocation( program, 'modelViewMatrix' ),
  			projectionMatrix:	gl.getUniformLocation( program, 'projectionMatrix' ),

  			fogType:			gl.getUniformLocation( program, 'fogType' ),
  			fogDensity:			gl.getUniformLocation( program, 'fogDensity' ),
  			fogNear:			gl.getUniformLocation( program, 'fogNear' ),
  			fogFar:				gl.getUniformLocation( program, 'fogFar' ),
  			fogColor:			gl.getUniformLocation( program, 'fogColor' ),

  			alphaTest:			gl.getUniformLocation( program, 'alphaTest' )
  		};

  		var canvas = document.createElement( 'canvas' );
  		canvas.width = 8;
  		canvas.height = 8;

  		var context = canvas.getContext( '2d' );
  		context.fillStyle = 'white';
  		context.fillRect( 0, 0, 8, 8 );

  		texture = new THREE$Texture( canvas );
  		texture.needsUpdate = true;

  	};

  	this.render = function ( scene, camera ) {

  		if ( sprites.length === 0 ) return;

  		// setup gl

  		if ( program === undefined ) {

  			init();

  		}

  		gl.useProgram( program );

  		gl.enableVertexAttribArray( attributes.position );
  		gl.enableVertexAttribArray( attributes.uv );

  		gl.disable( gl.CULL_FACE );
  		gl.enable( gl.BLEND );

  		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
  		gl.vertexAttribPointer( attributes.position, 2, gl.FLOAT, false, 2 * 8, 0 );
  		gl.vertexAttribPointer( attributes.uv, 2, gl.FLOAT, false, 2 * 8, 8 );

  		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );

  		gl.uniformMatrix4fv( uniforms.projectionMatrix, false, camera.projectionMatrix.elements );

  		gl.activeTexture( gl.TEXTURE0 );
  		gl.uniform1i( uniforms.map, 0 );

  		var oldFogType = 0;
  		var sceneFogType = 0;
  		var fog = scene.fog;

  		if ( fog ) {

  			gl.uniform3f( uniforms.fogColor, fog.color.r, fog.color.g, fog.color.b );

  			if ( fog instanceof THREE$Fog ) {

  				gl.uniform1f( uniforms.fogNear, fog.near );
  				gl.uniform1f( uniforms.fogFar, fog.far );

  				gl.uniform1i( uniforms.fogType, 1 );
  				oldFogType = 1;
  				sceneFogType = 1;

  			} else if ( fog instanceof THREE$FogExp2 ) {

  				gl.uniform1f( uniforms.fogDensity, fog.density );

  				gl.uniform1i( uniforms.fogType, 2 );
  				oldFogType = 2;
  				sceneFogType = 2;

  			}

  		} else {

  			gl.uniform1i( uniforms.fogType, 0 );
  			oldFogType = 0;
  			sceneFogType = 0;

  		}


  		// update positions and sort

  		for ( var i = 0, l = sprites.length; i < l; i ++ ) {

  			var sprite = sprites[ i ];

  			sprite._modelViewMatrix.multiplyMatrices( camera.matrixWorldInverse, sprite.matrixWorld );
  			sprite.z = - sprite._modelViewMatrix.elements[ 14 ];

  		}

  		sprites.sort( painterSortStable );

  		// render all sprites

  		var scale = [];

  		for ( var i = 0, l = sprites.length; i < l; i ++ ) {

  			var sprite = sprites[ i ];
  			var material = sprite.material;

  			gl.uniform1f( uniforms.alphaTest, material.alphaTest );
  			gl.uniformMatrix4fv( uniforms.modelViewMatrix, false, sprite._modelViewMatrix.elements );

  			sprite.matrixWorld.decompose( spritePosition, spriteRotation, spriteScale );

  			scale[ 0 ] = spriteScale.x;
  			scale[ 1 ] = spriteScale.y;

  			var fogType = 0;

  			if ( scene.fog && material.fog ) {

  				fogType = sceneFogType;

  			}

  			if ( oldFogType !== fogType ) {

  				gl.uniform1i( uniforms.fogType, fogType );
  				oldFogType = fogType;

  			}

  			if ( material.map !== null ) {

  				gl.uniform2f( uniforms.uvOffset, material.map.offset.x, material.map.offset.y );
  				gl.uniform2f( uniforms.uvScale, material.map.repeat.x, material.map.repeat.y );

  			} else {

  				gl.uniform2f( uniforms.uvOffset, 0, 0 );
  				gl.uniform2f( uniforms.uvScale, 1, 1 );

  			}

  			gl.uniform1f( uniforms.opacity, material.opacity );
  			gl.uniform3f( uniforms.color, material.color.r, material.color.g, material.color.b );

  			gl.uniform1f( uniforms.rotation, material.rotation );
  			gl.uniform2fv( uniforms.scale, scale );

  			renderer.state.setBlending( material.blending, material.blendEquation, material.blendSrc, material.blendDst );
  			renderer.state.setDepthTest( material.depthTest );
  			renderer.state.setDepthWrite( material.depthWrite );

  			if ( material.map && material.map.image && material.map.image.width ) {

  				renderer.setTexture( material.map, 0 );

  			} else {

  				renderer.setTexture( texture, 0 );

  			}

  			gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );

  		}

  		// restore gl

  		gl.enable( gl.CULL_FACE );

  		renderer.resetGLState();

  	};

  	function createProgram () {

  		var program = gl.createProgram();

  		var vertexShader = gl.createShader( gl.VERTEX_SHADER );
  		var fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );

  		gl.shaderSource( vertexShader, [

  			'precision ' + renderer.getPrecision() + ' float;',

  			'uniform mat4 modelViewMatrix;',
  			'uniform mat4 projectionMatrix;',
  			'uniform float rotation;',
  			'uniform vec2 scale;',
  			'uniform vec2 uvOffset;',
  			'uniform vec2 uvScale;',

  			'attribute vec2 position;',
  			'attribute vec2 uv;',

  			'varying vec2 vUV;',

  			'void main() {',

  				'vUV = uvOffset + uv * uvScale;',

  				'vec2 alignedPosition = position * scale;',

  				'vec2 rotatedPosition;',
  				'rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;',
  				'rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;',

  				'vec4 finalPosition;',

  				'finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );',
  				'finalPosition.xy += rotatedPosition;',
  				'finalPosition = projectionMatrix * finalPosition;',

  				'gl_Position = finalPosition;',

  			'}'

  		].join( '\n' ) );

  		gl.shaderSource( fragmentShader, [

  			'precision ' + renderer.getPrecision() + ' float;',

  			'uniform vec3 color;',
  			'uniform sampler2D map;',
  			'uniform float opacity;',

  			'uniform int fogType;',
  			'uniform vec3 fogColor;',
  			'uniform float fogDensity;',
  			'uniform float fogNear;',
  			'uniform float fogFar;',
  			'uniform float alphaTest;',

  			'varying vec2 vUV;',

  			'void main() {',

  				'vec4 texture = texture2D( map, vUV );',

  				'if ( texture.a < alphaTest ) discard;',

  				'gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );',

  				'if ( fogType > 0 ) {',

  					'float depth = gl_FragCoord.z / gl_FragCoord.w;',
  					'float fogFactor = 0.0;',

  					'if ( fogType == 1 ) {',

  						'fogFactor = smoothstep( fogNear, fogFar, depth );',

  					'} else {',

  						'const float LOG2 = 1.442695;',
  						'float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );',
  						'fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );',

  					'}',

  					'gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );',

  				'}',

  			'}'

  		].join( '\n' ) );

  		gl.compileShader( vertexShader );
  		gl.compileShader( fragmentShader );

  		gl.attachShader( program, vertexShader );
  		gl.attachShader( program, fragmentShader );

  		gl.linkProgram( program );

  		return program;

  	};

  	function painterSortStable ( a, b ) {

  		if ( a.z !== b.z ) {

  			return b.z - a.z;

  		} else {

  			return b.id - a.id;

  		}

  	};

  }


  /**
   * @author alteredq / http://alteredqualia.com/
   *
   *	- shows frustum, line of sight and up of the camera
   *	- suitable for fast updates
   * 	- based on frustum visualization in lightgl.js shadowmap example
   *		http://evanw.github.com/lightgl.js/tests/shadowmap.html
   */

  function THREE$CameraHelper ( camera ) {

  	var geometry = new THREE$Geometry();
  	var material = new THREE$LineBasicMaterial( { color: 0xffffff, vertexColors: THREE$FaceColors } );

  	var pointMap = {};

  	// colors

  	var hexFrustum = 0xffaa00;
  	var hexCone = 0xff0000;
  	var hexUp = 0x00aaff;
  	var hexTarget = 0xffffff;
  	var hexCross = 0x333333;

  	// near

  	addLine( "n1", "n2", hexFrustum );
  	addLine( "n2", "n4", hexFrustum );
  	addLine( "n4", "n3", hexFrustum );
  	addLine( "n3", "n1", hexFrustum );

  	// far

  	addLine( "f1", "f2", hexFrustum );
  	addLine( "f2", "f4", hexFrustum );
  	addLine( "f4", "f3", hexFrustum );
  	addLine( "f3", "f1", hexFrustum );

  	// sides

  	addLine( "n1", "f1", hexFrustum );
  	addLine( "n2", "f2", hexFrustum );
  	addLine( "n3", "f3", hexFrustum );
  	addLine( "n4", "f4", hexFrustum );

  	// cone

  	addLine( "p", "n1", hexCone );
  	addLine( "p", "n2", hexCone );
  	addLine( "p", "n3", hexCone );
  	addLine( "p", "n4", hexCone );

  	// up

  	addLine( "u1", "u2", hexUp );
  	addLine( "u2", "u3", hexUp );
  	addLine( "u3", "u1", hexUp );

  	// target

  	addLine( "c", "t", hexTarget );
  	addLine( "p", "c", hexCross );

  	// cross

  	addLine( "cn1", "cn2", hexCross );
  	addLine( "cn3", "cn4", hexCross );

  	addLine( "cf1", "cf2", hexCross );
  	addLine( "cf3", "cf4", hexCross );

  	function addLine( a, b, hex ) {

  		addPoint( a, hex );
  		addPoint( b, hex );

  	}

  	function addPoint( id, hex ) {

  		geometry.vertices.push( new THREE$Vector3() );
  		geometry.colors.push( new THREE$Color( hex ) );

  		if ( pointMap[ id ] === undefined ) {

  			pointMap[ id ] = [];

  		}

  		pointMap[ id ].push( geometry.vertices.length - 1 );

  	}

  	THREE$Line.call( this, geometry, material, THREE$LinePieces );

  	this.camera = camera;
  	this.matrix = camera.matrixWorld;
  	this.matrixAutoUpdate = false;

  	this.pointMap = pointMap;

  	this.update();

  }

  THREE$CameraHelper.prototype = Object.create( THREE$Line.prototype );
  THREE$CameraHelper.prototype.constructor = THREE$CameraHelper;

  THREE$CameraHelper.prototype.update = function () {

  	var geometry, pointMap;
  	
  	var vector = new THREE$Vector3();
  	var camera = new THREE$Camera();

  	var setPoint = function ( point, x, y, z ) {

  		vector.set( x, y, z ).unproject( camera );

  		var points = pointMap[ point ];

  		if ( points !== undefined ) {

  			for ( var i = 0, il = points.length; i < il; i ++ ) {

  				geometry.vertices[ points[ i ] ].copy( vector );

  			}

  		}

  	};

  	return function () {

  		geometry = this.geometry;
  		pointMap = this.pointMap;

  		var w = 1, h = 1;

  		// we need just camera projection matrix
  		// world matrix must be identity

  		camera.projectionMatrix.copy( this.camera.projectionMatrix );

  		// center / target

  		setPoint( "c", 0, 0, - 1 );
  		setPoint( "t", 0, 0,  1 );

  		// near

  		setPoint( "n1", - w, - h, - 1 );
  		setPoint( "n2",   w, - h, - 1 );
  		setPoint( "n3", - w,   h, - 1 );
  		setPoint( "n4",   w,   h, - 1 );

  		// far

  		setPoint( "f1", - w, - h, 1 );
  		setPoint( "f2",   w, - h, 1 );
  		setPoint( "f3", - w,   h, 1 );
  		setPoint( "f4",   w,   h, 1 );

  		// up

  		setPoint( "u1",   w * 0.7, h * 1.1, - 1 );
  		setPoint( "u2", - w * 0.7, h * 1.1, - 1 );
  		setPoint( "u3",         0, h * 2,   - 1 );

  		// cross

  		setPoint( "cf1", - w,   0, 1 );
  		setPoint( "cf2",   w,   0, 1 );
  		setPoint( "cf3",   0, - h, 1 );
  		setPoint( "cf4",   0,   h, 1 );

  		setPoint( "cn1", - w,   0, - 1 );
  		setPoint( "cn2",   w,   0, - 1 );
  		setPoint( "cn3",   0, - h, - 1 );
  		setPoint( "cn4",   0,   h, - 1 );

  		geometry.verticesNeedUpdate = true;

  	};

  }();



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Gyroscope () {

  	THREE$Object3D.call( this );

  }

  THREE$Gyroscope.prototype = Object.create( THREE$Object3D.prototype );
  THREE$Gyroscope.prototype.constructor = THREE$Gyroscope;

  THREE$Gyroscope.prototype.updateMatrixWorld = ( function () {

  	var translationObject = new THREE$Vector3();
  	var quaternionObject = new THREE$Quaternion();
  	var scaleObject = new THREE$Vector3();

  	var translationWorld = new THREE$Vector3();
  	var quaternionWorld = new THREE$Quaternion();
  	var scaleWorld = new THREE$Vector3();

  	return function ( force ) {

  		this.matrixAutoUpdate && this.updateMatrix();

  		// update matrixWorld

  		if ( this.matrixWorldNeedsUpdate || force ) {

  			if ( this.parent ) {

  				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

  				this.matrixWorld.decompose( translationWorld, quaternionWorld, scaleWorld );
  				this.matrix.decompose( translationObject, quaternionObject, scaleObject );

  				this.matrixWorld.compose( translationWorld, quaternionObject, scaleWorld );


  			} else {

  				this.matrixWorld.copy( this.matrix );

  			}


  			this.matrixWorldNeedsUpdate = false;

  			force = true;

  		}

  		// update children

  		for ( var i = 0, l = this.children.length; i < l; i ++ ) {

  			this.children[ i ].updateMatrixWorld( force );

  		}

  	};
  	
  }() );



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   * @author bhouston / http://exocortex.com
   */

  function THREE$Frustum ( p0, p1, p2, p3, p4, p5 ) {

  	this.planes = [

  		( p0 !== undefined ) ? p0 : new THREE$Plane(),
  		( p1 !== undefined ) ? p1 : new THREE$Plane(),
  		( p2 !== undefined ) ? p2 : new THREE$Plane(),
  		( p3 !== undefined ) ? p3 : new THREE$Plane(),
  		( p4 !== undefined ) ? p4 : new THREE$Plane(),
  		( p5 !== undefined ) ? p5 : new THREE$Plane()

  	];

  }

  THREE$Frustum.prototype = {

  	constructor: THREE$Frustum,

  	set: function ( p0, p1, p2, p3, p4, p5 ) {

  		var planes = this.planes;

  		planes[ 0 ].copy( p0 );
  		planes[ 1 ].copy( p1 );
  		planes[ 2 ].copy( p2 );
  		planes[ 3 ].copy( p3 );
  		planes[ 4 ].copy( p4 );
  		planes[ 5 ].copy( p5 );

  		return this;

  	},

  	copy: function ( frustum ) {

  		var planes = this.planes;

  		for ( var i = 0; i < 6; i ++ ) {

  			planes[ i ].copy( frustum.planes[ i ] );

  		}

  		return this;

  	},

  	setFromMatrix: function ( m ) {

  		var planes = this.planes;
  		var me = m.elements;
  		var me0 = me[ 0 ], me1 = me[ 1 ], me2 = me[ 2 ], me3 = me[ 3 ];
  		var me4 = me[ 4 ], me5 = me[ 5 ], me6 = me[ 6 ], me7 = me[ 7 ];
  		var me8 = me[ 8 ], me9 = me[ 9 ], me10 = me[ 10 ], me11 = me[ 11 ];
  		var me12 = me[ 12 ], me13 = me[ 13 ], me14 = me[ 14 ], me15 = me[ 15 ];

  		planes[ 0 ].setComponents( me3 - me0, me7 - me4, me11 - me8, me15 - me12 ).normalize();
  		planes[ 1 ].setComponents( me3 + me0, me7 + me4, me11 + me8, me15 + me12 ).normalize();
  		planes[ 2 ].setComponents( me3 + me1, me7 + me5, me11 + me9, me15 + me13 ).normalize();
  		planes[ 3 ].setComponents( me3 - me1, me7 - me5, me11 - me9, me15 - me13 ).normalize();
  		planes[ 4 ].setComponents( me3 - me2, me7 - me6, me11 - me10, me15 - me14 ).normalize();
  		planes[ 5 ].setComponents( me3 + me2, me7 + me6, me11 + me10, me15 + me14 ).normalize();

  		return this;

  	},

  	intersectsObject: function () {

  		var sphere = new THREE$Sphere();

  		return function ( object ) {

  			var geometry = object.geometry;

  			if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

  			sphere.copy( geometry.boundingSphere );
  			sphere.applyMatrix4( object.matrixWorld );

  			return this.intersectsSphere( sphere );

  		};

  	}(),

  	intersectsSphere: function ( sphere ) {

  		var planes = this.planes;
  		var center = sphere.center;
  		var negRadius = - sphere.radius;

  		for ( var i = 0; i < 6; i ++ ) {

  			var distance = planes[ i ].distanceToPoint( center );

  			if ( distance < negRadius ) {

  				return false;

  			}

  		}

  		return true;

  	},

  	intersectsBox: function () {

  		var p1 = new THREE$Vector3(),
  			p2 = new THREE$Vector3();

  		return function ( box ) {

  			var planes = this.planes;

  			for ( var i = 0; i < 6 ; i ++ ) {

  				var plane = planes[ i ];

  				p1.x = plane.normal.x > 0 ? box.min.x : box.max.x;
  				p2.x = plane.normal.x > 0 ? box.max.x : box.min.x;
  				p1.y = plane.normal.y > 0 ? box.min.y : box.max.y;
  				p2.y = plane.normal.y > 0 ? box.max.y : box.min.y;
  				p1.z = plane.normal.z > 0 ? box.min.z : box.max.z;
  				p2.z = plane.normal.z > 0 ? box.max.z : box.min.z;

  				var d1 = plane.distanceToPoint( p1 );
  				var d2 = plane.distanceToPoint( p2 );

  				// if both outside plane, no intersection

  				if ( d1 < 0 && d2 < 0 ) {

  					return false;

  				}
  			}

  			return true;
  		};

  	}(),


  	containsPoint: function ( point ) {

  		var planes = this.planes;

  		for ( var i = 0; i < 6; i ++ ) {

  			if ( planes[ i ].distanceToPoint( point ) < 0 ) {

  				return false;

  			}

  		}

  		return true;

  	},

  	clone: function () {

  		return new THREE$Frustum().copy( this );

  	}

  };



  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$ShadowMapPlugin ( _renderer, _lights, _webglObjects, _webglObjectsImmediate ) {

  	var _gl = _renderer.context;

  	var _depthMaterial, _depthMaterialMorph, _depthMaterialSkin, _depthMaterialMorphSkin,

  	_frustum = new THREE$Frustum(),
  	_projScreenMatrix = new THREE$Matrix4(),

  	_min = new THREE$Vector3(),
  	_max = new THREE$Vector3(),

  	_matrixPosition = new THREE$Vector3(),

  	_renderList = [];

  	// init

  	var depthShader = THREE$ShaderLib[ "depthRGBA" ];
  	var depthUniforms = THREE$UniformsUtils.clone( depthShader.uniforms );

  	_depthMaterial = new THREE$ShaderMaterial( {
  		uniforms: depthUniforms,
  		vertexShader: depthShader.vertexShader,
  		fragmentShader: depthShader.fragmentShader
  	 } );

  	_depthMaterialMorph = new THREE$ShaderMaterial( {
  		uniforms: depthUniforms,
  		vertexShader: depthShader.vertexShader,
  		fragmentShader: depthShader.fragmentShader,
  		morphTargets: true
  	} );

  	_depthMaterialSkin = new THREE$ShaderMaterial( {
  		uniforms: depthUniforms,
  		vertexShader: depthShader.vertexShader,
  		fragmentShader: depthShader.fragmentShader,
  		skinning: true
  	} );

  	_depthMaterialMorphSkin = new THREE$ShaderMaterial( {
  		uniforms: depthUniforms,
  		vertexShader: depthShader.vertexShader,
  		fragmentShader: depthShader.fragmentShader,
  		morphTargets: true,
  		skinning: true
  	} );

  	_depthMaterial._shadowPass = true;
  	_depthMaterialMorph._shadowPass = true;
  	_depthMaterialSkin._shadowPass = true;
  	_depthMaterialMorphSkin._shadowPass = true;

  	this.render = function ( scene, camera ) {

  		if ( _renderer.shadowMapEnabled === false ) return;

  		var i, il, j, jl, n,

  		shadowMap, shadowMatrix, shadowCamera,
  		buffer, material,
  		webglObject, object, light,

  		lights = [],
  		k = 0,

  		fog = null;

  		// set GL state for depth map

  		_gl.clearColor( 1, 1, 1, 1 );
  		_gl.disable( _gl.BLEND );

  		_gl.enable( _gl.CULL_FACE );
  		_gl.frontFace( _gl.CCW );

  		if ( _renderer.shadowMapCullFace === THREE$CullFaceFront ) {

  			_gl.cullFace( _gl.FRONT );

  		} else {

  			_gl.cullFace( _gl.BACK );

  		}

  		_renderer.state.setDepthTest( true );

  		// preprocess lights
  		// 	- skip lights that are not casting shadows
  		//	- create virtual lights for cascaded shadow maps

  		for ( i = 0, il = _lights.length; i < il; i ++ ) {

  			light = _lights[ i ];

  			if ( ! light.castShadow ) continue;

  			if ( ( light instanceof THREE$DirectionalLight ) && light.shadowCascade ) {

  				for ( n = 0; n < light.shadowCascadeCount; n ++ ) {

  					var virtualLight;

  					if ( ! light.shadowCascadeArray[ n ] ) {

  						virtualLight = createVirtualLight( light, n );
  						virtualLight.originalCamera = camera;

  						var gyro = new THREE$Gyroscope();
  						gyro.position.copy( light.shadowCascadeOffset );

  						gyro.add( virtualLight );
  						gyro.add( virtualLight.target );

  						camera.add( gyro );

  						light.shadowCascadeArray[ n ] = virtualLight;

  						//console.log( "Created virtualLight", virtualLight );

  					} else {

  						virtualLight = light.shadowCascadeArray[ n ];

  					}

  					updateVirtualLight( light, n );

  					lights[ k ] = virtualLight;
  					k ++;

  				}

  			} else {

  				lights[ k ] = light;
  				k ++;

  			}

  		}

  		// render depth map

  		for ( i = 0, il = lights.length; i < il; i ++ ) {

  			light = lights[ i ];

  			if ( ! light.shadowMap ) {

  				var shadowFilter = THREE$LinearFilter;

  				if ( _renderer.shadowMapType === THREE$PCFSoftShadowMap ) {

  					shadowFilter = THREE$NearestFilter;

  				}

  				var pars = { minFilter: shadowFilter, magFilter: shadowFilter, format: THREE$RGBAFormat };

  				light.shadowMap = new THREE$WebGLRenderTarget( light.shadowMapWidth, light.shadowMapHeight, pars );
  				light.shadowMapSize = new THREE$Vector2( light.shadowMapWidth, light.shadowMapHeight );

  				light.shadowMatrix = new THREE$Matrix4();

  			}

  			if ( ! light.shadowCamera ) {

  				if ( light instanceof THREE$SpotLight ) {

  					light.shadowCamera = new THREE$PerspectiveCamera( light.shadowCameraFov, light.shadowMapWidth / light.shadowMapHeight, light.shadowCameraNear, light.shadowCameraFar );

  				} else if ( light instanceof THREE$DirectionalLight ) {

  					light.shadowCamera = new THREE$OrthographicCamera( light.shadowCameraLeft, light.shadowCameraRight, light.shadowCameraTop, light.shadowCameraBottom, light.shadowCameraNear, light.shadowCameraFar );

  				} else {

  					THREE$error( "THREE.ShadowMapPlugin: Unsupported light type for shadow", light );
  					continue;

  				}

  				scene.add( light.shadowCamera );

  				if ( scene.autoUpdate === true ) scene.updateMatrixWorld();

  			}

  			if ( light.shadowCameraVisible && ! light.cameraHelper ) {

  				light.cameraHelper = new THREE$CameraHelper( light.shadowCamera );
  				scene.add( light.cameraHelper );

  			}

  			if ( light.isVirtual && virtualLight.originalCamera == camera ) {

  				updateShadowCamera( camera, light );

  			}

  			shadowMap = light.shadowMap;
  			shadowMatrix = light.shadowMatrix;
  			shadowCamera = light.shadowCamera;

  			//

  			shadowCamera.position.setFromMatrixPosition( light.matrixWorld );
  			_matrixPosition.setFromMatrixPosition( light.target.matrixWorld );
  			shadowCamera.lookAt( _matrixPosition );
  			shadowCamera.updateMatrixWorld();

  			shadowCamera.matrixWorldInverse.getInverse( shadowCamera.matrixWorld );

  			//

  			if ( light.cameraHelper ) light.cameraHelper.visible = light.shadowCameraVisible;
  			if ( light.shadowCameraVisible ) light.cameraHelper.update();

  			// compute shadow matrix

  			shadowMatrix.set(
  				0.5, 0.0, 0.0, 0.5,
  				0.0, 0.5, 0.0, 0.5,
  				0.0, 0.0, 0.5, 0.5,
  				0.0, 0.0, 0.0, 1.0
  			);

  			shadowMatrix.multiply( shadowCamera.projectionMatrix );
  			shadowMatrix.multiply( shadowCamera.matrixWorldInverse );

  			// update camera matrices and frustum

  			_projScreenMatrix.multiplyMatrices( shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse );
  			_frustum.setFromMatrix( _projScreenMatrix );

  			// render shadow map

  			_renderer.setRenderTarget( shadowMap );
  			_renderer.clear();

  			// set object matrices & frustum culling

  			_renderList.length = 0;

  			projectObject( scene, scene, shadowCamera );


  			// render regular objects

  			var objectMaterial, useMorphing, useSkinning;

  			for ( j = 0, jl = _renderList.length; j < jl; j ++ ) {

  				webglObject = _renderList[ j ];

  				object = webglObject.object;
  				buffer = webglObject.buffer;

  				// culling is overriden globally for all objects
  				// while rendering depth map

  				// need to deal with MeshFaceMaterial somehow
  				// in that case just use the first of material.materials for now
  				// (proper solution would require to break objects by materials
  				//  similarly to regular rendering and then set corresponding
  				//  depth materials per each chunk instead of just once per object)

  				objectMaterial = getObjectMaterial( object );

  				useMorphing = object.geometry.morphTargets !== undefined && object.geometry.morphTargets.length > 0 && objectMaterial.morphTargets;
  				useSkinning = object instanceof THREE$SkinnedMesh && objectMaterial.skinning;

  				if ( object.customDepthMaterial ) {

  					material = object.customDepthMaterial;

  				} else if ( useSkinning ) {

  					material = useMorphing ? _depthMaterialMorphSkin : _depthMaterialSkin;

  				} else if ( useMorphing ) {

  					material = _depthMaterialMorph;

  				} else {

  					material = _depthMaterial;

  				}

  				_renderer.setMaterialFaces( objectMaterial );

  				if ( buffer instanceof THREE$BufferGeometry ) {

  					_renderer.renderBufferDirect( shadowCamera, _lights, fog, material, buffer, object );

  				} else {

  					_renderer.renderBuffer( shadowCamera, _lights, fog, material, buffer, object );

  				}

  			}

  			// set matrices and render immediate objects

  			for ( j = 0, jl = _webglObjectsImmediate.length; j < jl; j ++ ) {

  				webglObject = _webglObjectsImmediate[ j ];
  				object = webglObject.object;

  				if ( object.visible && object.castShadow ) {

  					object._modelViewMatrix.multiplyMatrices( shadowCamera.matrixWorldInverse, object.matrixWorld );

  					_renderer.renderImmediateObject( shadowCamera, _lights, fog, _depthMaterial, object );

  				}

  			}

  		}

  		// restore GL state

  		var clearColor = _renderer.getClearColor(),
  		clearAlpha = _renderer.getClearAlpha();

  		_gl.clearColor( clearColor.r, clearColor.g, clearColor.b, clearAlpha );
  		_gl.enable( _gl.BLEND );

  		if ( _renderer.shadowMapCullFace === THREE$CullFaceFront ) {

  			_gl.cullFace( _gl.BACK );

  		}

  		_renderer.resetGLState();

  	};

  	function projectObject( scene, object, shadowCamera ) {

  		if ( object.visible ) {

  			var webglObjects = _webglObjects[ object.id ];

  			if ( webglObjects && object.castShadow && (object.frustumCulled === false || _frustum.intersectsObject( object ) === true) ) {

  				for ( var i = 0, l = webglObjects.length; i < l; i ++ ) {

  					var webglObject = webglObjects[ i ];

  					object._modelViewMatrix.multiplyMatrices( shadowCamera.matrixWorldInverse, object.matrixWorld );
  					_renderList.push( webglObject );

  				}

  			}

  			for ( var i = 0, l = object.children.length; i < l; i ++ ) {

  				projectObject( scene, object.children[ i ], shadowCamera );

  			}

  		}

  	}

  	function createVirtualLight( light, cascade ) {

  		var virtualLight = new THREE$DirectionalLight();

  		virtualLight.isVirtual = true;

  		virtualLight.onlyShadow = true;
  		virtualLight.castShadow = true;

  		virtualLight.shadowCameraNear = light.shadowCameraNear;
  		virtualLight.shadowCameraFar = light.shadowCameraFar;

  		virtualLight.shadowCameraLeft = light.shadowCameraLeft;
  		virtualLight.shadowCameraRight = light.shadowCameraRight;
  		virtualLight.shadowCameraBottom = light.shadowCameraBottom;
  		virtualLight.shadowCameraTop = light.shadowCameraTop;

  		virtualLight.shadowCameraVisible = light.shadowCameraVisible;

  		virtualLight.shadowDarkness = light.shadowDarkness;

  		virtualLight.shadowBias = light.shadowCascadeBias[ cascade ];
  		virtualLight.shadowMapWidth = light.shadowCascadeWidth[ cascade ];
  		virtualLight.shadowMapHeight = light.shadowCascadeHeight[ cascade ];

  		virtualLight.pointsWorld = [];
  		virtualLight.pointsFrustum = [];

  		var pointsWorld = virtualLight.pointsWorld,
  			pointsFrustum = virtualLight.pointsFrustum;

  		for ( var i = 0; i < 8; i ++ ) {

  			pointsWorld[ i ] = new THREE$Vector3();
  			pointsFrustum[ i ] = new THREE$Vector3();

  		}

  		var nearZ = light.shadowCascadeNearZ[ cascade ];
  		var farZ = light.shadowCascadeFarZ[ cascade ];

  		pointsFrustum[ 0 ].set( - 1, - 1, nearZ );
  		pointsFrustum[ 1 ].set(  1, - 1, nearZ );
  		pointsFrustum[ 2 ].set( - 1,  1, nearZ );
  		pointsFrustum[ 3 ].set(  1,  1, nearZ );

  		pointsFrustum[ 4 ].set( - 1, - 1, farZ );
  		pointsFrustum[ 5 ].set(  1, - 1, farZ );
  		pointsFrustum[ 6 ].set( - 1,  1, farZ );
  		pointsFrustum[ 7 ].set(  1,  1, farZ );

  		return virtualLight;

  	}

  	// Synchronize virtual light with the original light

  	function updateVirtualLight( light, cascade ) {

  		var virtualLight = light.shadowCascadeArray[ cascade ];

  		virtualLight.position.copy( light.position );
  		virtualLight.target.position.copy( light.target.position );
  		virtualLight.lookAt( virtualLight.target );

  		virtualLight.shadowCameraVisible = light.shadowCameraVisible;
  		virtualLight.shadowDarkness = light.shadowDarkness;

  		virtualLight.shadowBias = light.shadowCascadeBias[ cascade ];

  		var nearZ = light.shadowCascadeNearZ[ cascade ];
  		var farZ = light.shadowCascadeFarZ[ cascade ];

  		var pointsFrustum = virtualLight.pointsFrustum;

  		pointsFrustum[ 0 ].z = nearZ;
  		pointsFrustum[ 1 ].z = nearZ;
  		pointsFrustum[ 2 ].z = nearZ;
  		pointsFrustum[ 3 ].z = nearZ;

  		pointsFrustum[ 4 ].z = farZ;
  		pointsFrustum[ 5 ].z = farZ;
  		pointsFrustum[ 6 ].z = farZ;
  		pointsFrustum[ 7 ].z = farZ;

  	}

  	// Fit shadow camera's ortho frustum to camera frustum

  	function updateShadowCamera( camera, light ) {

  		var shadowCamera = light.shadowCamera,
  			pointsFrustum = light.pointsFrustum,
  			pointsWorld = light.pointsWorld;

  		_min.set( Infinity, Infinity, Infinity );
  		_max.set( - Infinity, - Infinity, - Infinity );

  		for ( var i = 0; i < 8; i ++ ) {

  			var p = pointsWorld[ i ];

  			p.copy( pointsFrustum[ i ] );
  			p.unproject( camera );

  			p.applyMatrix4( shadowCamera.matrixWorldInverse );

  			if ( p.x < _min.x ) _min.x = p.x;
  			if ( p.x > _max.x ) _max.x = p.x;

  			if ( p.y < _min.y ) _min.y = p.y;
  			if ( p.y > _max.y ) _max.y = p.y;

  			if ( p.z < _min.z ) _min.z = p.z;
  			if ( p.z > _max.z ) _max.z = p.z;

  		}

  		shadowCamera.left = _min.x;
  		shadowCamera.right = _max.x;
  		shadowCamera.top = _max.y;
  		shadowCamera.bottom = _min.y;

  		// can't really fit near/far
  		//shadowCamera.near = _min.z;
  		//shadowCamera.far = _max.z;

  		shadowCamera.updateProjectionMatrix();

  	}

  	// For the moment just ignore objects that have multiple materials with different animation methods
  	// Only the first material will be taken into account for deciding which depth material to use for shadow maps

  	function getObjectMaterial( object ) {

  		return object.material instanceof THREE$MeshFaceMaterial
  			? object.material.materials[ 0 ]
  			: object.material;

  	};

  }


  /**
  * @author mrdoob / http://mrdoob.com/
  */

  function THREE$WebGLExtensions ( gl ) {

  	var extensions = {};

  	this.get = function ( name ) {

  		if ( extensions[ name ] !== undefined ) {

  			return extensions[ name ];

  		}

  		var extension;

  		switch ( name ) {

  			case 'EXT_texture_filter_anisotropic':
  				extension = gl.getExtension( 'EXT_texture_filter_anisotropic' ) || gl.getExtension( 'MOZ_EXT_texture_filter_anisotropic' ) || gl.getExtension( 'WEBKIT_EXT_texture_filter_anisotropic' );
  				break;

  			case 'WEBGL_compressed_texture_s3tc':
  				extension = gl.getExtension( 'WEBGL_compressed_texture_s3tc' ) || gl.getExtension( 'MOZ_WEBGL_compressed_texture_s3tc' ) || gl.getExtension( 'WEBKIT_WEBGL_compressed_texture_s3tc' );
  				break;

  			case 'WEBGL_compressed_texture_pvrtc':
  				extension = gl.getExtension( 'WEBGL_compressed_texture_pvrtc' ) || gl.getExtension( 'WEBKIT_WEBGL_compressed_texture_pvrtc' );
  				break;

  			default:
  				extension = gl.getExtension( name );

  		}

  		if ( extension === null ) {

  			THREE$warn( 'THREE.WebGLRenderer: ' + name + ' extension not supported.' );

  		}

  		extensions[ name ] = extension;

  		return extension;

  	};

  }


  /**
  * @author mrdoob / http://mrdoob.com/
  */

  function THREE$WebGLState ( gl, paramThreeToGL ) {

  	var newAttributes = new Uint8Array( 16 );
  	var enabledAttributes = new Uint8Array( 16 );

  	var currentBlending = null;
  	var currentBlendEquation = null;
  	var currentBlendSrc = null;
  	var currentBlendDst = null;
  	var currentBlendEquationAlpha = null;
  	var currentBlendSrcAlpha = null;
  	var currentBlendDstAlpha = null;

  	var currentDepthTest = null;
  	var currentDepthWrite = null;

  	var currentColorWrite = null;

  	var currentDoubleSided = null;
  	var currentFlipSided = null;

  	var currentLineWidth = null;

  	var currentPolygonOffset = null;
  	var currentPolygonOffsetFactor = null;
  	var currentPolygonOffsetUnits = null;

  	this.initAttributes = function () {

  		for ( var i = 0, l = newAttributes.length; i < l; i ++ ) {

  			newAttributes[ i ] = 0;

  		}

  	};

  	this.enableAttribute = function ( attribute ) {

  		newAttributes[ attribute ] = 1;

  		if ( enabledAttributes[ attribute ] === 0 ) {

  			gl.enableVertexAttribArray( attribute );
  			enabledAttributes[ attribute ] = 1;

  		}

  	};

  	this.disableUnusedAttributes = function () {

  		for ( var i = 0, l = enabledAttributes.length; i < l; i ++ ) {

  			if ( enabledAttributes[ i ] !== newAttributes[ i ] ) {

  				gl.disableVertexAttribArray( i );
  				enabledAttributes[ i ] = 0;

  			}

  		}

  	};

  	this.setBlending = function ( blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha ) {

  		if ( blending !== currentBlending ) {

  			if ( blending === THREE$NoBlending ) {

  				gl.disable( gl.BLEND );

  			} else if ( blending === THREE$AdditiveBlending ) {

  				gl.enable( gl.BLEND );
  				gl.blendEquation( gl.FUNC_ADD );
  				gl.blendFunc( gl.SRC_ALPHA, gl.ONE );

  			} else if ( blending === THREE$SubtractiveBlending ) {

  				// TODO: Find blendFuncSeparate() combination
  				gl.enable( gl.BLEND );
  				gl.blendEquation( gl.FUNC_ADD );
  				gl.blendFunc( gl.ZERO, gl.ONE_MINUS_SRC_COLOR );

  			} else if ( blending === THREE$MultiplyBlending ) {

  				// TODO: Find blendFuncSeparate() combination
  				gl.enable( gl.BLEND );
  				gl.blendEquation( gl.FUNC_ADD );
  				gl.blendFunc( gl.ZERO, gl.SRC_COLOR );

  			} else if ( blending === THREE$CustomBlending ) {

  				gl.enable( gl.BLEND );

  			} else {

  				gl.enable( gl.BLEND );
  				gl.blendEquationSeparate( gl.FUNC_ADD, gl.FUNC_ADD );
  				gl.blendFuncSeparate( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA );

  			}

  			currentBlending = blending;

  		}

  		if ( blending === THREE$CustomBlending ) {

  			blendEquationAlpha = blendEquationAlpha || blendEquation;
  			blendSrcAlpha = blendSrcAlpha || blendSrc;
  			blendDstAlpha = blendDstAlpha || blendDst;

  			if ( blendEquation !== currentBlendEquation || blendEquationAlpha !== currentBlendEquationAlpha ) {

  				gl.blendEquationSeparate( paramThreeToGL( blendEquation ), paramThreeToGL( blendEquationAlpha ) );

  				currentBlendEquation = blendEquation;
  				currentBlendEquationAlpha = blendEquationAlpha;

  			}

  			if ( blendSrc !== currentBlendSrc || blendDst !== currentBlendDst || blendSrcAlpha !== currentBlendSrcAlpha || blendDstAlpha !== currentBlendDstAlpha ) {

  				gl.blendFuncSeparate( paramThreeToGL( blendSrc ), paramThreeToGL( blendDst ), paramThreeToGL( blendSrcAlpha ), paramThreeToGL( blendDstAlpha ) );

  				currentBlendSrc = blendSrc;
  				currentBlendDst = blendDst;
  				currentBlendSrcAlpha = blendSrcAlpha;
  				currentBlendDstAlpha = blendDstAlpha;

  			}

  		} else {

  			currentBlendEquation = null;
  			currentBlendSrc = null;
  			currentBlendDst = null;
  			currentBlendEquationAlpha = null;
  			currentBlendSrcAlpha = null;
  			currentBlendDstAlpha = null;

  		}

  	};

  	this.setDepthTest = function ( depthTest ) {

  		if ( currentDepthTest !== depthTest ) {

  			if ( depthTest ) {

  				gl.enable( gl.DEPTH_TEST );

  			} else {

  				gl.disable( gl.DEPTH_TEST );

  			}

  			currentDepthTest = depthTest;

  		}

  	};

  	this.setDepthWrite = function ( depthWrite ) {

  		if ( currentDepthWrite !== depthWrite ) {

  			gl.depthMask( depthWrite );
  			currentDepthWrite = depthWrite;

  		}

  	};

  	this.setColorWrite = function ( colorWrite ) {

  		if ( currentColorWrite !== colorWrite ) {

  			gl.colorMask( colorWrite, colorWrite, colorWrite, colorWrite );
  			currentColorWrite = colorWrite;

  		}

  	};

  	this.setDoubleSided = function ( doubleSided ) {

  		if ( currentDoubleSided !== doubleSided ) {

  			if ( doubleSided ) {

  				gl.disable( gl.CULL_FACE );

  			} else {

  				gl.enable( gl.CULL_FACE );

  			}

  			currentDoubleSided = doubleSided;

  		}

  	};

  	this.setFlipSided = function ( flipSided ) {

  		if ( currentFlipSided !== flipSided ) {

  			if ( flipSided ) {

  				gl.frontFace( gl.CW );

  			} else {

  				gl.frontFace( gl.CCW );

  			}

  			currentFlipSided = flipSided;

  		}

  	};

  	this.setLineWidth = function ( width ) {

  		if ( width !== currentLineWidth ) {

  			gl.lineWidth( width );

  			currentLineWidth = width;

  		}

  	};

  	this.setPolygonOffset = function ( polygonoffset, factor, units ) {

  		if ( currentPolygonOffset !== polygonoffset ) {

  			if ( polygonoffset ) {

  				gl.enable( gl.POLYGON_OFFSET_FILL );

  			} else {

  				gl.disable( gl.POLYGON_OFFSET_FILL );

  			}

  			currentPolygonOffset = polygonoffset;

  		}

  		if ( polygonoffset && ( currentPolygonOffsetFactor !== factor || currentPolygonOffsetUnits !== units ) ) {

  			gl.polygonOffset( factor, units );

  			currentPolygonOffsetFactor = factor;
  			currentPolygonOffsetUnits = units;

  		}

  	};

  	this.reset = function () {

  		for ( var i = 0; i < enabledAttributes.length; i ++ ) {

  			enabledAttributes[ i ] = 0;

  		}

  		currentBlending = null;
  		currentDepthTest = null;
  		currentDepthWrite = null;
  		currentColorWrite = null;
  		currentDoubleSided = null;
  		currentFlipSided = null;

  	};

  }


  /**
   * @author supereggbert / http://www.paulbrunt.co.uk/
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   * @author szimek / https://github.com/szimek/
   */

  function THREE$WebGLRenderer ( parameters ) {

  	console.log( 'THREE.WebGLRenderer', "jsnext" );

  	parameters = parameters || {};

  	var _canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElement( 'canvas' ),
  	_context = parameters.context !== undefined ? parameters.context : null,

  	pixelRatio = 1,

  	_precision = parameters.precision !== undefined ? parameters.precision : 'highp',

  	_alpha = parameters.alpha !== undefined ? parameters.alpha : false,
  	_depth = parameters.depth !== undefined ? parameters.depth : true,
  	_stencil = parameters.stencil !== undefined ? parameters.stencil : true,
  	_antialias = parameters.antialias !== undefined ? parameters.antialias : false,
  	_premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true,
  	_preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false,
  	_logarithmicDepthBuffer = parameters.logarithmicDepthBuffer !== undefined ? parameters.logarithmicDepthBuffer : false,

  	_clearColor = new THREE$Color( 0x000000 ),
  	_clearAlpha = 0;

  	var lights = [];

  	var _webglObjects = {};
  	var _webglObjectsImmediate = [];

  	var opaqueObjects = [];
  	var transparentObjects = [];

  	var sprites = [];
  	var lensFlares = [];

  	// public properties

  	this.domElement = _canvas;
  	this.context = null;

  	// clearing

  	this.autoClear = true;
  	this.autoClearColor = true;
  	this.autoClearDepth = true;
  	this.autoClearStencil = true;

  	// scene graph

  	this.sortObjects = true;

  	// physically based shading

  	this.gammaFactor = 2.0;	// for backwards compatibility
  	this.gammaInput = false;
  	this.gammaOutput = false;

  	// shadow map

  	this.shadowMapEnabled = false;
  	this.shadowMapType = THREE$PCFShadowMap;
  	this.shadowMapCullFace = THREE$CullFaceFront;
  	this.shadowMapDebug = false;
  	this.shadowMapCascade = false;

  	// morphs

  	this.maxMorphTargets = 8;
  	this.maxMorphNormals = 4;

  	// flags

  	this.autoScaleCubemaps = true;

  	// info

  	this.info = {

  		memory: {

  			programs: 0,
  			geometries: 0,
  			textures: 0

  		},

  		render: {

  			calls: 0,
  			vertices: 0,
  			faces: 0,
  			points: 0

  		}

  	};

  	// internal properties

  	var _this = this,

  	_programs = [],

  	// internal state cache

  	_currentProgram = null,
  	_currentFramebuffer = null,
  	_currentMaterialId = - 1,
  	_currentGeometryProgram = '',
  	_currentCamera = null,

  	_usedTextureUnits = 0,

  	_viewportX = 0,
  	_viewportY = 0,
  	_viewportWidth = _canvas.width,
  	_viewportHeight = _canvas.height,
  	_currentWidth = 0,
  	_currentHeight = 0,

  	// frustum

  	_frustum = new THREE$Frustum(),

  	 // camera matrices cache

  	_projScreenMatrix = new THREE$Matrix4(),

  	_vector3 = new THREE$Vector3(),

  	// light arrays cache

  	_direction = new THREE$Vector3(),

  	_lightsNeedUpdate = true,

  	_lights = {

  		ambient: [ 0, 0, 0 ],
  		directional: { length: 0, colors:[], positions: [] },
  		point: { length: 0, colors: [], positions: [], distances: [], decays: [] },
  		spot: { length: 0, colors: [], positions: [], distances: [], directions: [], anglesCos: [], exponents: [], decays: [] },
  		hemi: { length: 0, skyColors: [], groundColors: [], positions: [] }

  	};

  	// initialize

  	var _gl;

  	try {

  		var attributes = {
  			alpha: _alpha,
  			depth: _depth,
  			stencil: _stencil,
  			antialias: _antialias,
  			premultipliedAlpha: _premultipliedAlpha,
  			preserveDrawingBuffer: _preserveDrawingBuffer
  		};

  		_gl = _context || _canvas.getContext( 'webgl', attributes ) || _canvas.getContext( 'experimental-webgl', attributes );

  		if ( _gl === null ) {

  			if ( _canvas.getContext( 'webgl') !== null ) {

  				throw 'Error creating WebGL context with your selected attributes.';

  			} else {

  				throw 'Error creating WebGL context.';

  			}

  		}

  		_canvas.addEventListener( 'webglcontextlost', function ( event ) {

  			event.preventDefault();

  			resetGLState();
  			setDefaultGLState();

  			_webglObjects = {};

  		}, false);

  	} catch ( error ) {

  		THREE$error( 'THREE.WebGLRenderer: ' + error );

  	}

  	var state = new THREE$WebGLState( _gl, paramThreeToGL );

  	if ( _gl.getShaderPrecisionFormat === undefined ) {

  		_gl.getShaderPrecisionFormat = function () {

  			return {
  				'rangeMin': 1,
  				'rangeMax': 1,
  				'precision': 1
  			};

  		}

  	}

  	var extensions = new THREE$WebGLExtensions( _gl );

  	extensions.get( 'OES_texture_float' );
  	extensions.get( 'OES_texture_float_linear' );
  	extensions.get( 'OES_texture_half_float' );
  	extensions.get( 'OES_texture_half_float_linear' );
  	extensions.get( 'OES_standard_derivatives' );

  	if ( _logarithmicDepthBuffer ) {

  		extensions.get( 'EXT_frag_depth' );

  	}

  	//

  	var glClearColor = function ( r, g, b, a ) {

  		if ( _premultipliedAlpha === true ) {

  			r *= a; g *= a; b *= a;

  		}

  		_gl.clearColor( r, g, b, a );

  	};

  	var setDefaultGLState = function () {

  		_gl.clearColor( 0, 0, 0, 1 );
  		_gl.clearDepth( 1 );
  		_gl.clearStencil( 0 );

  		_gl.enable( _gl.DEPTH_TEST );
  		_gl.depthFunc( _gl.LEQUAL );

  		_gl.frontFace( _gl.CCW );
  		_gl.cullFace( _gl.BACK );
  		_gl.enable( _gl.CULL_FACE );

  		_gl.enable( _gl.BLEND );
  		_gl.blendEquation( _gl.FUNC_ADD );
  		_gl.blendFunc( _gl.SRC_ALPHA, _gl.ONE_MINUS_SRC_ALPHA );

  		_gl.viewport( _viewportX, _viewportY, _viewportWidth, _viewportHeight );

  		glClearColor( _clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha );

  	};

  	var resetGLState = function () {

  		_currentProgram = null;
  		_currentCamera = null;

  		_currentGeometryProgram = '';
  		_currentMaterialId = - 1;

  		_lightsNeedUpdate = true;

  		state.reset();

  	};

  	setDefaultGLState();

  	this.context = _gl;
  	this.state = state;

  	// GPU capabilities

  	var _maxTextures = _gl.getParameter( _gl.MAX_TEXTURE_IMAGE_UNITS );
  	var _maxVertexTextures = _gl.getParameter( _gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS );
  	var _maxTextureSize = _gl.getParameter( _gl.MAX_TEXTURE_SIZE );
  	var _maxCubemapSize = _gl.getParameter( _gl.MAX_CUBE_MAP_TEXTURE_SIZE );

  	var _supportsVertexTextures = _maxVertexTextures > 0;
  	var _supportsBoneTextures = _supportsVertexTextures && extensions.get( 'OES_texture_float' );

  	//

  	var _vertexShaderPrecisionHighpFloat = _gl.getShaderPrecisionFormat( _gl.VERTEX_SHADER, _gl.HIGH_FLOAT );
  	var _vertexShaderPrecisionMediumpFloat = _gl.getShaderPrecisionFormat( _gl.VERTEX_SHADER, _gl.MEDIUM_FLOAT );

  	var _fragmentShaderPrecisionHighpFloat = _gl.getShaderPrecisionFormat( _gl.FRAGMENT_SHADER, _gl.HIGH_FLOAT );
  	var _fragmentShaderPrecisionMediumpFloat = _gl.getShaderPrecisionFormat( _gl.FRAGMENT_SHADER, _gl.MEDIUM_FLOAT );

  	var getCompressedTextureFormats = ( function () {

  		var array;

  		return function () {

  			if ( array !== undefined ) {

  				return array;

  			}

  			array = [];

  			if ( extensions.get( 'WEBGL_compressed_texture_pvrtc' ) || extensions.get( 'WEBGL_compressed_texture_s3tc' ) ) {

  				var formats = _gl.getParameter( _gl.COMPRESSED_TEXTURE_FORMATS );

  				for ( var i = 0; i < formats.length; i ++ ) {

  					array.push( formats[ i ] );

  				}

  			}

  			return array;

  		};

  	} )();

  	// clamp precision to maximum available

  	var highpAvailable = _vertexShaderPrecisionHighpFloat.precision > 0 && _fragmentShaderPrecisionHighpFloat.precision > 0;
  	var mediumpAvailable = _vertexShaderPrecisionMediumpFloat.precision > 0 && _fragmentShaderPrecisionMediumpFloat.precision > 0;

  	if ( _precision === 'highp' && ! highpAvailable ) {

  		if ( mediumpAvailable ) {

  			_precision = 'mediump';
  			THREE$warn( 'THREE.WebGLRenderer: highp not supported, using mediump.' );

  		} else {

  			_precision = 'lowp';
  			THREE$warn( 'THREE.WebGLRenderer: highp and mediump not supported, using lowp.' );

  		}

  	}

  	if ( _precision === 'mediump' && ! mediumpAvailable ) {

  		_precision = 'lowp';
  		THREE$warn( 'THREE.WebGLRenderer: mediump not supported, using lowp.' );

  	}

  	// Plugins

  	var shadowMapPlugin = new THREE$ShadowMapPlugin( this, lights, _webglObjects, _webglObjectsImmediate );

  	var spritePlugin = new THREE$SpritePlugin( this, sprites );
  	var lensFlarePlugin = new THREE$LensFlarePlugin( this, lensFlares );

  	// API

  	this.getContext = function () {

  		return _gl;

  	};

  	this.forceContextLoss = function () {

  		extensions.get( 'WEBGL_lose_context' ).loseContext();

  	};

  	this.supportsVertexTextures = function () {

  		return _supportsVertexTextures;

  	};

  	this.supportsFloatTextures = function () {

  		return extensions.get( 'OES_texture_float' );

  	};

  	this.supportsHalfFloatTextures = function () {

  		return extensions.get( 'OES_texture_half_float' );

  	};

  	this.supportsStandardDerivatives = function () {

  		return extensions.get( 'OES_standard_derivatives' );

  	};

  	this.supportsCompressedTextureS3TC = function () {

  		return extensions.get( 'WEBGL_compressed_texture_s3tc' );

  	};

  	this.supportsCompressedTexturePVRTC = function () {

  		return extensions.get( 'WEBGL_compressed_texture_pvrtc' );

  	};

  	this.supportsBlendMinMax = function () {

  		return extensions.get( 'EXT_blend_minmax' );

  	};

  	this.getMaxAnisotropy = ( function () {

  		var value;

  		return function () {

  			if ( value !== undefined ) {

  				return value;

  			}

  			var extension = extensions.get( 'EXT_texture_filter_anisotropic' );

  			value = extension !== null ? _gl.getParameter( extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT ) : 0;

  			return value;

  		}

  	} )();

  	this.getPrecision = function () {

  		return _precision;

  	};

  	this.getPixelRatio = function () {

  		return pixelRatio;

  	};

  	this.setPixelRatio = function ( value ) {

  		pixelRatio = value;

  	};

  	this.setSize = function ( width, height, updateStyle ) {

  		_canvas.width = width * pixelRatio;
  		_canvas.height = height * pixelRatio;

  		if ( updateStyle !== false ) {

  			_canvas.style.width = width + 'px';
  			_canvas.style.height = height + 'px';

  		}

  		this.setViewport( 0, 0, width, height );

  	};

  	this.setViewport = function ( x, y, width, height ) {

  		_viewportX = x * pixelRatio;
  		_viewportY = y * pixelRatio;

  		_viewportWidth = width * pixelRatio;
  		_viewportHeight = height * pixelRatio;

  		_gl.viewport( _viewportX, _viewportY, _viewportWidth, _viewportHeight );

  	};

  	this.setScissor = function ( x, y, width, height ) {

  		_gl.scissor(
  			x * pixelRatio,
  			y * pixelRatio,
  			width * pixelRatio,
  			height * pixelRatio
  		);

  	};

  	this.enableScissorTest = function ( enable ) {

  		enable ? _gl.enable( _gl.SCISSOR_TEST ) : _gl.disable( _gl.SCISSOR_TEST );

  	};

  	// Clearing

  	this.getClearColor = function () {

  		return _clearColor;

  	};

  	this.setClearColor = function ( color, alpha ) {

  		_clearColor.set( color );

  		_clearAlpha = alpha !== undefined ? alpha : 1;

  		glClearColor( _clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha );

  	};

  	this.getClearAlpha = function () {

  		return _clearAlpha;

  	};

  	this.setClearAlpha = function ( alpha ) {

  		_clearAlpha = alpha;

  		glClearColor( _clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha );

  	};

  	this.clear = function ( color, depth, stencil ) {

  		var bits = 0;

  		if ( color === undefined || color ) bits |= _gl.COLOR_BUFFER_BIT;
  		if ( depth === undefined || depth ) bits |= _gl.DEPTH_BUFFER_BIT;
  		if ( stencil === undefined || stencil ) bits |= _gl.STENCIL_BUFFER_BIT;

  		_gl.clear( bits );

  	};

  	this.clearColor = function () {

  		_gl.clear( _gl.COLOR_BUFFER_BIT );

  	};

  	this.clearDepth = function () {

  		_gl.clear( _gl.DEPTH_BUFFER_BIT );

  	};

  	this.clearStencil = function () {

  		_gl.clear( _gl.STENCIL_BUFFER_BIT );

  	};

  	this.clearTarget = function ( renderTarget, color, depth, stencil ) {

  		this.setRenderTarget( renderTarget );
  		this.clear( color, depth, stencil );

  	};

  	// Reset

  	this.resetGLState = resetGLState;

  	// Buffer allocation

  	function createParticleBuffers ( geometry ) {

  		geometry.__webglVertexBuffer = _gl.createBuffer();
  		geometry.__webglColorBuffer = _gl.createBuffer();

  		_this.info.memory.geometries ++;

  	};

  	function createLineBuffers ( geometry ) {

  		geometry.__webglVertexBuffer = _gl.createBuffer();
  		geometry.__webglColorBuffer = _gl.createBuffer();
  		geometry.__webglLineDistanceBuffer = _gl.createBuffer();

  		_this.info.memory.geometries ++;

  	};

  	function createMeshBuffers ( geometryGroup ) {

  		geometryGroup.__webglVertexBuffer = _gl.createBuffer();
  		geometryGroup.__webglNormalBuffer = _gl.createBuffer();
  		geometryGroup.__webglTangentBuffer = _gl.createBuffer();
  		geometryGroup.__webglColorBuffer = _gl.createBuffer();
  		geometryGroup.__webglUVBuffer = _gl.createBuffer();
  		geometryGroup.__webglUV2Buffer = _gl.createBuffer();

  		geometryGroup.__webglSkinIndicesBuffer = _gl.createBuffer();
  		geometryGroup.__webglSkinWeightsBuffer = _gl.createBuffer();

  		geometryGroup.__webglFaceBuffer = _gl.createBuffer();
  		geometryGroup.__webglLineBuffer = _gl.createBuffer();

  		var numMorphTargets = geometryGroup.numMorphTargets;

  		if ( numMorphTargets ) {

  			geometryGroup.__webglMorphTargetsBuffers = [];

  			for ( var m = 0, ml = numMorphTargets; m < ml; m ++ ) {

  				geometryGroup.__webglMorphTargetsBuffers.push( _gl.createBuffer() );

  			}

  		}

  		var numMorphNormals = geometryGroup.numMorphNormals;

  		if ( numMorphNormals ) {

  			geometryGroup.__webglMorphNormalsBuffers = [];

  			for ( var m = 0, ml = numMorphNormals; m < ml; m ++ ) {

  				geometryGroup.__webglMorphNormalsBuffers.push( _gl.createBuffer() );

  			}

  		}

  		_this.info.memory.geometries ++;

  	};

  	// Events

  	var onObjectRemoved = function ( event ) {

  		var object = event.target;

  		object.traverse( function ( child ) {

  			child.removeEventListener( 'remove', onObjectRemoved );

  			removeObject( child );

  		} );

  	};

  	var onGeometryDispose = function ( event ) {

  		var geometry = event.target;

  		geometry.removeEventListener( 'dispose', onGeometryDispose );

  		deallocateGeometry( geometry );

  	};

  	var onTextureDispose = function ( event ) {

  		var texture = event.target;

  		texture.removeEventListener( 'dispose', onTextureDispose );

  		deallocateTexture( texture );

  		_this.info.memory.textures --;


  	};

  	var onRenderTargetDispose = function ( event ) {

  		var renderTarget = event.target;

  		renderTarget.removeEventListener( 'dispose', onRenderTargetDispose );

  		deallocateRenderTarget( renderTarget );

  		_this.info.memory.textures --;

  	};

  	var onMaterialDispose = function ( event ) {

  		var material = event.target;

  		material.removeEventListener( 'dispose', onMaterialDispose );

  		deallocateMaterial( material );

  	};

  	// Buffer deallocation

  	var deleteBuffers = function ( geometry ) {

  		var buffers = [
  			'__webglVertexBuffer',
  			'__webglNormalBuffer',
  			'__webglTangentBuffer',
  			'__webglColorBuffer',
  			'__webglUVBuffer',
  			'__webglUV2Buffer',

  			'__webglSkinIndicesBuffer',
  			'__webglSkinWeightsBuffer',

  			'__webglFaceBuffer',
  			'__webglLineBuffer',

  			'__webglLineDistanceBuffer'
  		];

  		for ( var i = 0, l = buffers.length; i < l; i ++ ) {

  			var name = buffers[ i ];

  			if ( geometry[ name ] !== undefined ) {

  				_gl.deleteBuffer( geometry[ name ] );

  				delete geometry[ name ];

  			}

  		}

  		// custom attributes

  		if ( geometry.__webglCustomAttributesList !== undefined ) {

  			for ( var name in geometry.__webglCustomAttributesList ) {

  				_gl.deleteBuffer( geometry.__webglCustomAttributesList[ name ].buffer );

  			}

  			delete geometry.__webglCustomAttributesList;

  		}

  		_this.info.memory.geometries --;

  	};

  	var deallocateGeometry = function ( geometry ) {

  		delete geometry.__webglInit;

  		if ( geometry instanceof THREE$BufferGeometry ) {

  			for ( var name in geometry.attributes ) {

  				var attribute = geometry.attributes[ name ];

  				if ( attribute.buffer !== undefined ) {

  					_gl.deleteBuffer( attribute.buffer );

  					delete attribute.buffer;

  				}

  			}

  			_this.info.memory.geometries --;

  		} else {

  			var geometryGroupsList = geometryGroups[ geometry.id ];

  			if ( geometryGroupsList !== undefined ) {

  				for ( var i = 0, l = geometryGroupsList.length; i < l; i ++ ) {

  					var geometryGroup = geometryGroupsList[ i ];

  					if ( geometryGroup.numMorphTargets !== undefined ) {

  						for ( var m = 0, ml = geometryGroup.numMorphTargets; m < ml; m ++ ) {

  							_gl.deleteBuffer( geometryGroup.__webglMorphTargetsBuffers[ m ] );

  						}

  						delete geometryGroup.__webglMorphTargetsBuffers;

  					}

  					if ( geometryGroup.numMorphNormals !== undefined ) {

  						for ( var m = 0, ml = geometryGroup.numMorphNormals; m < ml; m ++ ) {

  							_gl.deleteBuffer( geometryGroup.__webglMorphNormalsBuffers[ m ] );

  						}

  						delete geometryGroup.__webglMorphNormalsBuffers;

  					}

  					deleteBuffers( geometryGroup );

  				}

  				delete geometryGroups[ geometry.id ];

  			} else {

  				deleteBuffers( geometry );

  			}

  		}

  		// TOFIX: Workaround for deleted geometry being currently bound

  		_currentGeometryProgram = '';

  	};

  	var deallocateTexture = function ( texture ) {

  		if ( texture.image && texture.image.__webglTextureCube ) {

  			// cube texture

  			_gl.deleteTexture( texture.image.__webglTextureCube );

  			delete texture.image.__webglTextureCube;

  		} else {

  			// 2D texture

  			if ( texture.__webglInit === undefined ) return;

  			_gl.deleteTexture( texture.__webglTexture );

  			delete texture.__webglTexture;
  			delete texture.__webglInit;

  		}

  	};

  	var deallocateRenderTarget = function ( renderTarget ) {

  		if ( ! renderTarget || renderTarget.__webglTexture === undefined ) return;

  		_gl.deleteTexture( renderTarget.__webglTexture );

  		delete renderTarget.__webglTexture;

  		if ( renderTarget instanceof THREE$WebGLRenderTargetCube ) {

  			for ( var i = 0; i < 6; i ++ ) {

  				_gl.deleteFramebuffer( renderTarget.__webglFramebuffer[ i ] );
  				_gl.deleteRenderbuffer( renderTarget.__webglRenderbuffer[ i ] );

  			}

  		} else {

  			_gl.deleteFramebuffer( renderTarget.__webglFramebuffer );
  			_gl.deleteRenderbuffer( renderTarget.__webglRenderbuffer );

  		}

  		delete renderTarget.__webglFramebuffer;
  		delete renderTarget.__webglRenderbuffer;

  	};

  	var deallocateMaterial = function ( material ) {

  		var program = material.program.program;

  		if ( program === undefined ) return;

  		material.program = undefined;

  		// only deallocate GL program if this was the last use of shared program
  		// assumed there is only single copy of any program in the _programs list
  		// (that's how it's constructed)

  		var i, il, programInfo;
  		var deleteProgram = false;

  		for ( i = 0, il = _programs.length; i < il; i ++ ) {

  			programInfo = _programs[ i ];

  			if ( programInfo.program === program ) {

  				programInfo.usedTimes --;

  				if ( programInfo.usedTimes === 0 ) {

  					deleteProgram = true;

  				}

  				break;

  			}

  		}

  		if ( deleteProgram === true ) {

  			// avoid using array.splice, this is costlier than creating new array from scratch

  			var newPrograms = [];

  			for ( i = 0, il = _programs.length; i < il; i ++ ) {

  				programInfo = _programs[ i ];

  				if ( programInfo.program !== program ) {

  					newPrograms.push( programInfo );

  				}

  			}

  			_programs = newPrograms;

  			_gl.deleteProgram( program );

  			_this.info.memory.programs --;

  		}

  	};

  	// Buffer initialization

  	function initCustomAttributes ( object ) {

  		var geometry = object.geometry;
  		var material = object.material;

  		var nvertices = geometry.vertices.length;

  		if ( material.attributes ) {

  			if ( geometry.__webglCustomAttributesList === undefined ) {

  				geometry.__webglCustomAttributesList = [];

  			}

  			for ( var name in material.attributes ) {

  				var attribute = material.attributes[ name ];

  				if ( ! attribute.__webglInitialized || attribute.createUniqueBuffers ) {

  					attribute.__webglInitialized = true;

  					var size = 1;   // "f" and "i"

  					if ( attribute.type === 'v2' ) size = 2;
  					else if ( attribute.type === 'v3' ) size = 3;
  					else if ( attribute.type === 'v4' ) size = 4;
  					else if ( attribute.type === 'c'  ) size = 3;

  					attribute.size = size;

  					attribute.array = new Float32Array( nvertices * size );

  					attribute.buffer = _gl.createBuffer();
  					attribute.buffer.belongsToAttribute = name;

  					attribute.needsUpdate = true;

  				}

  				geometry.__webglCustomAttributesList.push( attribute );

  			}

  		}

  	};

  	function initParticleBuffers ( geometry, object ) {

  		var nvertices = geometry.vertices.length;

  		geometry.__vertexArray = new Float32Array( nvertices * 3 );
  		geometry.__colorArray = new Float32Array( nvertices * 3 );

  		geometry.__webglParticleCount = nvertices;

  		initCustomAttributes( object );

  	};

  	function initLineBuffers ( geometry, object ) {

  		var nvertices = geometry.vertices.length;

  		geometry.__vertexArray = new Float32Array( nvertices * 3 );
  		geometry.__colorArray = new Float32Array( nvertices * 3 );
  		geometry.__lineDistanceArray = new Float32Array( nvertices * 1 );

  		geometry.__webglLineCount = nvertices;

  		initCustomAttributes( object );

  	};

  	function initMeshBuffers ( geometryGroup, object ) {

  		var geometry = object.geometry,
  			faces3 = geometryGroup.faces3,

  			nvertices = faces3.length * 3,
  			ntris     = faces3.length * 1,
  			nlines    = faces3.length * 3,

  			material = getBufferMaterial( object, geometryGroup );

  		geometryGroup.__vertexArray = new Float32Array( nvertices * 3 );
  		geometryGroup.__normalArray = new Float32Array( nvertices * 3 );
  		geometryGroup.__colorArray = new Float32Array( nvertices * 3 );
  		geometryGroup.__uvArray = new Float32Array( nvertices * 2 );

  		if ( geometry.faceVertexUvs.length > 1 ) {

  			geometryGroup.__uv2Array = new Float32Array( nvertices * 2 );

  		}

  		if ( geometry.hasTangents ) {

  			geometryGroup.__tangentArray = new Float32Array( nvertices * 4 );

  		}

  		if ( object.geometry.skinWeights.length && object.geometry.skinIndices.length ) {

  			geometryGroup.__skinIndexArray = new Float32Array( nvertices * 4 );
  			geometryGroup.__skinWeightArray = new Float32Array( nvertices * 4 );

  		}

  		var UintArray = extensions.get( 'OES_element_index_uint' ) !== null && ntris > 21845 ? Uint32Array : Uint16Array; // 65535 / 3

  		geometryGroup.__typeArray = UintArray;
  		geometryGroup.__faceArray = new UintArray( ntris * 3 );
  		geometryGroup.__lineArray = new UintArray( nlines * 2 );

  		var numMorphTargets = geometryGroup.numMorphTargets;

  		if ( numMorphTargets ) {

  			geometryGroup.__morphTargetsArrays = [];

  			for ( var m = 0, ml = numMorphTargets; m < ml; m ++ ) {

  				geometryGroup.__morphTargetsArrays.push( new Float32Array( nvertices * 3 ) );

  			}

  		}

  		var numMorphNormals = geometryGroup.numMorphNormals;

  		if ( numMorphNormals ) {

  			geometryGroup.__morphNormalsArrays = [];

  			for ( var m = 0, ml = numMorphNormals; m < ml; m ++ ) {

  				geometryGroup.__morphNormalsArrays.push( new Float32Array( nvertices * 3 ) );

  			}

  		}

  		geometryGroup.__webglFaceCount = ntris * 3;
  		geometryGroup.__webglLineCount = nlines * 2;


  		// custom attributes

  		if ( material.attributes ) {

  			if ( geometryGroup.__webglCustomAttributesList === undefined ) {

  				geometryGroup.__webglCustomAttributesList = [];

  			}

  			for ( var name in material.attributes ) {

  				// Do a shallow copy of the attribute object so different geometryGroup chunks use different
  				// attribute buffers which are correctly indexed in the setMeshBuffers function

  				var originalAttribute = material.attributes[ name ];

  				var attribute = {};

  				for ( var property in originalAttribute ) {

  					attribute[ property ] = originalAttribute[ property ];

  				}

  				if ( ! attribute.__webglInitialized || attribute.createUniqueBuffers ) {

  					attribute.__webglInitialized = true;

  					var size = 1;   // "f" and "i"

  					if ( attribute.type === 'v2' ) size = 2;
  					else if ( attribute.type === 'v3' ) size = 3;
  					else if ( attribute.type === 'v4' ) size = 4;
  					else if ( attribute.type === 'c'  ) size = 3;

  					attribute.size = size;

  					attribute.array = new Float32Array( nvertices * size );

  					attribute.buffer = _gl.createBuffer();
  					attribute.buffer.belongsToAttribute = name;

  					originalAttribute.needsUpdate = true;
  					attribute.__original = originalAttribute;

  				}

  				geometryGroup.__webglCustomAttributesList.push( attribute );

  			}

  		}

  		geometryGroup.__inittedArrays = true;

  	};

  	function getBufferMaterial( object, geometryGroup ) {

  		return object.material instanceof THREE$MeshFaceMaterial
  			 ? object.material.materials[ geometryGroup.materialIndex ]
  			 : object.material;

  	}

  	function materialNeedsFaceNormals ( material ) {

  		return material instanceof THREE$MeshPhongMaterial === false && material.shading === THREE$FlatShading;

  	}

  	// Buffer setting

  	function setParticleBuffers ( geometry, hint, object ) {

  		var v, c, vertex, offset, color,

  		vertices = geometry.vertices,
  		vl = vertices.length,

  		colors = geometry.colors,
  		cl = colors.length,

  		vertexArray = geometry.__vertexArray,
  		colorArray = geometry.__colorArray,

  		dirtyVertices = geometry.verticesNeedUpdate,
  		dirtyColors = geometry.colorsNeedUpdate,

  		customAttributes = geometry.__webglCustomAttributesList,
  		i, il,
  		ca, cal, value,
  		customAttribute;

  		if ( dirtyVertices ) {

  			for ( v = 0; v < vl; v ++ ) {

  				vertex = vertices[ v ];

  				offset = v * 3;

  				vertexArray[ offset ]     = vertex.x;
  				vertexArray[ offset + 1 ] = vertex.y;
  				vertexArray[ offset + 2 ] = vertex.z;

  			}

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometry.__webglVertexBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, vertexArray, hint );

  		}

  		if ( dirtyColors ) {

  			for ( c = 0; c < cl; c ++ ) {

  				color = colors[ c ];

  				offset = c * 3;

  				colorArray[ offset ]     = color.r;
  				colorArray[ offset + 1 ] = color.g;
  				colorArray[ offset + 2 ] = color.b;

  			}

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometry.__webglColorBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, colorArray, hint );

  		}

  		if ( customAttributes ) {

  			for ( i = 0, il = customAttributes.length; i < il; i ++ ) {

  				customAttribute = customAttributes[ i ];

  				if ( customAttribute.needsUpdate && ( customAttribute.boundTo === undefined ||  customAttribute.boundTo === 'vertices' ) ) {

  					cal = customAttribute.value.length;

  					offset = 0;

  					if ( customAttribute.size === 1 ) {

  						for ( ca = 0; ca < cal; ca ++ ) {

  							customAttribute.array[ ca ] = customAttribute.value[ ca ];

  						}

  					} else if ( customAttribute.size === 2 ) {

  						for ( ca = 0; ca < cal; ca ++ ) {

  							value = customAttribute.value[ ca ];

  							customAttribute.array[ offset ]   = value.x;
  							customAttribute.array[ offset + 1 ] = value.y;

  							offset += 2;

  						}

  					} else if ( customAttribute.size === 3 ) {

  						if ( customAttribute.type === 'c' ) {

  							for ( ca = 0; ca < cal; ca ++ ) {

  								value = customAttribute.value[ ca ];

  								customAttribute.array[ offset ]   = value.r;
  								customAttribute.array[ offset + 1 ] = value.g;
  								customAttribute.array[ offset + 2 ] = value.b;

  								offset += 3;

  							}

  						} else {

  							for ( ca = 0; ca < cal; ca ++ ) {

  								value = customAttribute.value[ ca ];

  								customAttribute.array[ offset ]   = value.x;
  								customAttribute.array[ offset + 1 ] = value.y;
  								customAttribute.array[ offset + 2 ] = value.z;

  								offset += 3;

  							}

  						}

  					} else if ( customAttribute.size === 4 ) {

  						for ( ca = 0; ca < cal; ca ++ ) {

  							value = customAttribute.value[ ca ];

  							customAttribute.array[ offset ]      = value.x;
  							customAttribute.array[ offset + 1  ] = value.y;
  							customAttribute.array[ offset + 2  ] = value.z;
  							customAttribute.array[ offset + 3  ] = value.w;

  							offset += 4;

  						}

  					}

  				}

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, customAttribute.buffer );
  				_gl.bufferData( _gl.ARRAY_BUFFER, customAttribute.array, hint );

  				customAttribute.needsUpdate = false;

  			}

  		}

  	}

  	function setLineBuffers ( geometry, hint ) {

  		var v, c, d, vertex, offset, color,

  		vertices = geometry.vertices,
  		colors = geometry.colors,
  		lineDistances = geometry.lineDistances,

  		vl = vertices.length,
  		cl = colors.length,
  		dl = lineDistances.length,

  		vertexArray = geometry.__vertexArray,
  		colorArray = geometry.__colorArray,
  		lineDistanceArray = geometry.__lineDistanceArray,

  		dirtyVertices = geometry.verticesNeedUpdate,
  		dirtyColors = geometry.colorsNeedUpdate,
  		dirtyLineDistances = geometry.lineDistancesNeedUpdate,

  		customAttributes = geometry.__webglCustomAttributesList,

  		i, il,
  		ca, cal, value,
  		customAttribute;

  		if ( dirtyVertices ) {

  			for ( v = 0; v < vl; v ++ ) {

  				vertex = vertices[ v ];

  				offset = v * 3;

  				vertexArray[ offset ]     = vertex.x;
  				vertexArray[ offset + 1 ] = vertex.y;
  				vertexArray[ offset + 2 ] = vertex.z;

  			}

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometry.__webglVertexBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, vertexArray, hint );

  		}

  		if ( dirtyColors ) {

  			for ( c = 0; c < cl; c ++ ) {

  				color = colors[ c ];

  				offset = c * 3;

  				colorArray[ offset ]     = color.r;
  				colorArray[ offset + 1 ] = color.g;
  				colorArray[ offset + 2 ] = color.b;

  			}

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometry.__webglColorBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, colorArray, hint );

  		}

  		if ( dirtyLineDistances ) {

  			for ( d = 0; d < dl; d ++ ) {

  				lineDistanceArray[ d ] = lineDistances[ d ];

  			}

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometry.__webglLineDistanceBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, lineDistanceArray, hint );

  		}

  		if ( customAttributes ) {

  			for ( i = 0, il = customAttributes.length; i < il; i ++ ) {

  				customAttribute = customAttributes[ i ];

  				if ( customAttribute.needsUpdate && ( customAttribute.boundTo === undefined || customAttribute.boundTo === 'vertices' ) ) {

  					offset = 0;

  					cal = customAttribute.value.length;

  					if ( customAttribute.size === 1 ) {

  						for ( ca = 0; ca < cal; ca ++ ) {

  							customAttribute.array[ ca ] = customAttribute.value[ ca ];

  						}

  					} else if ( customAttribute.size === 2 ) {

  						for ( ca = 0; ca < cal; ca ++ ) {

  							value = customAttribute.value[ ca ];

  							customAttribute.array[ offset ]   = value.x;
  							customAttribute.array[ offset + 1 ] = value.y;

  							offset += 2;

  						}

  					} else if ( customAttribute.size === 3 ) {

  						if ( customAttribute.type === 'c' ) {

  							for ( ca = 0; ca < cal; ca ++ ) {

  								value = customAttribute.value[ ca ];

  								customAttribute.array[ offset ]   = value.r;
  								customAttribute.array[ offset + 1 ] = value.g;
  								customAttribute.array[ offset + 2 ] = value.b;

  								offset += 3;

  							}

  						} else {

  							for ( ca = 0; ca < cal; ca ++ ) {

  								value = customAttribute.value[ ca ];

  								customAttribute.array[ offset ]   = value.x;
  								customAttribute.array[ offset + 1 ] = value.y;
  								customAttribute.array[ offset + 2 ] = value.z;

  								offset += 3;

  							}

  						}

  					} else if ( customAttribute.size === 4 ) {

  						for ( ca = 0; ca < cal; ca ++ ) {

  							value = customAttribute.value[ ca ];

  							customAttribute.array[ offset ]    = value.x;
  							customAttribute.array[ offset + 1  ] = value.y;
  							customAttribute.array[ offset + 2  ] = value.z;
  							customAttribute.array[ offset + 3  ] = value.w;

  							offset += 4;

  						}

  					}

  					_gl.bindBuffer( _gl.ARRAY_BUFFER, customAttribute.buffer );
  					_gl.bufferData( _gl.ARRAY_BUFFER, customAttribute.array, hint );

  					customAttribute.needsUpdate = false;

  				}

  			}

  		}

  	}

  	function setMeshBuffers( geometryGroup, object, hint, dispose, material ) {

  		if ( ! geometryGroup.__inittedArrays ) {

  			return;

  		}

  		var needsFaceNormals = materialNeedsFaceNormals( material );

  		var f, fl, fi, face,
  		vertexNormals, faceNormal,
  		vertexColors, faceColor,
  		vertexTangents,
  		uv, uv2, v1, v2, v3, t1, t2, t3, n1, n2, n3,
  		c1, c2, c3,
  		sw1, sw2, sw3,
  		si1, si2, si3,
  		i, il,
  		vn, uvi, uv2i,
  		vk, vkl, vka,
  		nka, chf, faceVertexNormals,

  		vertexIndex = 0,

  		offset = 0,
  		offset_uv = 0,
  		offset_uv2 = 0,
  		offset_face = 0,
  		offset_normal = 0,
  		offset_tangent = 0,
  		offset_line = 0,
  		offset_color = 0,
  		offset_skin = 0,
  		offset_morphTarget = 0,
  		offset_custom = 0,

  		value,

  		vertexArray = geometryGroup.__vertexArray,
  		uvArray = geometryGroup.__uvArray,
  		uv2Array = geometryGroup.__uv2Array,
  		normalArray = geometryGroup.__normalArray,
  		tangentArray = geometryGroup.__tangentArray,
  		colorArray = geometryGroup.__colorArray,

  		skinIndexArray = geometryGroup.__skinIndexArray,
  		skinWeightArray = geometryGroup.__skinWeightArray,

  		morphTargetsArrays = geometryGroup.__morphTargetsArrays,
  		morphNormalsArrays = geometryGroup.__morphNormalsArrays,

  		customAttributes = geometryGroup.__webglCustomAttributesList,
  		customAttribute,

  		faceArray = geometryGroup.__faceArray,
  		lineArray = geometryGroup.__lineArray,

  		geometry = object.geometry, // this is shared for all chunks

  		dirtyVertices = geometry.verticesNeedUpdate,
  		dirtyElements = geometry.elementsNeedUpdate,
  		dirtyUvs = geometry.uvsNeedUpdate,
  		dirtyNormals = geometry.normalsNeedUpdate,
  		dirtyTangents = geometry.tangentsNeedUpdate,
  		dirtyColors = geometry.colorsNeedUpdate,
  		dirtyMorphTargets = geometry.morphTargetsNeedUpdate,

  		vertices = geometry.vertices,
  		chunk_faces3 = geometryGroup.faces3,
  		obj_faces = geometry.faces,

  		obj_uvs  = geometry.faceVertexUvs[ 0 ],
  		obj_uvs2 = geometry.faceVertexUvs[ 1 ],

  		obj_skinIndices = geometry.skinIndices,
  		obj_skinWeights = geometry.skinWeights,

  		morphTargets = geometry.morphTargets,
  		morphNormals = geometry.morphNormals;

  		if ( dirtyVertices ) {

  			for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  				face = obj_faces[ chunk_faces3[ f ] ];

  				v1 = vertices[ face.a ];
  				v2 = vertices[ face.b ];
  				v3 = vertices[ face.c ];

  				vertexArray[ offset ]     = v1.x;
  				vertexArray[ offset + 1 ] = v1.y;
  				vertexArray[ offset + 2 ] = v1.z;

  				vertexArray[ offset + 3 ] = v2.x;
  				vertexArray[ offset + 4 ] = v2.y;
  				vertexArray[ offset + 5 ] = v2.z;

  				vertexArray[ offset + 6 ] = v3.x;
  				vertexArray[ offset + 7 ] = v3.y;
  				vertexArray[ offset + 8 ] = v3.z;

  				offset += 9;

  			}

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglVertexBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, vertexArray, hint );

  		}

  		if ( dirtyMorphTargets ) {

  			for ( vk = 0, vkl = morphTargets.length; vk < vkl; vk ++ ) {

  				offset_morphTarget = 0;

  				for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  					chf = chunk_faces3[ f ];
  					face = obj_faces[ chf ];

  					// morph positions

  					v1 = morphTargets[ vk ].vertices[ face.a ];
  					v2 = morphTargets[ vk ].vertices[ face.b ];
  					v3 = morphTargets[ vk ].vertices[ face.c ];

  					vka = morphTargetsArrays[ vk ];

  					vka[ offset_morphTarget ]     = v1.x;
  					vka[ offset_morphTarget + 1 ] = v1.y;
  					vka[ offset_morphTarget + 2 ] = v1.z;

  					vka[ offset_morphTarget + 3 ] = v2.x;
  					vka[ offset_morphTarget + 4 ] = v2.y;
  					vka[ offset_morphTarget + 5 ] = v2.z;

  					vka[ offset_morphTarget + 6 ] = v3.x;
  					vka[ offset_morphTarget + 7 ] = v3.y;
  					vka[ offset_morphTarget + 8 ] = v3.z;

  					// morph normals

  					if ( material.morphNormals ) {

  						if ( needsFaceNormals ) {

  							n1 = morphNormals[ vk ].faceNormals[ chf ];
  							n2 = n1;
  							n3 = n1;

  						} else {

  							faceVertexNormals = morphNormals[ vk ].vertexNormals[ chf ];

  							n1 = faceVertexNormals.a;
  							n2 = faceVertexNormals.b;
  							n3 = faceVertexNormals.c;

  						}

  						nka = morphNormalsArrays[ vk ];

  						nka[ offset_morphTarget ]     = n1.x;
  						nka[ offset_morphTarget + 1 ] = n1.y;
  						nka[ offset_morphTarget + 2 ] = n1.z;

  						nka[ offset_morphTarget + 3 ] = n2.x;
  						nka[ offset_morphTarget + 4 ] = n2.y;
  						nka[ offset_morphTarget + 5 ] = n2.z;

  						nka[ offset_morphTarget + 6 ] = n3.x;
  						nka[ offset_morphTarget + 7 ] = n3.y;
  						nka[ offset_morphTarget + 8 ] = n3.z;

  					}

  					//

  					offset_morphTarget += 9;

  				}

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglMorphTargetsBuffers[ vk ] );
  				_gl.bufferData( _gl.ARRAY_BUFFER, morphTargetsArrays[ vk ], hint );

  				if ( material.morphNormals ) {

  					_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglMorphNormalsBuffers[ vk ] );
  					_gl.bufferData( _gl.ARRAY_BUFFER, morphNormalsArrays[ vk ], hint );

  				}

  			}

  		}

  		if ( obj_skinWeights.length ) {

  			for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  				face = obj_faces[ chunk_faces3[ f ] ];

  				// weights

  				sw1 = obj_skinWeights[ face.a ];
  				sw2 = obj_skinWeights[ face.b ];
  				sw3 = obj_skinWeights[ face.c ];

  				skinWeightArray[ offset_skin ]     = sw1.x;
  				skinWeightArray[ offset_skin + 1 ] = sw1.y;
  				skinWeightArray[ offset_skin + 2 ] = sw1.z;
  				skinWeightArray[ offset_skin + 3 ] = sw1.w;

  				skinWeightArray[ offset_skin + 4 ] = sw2.x;
  				skinWeightArray[ offset_skin + 5 ] = sw2.y;
  				skinWeightArray[ offset_skin + 6 ] = sw2.z;
  				skinWeightArray[ offset_skin + 7 ] = sw2.w;

  				skinWeightArray[ offset_skin + 8 ]  = sw3.x;
  				skinWeightArray[ offset_skin + 9 ]  = sw3.y;
  				skinWeightArray[ offset_skin + 10 ] = sw3.z;
  				skinWeightArray[ offset_skin + 11 ] = sw3.w;

  				// indices

  				si1 = obj_skinIndices[ face.a ];
  				si2 = obj_skinIndices[ face.b ];
  				si3 = obj_skinIndices[ face.c ];

  				skinIndexArray[ offset_skin ]     = si1.x;
  				skinIndexArray[ offset_skin + 1 ] = si1.y;
  				skinIndexArray[ offset_skin + 2 ] = si1.z;
  				skinIndexArray[ offset_skin + 3 ] = si1.w;

  				skinIndexArray[ offset_skin + 4 ] = si2.x;
  				skinIndexArray[ offset_skin + 5 ] = si2.y;
  				skinIndexArray[ offset_skin + 6 ] = si2.z;
  				skinIndexArray[ offset_skin + 7 ] = si2.w;

  				skinIndexArray[ offset_skin + 8 ]  = si3.x;
  				skinIndexArray[ offset_skin + 9 ]  = si3.y;
  				skinIndexArray[ offset_skin + 10 ] = si3.z;
  				skinIndexArray[ offset_skin + 11 ] = si3.w;

  				offset_skin += 12;

  			}

  			if ( offset_skin > 0 ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglSkinIndicesBuffer );
  				_gl.bufferData( _gl.ARRAY_BUFFER, skinIndexArray, hint );

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglSkinWeightsBuffer );
  				_gl.bufferData( _gl.ARRAY_BUFFER, skinWeightArray, hint );

  			}

  		}

  		if ( dirtyColors ) {

  			for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  				face = obj_faces[ chunk_faces3[ f ] ];

  				vertexColors = face.vertexColors;
  				faceColor = face.color;

  				if ( vertexColors.length === 3 && material.vertexColors === THREE$VertexColors ) {

  					c1 = vertexColors[ 0 ];
  					c2 = vertexColors[ 1 ];
  					c3 = vertexColors[ 2 ];

  				} else {

  					c1 = faceColor;
  					c2 = faceColor;
  					c3 = faceColor;

  				}

  				colorArray[ offset_color ]     = c1.r;
  				colorArray[ offset_color + 1 ] = c1.g;
  				colorArray[ offset_color + 2 ] = c1.b;

  				colorArray[ offset_color + 3 ] = c2.r;
  				colorArray[ offset_color + 4 ] = c2.g;
  				colorArray[ offset_color + 5 ] = c2.b;

  				colorArray[ offset_color + 6 ] = c3.r;
  				colorArray[ offset_color + 7 ] = c3.g;
  				colorArray[ offset_color + 8 ] = c3.b;

  				offset_color += 9;

  			}

  			if ( offset_color > 0 ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglColorBuffer );
  				_gl.bufferData( _gl.ARRAY_BUFFER, colorArray, hint );

  			}

  		}

  		if ( dirtyTangents && geometry.hasTangents ) {

  			for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  				face = obj_faces[ chunk_faces3[ f ] ];

  				vertexTangents = face.vertexTangents;

  				t1 = vertexTangents[ 0 ];
  				t2 = vertexTangents[ 1 ];
  				t3 = vertexTangents[ 2 ];

  				tangentArray[ offset_tangent ]     = t1.x;
  				tangentArray[ offset_tangent + 1 ] = t1.y;
  				tangentArray[ offset_tangent + 2 ] = t1.z;
  				tangentArray[ offset_tangent + 3 ] = t1.w;

  				tangentArray[ offset_tangent + 4 ] = t2.x;
  				tangentArray[ offset_tangent + 5 ] = t2.y;
  				tangentArray[ offset_tangent + 6 ] = t2.z;
  				tangentArray[ offset_tangent + 7 ] = t2.w;

  				tangentArray[ offset_tangent + 8 ]  = t3.x;
  				tangentArray[ offset_tangent + 9 ]  = t3.y;
  				tangentArray[ offset_tangent + 10 ] = t3.z;
  				tangentArray[ offset_tangent + 11 ] = t3.w;

  				offset_tangent += 12;

  			}

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglTangentBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, tangentArray, hint );

  		}

  		if ( dirtyNormals ) {

  			for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  				face = obj_faces[ chunk_faces3[ f ] ];

  				vertexNormals = face.vertexNormals;
  				faceNormal = face.normal;

  				if ( vertexNormals.length === 3 && needsFaceNormals === false ) {

  					for ( i = 0; i < 3; i ++ ) {

  						vn = vertexNormals[ i ];

  						normalArray[ offset_normal ]     = vn.x;
  						normalArray[ offset_normal + 1 ] = vn.y;
  						normalArray[ offset_normal + 2 ] = vn.z;

  						offset_normal += 3;

  					}

  				} else {

  					for ( i = 0; i < 3; i ++ ) {

  						normalArray[ offset_normal ]     = faceNormal.x;
  						normalArray[ offset_normal + 1 ] = faceNormal.y;
  						normalArray[ offset_normal + 2 ] = faceNormal.z;

  						offset_normal += 3;

  					}

  				}

  			}

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglNormalBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, normalArray, hint );

  		}

  		if ( dirtyUvs && obj_uvs ) {

  			for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  				fi = chunk_faces3[ f ];

  				uv = obj_uvs[ fi ];

  				if ( uv === undefined ) continue;

  				for ( i = 0; i < 3; i ++ ) {

  					uvi = uv[ i ];

  					uvArray[ offset_uv ]     = uvi.x;
  					uvArray[ offset_uv + 1 ] = uvi.y;

  					offset_uv += 2;

  				}

  			}

  			if ( offset_uv > 0 ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglUVBuffer );
  				_gl.bufferData( _gl.ARRAY_BUFFER, uvArray, hint );

  			}

  		}

  		if ( dirtyUvs && obj_uvs2 ) {

  			for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  				fi = chunk_faces3[ f ];

  				uv2 = obj_uvs2[ fi ];

  				if ( uv2 === undefined ) continue;

  				for ( i = 0; i < 3; i ++ ) {

  					uv2i = uv2[ i ];

  					uv2Array[ offset_uv2 ]     = uv2i.x;
  					uv2Array[ offset_uv2 + 1 ] = uv2i.y;

  					offset_uv2 += 2;

  				}

  			}

  			if ( offset_uv2 > 0 ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglUV2Buffer );
  				_gl.bufferData( _gl.ARRAY_BUFFER, uv2Array, hint );

  			}

  		}

  		if ( dirtyElements ) {

  			for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  				faceArray[ offset_face ]   = vertexIndex;
  				faceArray[ offset_face + 1 ] = vertexIndex + 1;
  				faceArray[ offset_face + 2 ] = vertexIndex + 2;

  				offset_face += 3;

  				lineArray[ offset_line ]     = vertexIndex;
  				lineArray[ offset_line + 1 ] = vertexIndex + 1;

  				lineArray[ offset_line + 2 ] = vertexIndex;
  				lineArray[ offset_line + 3 ] = vertexIndex + 2;

  				lineArray[ offset_line + 4 ] = vertexIndex + 1;
  				lineArray[ offset_line + 5 ] = vertexIndex + 2;

  				offset_line += 6;

  				vertexIndex += 3;

  			}

  			_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglFaceBuffer );
  			_gl.bufferData( _gl.ELEMENT_ARRAY_BUFFER, faceArray, hint );

  			_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglLineBuffer );
  			_gl.bufferData( _gl.ELEMENT_ARRAY_BUFFER, lineArray, hint );

  		}

  		if ( customAttributes ) {

  			for ( i = 0, il = customAttributes.length; i < il; i ++ ) {

  				customAttribute = customAttributes[ i ];

  				if ( ! customAttribute.__original.needsUpdate ) continue;

  				offset_custom = 0;

  				if ( customAttribute.size === 1 ) {

  					if ( customAttribute.boundTo === undefined || customAttribute.boundTo === 'vertices' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							face = obj_faces[ chunk_faces3[ f ] ];

  							customAttribute.array[ offset_custom ]     = customAttribute.value[ face.a ];
  							customAttribute.array[ offset_custom + 1 ] = customAttribute.value[ face.b ];
  							customAttribute.array[ offset_custom + 2 ] = customAttribute.value[ face.c ];

  							offset_custom += 3;

  						}

  					} else if ( customAttribute.boundTo === 'faces' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							value = customAttribute.value[ chunk_faces3[ f ] ];

  							customAttribute.array[ offset_custom ]     = value;
  							customAttribute.array[ offset_custom + 1 ] = value;
  							customAttribute.array[ offset_custom + 2 ] = value;

  							offset_custom += 3;

  						}

  					}

  				} else if ( customAttribute.size === 2 ) {

  					if ( customAttribute.boundTo === undefined || customAttribute.boundTo === 'vertices' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							face = obj_faces[ chunk_faces3[ f ] ];

  							v1 = customAttribute.value[ face.a ];
  							v2 = customAttribute.value[ face.b ];
  							v3 = customAttribute.value[ face.c ];

  							customAttribute.array[ offset_custom ]     = v1.x;
  							customAttribute.array[ offset_custom + 1 ] = v1.y;

  							customAttribute.array[ offset_custom + 2 ] = v2.x;
  							customAttribute.array[ offset_custom + 3 ] = v2.y;

  							customAttribute.array[ offset_custom + 4 ] = v3.x;
  							customAttribute.array[ offset_custom + 5 ] = v3.y;

  							offset_custom += 6;

  						}

  					} else if ( customAttribute.boundTo === 'faces' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							value = customAttribute.value[ chunk_faces3[ f ] ];

  							v1 = value;
  							v2 = value;
  							v3 = value;

  							customAttribute.array[ offset_custom ]     = v1.x;
  							customAttribute.array[ offset_custom + 1 ] = v1.y;

  							customAttribute.array[ offset_custom + 2 ] = v2.x;
  							customAttribute.array[ offset_custom + 3 ] = v2.y;

  							customAttribute.array[ offset_custom + 4 ] = v3.x;
  							customAttribute.array[ offset_custom + 5 ] = v3.y;

  							offset_custom += 6;

  						}

  					}

  				} else if ( customAttribute.size === 3 ) {

  					var pp;

  					if ( customAttribute.type === 'c' ) {

  						pp = [ 'r', 'g', 'b' ];

  					} else {

  						pp = [ 'x', 'y', 'z' ];

  					}

  					if ( customAttribute.boundTo === undefined || customAttribute.boundTo === 'vertices' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							face = obj_faces[ chunk_faces3[ f ] ];

  							v1 = customAttribute.value[ face.a ];
  							v2 = customAttribute.value[ face.b ];
  							v3 = customAttribute.value[ face.c ];

  							customAttribute.array[ offset_custom ]     = v1[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 1 ] = v1[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 2 ] = v1[ pp[ 2 ] ];

  							customAttribute.array[ offset_custom + 3 ] = v2[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 4 ] = v2[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 5 ] = v2[ pp[ 2 ] ];

  							customAttribute.array[ offset_custom + 6 ] = v3[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 7 ] = v3[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 8 ] = v3[ pp[ 2 ] ];

  							offset_custom += 9;

  						}

  					} else if ( customAttribute.boundTo === 'faces' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							value = customAttribute.value[ chunk_faces3[ f ] ];

  							v1 = value;
  							v2 = value;
  							v3 = value;

  							customAttribute.array[ offset_custom ]     = v1[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 1 ] = v1[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 2 ] = v1[ pp[ 2 ] ];

  							customAttribute.array[ offset_custom + 3 ] = v2[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 4 ] = v2[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 5 ] = v2[ pp[ 2 ] ];

  							customAttribute.array[ offset_custom + 6 ] = v3[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 7 ] = v3[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 8 ] = v3[ pp[ 2 ] ];

  							offset_custom += 9;

  						}

  					} else if ( customAttribute.boundTo === 'faceVertices' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							value = customAttribute.value[ chunk_faces3[ f ] ];

  							v1 = value[ 0 ];
  							v2 = value[ 1 ];
  							v3 = value[ 2 ];

  							customAttribute.array[ offset_custom ]     = v1[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 1 ] = v1[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 2 ] = v1[ pp[ 2 ] ];

  							customAttribute.array[ offset_custom + 3 ] = v2[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 4 ] = v2[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 5 ] = v2[ pp[ 2 ] ];

  							customAttribute.array[ offset_custom + 6 ] = v3[ pp[ 0 ] ];
  							customAttribute.array[ offset_custom + 7 ] = v3[ pp[ 1 ] ];
  							customAttribute.array[ offset_custom + 8 ] = v3[ pp[ 2 ] ];

  							offset_custom += 9;

  						}

  					}

  				} else if ( customAttribute.size === 4 ) {

  					if ( customAttribute.boundTo === undefined || customAttribute.boundTo === 'vertices' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							face = obj_faces[ chunk_faces3[ f ] ];

  							v1 = customAttribute.value[ face.a ];
  							v2 = customAttribute.value[ face.b ];
  							v3 = customAttribute.value[ face.c ];

  							customAttribute.array[ offset_custom  ]   = v1.x;
  							customAttribute.array[ offset_custom + 1  ] = v1.y;
  							customAttribute.array[ offset_custom + 2  ] = v1.z;
  							customAttribute.array[ offset_custom + 3  ] = v1.w;

  							customAttribute.array[ offset_custom + 4  ] = v2.x;
  							customAttribute.array[ offset_custom + 5  ] = v2.y;
  							customAttribute.array[ offset_custom + 6  ] = v2.z;
  							customAttribute.array[ offset_custom + 7  ] = v2.w;

  							customAttribute.array[ offset_custom + 8  ] = v3.x;
  							customAttribute.array[ offset_custom + 9  ] = v3.y;
  							customAttribute.array[ offset_custom + 10 ] = v3.z;
  							customAttribute.array[ offset_custom + 11 ] = v3.w;

  							offset_custom += 12;

  						}

  					} else if ( customAttribute.boundTo === 'faces' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							value = customAttribute.value[ chunk_faces3[ f ] ];

  							v1 = value;
  							v2 = value;
  							v3 = value;

  							customAttribute.array[ offset_custom  ]   = v1.x;
  							customAttribute.array[ offset_custom + 1  ] = v1.y;
  							customAttribute.array[ offset_custom + 2  ] = v1.z;
  							customAttribute.array[ offset_custom + 3  ] = v1.w;

  							customAttribute.array[ offset_custom + 4  ] = v2.x;
  							customAttribute.array[ offset_custom + 5  ] = v2.y;
  							customAttribute.array[ offset_custom + 6  ] = v2.z;
  							customAttribute.array[ offset_custom + 7  ] = v2.w;

  							customAttribute.array[ offset_custom + 8  ] = v3.x;
  							customAttribute.array[ offset_custom + 9  ] = v3.y;
  							customAttribute.array[ offset_custom + 10 ] = v3.z;
  							customAttribute.array[ offset_custom + 11 ] = v3.w;

  							offset_custom += 12;

  						}

  					} else if ( customAttribute.boundTo === 'faceVertices' ) {

  						for ( f = 0, fl = chunk_faces3.length; f < fl; f ++ ) {

  							value = customAttribute.value[ chunk_faces3[ f ] ];

  							v1 = value[ 0 ];
  							v2 = value[ 1 ];
  							v3 = value[ 2 ];

  							customAttribute.array[ offset_custom  ]   = v1.x;
  							customAttribute.array[ offset_custom + 1  ] = v1.y;
  							customAttribute.array[ offset_custom + 2  ] = v1.z;
  							customAttribute.array[ offset_custom + 3  ] = v1.w;

  							customAttribute.array[ offset_custom + 4  ] = v2.x;
  							customAttribute.array[ offset_custom + 5  ] = v2.y;
  							customAttribute.array[ offset_custom + 6  ] = v2.z;
  							customAttribute.array[ offset_custom + 7  ] = v2.w;

  							customAttribute.array[ offset_custom + 8  ] = v3.x;
  							customAttribute.array[ offset_custom + 9  ] = v3.y;
  							customAttribute.array[ offset_custom + 10 ] = v3.z;
  							customAttribute.array[ offset_custom + 11 ] = v3.w;

  							offset_custom += 12;

  						}

  					}

  				}

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, customAttribute.buffer );
  				_gl.bufferData( _gl.ARRAY_BUFFER, customAttribute.array, hint );

  			}

  		}

  		if ( dispose ) {

  			delete geometryGroup.__inittedArrays;
  			delete geometryGroup.__colorArray;
  			delete geometryGroup.__normalArray;
  			delete geometryGroup.__tangentArray;
  			delete geometryGroup.__uvArray;
  			delete geometryGroup.__uv2Array;
  			delete geometryGroup.__faceArray;
  			delete geometryGroup.__vertexArray;
  			delete geometryGroup.__lineArray;
  			delete geometryGroup.__skinIndexArray;
  			delete geometryGroup.__skinWeightArray;

  		}

  	};

  	// Buffer rendering

  	this.renderBufferImmediate = function ( object, program, material ) {

  		state.initAttributes();

  		if ( object.hasPositions && ! object.__webglVertexBuffer ) object.__webglVertexBuffer = _gl.createBuffer();
  		if ( object.hasNormals && ! object.__webglNormalBuffer ) object.__webglNormalBuffer = _gl.createBuffer();
  		if ( object.hasUvs && ! object.__webglUvBuffer ) object.__webglUvBuffer = _gl.createBuffer();
  		if ( object.hasColors && ! object.__webglColorBuffer ) object.__webglColorBuffer = _gl.createBuffer();

  		if ( object.hasPositions ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, object.__webglVertexBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, object.positionArray, _gl.DYNAMIC_DRAW );

  			state.enableAttribute( program.attributes.position );

  			_gl.vertexAttribPointer( program.attributes.position, 3, _gl.FLOAT, false, 0, 0 );

  		}

  		if ( object.hasNormals ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, object.__webglNormalBuffer );

  			if ( material instanceof THREE$MeshPhongMaterial === false &&
  				   material.shading === THREE$FlatShading ) {

  				var nx, ny, nz,
  					nax, nbx, ncx, nay, nby, ncy, naz, nbz, ncz,
  					normalArray,
  					i, il = object.count * 3;

  				for ( i = 0; i < il; i += 9 ) {

  					normalArray = object.normalArray;

  					nax  = normalArray[ i ];
  					nay  = normalArray[ i + 1 ];
  					naz  = normalArray[ i + 2 ];

  					nbx  = normalArray[ i + 3 ];
  					nby  = normalArray[ i + 4 ];
  					nbz  = normalArray[ i + 5 ];

  					ncx  = normalArray[ i + 6 ];
  					ncy  = normalArray[ i + 7 ];
  					ncz  = normalArray[ i + 8 ];

  					nx = ( nax + nbx + ncx ) / 3;
  					ny = ( nay + nby + ncy ) / 3;
  					nz = ( naz + nbz + ncz ) / 3;

  					normalArray[ i ]   = nx;
  					normalArray[ i + 1 ] = ny;
  					normalArray[ i + 2 ] = nz;

  					normalArray[ i + 3 ] = nx;
  					normalArray[ i + 4 ] = ny;
  					normalArray[ i + 5 ] = nz;

  					normalArray[ i + 6 ] = nx;
  					normalArray[ i + 7 ] = ny;
  					normalArray[ i + 8 ] = nz;

  				}

  			}

  			_gl.bufferData( _gl.ARRAY_BUFFER, object.normalArray, _gl.DYNAMIC_DRAW );

  			state.enableAttribute( program.attributes.normal );

  			_gl.vertexAttribPointer( program.attributes.normal, 3, _gl.FLOAT, false, 0, 0 );

  		}

  		if ( object.hasUvs && material.map ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, object.__webglUvBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, object.uvArray, _gl.DYNAMIC_DRAW );

  			state.enableAttribute( program.attributes.uv );

  			_gl.vertexAttribPointer( program.attributes.uv, 2, _gl.FLOAT, false, 0, 0 );

  		}

  		if ( object.hasColors && material.vertexColors !== THREE$NoColors ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, object.__webglColorBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, object.colorArray, _gl.DYNAMIC_DRAW );

  			state.enableAttribute( program.attributes.color );

  			_gl.vertexAttribPointer( program.attributes.color, 3, _gl.FLOAT, false, 0, 0 );

  		}

  		state.disableUnusedAttributes();

  		_gl.drawArrays( _gl.TRIANGLES, 0, object.count );

  		object.count = 0;

  	};

  	function setupVertexAttributes( material, program, geometry, startIndex ) {

  		var geometryAttributes = geometry.attributes;

  		var programAttributes = program.attributes;
  		var programAttributesKeys = program.attributesKeys;

  		for ( var i = 0, l = programAttributesKeys.length; i < l; i ++ ) {

  			var key = programAttributesKeys[ i ];
  			var programAttribute = programAttributes[ key ];

  			if ( programAttribute >= 0 ) {

  				var geometryAttribute = geometryAttributes[ key ];

  				if ( geometryAttribute !== undefined ) {

  					var size = geometryAttribute.itemSize;

  					_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryAttribute.buffer );

  					state.enableAttribute( programAttribute );

  					_gl.vertexAttribPointer( programAttribute, size, _gl.FLOAT, false, 0, startIndex * size * 4 ); // 4 bytes per Float32

  				} else if ( material.defaultAttributeValues !== undefined ) {

  					if ( material.defaultAttributeValues[ key ].length === 2 ) {

  						_gl.vertexAttrib2fv( programAttribute, material.defaultAttributeValues[ key ] );

  					} else if ( material.defaultAttributeValues[ key ].length === 3 ) {

  						_gl.vertexAttrib3fv( programAttribute, material.defaultAttributeValues[ key ] );

  					}

  				}

  			}

  		}

  		state.disableUnusedAttributes();

  	}

  	this.renderBufferDirect = function ( camera, lights, fog, material, geometry, object ) {

  		if ( material.visible === false ) return;

  		updateObject( object );

  		var program = setProgram( camera, lights, fog, material, object );

  		var updateBuffers = false,
  			wireframeBit = material.wireframe ? 1 : 0,
  			geometryProgram = 'direct_' + geometry.id + '_' + program.id + '_' + wireframeBit;

  		if ( geometryProgram !== _currentGeometryProgram ) {

  			_currentGeometryProgram = geometryProgram;
  			updateBuffers = true;

  		}

  		if ( updateBuffers ) {

  			state.initAttributes();

  		}

  		// render mesh

  		if ( object instanceof THREE$Mesh ) {

  			var mode = material.wireframe === true ? _gl.LINES : _gl.TRIANGLES;

  			var index = geometry.attributes.index;

  			if ( index ) {

  				// indexed triangles

  				var type, size;

  				if ( index.array instanceof Uint32Array && extensions.get( 'OES_element_index_uint' ) ) {

  					type = _gl.UNSIGNED_INT;
  					size = 4;

  				} else {

  					type = _gl.UNSIGNED_SHORT;
  					size = 2;

  				}

  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					if ( updateBuffers ) {

  						setupVertexAttributes( material, program, geometry, 0 );
  						_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, index.buffer );

  					}

  					_gl.drawElements( mode, index.array.length, type, 0 );

  					_this.info.render.calls ++;
  					_this.info.render.vertices += index.array.length; // not really true, here vertices can be shared
  					_this.info.render.faces += index.array.length / 3;

  				} else {

  					// if there is more than 1 chunk
  					// must set attribute pointers to use new offsets for each chunk
  					// even if geometry and materials didn't change

  					updateBuffers = true;

  					for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  						var startIndex = offsets[ i ].index;

  						if ( updateBuffers ) {

  							setupVertexAttributes( material, program, geometry, startIndex );
  							_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, index.buffer );

  						}

  						// render indexed triangles

  						_gl.drawElements( mode, offsets[ i ].count, type, offsets[ i ].start * size );

  						_this.info.render.calls ++;
  						_this.info.render.vertices += offsets[ i ].count; // not really true, here vertices can be shared
  						_this.info.render.faces += offsets[ i ].count / 3;

  					}

  				}

  			} else {

  				// non-indexed triangles

  				if ( updateBuffers ) {

  					setupVertexAttributes( material, program, geometry, 0 );

  				}

  				var position = geometry.attributes[ 'position' ];

  				// render non-indexed triangles

  				_gl.drawArrays( mode, 0, position.array.length / position.itemSize );

  				_this.info.render.calls ++;
  				_this.info.render.vertices += position.array.length / position.itemSize;
  				_this.info.render.faces += position.array.length / ( 3 * position.itemSize );

  			}

  		} else if ( object instanceof THREE$PointCloud ) {

  			// render particles

  			var mode = _gl.POINTS;

  			var index = geometry.attributes.index;

  			if ( index ) {

  				// indexed points

  				var type, size;

  				if ( index.array instanceof Uint32Array && extensions.get( 'OES_element_index_uint' ) ) {

  					type = _gl.UNSIGNED_INT;
  					size = 4;

  				} else {

  					type = _gl.UNSIGNED_SHORT;
  					size = 2;

  				}

  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					if ( updateBuffers ) {

  						setupVertexAttributes( material, program, geometry, 0 );
  						_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, index.buffer );

  					}

  					_gl.drawElements( mode, index.array.length, type, 0);

  					_this.info.render.calls ++;
  					_this.info.render.points += index.array.length;

  				} else {

  					// if there is more than 1 chunk
  					// must set attribute pointers to use new offsets for each chunk
  					// even if geometry and materials didn't change

  					if ( offsets.length > 1 ) updateBuffers = true;

  					for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  						var startIndex = offsets[ i ].index;

  						if ( updateBuffers ) {

  							setupVertexAttributes( material, program, geometry, startIndex );
  							_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, index.buffer );

  						}

  						// render indexed points

  						_gl.drawElements( mode, offsets[ i ].count, type, offsets[ i ].start * size );

  						_this.info.render.calls ++;
  						_this.info.render.points += offsets[ i ].count;

  					}

  				}

  			} else {

  				// non-indexed points

  				if ( updateBuffers ) {

  					setupVertexAttributes( material, program, geometry, 0 );

  				}

  				var position = geometry.attributes.position;
  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					_gl.drawArrays( mode, 0, position.array.length / 3 );

  					_this.info.render.calls ++;
  					_this.info.render.points += position.array.length / 3;

  				} else {

  					for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  						_gl.drawArrays( mode, offsets[ i ].index, offsets[ i ].count );

  						_this.info.render.calls ++;
  						_this.info.render.points += offsets[ i ].count;

  					}

  				}

  			}

  		} else if ( object instanceof THREE$Line ) {

  			var mode = ( object.mode === THREE$LineStrip ) ? _gl.LINE_STRIP : _gl.LINES;

  			state.setLineWidth( material.linewidth * pixelRatio );

  			var index = geometry.attributes.index;

  			if ( index ) {

  				// indexed lines

  				var type, size;

  				if ( index.array instanceof Uint32Array ) {

  					type = _gl.UNSIGNED_INT;
  					size = 4;

  				} else {

  					type = _gl.UNSIGNED_SHORT;
  					size = 2;

  				}

  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					if ( updateBuffers ) {

  						setupVertexAttributes( material, program, geometry, 0 );
  						_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, index.buffer );

  					}

  					_gl.drawElements( mode, index.array.length, type, 0 ); // 2 bytes per Uint16Array

  					_this.info.render.calls ++;
  					_this.info.render.vertices += index.array.length; // not really true, here vertices can be shared

  				} else {

  					// if there is more than 1 chunk
  					// must set attribute pointers to use new offsets for each chunk
  					// even if geometry and materials didn't change

  					if ( offsets.length > 1 ) updateBuffers = true;

  					for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  						var startIndex = offsets[ i ].index;

  						if ( updateBuffers ) {

  							setupVertexAttributes( material, program, geometry, startIndex );
  							_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, index.buffer );

  						}

  						// render indexed lines

  						_gl.drawElements( mode, offsets[ i ].count, type, offsets[ i ].start * size ); // 2 bytes per Uint16Array

  						_this.info.render.calls ++;
  						_this.info.render.vertices += offsets[ i ].count; // not really true, here vertices can be shared

  					}

  				}

  			} else {

  				// non-indexed lines

  				if ( updateBuffers ) {

  					setupVertexAttributes( material, program, geometry, 0 );

  				}

  				var position = geometry.attributes.position;
  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					_gl.drawArrays( mode, 0, position.array.length / 3 );

  					_this.info.render.calls ++;
  					_this.info.render.vertices += position.array.length / 3;

  				} else {

  					for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  						_gl.drawArrays( mode, offsets[ i ].index, offsets[ i ].count );

  						_this.info.render.calls ++;
  						_this.info.render.vertices += offsets[ i ].count;

  					}

  				}

  			}

  		}

  	};

  	this.renderBuffer = function ( camera, lights, fog, material, geometryGroup, object ) {

  		if ( material.visible === false ) return;

  		updateObject( object );

  		var program = setProgram( camera, lights, fog, material, object );

  		var attributes = program.attributes;

  		var updateBuffers = false,
  			wireframeBit = material.wireframe ? 1 : 0,
  			geometryProgram = geometryGroup.id + '_' + program.id + '_' + wireframeBit;

  		if ( geometryProgram !== _currentGeometryProgram ) {

  			_currentGeometryProgram = geometryProgram;
  			updateBuffers = true;

  		}

  		if ( updateBuffers ) {

  			state.initAttributes();

  		}

  		// vertices

  		if ( ! material.morphTargets && attributes.position >= 0 ) {

  			if ( updateBuffers ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglVertexBuffer );

  				state.enableAttribute( attributes.position );

  				_gl.vertexAttribPointer( attributes.position, 3, _gl.FLOAT, false, 0, 0 );

  			}

  		} else {

  			if ( object.morphTargetBase ) {

  				setupMorphTargets( material, geometryGroup, object );

  			}

  		}


  		if ( updateBuffers ) {

  			// custom attributes

  			// Use the per-geometryGroup custom attribute arrays which are setup in initMeshBuffers

  			if ( geometryGroup.__webglCustomAttributesList ) {

  				for ( var i = 0, il = geometryGroup.__webglCustomAttributesList.length; i < il; i ++ ) {

  					var attribute = geometryGroup.__webglCustomAttributesList[ i ];

  					if ( attributes[ attribute.buffer.belongsToAttribute ] >= 0 ) {

  						_gl.bindBuffer( _gl.ARRAY_BUFFER, attribute.buffer );

  						state.enableAttribute( attributes[ attribute.buffer.belongsToAttribute ] );

  						_gl.vertexAttribPointer( attributes[ attribute.buffer.belongsToAttribute ], attribute.size, _gl.FLOAT, false, 0, 0 );

  					}

  				}

  			}


  			// colors

  			if ( attributes.color >= 0 ) {

  				if ( object.geometry.colors.length > 0 || object.geometry.faces.length > 0 ) {

  					_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglColorBuffer );

  					state.enableAttribute( attributes.color );

  					_gl.vertexAttribPointer( attributes.color, 3, _gl.FLOAT, false, 0, 0 );

  				} else if ( material.defaultAttributeValues !== undefined ) {


  					_gl.vertexAttrib3fv( attributes.color, material.defaultAttributeValues.color );

  				}

  			}

  			// normals

  			if ( attributes.normal >= 0 ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglNormalBuffer );

  				state.enableAttribute( attributes.normal );

  				_gl.vertexAttribPointer( attributes.normal, 3, _gl.FLOAT, false, 0, 0 );

  			}

  			// tangents

  			if ( attributes.tangent >= 0 ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglTangentBuffer );

  				state.enableAttribute( attributes.tangent );

  				_gl.vertexAttribPointer( attributes.tangent, 4, _gl.FLOAT, false, 0, 0 );

  			}

  			// uvs

  			if ( attributes.uv >= 0 ) {

  				if ( object.geometry.faceVertexUvs[ 0 ] ) {

  					_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglUVBuffer );

  					state.enableAttribute( attributes.uv );

  					_gl.vertexAttribPointer( attributes.uv, 2, _gl.FLOAT, false, 0, 0 );

  				} else if ( material.defaultAttributeValues !== undefined ) {


  					_gl.vertexAttrib2fv( attributes.uv, material.defaultAttributeValues.uv );

  				}

  			}

  			if ( attributes.uv2 >= 0 ) {

  				if ( object.geometry.faceVertexUvs[ 1 ] ) {

  					_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglUV2Buffer );

  					state.enableAttribute( attributes.uv2 );

  					_gl.vertexAttribPointer( attributes.uv2, 2, _gl.FLOAT, false, 0, 0 );

  				} else if ( material.defaultAttributeValues !== undefined ) {


  					_gl.vertexAttrib2fv( attributes.uv2, material.defaultAttributeValues.uv2 );

  				}

  			}

  			if ( material.skinning &&
  				 attributes.skinIndex >= 0 && attributes.skinWeight >= 0 ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglSkinIndicesBuffer );

  				state.enableAttribute( attributes.skinIndex );

  				_gl.vertexAttribPointer( attributes.skinIndex, 4, _gl.FLOAT, false, 0, 0 );

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglSkinWeightsBuffer );

  				state.enableAttribute( attributes.skinWeight );

  				_gl.vertexAttribPointer( attributes.skinWeight, 4, _gl.FLOAT, false, 0, 0 );

  			}

  			// line distances

  			if ( attributes.lineDistance >= 0 ) {

  				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglLineDistanceBuffer );

  				state.enableAttribute( attributes.lineDistance );

  				_gl.vertexAttribPointer( attributes.lineDistance, 1, _gl.FLOAT, false, 0, 0 );

  			}

  		}

  		state.disableUnusedAttributes();

  		// render mesh

  		if ( object instanceof THREE$Mesh ) {

  			var type = geometryGroup.__typeArray === Uint32Array ? _gl.UNSIGNED_INT : _gl.UNSIGNED_SHORT;

  			// wireframe

  			if ( material.wireframe ) {

  				state.setLineWidth( material.wireframeLinewidth * pixelRatio );

  				if ( updateBuffers ) _gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglLineBuffer );
  				_gl.drawElements( _gl.LINES, geometryGroup.__webglLineCount, type, 0 );

  			// triangles

  			} else {

  				if ( updateBuffers ) _gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglFaceBuffer );
  				_gl.drawElements( _gl.TRIANGLES, geometryGroup.__webglFaceCount, type, 0 );

  			}

  			_this.info.render.calls ++;
  			_this.info.render.vertices += geometryGroup.__webglFaceCount;
  			_this.info.render.faces += geometryGroup.__webglFaceCount / 3;

  		// render lines

  		} else if ( object instanceof THREE$Line ) {

  			var mode = ( object.mode === THREE$LineStrip ) ? _gl.LINE_STRIP : _gl.LINES;

  			state.setLineWidth( material.linewidth * pixelRatio );

  			_gl.drawArrays( mode, 0, geometryGroup.__webglLineCount );

  			_this.info.render.calls ++;

  		// render particles

  		} else if ( object instanceof THREE$PointCloud ) {

  			_gl.drawArrays( _gl.POINTS, 0, geometryGroup.__webglParticleCount );

  			_this.info.render.calls ++;
  			_this.info.render.points += geometryGroup.__webglParticleCount;

  		}

  	};

  	function setupMorphTargets ( material, geometryGroup, object ) {

  		// set base

  		var attributes = material.program.attributes;

  		if ( object.morphTargetBase !== - 1 && attributes.position >= 0 ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglMorphTargetsBuffers[ object.morphTargetBase ] );

  			state.enableAttribute( attributes.position );

  			_gl.vertexAttribPointer( attributes.position, 3, _gl.FLOAT, false, 0, 0 );

  		} else if ( attributes.position >= 0 ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglVertexBuffer );

  			state.enableAttribute( attributes.position );

  			_gl.vertexAttribPointer( attributes.position, 3, _gl.FLOAT, false, 0, 0 );

  		}

  		if ( object.morphTargetForcedOrder.length ) {

  			// set forced order

  			var m = 0;
  			var order = object.morphTargetForcedOrder;
  			var influences = object.morphTargetInfluences;

  			var attribute;

  			while ( m < material.numSupportedMorphTargets && m < order.length ) {

  				attribute = attributes[ 'morphTarget' + m ];

  				if ( attribute >= 0 ) {

  					_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglMorphTargetsBuffers[ order[ m ] ] );

  					state.enableAttribute( attribute );

  					_gl.vertexAttribPointer( attribute, 3, _gl.FLOAT, false, 0, 0 );

  				}

  				attribute = attributes[ 'morphNormal' + m ];

  				if ( attribute >= 0 && material.morphNormals ) {

  					_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglMorphNormalsBuffers[ order[ m ] ] );

  					state.enableAttribute( attribute );

  					_gl.vertexAttribPointer( attribute, 3, _gl.FLOAT, false, 0, 0 );

  				}

  				object.__webglMorphTargetInfluences[ m ] = influences[ order[ m ] ];

  				m ++;

  			}

  		} else {

  			// find the most influencing

  			var activeInfluenceIndices = [];
  			var influences = object.morphTargetInfluences;
  			var morphTargets = object.geometry.morphTargets;

  			if ( influences.length > morphTargets.length ) {

  				console.warn( 'THREE.WebGLRenderer: Influences array is bigger than morphTargets array.' );
  				influences.length = morphTargets.length;

  			}

  			for ( var i = 0, il = influences.length; i < il; i ++ ) {

  				var influence = influences[ i ];

  				activeInfluenceIndices.push( [ influence, i ] );

  			}

  			if ( activeInfluenceIndices.length > material.numSupportedMorphTargets ) {

  				activeInfluenceIndices.sort( numericalSort );
  				activeInfluenceIndices.length = material.numSupportedMorphTargets;

  			} else if ( activeInfluenceIndices.length > material.numSupportedMorphNormals ) {

  				activeInfluenceIndices.sort( numericalSort );

  			} else if ( activeInfluenceIndices.length === 0 ) {

  				activeInfluenceIndices.push( [ 0, 0 ] );

  			}

  			var attribute;

  			for ( var m = 0, ml = material.numSupportedMorphTargets; m < ml; m ++ ) {

  				if ( activeInfluenceIndices[ m ] ) {

  					var influenceIndex = activeInfluenceIndices[ m ][ 1 ];

  					attribute = attributes[ 'morphTarget' + m ];

  					if ( attribute >= 0 ) {

  						_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglMorphTargetsBuffers[ influenceIndex ] );

  						state.enableAttribute( attribute );

  						_gl.vertexAttribPointer( attribute, 3, _gl.FLOAT, false, 0, 0 );

  					}

  					attribute = attributes[ 'morphNormal' + m ];

  					if ( attribute >= 0 && material.morphNormals ) {

  						_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryGroup.__webglMorphNormalsBuffers[ influenceIndex ] );

  						state.enableAttribute( attribute );

  						_gl.vertexAttribPointer( attribute, 3, _gl.FLOAT, false, 0, 0 );

  					}

  					object.__webglMorphTargetInfluences[ m ] = influences[ influenceIndex ];

  				} else {

  					/*
  					_gl.vertexAttribPointer( attributes[ "morphTarget" + m ], 3, _gl.FLOAT, false, 0, 0 );

  					if ( material.morphNormals ) {

  						_gl.vertexAttribPointer( attributes[ "morphNormal" + m ], 3, _gl.FLOAT, false, 0, 0 );

  					}
  					*/

  					object.__webglMorphTargetInfluences[ m ] = 0;

  				}

  			}

  		}

  		// load updated influences uniform

  		if ( material.program.uniforms.morphTargetInfluences !== null ) {

  			_gl.uniform1fv( material.program.uniforms.morphTargetInfluences, object.__webglMorphTargetInfluences );

  		}

  	}

  	// Sorting

  	function painterSortStable ( a, b ) {

  		if ( a.object.renderOrder !== b.object.renderOrder ) {

  			return a.object.renderOrder - b.object.renderOrder;

  		} else if ( a.material.id !== b.material.id ) {

  			return a.material.id - b.material.id;

  		} else if ( a.z !== b.z ) {

  			return a.z - b.z;

  		} else {

  			return a.id - b.id;

  		}

  	}

  	function reversePainterSortStable ( a, b ) {

  		if ( a.object.renderOrder !== b.object.renderOrder ) {

  			return a.object.renderOrder - b.object.renderOrder;

  		} if ( a.z !== b.z ) {

  			return b.z - a.z;

  		} else {

  			return a.id - b.id;

  		}

  	}

  	function numericalSort ( a, b ) {

  		return b[ 0 ] - a[ 0 ];

  	}

  	// Rendering

  	this.render = function ( scene, camera, renderTarget, forceClear ) {

  		if ( camera instanceof THREE$Camera === false ) {

  			THREE$error( 'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.' );
  			return;

  		}

  		var fog = scene.fog;

  		// reset caching for this frame

  		_currentGeometryProgram = '';
  		_currentMaterialId = - 1;
  		_currentCamera = null;
  		_lightsNeedUpdate = true;

  		// update scene graph

  		if ( scene.autoUpdate === true ) scene.updateMatrixWorld();

  		// update camera matrices and frustum

  		if ( camera.parent === undefined ) camera.updateMatrixWorld();

  		// update Skeleton objects

  		scene.traverse( function ( object ) {

  			if ( object instanceof THREE$SkinnedMesh ) {

  				object.skeleton.update();

  			}

  		} );

  		camera.matrixWorldInverse.getInverse( camera.matrixWorld );

  		_projScreenMatrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
  		_frustum.setFromMatrix( _projScreenMatrix );

  		lights.length = 0;
  		opaqueObjects.length = 0;
  		transparentObjects.length = 0;

  		sprites.length = 0;
  		lensFlares.length = 0;

  		projectObject( scene );

  		if ( _this.sortObjects === true ) {

  			opaqueObjects.sort( painterSortStable );
  			transparentObjects.sort( reversePainterSortStable );

  		}

  		// custom render plugins (pre pass)

  		shadowMapPlugin.render( scene, camera );

  		//

  		_this.info.render.calls = 0;
  		_this.info.render.vertices = 0;
  		_this.info.render.faces = 0;
  		_this.info.render.points = 0;

  		this.setRenderTarget( renderTarget );

  		if ( this.autoClear || forceClear ) {

  			this.clear( this.autoClearColor, this.autoClearDepth, this.autoClearStencil );

  		}

  		// set matrices for immediate objects

  		for ( var i = 0, il = _webglObjectsImmediate.length; i < il; i ++ ) {

  			var webglObject = _webglObjectsImmediate[ i ];
  			var object = webglObject.object;

  			if ( object.visible ) {

  				setupMatrices( object, camera );

  				unrollImmediateBufferMaterial( webglObject );

  			}

  		}

  		if ( scene.overrideMaterial ) {

  			var overrideMaterial = scene.overrideMaterial;

  			setMaterial( overrideMaterial );

  			renderObjects( opaqueObjects, camera, lights, fog, overrideMaterial );
  			renderObjects( transparentObjects, camera, lights, fog, overrideMaterial );
  			renderObjectsImmediate( _webglObjectsImmediate, '', camera, lights, fog, overrideMaterial );

  		} else {

  			// opaque pass (front-to-back order)

  			state.setBlending( THREE$NoBlending );

  			renderObjects( opaqueObjects, camera, lights, fog, null );
  			renderObjectsImmediate( _webglObjectsImmediate, 'opaque', camera, lights, fog, null );

  			// transparent pass (back-to-front order)

  			renderObjects( transparentObjects, camera, lights, fog, null );
  			renderObjectsImmediate( _webglObjectsImmediate, 'transparent', camera, lights, fog, null );

  		}

  		// custom render plugins (post pass)

  		spritePlugin.render( scene, camera );
  		lensFlarePlugin.render( scene, camera, _currentWidth, _currentHeight );

  		// Generate mipmap if we're using any kind of mipmap filtering

  		if ( renderTarget && renderTarget.generateMipmaps && renderTarget.minFilter !== THREE$NearestFilter && renderTarget.minFilter !== THREE$LinearFilter ) {

  			updateRenderTargetMipmap( renderTarget );

  		}

  		// Ensure depth buffer writing is enabled so it can be cleared on next render

  		state.setDepthTest( true );
  		state.setDepthWrite( true );
  		state.setColorWrite( true );

  		// _gl.finish();

  	};

  	function projectObject( object ) {

  		if ( object.visible === false ) return;

  		if ( object instanceof THREE$Scene || object instanceof THREE$Group ) {

  			// skip

  		} else {

  			initObject( object );

  			if ( object instanceof THREE$Light ) {

  				lights.push( object );

  			} else if ( object instanceof THREE$Sprite ) {

  				sprites.push( object );

  			} else if ( object instanceof THREE$LensFlare ) {

  				lensFlares.push( object );

  			} else {

  				var webglObjects = _webglObjects[ object.id ];

  				if ( webglObjects && ( object.frustumCulled === false || _frustum.intersectsObject( object ) === true ) ) {

  					for ( var i = 0, l = webglObjects.length; i < l; i ++ ) {

  						var webglObject = webglObjects[ i ];

  						unrollBufferMaterial( webglObject );

  						webglObject.render = true;

  						if ( _this.sortObjects === true ) {

  							_vector3.setFromMatrixPosition( object.matrixWorld );
  							_vector3.applyProjection( _projScreenMatrix );

  							webglObject.z = _vector3.z;

  						}

  					}

  				}

  			}

  		}

  		for ( var i = 0, l = object.children.length; i < l; i ++ ) {

  			projectObject( object.children[ i ] );

  		}

  	}

  	function renderObjects( renderList, camera, lights, fog, overrideMaterial ) {

  		var material;

  		for ( var i = 0, l = renderList.length; i < l; i ++ ) {

  			var webglObject = renderList[ i ];

  			var object = webglObject.object;
  			var buffer = webglObject.buffer;

  			setupMatrices( object, camera );

  			if ( overrideMaterial ) {

  				material = overrideMaterial;

  			} else {

  				material = webglObject.material;

  				if ( ! material ) continue;

  				setMaterial( material );

  			}

  			_this.setMaterialFaces( material );

  			if ( buffer instanceof THREE$BufferGeometry ) {

  				_this.renderBufferDirect( camera, lights, fog, material, buffer, object );

  			} else {

  				_this.renderBuffer( camera, lights, fog, material, buffer, object );

  			}

  		}

  	}

  	function renderObjectsImmediate ( renderList, materialType, camera, lights, fog, overrideMaterial ) {

  		var material;

  		for ( var i = 0, l = renderList.length; i < l; i ++ ) {

  			var webglObject = renderList[ i ];
  			var object = webglObject.object;

  			if ( object.visible ) {

  				if ( overrideMaterial ) {

  					material = overrideMaterial;

  				} else {

  					material = webglObject[ materialType ];

  					if ( ! material ) continue;

  					setMaterial( material );

  				}

  				_this.renderImmediateObject( camera, lights, fog, material, object );

  			}

  		}

  	}

  	this.renderImmediateObject = function ( camera, lights, fog, material, object ) {

  		var program = setProgram( camera, lights, fog, material, object );

  		_currentGeometryProgram = '';

  		_this.setMaterialFaces( material );

  		if ( object.immediateRenderCallback ) {

  			object.immediateRenderCallback( program, _gl, _frustum );

  		} else {

  			object.render( function ( object ) { _this.renderBufferImmediate( object, program, material ); } );

  		}

  	};

  	function unrollImmediateBufferMaterial ( globject ) {

  		var object = globject.object,
  			material = object.material;

  		if ( material.transparent ) {

  			globject.transparent = material;
  			globject.opaque = null;

  		} else {

  			globject.opaque = material;
  			globject.transparent = null;

  		}

  	}

  	function unrollBufferMaterial ( globject ) {

  		var object = globject.object;
  		var buffer = globject.buffer;

  		var geometry = object.geometry;
  		var material = object.material;

  		if ( material instanceof THREE$MeshFaceMaterial ) {

  			var materialIndex = geometry instanceof THREE$BufferGeometry ? 0 : buffer.materialIndex;

  			material = material.materials[ materialIndex ];

  			globject.material = material;

  			if ( material.transparent ) {

  				transparentObjects.push( globject );

  			} else {

  				opaqueObjects.push( globject );

  			}

  		} else if ( material ) {

  			globject.material = material;

  			if ( material.transparent ) {

  				transparentObjects.push( globject );

  			} else {

  				opaqueObjects.push( globject );

  			}

  		}

  	}

  	function initObject( object ) {

  		if ( object.__webglInit === undefined ) {

  			object.__webglInit = true;
  			object._modelViewMatrix = new THREE$Matrix4();
  			object._normalMatrix = new THREE$Matrix3();

  			object.addEventListener( 'removed', onObjectRemoved );

  		}

  		var geometry = object.geometry;

  		if ( geometry === undefined ) {

  			// ImmediateRenderObject

  		} else if ( geometry.__webglInit === undefined ) {

  			geometry.__webglInit = true;
  			geometry.addEventListener( 'dispose', onGeometryDispose );

  			if ( geometry instanceof THREE$BufferGeometry ) {

  				_this.info.memory.geometries ++;

  			} else if ( object instanceof THREE$Mesh ) {

  				initGeometryGroups( object, geometry );

  			} else if ( object instanceof THREE$Line ) {

  				if ( geometry.__webglVertexBuffer === undefined ) {

  					createLineBuffers( geometry );
  					initLineBuffers( geometry, object );

  					geometry.verticesNeedUpdate = true;
  					geometry.colorsNeedUpdate = true;
  					geometry.lineDistancesNeedUpdate = true;

  				}

  			} else if ( object instanceof THREE$PointCloud ) {

  				if ( geometry.__webglVertexBuffer === undefined ) {

  					createParticleBuffers( geometry );
  					initParticleBuffers( geometry, object );

  					geometry.verticesNeedUpdate = true;
  					geometry.colorsNeedUpdate = true;

  				}

  			}

  		}

  		if ( object.__webglActive === undefined) {

  			object.__webglActive = true;

  			if ( object instanceof THREE$Mesh ) {

  				if ( geometry instanceof THREE$BufferGeometry ) {

  					addBuffer( _webglObjects, geometry, object );

  				} else if ( geometry instanceof THREE$Geometry ) {

  					var geometryGroupsList = geometryGroups[ geometry.id ];

  					for ( var i = 0,l = geometryGroupsList.length; i < l; i ++ ) {

  						addBuffer( _webglObjects, geometryGroupsList[ i ], object );

  					}

  				}

  			} else if ( object instanceof THREE$Line || object instanceof THREE$PointCloud ) {

  				addBuffer( _webglObjects, geometry, object );

  			} else if ( object instanceof THREE$ImmediateRenderObject || object.immediateRenderCallback ) {

  				addBufferImmediate( _webglObjectsImmediate, object );

  			}

  		}

  	}

  	// Geometry splitting

  	var geometryGroups = {};
  	var geometryGroupCounter = 0;

  	function makeGroups( geometry, usesFaceMaterial ) {

  		var maxVerticesInGroup = extensions.get( 'OES_element_index_uint' ) ? 4294967296 : 65535;

  		var groupHash, hash_map = {};

  		var numMorphTargets = geometry.morphTargets.length;
  		var numMorphNormals = geometry.morphNormals.length;

  		var group;
  		var groups = {};
  		var groupsList = [];

  		for ( var f = 0, fl = geometry.faces.length; f < fl; f ++ ) {

  			var face = geometry.faces[ f ];
  			var materialIndex = usesFaceMaterial ? face.materialIndex : 0;

  			if ( ! ( materialIndex in hash_map ) ) {

  				hash_map[ materialIndex ] = { hash: materialIndex, counter: 0 };

  			}

  			groupHash = hash_map[ materialIndex ].hash + '_' + hash_map[ materialIndex ].counter;

  			if ( ! ( groupHash in groups ) ) {

  				group = {
  					id: geometryGroupCounter ++,
  					faces3: [],
  					materialIndex: materialIndex,
  					vertices: 0,
  					numMorphTargets: numMorphTargets,
  					numMorphNormals: numMorphNormals
  				};

  				groups[ groupHash ] = group;
  				groupsList.push( group );

  			}

  			if ( groups[ groupHash ].vertices + 3 > maxVerticesInGroup ) {

  				hash_map[ materialIndex ].counter += 1;
  				groupHash = hash_map[ materialIndex ].hash + '_' + hash_map[ materialIndex ].counter;

  				if ( ! ( groupHash in groups ) ) {

  					group = {
  						id: geometryGroupCounter ++,
  						faces3: [],
  						materialIndex: materialIndex,
  						vertices: 0,
  						numMorphTargets: numMorphTargets,
  						numMorphNormals: numMorphNormals
  					};

  					groups[ groupHash ] = group;
  					groupsList.push( group );

  				}

  			}

  			groups[ groupHash ].faces3.push( f );
  			groups[ groupHash ].vertices += 3;

  		}

  		return groupsList;

  	}

  	function initGeometryGroups( object, geometry ) {

  		var material = object.material, addBuffers = false;

  		if ( geometryGroups[ geometry.id ] === undefined || geometry.groupsNeedUpdate === true ) {

  			delete _webglObjects[ object.id ];

  			geometryGroups[ geometry.id ] = makeGroups( geometry, material instanceof THREE$MeshFaceMaterial );

  			geometry.groupsNeedUpdate = false;

  		}

  		var geometryGroupsList = geometryGroups[ geometry.id ];

  		// create separate VBOs per geometry chunk

  		for ( var i = 0, il = geometryGroupsList.length; i < il; i ++ ) {

  			var geometryGroup = geometryGroupsList[ i ];

  			// initialise VBO on the first access

  			if ( geometryGroup.__webglVertexBuffer === undefined ) {

  				createMeshBuffers( geometryGroup );
  				initMeshBuffers( geometryGroup, object );

  				geometry.verticesNeedUpdate = true;
  				geometry.morphTargetsNeedUpdate = true;
  				geometry.elementsNeedUpdate = true;
  				geometry.uvsNeedUpdate = true;
  				geometry.normalsNeedUpdate = true;
  				geometry.tangentsNeedUpdate = true;
  				geometry.colorsNeedUpdate = true;

  				addBuffers = true;

  			} else {

  				addBuffers = false;

  			}

  			if ( addBuffers || object.__webglActive === undefined ) {

  				addBuffer( _webglObjects, geometryGroup, object );

  			}

  		}

  		object.__webglActive = true;

  	}

  	function addBuffer( objlist, buffer, object ) {

  		var id = object.id;
  		objlist[id] = objlist[id] || [];
  		objlist[id].push(
  			{
  				id: id,
  				buffer: buffer,
  				object: object,
  				material: null,
  				z: 0
  			}
  		);

  	};

  	function addBufferImmediate( objlist, object ) {

  		objlist.push(
  			{
  				id: null,
  				object: object,
  				opaque: null,
  				transparent: null,
  				z: 0
  			}
  		);

  	};

  	// Objects updates

  	function updateObject( object ) {

  		var geometry = object.geometry;

  		if ( geometry instanceof THREE$BufferGeometry ) {

  			var attributes = geometry.attributes;
  			var attributesKeys = geometry.attributesKeys;

  			for ( var i = 0, l = attributesKeys.length; i < l; i ++ ) {

  				var key = attributesKeys[ i ];
  				var attribute = attributes[ key ];
  				var bufferType = ( key === 'index' ) ? _gl.ELEMENT_ARRAY_BUFFER : _gl.ARRAY_BUFFER;

  				if ( attribute.buffer === undefined ) {

  					attribute.buffer = _gl.createBuffer();
  					_gl.bindBuffer( bufferType, attribute.buffer );
  					_gl.bufferData( bufferType, attribute.array, ( attribute instanceof THREE$DynamicBufferAttribute ) ? _gl.DYNAMIC_DRAW : _gl.STATIC_DRAW );

  					attribute.needsUpdate = false;

  				} else if ( attribute.needsUpdate === true ) {

  					_gl.bindBuffer( bufferType, attribute.buffer );

  					if ( attribute.updateRange === undefined || attribute.updateRange.count === -1 ) { // Not using update ranges

  						_gl.bufferSubData( bufferType, 0, attribute.array );

  					} else if ( attribute.updateRange.count === 0 ) {

  						console.error( 'THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually.' );

  					} else {

  						_gl.bufferSubData( bufferType, attribute.updateRange.offset * attribute.array.BYTES_PER_ELEMENT,
  										   attribute.array.subarray( attribute.updateRange.offset, attribute.updateRange.offset + attribute.updateRange.count ) );

  						attribute.updateRange.count = 0; // reset range

  					}

  					attribute.needsUpdate = false;

  				}

  			}

  		} else if ( object instanceof THREE$Mesh ) {

  			// check all geometry groups

  			if ( geometry.groupsNeedUpdate === true ) {

  				initGeometryGroups( object, geometry );

  			}

  			var geometryGroupsList = geometryGroups[ geometry.id ];

  			for ( var i = 0, il = geometryGroupsList.length; i < il; i ++ ) {

  				var geometryGroup = geometryGroupsList[ i ];
  				var material = getBufferMaterial( object, geometryGroup );

  				var customAttributesDirty = material.attributes && areCustomAttributesDirty( material );

  				if ( geometry.verticesNeedUpdate || geometry.morphTargetsNeedUpdate || geometry.elementsNeedUpdate ||
  					 geometry.uvsNeedUpdate || geometry.normalsNeedUpdate ||
  					 geometry.colorsNeedUpdate || geometry.tangentsNeedUpdate || customAttributesDirty ) {

  					setMeshBuffers( geometryGroup, object, _gl.DYNAMIC_DRAW, ! geometry.dynamic, material );

  				}

  			}

  			geometry.verticesNeedUpdate = false;
  			geometry.morphTargetsNeedUpdate = false;
  			geometry.elementsNeedUpdate = false;
  			geometry.uvsNeedUpdate = false;
  			geometry.normalsNeedUpdate = false;
  			geometry.colorsNeedUpdate = false;
  			geometry.tangentsNeedUpdate = false;

  			material.attributes && clearCustomAttributes( material );

  		} else if ( object instanceof THREE$Line ) {

  			var material = getBufferMaterial( object, geometry );
  			var customAttributesDirty = material.attributes && areCustomAttributesDirty( material );

  			if ( geometry.verticesNeedUpdate || geometry.colorsNeedUpdate || geometry.lineDistancesNeedUpdate || customAttributesDirty ) {

  				setLineBuffers( geometry, _gl.DYNAMIC_DRAW );

  			}

  			geometry.verticesNeedUpdate = false;
  			geometry.colorsNeedUpdate = false;
  			geometry.lineDistancesNeedUpdate = false;

  			material.attributes && clearCustomAttributes( material );

  		} else if ( object instanceof THREE$PointCloud ) {

  			var material = getBufferMaterial( object, geometry );
  			var customAttributesDirty = material.attributes && areCustomAttributesDirty( material );

  			if ( geometry.verticesNeedUpdate || geometry.colorsNeedUpdate || customAttributesDirty ) {

  				setParticleBuffers( geometry, _gl.DYNAMIC_DRAW, object );

  			}

  			geometry.verticesNeedUpdate = false;
  			geometry.colorsNeedUpdate = false;

  			material.attributes && clearCustomAttributes( material );

  		}

  	}

  	// Objects updates - custom attributes check

  	function areCustomAttributesDirty( material ) {

  		for ( var name in material.attributes ) {

  			if ( material.attributes[ name ].needsUpdate ) return true;

  		}

  		return false;

  	}

  	function clearCustomAttributes( material ) {

  		for ( var name in material.attributes ) {

  			material.attributes[ name ].needsUpdate = false;

  		}

  	}

  	// Objects removal

  	function removeObject( object ) {

  		if ( object instanceof THREE$Mesh  ||
  			 object instanceof THREE$PointCloud ||
  			 object instanceof THREE$Line ) {

  			delete _webglObjects[ object.id ];

  		} else if ( object instanceof THREE$ImmediateRenderObject || object.immediateRenderCallback ) {

  			removeInstances( _webglObjectsImmediate, object );

  		}

  		delete object.__webglInit;
  		delete object._modelViewMatrix;
  		delete object._normalMatrix;

  		delete object.__webglActive;

  	}

  	function removeInstances( objlist, object ) {

  		for ( var o = objlist.length - 1; o >= 0; o -- ) {

  			if ( objlist[ o ].object === object ) {

  				objlist.splice( o, 1 );

  			}

  		}

  	}

  	// Materials

  	var shaderIDs = {
  		MeshDepthMaterial: 'depth',
  		MeshNormalMaterial: 'normal',
  		MeshBasicMaterial: 'basic',
  		MeshLambertMaterial: 'lambert',
  		MeshPhongMaterial: 'phong',
  		LineBasicMaterial: 'basic',
  		LineDashedMaterial: 'dashed',
  		PointCloudMaterial: 'particle_basic'
  	};

  	function initMaterial( material, lights, fog, object ) {

  		material.addEventListener( 'dispose', onMaterialDispose );

  		var shaderID = shaderIDs[ material.type ];

  		if ( shaderID ) {

  			var shader = THREE$ShaderLib[ shaderID ];

  			material.__webglShader = {
  				uniforms: THREE$UniformsUtils.clone( shader.uniforms ),
  				vertexShader: shader.vertexShader,
  				fragmentShader: shader.fragmentShader
  			}

  		} else {

  			material.__webglShader = {
  				uniforms: material.uniforms,
  				vertexShader: material.vertexShader,
  				fragmentShader: material.fragmentShader
  			}

  		}

  		// heuristics to create shader parameters according to lights in the scene
  		// (not to blow over maxLights budget)

  		var maxLightCount = allocateLights( lights );
  		var maxShadows = allocateShadows( lights );
  		var maxBones = allocateBones( object );

  		var parameters = {

  			precision: _precision,
  			supportsVertexTextures: _supportsVertexTextures,

  			map: !! material.map,
  			envMap: !! material.envMap,
  			envMapMode: material.envMap && material.envMap.mapping,
  			lightMap: !! material.lightMap,
  			bumpMap: !! material.bumpMap,
  			normalMap: !! material.normalMap,
  			specularMap: !! material.specularMap,
  			alphaMap: !! material.alphaMap,

  			combine: material.combine,

  			vertexColors: material.vertexColors,

  			fog: fog,
  			useFog: material.fog,
  			fogExp: fog instanceof THREE$FogExp2,

  			flatShading: material.shading === THREE$FlatShading,

  			sizeAttenuation: material.sizeAttenuation,
  			logarithmicDepthBuffer: _logarithmicDepthBuffer,

  			skinning: material.skinning,
  			maxBones: maxBones,
  			useVertexTexture: _supportsBoneTextures && object && object.skeleton && object.skeleton.useVertexTexture,

  			morphTargets: material.morphTargets,
  			morphNormals: material.morphNormals,
  			maxMorphTargets: _this.maxMorphTargets,
  			maxMorphNormals: _this.maxMorphNormals,

  			maxDirLights: maxLightCount.directional,
  			maxPointLights: maxLightCount.point,
  			maxSpotLights: maxLightCount.spot,
  			maxHemiLights: maxLightCount.hemi,

  			maxShadows: maxShadows,
  			shadowMapEnabled: _this.shadowMapEnabled && object.receiveShadow && maxShadows > 0,
  			shadowMapType: _this.shadowMapType,
  			shadowMapDebug: _this.shadowMapDebug,
  			shadowMapCascade: _this.shadowMapCascade,

  			alphaTest: material.alphaTest,
  			metal: material.metal,
  			wrapAround: material.wrapAround,
  			doubleSided: material.side === THREE$DoubleSide,
  			flipSided: material.side === THREE$BackSide

  		};

  		// Generate code

  		var chunks = [];

  		if ( shaderID ) {

  			chunks.push( shaderID );

  		} else {

  			chunks.push( material.fragmentShader );
  			chunks.push( material.vertexShader );

  		}

  		if ( material.defines !== undefined ) {

  			for ( var name in material.defines ) {

  				chunks.push( name );
  				chunks.push( material.defines[ name ] );

  			}

  		}

  		for ( var name in parameters ) {

  			chunks.push( name );
  			chunks.push( parameters[ name ] );

  		}

  		var code = chunks.join();

  		var program;

  		// Check if code has been already compiled

  		for ( var p = 0, pl = _programs.length; p < pl; p ++ ) {

  			var programInfo = _programs[ p ];

  			if ( programInfo.code === code ) {

  				program = programInfo;
  				program.usedTimes ++;

  				break;

  			}

  		}

  		if ( program === undefined ) {

  			program = new THREE$WebGLProgram( _this, code, material, parameters );
  			_programs.push( program );

  			_this.info.memory.programs = _programs.length;

  		}

  		material.program = program;

  		var attributes = program.attributes;

  		if ( material.morphTargets ) {

  			material.numSupportedMorphTargets = 0;

  			var id, base = 'morphTarget';

  			for ( var i = 0; i < _this.maxMorphTargets; i ++ ) {

  				id = base + i;

  				if ( attributes[ id ] >= 0 ) {

  					material.numSupportedMorphTargets ++;

  				}

  			}

  		}

  		if ( material.morphNormals ) {

  			material.numSupportedMorphNormals = 0;

  			var id, base = 'morphNormal';

  			for ( i = 0; i < _this.maxMorphNormals; i ++ ) {

  				id = base + i;

  				if ( attributes[ id ] >= 0 ) {

  					material.numSupportedMorphNormals ++;

  				}

  			}

  		}

  		material.uniformsList = [];

  		for ( var u in material.__webglShader.uniforms ) {

  			var location = material.program.uniforms[ u ];

  			if ( location ) {
  				material.uniformsList.push( [ material.__webglShader.uniforms[ u ], location ] );
  			}

  		}

  	}

  	function setMaterial( material ) {

  		if ( material.transparent === true ) {

  			state.setBlending( material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha );

  		} else {

  			state.setBlending( THREE$NoBlending );

  		}

  		state.setDepthTest( material.depthTest );
  		state.setDepthWrite( material.depthWrite );
  		state.setColorWrite( material.colorWrite );
  		state.setPolygonOffset( material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits );

  	}

  	function setProgram( camera, lights, fog, material, object ) {

  		_usedTextureUnits = 0;

  		if ( material.needsUpdate ) {

  			if ( material.program ) deallocateMaterial( material );

  			initMaterial( material, lights, fog, object );
  			material.needsUpdate = false;

  		}

  		if ( material.morphTargets ) {

  			if ( ! object.__webglMorphTargetInfluences ) {

  				object.__webglMorphTargetInfluences = new Float32Array( _this.maxMorphTargets );

  			}

  		}

  		var refreshProgram = false;
  		var refreshMaterial = false;
  		var refreshLights = false;

  		var program = material.program,
  			p_uniforms = program.uniforms,
  			m_uniforms = material.__webglShader.uniforms;

  		if ( program.id !== _currentProgram ) {

  			_gl.useProgram( program.program );
  			_currentProgram = program.id;

  			refreshProgram = true;
  			refreshMaterial = true;
  			refreshLights = true;

  		}

  		if ( material.id !== _currentMaterialId ) {

  			if ( _currentMaterialId === -1 ) refreshLights = true;
  			_currentMaterialId = material.id;

  			refreshMaterial = true;

  		}

  		if ( refreshProgram || camera !== _currentCamera ) {

  			_gl.uniformMatrix4fv( p_uniforms.projectionMatrix, false, camera.projectionMatrix.elements );

  			if ( _logarithmicDepthBuffer ) {

  				_gl.uniform1f( p_uniforms.logDepthBufFC, 2.0 / ( Math.log( camera.far + 1.0 ) / Math.LN2 ) );

  			}


  			if ( camera !== _currentCamera ) _currentCamera = camera;

  			// load material specific uniforms
  			// (shader material also gets them for the sake of genericity)

  			if ( material instanceof THREE$ShaderMaterial ||
  				 material instanceof THREE$MeshPhongMaterial ||
  				 material.envMap ) {

  				if ( p_uniforms.cameraPosition !== null ) {

  					_vector3.setFromMatrixPosition( camera.matrixWorld );
  					_gl.uniform3f( p_uniforms.cameraPosition, _vector3.x, _vector3.y, _vector3.z );

  				}

  			}

  			if ( material instanceof THREE$MeshPhongMaterial ||
  				 material instanceof THREE$MeshLambertMaterial ||
  				 material instanceof THREE$MeshBasicMaterial ||
  				 material instanceof THREE$ShaderMaterial ||
  				 material.skinning ) {

  				if ( p_uniforms.viewMatrix !== null ) {

  					_gl.uniformMatrix4fv( p_uniforms.viewMatrix, false, camera.matrixWorldInverse.elements );

  				}

  			}

  		}

  		// skinning uniforms must be set even if material didn't change
  		// auto-setting of texture unit for bone texture must go before other textures
  		// not sure why, but otherwise weird things happen

  		if ( material.skinning ) {

  			if ( object.bindMatrix && p_uniforms.bindMatrix !== null ) {

  				_gl.uniformMatrix4fv( p_uniforms.bindMatrix, false, object.bindMatrix.elements );

  			}

  			if ( object.bindMatrixInverse && p_uniforms.bindMatrixInverse !== null ) {

  				_gl.uniformMatrix4fv( p_uniforms.bindMatrixInverse, false, object.bindMatrixInverse.elements );

  			}

  			if ( _supportsBoneTextures && object.skeleton && object.skeleton.useVertexTexture ) {

  				if ( p_uniforms.boneTexture !== null ) {

  					var textureUnit = getTextureUnit();

  					_gl.uniform1i( p_uniforms.boneTexture, textureUnit );
  					_this.setTexture( object.skeleton.boneTexture, textureUnit );

  				}

  				if ( p_uniforms.boneTextureWidth !== null ) {

  					_gl.uniform1i( p_uniforms.boneTextureWidth, object.skeleton.boneTextureWidth );

  				}

  				if ( p_uniforms.boneTextureHeight !== null ) {

  					_gl.uniform1i( p_uniforms.boneTextureHeight, object.skeleton.boneTextureHeight );

  				}

  			} else if ( object.skeleton && object.skeleton.boneMatrices ) {

  				if ( p_uniforms.boneGlobalMatrices !== null ) {

  					_gl.uniformMatrix4fv( p_uniforms.boneGlobalMatrices, false, object.skeleton.boneMatrices );

  				}

  			}

  		}

  		if ( refreshMaterial ) {

  			// refresh uniforms common to several materials

  			if ( fog && material.fog ) {

  				refreshUniformsFog( m_uniforms, fog );

  			}

  			if ( material instanceof THREE$MeshPhongMaterial ||
  				 material instanceof THREE$MeshLambertMaterial ||
  				 material.lights ) {

  				if ( _lightsNeedUpdate ) {

  					refreshLights = true;
  					setupLights( lights );
  					_lightsNeedUpdate = false;
  				}

  				if ( refreshLights ) {
  					refreshUniformsLights( m_uniforms, _lights );
  					markUniformsLightsNeedsUpdate( m_uniforms, true );
  				} else {
  					markUniformsLightsNeedsUpdate( m_uniforms, false );
  				}

  			}

  			if ( material instanceof THREE$MeshBasicMaterial ||
  				 material instanceof THREE$MeshLambertMaterial ||
  				 material instanceof THREE$MeshPhongMaterial ) {

  				refreshUniformsCommon( m_uniforms, material );

  			}

  			// refresh single material specific uniforms

  			if ( material instanceof THREE$LineBasicMaterial ) {

  				refreshUniformsLine( m_uniforms, material );

  			} else if ( material instanceof THREE$LineDashedMaterial ) {

  				refreshUniformsLine( m_uniforms, material );
  				refreshUniformsDash( m_uniforms, material );

  			} else if ( material instanceof THREE$PointCloudMaterial ) {

  				refreshUniformsParticle( m_uniforms, material );

  			} else if ( material instanceof THREE$MeshPhongMaterial ) {

  				refreshUniformsPhong( m_uniforms, material );

  			} else if ( material instanceof THREE$MeshLambertMaterial ) {

  				refreshUniformsLambert( m_uniforms, material );

  			} else if ( material instanceof THREE$MeshDepthMaterial ) {

  				m_uniforms.mNear.value = camera.near;
  				m_uniforms.mFar.value = camera.far;
  				m_uniforms.opacity.value = material.opacity;

  			} else if ( material instanceof THREE$MeshNormalMaterial ) {

  				m_uniforms.opacity.value = material.opacity;

  			}

  			if ( object.receiveShadow && ! material._shadowPass ) {

  				refreshUniformsShadow( m_uniforms, lights );

  			}

  			// load common uniforms

  			loadUniformsGeneric( material.uniformsList );

  		}

  		loadUniformsMatrices( p_uniforms, object );

  		if ( p_uniforms.modelMatrix !== null ) {

  			_gl.uniformMatrix4fv( p_uniforms.modelMatrix, false, object.matrixWorld.elements );

  		}

  		return program;

  	}

  	// Uniforms (refresh uniforms objects)

  	function refreshUniformsCommon ( uniforms, material ) {

  		uniforms.opacity.value = material.opacity;

  		uniforms.diffuse.value = material.color;

  		uniforms.map.value = material.map;
  		uniforms.lightMap.value = material.lightMap;
  		uniforms.specularMap.value = material.specularMap;
  		uniforms.alphaMap.value = material.alphaMap;

  		if ( material.bumpMap ) {

  			uniforms.bumpMap.value = material.bumpMap;
  			uniforms.bumpScale.value = material.bumpScale;

  		}

  		if ( material.normalMap ) {

  			uniforms.normalMap.value = material.normalMap;
  			uniforms.normalScale.value.copy( material.normalScale );

  		}

  		// uv repeat and offset setting priorities
  		//  1. color map
  		//  2. specular map
  		//  3. normal map
  		//  4. bump map
  		//  5. alpha map

  		var uvScaleMap;

  		if ( material.map ) {

  			uvScaleMap = material.map;

  		} else if ( material.specularMap ) {

  			uvScaleMap = material.specularMap;

  		} else if ( material.normalMap ) {

  			uvScaleMap = material.normalMap;

  		} else if ( material.bumpMap ) {

  			uvScaleMap = material.bumpMap;

  		} else if ( material.alphaMap ) {

  			uvScaleMap = material.alphaMap;

  		}

  		if ( uvScaleMap !== undefined ) {

  			var offset = uvScaleMap.offset;
  			var repeat = uvScaleMap.repeat;

  			uniforms.offsetRepeat.value.set( offset.x, offset.y, repeat.x, repeat.y );

  		}

  		uniforms.envMap.value = material.envMap;
  		uniforms.flipEnvMap.value = ( material.envMap instanceof THREE$WebGLRenderTargetCube ) ? 1 : - 1;

  		uniforms.reflectivity.value = material.reflectivity;
  		uniforms.refractionRatio.value = material.refractionRatio;

  	}

  	function refreshUniformsLine ( uniforms, material ) {

  		uniforms.diffuse.value = material.color;
  		uniforms.opacity.value = material.opacity;

  	}

  	function refreshUniformsDash ( uniforms, material ) {

  		uniforms.dashSize.value = material.dashSize;
  		uniforms.totalSize.value = material.dashSize + material.gapSize;
  		uniforms.scale.value = material.scale;

  	}

  	function refreshUniformsParticle ( uniforms, material ) {

  		uniforms.psColor.value = material.color;
  		uniforms.opacity.value = material.opacity;
  		uniforms.size.value = material.size;
  		uniforms.scale.value = _canvas.height / 2.0; // TODO: Cache this.

  		uniforms.map.value = material.map;

  		if ( material.map !== null ) {

  			var offset = material.map.offset;
  			var repeat = material.map.repeat;

  			uniforms.offsetRepeat.value.set( offset.x, offset.y, repeat.x, repeat.y );

  		}

  	}

  	function refreshUniformsFog ( uniforms, fog ) {

  		uniforms.fogColor.value = fog.color;

  		if ( fog instanceof THREE$Fog ) {

  			uniforms.fogNear.value = fog.near;
  			uniforms.fogFar.value = fog.far;

  		} else if ( fog instanceof THREE$FogExp2 ) {

  			uniforms.fogDensity.value = fog.density;

  		}

  	}

  	function refreshUniformsPhong ( uniforms, material ) {

  		uniforms.shininess.value = material.shininess;

  		uniforms.emissive.value = material.emissive;
  		uniforms.specular.value = material.specular;

  		if ( material.wrapAround ) {

  			uniforms.wrapRGB.value.copy( material.wrapRGB );

  		}

  	}

  	function refreshUniformsLambert ( uniforms, material ) {

  		uniforms.emissive.value = material.emissive;

  		if ( material.wrapAround ) {

  			uniforms.wrapRGB.value.copy( material.wrapRGB );

  		}

  	}

  	function refreshUniformsLights ( uniforms, lights ) {

  		uniforms.ambientLightColor.value = lights.ambient;

  		uniforms.directionalLightColor.value = lights.directional.colors;
  		uniforms.directionalLightDirection.value = lights.directional.positions;

  		uniforms.pointLightColor.value = lights.point.colors;
  		uniforms.pointLightPosition.value = lights.point.positions;
  		uniforms.pointLightDistance.value = lights.point.distances;
  		uniforms.pointLightDecay.value = lights.point.decays;

  		uniforms.spotLightColor.value = lights.spot.colors;
  		uniforms.spotLightPosition.value = lights.spot.positions;
  		uniforms.spotLightDistance.value = lights.spot.distances;
  		uniforms.spotLightDirection.value = lights.spot.directions;
  		uniforms.spotLightAngleCos.value = lights.spot.anglesCos;
  		uniforms.spotLightExponent.value = lights.spot.exponents;
  		uniforms.spotLightDecay.value = lights.spot.decays;

  		uniforms.hemisphereLightSkyColor.value = lights.hemi.skyColors;
  		uniforms.hemisphereLightGroundColor.value = lights.hemi.groundColors;
  		uniforms.hemisphereLightDirection.value = lights.hemi.positions;

  	}

  	// If uniforms are marked as clean, they don't need to be loaded to the GPU.

  	function markUniformsLightsNeedsUpdate ( uniforms, value ) {

  		uniforms.ambientLightColor.needsUpdate = value;

  		uniforms.directionalLightColor.needsUpdate = value;
  		uniforms.directionalLightDirection.needsUpdate = value;

  		uniforms.pointLightColor.needsUpdate = value;
  		uniforms.pointLightPosition.needsUpdate = value;
  		uniforms.pointLightDistance.needsUpdate = value;
  		uniforms.pointLightDecay.needsUpdate = value;

  		uniforms.spotLightColor.needsUpdate = value;
  		uniforms.spotLightPosition.needsUpdate = value;
  		uniforms.spotLightDistance.needsUpdate = value;
  		uniforms.spotLightDirection.needsUpdate = value;
  		uniforms.spotLightAngleCos.needsUpdate = value;
  		uniforms.spotLightExponent.needsUpdate = value;
  		uniforms.spotLightDecay.needsUpdate = value;

  		uniforms.hemisphereLightSkyColor.needsUpdate = value;
  		uniforms.hemisphereLightGroundColor.needsUpdate = value;
  		uniforms.hemisphereLightDirection.needsUpdate = value;

  	}

  	function refreshUniformsShadow ( uniforms, lights ) {

  		if ( uniforms.shadowMatrix ) {

  			var j = 0;

  			for ( var i = 0, il = lights.length; i < il; i ++ ) {

  				var light = lights[ i ];

  				if ( ! light.castShadow ) continue;

  				if ( light instanceof THREE$SpotLight || ( light instanceof THREE$DirectionalLight && ! light.shadowCascade ) ) {

  					uniforms.shadowMap.value[ j ] = light.shadowMap;
  					uniforms.shadowMapSize.value[ j ] = light.shadowMapSize;

  					uniforms.shadowMatrix.value[ j ] = light.shadowMatrix;

  					uniforms.shadowDarkness.value[ j ] = light.shadowDarkness;
  					uniforms.shadowBias.value[ j ] = light.shadowBias;

  					j ++;

  				}

  			}

  		}

  	}

  	// Uniforms (load to GPU)

  	function loadUniformsMatrices ( uniforms, object ) {

  		_gl.uniformMatrix4fv( uniforms.modelViewMatrix, false, object._modelViewMatrix.elements );

  		if ( uniforms.normalMatrix ) {

  			_gl.uniformMatrix3fv( uniforms.normalMatrix, false, object._normalMatrix.elements );

  		}

  	}

  	function getTextureUnit() {

  		var textureUnit = _usedTextureUnits;

  		if ( textureUnit >= _maxTextures ) {

  			THREE$warn( 'WebGLRenderer: trying to use ' + textureUnit + ' texture units while this GPU supports only ' + _maxTextures );

  		}

  		_usedTextureUnits += 1;

  		return textureUnit;

  	}

  	function loadUniformsGeneric ( uniforms ) {

  		var texture, textureUnit, offset;

  		for ( var j = 0, jl = uniforms.length; j < jl; j ++ ) {

  			var uniform = uniforms[ j ][ 0 ];

  			// needsUpdate property is not added to all uniforms.
  			if ( uniform.needsUpdate === false ) continue;

  			var type = uniform.type;
  			var value = uniform.value;
  			var location = uniforms[ j ][ 1 ];

  			switch ( type ) {

  				case '1i':
  					_gl.uniform1i( location, value );
  					break;

  				case '1f':
  					_gl.uniform1f( location, value );
  					break;

  				case '2f':
  					_gl.uniform2f( location, value[ 0 ], value[ 1 ] );
  					break;

  				case '3f':
  					_gl.uniform3f( location, value[ 0 ], value[ 1 ], value[ 2 ] );
  					break;

  				case '4f':
  					_gl.uniform4f( location, value[ 0 ], value[ 1 ], value[ 2 ], value[ 3 ] );
  					break;

  				case '1iv':
  					_gl.uniform1iv( location, value );
  					break;

  				case '3iv':
  					_gl.uniform3iv( location, value );
  					break;

  				case '1fv':
  					_gl.uniform1fv( location, value );
  					break;

  				case '2fv':
  					_gl.uniform2fv( location, value );
  					break;

  				case '3fv':
  					_gl.uniform3fv( location, value );
  					break;

  				case '4fv':
  					_gl.uniform4fv( location, value );
  					break;

  				case 'Matrix3fv':
  					_gl.uniformMatrix3fv( location, false, value );
  					break;

  				case 'Matrix4fv':
  					_gl.uniformMatrix4fv( location, false, value );
  					break;

  				//

  				case 'i':

  					// single integer
  					_gl.uniform1i( location, value );

  					break;

  				case 'f':

  					// single float
  					_gl.uniform1f( location, value );

  					break;

  				case 'v2':

  					// single THREE.Vector2
  					_gl.uniform2f( location, value.x, value.y );

  					break;

  				case 'v3':

  					// single THREE.Vector3
  					_gl.uniform3f( location, value.x, value.y, value.z );

  					break;

  				case 'v4':

  					// single THREE.Vector4
  					_gl.uniform4f( location, value.x, value.y, value.z, value.w );

  					break;

  				case 'c':

  					// single THREE.Color
  					_gl.uniform3f( location, value.r, value.g, value.b );

  					break;

  				case 'iv1':

  					// flat array of integers (JS or typed array)
  					_gl.uniform1iv( location, value );

  					break;

  				case 'iv':

  					// flat array of integers with 3 x N size (JS or typed array)
  					_gl.uniform3iv( location, value );

  					break;

  				case 'fv1':

  					// flat array of floats (JS or typed array)
  					_gl.uniform1fv( location, value );

  					break;

  				case 'fv':

  					// flat array of floats with 3 x N size (JS or typed array)
  					_gl.uniform3fv( location, value );

  					break;

  				case 'v2v':

  					// array of THREE.Vector2

  					if ( uniform._array === undefined ) {

  						uniform._array = new Float32Array( 2 * value.length );

  					}

  					for ( var i = 0, il = value.length; i < il; i ++ ) {

  						offset = i * 2;

  						uniform._array[ offset ]   = value[ i ].x;
  						uniform._array[ offset + 1 ] = value[ i ].y;

  					}

  					_gl.uniform2fv( location, uniform._array );

  					break;

  				case 'v3v':

  					// array of THREE.Vector3

  					if ( uniform._array === undefined ) {

  						uniform._array = new Float32Array( 3 * value.length );

  					}

  					for ( var i = 0, il = value.length; i < il; i ++ ) {

  						offset = i * 3;

  						uniform._array[ offset ]   = value[ i ].x;
  						uniform._array[ offset + 1 ] = value[ i ].y;
  						uniform._array[ offset + 2 ] = value[ i ].z;

  					}

  					_gl.uniform3fv( location, uniform._array );

  					break;

  				case 'v4v':

  					// array of THREE.Vector4

  					if ( uniform._array === undefined ) {

  						uniform._array = new Float32Array( 4 * value.length );

  					}

  					for ( var i = 0, il = value.length; i < il; i ++ ) {

  						offset = i * 4;

  						uniform._array[ offset ]   = value[ i ].x;
  						uniform._array[ offset + 1 ] = value[ i ].y;
  						uniform._array[ offset + 2 ] = value[ i ].z;
  						uniform._array[ offset + 3 ] = value[ i ].w;

  					}

  					_gl.uniform4fv( location, uniform._array );

  					break;

  				case 'm3':

  					// single THREE.Matrix3
  					_gl.uniformMatrix3fv( location, false, value.elements );

  					break;

  				case 'm3v':

  					// array of THREE.Matrix3

  					if ( uniform._array === undefined ) {

  						uniform._array = new Float32Array( 9 * value.length );

  					}

  					for ( var i = 0, il = value.length; i < il; i ++ ) {

  						value[ i ].flattenToArrayOffset( uniform._array, i * 9 );

  					}

  					_gl.uniformMatrix3fv( location, false, uniform._array );

  					break;

  				case 'm4':

  					// single THREE.Matrix4
  					_gl.uniformMatrix4fv( location, false, value.elements );

  					break;

  				case 'm4v':

  					// array of THREE.Matrix4

  					if ( uniform._array === undefined ) {

  						uniform._array = new Float32Array( 16 * value.length );

  					}

  					for ( var i = 0, il = value.length; i < il; i ++ ) {

  						value[ i ].flattenToArrayOffset( uniform._array, i * 16 );

  					}

  					_gl.uniformMatrix4fv( location, false, uniform._array );

  					break;

  				case 't':

  					// single THREE.Texture (2d or cube)

  					texture = value;
  					textureUnit = getTextureUnit();

  					_gl.uniform1i( location, textureUnit );

  					if ( ! texture ) continue;

  					if ( texture instanceof THREE$CubeTexture ||
  					   ( texture.image instanceof Array && texture.image.length === 6 ) ) { // CompressedTexture can have Array in image :/

  						setCubeTexture( texture, textureUnit );

  					} else if ( texture instanceof THREE$WebGLRenderTargetCube ) {

  						setCubeTextureDynamic( texture, textureUnit );

  					} else {

  						_this.setTexture( texture, textureUnit );

  					}

  					break;

  				case 'tv':

  					// array of THREE.Texture (2d)

  					if ( uniform._array === undefined ) {

  						uniform._array = [];

  					}

  					for ( var i = 0, il = uniform.value.length; i < il; i ++ ) {

  						uniform._array[ i ] = getTextureUnit();

  					}

  					_gl.uniform1iv( location, uniform._array );

  					for ( var i = 0, il = uniform.value.length; i < il; i ++ ) {

  						texture = uniform.value[ i ];
  						textureUnit = uniform._array[ i ];

  						if ( ! texture ) continue;

  						_this.setTexture( texture, textureUnit );

  					}

  					break;

  				default:

  					THREE$warn( 'THREE.WebGLRenderer: Unknown uniform type: ' + type );

  			}

  		}

  	}

  	function setupMatrices ( object, camera ) {

  		object._modelViewMatrix.multiplyMatrices( camera.matrixWorldInverse, object.matrixWorld );
  		object._normalMatrix.getNormalMatrix( object._modelViewMatrix );

  	}

  	function setColorLinear( array, offset, color, intensity ) {

  		array[ offset ]     = color.r * intensity;
  		array[ offset + 1 ] = color.g * intensity;
  		array[ offset + 2 ] = color.b * intensity;

  	}

  	function setupLights ( lights ) {

  		var l, ll, light,
  		r = 0, g = 0, b = 0,
  		color, skyColor, groundColor,
  		intensity,
  		distance,

  		zlights = _lights,

  		dirColors = zlights.directional.colors,
  		dirPositions = zlights.directional.positions,

  		pointColors = zlights.point.colors,
  		pointPositions = zlights.point.positions,
  		pointDistances = zlights.point.distances,
  		pointDecays = zlights.point.decays,

  		spotColors = zlights.spot.colors,
  		spotPositions = zlights.spot.positions,
  		spotDistances = zlights.spot.distances,
  		spotDirections = zlights.spot.directions,
  		spotAnglesCos = zlights.spot.anglesCos,
  		spotExponents = zlights.spot.exponents,
  		spotDecays = zlights.spot.decays,

  		hemiSkyColors = zlights.hemi.skyColors,
  		hemiGroundColors = zlights.hemi.groundColors,
  		hemiPositions = zlights.hemi.positions,

  		dirLength = 0,
  		pointLength = 0,
  		spotLength = 0,
  		hemiLength = 0,

  		dirCount = 0,
  		pointCount = 0,
  		spotCount = 0,
  		hemiCount = 0,

  		dirOffset = 0,
  		pointOffset = 0,
  		spotOffset = 0,
  		hemiOffset = 0;

  		for ( l = 0, ll = lights.length; l < ll; l ++ ) {

  			light = lights[ l ];

  			if ( light.onlyShadow ) continue;

  			color = light.color;
  			intensity = light.intensity;
  			distance = light.distance;

  			if ( light instanceof THREE$AmbientLight ) {

  				if ( ! light.visible ) continue;

  				r += color.r;
  				g += color.g;
  				b += color.b;

  			} else if ( light instanceof THREE$DirectionalLight ) {

  				dirCount += 1;

  				if ( ! light.visible ) continue;

  				_direction.setFromMatrixPosition( light.matrixWorld );
  				_vector3.setFromMatrixPosition( light.target.matrixWorld );
  				_direction.sub( _vector3 );
  				_direction.normalize();

  				dirOffset = dirLength * 3;

  				dirPositions[ dirOffset ]     = _direction.x;
  				dirPositions[ dirOffset + 1 ] = _direction.y;
  				dirPositions[ dirOffset + 2 ] = _direction.z;

  				setColorLinear( dirColors, dirOffset, color, intensity );

  				dirLength += 1;

  			} else if ( light instanceof THREE$PointLight ) {

  				pointCount += 1;

  				if ( ! light.visible ) continue;

  				pointOffset = pointLength * 3;

  				setColorLinear( pointColors, pointOffset, color, intensity );

  				_vector3.setFromMatrixPosition( light.matrixWorld );

  				pointPositions[ pointOffset ]     = _vector3.x;
  				pointPositions[ pointOffset + 1 ] = _vector3.y;
  				pointPositions[ pointOffset + 2 ] = _vector3.z;

  				// distance is 0 if decay is 0, because there is no attenuation at all.
  				pointDistances[ pointLength ] = distance;
  				pointDecays[ pointLength ] = ( light.distance === 0 ) ? 0.0 : light.decay;

  				pointLength += 1;

  			} else if ( light instanceof THREE$SpotLight ) {

  				spotCount += 1;

  				if ( ! light.visible ) continue;

  				spotOffset = spotLength * 3;

  				setColorLinear( spotColors, spotOffset, color, intensity );

  				_direction.setFromMatrixPosition( light.matrixWorld );

  				spotPositions[ spotOffset ]     = _direction.x;
  				spotPositions[ spotOffset + 1 ] = _direction.y;
  				spotPositions[ spotOffset + 2 ] = _direction.z;

  				spotDistances[ spotLength ] = distance;

  				_vector3.setFromMatrixPosition( light.target.matrixWorld );
  				_direction.sub( _vector3 );
  				_direction.normalize();

  				spotDirections[ spotOffset ]     = _direction.x;
  				spotDirections[ spotOffset + 1 ] = _direction.y;
  				spotDirections[ spotOffset + 2 ] = _direction.z;

  				spotAnglesCos[ spotLength ] = Math.cos( light.angle );
  				spotExponents[ spotLength ] = light.exponent;
  				spotDecays[ spotLength ] = ( light.distance === 0 ) ? 0.0 : light.decay;

  				spotLength += 1;

  			} else if ( light instanceof THREE$HemisphereLight ) {

  				hemiCount += 1;

  				if ( ! light.visible ) continue;

  				_direction.setFromMatrixPosition( light.matrixWorld );
  				_direction.normalize();

  				hemiOffset = hemiLength * 3;

  				hemiPositions[ hemiOffset ]     = _direction.x;
  				hemiPositions[ hemiOffset + 1 ] = _direction.y;
  				hemiPositions[ hemiOffset + 2 ] = _direction.z;

  				skyColor = light.color;
  				groundColor = light.groundColor;

  				setColorLinear( hemiSkyColors, hemiOffset, skyColor, intensity );
  				setColorLinear( hemiGroundColors, hemiOffset, groundColor, intensity );

  				hemiLength += 1;

  			}

  		}

  		// null eventual remains from removed lights
  		// (this is to avoid if in shader)

  		for ( l = dirLength * 3, ll = Math.max( dirColors.length, dirCount * 3 ); l < ll; l ++ ) dirColors[ l ] = 0.0;
  		for ( l = pointLength * 3, ll = Math.max( pointColors.length, pointCount * 3 ); l < ll; l ++ ) pointColors[ l ] = 0.0;
  		for ( l = spotLength * 3, ll = Math.max( spotColors.length, spotCount * 3 ); l < ll; l ++ ) spotColors[ l ] = 0.0;
  		for ( l = hemiLength * 3, ll = Math.max( hemiSkyColors.length, hemiCount * 3 ); l < ll; l ++ ) hemiSkyColors[ l ] = 0.0;
  		for ( l = hemiLength * 3, ll = Math.max( hemiGroundColors.length, hemiCount * 3 ); l < ll; l ++ ) hemiGroundColors[ l ] = 0.0;

  		zlights.directional.length = dirLength;
  		zlights.point.length = pointLength;
  		zlights.spot.length = spotLength;
  		zlights.hemi.length = hemiLength;

  		zlights.ambient[ 0 ] = r;
  		zlights.ambient[ 1 ] = g;
  		zlights.ambient[ 2 ] = b;

  	}

  	// GL state setting

  	this.setFaceCulling = function ( cullFace, frontFaceDirection ) {

  		if ( cullFace === THREE$CullFaceNone ) {

  			_gl.disable( _gl.CULL_FACE );

  		} else {

  			if ( frontFaceDirection === THREE$FrontFaceDirectionCW ) {

  				_gl.frontFace( _gl.CW );

  			} else {

  				_gl.frontFace( _gl.CCW );

  			}

  			if ( cullFace === THREE$CullFaceBack ) {

  				_gl.cullFace( _gl.BACK );

  			} else if ( cullFace === THREE$CullFaceFront ) {

  				_gl.cullFace( _gl.FRONT );

  			} else {

  				_gl.cullFace( _gl.FRONT_AND_BACK );

  			}

  			_gl.enable( _gl.CULL_FACE );

  		}

  	};

  	this.setMaterialFaces = function ( material ) {

  		state.setDoubleSided( material.side === THREE$DoubleSide );
  		state.setFlipSided( material.side === THREE$BackSide );

  	};

  	// Textures

  	function setTextureParameters ( textureType, texture, isImagePowerOfTwo ) {

  		var extension;

  		if ( isImagePowerOfTwo ) {

  			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_S, paramThreeToGL( texture.wrapS ) );
  			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_T, paramThreeToGL( texture.wrapT ) );

  			_gl.texParameteri( textureType, _gl.TEXTURE_MAG_FILTER, paramThreeToGL( texture.magFilter ) );
  			_gl.texParameteri( textureType, _gl.TEXTURE_MIN_FILTER, paramThreeToGL( texture.minFilter ) );

  		} else {

  			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE );
  			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE );

  			if ( texture.wrapS !== THREE$ClampToEdgeWrapping || texture.wrapT !== THREE$ClampToEdgeWrapping ) {

  				THREE$warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( ' + texture.sourceFile + ' )' );

  			}

  			_gl.texParameteri( textureType, _gl.TEXTURE_MAG_FILTER, filterFallback( texture.magFilter ) );
  			_gl.texParameteri( textureType, _gl.TEXTURE_MIN_FILTER, filterFallback( texture.minFilter ) );

  			if ( texture.minFilter !== THREE$NearestFilter && texture.minFilter !== THREE$LinearFilter ) {

  				THREE$warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( ' + texture.sourceFile + ' )' );

  			}

  		}

  		extension = extensions.get( 'EXT_texture_filter_anisotropic' );

  		if ( extension && texture.type !== THREE$FloatType && texture.type !== THREE$HalfFloatType ) {

  			if ( texture.anisotropy > 1 || texture.__currentAnisotropy ) {

  				_gl.texParameterf( textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min( texture.anisotropy, _this.getMaxAnisotropy() ) );
  				texture.__currentAnisotropy = texture.anisotropy;

  			}

  		}

  	}

  	this.uploadTexture = function ( texture ) {

  		if ( texture.__webglInit === undefined ) {

  			texture.__webglInit = true;

  			texture.addEventListener( 'dispose', onTextureDispose );

  			texture.__webglTexture = _gl.createTexture();

  			_this.info.memory.textures ++;

  		}

  		_gl.bindTexture( _gl.TEXTURE_2D, texture.__webglTexture );

  		_gl.pixelStorei( _gl.UNPACK_FLIP_Y_WEBGL, texture.flipY );
  		_gl.pixelStorei( _gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha );
  		_gl.pixelStorei( _gl.UNPACK_ALIGNMENT, texture.unpackAlignment );

  		texture.image = clampToMaxSize( texture.image, _maxTextureSize );

  		var image = texture.image,
  		isImagePowerOfTwo = THREE$Math.isPowerOfTwo( image.width ) && THREE$Math.isPowerOfTwo( image.height ),
  		glFormat = paramThreeToGL( texture.format ),
  		glType = paramThreeToGL( texture.type );

  		setTextureParameters( _gl.TEXTURE_2D, texture, isImagePowerOfTwo );

  		var mipmap, mipmaps = texture.mipmaps;

  		if ( texture instanceof THREE$DataTexture ) {

  			// use manually created mipmaps if available
  			// if there are no manual mipmaps
  			// set 0 level mipmap and then use GL to generate other mipmap levels

  			if ( mipmaps.length > 0 && isImagePowerOfTwo ) {

  				for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

  					mipmap = mipmaps[ i ];
  					_gl.texImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

  				}

  				texture.generateMipmaps = false;

  			} else {

  				_gl.texImage2D( _gl.TEXTURE_2D, 0, glFormat, image.width, image.height, 0, glFormat, glType, image.data );

  			}

  		} else if ( texture instanceof THREE$CompressedTexture ) {

  			for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

  				mipmap = mipmaps[ i ];

  				if ( texture.format !== THREE$RGBAFormat && texture.format !== THREE$RGBFormat ) {

  					if ( getCompressedTextureFormats().indexOf( glFormat ) > -1 ) {

  						_gl.compressedTexImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, mipmap.data );

  					} else {

  						THREE$warn( "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()" );

  					}

  				} else {

  					_gl.texImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

  				}

  			}

  		} else { // regular Texture (image, video, canvas)

  			// use manually created mipmaps if available
  			// if there are no manual mipmaps
  			// set 0 level mipmap and then use GL to generate other mipmap levels

  			if ( mipmaps.length > 0 && isImagePowerOfTwo ) {

  				for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

  					mipmap = mipmaps[ i ];
  					_gl.texImage2D( _gl.TEXTURE_2D, i, glFormat, glFormat, glType, mipmap );

  				}

  				texture.generateMipmaps = false;

  			} else {

  				_gl.texImage2D( _gl.TEXTURE_2D, 0, glFormat, glFormat, glType, texture.image );

  			}

  		}

  		if ( texture.generateMipmaps && isImagePowerOfTwo ) _gl.generateMipmap( _gl.TEXTURE_2D );

  		texture.needsUpdate = false;

  		if ( texture.onUpdate ) texture.onUpdate();

  	};

  	this.setTexture = function ( texture, slot ) {

  		_gl.activeTexture( _gl.TEXTURE0 + slot );

  		if ( texture.needsUpdate ) {

  			_this.uploadTexture( texture );

  		} else {

  			_gl.bindTexture( _gl.TEXTURE_2D, texture.__webglTexture );

  		}

  	};

  	function clampToMaxSize ( image, maxSize ) {

  		if ( image.width > maxSize || image.height > maxSize ) {

  			// Warning: Scaling through the canvas will only work with images that use
  			// premultiplied alpha.

  			var scale = maxSize / Math.max( image.width, image.height );

  			var canvas = document.createElement( 'canvas' );
  			canvas.width = Math.floor( image.width * scale );
  			canvas.height = Math.floor( image.height * scale );

  			var context = canvas.getContext( '2d' );
  			context.drawImage( image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height );

  			THREE$warn( 'THREE.WebGLRenderer: image is too big (' + image.width + 'x' + image.height + '). Resized to ' + canvas.width + 'x' + canvas.height, image );

  			return canvas;

  		}

  		return image;

  	}

  	function setCubeTexture ( texture, slot ) {

  		if ( texture.image.length === 6 ) {

  			if ( texture.needsUpdate ) {

  				if ( ! texture.image.__webglTextureCube ) {

  					texture.addEventListener( 'dispose', onTextureDispose );

  					texture.image.__webglTextureCube = _gl.createTexture();

  					_this.info.memory.textures ++;

  				}

  				_gl.activeTexture( _gl.TEXTURE0 + slot );
  				_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, texture.image.__webglTextureCube );

  				_gl.pixelStorei( _gl.UNPACK_FLIP_Y_WEBGL, texture.flipY );

  				var isCompressed = texture instanceof THREE$CompressedTexture;
  				var isDataTexture = texture.image[ 0 ] instanceof THREE$DataTexture;

  				var cubeImage = [];

  				for ( var i = 0; i < 6; i ++ ) {

  					if ( _this.autoScaleCubemaps && ! isCompressed && ! isDataTexture ) {

  						cubeImage[ i ] = clampToMaxSize( texture.image[ i ], _maxCubemapSize );

  					} else {

  						cubeImage[ i ] = isDataTexture ? texture.image[ i ].image : texture.image[ i ];

  					}

  				}

  				var image = cubeImage[ 0 ],
  				isImagePowerOfTwo = THREE$Math.isPowerOfTwo( image.width ) && THREE$Math.isPowerOfTwo( image.height ),
  				glFormat = paramThreeToGL( texture.format ),
  				glType = paramThreeToGL( texture.type );

  				setTextureParameters( _gl.TEXTURE_CUBE_MAP, texture, isImagePowerOfTwo );

  				for ( var i = 0; i < 6; i ++ ) {

  					if ( ! isCompressed ) {

  						if ( isDataTexture ) {

  							_gl.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, cubeImage[ i ].width, cubeImage[ i ].height, 0, glFormat, glType, cubeImage[ i ].data );

  						} else {

  							_gl.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, glFormat, glType, cubeImage[ i ] );

  						}

  					} else {

  						var mipmap, mipmaps = cubeImage[ i ].mipmaps;

  						for ( var j = 0, jl = mipmaps.length; j < jl; j ++ ) {

  							mipmap = mipmaps[ j ];

  							if ( texture.format !== THREE$RGBAFormat && texture.format !== THREE$RGBFormat ) {

  								if ( getCompressedTextureFormats().indexOf( glFormat ) > -1 ) {

  									_gl.compressedTexImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, mipmap.data );

  								} else {

  									THREE$warn( "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()" );

  								}

  							} else {

  								_gl.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

  							}

  						}

  					}

  				}

  				if ( texture.generateMipmaps && isImagePowerOfTwo ) {

  					_gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );

  				}

  				texture.needsUpdate = false;

  				if ( texture.onUpdate ) texture.onUpdate();

  			} else {

  				_gl.activeTexture( _gl.TEXTURE0 + slot );
  				_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, texture.image.__webglTextureCube );

  			}

  		}

  	}

  	function setCubeTextureDynamic ( texture, slot ) {

  		_gl.activeTexture( _gl.TEXTURE0 + slot );
  		_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, texture.__webglTexture );

  	}

  	// Render targets

  	function setupFrameBuffer ( framebuffer, renderTarget, textureTarget ) {

  		_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );
  		_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, textureTarget, renderTarget.__webglTexture, 0 );

  	}

  	function setupRenderBuffer ( renderbuffer, renderTarget  ) {

  		_gl.bindRenderbuffer( _gl.RENDERBUFFER, renderbuffer );

  		if ( renderTarget.depthBuffer && ! renderTarget.stencilBuffer ) {

  			_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.DEPTH_COMPONENT16, renderTarget.width, renderTarget.height );
  			_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer );

  		/* For some reason this is not working. Defaulting to RGBA4.
  		} else if ( ! renderTarget.depthBuffer && renderTarget.stencilBuffer ) {

  			_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.STENCIL_INDEX8, renderTarget.width, renderTarget.height );
  			_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer );
  		*/
  		} else if ( renderTarget.depthBuffer && renderTarget.stencilBuffer ) {

  			_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.DEPTH_STENCIL, renderTarget.width, renderTarget.height );
  			_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer );

  		} else {

  			_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.RGBA4, renderTarget.width, renderTarget.height );

  		}

  	}

  	this.setRenderTarget = function ( renderTarget ) {

  		var isCube = ( renderTarget instanceof THREE$WebGLRenderTargetCube );

  		if ( renderTarget && renderTarget.__webglFramebuffer === undefined ) {

  			if ( renderTarget.depthBuffer === undefined ) renderTarget.depthBuffer = true;
  			if ( renderTarget.stencilBuffer === undefined ) renderTarget.stencilBuffer = true;

  			renderTarget.addEventListener( 'dispose', onRenderTargetDispose );

  			renderTarget.__webglTexture = _gl.createTexture();

  			_this.info.memory.textures ++;

  			// Setup texture, create render and frame buffers

  			var isTargetPowerOfTwo = THREE$Math.isPowerOfTwo( renderTarget.width ) && THREE$Math.isPowerOfTwo( renderTarget.height ),
  				glFormat = paramThreeToGL( renderTarget.format ),
  				glType = paramThreeToGL( renderTarget.type );

  			if ( isCube ) {

  				renderTarget.__webglFramebuffer = [];
  				renderTarget.__webglRenderbuffer = [];

  				_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, renderTarget.__webglTexture );
  				setTextureParameters( _gl.TEXTURE_CUBE_MAP, renderTarget, isTargetPowerOfTwo );

  				for ( var i = 0; i < 6; i ++ ) {

  					renderTarget.__webglFramebuffer[ i ] = _gl.createFramebuffer();
  					renderTarget.__webglRenderbuffer[ i ] = _gl.createRenderbuffer();

  					_gl.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null );

  					setupFrameBuffer( renderTarget.__webglFramebuffer[ i ], renderTarget, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i );
  					setupRenderBuffer( renderTarget.__webglRenderbuffer[ i ], renderTarget );

  				}

  				if ( isTargetPowerOfTwo ) _gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );

  			} else {

  				renderTarget.__webglFramebuffer = _gl.createFramebuffer();

  				if ( renderTarget.shareDepthFrom ) {

  					renderTarget.__webglRenderbuffer = renderTarget.shareDepthFrom.__webglRenderbuffer;

  				} else {

  					renderTarget.__webglRenderbuffer = _gl.createRenderbuffer();

  				}

  				_gl.bindTexture( _gl.TEXTURE_2D, renderTarget.__webglTexture );
  				setTextureParameters( _gl.TEXTURE_2D, renderTarget, isTargetPowerOfTwo );

  				_gl.texImage2D( _gl.TEXTURE_2D, 0, glFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null );

  				setupFrameBuffer( renderTarget.__webglFramebuffer, renderTarget, _gl.TEXTURE_2D );

  				if ( renderTarget.shareDepthFrom ) {

  					if ( renderTarget.depthBuffer && ! renderTarget.stencilBuffer ) {

  						_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderTarget.__webglRenderbuffer );

  					} else if ( renderTarget.depthBuffer && renderTarget.stencilBuffer ) {

  						_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderTarget.__webglRenderbuffer );

  					}

  				} else {

  					setupRenderBuffer( renderTarget.__webglRenderbuffer, renderTarget );

  				}

  				if ( isTargetPowerOfTwo ) _gl.generateMipmap( _gl.TEXTURE_2D );

  			}

  			// Release everything

  			if ( isCube ) {

  				_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, null );

  			} else {

  				_gl.bindTexture( _gl.TEXTURE_2D, null );

  			}

  			_gl.bindRenderbuffer( _gl.RENDERBUFFER, null );
  			_gl.bindFramebuffer( _gl.FRAMEBUFFER, null );

  		}

  		var framebuffer, width, height, vx, vy;

  		if ( renderTarget ) {

  			if ( isCube ) {

  				framebuffer = renderTarget.__webglFramebuffer[ renderTarget.activeCubeFace ];

  			} else {

  				framebuffer = renderTarget.__webglFramebuffer;

  			}

  			width = renderTarget.width;
  			height = renderTarget.height;

  			vx = 0;
  			vy = 0;

  		} else {

  			framebuffer = null;

  			width = _viewportWidth;
  			height = _viewportHeight;

  			vx = _viewportX;
  			vy = _viewportY;

  		}

  		if ( framebuffer !== _currentFramebuffer ) {

  			_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );
  			_gl.viewport( vx, vy, width, height );

  			_currentFramebuffer = framebuffer;

  		}

  		_currentWidth = width;
  		_currentHeight = height;

  	};

  	this.readRenderTargetPixels = function( renderTarget, x, y, width, height, buffer ) {

  		if ( ! ( renderTarget instanceof THREE$WebGLRenderTarget ) ) {

  			console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.' );
  			return;

  		}

  		if ( renderTarget.__webglFramebuffer ) {

  			if ( renderTarget.format !== THREE$RGBAFormat ) {

  				console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.' );
  				return;

  			}

  			var restore = false;

  			if ( renderTarget.__webglFramebuffer !== _currentFramebuffer ) {

  				_gl.bindFramebuffer( _gl.FRAMEBUFFER, renderTarget.__webglFramebuffer );

  				restore = true;

  			}

  			if ( _gl.checkFramebufferStatus( _gl.FRAMEBUFFER ) === _gl.FRAMEBUFFER_COMPLETE ) {

  				_gl.readPixels( x, y, width, height, _gl.RGBA, _gl.UNSIGNED_BYTE, buffer );

  			} else {

  				console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.' );

  			}

  			if ( restore ) {

  				_gl.bindFramebuffer( _gl.FRAMEBUFFER, _currentFramebuffer );

  			}

  		}

  	};

  	function updateRenderTargetMipmap ( renderTarget ) {

  		if ( renderTarget instanceof THREE$WebGLRenderTargetCube ) {

  			_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, renderTarget.__webglTexture );
  			_gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );
  			_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, null );

  		} else {

  			_gl.bindTexture( _gl.TEXTURE_2D, renderTarget.__webglTexture );
  			_gl.generateMipmap( _gl.TEXTURE_2D );
  			_gl.bindTexture( _gl.TEXTURE_2D, null );

  		}

  	}

  	// Fallback filters for non-power-of-2 textures

  	function filterFallback ( f ) {

  		if ( f === THREE$NearestFilter || f === THREE$NearestMipMapNearestFilter || f === THREE$NearestMipMapLinearFilter ) {

  			return _gl.NEAREST;

  		}

  		return _gl.LINEAR;

  	}

  	// Map three.js constants to WebGL constants

  	function paramThreeToGL ( p ) {

  		var extension;

  		if ( p === THREE$RepeatWrapping ) return _gl.REPEAT;
  		if ( p === THREE$ClampToEdgeWrapping ) return _gl.CLAMP_TO_EDGE;
  		if ( p === THREE$MirroredRepeatWrapping ) return _gl.MIRRORED_REPEAT;

  		if ( p === THREE$NearestFilter ) return _gl.NEAREST;
  		if ( p === THREE$NearestMipMapNearestFilter ) return _gl.NEAREST_MIPMAP_NEAREST;
  		if ( p === THREE$NearestMipMapLinearFilter ) return _gl.NEAREST_MIPMAP_LINEAR;

  		if ( p === THREE$LinearFilter ) return _gl.LINEAR;
  		if ( p === THREE$LinearMipMapNearestFilter ) return _gl.LINEAR_MIPMAP_NEAREST;
  		if ( p === THREE$LinearMipMapLinearFilter ) return _gl.LINEAR_MIPMAP_LINEAR;

  		if ( p === THREE$UnsignedByteType ) return _gl.UNSIGNED_BYTE;
  		if ( p === THREE$UnsignedShort4444Type ) return _gl.UNSIGNED_SHORT_4_4_4_4;
  		if ( p === THREE$UnsignedShort5551Type ) return _gl.UNSIGNED_SHORT_5_5_5_1;
  		if ( p === THREE$UnsignedShort565Type ) return _gl.UNSIGNED_SHORT_5_6_5;

  		if ( p === THREE$ByteType ) return _gl.BYTE;
  		if ( p === THREE$ShortType ) return _gl.SHORT;
  		if ( p === THREE$UnsignedShortType ) return _gl.UNSIGNED_SHORT;
  		if ( p === THREE$IntType ) return _gl.INT;
  		if ( p === THREE$UnsignedIntType ) return _gl.UNSIGNED_INT;
  		if ( p === THREE$FloatType ) return _gl.FLOAT;

  		extension = extensions.get( 'OES_texture_half_float' );

  		if ( extension !== null ) {

  			if ( p === THREE$HalfFloatType ) return extension.HALF_FLOAT_OES;

  		}

  		if ( p === THREE$AlphaFormat ) return _gl.ALPHA;
  		if ( p === THREE$RGBFormat ) return _gl.RGB;
  		if ( p === THREE$RGBAFormat ) return _gl.RGBA;
  		if ( p === THREE$LuminanceFormat ) return _gl.LUMINANCE;
  		if ( p === THREE$LuminanceAlphaFormat ) return _gl.LUMINANCE_ALPHA;

  		if ( p === THREE$AddEquation ) return _gl.FUNC_ADD;
  		if ( p === THREE$SubtractEquation ) return _gl.FUNC_SUBTRACT;
  		if ( p === THREE$ReverseSubtractEquation ) return _gl.FUNC_REVERSE_SUBTRACT;

  		if ( p === THREE$ZeroFactor ) return _gl.ZERO;
  		if ( p === THREE$OneFactor ) return _gl.ONE;
  		if ( p === THREE$SrcColorFactor ) return _gl.SRC_COLOR;
  		if ( p === THREE$OneMinusSrcColorFactor ) return _gl.ONE_MINUS_SRC_COLOR;
  		if ( p === THREE$SrcAlphaFactor ) return _gl.SRC_ALPHA;
  		if ( p === THREE$OneMinusSrcAlphaFactor ) return _gl.ONE_MINUS_SRC_ALPHA;
  		if ( p === THREE$DstAlphaFactor ) return _gl.DST_ALPHA;
  		if ( p === THREE$OneMinusDstAlphaFactor ) return _gl.ONE_MINUS_DST_ALPHA;

  		if ( p === THREE$DstColorFactor ) return _gl.DST_COLOR;
  		if ( p === THREE$OneMinusDstColorFactor ) return _gl.ONE_MINUS_DST_COLOR;
  		if ( p === THREE$SrcAlphaSaturateFactor ) return _gl.SRC_ALPHA_SATURATE;

  		extension = extensions.get( 'WEBGL_compressed_texture_s3tc' );

  		if ( extension !== null ) {

  			if ( p === THREE$RGB_S3TC_DXT1_Format ) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
  			if ( p === THREE$RGBA_S3TC_DXT1_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
  			if ( p === THREE$RGBA_S3TC_DXT3_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
  			if ( p === THREE$RGBA_S3TC_DXT5_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;

  		}

  		extension = extensions.get( 'WEBGL_compressed_texture_pvrtc' );

  		if ( extension !== null ) {

  			if ( p === THREE$RGB_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
  			if ( p === THREE$RGB_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
  			if ( p === THREE$RGBA_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
  			if ( p === THREE$RGBA_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

  		}

  		extension = extensions.get( 'EXT_blend_minmax' );

  		if ( extension !== null ) {

  			if ( p === THREE$MinEquation ) return extension.MIN_EXT;
  			if ( p === THREE$MaxEquation ) return extension.MAX_EXT;

  		}

  		return 0;

  	}

  	// Allocations

  	function allocateBones ( object ) {

  		if ( _supportsBoneTextures && object && object.skeleton && object.skeleton.useVertexTexture ) {

  			return 1024;

  		} else {

  			// default for when object is not specified
  			// ( for example when prebuilding shader
  			//   to be used with multiple objects )
  			//
  			//  - leave some extra space for other uniforms
  			//  - limit here is ANGLE's 254 max uniform vectors
  			//    (up to 54 should be safe)

  			var nVertexUniforms = _gl.getParameter( _gl.MAX_VERTEX_UNIFORM_VECTORS );
  			var nVertexMatrices = Math.floor( ( nVertexUniforms - 20 ) / 4 );

  			var maxBones = nVertexMatrices;

  			if ( object !== undefined && object instanceof THREE$SkinnedMesh ) {

  				maxBones = Math.min( object.skeleton.bones.length, maxBones );

  				if ( maxBones < object.skeleton.bones.length ) {

  					THREE$warn( 'WebGLRenderer: too many bones - ' + object.skeleton.bones.length + ', this GPU supports just ' + maxBones + ' (try OpenGL instead of ANGLE)' );

  				}

  			}

  			return maxBones;

  		}

  	}

  	function allocateLights( lights ) {

  		var dirLights = 0;
  		var pointLights = 0;
  		var spotLights = 0;
  		var hemiLights = 0;

  		for ( var l = 0, ll = lights.length; l < ll; l ++ ) {

  			var light = lights[ l ];

  			if ( light.onlyShadow || light.visible === false ) continue;

  			if ( light instanceof THREE$DirectionalLight ) dirLights ++;
  			if ( light instanceof THREE$PointLight ) pointLights ++;
  			if ( light instanceof THREE$SpotLight ) spotLights ++;
  			if ( light instanceof THREE$HemisphereLight ) hemiLights ++;

  		}

  		return { 'directional': dirLights, 'point': pointLights, 'spot': spotLights, 'hemi': hemiLights };

  	}

  	function allocateShadows( lights ) {

  		var maxShadows = 0;

  		for ( var l = 0, ll = lights.length; l < ll; l ++ ) {

  			var light = lights[ l ];

  			if ( ! light.castShadow ) continue;

  			if ( light instanceof THREE$SpotLight ) maxShadows ++;
  			if ( light instanceof THREE$DirectionalLight && ! light.shadowCascade ) maxShadows ++;

  		}

  		return maxShadows;

  	}

  	// DEPRECATED

  	this.initMaterial = function () {

  		THREE$warn( 'THREE.WebGLRenderer: .initMaterial() has been removed.' );

  	};

  	this.addPrePlugin = function () {

  		THREE$warn( 'THREE.WebGLRenderer: .addPrePlugin() has been removed.' );

  	};

  	this.addPostPlugin = function () {

  		THREE$warn( 'THREE.WebGLRenderer: .addPostPlugin() has been removed.' );

  	};

  	this.updateShadowMap = function () {

  		THREE$warn( 'THREE.WebGLRenderer: .updateShadowMap() has been removed.' );

  	};

  }

  var scene = new THREE$Scene();
  console.log( 'scene', scene );
  var camera = new THREE$PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE$WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE$BoxGeometry( 1, 1, 1 );
  var material = new THREE$MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE$Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  var render = function () {
  	requestAnimationFrame( render );

  	cube.rotation.x += 0.1;
  	cube.rotation.y += 0.1;

  	renderer.render(scene, camera);
  };

  render();

})();