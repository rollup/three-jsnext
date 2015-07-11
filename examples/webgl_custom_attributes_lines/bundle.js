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
  var THREE$NotEqualDepth;
  var THREE$GreaterDepth;
  var THREE$GreaterEqualDepth;
  var THREE$EqualDepth;
  var THREE$LessEqualDepth;
  var THREE$LessDepth;
  var THREE$AlwaysDepth;
  var THREE$NeverDepth;
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


  // depth modes

  THREE$NeverDepth = 0;
  THREE$AlwaysDepth = 1;
  THREE$LessDepth = 2;
  THREE$LessEqualDepth = 3;
  THREE$EqualDepth = 4;
  THREE$GreaterEqualDepth = 5;
  THREE$GreaterDepth = 6;
  THREE$NotEqualDepth = 7;


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

  				if ( i === 8 || i === 13 || i === 18 || i === 23 ) {

  					uuid[ i ] = '-';

  				} else if ( i === 14 ) {

  					uuid[ i ] = '4';

  				} else {

  					if ( rnd <= 0x02 ) rnd = 0x2000000 + ( Math.random() * 0x1000000 ) | 0;
  					r = rnd & 0xf;
  					rnd = rnd >> 4;
  					uuid[ i ] = chars[ ( i === 19 ) ? ( r & 0x3 ) | 0x8 : r ];

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

  	// compute euclidian modulo of m % n
  	// https://en.wikipedia.org/wiki/Modulo_operation

  	euclideanModulo: function ( n, m ) {

  		return ( ( n % m ) + m ) % m;

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
  	this.isMatrix4 = true;

  	this.elements = new Float32Array( [

  		1, 0, 0, 0,
  		0, 1, 0, 0,
  		0, 0, 1, 0,
  		0, 0, 0, 1

  	] );

  	if ( arguments.length > 0 ) {

  		console.error( 'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.' );

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

  		console.warn( 'THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().' );
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

  		var v1;

  		return function ( m ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();

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

  		if ( (euler && euler.isEuler) === false ) {

  			console.error( 'THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );

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

  		console.warn( 'THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().' );

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

  		var x, y, z;

  		return function ( eye, target, up ) {

  			if ( x === undefined ) x = new THREE$Vector3();
  			if ( y === undefined ) y = new THREE$Vector3();
  			if ( z === undefined ) z = new THREE$Vector3();

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

  			console.warn( 'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.' );
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

  		console.warn( 'THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.' );
  		return vector.applyProjection( this );

  	},

  	multiplyVector4: function ( vector ) {

  		console.warn( 'THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
  		return vector.applyMatrix4( this );

  	},

  	multiplyVector3Array: function ( a ) {

  		console.warn( 'THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.' );
  		return this.applyToVector3Array( a );

  	},

  	applyToVector3Array: function () {

  		var v1;

  		return function ( array, offset, length ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();
  			if ( offset === undefined ) offset = 0;
  			if ( length === undefined ) length = array.length;

  			for ( var i = 0, j = offset; i < length; i += 3, j += 3 ) {

  				v1.fromArray( array, j );
  				v1.applyMatrix4( this );
  				v1.toArray( array, j );

  			}

  			return array;

  		};

  	}(),

  	applyToBuffer: function () {

  		var v1;

  		return function applyToBuffer( buffer, offset, length ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();
  			if ( offset === undefined ) offset = 0;
  			if ( length === undefined ) length = buffer.length / buffer.itemSize;

  			for ( var i = 0, j = offset; i < length; i ++, j ++ ) {

  				v1.x = buffer.getX( j );
  				v1.y = buffer.getY( j );
  				v1.z = buffer.getZ( j );

  				v1.applyMatrix4( this );

  				buffer.setXYZ( v1.x, v1.y, v1.z );

  			}

  			return buffer;

  		};

  	}(),

  	rotateAxis: function ( v ) {

  		console.warn( 'THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.' );

  		v.transformDirection( this );

  	},

  	crossVector: function ( vector ) {

  		console.warn( 'THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
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

  		var v1;

  		return function () {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();
  			console.warn( 'THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.' );

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

  		if ( det === 0 ) {

  			var msg = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";

  			if ( throwOnInvertible || false ) {

  				throw new Error( msg );

  			} else {

  				console.warn( msg );

  			}

  			this.identity();

  			return this;

  		}

  		this.multiplyScalar( 1 / det );

  		return this;

  	},

  	translate: function ( v ) {

  		console.error( 'THREE.Matrix4: .translate() has been removed.' );

  	},

  	rotateX: function ( angle ) {

  		console.error( 'THREE.Matrix4: .rotateX() has been removed.' );

  	},

  	rotateY: function ( angle ) {

  		console.error( 'THREE.Matrix4: .rotateY() has been removed.' );

  	},

  	rotateZ: function ( angle ) {

  		console.error( 'THREE.Matrix4: .rotateZ() has been removed.' );

  	},

  	rotateByAxis: function ( axis, angle ) {

  		console.error( 'THREE.Matrix4: .rotateByAxis() has been removed.' );

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

  		var vector, matrix;

  		return function ( position, quaternion, scale ) {

  			if ( vector === undefined ) vector = new THREE$Vector3();
  			if ( matrix === undefined ) matrix = new THREE$Matrix4();

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
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author bhouston / http://exocortex.com
   */

  function THREE$Quaternion ( x, y, z, w ) {
  	this.isQuaternion = true;

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

  		if ( (euler && euler.isEuler) === false ) {

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

  			console.warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' );
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

  		console.warn( 'THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.' );
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
  	this.isVector3 = true;

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

  			console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
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

  			console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
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

  			console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
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

  			if ( (euler && euler.isEuler) === false ) {

  				console.error( 'THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.' );

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

  			console.warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
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

  		console.error( 'THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.' );

  	},

  	setEulerFromQuaternion: function ( q, order ) {

  		console.error( 'THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.' );

  	},

  	getPositionFromMatrix: function ( m ) {

  		console.warn( 'THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().' );

  		return this.setFromMatrixPosition( m );

  	},

  	getScaleFromMatrix: function ( m ) {

  		console.warn( 'THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().' );

  		return this.setFromMatrixScale( m );
  	},

  	getColumnFromMatrix: function ( index, matrix ) {

  		console.warn( 'THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().' );

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

  function THREE$EventDispatcher () {
  	this.isEventDispatcher = true;}

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
   * @author WestLangley / http://github.com/WestLangley
   * @author bhouston / http://exocortex.com
   */

  function THREE$Euler ( x, y, z, order ) {
  	this.isEuler = true;

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

  			console.warn( 'THREE.Euler: .setFromRotationMatrix() given unsupported order: ' + order )

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
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author elephantatwork / www.elephantatwork.ch
   */

  function THREE$Object3D () {
  	this.isObject3D = true;

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

  		console.warn( 'THREE.Object3D: .eulerOrder has been moved to .rotation.order.' );

  		return this.rotation.order;

  	},

  	set eulerOrder ( value ) {

  		console.warn( 'THREE.Object3D: .eulerOrder has been moved to .rotation.order.' );

  		this.rotation.order = value;

  	},

  	get useQuaternion () {

  		console.warn( 'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

  	},

  	set useQuaternion ( value ) {

  		console.warn( 'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

  	},

  	set renderDepth ( value ) {

  		console.warn( 'THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.' );

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

  		console.warn( 'THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.' );
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

  		}

  		if ( object === this ) {

  			console.error( "THREE.Object3D.add: object can't be added as a child of itself.", object );
  			return this;

  		}

  		if ( (object && object.isObject3D) ) {

  			if ( object.parent !== undefined ) {

  				object.parent.remove( object );

  			}

  			object.parent = this;
  			object.dispatchEvent( { type: 'added' } );

  			this.children.push( object );

  		} else {

  			console.error( "THREE.Object3D.add: object not an instance of THREE.Object3D.", object );

  		}

  		return this;

  	},

  	remove: function ( object ) {

  		if ( arguments.length > 1 ) {

  			for ( var i = 0; i < arguments.length; i ++ ) {

  				this.remove( arguments[ i ] );

  			}

  		}

  		var index = this.children.indexOf( object );

  		if ( index !== - 1 ) {

  			object.parent = undefined;

  			object.dispatchEvent( { type: 'removed' } );

  			this.children.splice( index, 1 );

  		}

  	},

  	getChildByName: function ( name ) {

  		console.warn( 'THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().' );
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

  	toJSON: function ( meta ) {

  		var isRootObject = ( meta === undefined );

  		var data = {};

  		// meta is a hash used to collect geometries, materials.
  		// not providing it implies that this is the root object
  		// being serialized.
  		if ( isRootObject ) {

  			// initialize meta obj
  			meta = {
  				geometries: {},
  				materials: {},
  				textures: {},
  				images: {}
  			};

  			data.metadata = {
  				version: 4.4,
  				type: 'Object',
  				generator: 'Object3D.toJSON'
  			};

  		}

  		// standard Object3D serialization

  		data.uuid = this.uuid;
  		data.type = this.type;

  		if ( this.name !== '' ) data.name = this.name;
  		if ( JSON.stringify( this.userData ) !== '{}' ) data.userData = this.userData;
  		if ( this.visible !== true ) data.visible = this.visible;

  		data.matrix = this.matrix.toArray();

  		if ( this.children.length > 0 ) {

  			data.children = [];

  			for ( var i = 0; i < this.children.length; i ++ ) {

  				data.children.push( this.children[ i ].toJSON( meta ).object );

  			}

  		}

  		var output = {};

  		if ( isRootObject ) {

  			var geometries = extractFromCache( meta.geometries );
  			var materials = extractFromCache( meta.materials );
  			var textures = extractFromCache( meta.textures );
  			var images = extractFromCache( meta.images );

  			if ( geometries.length > 0 ) output.geometries = geometries;
  			if ( materials.length > 0 ) output.materials = materials;
  			if ( textures.length > 0 ) output.textures = textures;
  			if ( images.length > 0 ) output.images = images;

  		}

  		output.object = data;

  		return output;

  		// extract data from the cache hash
  		// remove metadata on each item
  		// and return as array
  		function extractFromCache ( cache ) {
  			var values = [];
  			for ( var key in cache ) {
  				var data = cache[ key ];
  				delete data.metadata;
  				values.push( data );
  			}
  			return values;
  		}

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
  		object.renderOrder = this.renderOrder;

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

  var ___count = 0;
  function THREE$Object3DIdCount () { return ___count++; }


  /**
   * @author mrdoob / http://mrdoob.com/
   * @author mikael emtinger / http://gomo.se/
   * @author WestLangley / http://github.com/WestLangley
  */

  function THREE$Camera () {
  	this.isCamera = true;

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

  	};

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
   * @author mrdoob / http://mrdoob.com/
   * @author greggman / http://games.greggman.com/
   * @author zz85 / http://www.lab4games.net/zz85/blog
   */

  function THREE$PerspectiveCamera ( fov, aspect, near, far ) {
  	this.isPerspectiveCamera = true;

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
   * 35mm (full-frame) camera is used if frame size is not specified;
   * Formula based on http://www.bobatkins.com/photography/technical/field_of_view.html
   */

  THREE$PerspectiveCamera.prototype.setLens = function ( focalLength, frameHeight ) {

  	if ( frameHeight === undefined ) frameHeight = 24;

  	this.fov = 2 * THREE$Math.radToDeg( Math.atan( frameHeight / ( focalLength * 2 ) ) );
  	this.updateProjectionMatrix();

  };


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

  	return camera;

  };

  THREE$PerspectiveCamera.prototype.toJSON = function ( meta ) {

  	var data = THREE$Object3D.prototype.toJSON.call( this, meta );

  	data.object.zoom = this.zoom;
  	data.object.fov = this.fov;
  	data.object.aspect = this.aspect;
  	data.object.near = this.near;
  	data.object.far = this.far;

  	return data;

  };



  /**
   * @author supereggbert / http://www.paulbrunt.co.uk/
   * @author philogb / http://blog.thejit.org/
   * @author mikael emtinger / http://gomo.se/
   * @author egraether / http://egraether.com/
   * @author WestLangley / http://github.com/WestLangley
   */

  function THREE$Vector4 ( x, y, z, w ) {
  	this.isVector4 = true;

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

  			console.warn( 'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
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

  			console.warn( 'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
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



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author philogb / http://blog.thejit.org/
   * @author egraether / http://egraether.com/
   * @author zz85 / http://www.lab4games.net/zz85/blog
   */

  function THREE$Vector2 ( x, y ) {
  	this.isVector2 = true;

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

  			console.warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
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

  			console.warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
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

  	lengthManhattan: function() {

  		return Math.abs( this.x ) + Math.abs( this.y );
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


  var THREE$ColorKeywords;


  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$Color ( color ) {
  	this.isColor = true;

  	if ( arguments.length === 3 ) {

  		return this.setRGB( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ] );

  	}

  	return this.set( color )

  }

  THREE$Color.prototype = {

  	constructor: THREE$Color,

  	r: 1, g: 1, b: 1,

  	set: function ( value ) {

  		if ( (value && value.isColor) ) {

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

  	setHSL: function () {

  		function hue2rgb ( p, q, t ) {

  			if ( t < 0 ) t += 1;
  			if ( t > 1 ) t -= 1;
  			if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
  			if ( t < 1 / 2 ) return q;
  			if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
  			return p;

  		};

  		return function ( h, s, l ) {

  			// h,s,l ranges are in 0.0 - 1.0
  			h = THREE$Math.euclideanModulo( h, 1 );
  			s = THREE$Math.clamp( s, 0, 1 );
  			l = THREE$Math.clamp( l, 0, 1 );

  			if ( s === 0 ) {

  				this.r = this.g = this.b = l;

  			} else {

  				var p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
  				var q = ( 2 * l ) - p;

  				this.r = hue2rgb( q, p, h + 1 / 3 );
  				this.g = hue2rgb( q, p, h );
  				this.b = hue2rgb( q, p, h - 1 / 3 );

  			}

  			return this;

  		};

  	}(),

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
   */

  function THREE$BufferAttribute ( array, itemSize ) {
  	this.isBufferAttribute = true;

  	this.uuid = THREE$Math.generateUUID();

  	this.array = array;
  	this.itemSize = itemSize;

  	this.needsUpdate = false;

  }

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

  function THREE$Float32Attribute ( array, itemSize ) {
  	this.isFloat32Attribute = true;

  	return new THREE$BufferAttribute( new Float32Array( array ), itemSize );

  }


  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Face3 ( a, b, c, normal, color ) {
  	this.isFace3 = true;

  	this.a = a;
  	this.b = b;
  	this.c = c;

  	this.normal = (normal && normal.isVector3) ? normal : new THREE$Vector3();
  	this.vertexNormals = Array.isArray( normal ) ? normal : [];

  	this.color = (color && color.isColor) ? color : new THREE$Color();
  	this.vertexColors = Array.isArray( color ) ? color : [];

  	this.vertexTangents = [];

  }

  THREE$Face3.prototype = {

  	constructor: THREE$Face3,

  	clone: function () {

  		var face = new THREE$Face3( this.a, this.b, this.c );

  		face.normal.copy( this.normal );
  		face.color.copy( this.color );

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
   * @author alteredq / http://alteredqualia.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author bhouston / http://exocortex.com
   */

  function THREE$Matrix3 () {
  	this.isMatrix3 = true;

  	this.elements = new Float32Array( [

  		1, 0, 0,
  		0, 1, 0,
  		0, 0, 1

  	] );

  	if ( arguments.length > 0 ) {

  		console.error( 'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.' );

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

  		console.warn( 'THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.' );
  		return vector.applyMatrix3( this );

  	},

  	multiplyVector3Array: function ( a ) {

  		console.warn( 'THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.' );
  		return this.applyToVector3Array( a );

  	},

  	applyToVector3Array: function () {

  		var v1;

  		return function ( array, offset, length ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();
  			if ( offset === undefined ) offset = 0;
  			if ( length === undefined ) length = array.length;

  			for ( var i = 0, j = offset; i < length; i += 3, j += 3 ) {

  				v1.fromArray( array, j );
  				v1.applyMatrix3( this );
  				v1.toArray( array, j );

  			}

  			return array;

  		};

  	}(),

  	applyToBuffer: function () {

  		var v1;

  		return function applyToBuffer( buffer, offset, length ) {

  			if ( v1 === undefined ) v1 = new THREE$Vector3();
  			if ( offset === undefined ) offset = 0;
  			if ( length === undefined ) length = buffer.length / buffer.itemSize;

  			for ( var i = 0, j = offset; i < length; i ++, j ++ ) {

  				v1.x = buffer.getX( j );
  				v1.y = buffer.getY( j );
  				v1.z = buffer.getZ( j );

  				v1.applyMatrix3( this );

  				buffer.setXYZ( v1.x, v1.y, v1.z );

  			}

  			return buffer;

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

  				console.warn( msg );

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
   * @author WestLangley / http://github.com/WestLangley
   */

  function THREE$Box3 ( min, max ) {
  	this.isBox3 = true;

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

  			this.expandByPoint( points[ i ] );

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
  		// accounting for both the object's, and children's, world transforms

  		var v1 = new THREE$Vector3();

  		return function ( object ) {

  			var scope = this;

  			object.updateMatrixWorld( true );

  			this.makeEmpty();

  			object.traverse( function ( node ) {

  				var geometry = node.geometry;

  				if ( geometry !== undefined ) {

  					if ( (geometry && geometry.isGeometry) ) {

  						var vertices = geometry.vertices;

  						for ( var i = 0, il = vertices.length; i < il; i ++ ) {

  							v1.copy( vertices[ i ] );

  							v1.applyMatrix4( node.matrixWorld );

  							scope.expandByPoint( v1 );

  						}

  					} else if ( (geometry && geometry.isBufferGeometry) && geometry.attributes[ 'position' ] !== undefined ) {

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
  	this.isSphere = true;

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
   * @author mrdoob / http://mrdoob.com/
   * @author kile / http://kile.stravaganza.org/
   * @author alteredq / http://alteredqualia.com/
   * @author mikael emtinger / http://gomo.se/
   * @author zz85 / http://www.lab4games.net/zz85/blog
   * @author bhouston / http://exocortex.com
   */

  function THREE$Geometry () {
  	this.isGeometry = true;

  	Object.defineProperty( this, 'id', { value: THREE$GeometryIdCount() } );

  	this.uuid = THREE$Math.generateUUID();

  	this.name = '';
  	this.type = 'Geometry';

  	this.vertices = [];
  	this.colors = [];
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

  	// update flags

  	this.verticesNeedUpdate = false;
  	this.elementsNeedUpdate = false;
  	this.uvsNeedUpdate = false;
  	this.normalsNeedUpdate = false;
  	this.tangentsNeedUpdate = false;
  	this.colorsNeedUpdate = false;
  	this.lineDistancesNeedUpdate = false;

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
  		var uvs2 = attributes.uv2 !== undefined ? attributes.uv2.array : undefined;
  		var tangents = attributes.tangent !== undefined ? attributes.tangent.array : undefined;

  		if ( uvs2 !== undefined ) this.faceVertexUvs[ 1 ] = [];
  		if ( tangents !== undefined ) this.hasTangents = true;

  		var tempNormals = [];
  		var tempUVs = [];
  		var tempUVs2 = [];
  		var tempTangents = [];

  		for ( var i = 0, j = 0, k = 0; i < vertices.length; i += 3, j += 2, k += 4 ) {

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

  			if ( uvs2 !== undefined ) {

  				tempUVs2.push( new THREE$Vector2( uvs2[ j ], uvs2[ j + 1 ] ) );

  			}

  			if ( tangents !== undefined ) {

  				tempTangents.push( new THREE$Vector4( tangents[ k ], tangents[ k + 1 ], tangents[ k + 2 ], tangents[ k + 3 ] ) );

  			}

  		}

  		var addFace = function ( a, b, c ) {

  			var vertexNormals = normals !== undefined ? [ tempNormals[ a ].clone(), tempNormals[ b ].clone(), tempNormals[ c ].clone() ] : [];
  			var vertexColors = colors !== undefined ? [ scope.colors[ a ].clone(), scope.colors[ b ].clone(), scope.colors[ c ].clone() ] : [];

  			var face = new THREE$Face3( a, b, c, vertexNormals, vertexColors );

  			scope.faces.push( face );

  			if ( uvs !== undefined ) {

  				scope.faceVertexUvs[ 0 ].push( [ tempUVs[ a ].clone(), tempUVs[ b ].clone(), tempUVs[ c ].clone() ] );

  			}

  			if ( uvs2 !== undefined ) {

  				scope.faceVertexUvs[ 1 ].push( [ tempUVs2[ a ].clone(), tempUVs2[ b ].clone(), tempUVs2[ c ].clone() ] );

  			}

  			if ( tangents !== undefined ) {

  				face.vertexTangents.push( tempTangents[ a ].clone(), tempTangents[ b ].clone(), tempTangents[ c ].clone() );

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

  	normalize: function () {

  		this.computeBoundingSphere();

  		var center = this.boundingSphere.center;
  		var radius = this.boundingSphere.radius;

  		var s = radius === 0 ? 1 : 1.0 / radius;

  		var matrix = new THREE$Matrix4();
  		matrix.set(
  			s, 0, 0, -s * center.x,
  			0, s, 0, -s * center.y,
  			0, 0, s, -s * center.z,
  			0, 0, 0, 1
  		);

  		this.applyMatrix( matrix );

  		return this;
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

  			var vertexNormals = face.vertexNormals;

  			if ( vertexNormals.length === 3 ) {

  				vertexNormals[ 0 ].copy( vertices[ face.a ] );
  				vertexNormals[ 1 ].copy( vertices[ face.b ] );
  				vertexNormals[ 2 ].copy( vertices[ face.c ] );

  			} else {

  				vertexNormals[ 0 ] = vertices[ face.a ].clone();
  				vertexNormals[ 1 ] = vertices[ face.b ].clone();
  				vertexNormals[ 2 ] = vertices[ face.c ].clone();

  			}

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

  	merge: function ( geometry, matrix ) {

  		if ( (geometry && geometry.isGeometry) === false ) {

  			console.error( 'THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.', geometry );
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

  		if ( (mesh && mesh.isMesh) === false ) {

  			console.error( 'THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.', mesh );
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

  		var verticesMap = {}; // Hashmap for looking up vertices by position coordinates (and making sure they are unique)
  		var unique = [], changes = [];

  		var v, key;
  		var precisionPoints = 4; // number of decimal points, e.g. 4 for epsilon of 0.0001
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

  		}


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
  				if ( indices[ n ] === indices[ ( n + 1 ) % 3 ] ) {

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

  		var data = {
  			metadata: {
  				version: 4.4,
  				type: 'Geometry',
  				generator: 'Geometry.toJSON'
  			}
  		};

  		// standard Geometry serialization

  		data.uuid = this.uuid;
  		data.type = this.type;
  		if ( this.name !== '' ) data.name = this.name;

  		if ( this.parameters !== undefined ) {

  			var parameters = this.parameters;

  			for ( var key in parameters ) {

  				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

  			}

  			return data;

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

  		data.data = {};

  		data.data.vertices = vertices;
  		data.data.normals = normals;
  		if ( colors.length > 0 ) data.data.colors = colors;
  		if ( uvs.length > 0 ) data.data.uvs = [ uvs ]; // temporal backward compatibility
  		data.data.faces = faces;

  		return data;

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

  	},

  	// Backwards compatibility

  	set groupsNeedUpdate ( value ) {

  		if ( value === true ) this.dispose();

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$Geometry.prototype );

  var _count = 0;
  function THREE$GeometryIdCount () { return _count++; }


  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$DirectGeometry () {
  	this.isDirectGeometry = true;

  	Object.defineProperty( this, 'id', { value: THREE$GeometryIdCount() } );

  	this.uuid = THREE$Math.generateUUID();

  	this.name = '';
  	this.type = 'DirectGeometry';

  	this.indices = [];
  	this.vertices = [];
  	this.colors = [];
  	this.normals = [];
  	this.colors = [];
  	this.uvs = [];
  	this.uvs2 = [];
  	this.tangents = [];

  	this.morphTargets = [];
  	this.morphColors = [];
  	this.morphNormals = [];

  	this.skinWeights = [];
  	this.skinIndices = [];

  	// this.lineDistances = [];

  	this.boundingBox = null;
  	this.boundingSphere = null;

  	// update flags

  	this.verticesNeedUpdate = false;
  	this.normalsNeedUpdate = false;
  	this.colorsNeedUpdate = false;
  	this.uvsNeedUpdate = false;
  	this.tangentsNeedUpdate = false;

  }

  THREE$DirectGeometry.prototype = {

  	constructor: THREE$DirectGeometry,

  	computeBoundingBox: THREE$Geometry.prototype.computeBoundingBox,
  	computeBoundingSphere: THREE$Geometry.prototype.computeBoundingSphere,

  	computeFaceNormals: function () {

  		console.warn( 'THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.' );
  		return this;

  	},

  	computeVertexNormals: function () {

  		console.warn( 'THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.' );
  		return this;

  	},

  	computeTangents: function () {

  		console.warn( 'THREE.DirectGeometry: computeTangents() is not a method of this type of geometry.' );
  		return this;

  	},


  	fromGeometry: function ( geometry ) {

  		var faces = geometry.faces;
  		var vertices = geometry.vertices;
  		var faceVertexUvs = geometry.faceVertexUvs;

  		var hasFaceVertexUv = faceVertexUvs[ 0 ] && faceVertexUvs[ 0 ].length > 0;
  		var hasFaceVertexUv2 = faceVertexUvs[ 1 ] && faceVertexUvs[ 1 ].length > 0;

  		var hasTangents = geometry.hasTangents;

  		// morphs

  		var morphTargets = geometry.morphTargets;
  		var morphTargetsLength = morphTargets.length;

  		for ( var i = 0; i < morphTargetsLength; i ++ ) {

  			this.morphTargets[ i ] = [];

  		}

  		var morphNormals = geometry.morphNormals;
  		var morphNormalsLength = morphNormals.length;

  		for ( var i = 0; i < morphNormalsLength; i ++ ) {

  			this.morphNormals[ i ] = [];

  		}

  		var morphColors = geometry.morphColors;
  		var morphColorsLength = morphColors.length;

  		for ( var i = 0; i < morphColorsLength; i ++ ) {

  			this.morphColors[ i ] = [];

  		}

  		// skins

  		var skinIndices = geometry.skinIndices;
  		var skinWeights = geometry.skinWeights;

  		var hasSkinIndices = skinIndices.length === vertices.length;
  		var hasSkinWeights = skinWeights.length === vertices.length;

  		//

  		for ( var i = 0; i < faces.length; i ++ ) {

  			var face = faces[ i ];

  			this.vertices.push( vertices[ face.a ], vertices[ face.b ], vertices[ face.c ] );

  			var vertexNormals = face.vertexNormals;

  			if ( vertexNormals.length === 3 ) {

  				this.normals.push( vertexNormals[ 0 ], vertexNormals[ 1 ], vertexNormals[ 2 ] );

  			} else {

  				var normal = face.normal;

  				this.normals.push( normal, normal, normal );

  			}

  			var vertexColors = face.vertexColors;

  			if ( vertexColors.length === 3 ) {

  				this.colors.push( vertexColors[ 0 ], vertexColors[ 1 ], vertexColors[ 2 ] );

  			} else {

  				var color = face.color;

  				this.colors.push( color, color, color );

  			}

  			if ( hasFaceVertexUv === true ) {

  				var vertexUvs = faceVertexUvs[ 0 ][ i ];

  				if ( vertexUvs !== undefined ) {

  					this.uvs.push( vertexUvs[ 0 ], vertexUvs[ 1 ], vertexUvs[ 2 ] );

  				} else {

  					console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ', i );

  					this.uvs.push( new THREE$Vector2(), new THREE$Vector2(), new THREE$Vector2() );

  				}

  			}

  			if ( hasFaceVertexUv2 === true ) {

  				var vertexUvs = faceVertexUvs[ 1 ][ i ];

  				if ( vertexUvs !== undefined ) {

  					this.uvs2.push( vertexUvs[ 0 ], vertexUvs[ 1 ], vertexUvs[ 2 ] );

  				} else {

  					console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ', i );

  					this.uvs2.push( new THREE$Vector2(), new THREE$Vector2(), new THREE$Vector2() );

  				}

  			}

  			if ( hasTangents === true ) {

  				var vertexTangents = face.vertexTangents;

  				if ( vertexTangents.length === 3 ) {

  					this.tangents.push( vertexTangents[ 0 ], vertexTangents[ 1 ], vertexTangents[ 2 ] );

  				} else {

  					console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined tangents ', i );

  					this.tangents.push( new THREE$Vector4(), new THREE$Vector4(), new THREE$Vector4() );

  				}

  			}

  			// morphs

  			for ( var j = 0; j < morphTargetsLength; j ++ ) {

  				var morphTarget = morphTargets[ j ].vertices;

  				this.morphTargets[ j ].push( morphTarget[ face.a ], morphTarget[ face.b ], morphTarget[ face.c ] );

  			}
  			/*
  			for ( var j = 0; j < morphNormalsLength; j ++ ) {

  				var morphNormal = morphNormals[ j ].vertexNormals[ i ];

  				this.morphNormals[ j ].push( morphNormal.a, morphNormal.b, morphNormal.c );

  			}

  			for ( var j = 0; j < morphColorsLength; j ++ ) {

  				var morphColor = morphColors[ j ].colors;

  				this.morphColors[ j ].push( morphColor[ face.a ], morphColor[ face.b ], morphColor[ face.c ] );

  			}
  			*/

  			// skins

  			if ( hasSkinIndices ) {

  				this.skinIndices.push( skinIndices[ face.a ], skinIndices[ face.b ], skinIndices[ face.c ] );

  			}

  			if ( hasSkinWeights ) {

  				this.skinWeights.push( skinWeights[ face.a ], skinWeights[ face.b ], skinWeights[ face.c ] );

  			}

  		}

  		this.verticesNeedUpdate = geometry.verticesNeedUpdate;
  		this.normalsNeedUpdate = geometry.normalsNeedUpdate;
  		this.colorsNeedUpdate = geometry.colorsNeedUpdate;
  		this.uvsNeedUpdate = geometry.uvsNeedUpdate;
  		this.tangentsNeedUpdate = geometry.tangentsNeedUpdate;

  		return this;

  	},

  	dispose: function () {

  		this.dispatchEvent( { type: 'dispose' } );

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$DirectGeometry.prototype );



  /**
   * @author alteredq / http://alteredqualia.com/
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$BufferGeometry () {
  	this.isBufferGeometry = true;

  	Object.defineProperty( this, 'id', { value: THREE$GeometryIdCount() } );

  	this.uuid = THREE$Math.generateUUID();

  	this.name = '';
  	this.type = 'BufferGeometry';

  	this.attributes = {};

  	this.morphAttributes = [];

  	this.drawcalls = [];
  	this.offsets = this.drawcalls; // backwards compatibility

  	this.boundingBox = null;
  	this.boundingSphere = null;

  }

  THREE$BufferGeometry.prototype = {

  	constructor: THREE$BufferGeometry,

  	addAttribute: function ( name, attribute ) {

  		if ( (attribute && attribute.isBufferAttribute) === false && (attribute && attribute.isInterleavedBufferAttribute) === false ) {

  			console.warn( 'THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).' );

  			this.attributes[ name ] = { array: arguments[ 1 ], itemSize: arguments[ 2 ] };

  			return;

  		}

  		this.attributes[ name ] = attribute;

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

  	copy: function ( geometry ) {

  		var attributes = geometry.attributes;
  		var offsets = geometry.offsets;

  		for ( var name in attributes ) {

  			var attribute = attributes[ name ];

  			this.addAttribute( name, attribute.clone() );

  		}

  		for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  			var offset = offsets[ i ];

  			this.offsets.push( {

  				start: offset.start,
  				index: offset.index,
  				count: offset.count

  			} );

  		}

  		return this;

  	},

  	center: function () {

  		this.computeBoundingBox();

  		var offset = this.boundingBox.center().negate();

  		this.applyMatrix( new THREE$Matrix4().setPosition( offset ) );

  		return offset;

  	},

  	setFromObject: function ( object ) {

  		console.log( 'THREE.BufferGeometry.setFromObject(). Converting', object, this );

  		var geometry = object.geometry;
  		var material = object.material;

  		if ( (object && object.isPointCloud) || (object && object.isLine) ) {

  			var positions = new THREE$Float32Attribute( geometry.vertices.length * 3, 3 );
  			var colors = new THREE$Float32Attribute( geometry.colors.length * 3, 3 );

  			this.addAttribute( 'position', positions.copyVector3sArray( geometry.vertices ) );
  			this.addAttribute( 'color', colors.copyColorsArray( geometry.colors ) );

  			if ( geometry.lineDistances && geometry.lineDistances.length === geometry.vertices.length ) {

  				var lineDistances = new THREE$Float32Attribute( geometry.lineDistances.length, 1 );

  				this.addAttribute( 'lineDistance',  lineDistances.copyArray( geometry.lineDistances ) );

  			}

  			if ( geometry.boundingSphere !== null ) {

  				this.boundingSphere = geometry.boundingSphere.clone();

  			}

  			if ( geometry.boundingBox !== null ) {

  				this.boundingBox = geometry.boundingBox.clone();

  			}

  		} else if ( (object && object.isMesh) ) {

  			if ( (geometry && geometry.isGeometry) ) {

  				this.fromGeometry( geometry );

  			}

  		}

  		return this;

  	},

  	updateFromObject: function ( object ) {

  		var geometry = object.geometry;

  		if ( (object && object.isMesh) ) {

  			var direct = geometry.__directGeometry;

  			direct.verticesNeedUpdate = geometry.verticesNeedUpdate;
  			direct.normalsNeedUpdate = geometry.normalsNeedUpdate;
  			direct.colorsNeedUpdate = geometry.colorsNeedUpdate;
  			direct.uvsNeedUpdate = geometry.uvsNeedUpdate;
  			direct.tangentsNeedUpdate = geometry.tangentsNeedUpdate;

  			geometry.verticesNeedUpdate = false;
  			geometry.normalsNeedUpdate = false;
  			geometry.colorsNeedUpdate = false;
  			geometry.uvsNeedUpdate = false;
  			geometry.tangentsNeedUpdate = false;

  			geometry = direct;

  		}

  		if ( geometry.verticesNeedUpdate === true ) {

  			var attribute = this.attributes.position;

  			if ( attribute !== undefined ) {

  				attribute.copyVector3sArray( geometry.vertices );
  				attribute.needsUpdate = true;

  			}

  			geometry.verticesNeedUpdate = false;

  		}

  		if ( geometry.normalsNeedUpdate === true ) {

  			var attribute = this.attributes.normal;

  			if ( attribute !== undefined ) {

  				attribute.copyVector3sArray( geometry.normals );
  				attribute.needsUpdate = true;

  			}

  			geometry.normalsNeedUpdate = false;

  		}

  		if ( geometry.colorsNeedUpdate === true ) {

  			var attribute = this.attributes.color;

  			if ( attribute !== undefined ) {

  				attribute.copyColorsArray( geometry.colors );
  				attribute.needsUpdate = true;

  			}

  			geometry.colorsNeedUpdate = false;

  		}

  		if ( geometry.tangentsNeedUpdate === true ) {

  			var attribute = this.attributes.tangent;

  			if ( attribute !== undefined ) {

  				attribute.copyVector4sArray( geometry.tangents );
  				attribute.needsUpdate = true;

  			}

  			geometry.tangentsNeedUpdate = false;

  		}

  		if ( geometry.lineDistancesNeedUpdate ) {

  			var attribute = this.attributes.lineDistance;

  			if ( attribute !== undefined ) {

  				attribute.copyArray( geometry.lineDistances );
  				attribute.needsUpdate = true;

  			}

  			geometry.lineDistancesNeedUpdate = false;

  		}

  		return this;

  	},

  	fromGeometry: function ( geometry ) {

  		geometry.__directGeometry = new THREE$DirectGeometry().fromGeometry( geometry );

  		return this.fromDirectGeometry( geometry.__directGeometry );

  	},

  	fromDirectGeometry: function ( geometry ) {

  		var positions = new Float32Array( geometry.vertices.length * 3 );
  		this.addAttribute( 'position', new THREE$BufferAttribute( positions, 3 ).copyVector3sArray( geometry.vertices ) );

  		if ( geometry.normals.length > 0 ) {

  			var normals = new Float32Array( geometry.normals.length * 3 );
  			this.addAttribute( 'normal', new THREE$BufferAttribute( normals, 3 ).copyVector3sArray( geometry.normals ) );

  		}

  		if ( geometry.colors.length > 0 ) {

  			var colors = new Float32Array( geometry.colors.length * 3 );
  			this.addAttribute( 'color', new THREE$BufferAttribute( colors, 3 ).copyColorsArray( geometry.colors ) );

  		}

  		if ( geometry.uvs.length > 0 ) {

  			var uvs = new Float32Array( geometry.uvs.length * 2 );
  			this.addAttribute( 'uv', new THREE$BufferAttribute( uvs, 2 ).copyVector2sArray( geometry.uvs ) );

  		}

  		if ( geometry.uvs2.length > 0 ) {

  			var uvs2 = new Float32Array( geometry.uvs2.length * 2 );
  			this.addAttribute( 'uv2', new THREE$BufferAttribute( uvs2, 2 ).copyVector2sArray( geometry.uvs2 ) );

  		}

  		if ( geometry.tangents.length > 0 ) {

  			var tangents = new Float32Array( geometry.tangents.length * 4 );
  			this.addAttribute( 'tangent', new THREE$BufferAttribute( tangents, 4 ).copyVector4sArray( geometry.tangents ) );

  		}

  		if ( geometry.indices.length > 0 ) {

  			var indices = new Uint16Array( geometry.indices.length * 3 );
  			this.addAttribute( 'index', new THREE$BufferAttribute( indices, 1 ).copyIndicesArray( geometry.indices ) );

  		}

  		// morphs

  		if ( geometry.morphTargets.length > 0 ) {

  			var morphTargets = geometry.morphTargets;

  			for ( var i = 0, l = morphTargets.length; i < l; i ++ ) {

  				var morphTarget = morphTargets[ i ];

  				var attribute = new THREE$Float32Attribute( morphTarget.length * 3, 3 );

  				this.morphAttributes.push( attribute.copyVector3sArray( morphTarget ) );

  			}

  			// TODO normals, colors

  		}

  		// skinning

  		if ( geometry.skinIndices.length > 0 ) {

  			var skinIndices = new THREE$Float32Attribute( geometry.skinIndices.length * 4, 4 );
  			this.addAttribute( 'skinIndex', skinIndices.copyVector4sArray( geometry.skinIndices ) );

  		}

  		if ( geometry.skinWeights.length > 0 ) {

  			var skinWeights = new THREE$Float32Attribute( geometry.skinWeights.length * 4, 4 );
  			this.addAttribute( 'skinWeight', skinWeights.copyVector4sArray( geometry.skinWeights ) );

  		}

  		//

  		if ( geometry.boundingSphere !== null ) {

  			this.boundingSphere = geometry.boundingSphere.clone();

  		}

  		if ( geometry.boundingBox !== null ) {

  			this.boundingBox = geometry.boundingBox.clone();

  		}

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

  					vector.fromArray( positions, i );
  					bb.expandByPoint( vector );

  				}

  			}

  			if ( positions === undefined || positions.length === 0 ) {

  				this.boundingBox.min.set( 0, 0, 0 );
  				this.boundingBox.max.set( 0, 0, 0 );

  			}

  			if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

  				console.error( 'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

  			}

  		};

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

  					vector.fromArray( positions, i );
  					box.expandByPoint( vector );

  				}

  				box.center( center );

  				// hoping to find a boundingSphere with a radius smaller than the
  				// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

  				var maxRadiusSq = 0;

  				for ( var i = 0, il = positions.length; i < il; i += 3 ) {

  					vector.fromArray( positions, i );
  					maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( vector ) );

  				}

  				this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

  				if ( isNaN( this.boundingSphere.radius ) ) {

  					console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

  				}

  			}

  		};

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

  			console.warn( 'THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()' );
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
  	size - Defaults to 65535 or 4294967296 if extension OES_element_index_uint supported, but allows for larger or smaller chunks.
  	*/
  	computeOffsets: function ( size ) {

  		if ( size === undefined ) size = THREE$BufferGeometry.MaxIndex;

  		var indices = this.attributes.index.array;
  		var vertices = this.attributes.position.array;

  		var facesCount = ( indices.length / 3 );

  		var UintArray = ( ( vertices.length / 3 ) > 65535 && THREE$BufferGeometry.MaxIndex > 65535 ) ? Uint32Array : Uint16Array;

  		/*
  		console.log("Computing buffers in offsets of "+size+" -> indices:"+indices.length+" vertices:"+vertices.length);
  		console.log("Faces to process: "+(indices.length/3));
  		console.log("Reordering "+verticesCount+" vertices.");
  		*/

  		var sortedIndices = new UintArray( indices.length );

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
  			We can have more than 'size' entries in the index buffer per offset, but only reference 'size' values.
  		*/
  		for ( var findex = 0; findex < facesCount; findex ++ ) {
  			newVerticeMaps = 0;

  			for ( var vo = 0; vo < 3; vo ++ ) {
  				var vid = indices[ findex * 3 + vo ];
  				if ( vertexMap[ vid ] === - 1 ) {
  					//Unmapped vertex
  					faceVertices[ vo * 2 ] = vid;
  					faceVertices[ vo * 2 + 1 ] = - 1;
  					newVerticeMaps ++;
  				} else if ( vertexMap[ vid ] < offset.index ) {
  					//Reused vertices from previous block (duplicate)
  					faceVertices[ vo * 2 ] = vid;
  					faceVertices[ vo * 2 + 1 ] = - 1;
  					duplicatedVertices ++;
  				} else {
  					//Reused vertex in the current block
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

  		/* Move all attribute values to map to the new computed indices , also expand the vertex stack to match our new vertexPtr. */
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

  		if ( (geometry && geometry.isBufferGeometry) === false ) {

  			console.error( 'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.', geometry );
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
  		vertexCount - Amount of total vertices considered in this reordering (in case you want to grow the vertex stack).
  	*/
  	reorderBuffers: function ( indexBuffer, indexMap, vertexCount ) {

  		/* Create a copy of all attributes for reordering. */
  		var sortedAttributes = {};
  		for ( var attr in this.attributes ) {
  			if ( attr === 'index' )
  				continue;
  			var sourceArray = this.attributes[ attr ].array;
  			sortedAttributes[ attr ] = new sourceArray.constructor( this.attributes[ attr ].itemSize * vertexCount );
  		}

  		/* Move attribute positions based on the new index map */
  		for ( var new_vid = 0; new_vid < vertexCount; new_vid ++ ) {
  			var vid = indexMap[ new_vid ];
  			for ( var attr in this.attributes ) {
  				if ( attr === 'index' )
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
  			if ( attr === 'index' )
  				continue;
  			this.attributes[ attr ].array = sortedAttributes[ attr ];
  			this.attributes[ attr ].numItems = this.attributes[ attr ].itemSize * vertexCount;
  		}
  	},

  	toJSON: function () {

  		var data = {
  			metadata: {
  				version: 4.4,
  				type: 'BufferGeometry',
  				generator: 'BufferGeometry.toJSON'
  			}
  		};

  		// standard BufferGeometry serialization

  		data.uuid = this.uuid;
  		data.type = this.type;
  		if ( this.name !== '' ) data.name = this.name;

  		if ( this.parameters !== undefined ) {

  			var parameters = this.parameters;

  			for ( var key in parameters ) {

  				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

  			}

  			return data;

  		}

  		data.data = { attributes: {} };

  		var attributes = this.attributes;
  		var offsets = this.offsets;
  		var boundingSphere = this.boundingSphere;

  		for ( var key in attributes ) {

  			var attribute = attributes[ key ];

  			var array = Array.prototype.slice.call( attribute.array );

  			data.data.attributes[ key ] = {
  				itemSize: attribute.itemSize,
  				type: attribute.array.constructor.name,
  				array: array
  			};

  		}

  		if ( offsets.length > 0 ) {

  			data.data.offsets = JSON.parse( JSON.stringify( offsets ) );

  		}

  		if ( boundingSphere !== null ) {

  			data.data.boundingSphere = {
  				center: boundingSphere.center.toArray(),
  				radius: boundingSphere.radius
  			};

  		}

  		return data;

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

  THREE$BufferGeometry.MaxIndex = 65535;



  /**
   * @author zz85 / http://www.lab4games.net/zz85/blog
   * Extensible curve object
   *
   * Some common of Curve methods
   * .getPoint(t), getTangent(t)
   * .getPointAt(u), getTagentAt(u)
   * .getPoints(), .getSpacedPoints()
   * .getLength()
   * .updateArcLengths()
   *
   * This following classes subclasses THREE.Curve:
   *
   * -- 2d classes --
   * THREE.LineCurve
   * THREE.QuadraticBezierCurve
   * THREE.CubicBezierCurve
   * THREE.SplineCurve
   * THREE.ArcCurve
   * THREE.EllipseCurve
   *
   * -- 3d classes --
   * THREE.LineCurve3
   * THREE.QuadraticBezierCurve3
   * THREE.CubicBezierCurve3
   * THREE.SplineCurve3
   * THREE.ClosedSplineCurve3
   *
   * A series of curves can be represented as a THREE.CurvePath
   *
   **/

  /**************************************************************
   *	Abstract Curve base class
   **************************************************************/

  function THREE$Curve () {
  	this.isCurve = true;

  }


  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]

  THREE$Curve.prototype.getPoint = function ( t ) {

  	console.warn( "THREE.Curve: Warning, getPoint() not implemented!" );
  	return null;

  };


  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]

  THREE$Curve.prototype.getPointAt = function ( u ) {

  	var t = this.getUtoTmapping( u );
  	return this.getPoint( t );

  };


  // Get sequence of points using getPoint( t )

  THREE$Curve.prototype.getPoints = function ( divisions ) {

  	if ( ! divisions ) divisions = 5;

  	var d, pts = [];

  	for ( d = 0; d <= divisions; d ++ ) {

  		pts.push( this.getPoint( d / divisions ) );

  	}

  	return pts;

  };


  // Get sequence of points using getPointAt( u )

  THREE$Curve.prototype.getSpacedPoints = function ( divisions ) {

  	if ( ! divisions ) divisions = 5;

  	var d, pts = [];

  	for ( d = 0; d <= divisions; d ++ ) {

  		pts.push( this.getPointAt( d / divisions ) );

  	}

  	return pts;

  };


  // Get total curve arc length

  THREE$Curve.prototype.getLength = function () {

  	var lengths = this.getLengths();
  	return lengths[ lengths.length - 1 ];

  };


  // Get list of cumulative segment lengths

  THREE$Curve.prototype.getLengths = function ( divisions ) {

  	if ( ! divisions ) divisions = (this.__arcLengthDivisions) ? (this.__arcLengthDivisions) : 200;

  	if ( this.cacheArcLengths
  		&& ( this.cacheArcLengths.length === divisions + 1 )
  		&& ! this.needsUpdate) {

  		//console.log( "cached", this.cacheArcLengths );
  		return this.cacheArcLengths;

  	}

  	this.needsUpdate = false;

  	var cache = [];
  	var current, last = this.getPoint( 0 );
  	var p, sum = 0;

  	cache.push( 0 );

  	for ( p = 1; p <= divisions; p ++ ) {

  		current = this.getPoint ( p / divisions );
  		sum += current.distanceTo( last );
  		cache.push( sum );
  		last = current;

  	}

  	this.cacheArcLengths = cache;

  	return cache; // { sums: cache, sum:sum }; Sum is in the last element.

  };


  THREE$Curve.prototype.updateArcLengths = function() {
  	this.needsUpdate = true;
  	this.getLengths();
  };


  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant

  THREE$Curve.prototype.getUtoTmapping = function ( u, distance ) {

  	var arcLengths = this.getLengths();

  	var i = 0, il = arcLengths.length;

  	var targetArcLength; // The targeted u distance value to get

  	if ( distance ) {

  		targetArcLength = distance;

  	} else {

  		targetArcLength = u * arcLengths[ il - 1 ];

  	}

  	//var time = Date.now();

  	// binary search for the index with largest value smaller than target u distance

  	var low = 0, high = il - 1, comparison;

  	while ( low <= high ) {

  		i = Math.floor( low + ( high - low ) / 2 ); // less likely to overflow, though probably not issue here, JS doesn't really have integers, all numbers are floats

  		comparison = arcLengths[ i ] - targetArcLength;

  		if ( comparison < 0 ) {

  			low = i + 1;

  		} else if ( comparison > 0 ) {

  			high = i - 1;

  		} else {

  			high = i;
  			break;

  			// DONE

  		}

  	}

  	i = high;

  	//console.log('b' , i, low, high, Date.now()- time);

  	if ( arcLengths[ i ] === targetArcLength ) {

  		var t = i / ( il - 1 );
  		return t;

  	}

  	// we could get finer grain at lengths, or use simple interpolation between two points

  	var lengthBefore = arcLengths[ i ];
  	var lengthAfter = arcLengths[ i + 1 ];

  	var segmentLength = lengthAfter - lengthBefore;

      // determine where we are between the 'before' and 'after' points

  	var segmentFraction = ( targetArcLength - lengthBefore ) / segmentLength;

      // add that fractional amount to t

  	var t = ( i + segmentFraction ) / ( il - 1 );

  	return t;

  };


  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation

  THREE$Curve.prototype.getTangent = function( t ) {

  	var delta = 0.0001;
  	var t1 = t - delta;
  	var t2 = t + delta;

  	// Capping in case of danger

  	if ( t1 < 0 ) t1 = 0;
  	if ( t2 > 1 ) t2 = 1;

  	var pt1 = this.getPoint( t1 );
  	var pt2 = this.getPoint( t2 );

  	var vec = pt2.clone().sub(pt1);
  	return vec.normalize();

  };


  THREE$Curve.prototype.getTangentAt = function ( u ) {

  	var t = this.getUtoTmapping( u );
  	return this.getTangent( t );

  };


  /**************************************************************
   *	Utils
   **************************************************************/

  THREE$Curve.Utils = {

  	tangentQuadraticBezier: function ( t, p0, p1, p2 ) {

  		return 2 * ( 1 - t ) * ( p1 - p0 ) + 2 * t * ( p2 - p1 );

  	},

  	// Puay Bing, thanks for helping with this derivative!

  	tangentCubicBezier: function (t, p0, p1, p2, p3 ) {

  		return - 3 * p0 * (1 - t) * (1 - t)  +
  			3 * p1 * (1 - t) * (1 - t) - 6 * t * p1 * (1 - t) +
  			6 * t *  p2 * (1 - t) - 3 * t * t * p2 +
  			3 * t * t * p3;

  	},

  	tangentSpline: function ( t, p0, p1, p2, p3 ) {

  		// To check if my formulas are correct

  		var h00 = 6 * t * t - 6 * t; 	// derived from 2t^3 − 3t^2 + 1
  		var h10 = 3 * t * t - 4 * t + 1; // t^3 − 2t^2 + t
  		var h01 = - 6 * t * t + 6 * t; 	// − 2t3 + 3t2
  		var h11 = 3 * t * t - 2 * t;	// t3 − t2

  		return h00 + h10 + h01 + h11;

  	},

  	// Catmull-Rom

  	interpolate: function( p0, p1, p2, p3, t ) {

  		var v0 = ( p2 - p0 ) * 0.5;
  		var v1 = ( p3 - p1 ) * 0.5;
  		var t2 = t * t;
  		var t3 = t * t2;
  		return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

  	}

  };


  // TODO: Transformation for Curves?

  /**************************************************************
   *	3D Curves
   **************************************************************/

  // A Factory method for creating new curve subclasses

  THREE$Curve.create = function ( constructor, getPointFunc ) {

  	constructor.prototype = Object.create( THREE$Curve.prototype );
  	constructor.prototype.constructor = constructor;
  	constructor.prototype.getPoint = getPointFunc;

  	return constructor;

  };



  /**************************************************************
   *	Line
   **************************************************************/

  function THREE$LineCurve ( v1, v2 ) {
  	this.isLineCurve = true;

  	this.v1 = v1;
  	this.v2 = v2;

  }

  THREE$LineCurve.prototype = Object.create( THREE$Curve.prototype );
  THREE$LineCurve.prototype.constructor = THREE$LineCurve;

  THREE$LineCurve.prototype.getPoint = function ( t ) {

  	var point = this.v2.clone().sub(this.v1);
  	point.multiplyScalar( t ).add( this.v1 );

  	return point;

  };


  // Line curve is linear, so we can overwrite default getPointAt

  THREE$LineCurve.prototype.getPointAt = function ( u ) {

  	return this.getPoint( u );

  };

  THREE$LineCurve.prototype.getTangent = function( t ) {

  	var tangent = this.v2.clone().sub(this.v1);

  	return tangent.normalize();

  };



  /**
   * @author zz85 / http://www.lab4games.net/zz85/blog
   *
   **/

  /**************************************************************
   *	Curved Path - a curve path is simply a array of connected
   *  curves, but retains the api of a curve
   **************************************************************/

  function THREE$CurvePath () {
  	this.isCurvePath = true;

  	this.curves = [];
  	this.bends = [];

  	this.autoClose = false; // Automatically closes the path
  }

  THREE$CurvePath.prototype = Object.create( THREE$Curve.prototype );
  THREE$CurvePath.prototype.constructor = THREE$CurvePath;

  THREE$CurvePath.prototype.add = function ( curve ) {

  	this.curves.push( curve );

  };

  THREE$CurvePath.prototype.checkConnection = function() {
  	// TODO
  	// If the ending of curve is not connected to the starting
  	// or the next curve, then, this is not a real path
  };

  THREE$CurvePath.prototype.closePath = function() {
  	// TODO Test
  	// and verify for vector3 (needs to implement equals)
  	// Add a line curve if start and end of lines are not connected
  	var startPoint = this.curves[0].getPoint(0);
  	var endPoint = this.curves[this.curves.length - 1].getPoint(1);

  	if (! startPoint.equals(endPoint)) {
  		this.curves.push( new THREE$LineCurve(endPoint, startPoint) );
  	}

  };


  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:

  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')

  THREE$CurvePath.prototype.getPoint = function( t ) {

  	var d = t * this.getLength();
  	var curveLengths = this.getCurveLengths();
  	var i = 0, diff, curve;

  	// To think about boundaries points.

  	while ( i < curveLengths.length ) {

  		if ( curveLengths[ i ] >= d ) {

  			diff = curveLengths[ i ] - d;
  			curve = this.curves[ i ];

  			var u = 1 - diff / curve.getLength();

  			return curve.getPointAt( u );

  		}

  		i ++;

  	}

  	return null;

  	// loop where sum != 0, sum > d , sum+1 <d

  };


  /*
  THREE.CurvePath.prototype.getTangent = function( t ) {
  };*/


  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength

  THREE$CurvePath.prototype.getLength = function() {

  	var lens = this.getCurveLengths();
  	return lens[ lens.length - 1 ];

  };


  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.

  THREE$CurvePath.prototype.getCurveLengths = function() {

  	// We use cache values if curves and cache array are same length

  	if ( this.cacheLengths && this.cacheLengths.length === this.curves.length ) {

  		return this.cacheLengths;

  	}

  	// Get length of sub-curve
  	// Push sums into cached array

  	var lengths = [], sums = 0;
  	var i, il = this.curves.length;

  	for ( i = 0; i < il; i ++ ) {

  		sums += this.curves[ i ].getLength();
  		lengths.push( sums );

  	}

  	this.cacheLengths = lengths;

  	return lengths;

  };


  // Returns min and max coordinates

  THREE$CurvePath.prototype.getBoundingBox = function () {

  	var points = this.getPoints();

  	var maxX, maxY, maxZ;
  	var minX, minY, minZ;

  	maxX = maxY = Number.NEGATIVE_INFINITY;
  	minX = minY = Number.POSITIVE_INFINITY;

  	var p, i, il, sum;

  	var v3 = (points[0] && points[0].isVector3);

  	sum = v3 ? new THREE$Vector3() : new THREE$Vector2();

  	for ( i = 0, il = points.length; i < il; i ++ ) {

  		p = points[ i ];

  		if ( p.x > maxX ) maxX = p.x;
  		else if ( p.x < minX ) minX = p.x;

  		if ( p.y > maxY ) maxY = p.y;
  		else if ( p.y < minY ) minY = p.y;

  		if ( v3 ) {

  			if ( p.z > maxZ ) maxZ = p.z;
  			else if ( p.z < minZ ) minZ = p.z;

  		}

  		sum.add( p );

  	}

  	var ret = {

  		minX: minX,
  		minY: minY,
  		maxX: maxX,
  		maxY: maxY

  	};

  	if ( v3 ) {

  		ret.maxZ = maxZ;
  		ret.minZ = minZ;

  	}

  	return ret;

  };


  /**************************************************************
   *	Create Geometries Helpers
   **************************************************************/

  /// Generate geometry from path points (for Line or Points objects)

  THREE$CurvePath.prototype.createPointsGeometry = function( divisions ) {

  	var pts = this.getPoints( divisions, true );
  	return this.createGeometry( pts );

  };


  // Generate geometry from equidistant sampling along the path

  THREE$CurvePath.prototype.createSpacedPointsGeometry = function( divisions ) {

  	var pts = this.getSpacedPoints( divisions, true );
  	return this.createGeometry( pts );

  };

  THREE$CurvePath.prototype.createGeometry = function( points ) {

  	var geometry = new THREE$Geometry();

  	for ( var i = 0; i < points.length; i ++ ) {

  		geometry.vertices.push( new THREE$Vector3( points[ i ].x, points[ i ].y, points[ i ].z || 0) );

  	}

  	return geometry;

  };


  /**************************************************************
   *	Bend / Wrap Helper Methods
   **************************************************************/

  // Wrap path / Bend modifiers?

  THREE$CurvePath.prototype.addWrapPath = function ( bendpath ) {

  	this.bends.push( bendpath );

  };

  THREE$CurvePath.prototype.getTransformedPoints = function( segments, bends ) {

  	var oldPts = this.getPoints( segments ); // getPoints getSpacedPoints
  	var i, il;

  	if ( ! bends ) {

  		bends = this.bends;

  	}

  	for ( i = 0, il = bends.length; i < il; i ++ ) {

  		oldPts = this.getWrapPoints( oldPts, bends[ i ] );

  	}

  	return oldPts;

  };

  THREE$CurvePath.prototype.getTransformedSpacedPoints = function( segments, bends ) {

  	var oldPts = this.getSpacedPoints( segments );

  	var i, il;

  	if ( ! bends ) {

  		bends = this.bends;

  	}

  	for ( i = 0, il = bends.length; i < il; i ++ ) {

  		oldPts = this.getWrapPoints( oldPts, bends[ i ] );

  	}

  	return oldPts;

  };


  // This returns getPoints() bend/wrapped around the contour of a path.
  // Read http://www.planetclegg.com/projects/WarpingTextToSplines.html

  THREE$CurvePath.prototype.getWrapPoints = function ( oldPts, path ) {

  	var bounds = this.getBoundingBox();

  	var i, il, p, oldX, oldY, xNorm;

  	for ( i = 0, il = oldPts.length; i < il; i ++ ) {

  		p = oldPts[ i ];

  		oldX = p.x;
  		oldY = p.y;

  		xNorm = oldX / bounds.maxX;

  		// If using actual distance, for length > path, requires line extrusions
  		//xNorm = path.getUtoTmapping(xNorm, oldX); // 3 styles. 1) wrap stretched. 2) wrap stretch by arc length 3) warp by actual distance

  		xNorm = path.getUtoTmapping( xNorm, oldX );

  		// check for out of bounds?

  		var pathPt = path.getPoint( xNorm );
  		var normal = path.getTangent( xNorm );
  		normal.set( - normal.y, normal.x ).multiplyScalar( oldY );

  		p.x = pathPt.x + normal.x;
  		p.y = pathPt.y + normal.y;

  	}

  	return oldPts;

  };



  /**************************************************************
   *	Quadratic Bezier curve
   **************************************************************/


  function THREE$QuadraticBezierCurve ( v0, v1, v2 ) {
  	this.isQuadraticBezierCurve = true;

  	this.v0 = v0;
  	this.v1 = v1;
  	this.v2 = v2;

  }

  THREE$QuadraticBezierCurve.prototype = Object.create( THREE$Curve.prototype );
  THREE$QuadraticBezierCurve.prototype.constructor = THREE$QuadraticBezierCurve;


  THREE$QuadraticBezierCurve.prototype.getPoint = function ( t ) {

  	var vector = new THREE$Vector2();

  	vector.x = THREE$Shape.Utils.b2( t, this.v0.x, this.v1.x, this.v2.x );
  	vector.y = THREE$Shape.Utils.b2( t, this.v0.y, this.v1.y, this.v2.y );

  	return vector;

  };


  THREE$QuadraticBezierCurve.prototype.getTangent = function( t ) {

  	var vector = new THREE$Vector2();

  	vector.x = THREE$Curve.Utils.tangentQuadraticBezier( t, this.v0.x, this.v1.x, this.v2.x );
  	vector.y = THREE$Curve.Utils.tangentQuadraticBezier( t, this.v0.y, this.v1.y, this.v2.y );

  	// returns unit vector

  	return vector.normalize();

  };



  /**************************************************************
   *	Cubic Bezier curve
   **************************************************************/

  function THREE$CubicBezierCurve ( v0, v1, v2, v3 ) {
  	this.isCubicBezierCurve = true;

  	this.v0 = v0;
  	this.v1 = v1;
  	this.v2 = v2;
  	this.v3 = v3;

  }

  THREE$CubicBezierCurve.prototype = Object.create( THREE$Curve.prototype );
  THREE$CubicBezierCurve.prototype.constructor = THREE$CubicBezierCurve;

  THREE$CubicBezierCurve.prototype.getPoint = function ( t ) {

  	var tx, ty;

  	tx = THREE$Shape.Utils.b3( t, this.v0.x, this.v1.x, this.v2.x, this.v3.x );
  	ty = THREE$Shape.Utils.b3( t, this.v0.y, this.v1.y, this.v2.y, this.v3.y );

  	return new THREE$Vector2( tx, ty );

  };

  THREE$CubicBezierCurve.prototype.getTangent = function( t ) {

  	var tx, ty;

  	tx = THREE$Curve.Utils.tangentCubicBezier( t, this.v0.x, this.v1.x, this.v2.x, this.v3.x );
  	ty = THREE$Curve.Utils.tangentCubicBezier( t, this.v0.y, this.v1.y, this.v2.y, this.v3.y );

  	var tangent = new THREE$Vector2( tx, ty );
  	tangent.normalize();

  	return tangent;

  };



  /**************************************************************
   *	Spline curve
   **************************************************************/

  function THREE$SplineCurve ( points /* array of Vector2 */ ) {
  	this.isSplineCurve = true;

  	this.points = ( points == undefined ) ? [] : points;

  }

  THREE$SplineCurve.prototype = Object.create( THREE$Curve.prototype );
  THREE$SplineCurve.prototype.constructor = THREE$SplineCurve;

  THREE$SplineCurve.prototype.getPoint = function ( t ) {

  	var points = this.points;
  	var point = ( points.length - 1 ) * t;

  	var intPoint = Math.floor( point );
  	var weight = point - intPoint;

  	var point0 = points[ intPoint === 0 ? intPoint : intPoint - 1 ];
  	var point1 = points[ intPoint ];
  	var point2 = points[ intPoint > points.length - 2 ? points.length - 1 : intPoint + 1 ];
  	var point3 = points[ intPoint > points.length - 3 ? points.length - 1 : intPoint + 2 ];

  	var vector = new THREE$Vector2();

  	vector.x = THREE$Curve.Utils.interpolate( point0.x, point1.x, point2.x, point3.x, weight );
  	vector.y = THREE$Curve.Utils.interpolate( point0.y, point1.y, point2.y, point3.y, weight );

  	return vector;

  };



  /**************************************************************
   *	Ellipse curve
   **************************************************************/

  function THREE$EllipseCurve ( aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise ) {
  	this.isEllipseCurve = true;

  	this.aX = aX;
  	this.aY = aY;

  	this.xRadius = xRadius;
  	this.yRadius = yRadius;

  	this.aStartAngle = aStartAngle;
  	this.aEndAngle = aEndAngle;

  	this.aClockwise = aClockwise;

  }

  THREE$EllipseCurve.prototype = Object.create( THREE$Curve.prototype );
  THREE$EllipseCurve.prototype.constructor = THREE$EllipseCurve;

  THREE$EllipseCurve.prototype.getPoint = function ( t ) {

  	var deltaAngle = this.aEndAngle - this.aStartAngle;

  	if ( deltaAngle < 0 ) deltaAngle += Math.PI * 2;
  	if ( deltaAngle > Math.PI * 2 ) deltaAngle -= Math.PI * 2;

  	var angle;

  	if ( this.aClockwise === true ) {

  		angle = this.aEndAngle + ( 1 - t ) * ( Math.PI * 2 - deltaAngle );

  	} else {

  		angle = this.aStartAngle + t * deltaAngle;

  	}
  	
  	var vector = new THREE$Vector2();

  	vector.x = this.aX + this.xRadius * Math.cos( angle );
  	vector.y = this.aY + this.yRadius * Math.sin( angle );

  	return vector;

  };


  var THREE$PathActions;


  /**
   * @author zz85 / http://www.lab4games.net/zz85/blog
   * Creates free form 2d path using series of points, lines or curves.
   *
   **/

  function THREE$Path ( points ) {
  	this.isPath = true;

  	THREE$CurvePath.call(this);

  	this.actions = [];

  	if ( points ) {

  		this.fromPoints( points );

  	}

  }

  THREE$Path.prototype = Object.create( THREE$CurvePath.prototype );
  THREE$Path.prototype.constructor = THREE$Path;

  THREE$PathActions = {

  	MOVE_TO: 'moveTo',
  	LINE_TO: 'lineTo',
  	QUADRATIC_CURVE_TO: 'quadraticCurveTo', // Bezier quadratic curve
  	BEZIER_CURVE_TO: 'bezierCurveTo', 		// Bezier cubic curve
  	CSPLINE_THRU: 'splineThru',				// Catmull-Rom spline
  	ARC: 'arc',								// Circle
  	ELLIPSE: 'ellipse'
  };


  // TODO Clean up PATH API

  // Create path using straight lines to connect all points
  // - vectors: array of Vector2

  THREE$Path.prototype.fromPoints = function ( vectors ) {

  	this.moveTo( vectors[ 0 ].x, vectors[ 0 ].y );

  	for ( var v = 1, vlen = vectors.length; v < vlen; v ++ ) {

  		this.lineTo( vectors[ v ].x, vectors[ v ].y );

  	}

  };


  // startPath() endPath()?

  THREE$Path.prototype.moveTo = function ( x, y ) {

  	var args = Array.prototype.slice.call( arguments );
  	this.actions.push( { action: THREE$PathActions.MOVE_TO, args: args } );

  };

  THREE$Path.prototype.lineTo = function ( x, y ) {

  	var args = Array.prototype.slice.call( arguments );

  	var lastargs = this.actions[ this.actions.length - 1 ].args;

  	var x0 = lastargs[ lastargs.length - 2 ];
  	var y0 = lastargs[ lastargs.length - 1 ];

  	var curve = new THREE$LineCurve( new THREE$Vector2( x0, y0 ), new THREE$Vector2( x, y ) );
  	this.curves.push( curve );

  	this.actions.push( { action: THREE$PathActions.LINE_TO, args: args } );

  };

  THREE$Path.prototype.quadraticCurveTo = function( aCPx, aCPy, aX, aY ) {

  	var args = Array.prototype.slice.call( arguments );

  	var lastargs = this.actions[ this.actions.length - 1 ].args;

  	var x0 = lastargs[ lastargs.length - 2 ];
  	var y0 = lastargs[ lastargs.length - 1 ];

  	var curve = new THREE$QuadraticBezierCurve( new THREE$Vector2( x0, y0 ),
  												new THREE$Vector2( aCPx, aCPy ),
  												new THREE$Vector2( aX, aY ) );
  	this.curves.push( curve );

  	this.actions.push( { action: THREE$PathActions.QUADRATIC_CURVE_TO, args: args } );

  };

  THREE$Path.prototype.bezierCurveTo = function( aCP1x, aCP1y,
  											   aCP2x, aCP2y,
  											   aX, aY ) {

  	var args = Array.prototype.slice.call( arguments );

  	var lastargs = this.actions[ this.actions.length - 1 ].args;

  	var x0 = lastargs[ lastargs.length - 2 ];
  	var y0 = lastargs[ lastargs.length - 1 ];

  	var curve = new THREE$CubicBezierCurve( new THREE$Vector2( x0, y0 ),
  											new THREE$Vector2( aCP1x, aCP1y ),
  											new THREE$Vector2( aCP2x, aCP2y ),
  											new THREE$Vector2( aX, aY ) );
  	this.curves.push( curve );

  	this.actions.push( { action: THREE$PathActions.BEZIER_CURVE_TO, args: args } );

  };

  THREE$Path.prototype.splineThru = function( pts /*Array of Vector*/ ) {

  	var args = Array.prototype.slice.call( arguments );
  	var lastargs = this.actions[ this.actions.length - 1 ].args;

  	var x0 = lastargs[ lastargs.length - 2 ];
  	var y0 = lastargs[ lastargs.length - 1 ];
  //---
  	var npts = [ new THREE$Vector2( x0, y0 ) ];
  	Array.prototype.push.apply( npts, pts );

  	var curve = new THREE$SplineCurve( npts );
  	this.curves.push( curve );

  	this.actions.push( { action: THREE$PathActions.CSPLINE_THRU, args: args } );

  };


  // FUTURE: Change the API or follow canvas API?

  THREE$Path.prototype.arc = function ( aX, aY, aRadius,
  									  aStartAngle, aEndAngle, aClockwise ) {

  	var lastargs = this.actions[ this.actions.length - 1].args;
  	var x0 = lastargs[ lastargs.length - 2 ];
  	var y0 = lastargs[ lastargs.length - 1 ];

  	this.absarc(aX + x0, aY + y0, aRadius,
  		aStartAngle, aEndAngle, aClockwise );

   };

  THREE$Path.prototype.absarc = function ( aX, aY, aRadius,
  									  aStartAngle, aEndAngle, aClockwise ) {
  	this.absellipse(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
   };

  THREE$Path.prototype.ellipse = function ( aX, aY, xRadius, yRadius,
  									  aStartAngle, aEndAngle, aClockwise ) {

  	var lastargs = this.actions[ this.actions.length - 1].args;
  	var x0 = lastargs[ lastargs.length - 2 ];
  	var y0 = lastargs[ lastargs.length - 1 ];

  	this.absellipse(aX + x0, aY + y0, xRadius, yRadius,
  		aStartAngle, aEndAngle, aClockwise );

   };


  THREE$Path.prototype.absellipse = function ( aX, aY, xRadius, yRadius,
  									  aStartAngle, aEndAngle, aClockwise ) {

  	var args = Array.prototype.slice.call( arguments );
  	var curve = new THREE$EllipseCurve( aX, aY, xRadius, yRadius,
  									aStartAngle, aEndAngle, aClockwise );
  	this.curves.push( curve );

  	var lastPoint = curve.getPoint(1);
  	args.push(lastPoint.x);
  	args.push(lastPoint.y);

  	this.actions.push( { action: THREE$PathActions.ELLIPSE, args: args } );

   };

  THREE$Path.prototype.getSpacedPoints = function ( divisions, closedPath ) {

  	if ( ! divisions ) divisions = 40;

  	var points = [];

  	for ( var i = 0; i < divisions; i ++ ) {

  		points.push( this.getPoint( i / divisions ) );

  		//if( !this.getPoint( i / divisions ) ) throw "DIE";

  	}

  	// if ( closedPath ) {
  	//
  	// 	points.push( points[ 0 ] );
  	//
  	// }

  	return points;

  };


  /* Return an array of vectors based on contour of the path */

  THREE$Path.prototype.getPoints = function( divisions, closedPath ) {

  	if (this.useSpacedPoints) {
  		return this.getSpacedPoints( divisions, closedPath );
  	}

  	divisions = divisions || 12;

  	var points = [];

  	var i, il, item, action, args;
  	var cpx, cpy, cpx2, cpy2, cpx1, cpy1, cpx0, cpy0,
  		laste, j,
  		t, tx, ty;

  	for ( i = 0, il = this.actions.length; i < il; i ++ ) {

  		item = this.actions[ i ];

  		action = item.action;
  		args = item.args;

  		switch ( action ) {

  		case THREE$PathActions.MOVE_TO:

  			points.push( new THREE$Vector2( args[ 0 ], args[ 1 ] ) );

  			break;

  		case THREE$PathActions.LINE_TO:

  			points.push( new THREE$Vector2( args[ 0 ], args[ 1 ] ) );

  			break;

  		case THREE$PathActions.QUADRATIC_CURVE_TO:

  			cpx  = args[ 2 ];
  			cpy  = args[ 3 ];

  			cpx1 = args[ 0 ];
  			cpy1 = args[ 1 ];

  			if ( points.length > 0 ) {

  				laste = points[ points.length - 1 ];

  				cpx0 = laste.x;
  				cpy0 = laste.y;

  			} else {

  				laste = this.actions[ i - 1 ].args;

  				cpx0 = laste[ laste.length - 2 ];
  				cpy0 = laste[ laste.length - 1 ];

  			}

  			for ( j = 1; j <= divisions; j ++ ) {

  				t = j / divisions;

  				tx = THREE$Shape.Utils.b2( t, cpx0, cpx1, cpx );
  				ty = THREE$Shape.Utils.b2( t, cpy0, cpy1, cpy );

  				points.push( new THREE$Vector2( tx, ty ) );

  			}

  			break;

  		case THREE$PathActions.BEZIER_CURVE_TO:

  			cpx  = args[ 4 ];
  			cpy  = args[ 5 ];

  			cpx1 = args[ 0 ];
  			cpy1 = args[ 1 ];

  			cpx2 = args[ 2 ];
  			cpy2 = args[ 3 ];

  			if ( points.length > 0 ) {

  				laste = points[ points.length - 1 ];

  				cpx0 = laste.x;
  				cpy0 = laste.y;

  			} else {

  				laste = this.actions[ i - 1 ].args;

  				cpx0 = laste[ laste.length - 2 ];
  				cpy0 = laste[ laste.length - 1 ];

  			}


  			for ( j = 1; j <= divisions; j ++ ) {

  				t = j / divisions;

  				tx = THREE$Shape.Utils.b3( t, cpx0, cpx1, cpx2, cpx );
  				ty = THREE$Shape.Utils.b3( t, cpy0, cpy1, cpy2, cpy );

  				points.push( new THREE$Vector2( tx, ty ) );

  			}

  			break;

  		case THREE$PathActions.CSPLINE_THRU:

  			laste = this.actions[ i - 1 ].args;

  			var last = new THREE$Vector2( laste[ laste.length - 2 ], laste[ laste.length - 1 ] );
  			var spts = [ last ];

  			var n = divisions * args[ 0 ].length;

  			spts = spts.concat( args[ 0 ] );

  			var spline = new THREE$SplineCurve( spts );

  			for ( j = 1; j <= n; j ++ ) {

  				points.push( spline.getPointAt( j / n ) ) ;

  			}

  			break;

  		case THREE$PathActions.ARC:

  			var aX = args[ 0 ], aY = args[ 1 ],
  				aRadius = args[ 2 ],
  				aStartAngle = args[ 3 ], aEndAngle = args[ 4 ],
  				aClockwise = !! args[ 5 ];

  			var deltaAngle = aEndAngle - aStartAngle;
  			var angle;
  			var tdivisions = divisions * 2;

  			for ( j = 1; j <= tdivisions; j ++ ) {

  				t = j / tdivisions;

  				if ( ! aClockwise ) {

  					t = 1 - t;

  				}

  				angle = aStartAngle + t * deltaAngle;

  				tx = aX + aRadius * Math.cos( angle );
  				ty = aY + aRadius * Math.sin( angle );

  				//console.log('t', t, 'angle', angle, 'tx', tx, 'ty', ty);

  				points.push( new THREE$Vector2( tx, ty ) );

  			}

  			//console.log(points);

  			break;

  		case THREE$PathActions.ELLIPSE:

  			var aX = args[ 0 ], aY = args[ 1 ],
  				xRadius = args[ 2 ],
  				yRadius = args[ 3 ],
  				aStartAngle = args[ 4 ], aEndAngle = args[ 5 ],
  				aClockwise = !! args[ 6 ];


  			var deltaAngle = aEndAngle - aStartAngle;
  			var angle;
  			var tdivisions = divisions * 2;

  			for ( j = 1; j <= tdivisions; j ++ ) {

  				t = j / tdivisions;

  				if ( ! aClockwise ) {

  					t = 1 - t;

  				}

  				angle = aStartAngle + t * deltaAngle;

  				tx = aX + xRadius * Math.cos( angle );
  				ty = aY + yRadius * Math.sin( angle );

  				//console.log('t', t, 'angle', angle, 'tx', tx, 'ty', ty);

  				points.push( new THREE$Vector2( tx, ty ) );

  			}

  			//console.log(points);

  			break;

  		} // end switch

  	}



  	// Normalize to remove the closing point by default.
  	var lastPoint = points[ points.length - 1];
  	var EPSILON = 0.0000000001;
  	if ( Math.abs(lastPoint.x - points[ 0 ].x) < EPSILON &&
  			 Math.abs(lastPoint.y - points[ 0 ].y) < EPSILON)
  		points.splice( points.length - 1, 1);
  	if ( closedPath ) {

  		points.push( points[ 0 ] );

  	}

  	return points;

  };


  //
  // Breaks path into shapes
  //
  //	Assumptions (if parameter isCCW==true the opposite holds):
  //	- solid shapes are defined clockwise (CW)
  //	- holes are defined counterclockwise (CCW)
  //
  //	If parameter noHoles==true:
  //  - all subPaths are regarded as solid shapes
  //  - definition order CW/CCW has no relevance
  //

  THREE$Path.prototype.toShapes = function( isCCW, noHoles ) {

  	function extractSubpaths( inActions ) {

  		var i, il, item, action, args;

  		var subPaths = [], lastPath = new THREE$Path();

  		for ( i = 0, il = inActions.length; i < il; i ++ ) {

  			item = inActions[ i ];

  			args = item.args;
  			action = item.action;

  			if ( action === THREE$PathActions.MOVE_TO ) {

  				if ( lastPath.actions.length !== 0 ) {

  					subPaths.push( lastPath );
  					lastPath = new THREE$Path();

  				}

  			}

  			lastPath[ action ].apply( lastPath, args );

  		}

  		if ( lastPath.actions.length !== 0 ) {

  			subPaths.push( lastPath );

  		}

  		// console.log(subPaths);

  		return	subPaths;
  	}

  	function toShapesNoHoles( inSubpaths ) {

  		var shapes = [];

  		for ( var i = 0, il = inSubpaths.length; i < il; i ++ ) {

  			var tmpPath = inSubpaths[ i ];

  			var tmpShape = new THREE$Shape();
  			tmpShape.actions = tmpPath.actions;
  			tmpShape.curves = tmpPath.curves;

  			shapes.push( tmpShape );
  		}

  		//console.log("shape", shapes);

  		return shapes;
  	}

  	function isPointInsidePolygon( inPt, inPolygon ) {
  		var EPSILON = 0.0000000001;

  		var polyLen = inPolygon.length;

  		// inPt on polygon contour => immediate success    or
  		// toggling of inside/outside at every single! intersection point of an edge
  		//  with the horizontal line through inPt, left of inPt
  		//  not counting lowerY endpoints of edges and whole edges on that line
  		var inside = false;
  		for ( var p = polyLen - 1, q = 0; q < polyLen; p = q ++ ) {
  			var edgeLowPt  = inPolygon[ p ];
  			var edgeHighPt = inPolygon[ q ];

  			var edgeDx = edgeHighPt.x - edgeLowPt.x;
  			var edgeDy = edgeHighPt.y - edgeLowPt.y;

  			if ( Math.abs(edgeDy) > EPSILON ) {			// not parallel
  				if ( edgeDy < 0 ) {
  					edgeLowPt  = inPolygon[ q ]; edgeDx = - edgeDx;
  					edgeHighPt = inPolygon[ p ]; edgeDy = - edgeDy;
  				}
  				if ( ( inPt.y < edgeLowPt.y ) || ( inPt.y > edgeHighPt.y ) ) 		continue;

  				if ( inPt.y === edgeLowPt.y ) {
  					if ( inPt.x === edgeLowPt.x )		return	true;		// inPt is on contour ?
  					// continue;				// no intersection or edgeLowPt => doesn't count !!!
  				} else {
  					var perpEdge = edgeDy * (inPt.x - edgeLowPt.x) - edgeDx * (inPt.y - edgeLowPt.y);
  					if ( perpEdge === 0 )				return	true;		// inPt is on contour ?
  					if ( perpEdge < 0 ) 				continue;
  					inside = ! inside;		// true intersection left of inPt
  				}
  			} else {		// parallel or collinear
  				if ( inPt.y !== edgeLowPt.y ) 		continue;			// parallel
  				// edge lies on the same horizontal line as inPt
  				if ( ( ( edgeHighPt.x <= inPt.x ) && ( inPt.x <= edgeLowPt.x ) ) ||
  					 ( ( edgeLowPt.x <= inPt.x ) && ( inPt.x <= edgeHighPt.x ) ) )		return	true;	// inPt: Point on contour !
  				// continue;
  			}
  		}

  		return	inside;
  	}


  	var subPaths = extractSubpaths( this.actions );
  	if ( subPaths.length === 0 ) return [];

  	if ( noHoles === true )	return	toShapesNoHoles( subPaths );


  	var solid, tmpPath, tmpShape, shapes = [];

  	if ( subPaths.length === 1) {

  		tmpPath = subPaths[0];
  		tmpShape = new THREE$Shape();
  		tmpShape.actions = tmpPath.actions;
  		tmpShape.curves = tmpPath.curves;
  		shapes.push( tmpShape );
  		return shapes;

  	}

  	var holesFirst = ! THREE$Shape.Utils.isClockWise( subPaths[ 0 ].getPoints() );
  	holesFirst = isCCW ? ! holesFirst : holesFirst;

  	// console.log("Holes first", holesFirst);

  	var betterShapeHoles = [];
  	var newShapes = [];
  	var newShapeHoles = [];
  	var mainIdx = 0;
  	var tmpPoints;

  	newShapes[mainIdx] = undefined;
  	newShapeHoles[mainIdx] = [];

  	var i, il;

  	for ( i = 0, il = subPaths.length; i < il; i ++ ) {

  		tmpPath = subPaths[ i ];
  		tmpPoints = tmpPath.getPoints();
  		solid = THREE$Shape.Utils.isClockWise( tmpPoints );
  		solid = isCCW ? ! solid : solid;

  		if ( solid ) {

  			if ( (! holesFirst ) && ( newShapes[mainIdx] ) )	mainIdx ++;

  			newShapes[mainIdx] = { s: new THREE$Shape(), p: tmpPoints };
  			newShapes[mainIdx].s.actions = tmpPath.actions;
  			newShapes[mainIdx].s.curves = tmpPath.curves;

  			if ( holesFirst )	mainIdx ++;
  			newShapeHoles[mainIdx] = [];

  			//console.log('cw', i);

  		} else {

  			newShapeHoles[mainIdx].push( { h: tmpPath, p: tmpPoints[0] } );

  			//console.log('ccw', i);

  		}

  	}

  	// only Holes? -> probably all Shapes with wrong orientation
  	if ( ! newShapes[0] )	return	toShapesNoHoles( subPaths );


  	if ( newShapes.length > 1 ) {
  		var ambiguous = false;
  		var toChange = [];

  		for (var sIdx = 0, sLen = newShapes.length; sIdx < sLen; sIdx ++ ) {
  			betterShapeHoles[sIdx] = [];
  		}
  		for (var sIdx = 0, sLen = newShapes.length; sIdx < sLen; sIdx ++ ) {
  			var sho = newShapeHoles[sIdx];
  			for (var hIdx = 0; hIdx < sho.length; hIdx ++ ) {
  				var ho = sho[hIdx];
  				var hole_unassigned = true;
  				for (var s2Idx = 0; s2Idx < newShapes.length; s2Idx ++ ) {
  					if ( isPointInsidePolygon( ho.p, newShapes[s2Idx].p ) ) {
  						if ( sIdx !== s2Idx )	toChange.push( { froms: sIdx, tos: s2Idx, hole: hIdx } );
  						if ( hole_unassigned ) {
  							hole_unassigned = false;
  							betterShapeHoles[s2Idx].push( ho );
  						} else {
  							ambiguous = true;
  						}
  					}
  				}
  				if ( hole_unassigned ) { betterShapeHoles[sIdx].push( ho ); }
  			}
  		}
  		// console.log("ambiguous: ", ambiguous);
  		if ( toChange.length > 0 ) {
  			// console.log("to change: ", toChange);
  			if (! ambiguous)	newShapeHoles = betterShapeHoles;
  		}
  	}

  	var tmpHoles, j, jl;
  	for ( i = 0, il = newShapes.length; i < il; i ++ ) {
  		tmpShape = newShapes[i].s;
  		shapes.push( tmpShape );
  		tmpHoles = newShapeHoles[i];
  		for ( j = 0, jl = tmpHoles.length; j < jl; j ++ ) {
  			tmpShape.holes.push( tmpHoles[j].h );
  		}
  	}

  	//console.log("shape", shapes);

  	return shapes;

  };



  /**
   * @author WestLangley / https://github.com/WestLangley
   * @author zz85 / https://github.com/zz85
   * @author miningold / https://github.com/miningold
   * @author jonobr1 / https://github.com/jonobr1
   *
   * Modified from the TorusKnotGeometry by @oosmoxiecode
   *
   * Creates a tube which extrudes along a 3d spline
   *
   * Uses parallel transport frames as described in
   * http://www.cs.indiana.edu/pub/techreports/TR425.pdf
   */

  function THREE$TubeGeometry ( path, segments, radius, radialSegments, closed, taper ) {
  	this.isTubeGeometry = true;

  	THREE$Geometry.call( this );

  	this.type = 'TubeGeometry';

  	this.parameters = {
  		path: path,
  		segments: segments,
  		radius: radius,
  		radialSegments: radialSegments,
  		closed: closed
  	};

  	segments = segments || 64;
  	radius = radius || 1;
  	radialSegments = radialSegments || 8;
  	closed = closed || false;
  	taper = taper || THREE$TubeGeometry.NoTaper;

  	var grid = [];

  	var scope = this,

  		tangent,
  		normal,
  		binormal,

  		numpoints = segments + 1,

  		u, v, r,

  		cx, cy,
  		pos, pos2 = new THREE$Vector3(),
  		i, j,
  		ip, jp,
  		a, b, c, d,
  		uva, uvb, uvc, uvd;

  	var frames = new THREE$TubeGeometry.FrenetFrames( path, segments, closed ),
  		tangents = frames.tangents,
  		normals = frames.normals,
  		binormals = frames.binormals;

  	// proxy internals
  	this.tangents = tangents;
  	this.normals = normals;
  	this.binormals = binormals;

  	function vert( x, y, z ) {

  		return scope.vertices.push( new THREE$Vector3( x, y, z ) ) - 1;

  	}

  	// construct the grid

  	for ( i = 0; i < numpoints; i ++ ) {

  		grid[ i ] = [];

  		u = i / ( numpoints - 1 );

  		pos = path.getPointAt( u );

  		tangent = tangents[ i ];
  		normal = normals[ i ];
  		binormal = binormals[ i ];

  		r = radius * taper( u );

  		for ( j = 0; j < radialSegments; j ++ ) {

  			v = j / radialSegments * 2 * Math.PI;

  			cx = - r * Math.cos( v ); // TODO: Hack: Negating it so it faces outside.
  			cy = r * Math.sin( v );

  			pos2.copy( pos );
  			pos2.x += cx * normal.x + cy * binormal.x;
  			pos2.y += cx * normal.y + cy * binormal.y;
  			pos2.z += cx * normal.z + cy * binormal.z;

  			grid[ i ][ j ] = vert( pos2.x, pos2.y, pos2.z );

  		}
  	}


  	// construct the mesh

  	for ( i = 0; i < segments; i ++ ) {

  		for ( j = 0; j < radialSegments; j ++ ) {

  			ip = ( closed ) ? (i + 1) % segments : i + 1;
  			jp = (j + 1) % radialSegments;

  			a = grid[ i ][ j ];		// *** NOT NECESSARILY PLANAR ! ***
  			b = grid[ ip ][ j ];
  			c = grid[ ip ][ jp ];
  			d = grid[ i ][ jp ];

  			uva = new THREE$Vector2( i / segments, j / radialSegments );
  			uvb = new THREE$Vector2( ( i + 1 ) / segments, j / radialSegments );
  			uvc = new THREE$Vector2( ( i + 1 ) / segments, ( j + 1 ) / radialSegments );
  			uvd = new THREE$Vector2( i / segments, ( j + 1 ) / radialSegments );

  			this.faces.push( new THREE$Face3( a, b, d ) );
  			this.faceVertexUvs[ 0 ].push( [ uva, uvb, uvd ] );

  			this.faces.push( new THREE$Face3( b, c, d ) );
  			this.faceVertexUvs[ 0 ].push( [ uvb.clone(), uvc, uvd.clone() ] );

  		}
  	}

  	this.computeFaceNormals();
  	this.computeVertexNormals();

  }

  THREE$TubeGeometry.prototype = Object.create( THREE$Geometry.prototype );
  THREE$TubeGeometry.prototype.constructor = THREE$TubeGeometry;

  THREE$TubeGeometry.NoTaper = function ( u ) {

  	return 1;

  };

  THREE$TubeGeometry.SinusoidalTaper = function ( u ) {

  	return Math.sin( Math.PI * u );

  };

  // For computing of Frenet frames, exposing the tangents, normals and binormals the spline
  THREE$TubeGeometry.FrenetFrames = function ( path, segments, closed ) {

  	var	normal = new THREE$Vector3(),

  		tangents = [],
  		normals = [],
  		binormals = [],

  		vec = new THREE$Vector3(),
  		mat = new THREE$Matrix4(),

  		numpoints = segments + 1,
  		theta,
  		epsilon = 0.0001,
  		smallest,

  		tx, ty, tz,
  		i, u;


  	// expose internals
  	this.tangents = tangents;
  	this.normals = normals;
  	this.binormals = binormals;

  	// compute the tangent vectors for each segment on the path

  	for ( i = 0; i < numpoints; i ++ ) {

  		u = i / ( numpoints - 1 );

  		tangents[ i ] = path.getTangentAt( u );
  		tangents[ i ].normalize();

  	}

  	initialNormal3();

  	/*
  	function initialNormal1(lastBinormal) {
  		// fixed start binormal. Has dangers of 0 vectors
  		normals[ 0 ] = new THREE.Vector3();
  		binormals[ 0 ] = new THREE.Vector3();
  		if (lastBinormal===undefined) lastBinormal = new THREE.Vector3( 0, 0, 1 );
  		normals[ 0 ].crossVectors( lastBinormal, tangents[ 0 ] ).normalize();
  		binormals[ 0 ].crossVectors( tangents[ 0 ], normals[ 0 ] ).normalize();
  	}

  	function initialNormal2() {

  		// This uses the Frenet-Serret formula for deriving binormal
  		var t2 = path.getTangentAt( epsilon );

  		normals[ 0 ] = new THREE.Vector3().subVectors( t2, tangents[ 0 ] ).normalize();
  		binormals[ 0 ] = new THREE.Vector3().crossVectors( tangents[ 0 ], normals[ 0 ] );

  		normals[ 0 ].crossVectors( binormals[ 0 ], tangents[ 0 ] ).normalize(); // last binormal x tangent
  		binormals[ 0 ].crossVectors( tangents[ 0 ], normals[ 0 ] ).normalize();

  	}
  	*/

  	function initialNormal3() {
  		// select an initial normal vector perpendicular to the first tangent vector,
  		// and in the direction of the smallest tangent xyz component

  		normals[ 0 ] = new THREE$Vector3();
  		binormals[ 0 ] = new THREE$Vector3();
  		smallest = Number.MAX_VALUE;
  		tx = Math.abs( tangents[ 0 ].x );
  		ty = Math.abs( tangents[ 0 ].y );
  		tz = Math.abs( tangents[ 0 ].z );

  		if ( tx <= smallest ) {
  			smallest = tx;
  			normal.set( 1, 0, 0 );
  		}

  		if ( ty <= smallest ) {
  			smallest = ty;
  			normal.set( 0, 1, 0 );
  		}

  		if ( tz <= smallest ) {
  			normal.set( 0, 0, 1 );
  		}

  		vec.crossVectors( tangents[ 0 ], normal ).normalize();

  		normals[ 0 ].crossVectors( tangents[ 0 ], vec );
  		binormals[ 0 ].crossVectors( tangents[ 0 ], normals[ 0 ] );
  	}


  	// compute the slowly-varying normal and binormal vectors for each segment on the path

  	for ( i = 1; i < numpoints; i ++ ) {

  		normals[ i ] = normals[ i - 1 ].clone();

  		binormals[ i ] = binormals[ i - 1 ].clone();

  		vec.crossVectors( tangents[ i - 1 ], tangents[ i ] );

  		if ( vec.length() > epsilon ) {

  			vec.normalize();

  			theta = Math.acos( THREE$Math.clamp( tangents[ i - 1 ].dot( tangents[ i ] ), - 1, 1 ) ); // clamp for floating pt errors

  			normals[ i ].applyMatrix4( mat.makeRotationAxis( vec, theta ) );

  		}

  		binormals[ i ].crossVectors( tangents[ i ], normals[ i ] );

  	}


  	// if the curve is closed, postprocess the vectors so the first and last normal vectors are the same

  	if ( closed ) {

  		theta = Math.acos( THREE$Math.clamp( normals[ 0 ].dot( normals[ numpoints - 1 ] ), - 1, 1 ) );
  		theta /= ( numpoints - 1 );

  		if ( tangents[ 0 ].dot( vec.crossVectors( normals[ 0 ], normals[ numpoints - 1 ] ) ) > 0 ) {

  			theta = - theta;

  		}

  		for ( i = 1; i < numpoints; i ++ ) {

  			// twist a little...
  			normals[ i ].applyMatrix4( mat.makeRotationAxis( tangents[ i ], theta * i ) );
  			binormals[ i ].crossVectors( tangents[ i ], normals[ i ] );

  		}

  	}
  };



  /**
   * @author zz85 / http://www.lab4games.net/zz85/blog
   *
   * Creates extruded geometry from a path shape.
   *
   * parameters = {
   *
   *  curveSegments: <int>, // number of points on the curves
   *  steps: <int>, // number of points for z-side extrusions / used for subdividing segments of extrude spline too
   *  amount: <int>, // Depth to extrude the shape
   *
   *  bevelEnabled: <bool>, // turn on bevel
   *  bevelThickness: <float>, // how deep into the original shape bevel goes
   *  bevelSize: <float>, // how far from shape outline is bevel
   *  bevelSegments: <int>, // number of bevel layers
   *
   *  extrudePath: <THREE.CurvePath> // 3d spline path to extrude shape along. (creates Frames if .frames aren't defined)
   *  frames: <THREE.TubeGeometry.FrenetFrames> // containing arrays of tangents, normals, binormals
   *
   *  uvGenerator: <Object> // object that provides UV generator functions
   *
   * }
   **/

  function THREE$ExtrudeGeometry ( shapes, options ) {
  	this.isExtrudeGeometry = true;

  	if ( typeof( shapes ) === "undefined" ) {
  		shapes = [];
  		return;
  	}

  	THREE$Geometry.call( this );

  	this.type = 'ExtrudeGeometry';

  	shapes = Array.isArray( shapes ) ? shapes : [ shapes ];

  	this.addShapeList( shapes, options );

  	this.computeFaceNormals();

  	// can't really use automatic vertex normals
  	// as then front and back sides get smoothed too
  	// should do separate smoothing just for sides

  	//this.computeVertexNormals();

  	//console.log( "took", ( Date.now() - startTime ) );

  }

  THREE$ExtrudeGeometry.prototype = Object.create( THREE$Geometry.prototype );
  THREE$ExtrudeGeometry.prototype.constructor = THREE$ExtrudeGeometry;

  THREE$ExtrudeGeometry.prototype.addShapeList = function ( shapes, options ) {
  	var sl = shapes.length;

  	for ( var s = 0; s < sl; s ++ ) {
  		var shape = shapes[ s ];
  		this.addShape( shape, options );
  	}
  };

  THREE$ExtrudeGeometry.prototype.addShape = function ( shape, options ) {

  	var amount = options.amount !== undefined ? options.amount : 100;

  	var bevelThickness = options.bevelThickness !== undefined ? options.bevelThickness : 6; // 10
  	var bevelSize = options.bevelSize !== undefined ? options.bevelSize : bevelThickness - 2; // 8
  	var bevelSegments = options.bevelSegments !== undefined ? options.bevelSegments : 3;

  	var bevelEnabled = options.bevelEnabled !== undefined ? options.bevelEnabled : true; // false

  	var curveSegments = options.curveSegments !== undefined ? options.curveSegments : 12;

  	var steps = options.steps !== undefined ? options.steps : 1;

  	var extrudePath = options.extrudePath;
  	var extrudePts, extrudeByPath = false;

  	// Use default WorldUVGenerator if no UV generators are specified.
  	var uvgen = options.UVGenerator !== undefined ? options.UVGenerator : THREE$ExtrudeGeometry.WorldUVGenerator;

  	var splineTube, binormal, normal, position2;
  	if ( extrudePath ) {

  		extrudePts = extrudePath.getSpacedPoints( steps );

  		extrudeByPath = true;
  		bevelEnabled = false; // bevels not supported for path extrusion

  		// SETUP TNB variables

  		// Reuse TNB from TubeGeomtry for now.
  		// TODO1 - have a .isClosed in spline?

  		splineTube = options.frames !== undefined ? options.frames : new THREE$TubeGeometry.FrenetFrames(extrudePath, steps, false);

  		// console.log(splineTube, 'splineTube', splineTube.normals.length, 'steps', steps, 'extrudePts', extrudePts.length);

  		binormal = new THREE$Vector3();
  		normal = new THREE$Vector3();
  		position2 = new THREE$Vector3();

  	}

  	// Safeguards if bevels are not enabled

  	if ( ! bevelEnabled ) {

  		bevelSegments = 0;
  		bevelThickness = 0;
  		bevelSize = 0;

  	}

  	// Variables initialization 

  	var ahole, h, hl; // looping of holes
  	var scope = this;

  	var shapesOffset = this.vertices.length;

  	var shapePoints = shape.extractPoints( curveSegments );

  	var vertices = shapePoints.shape;
  	var holes = shapePoints.holes;

  	var reverse = ! THREE$Shape.Utils.isClockWise( vertices ) ;

  	if ( reverse ) {

  		vertices = vertices.reverse();

  		// Maybe we should also check if holes are in the opposite direction, just to be safe ...

  		for ( h = 0, hl = holes.length; h < hl; h ++ ) {

  			ahole = holes[ h ];

  			if ( THREE$Shape.Utils.isClockWise( ahole ) ) {

  				holes[ h ] = ahole.reverse();

  			}

  		}

  		reverse = false; // If vertices are in order now, we shouldn't need to worry about them again (hopefully)!

  	}


  	var faces = THREE$Shape.Utils.triangulateShape ( vertices, holes );

  	/* Vertices */

  	var contour = vertices; // vertices has all points but contour has only points of circumference

  	for ( h = 0, hl = holes.length; h < hl; h ++ ) {

  		ahole = holes[ h ];

  		vertices = vertices.concat( ahole );

  	}


  	function scalePt2 ( pt, vec, size ) {

  		if ( ! vec ) console.error( "THREE.ExtrudeGeometry: vec does not exist" );

  		return vec.clone().multiplyScalar( size ).add( pt );

  	}

  	var b, bs, t, z,
  		vert, vlen = vertices.length,
  		face, flen = faces.length;


  	// Find directions for point movement


  	function getBevelVec( inPt, inPrev, inNext ) {

  		var EPSILON = 0.0000000001;

  		// computes for inPt the corresponding point inPt' on a new contour
  		//   shifted by 1 unit (length of normalized vector) to the left
  		// if we walk along contour clockwise, this new contour is outside the old one
  		//
  		// inPt' is the intersection of the two lines parallel to the two
  		//  adjacent edges of inPt at a distance of 1 unit on the left side.

  		var v_trans_x, v_trans_y, shrink_by = 1;		// resulting translation vector for inPt

  		// good reading for geometry algorithms (here: line-line intersection)
  		// http://geomalgorithms.com/a05-_intersect-1.html

  		var v_prev_x = inPt.x - inPrev.x, v_prev_y = inPt.y - inPrev.y;
  		var v_next_x = inNext.x - inPt.x, v_next_y = inNext.y - inPt.y;

  		var v_prev_lensq = ( v_prev_x * v_prev_x + v_prev_y * v_prev_y );

  		// check for collinear edges
  		var collinear0 = ( v_prev_x * v_next_y - v_prev_y * v_next_x );

  		if ( Math.abs( collinear0 ) > EPSILON ) {		// not collinear

  			// length of vectors for normalizing

  			var v_prev_len = Math.sqrt( v_prev_lensq );
  			var v_next_len = Math.sqrt( v_next_x * v_next_x + v_next_y * v_next_y );

  			// shift adjacent points by unit vectors to the left

  			var ptPrevShift_x = ( inPrev.x - v_prev_y / v_prev_len );
  			var ptPrevShift_y = ( inPrev.y + v_prev_x / v_prev_len );

  			var ptNextShift_x = ( inNext.x - v_next_y / v_next_len );
  			var ptNextShift_y = ( inNext.y + v_next_x / v_next_len );

  			// scaling factor for v_prev to intersection point

  			var sf = (  ( ptNextShift_x - ptPrevShift_x ) * v_next_y -
  						( ptNextShift_y - ptPrevShift_y ) * v_next_x    ) /
  					  ( v_prev_x * v_next_y - v_prev_y * v_next_x );

  			// vector from inPt to intersection point

  			v_trans_x = ( ptPrevShift_x + v_prev_x * sf - inPt.x );
  			v_trans_y = ( ptPrevShift_y + v_prev_y * sf - inPt.y );

  			// Don't normalize!, otherwise sharp corners become ugly
  			//  but prevent crazy spikes
  			var v_trans_lensq = ( v_trans_x * v_trans_x + v_trans_y * v_trans_y );
  			if ( v_trans_lensq <= 2 ) {
  				return	new THREE$Vector2( v_trans_x, v_trans_y );
  			} else {
  				shrink_by = Math.sqrt( v_trans_lensq / 2 );
  			}

  		} else {		// handle special case of collinear edges

  			var direction_eq = false;		// assumes: opposite
  			if ( v_prev_x > EPSILON ) {
  				if ( v_next_x > EPSILON ) { direction_eq = true; }
  			} else {
  				if ( v_prev_x < - EPSILON ) {
  					if ( v_next_x < - EPSILON ) { direction_eq = true; }
  				} else {
  					if ( Math.sign(v_prev_y) === Math.sign(v_next_y) ) { direction_eq = true; }
  				}
  			}

  			if ( direction_eq ) {
  				// console.log("Warning: lines are a straight sequence");
  				v_trans_x = - v_prev_y;
  				v_trans_y =  v_prev_x;
  				shrink_by = Math.sqrt( v_prev_lensq );
  			} else {
  				// console.log("Warning: lines are a straight spike");
  				v_trans_x = v_prev_x;
  				v_trans_y = v_prev_y;
  				shrink_by = Math.sqrt( v_prev_lensq / 2 );
  			}

  		}

  		return	new THREE$Vector2( v_trans_x / shrink_by, v_trans_y / shrink_by );

  	}


  	var contourMovements = [];

  	for ( var i = 0, il = contour.length, j = il - 1, k = i + 1; i < il; i ++, j ++, k ++ ) {

  		if ( j === il ) j = 0;
  		if ( k === il ) k = 0;

  		//  (j)---(i)---(k)
  		// console.log('i,j,k', i, j , k)

  		contourMovements[ i ] = getBevelVec( contour[ i ], contour[ j ], contour[ k ] );

  	}

  	var holesMovements = [], oneHoleMovements, verticesMovements = contourMovements.concat();

  	for ( h = 0, hl = holes.length; h < hl; h ++ ) {

  		ahole = holes[ h ];

  		oneHoleMovements = [];

  		for ( i = 0, il = ahole.length, j = il - 1, k = i + 1; i < il; i ++, j ++, k ++ ) {

  			if ( j === il ) j = 0;
  			if ( k === il ) k = 0;

  			//  (j)---(i)---(k)
  			oneHoleMovements[ i ] = getBevelVec( ahole[ i ], ahole[ j ], ahole[ k ] );

  		}

  		holesMovements.push( oneHoleMovements );
  		verticesMovements = verticesMovements.concat( oneHoleMovements );

  	}


  	// Loop bevelSegments, 1 for the front, 1 for the back

  	for ( b = 0; b < bevelSegments; b ++ ) {
  	//for ( b = bevelSegments; b > 0; b -- ) {

  		t = b / bevelSegments;
  		z = bevelThickness * ( 1 - t );

  		//z = bevelThickness * t;
  		bs = bevelSize * ( Math.sin ( t * Math.PI / 2 ) ) ; // curved
  		//bs = bevelSize * t ; // linear

  		// contract shape

  		for ( i = 0, il = contour.length; i < il; i ++ ) {

  			vert = scalePt2( contour[ i ], contourMovements[ i ], bs );

  			v( vert.x, vert.y,  - z );

  		}

  		// expand holes

  		for ( h = 0, hl = holes.length; h < hl; h ++ ) {

  			ahole = holes[ h ];
  			oneHoleMovements = holesMovements[ h ];

  			for ( i = 0, il = ahole.length; i < il; i ++ ) {

  				vert = scalePt2( ahole[ i ], oneHoleMovements[ i ], bs );

  				v( vert.x, vert.y,  - z );

  			}

  		}

  	}

  	bs = bevelSize;

  	// Back facing vertices

  	for ( i = 0; i < vlen; i ++ ) {

  		vert = bevelEnabled ? scalePt2( vertices[ i ], verticesMovements[ i ], bs ) : vertices[ i ];

  		if ( ! extrudeByPath ) {

  			v( vert.x, vert.y, 0 );

  		} else {

  			// v( vert.x, vert.y + extrudePts[ 0 ].y, extrudePts[ 0 ].x );

  			normal.copy( splineTube.normals[0] ).multiplyScalar(vert.x);
  			binormal.copy( splineTube.binormals[0] ).multiplyScalar(vert.y);

  			position2.copy( extrudePts[0] ).add(normal).add(binormal);

  			v( position2.x, position2.y, position2.z );

  		}

  	}

  	// Add stepped vertices...
  	// Including front facing vertices

  	var s;

  	for ( s = 1; s <= steps; s ++ ) {

  		for ( i = 0; i < vlen; i ++ ) {

  			vert = bevelEnabled ? scalePt2( vertices[ i ], verticesMovements[ i ], bs ) : vertices[ i ];

  			if ( ! extrudeByPath ) {

  				v( vert.x, vert.y, amount / steps * s );

  			} else {

  				// v( vert.x, vert.y + extrudePts[ s - 1 ].y, extrudePts[ s - 1 ].x );

  				normal.copy( splineTube.normals[s] ).multiplyScalar( vert.x );
  				binormal.copy( splineTube.binormals[s] ).multiplyScalar( vert.y );

  				position2.copy( extrudePts[s] ).add( normal ).add( binormal );

  				v( position2.x, position2.y, position2.z );

  			}

  		}

  	}


  	// Add bevel segments planes

  	//for ( b = 1; b <= bevelSegments; b ++ ) {
  	for ( b = bevelSegments - 1; b >= 0; b -- ) {

  		t = b / bevelSegments;
  		z = bevelThickness * ( 1 - t );
  		//bs = bevelSize * ( 1-Math.sin ( ( 1 - t ) * Math.PI/2 ) );
  		bs = bevelSize * Math.sin ( t * Math.PI / 2 ) ;

  		// contract shape

  		for ( i = 0, il = contour.length; i < il; i ++ ) {

  			vert = scalePt2( contour[ i ], contourMovements[ i ], bs );
  			v( vert.x, vert.y,  amount + z );

  		}

  		// expand holes

  		for ( h = 0, hl = holes.length; h < hl; h ++ ) {

  			ahole = holes[ h ];
  			oneHoleMovements = holesMovements[ h ];

  			for ( i = 0, il = ahole.length; i < il; i ++ ) {

  				vert = scalePt2( ahole[ i ], oneHoleMovements[ i ], bs );

  				if ( ! extrudeByPath ) {

  					v( vert.x, vert.y,  amount + z );

  				} else {

  					v( vert.x, vert.y + extrudePts[ steps - 1 ].y, extrudePts[ steps - 1 ].x + z );

  				}

  			}

  		}

  	}

  	/* Faces */

  	// Top and bottom faces

  	buildLidFaces();

  	// Sides faces

  	buildSideFaces();


  	/////  Internal functions

  	function buildLidFaces() {

  		if ( bevelEnabled ) {

  			var layer = 0 ; // steps + 1
  			var offset = vlen * layer;

  			// Bottom faces

  			for ( i = 0; i < flen; i ++ ) {

  				face = faces[ i ];
  				f3( face[ 2 ] + offset, face[ 1 ] + offset, face[ 0 ] + offset );

  			}

  			layer = steps + bevelSegments * 2;
  			offset = vlen * layer;

  			// Top faces

  			for ( i = 0; i < flen; i ++ ) {

  				face = faces[ i ];
  				f3( face[ 0 ] + offset, face[ 1 ] + offset, face[ 2 ] + offset );

  			}

  		} else {

  			// Bottom faces

  			for ( i = 0; i < flen; i ++ ) {

  				face = faces[ i ];
  				f3( face[ 2 ], face[ 1 ], face[ 0 ] );

  			}

  			// Top faces

  			for ( i = 0; i < flen; i ++ ) {

  				face = faces[ i ];
  				f3( face[ 0 ] + vlen * steps, face[ 1 ] + vlen * steps, face[ 2 ] + vlen * steps );

  			}
  		}

  	}

  	// Create faces for the z-sides of the shape

  	function buildSideFaces() {

  		var layeroffset = 0;
  		sidewalls( contour, layeroffset );
  		layeroffset += contour.length;

  		for ( h = 0, hl = holes.length; h < hl; h ++ ) {

  			ahole = holes[ h ];
  			sidewalls( ahole, layeroffset );

  			//, true
  			layeroffset += ahole.length;

  		}

  	}

  	function sidewalls( contour, layeroffset ) {

  		var j, k;
  		i = contour.length;

  		while ( -- i >= 0 ) {

  			j = i;
  			k = i - 1;
  			if ( k < 0 ) k = contour.length - 1;

  			//console.log('b', i,j, i-1, k,vertices.length);

  			var s = 0, sl = steps  + bevelSegments * 2;

  			for ( s = 0; s < sl; s ++ ) {

  				var slen1 = vlen * s;
  				var slen2 = vlen * ( s + 1 );

  				var a = layeroffset + j + slen1,
  					b = layeroffset + k + slen1,
  					c = layeroffset + k + slen2,
  					d = layeroffset + j + slen2;

  				f4( a, b, c, d, contour, s, sl, j, k );

  			}
  		}

  	}


  	function v( x, y, z ) {

  		scope.vertices.push( new THREE$Vector3( x, y, z ) );

  	}

  	function f3( a, b, c ) {

  		a += shapesOffset;
  		b += shapesOffset;
  		c += shapesOffset;

  		scope.faces.push( new THREE$Face3( a, b, c ) );

  		var uvs = uvgen.generateTopUV( scope, a, b, c );

  		scope.faceVertexUvs[ 0 ].push( uvs );

  	}

  	function f4( a, b, c, d, wallContour, stepIndex, stepsLength, contourIndex1, contourIndex2 ) {

  		a += shapesOffset;
  		b += shapesOffset;
  		c += shapesOffset;
  		d += shapesOffset;

  		scope.faces.push( new THREE$Face3( a, b, d ) );
  		scope.faces.push( new THREE$Face3( b, c, d ) );

  		var uvs = uvgen.generateSideWallUV( scope, a, b, c, d );

  		scope.faceVertexUvs[ 0 ].push( [ uvs[ 0 ], uvs[ 1 ], uvs[ 3 ] ] );
  		scope.faceVertexUvs[ 0 ].push( [ uvs[ 1 ], uvs[ 2 ], uvs[ 3 ] ] );

  	}

  };

  THREE$ExtrudeGeometry.WorldUVGenerator = {

  	generateTopUV: function ( geometry, indexA, indexB, indexC ) {

  		var vertices = geometry.vertices;

  		var a = vertices[ indexA ];
  		var b = vertices[ indexB ];
  		var c = vertices[ indexC ];

  		return [
  			new THREE$Vector2( a.x, a.y ),
  			new THREE$Vector2( b.x, b.y ),
  			new THREE$Vector2( c.x, c.y )
  		];

  	},

  	generateSideWallUV: function ( geometry, indexA, indexB, indexC, indexD ) {

  		var vertices = geometry.vertices;

  		var a = vertices[ indexA ];
  		var b = vertices[ indexB ];
  		var c = vertices[ indexC ];
  		var d = vertices[ indexD ];

  		if ( Math.abs( a.y - b.y ) < 0.01 ) {
  			return [
  				new THREE$Vector2( a.x, 1 - a.z ),
  				new THREE$Vector2( b.x, 1 - b.z ),
  				new THREE$Vector2( c.x, 1 - c.z ),
  				new THREE$Vector2( d.x, 1 - d.z )
  			];
  		} else {
  			return [
  				new THREE$Vector2( a.y, 1 - a.z ),
  				new THREE$Vector2( b.y, 1 - b.z ),
  				new THREE$Vector2( c.y, 1 - c.z ),
  				new THREE$Vector2( d.y, 1 - d.z )
  			];
  		}
  	}
  };



  /**
   * @author jonobr1 / http://jonobr1.com
   *
   * Creates a one-sided polygonal geometry from a path shape. Similar to
   * ExtrudeGeometry.
   *
   * parameters = {
   *
   *	curveSegments: <int>, // number of points on the curves. NOT USED AT THE MOMENT.
   *
   *	material: <int> // material index for front and back faces
   *	uvGenerator: <Object> // object that provides UV generator functions
   *
   * }
   **/

  function THREE$ShapeGeometry ( shapes, options ) {
  	this.isShapeGeometry = true;

  	THREE$Geometry.call( this );

  	this.type = 'ShapeGeometry';

  	if ( Array.isArray( shapes ) === false ) shapes = [ shapes ];

  	this.addShapeList( shapes, options );

  	this.computeFaceNormals();

  }

  THREE$ShapeGeometry.prototype = Object.create( THREE$Geometry.prototype );
  THREE$ShapeGeometry.prototype.constructor = THREE$ShapeGeometry;

  /**
   * Add an array of shapes to THREE.ShapeGeometry.
   */
  THREE$ShapeGeometry.prototype.addShapeList = function ( shapes, options ) {

  	for ( var i = 0, l = shapes.length; i < l; i ++ ) {

  		this.addShape( shapes[ i ], options );

  	}

  	return this;

  };

  /**
   * Adds a shape to THREE.ShapeGeometry, based on THREE.ExtrudeGeometry.
   */
  THREE$ShapeGeometry.prototype.addShape = function ( shape, options ) {

  	if ( options === undefined ) options = {};
  	var curveSegments = options.curveSegments !== undefined ? options.curveSegments : 12;

  	var material = options.material;
  	var uvgen = options.UVGenerator === undefined ? THREE$ExtrudeGeometry.WorldUVGenerator : options.UVGenerator;

  	//

  	var i, l, hole;

  	var shapesOffset = this.vertices.length;
  	var shapePoints = shape.extractPoints( curveSegments );

  	var vertices = shapePoints.shape;
  	var holes = shapePoints.holes;

  	var reverse = ! THREE$Shape.Utils.isClockWise( vertices );

  	if ( reverse ) {

  		vertices = vertices.reverse();

  		// Maybe we should also check if holes are in the opposite direction, just to be safe...

  		for ( i = 0, l = holes.length; i < l; i ++ ) {

  			hole = holes[ i ];

  			if ( THREE$Shape.Utils.isClockWise( hole ) ) {

  				holes[ i ] = hole.reverse();

  			}

  		}

  		reverse = false;

  	}

  	var faces = THREE$Shape.Utils.triangulateShape( vertices, holes );

  	// Vertices

  	var contour = vertices;

  	for ( i = 0, l = holes.length; i < l; i ++ ) {

  		hole = holes[ i ];
  		vertices = vertices.concat( hole );

  	}

  	//

  	var vert, vlen = vertices.length;
  	var face, flen = faces.length;

  	for ( i = 0; i < vlen; i ++ ) {

  		vert = vertices[ i ];

  		this.vertices.push( new THREE$Vector3( vert.x, vert.y, 0 ) );

  	}

  	for ( i = 0; i < flen; i ++ ) {

  		face = faces[ i ];

  		var a = face[ 0 ] + shapesOffset;
  		var b = face[ 1 ] + shapesOffset;
  		var c = face[ 2 ] + shapesOffset;

  		this.faces.push( new THREE$Face3( a, b, c, null, null, material ) );
  		this.faceVertexUvs[ 0 ].push( uvgen.generateTopUV( this, a, b, c ) );

  	}

  };



  /**
   * @author zz85 / http://www.lab4games.net/zz85/blog
   * Defines a 2d shape plane using paths.
   **/

  // STEP 1 Create a path.
  // STEP 2 Turn path into shape.
  // STEP 3 ExtrudeGeometry takes in Shape/Shapes
  // STEP 3a - Extract points from each shape, turn to vertices
  // STEP 3b - Triangulate each shape, add faces.

  function THREE$Shape () {
  	this.isShape = true;

  	THREE$Path.apply( this, arguments );
  	this.holes = [];

  }

  THREE$Shape.prototype = Object.create( THREE$Path.prototype );
  THREE$Shape.prototype.constructor = THREE$Shape;


  // Convenience method to return ExtrudeGeometry

  THREE$Shape.prototype.extrude = function ( options ) {

  	var extruded = new THREE$ExtrudeGeometry( this, options );
  	return extruded;

  };


  // Convenience method to return ShapeGeometry

  THREE$Shape.prototype.makeGeometry = function ( options ) {

  	var geometry = new THREE$ShapeGeometry( this, options );
  	return geometry;

  };


  // Get points of holes

  THREE$Shape.prototype.getPointsHoles = function ( divisions ) {

  	var i, il = this.holes.length, holesPts = [];

  	for ( i = 0; i < il; i ++ ) {

  		holesPts[ i ] = this.holes[ i ].getTransformedPoints( divisions, this.bends );

  	}

  	return holesPts;

  };


  // Get points of holes (spaced by regular distance)

  THREE$Shape.prototype.getSpacedPointsHoles = function ( divisions ) {

  	var i, il = this.holes.length, holesPts = [];

  	for ( i = 0; i < il; i ++ ) {

  		holesPts[ i ] = this.holes[ i ].getTransformedSpacedPoints( divisions, this.bends );

  	}

  	return holesPts;

  };


  // Get points of shape and holes (keypoints based on segments parameter)

  THREE$Shape.prototype.extractAllPoints = function ( divisions ) {

  	return {

  		shape: this.getTransformedPoints( divisions ),
  		holes: this.getPointsHoles( divisions )

  	};

  };

  THREE$Shape.prototype.extractPoints = function ( divisions ) {

  	if (this.useSpacedPoints) {
  		return this.extractAllSpacedPoints(divisions);
  	}

  	return this.extractAllPoints(divisions);

  };


  //
  // THREE.Shape.prototype.extractAllPointsWithBend = function ( divisions, bend ) {
  //
  // 	return {
  //
  // 		shape: this.transform( bend, divisions ),
  // 		holes: this.getPointsHoles( divisions, bend )
  //
  // 	};
  //
  // };

  // Get points of shape and holes (spaced by regular distance)

  THREE$Shape.prototype.extractAllSpacedPoints = function ( divisions ) {

  	return {

  		shape: this.getTransformedSpacedPoints( divisions ),
  		holes: this.getSpacedPointsHoles( divisions )

  	};

  };


  /**************************************************************
   *	Utils
   **************************************************************/

  THREE$Shape.Utils = {

  	triangulateShape: function ( contour, holes ) {

  		function point_in_segment_2D_colin( inSegPt1, inSegPt2, inOtherPt ) {
  			// inOtherPt needs to be collinear to the inSegment
  			if ( inSegPt1.x !== inSegPt2.x ) {
  				if ( inSegPt1.x < inSegPt2.x ) {
  					return	( ( inSegPt1.x <= inOtherPt.x ) && ( inOtherPt.x <= inSegPt2.x ) );
  				} else {
  					return	( ( inSegPt2.x <= inOtherPt.x ) && ( inOtherPt.x <= inSegPt1.x ) );
  				}
  			} else {
  				if ( inSegPt1.y < inSegPt2.y ) {
  					return	( ( inSegPt1.y <= inOtherPt.y ) && ( inOtherPt.y <= inSegPt2.y ) );
  				} else {
  					return	( ( inSegPt2.y <= inOtherPt.y ) && ( inOtherPt.y <= inSegPt1.y ) );
  				}
  			}
  		}

  		function intersect_segments_2D( inSeg1Pt1, inSeg1Pt2, inSeg2Pt1, inSeg2Pt2, inExcludeAdjacentSegs ) {
  			var EPSILON = 0.0000000001;

  			var seg1dx = inSeg1Pt2.x - inSeg1Pt1.x,   seg1dy = inSeg1Pt2.y - inSeg1Pt1.y;
  			var seg2dx = inSeg2Pt2.x - inSeg2Pt1.x,   seg2dy = inSeg2Pt2.y - inSeg2Pt1.y;

  			var seg1seg2dx = inSeg1Pt1.x - inSeg2Pt1.x;
  			var seg1seg2dy = inSeg1Pt1.y - inSeg2Pt1.y;

  			var limit		= seg1dy * seg2dx - seg1dx * seg2dy;
  			var perpSeg1	= seg1dy * seg1seg2dx - seg1dx * seg1seg2dy;

  			if ( Math.abs(limit) > EPSILON ) {			// not parallel

  				var perpSeg2;
  				if ( limit > 0 ) {
  					if ( ( perpSeg1 < 0 ) || ( perpSeg1 > limit ) ) 		return [];
  					perpSeg2 = seg2dy * seg1seg2dx - seg2dx * seg1seg2dy;
  					if ( ( perpSeg2 < 0 ) || ( perpSeg2 > limit ) ) 		return [];
  				} else {
  					if ( ( perpSeg1 > 0 ) || ( perpSeg1 < limit ) ) 		return [];
  					perpSeg2 = seg2dy * seg1seg2dx - seg2dx * seg1seg2dy;
  					if ( ( perpSeg2 > 0 ) || ( perpSeg2 < limit ) ) 		return [];
  				}

  				// i.e. to reduce rounding errors
  				// intersection at endpoint of segment#1?
  				if ( perpSeg2 === 0 ) {
  					if ( ( inExcludeAdjacentSegs ) &&
  						 ( ( perpSeg1 === 0 ) || ( perpSeg1 === limit ) ) )		return [];
  					return [ inSeg1Pt1 ];
  				}
  				if ( perpSeg2 === limit ) {
  					if ( ( inExcludeAdjacentSegs ) &&
  						 ( ( perpSeg1 === 0 ) || ( perpSeg1 === limit ) ) )		return [];
  					return [ inSeg1Pt2 ];
  				}
  				// intersection at endpoint of segment#2?
  				if ( perpSeg1 === 0 )		return [ inSeg2Pt1 ];
  				if ( perpSeg1 === limit )	return [ inSeg2Pt2 ];

  				// return real intersection point
  				var factorSeg1 = perpSeg2 / limit;
  				return	[ { x: inSeg1Pt1.x + factorSeg1 * seg1dx,
  							y: inSeg1Pt1.y + factorSeg1 * seg1dy } ];

  			} else {		// parallel or collinear
  				if ( ( perpSeg1 !== 0 ) ||
  					 ( seg2dy * seg1seg2dx !== seg2dx * seg1seg2dy ) ) 			return [];

  				// they are collinear or degenerate
  				var seg1Pt = ( (seg1dx === 0) && (seg1dy === 0) );	// segment1 is just a point?
  				var seg2Pt = ( (seg2dx === 0) && (seg2dy === 0) );	// segment2 is just a point?
  				// both segments are points
  				if ( seg1Pt && seg2Pt ) {
  					if ( (inSeg1Pt1.x !== inSeg2Pt1.x) ||
  						 (inSeg1Pt1.y !== inSeg2Pt1.y) )		return [];	// they are distinct  points
  					return [ inSeg1Pt1 ];                 						// they are the same point
  				}
  				// segment#1  is a single point
  				if ( seg1Pt ) {
  					if (! point_in_segment_2D_colin( inSeg2Pt1, inSeg2Pt2, inSeg1Pt1 ) )		return [];		// but not in segment#2
  					return [ inSeg1Pt1 ];
  				}
  				// segment#2  is a single point
  				if ( seg2Pt ) {
  					if (! point_in_segment_2D_colin( inSeg1Pt1, inSeg1Pt2, inSeg2Pt1 ) )		return [];		// but not in segment#1
  					return [ inSeg2Pt1 ];
  				}

  				// they are collinear segments, which might overlap
  				var seg1min, seg1max, seg1minVal, seg1maxVal;
  				var seg2min, seg2max, seg2minVal, seg2maxVal;
  				if (seg1dx !== 0) {		// the segments are NOT on a vertical line
  					if ( inSeg1Pt1.x < inSeg1Pt2.x ) {
  						seg1min = inSeg1Pt1; seg1minVal = inSeg1Pt1.x;
  						seg1max = inSeg1Pt2; seg1maxVal = inSeg1Pt2.x;
  					} else {
  						seg1min = inSeg1Pt2; seg1minVal = inSeg1Pt2.x;
  						seg1max = inSeg1Pt1; seg1maxVal = inSeg1Pt1.x;
  					}
  					if ( inSeg2Pt1.x < inSeg2Pt2.x ) {
  						seg2min = inSeg2Pt1; seg2minVal = inSeg2Pt1.x;
  						seg2max = inSeg2Pt2; seg2maxVal = inSeg2Pt2.x;
  					} else {
  						seg2min = inSeg2Pt2; seg2minVal = inSeg2Pt2.x;
  						seg2max = inSeg2Pt1; seg2maxVal = inSeg2Pt1.x;
  					}
  				} else {				// the segments are on a vertical line
  					if ( inSeg1Pt1.y < inSeg1Pt2.y ) {
  						seg1min = inSeg1Pt1; seg1minVal = inSeg1Pt1.y;
  						seg1max = inSeg1Pt2; seg1maxVal = inSeg1Pt2.y;
  					} else {
  						seg1min = inSeg1Pt2; seg1minVal = inSeg1Pt2.y;
  						seg1max = inSeg1Pt1; seg1maxVal = inSeg1Pt1.y;
  					}
  					if ( inSeg2Pt1.y < inSeg2Pt2.y ) {
  						seg2min = inSeg2Pt1; seg2minVal = inSeg2Pt1.y;
  						seg2max = inSeg2Pt2; seg2maxVal = inSeg2Pt2.y;
  					} else {
  						seg2min = inSeg2Pt2; seg2minVal = inSeg2Pt2.y;
  						seg2max = inSeg2Pt1; seg2maxVal = inSeg2Pt1.y;
  					}
  				}
  				if ( seg1minVal <= seg2minVal ) {
  					if ( seg1maxVal <  seg2minVal )	return [];
  					if ( seg1maxVal === seg2minVal )	{
  						if ( inExcludeAdjacentSegs )		return [];
  						return [ seg2min ];
  					}
  					if ( seg1maxVal <= seg2maxVal )	return [ seg2min, seg1max ];
  					return	[ seg2min, seg2max ];
  				} else {
  					if ( seg1minVal >  seg2maxVal )	return [];
  					if ( seg1minVal === seg2maxVal )	{
  						if ( inExcludeAdjacentSegs )		return [];
  						return [ seg1min ];
  					}
  					if ( seg1maxVal <= seg2maxVal )	return [ seg1min, seg1max ];
  					return	[ seg1min, seg2max ];
  				}
  			}
  		}

  		function isPointInsideAngle( inVertex, inLegFromPt, inLegToPt, inOtherPt ) {
  			// The order of legs is important

  			var EPSILON = 0.0000000001;

  			// translation of all points, so that Vertex is at (0,0)
  			var legFromPtX	= inLegFromPt.x - inVertex.x,  legFromPtY	= inLegFromPt.y - inVertex.y;
  			var legToPtX	= inLegToPt.x	- inVertex.x,  legToPtY		= inLegToPt.y	- inVertex.y;
  			var otherPtX	= inOtherPt.x	- inVertex.x,  otherPtY		= inOtherPt.y	- inVertex.y;

  			// main angle >0: < 180 deg.; 0: 180 deg.; <0: > 180 deg.
  			var from2toAngle	= legFromPtX * legToPtY - legFromPtY * legToPtX;
  			var from2otherAngle	= legFromPtX * otherPtY - legFromPtY * otherPtX;

  			if ( Math.abs(from2toAngle) > EPSILON ) {			// angle != 180 deg.

  				var other2toAngle		= otherPtX * legToPtY - otherPtY * legToPtX;
  				// console.log( "from2to: " + from2toAngle + ", from2other: " + from2otherAngle + ", other2to: " + other2toAngle );

  				if ( from2toAngle > 0 ) {				// main angle < 180 deg.
  					return	( ( from2otherAngle >= 0 ) && ( other2toAngle >= 0 ) );
  				} else {								// main angle > 180 deg.
  					return	( ( from2otherAngle >= 0 ) || ( other2toAngle >= 0 ) );
  				}
  			} else {										// angle == 180 deg.
  				// console.log( "from2to: 180 deg., from2other: " + from2otherAngle  );
  				return	( from2otherAngle > 0 );
  			}
  		}


  		function removeHoles( contour, holes ) {

  			var shape = contour.concat(); // work on this shape
  			var hole;

  			function isCutLineInsideAngles( inShapeIdx, inHoleIdx ) {
  				// Check if hole point lies within angle around shape point
  				var lastShapeIdx = shape.length - 1;

  				var prevShapeIdx = inShapeIdx - 1;
  				if ( prevShapeIdx < 0 )			prevShapeIdx = lastShapeIdx;

  				var nextShapeIdx = inShapeIdx + 1;
  				if ( nextShapeIdx > lastShapeIdx )	nextShapeIdx = 0;

  				var insideAngle = isPointInsideAngle( shape[inShapeIdx], shape[ prevShapeIdx ], shape[ nextShapeIdx ], hole[inHoleIdx] );
  				if (! insideAngle ) {
  					// console.log( "Vertex (Shape): " + inShapeIdx + ", Point: " + hole[inHoleIdx].x + "/" + hole[inHoleIdx].y );
  					return	false;
  				}

  				// Check if shape point lies within angle around hole point
  				var lastHoleIdx = hole.length - 1;

  				var prevHoleIdx = inHoleIdx - 1;
  				if ( prevHoleIdx < 0 )			prevHoleIdx = lastHoleIdx;

  				var nextHoleIdx = inHoleIdx + 1;
  				if ( nextHoleIdx > lastHoleIdx )	nextHoleIdx = 0;

  				insideAngle = isPointInsideAngle( hole[inHoleIdx], hole[ prevHoleIdx ], hole[ nextHoleIdx ], shape[inShapeIdx] );
  				if (! insideAngle ) {
  					// console.log( "Vertex (Hole): " + inHoleIdx + ", Point: " + shape[inShapeIdx].x + "/" + shape[inShapeIdx].y );
  					return	false;
  				}

  				return	true;
  			}

  			function intersectsShapeEdge( inShapePt, inHolePt ) {
  				// checks for intersections with shape edges
  				var sIdx, nextIdx, intersection;
  				for ( sIdx = 0; sIdx < shape.length; sIdx ++ ) {
  					nextIdx = sIdx + 1; nextIdx %= shape.length;
  					intersection = intersect_segments_2D( inShapePt, inHolePt, shape[sIdx], shape[nextIdx], true );
  					if ( intersection.length > 0 )		return	true;
  				}

  				return	false;
  			}

  			var indepHoles = [];

  			function intersectsHoleEdge( inShapePt, inHolePt ) {
  				// checks for intersections with hole edges
  				var ihIdx, chkHole,
  					hIdx, nextIdx, intersection;
  				for ( ihIdx = 0; ihIdx < indepHoles.length; ihIdx ++ ) {
  					chkHole = holes[indepHoles[ihIdx]];
  					for ( hIdx = 0; hIdx < chkHole.length; hIdx ++ ) {
  						nextIdx = hIdx + 1; nextIdx %= chkHole.length;
  						intersection = intersect_segments_2D( inShapePt, inHolePt, chkHole[hIdx], chkHole[nextIdx], true );
  						if ( intersection.length > 0 )		return	true;
  					}
  				}
  				return	false;
  			}

  			var holeIndex, shapeIndex,
  				shapePt, holePt,
  				holeIdx, cutKey, failedCuts = [],
  				tmpShape1, tmpShape2,
  				tmpHole1, tmpHole2;

  			for ( var h = 0, hl = holes.length; h < hl; h ++ ) {

  				indepHoles.push( h );

  			}

  			var minShapeIndex = 0;
  			var counter = indepHoles.length * 2;
  			while ( indepHoles.length > 0 ) {
  				counter --;
  				if ( counter < 0 ) {
  					console.log( "Infinite Loop! Holes left:" + indepHoles.length + ", Probably Hole outside Shape!" );
  					break;
  				}

  				// search for shape-vertex and hole-vertex,
  				// which can be connected without intersections
  				for ( shapeIndex = minShapeIndex; shapeIndex < shape.length; shapeIndex ++ ) {

  					shapePt = shape[ shapeIndex ];
  					holeIndex	= - 1;

  					// search for hole which can be reached without intersections
  					for ( var h = 0; h < indepHoles.length; h ++ ) {
  						holeIdx = indepHoles[h];

  						// prevent multiple checks
  						cutKey = shapePt.x + ":" + shapePt.y + ":" + holeIdx;
  						if ( failedCuts[cutKey] !== undefined )			continue;

  						hole = holes[holeIdx];
  						for ( var h2 = 0; h2 < hole.length; h2 ++ ) {
  							holePt = hole[ h2 ];
  							if (! isCutLineInsideAngles( shapeIndex, h2 ) )		continue;
  							if ( intersectsShapeEdge( shapePt, holePt ) )		continue;
  							if ( intersectsHoleEdge( shapePt, holePt ) )		continue;

  							holeIndex = h2;
  							indepHoles.splice(h, 1);

  							tmpShape1 = shape.slice( 0, shapeIndex + 1 );
  							tmpShape2 = shape.slice( shapeIndex );
  							tmpHole1 = hole.slice( holeIndex );
  							tmpHole2 = hole.slice( 0, holeIndex + 1 );

  							shape = tmpShape1.concat( tmpHole1 ).concat( tmpHole2 ).concat( tmpShape2 );

  							minShapeIndex = shapeIndex;

  							// Debug only, to show the selected cuts
  							// glob_CutLines.push( [ shapePt, holePt ] );

  							break;
  						}
  						if ( holeIndex >= 0 )	break;		// hole-vertex found

  						failedCuts[cutKey] = true;			// remember failure
  					}
  					if ( holeIndex >= 0 )	break;		// hole-vertex found
  				}
  			}

  			return shape; 			/* shape with no holes */
  		}


  		var i, il, f, face,
  			key, index,
  			allPointsMap = {};

  		// To maintain reference to old shape, one must match coordinates, or offset the indices from original arrays. It's probably easier to do the first.

  		var allpoints = contour.concat();

  		for ( var h = 0, hl = holes.length; h < hl; h ++ ) {

  			Array.prototype.push.apply( allpoints, holes[h] );

  		}

  		//console.log( "allpoints",allpoints, allpoints.length );

  		// prepare all points map

  		for ( i = 0, il = allpoints.length; i < il; i ++ ) {

  			key = allpoints[ i ].x + ":" + allpoints[ i ].y;

  			if ( allPointsMap[ key ] !== undefined ) {

  				console.warn( "THREE.Shape: Duplicate point", key );

  			}

  			allPointsMap[ key ] = i;

  		}

  		// remove holes by cutting paths to holes and adding them to the shape
  		var shapeWithoutHoles = removeHoles( contour, holes );

  		var triangles = THREE$FontUtils.Triangulate( shapeWithoutHoles, false ); // True returns indices for points of spooled shape
  		//console.log( "triangles",triangles, triangles.length );

  		// check all face vertices against all points map

  		for ( i = 0, il = triangles.length; i < il; i ++ ) {

  			face = triangles[ i ];

  			for ( f = 0; f < 3; f ++ ) {

  				key = face[ f ].x + ":" + face[ f ].y;

  				index = allPointsMap[ key ];

  				if ( index !== undefined ) {

  					face[ f ] = index;

  				}

  			}

  		}

  		return triangles.concat();

  	},

  	isClockWise: function ( pts ) {

  		return THREE$FontUtils.Triangulate.area( pts ) < 0;

  	},

  	// Bezier Curves formulas obtained from
  	// http://en.wikipedia.org/wiki/B%C3%A9zier_curve

  	// Quad Bezier Functions

  	b2p0: function ( t, p ) {

  		var k = 1 - t;
  		return k * k * p;

  	},

  	b2p1: function ( t, p ) {

  		return 2 * ( 1 - t ) * t * p;

  	},

  	b2p2: function ( t, p ) {

  		return t * t * p;

  	},

  	b2: function ( t, p0, p1, p2 ) {

  		return this.b2p0( t, p0 ) + this.b2p1( t, p1 ) + this.b2p2( t, p2 );

  	},

  	// Cubic Bezier Functions

  	b3p0: function ( t, p ) {

  		var k = 1 - t;
  		return k * k * k * p;

  	},

  	b3p1: function ( t, p ) {

  		var k = 1 - t;
  		return 3 * k * k * t * p;

  	},

  	b3p2: function ( t, p ) {

  		var k = 1 - t;
  		return 3 * k * t * t * p;

  	},

  	b3p3: function ( t, p ) {

  		return t * t * t * p;

  	},

  	b3: function ( t, p0, p1, p2, p3 ) {

  		return this.b3p0( t, p0 ) + this.b3p1( t, p1 ) + this.b3p2( t, p2 ) +  this.b3p3( t, p3 );

  	}

  };


  var THREE$FontUtils;


  /**
   * @author zz85 / http://www.lab4games.net/zz85/blog
   * @author alteredq / http://alteredqualia.com/
   *
   * For Text operations in three.js (See TextGeometry)
   *
   * It uses techniques used in:
   *
   *	Triangulation ported from AS3
   *		Simple Polygon Triangulation
   *		http://actionsnippet.com/?p=1462
   *
   * 	A Method to triangulate shapes with holes
   *		http://www.sakri.net/blog/2009/06/12/an-approach-to-triangulating-polygons-with-holes/
   *
   */

  THREE$FontUtils = {

  	faces: {},

  	// Just for now. face[weight][style]

  	face: 'helvetiker',
  	weight: 'normal',
  	style: 'normal',
  	size: 150,
  	divisions: 10,

  	getFace: function () {

  		try {

  			return this.faces[ this.face.toLowerCase() ][ this.weight ][ this.style ];

  		} catch (e) {

  			throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."

  		}

  	},

  	loadFace: function ( data ) {

  		var family = data.familyName.toLowerCase();

  		var ThreeFont = this;

  		ThreeFont.faces[ family ] = ThreeFont.faces[ family ] || {};

  		ThreeFont.faces[ family ][ data.cssFontWeight ] = ThreeFont.faces[ family ][ data.cssFontWeight ] || {};
  		ThreeFont.faces[ family ][ data.cssFontWeight ][ data.cssFontStyle ] = data;

  		ThreeFont.faces[ family ][ data.cssFontWeight ][ data.cssFontStyle ] = data;

  		return data;

  	},

  	drawText: function ( text ) {

  		// RenderText

  		var i,
  			face = this.getFace(),
  			scale = this.size / face.resolution,
  			offset = 0,
  			chars = String( text ).split( '' ),
  			length = chars.length;

  		var fontPaths = [];

  		for ( i = 0; i < length; i ++ ) {

  			var path = new THREE$Path();

  			var ret = this.extractGlyphPoints( chars[ i ], face, scale, offset, path );
  			offset += ret.offset;

  			fontPaths.push( ret.path );

  		}

  		// get the width

  		var width = offset / 2;
  		//
  		// for ( p = 0; p < allPts.length; p++ ) {
  		//
  		// 	allPts[ p ].x -= width;
  		//
  		// }

  		//var extract = this.extractPoints( allPts, characterPts );
  		//extract.contour = allPts;

  		//extract.paths = fontPaths;
  		//extract.offset = width;

  		return { paths: fontPaths, offset: width };

  	},




  	extractGlyphPoints: function ( c, face, scale, offset, path ) {

  		var pts = [];

  		var i, i2, divisions,
  			outline, action, length,
  			scaleX, scaleY,
  			x, y, cpx, cpy, cpx0, cpy0, cpx1, cpy1, cpx2, cpy2,
  			laste,
  			glyph = face.glyphs[ c ] || face.glyphs[ '?' ];

  		if ( ! glyph ) return;

  		if ( glyph.o ) {

  			outline = glyph._cachedOutline || ( glyph._cachedOutline = glyph.o.split( ' ' ) );
  			length = outline.length;

  			scaleX = scale;
  			scaleY = scale;

  			for ( i = 0; i < length; ) {

  				action = outline[ i ++ ];

  				//console.log( action );

  				switch ( action ) {

  				case 'm':

  					// Move To

  					x = outline[ i ++ ] * scaleX + offset;
  					y = outline[ i ++ ] * scaleY;

  					path.moveTo( x, y );
  					break;

  				case 'l':

  					// Line To

  					x = outline[ i ++ ] * scaleX + offset;
  					y = outline[ i ++ ] * scaleY;
  					path.lineTo( x, y );
  					break;

  				case 'q':

  					// QuadraticCurveTo

  					cpx  = outline[ i ++ ] * scaleX + offset;
  					cpy  = outline[ i ++ ] * scaleY;
  					cpx1 = outline[ i ++ ] * scaleX + offset;
  					cpy1 = outline[ i ++ ] * scaleY;

  					path.quadraticCurveTo( cpx1, cpy1, cpx, cpy );

  					laste = pts[ pts.length - 1 ];

  					if ( laste ) {

  						cpx0 = laste.x;
  						cpy0 = laste.y;

  						for ( i2 = 1, divisions = this.divisions; i2 <= divisions; i2 ++ ) {

  							var t = i2 / divisions;
  							THREE$Shape.Utils.b2( t, cpx0, cpx1, cpx );
  							THREE$Shape.Utils.b2( t, cpy0, cpy1, cpy );
  						}

  					}

  					break;

  				case 'b':

  					// Cubic Bezier Curve

  					cpx  = outline[ i ++ ] *  scaleX + offset;
  					cpy  = outline[ i ++ ] *  scaleY;
  					cpx1 = outline[ i ++ ] *  scaleX + offset;
  					cpy1 = outline[ i ++ ] *  scaleY;
  					cpx2 = outline[ i ++ ] *  scaleX + offset;
  					cpy2 = outline[ i ++ ] *  scaleY;

  					path.bezierCurveTo( cpx1, cpy1, cpx2, cpy2, cpx, cpy );

  					laste = pts[ pts.length - 1 ];

  					if ( laste ) {

  						cpx0 = laste.x;
  						cpy0 = laste.y;

  						for ( i2 = 1, divisions = this.divisions; i2 <= divisions; i2 ++ ) {

  							var t = i2 / divisions;
  							THREE$Shape.Utils.b3( t, cpx0, cpx1, cpx2, cpx );
  							THREE$Shape.Utils.b3( t, cpy0, cpy1, cpy2, cpy );

  						}

  					}

  					break;

  				}

  			}
  		}



  		return { offset: glyph.ha * scale, path:path };
  	}

  };


  THREE$FontUtils.generateShapes = function ( text, parameters ) {

  	// Parameters

  	parameters = parameters || {};

  	var size = parameters.size !== undefined ? parameters.size : 100;
  	var curveSegments = parameters.curveSegments !== undefined ? parameters.curveSegments : 4;

  	var font = parameters.font !== undefined ? parameters.font : 'helvetiker';
  	var weight = parameters.weight !== undefined ? parameters.weight : 'normal';
  	var style = parameters.style !== undefined ? parameters.style : 'normal';

  	THREE$FontUtils.size = size;
  	THREE$FontUtils.divisions = curveSegments;

  	THREE$FontUtils.face = font;
  	THREE$FontUtils.weight = weight;
  	THREE$FontUtils.style = style;

  	// Get a Font data json object

  	var data = THREE$FontUtils.drawText( text );

  	var paths = data.paths;
  	var shapes = [];

  	for ( var p = 0, pl = paths.length; p < pl; p ++ ) {

  		Array.prototype.push.apply( shapes, paths[ p ].toShapes() );

  	}

  	return shapes;

  };



  /**
   * This code is a quick port of code written in C++ which was submitted to
   * flipcode.com by John W. Ratcliff  // July 22, 2000
   * See original code and more information here:
   * http://www.flipcode.com/archives/Efficient_Polygon_Triangulation.shtml
   *
   * ported to actionscript by Zevan Rosser
   * www.actionsnippet.com
   *
   * ported to javascript by Joshua Koo
   * http://www.lab4games.net/zz85/blog
   *
   */


  ( function ( namespace ) {

  	var EPSILON = 0.0000000001;

  	// takes in an contour array and returns

  	var process = function ( contour, indices ) {

  		var n = contour.length;

  		if ( n < 3 ) return null;

  		var result = [],
  			verts = [],
  			vertIndices = [];

  		/* we want a counter-clockwise polygon in verts */

  		var u, v, w;

  		if ( area( contour ) > 0.0 ) {

  			for ( v = 0; v < n; v ++ ) verts[ v ] = v;

  		} else {

  			for ( v = 0; v < n; v ++ ) verts[ v ] = ( n - 1 ) - v;

  		}

  		var nv = n;

  		/*  remove nv - 2 vertices, creating 1 triangle every time */

  		var count = 2 * nv;   /* error detection */

  		for ( v = nv - 1; nv > 2; ) {

  			/* if we loop, it is probably a non-simple polygon */

  			if ( ( count -- ) <= 0 ) {

  				//** Triangulate: ERROR - probable bad polygon!

  				//throw ( "Warning, unable to triangulate polygon!" );
  				//return null;
  				// Sometimes warning is fine, especially polygons are triangulated in reverse.
  				console.warn( 'THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()' );

  				if ( indices ) return vertIndices;
  				return result;

  			}

  			/* three consecutive vertices in current polygon, <u,v,w> */

  			u = v; 	 	if ( nv <= u ) u = 0;     /* previous */
  			v = u + 1;  if ( nv <= v ) v = 0;     /* new v    */
  			w = v + 1;  if ( nv <= w ) w = 0;     /* next     */

  			if ( snip( contour, u, v, w, nv, verts ) ) {

  				var a, b, c, s, t;

  				/* true names of the vertices */

  				a = verts[ u ];
  				b = verts[ v ];
  				c = verts[ w ];

  				/* output Triangle */

  				result.push( [ contour[ a ],
  					contour[ b ],
  					contour[ c ] ] );


  				vertIndices.push( [ verts[ u ], verts[ v ], verts[ w ] ] );

  				/* remove v from the remaining polygon */

  				for ( s = v, t = v + 1; t < nv; s ++, t ++ ) {

  					verts[ s ] = verts[ t ];

  				}

  				nv --;

  				/* reset error detection counter */

  				count = 2 * nv;

  			}

  		}

  		if ( indices ) return vertIndices;
  		return result;

  	};

  	// calculate area of the contour polygon

  	var area = function ( contour ) {

  		var n = contour.length;
  		var a = 0.0;

  		for ( var p = n - 1, q = 0; q < n; p = q ++ ) {

  			a += contour[ p ].x * contour[ q ].y - contour[ q ].x * contour[ p ].y;

  		}

  		return a * 0.5;

  	};

  	var snip = function ( contour, u, v, w, n, verts ) {

  		var p;
  		var ax, ay, bx, by;
  		var cx, cy, px, py;

  		ax = contour[ verts[ u ] ].x;
  		ay = contour[ verts[ u ] ].y;

  		bx = contour[ verts[ v ] ].x;
  		by = contour[ verts[ v ] ].y;

  		cx = contour[ verts[ w ] ].x;
  		cy = contour[ verts[ w ] ].y;

  		if ( EPSILON > ( ( ( bx - ax ) * ( cy - ay ) ) - ( ( by - ay ) * ( cx - ax ) ) ) ) return false;

  		var aX, aY, bX, bY, cX, cY;
  		var apx, apy, bpx, bpy, cpx, cpy;
  		var cCROSSap, bCROSScp, aCROSSbp;

  		aX = cx - bx;  aY = cy - by;
  		bX = ax - cx;  bY = ay - cy;
  		cX = bx - ax;  cY = by - ay;

  		for ( p = 0; p < n; p ++ ) {

  			px = contour[ verts[ p ] ].x;
  			py = contour[ verts[ p ] ].y;

  			if ( ( ( px === ax ) && ( py === ay ) ) ||
  				 ( ( px === bx ) && ( py === by ) ) ||
  				 ( ( px === cx ) && ( py === cy ) ) )	continue;

  			apx = px - ax;  apy = py - ay;
  			bpx = px - bx;  bpy = py - by;
  			cpx = px - cx;  cpy = py - cy;

  			// see if p is inside triangle abc

  			aCROSSbp = aX * bpy - aY * bpx;
  			cCROSSap = cX * apy - cY * apx;
  			bCROSScp = bX * cpy - bY * cpx;

  			if ( ( aCROSSbp >= - EPSILON ) && ( bCROSScp >= - EPSILON ) && ( cCROSSap >= - EPSILON ) ) return false;

  		}

  		return true;

  	};


  	namespace.Triangulate = process;
  	namespace.Triangulate.area = area;

  	return namespace;

  } )( THREE$FontUtils );



  /**
   * @author zz85 / http://www.lab4games.net/zz85/blog
   * @author alteredq / http://alteredqualia.com/
   *
   * For creating 3D text geometry in three.js
   *
   * Text = 3D Text
   *
   * parameters = {
   *  size: 			<float>, 	// size of the text
   *  height: 		<float>, 	// thickness to extrude text
   *  curveSegments: 	<int>,		// number of points on the curves
   *
   *  font: 			<string>,		// font name
   *  weight: 		<string>,		// font weight (normal, bold)
   *  style: 			<string>,		// font style  (normal, italics)
   *
   *  bevelEnabled:	<bool>,			// turn on bevel
   *  bevelThickness: <float>, 		// how deep into text bevel goes
   *  bevelSize:		<float>, 		// how far from text outline is bevel
   *  }
   *
   */

  /*	Usage Examples

  	// TextGeometry wrapper

  	var text3d = new TextGeometry( text, options );

  	// Complete manner

  	var textShapes = THREE.FontUtils.generateShapes( text, options );
  	var text3d = new ExtrudeGeometry( textShapes, options );

  */


  function THREE$TextGeometry ( text, parameters ) {
  	this.isTextGeometry = true;

  	parameters = parameters || {};

  	var textShapes = THREE$FontUtils.generateShapes( text, parameters );

  	// translate parameters to ExtrudeGeometry API

  	parameters.amount = parameters.height !== undefined ? parameters.height : 50;

  	// defaults

  	if ( parameters.bevelThickness === undefined ) parameters.bevelThickness = 10;
  	if ( parameters.bevelSize === undefined ) parameters.bevelSize = 8;
  	if ( parameters.bevelEnabled === undefined ) parameters.bevelEnabled = false;

  	THREE$ExtrudeGeometry.call( this, textShapes, parameters );

  	this.type = 'TextGeometry';

  }

  THREE$TextGeometry.prototype = Object.create( THREE$ExtrudeGeometry.prototype );
  THREE$TextGeometry.prototype.constructor = THREE$TextGeometry;



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Material () {
  	this.isMaterial = true;

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

  	this.depthFunc = THREE$LessEqualDepth;
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

  				console.warn( "THREE.Material: '" + key + "' parameter is undefined." );
  				continue;

  			}

  			if ( key in this ) {

  				var currentValue = this[ key ];

  				if ( (currentValue && currentValue.isColor) ) {

  					currentValue.set( newValue );

  				} else if ( (currentValue && currentValue.isVector3) && (newValue && newValue.isVector3) ) {

  					currentValue.copy( newValue );

  				} else if ( key === 'overdraw' ) {

  					// ensure overdraw is backwards-compatible with legacy boolean type
  					this[ key ] = Number( newValue );

  				} else {

  					this[ key ] = newValue;

  				}

  			}

  		}

  	},

  	toJSON: function ( meta ) {

  		var data = {
  			metadata: {
  				version: 4.4,
  				type: 'Material',
  				generator: 'Material.toJSON'
  			}
  		};

  		// standard Material serialization
  		data.uuid = this.uuid;
  		data.type = this.type;
  		if ( this.name !== '' ) data.name = this.name;

  		if ( (this.color && this.color.isColor) ) data.color = this.color.getHex();
  		if ( (this.emissive && this.emissive.isColor) ) data.emissive = this.emissive.getHex();
  		if ( (this.specular && this.specular.isColor) ) data.specular = this.specular.getHex();
  		if ( this.shininess !== undefined ) data.shininess = this.shininess;

  		if ( (this.map && this.map.isTexture) ) data.map = this.map.toJSON( meta ).uuid;
  		if ( (this.alphaMap && this.alphaMap.isTexture) ) data.alphaMap = this.alphaMap.toJSON( meta ).uuid;
  		if ( (this.lightMap && this.lightMap.isTexture) ) data.lightMap = this.lightMap.toJSON( meta ).uuid;
  		if ( (this.bumpMap && this.bumpMap.isTexture) ) {
  			data.bumpMap = this.bumpMap.toJSON( meta ).uuid;
  			data.bumpScale = this.bumpScale;
  		}
  		if ( (this.normalMap && this.normalMap.isTexture) ) {
  			data.normalMap = this.normalMap.toJSON( meta ).uuid;
  			data.normalScale = this.normalScale; // Removed for now, causes issue in editor ui.js
  		}
  		if ( (this.specularMap && this.specularMap.isTexture) ) data.specularMap = this.specularMap.toJSON( meta ).uuid;
  		if ( (this.envMap && this.envMap.isTexture) ) {
  			data.envMap = this.envMap.toJSON( meta ).uuid;
  			data.reflectivity = this.reflectivity; // Scale behind envMap
  		}

  		if ( this.size !== undefined ) data.size = this.size;
  		if ( this.sizeAttenuation !== undefined ) data.sizeAttenuation = this.sizeAttenuation;

  		if ( this.vertexColors !== undefined && this.vertexColors !== THREE$NoColors ) data.vertexColors = this.vertexColors;
  		if ( this.shading !== undefined && this.shading !== THREE$SmoothShading ) data.shading = this.shading;
  		if ( this.blending !== undefined && this.blending !== THREE$NormalBlending ) data.blending = this.blending;
  		if ( this.side !== undefined && this.side !== THREE$FrontSide ) data.side = this.side;

  		if ( this.opacity < 1 ) data.opacity = this.opacity;
  		if ( this.transparent === true ) data.transparent = this.transparent;
  		if ( this.wireframe === true ) data.wireframe = this.wireframe;

  		return data;

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

  		material.depthFunc = this.depthFunc;
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

  var count = 0;
  function THREE$MaterialIdCount () { return count++; }

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

  				if ( (parameter_src && parameter_src.isColor) ||
  					 (parameter_src && parameter_src.isVector2) ||
  					 (parameter_src && parameter_src.isVector3) ||
  					 (parameter_src && parameter_src.isVector4) ||
  					 (parameter_src && parameter_src.isMatrix3) ||
  					 (parameter_src && parameter_src.isMatrix4) ||
  					 (parameter_src && parameter_src.isTexture) ) {

  					uniforms_dst[ u ][ p ] = parameter_src.clone();

  				} else if ( Array.isArray( parameter_src ) ) {

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
  	this.isShaderMaterial = true;

  	THREE$Material.call( this );

  	this.type = 'ShaderMaterial';

  	this.defines = {};
  	this.uniforms = {};
  	this.attributes = [];

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

  	this.derivatives = false; // set to use derivatives

  	// When rendered geometry doesn't include these attributes but the material does,
  	// use these default values in WebGL. This avoids errors when buffer data is missing.
  	this.defaultAttributeValues = {
  		'color': [ 1, 1, 1 ],
  		'uv': [ 0, 0 ],
  		'uv2': [ 0, 0 ]
  	};

  	this.index0AttributeName = undefined;

  	if ( parameters !== undefined ) {

  		if ( parameters.attributes !== undefined && Array.isArray( parameters.attributes ) === false ) {

  			console.warn( 'THREE.ShaderMaterial: attributes should now be an array of attribute names.' );
  			parameters.attributes = Object.keys( parameters.attributes );

  		}

  		this.setValues( parameters );

  	}

  }

  THREE$ShaderMaterial.prototype = Object.create( THREE$Material.prototype );
  THREE$ShaderMaterial.prototype.constructor = THREE$ShaderMaterial;

  THREE$ShaderMaterial.prototype.clone = function ( material ) {

  	if ( material === undefined ) material = new THREE$ShaderMaterial();

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

  THREE$ShaderMaterial.prototype.toJSON = function ( meta ) {

  	var data = THREE$Material.prototype.toJSON.call( this, meta );

  	data.uniforms = this.uniforms;
  	data.attributes = this.attributes;
  	data.vertexShader = this.vertexShader;
  	data.fragmentShader = this.fragmentShader;

  	return data;

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
  	this.isLineBasicMaterial = true;

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



  /**
   * @author bhouston / http://exocortex.com
   */

  function THREE$Ray ( origin, direction ) {
  	this.isRay = true;

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

  	distanceToPoint: function ( point ) {

  		return Math.sqrt( this.distanceSqToPoint( point ) );

  	},

  	distanceSqToPoint: function () {

  		var v1 = new THREE$Vector3();

  		return function ( point ) {

  			var directionDistance = v1.subVectors( point, this.origin ).dot( this.direction );

  			// point behind the ray

  			if ( directionDistance < 0 ) {

  				return this.origin.distanceToSquared( point );

  			}

  			v1.copy( this.direction ).multiplyScalar( directionDistance ).add( this.origin );

  			return v1.distanceToSquared( point );

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
  		if ( denominator === 0 ) {

  			// line is coplanar, return origin
  			if ( plane.distanceToPoint( this.origin ) === 0 ) {

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
   */

  function THREE$Line ( geometry, material, mode ) {
  	this.isLine = true;

  	if ( mode === 1 ) {

  		console.error( 'THREE.Line: THREE.LinePieces mode has been removed. Use THREE.LineSegments instead.' );

  	}

  	THREE$Object3D.call( this );

  	this.type = 'Line';

  	this.geometry = geometry !== undefined ? geometry : new THREE$Geometry();
  	this.material = material !== undefined ? material : new THREE$LineBasicMaterial( { color: Math.random() * 0xffffff } );

  }

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
  		var step = (this && this.isLineSegments) ? 2 : 1;

  		if ( (geometry && geometry.isBufferGeometry) ) {

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

  		} else if ( (geometry && geometry.isGeometry) ) {

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

  	if ( object === undefined ) object = new THREE[ this.type ]( this.geometry, this.material );

  	THREE$Object3D.prototype.clone.call( this, object );

  	return object;

  };

  THREE$Line.prototype.toJSON = function ( meta ) {

  	var data = THREE$Object3D.prototype.toJSON.call( this, meta );

  	// only serialize if not in meta geometries cache
  	if ( meta.geometries[ this.geometry.uuid ] === undefined ) {
  		meta.geometries[ this.geometry.uuid ] = this.geometry.toJSON();
  	}

  	// only serialize if not in meta materials cache
  	if ( meta.materials[ this.material.uuid ] === undefined ) {
  		meta.materials[ this.material.uuid ] = this.material.toJSON();
  	}

  	data.object.geometry = this.geometry.uuid;
  	data.object.material = this.material.uuid;

  	return data;

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

  			console.error( 'THREE.WebGLShader: Shader couldn\'t compile.' );

  		}

  		if ( gl.getShaderInfoLog( shader ) !== '' ) {

  			console.warn( 'THREE.WebGLShader: gl.getShaderInfoLog()', type === gl.VERTEX_SHADER ? 'vertex' : 'fragment', gl.getShaderInfoLog( shader ), addLineNumbers( string ) );

  		}

  		// --enable-privileged-webgl-extension
  		// console.log( type, gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );

  		return shader;

  	};

  } )();


  var THREE$WebGLProgram;

  THREE$WebGLProgram = ( function () {

  	var programIdCount = 0;

  	function generateDefines( defines ) {

  		var chunks = [];

  		for ( var name in defines ) {

  			var value = defines[ name ];

  			if ( value === false ) continue;

  			chunks.push( '#define ' + name + ' ' + value );

  		}

  		return chunks.join( '\n' );

  	}

  	function fetchUniformLocations( gl, program, identifiers ) {

  		var uniforms = {};

  		var n = gl.getProgramParameter( program, gl.ACTIVE_UNIFORMS );

  		for ( var i = 0; i < n; i ++ ) {

  			var info = gl.getActiveUniform( program , i );
  			var name = info.name;
  			var location = gl.getUniformLocation( program, name );

  			//console.log("THREE.WebGLProgram: ACTIVE UNIFORM:", name);

  			var suffixPos = name.lastIndexOf( '[0]' );
  			if ( suffixPos !== -1 && suffixPos === name.length - 3 ) {

  				uniforms[ name.substr( 0, suffixPos ) ] = location;

  			}

  			uniforms[ name ] = location;

  		}

  		return uniforms;

  	}

  	function fetchAttributeLocations( gl, program, identifiers ) {

  		var attributes = {};

  		var n = gl.getProgramParameter( program, gl.ACTIVE_ATTRIBUTES );

  		for ( var i = 0; i < n; i ++ ) {

  			var info = gl.getActiveAttrib( program , i );
  			var name = info.name;

  			//console.log("THREE.WebGLProgram: ACTIVE VERTEX ATTRIBUTE:", name);

  			attributes[ name ] = gl.getAttribLocation( program, name );

  		}

  		return attributes;

  	}

  	function filterEmptyLine( string ) {

  		return string !== '';

  	}

  	return function ( renderer, code, material, parameters ) {

  		var gl = renderer.context;

  		var defines = material.defines;
  		var uniforms = material.__webglShader.uniforms;
  		var attributes = material.attributes;

  		var vertexShader = material.__webglShader.vertexShader;
  		var fragmentShader = material.__webglShader.fragmentShader;

  		var index0AttributeName = material.index0AttributeName;

  		/*
  		if ( index0AttributeName === undefined && parameters.morphTargets === true ) {

  			// programs with morphTargets displace position out of attribute 0

  			index0AttributeName = 'position';

  		}
  		*/

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

  		var program = gl.createProgram();

  		var prefixVertex, prefixFragment;

  		if ( (material && material.isRawShaderMaterial) ) {

  			prefixVertex = '';
  			prefixFragment = '';

  		} else {

  			prefixVertex = [

  				'precision ' + parameters.precision + ' float;',
  				'precision ' + parameters.precision + ' int;',

  				'#define SHADER_NAME ' + material.__webglShader.name,

  				customDefines,

  				parameters.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',

  				renderer.gammaInput ? '#define GAMMA_INPUT' : '',
  				renderer.gammaOutput ? '#define GAMMA_OUTPUT' : '',
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
  				parameters.aoMap ? '#define USE_AOMAP' : '',
  				parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
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
  				parameters.doubleSided ? '#define DOUBLE_SIDED' : '',
  				parameters.flipSided ? '#define FLIP_SIDED' : '',

  				parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
  				parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '',
  				parameters.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '',
  				parameters.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '',

  				parameters.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',

  				parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
  				parameters.logarithmicDepthBuffer && renderer.extensions.get('EXT_frag_depth') ? '#define USE_LOGDEPTHBUF_EXT' : '',


  				'uniform mat4 modelMatrix;',
  				'uniform mat4 modelViewMatrix;',
  				'uniform mat4 projectionMatrix;',
  				'uniform mat4 viewMatrix;',
  				'uniform mat3 normalMatrix;',
  				'uniform vec3 cameraPosition;',

  				'attribute vec3 position;',
  				'attribute vec3 normal;',
  				'attribute vec2 uv;',

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

  				'\n'

  			].filter( filterEmptyLine ).join( '\n' );

  			prefixFragment = [

  				( parameters.bumpMap || parameters.normalMap || parameters.flatShading || material.derivatives ) ? '#extension GL_OES_standard_derivatives : enable' : '',

  				'precision ' + parameters.precision + ' float;',
  				'precision ' + parameters.precision + ' int;',

  				'#define SHADER_NAME ' + material.__webglShader.name,

  				customDefines,

  				'#define MAX_DIR_LIGHTS ' + parameters.maxDirLights,
  				'#define MAX_POINT_LIGHTS ' + parameters.maxPointLights,
  				'#define MAX_SPOT_LIGHTS ' + parameters.maxSpotLights,
  				'#define MAX_HEMI_LIGHTS ' + parameters.maxHemiLights,

  				'#define MAX_SHADOWS ' + parameters.maxShadows,

  				parameters.alphaTest ? '#define ALPHATEST ' + parameters.alphaTest : '',

  				renderer.gammaInput ? '#define GAMMA_INPUT' : '',
  				renderer.gammaOutput ? '#define GAMMA_OUTPUT' : '',
  				'#define GAMMA_FACTOR ' + gammaFactorDefine,

  				( parameters.useFog && parameters.fog ) ? '#define USE_FOG' : '',
  				( parameters.useFog && parameters.fogExp ) ? '#define FOG_EXP2' : '',

  				parameters.map ? '#define USE_MAP' : '',
  				parameters.envMap ? '#define USE_ENVMAP' : '',
  				parameters.envMap ? '#define ' + envMapTypeDefine : '',
  				parameters.envMap ? '#define ' + envMapModeDefine : '',
  				parameters.envMap ? '#define ' + envMapBlendingDefine : '',
  				parameters.lightMap ? '#define USE_LIGHTMAP' : '',
  				parameters.aoMap ? '#define USE_AOMAP' : '',
  				parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
  				parameters.bumpMap ? '#define USE_BUMPMAP' : '',
  				parameters.normalMap ? '#define USE_NORMALMAP' : '',
  				parameters.specularMap ? '#define USE_SPECULARMAP' : '',
  				parameters.alphaMap ? '#define USE_ALPHAMAP' : '',
  				parameters.vertexColors ? '#define USE_COLOR' : '',

  				parameters.flatShading ? '#define FLAT_SHADED': '',

  				parameters.metal ? '#define METAL' : '',
  				parameters.doubleSided ? '#define DOUBLE_SIDED' : '',
  				parameters.flipSided ? '#define FLIP_SIDED' : '',

  				parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
  				parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '',
  				parameters.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '',
  				parameters.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '',

  				parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
  				parameters.logarithmicDepthBuffer && renderer.extensions.get('EXT_frag_depth') ? '#define USE_LOGDEPTHBUF_EXT' : '',

  				'uniform mat4 viewMatrix;',
  				'uniform vec3 cameraPosition;',

  				'\n'

  			].filter( filterEmptyLine ).join( '\n' );

  		}

  		var vertexGlsl = prefixVertex + vertexShader;
  		var fragmentGlsl = prefixFragment + fragmentShader;

  		var glVertexShader = THREE$WebGLShader( gl, gl.VERTEX_SHADER, vertexGlsl );
  		var glFragmentShader = THREE$WebGLShader( gl, gl.FRAGMENT_SHADER, fragmentGlsl );

  		gl.attachShader( program, glVertexShader );
  		gl.attachShader( program, glFragmentShader );

  		if ( index0AttributeName !== undefined ) {

  			// Force a particular attribute to index 0.
  			// because potentially expensive emulation is done by browser if attribute 0 is disabled.
  			// And, color, for example is often automatically bound to index 0 so disabling it

  			gl.bindAttribLocation( program, 0, index0AttributeName );

  		}

  		gl.linkProgram( program );

  		var programLog = gl.getProgramInfoLog( program );
  		var vertexLog = gl.getShaderInfoLog( glVertexShader );
  		var fragmentLog = gl.getShaderInfoLog( glFragmentShader );

  		var runnable = true;
  		var haveDiagnostics = true;

  		if ( gl.getProgramParameter( program, gl.LINK_STATUS ) === false ) {

  			runnable = false;

  			console.error( 'THREE.WebGLProgram: shader error: ', gl.getError(), 'gl.VALIDATE_STATUS', gl.getProgramParameter( program, gl.VALIDATE_STATUS ), 'gl.getProgramInfoLog', programLog, vertexLog, fragmentLog );

  		} else if ( programLog !== '' ) {

  			console.warn( 'THREE.WebGLProgram: gl.getProgramInfoLog()', programLog );

  		} else if ( vertexLog === '' || fragmentLog === '' ) {

  			haveDiagnostics = false;

  		}

  		if ( haveDiagnostics ) {

  			this.diagnostics = {

  				runnable: runnable,
  				material: material,

  				programLog: programLog,

  				vertexShader: {

  					log: vertexLog,
  					prefix: prefixVertex

  				},

  				fragmentShader: {

  					log: fragmentLog,
  					prefix: prefixFragment

  				}

  			};

  		}

  		// clean up

  		gl.deleteShader( glVertexShader );
  		gl.deleteShader( glFragmentShader );

  		// set up caching for uniform locations

  		var cachedUniforms;

  		this.getUniforms = function() {

  			if ( cachedUniforms === undefined ) {

  				cachedUniforms = fetchUniformLocations( gl, program );

  			}

  			return cachedUniforms;

  		};

  		// set up caching for attribute locations

  		var cachedAttributes;

  		this.getAttributes = function() {

  			if ( cachedAttributes === undefined ) {

  				cachedAttributes = fetchAttributeLocations( gl, program );

  			}

  			return cachedAttributes;

  		};

  		// DEPRECATED

  		Object.defineProperties( this, {

  			uniforms: {
  				get: function() {

  					console.warn( 'THREE.WebGLProgram: .uniforms is now .getUniforms().' );
  					return this.getUniforms();

  				}
  			},

  			attributes: {
  				get: function() {

  					console.warn( 'THREE.WebGLProgram: .attributes is now .getAttributes().' );
  					return this.getAttributes();

  				}
  			}

  		});


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

  THREE$ShaderChunk["alphamap_fragment"] = "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";
  THREE$ShaderChunk["alphamap_pars_fragment"] = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
  THREE$ShaderChunk["alphatest_fragment"] = "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";
  THREE$ShaderChunk["aomap_fragment"] = "#ifdef USE_AOMAP\n\n\ttotalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n";
  THREE$ShaderChunk["aomap_pars_fragment"] = "#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif";
  THREE$ShaderChunk["bumpmap_pars_fragment"] = "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n";
  THREE$ShaderChunk["color_fragment"] = "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif";
  THREE$ShaderChunk["color_pars_fragment"] = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";
  THREE$ShaderChunk["color_pars_vertex"] = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";
  THREE$ShaderChunk["color_vertex"] = "#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif";
  THREE$ShaderChunk["common"] = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n\tif ( decayExponent > 0.0 ) {\n\n\t  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t}\n\n\treturn 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n\treturn ( 1.0 - specularColor ) * pow( 1.0 - dotLH, 5.0 ) + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n\t// geometry term is (n⋅l)(n⋅v) / 4(n⋅l)(n⋅v)\n\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n\t// factor of 1/PI in distribution term omitted\n\n\treturn ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\t//float dotNL = saturate( dot( normal, lightDir ) );\n\t//float dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( lightDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n\t#ifdef GAMMA_INPUT\n\n\t\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n\t#else\n\n\t\treturn a;\n\n\t#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n\t#else\n\n\t\treturn a;\n\n\t#endif\n\n}\n";
  THREE$ShaderChunk["default_vertex"] = "#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n\tvec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";
  THREE$ShaderChunk["defaultnormal_vertex"] = "#ifdef USE_SKINNING\n\n\tvec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n\tvec3 objectNormal = morphedNormal;\n\n#else\n\n\tvec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";
  THREE$ShaderChunk["emissivemap_fragment"] = "#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n\ttotalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n";
  THREE$ShaderChunk["emissivemap_pars_fragment"] = "#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n";
  THREE$ShaderChunk["envmap_fragment"] = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";
  THREE$ShaderChunk["envmap_pars_fragment"] = "#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n";
  THREE$ShaderChunk["envmap_pars_vertex"] = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n";
  THREE$ShaderChunk["envmap_vertex"] = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n";
  THREE$ShaderChunk["fog_fragment"] = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
  THREE$ShaderChunk["fog_pars_fragment"] = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";
  THREE$ShaderChunk["lightmap_fragment"] = "#ifdef USE_LIGHTMAP\n\n\ttotalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n";
  THREE$ShaderChunk["lightmap_pars_fragment"] = "#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif";
  THREE$ShaderChunk["lights_lambert_pars_vertex"] = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n";
  THREE$ShaderChunk["lights_lambert_vertex"] = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = pointLightColor[ i ];\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\t// attenuation\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tvLightFront += lightColor * attenuation * saturate( dotProduct );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = spotLightColor[ i ];\n\n\t\tvec3 lightPosition = spotLightPosition[ i ];\n\t\tvec4 lPosition = viewMatrix * vec4( lightPosition, 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( lightPosition - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\t\t\t// attenuation\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tattenuation *= spotEffect;\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\t\tvLightFront += lightColor * attenuation * saturate( dotProduct );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = directionalLightColor[ i ];\n\n\t\tvec3 lightDir = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tvLightFront += lightColor * saturate( dotProduct );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += lightColor * saturate( - dotProduct );\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lightDir = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tfloat hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n";
  THREE$ShaderChunk["lights_phong_fragment"] = "#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = pointLightColor[ i ];\n\n\t\tvec3 lightPosition = pointLightPosition[ i ];\n\t\tvec4 lPosition = viewMatrix * vec4( lightPosition, 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\t// attenuation\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\t// diffuse\n\n\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\ttotalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\t\t// specular\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = spotLightColor[ i ];\n\n\t\tvec3 lightPosition = spotLightPosition[ i ];\n\t\tvec4 lPosition = viewMatrix * vec4( lightPosition, 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( lightPosition - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\t\t\t// attenuation\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tattenuation *= spotEffect;\n\n\t\t\t// diffuse\n\n\t\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\t\ttotalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\t\t\t// specular\n\n\t\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\t\ttotalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = directionalLightColor[ i ];\n\n\t\tvec3 lightDir = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\ttotalDiffuseLight += lightColor * cosineTerm;\n\n\t\t// specular\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lightDir = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += lightColor;\n\n\t\t// specular (sky term only)\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * max( dotProduct, 0.0 );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;\n\n#endif\n";
  THREE$ShaderChunk["lights_phong_pars_fragment"] = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n";
  THREE$ShaderChunk["lights_phong_pars_vertex"] = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";
  THREE$ShaderChunk["lights_phong_vertex"] = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";
  THREE$ShaderChunk["linear_to_gamma_fragment"] = "\n\toutgoingLight = linearToOutput( outgoingLight );\n";
  THREE$ShaderChunk["logdepthbuf_fragment"] = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
  THREE$ShaderChunk["logdepthbuf_pars_fragment"] = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";
  THREE$ShaderChunk["logdepthbuf_pars_vertex"] = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";
  THREE$ShaderChunk["logdepthbuf_vertex"] = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";
  THREE$ShaderChunk["map_fragment"] = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif\n";
  THREE$ShaderChunk["map_pars_fragment"] = "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";
  THREE$ShaderChunk["map_particle_fragment"] = "#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
  THREE$ShaderChunk["map_particle_pars_fragment"] = "#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n";
  THREE$ShaderChunk["morphnormal_vertex"] = "#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
  THREE$ShaderChunk["morphtarget_pars_vertex"] = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
  THREE$ShaderChunk["morphtarget_vertex"] = "#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
  THREE$ShaderChunk["normalmap_pars_fragment"] = "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
  THREE$ShaderChunk["shadowmap_fragment"] = "#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
  THREE$ShaderChunk["shadowmap_pars_fragment"] = "#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
  THREE$ShaderChunk["shadowmap_pars_vertex"] = "#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";
  THREE$ShaderChunk["shadowmap_vertex"] = "#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
  THREE$ShaderChunk["skinbase_vertex"] = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";
  THREE$ShaderChunk["skinning_pars_vertex"] = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
  THREE$ShaderChunk["skinning_vertex"] = "#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
  THREE$ShaderChunk["skinnormal_vertex"] = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
  THREE$ShaderChunk["specularmap_fragment"] = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";
  THREE$ShaderChunk["specularmap_pars_fragment"] = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";
  THREE$ShaderChunk["uv2_pars_fragment"] = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif";
  THREE$ShaderChunk["uv2_pars_vertex"] = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif";
  THREE$ShaderChunk["uv2_vertex"] = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif";
  THREE$ShaderChunk["uv_pars_fragment"] = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvarying vec2 vUv;\n\n#endif";
  THREE$ShaderChunk["uv_pars_vertex"] = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";
  THREE$ShaderChunk["uv_vertex"] = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
  THREE$ShaderChunk["worldpos_vertex"] = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#elif defined( USE_MORPHTARGETS )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif\n";

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

  		"specularMap" : { type: "t", value: null },
  		"alphaMap" : { type: "t", value: null },

  		"envMap" : { type: "t", value: null },
  		"flipEnvMap" : { type: "f", value: - 1 },
  		"reflectivity" : { type: "f", value: 1.0 },
  		"refractionRatio" : { type: "f", value: 0.98 }

  	},

  	aomap: {

  		"aoMap" : { type: "t", value: null },
  		"aoMapIntensity" : { type: "f", value: 1 },

  	},

  	lightmap: {

  		"lightMap" : { type: "t", value: null },
  		"lightMapIntensity" : { type: "f", value: 1 },

  	},

  	emissivemap: {

  		"emissiveMap" : { type: "t", value: null },

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
  			THREE$UniformsLib[ "aomap" ],
  			THREE$UniformsLib[ "fog" ],
  			THREE$UniformsLib[ "shadowmap" ]

  		] ),

  		vertexShader: [

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "uv_pars_vertex" ],
  			THREE$ShaderChunk[ "uv2_pars_vertex" ],
  			THREE$ShaderChunk[ "envmap_pars_vertex" ],
  			THREE$ShaderChunk[ "color_pars_vertex" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "skinning_pars_vertex" ],
  			THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "uv_vertex" ],
  				THREE$ShaderChunk[ "uv2_vertex" ],
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
  			THREE$ShaderChunk[ "uv_pars_fragment" ],
  			THREE$ShaderChunk[ "uv2_pars_fragment" ],
  			THREE$ShaderChunk[ "map_pars_fragment" ],
  			THREE$ShaderChunk[ "alphamap_pars_fragment" ],
  			THREE$ShaderChunk[ "aomap_pars_fragment" ],
  			THREE$ShaderChunk[ "envmap_pars_fragment" ],
  			THREE$ShaderChunk[ "fog_pars_fragment" ],
  			THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
  			THREE$ShaderChunk[ "specularmap_pars_fragment" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	vec3 outgoingLight = vec3( 0.0 );",
  			"	vec4 diffuseColor = vec4( diffuse, opacity );",
  			"	vec3 totalAmbientLight = vec3( 1.0 );", // hardwired

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "map_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],
  				THREE$ShaderChunk[ "alphamap_fragment" ],
  				THREE$ShaderChunk[ "alphatest_fragment" ],
  				THREE$ShaderChunk[ "specularmap_fragment" ],
  				THREE$ShaderChunk[ "aomap_fragment" ],

  			"	outgoingLight = diffuseColor.rgb * totalAmbientLight;", // simple shader

  				THREE$ShaderChunk[ "envmap_fragment" ],
  				THREE$ShaderChunk[ "shadowmap_fragment" ],		// TODO: Shadows on an otherwise unlit surface doesn't make sense.

  				THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

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
  				"emissive" : { type: "c", value: new THREE$Color( 0x000000 ) }
  			}

  		] ),

  		vertexShader: [

  			"#define LAMBERT",

  			"varying vec3 vLightFront;",

  			"#ifdef DOUBLE_SIDED",

  			"	varying vec3 vLightBack;",

  			"#endif",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "uv_pars_vertex" ],
  			THREE$ShaderChunk[ "uv2_pars_vertex" ],
  			THREE$ShaderChunk[ "envmap_pars_vertex" ],
  			THREE$ShaderChunk[ "lights_lambert_pars_vertex" ],
  			THREE$ShaderChunk[ "color_pars_vertex" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "skinning_pars_vertex" ],
  			THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "uv_vertex" ],
  				THREE$ShaderChunk[ "uv2_vertex" ],
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
  			THREE$ShaderChunk[ "uv_pars_fragment" ],
  			THREE$ShaderChunk[ "uv2_pars_fragment" ],
  			THREE$ShaderChunk[ "map_pars_fragment" ],
  			THREE$ShaderChunk[ "alphamap_pars_fragment" ],
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

  			"		if ( gl_FrontFacing )",
  			"			outgoingLight += diffuseColor.rgb * vLightFront + emissive;",
  			"		else",
  			"			outgoingLight += diffuseColor.rgb * vLightBack + emissive;",

  			"	#else",

  			"		outgoingLight += diffuseColor.rgb * vLightFront + emissive;",

  			"	#endif",

  				THREE$ShaderChunk[ "envmap_fragment" ],
  				THREE$ShaderChunk[ "shadowmap_fragment" ],

  				THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

  			"}"

  		].join("\n")

  	},

  	'phong': {

  		uniforms: THREE$UniformsUtils.merge( [

  			THREE$UniformsLib[ "common" ],
  			THREE$UniformsLib[ "aomap" ],
  			THREE$UniformsLib[ "lightmap" ],
  			THREE$UniformsLib[ "emissivemap" ],
  			THREE$UniformsLib[ "bump" ],
  			THREE$UniformsLib[ "normalmap" ],
  			THREE$UniformsLib[ "fog" ],
  			THREE$UniformsLib[ "lights" ],
  			THREE$UniformsLib[ "shadowmap" ],

  			{
  				"emissive" : { type: "c", value: new THREE$Color( 0x000000 ) },
  				"specular" : { type: "c", value: new THREE$Color( 0x111111 ) },
  				"shininess": { type: "f", value: 30 }
  			}

  		] ),

  		vertexShader: [

  			"#define PHONG",

  			"varying vec3 vViewPosition;",

  			"#ifndef FLAT_SHADED",

  			"	varying vec3 vNormal;",

  			"#endif",

  			THREE$ShaderChunk[ "common" ],
  			THREE$ShaderChunk[ "uv_pars_vertex" ],
  			THREE$ShaderChunk[ "uv2_pars_vertex" ],
  			THREE$ShaderChunk[ "envmap_pars_vertex" ],
  			THREE$ShaderChunk[ "lights_phong_pars_vertex" ],
  			THREE$ShaderChunk[ "color_pars_vertex" ],
  			THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
  			THREE$ShaderChunk[ "skinning_pars_vertex" ],
  			THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

  			"void main() {",

  				THREE$ShaderChunk[ "uv_vertex" ],
  				THREE$ShaderChunk[ "uv2_vertex" ],
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

  			"	vViewPosition = - mvPosition.xyz;",

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
  			THREE$ShaderChunk[ "uv_pars_fragment" ],
  			THREE$ShaderChunk[ "uv2_pars_fragment" ],
  			THREE$ShaderChunk[ "map_pars_fragment" ],
  			THREE$ShaderChunk[ "alphamap_pars_fragment" ],
  			THREE$ShaderChunk[ "aomap_pars_fragment" ],
  			THREE$ShaderChunk[ "lightmap_pars_fragment" ],
  			THREE$ShaderChunk[ "emissivemap_pars_fragment" ],
  			THREE$ShaderChunk[ "envmap_pars_fragment" ],
  			THREE$ShaderChunk[ "fog_pars_fragment" ],
  			THREE$ShaderChunk[ "lights_phong_pars_fragment" ],
  			THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
  			THREE$ShaderChunk[ "bumpmap_pars_fragment" ],
  			THREE$ShaderChunk[ "normalmap_pars_fragment" ],
  			THREE$ShaderChunk[ "specularmap_pars_fragment" ],
  			THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

  			"void main() {",

  			"	vec3 outgoingLight = vec3( 0.0 );",
  			"	vec4 diffuseColor = vec4( diffuse, opacity );",
  			"	vec3 totalAmbientLight = ambientLightColor;",
  			"	vec3 totalEmissiveLight = emissive;",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "map_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],
  				THREE$ShaderChunk[ "alphamap_fragment" ],
  				THREE$ShaderChunk[ "alphatest_fragment" ],
  				THREE$ShaderChunk[ "specularmap_fragment" ],
  				THREE$ShaderChunk[ "lightmap_fragment" ],
  				THREE$ShaderChunk[ "aomap_fragment" ],
  				THREE$ShaderChunk[ "emissivemap_fragment" ],

  				THREE$ShaderChunk[ "lights_phong_fragment" ],

  				THREE$ShaderChunk[ "envmap_fragment" ],
  				THREE$ShaderChunk[ "shadowmap_fragment" ],

  				THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

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

  			"	vec3 outgoingLight = vec3( 0.0 );",
  			"	vec4 diffuseColor = vec4( psColor, opacity );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "map_particle_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],
  				THREE$ShaderChunk[ "alphatest_fragment" ],

  			"	outgoingLight = diffuseColor.rgb;", // simple shader

  				THREE$ShaderChunk[ "shadowmap_fragment" ],
  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

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

  			"	vec3 outgoingLight = vec3( 0.0 );",
  			"	vec4 diffuseColor = vec4( diffuse, opacity );",

  				THREE$ShaderChunk[ "logdepthbuf_fragment" ],
  				THREE$ShaderChunk[ "color_fragment" ],

  			"	outgoingLight = diffuseColor.rgb;", // simple shader

  				THREE$ShaderChunk[ "fog_fragment" ],

  			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

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
  			"	gl_FragColor = vec4( vec3( color ), opacity );",

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
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$LensFlarePlugin ( renderer, flares ) {
  	this.isLensFlarePlugin = true;

  	var gl = renderer.context;
  	var state = renderer.state;

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

  		state.bindTexture( gl.TEXTURE_2D, tempTexture );
  		gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGB, 16, 16, 0, gl.RGB, gl.UNSIGNED_BYTE, null );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
  		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );

  		state.bindTexture( gl.TEXTURE_2D, occlusionTexture );
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
  		};

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

  		state.initAttributes();
  		state.enableAttribute( attributes.vertex );
  		state.enableAttribute( attributes.uv );
  		state.disableUnusedAttributes();

  		// loop through all lens flares to update their occlusion and positions
  		// setup gl and common used attribs/uniforms

  		gl.uniform1i( uniforms.occlusionMap, 0 );
  		gl.uniform1i( uniforms.map, 1 );

  		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
  		gl.vertexAttribPointer( attributes.vertex, 2, gl.FLOAT, false, 2 * 8, 0 );
  		gl.vertexAttribPointer( attributes.uv, 2, gl.FLOAT, false, 2 * 8, 8 );

  		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );

  		state.disable( gl.CULL_FACE );
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

  			screenPosition.copy( tempPosition );

  			screenPositionPixels.x = screenPosition.x * halfViewportWidth + halfViewportWidth;
  			screenPositionPixels.y = screenPosition.y * halfViewportHeight + halfViewportHeight;

  			// screen cull

  			if ( hasVertexTexture || (
  				screenPositionPixels.x > 0 &&
  				screenPositionPixels.x < viewportWidth &&
  				screenPositionPixels.y > 0 &&
  				screenPositionPixels.y < viewportHeight ) ) {

  				// save current RGB to temp texture

  				state.activeTexture( gl.TEXTURE0 );
  				state.bindTexture( gl.TEXTURE_2D, null );
  				state.activeTexture( gl.TEXTURE1 );
  				state.bindTexture( gl.TEXTURE_2D, tempTexture );
  				gl.copyTexImage2D( gl.TEXTURE_2D, 0, gl.RGB, screenPositionPixels.x - 8, screenPositionPixels.y - 8, 16, 16, 0 );


  				// render pink quad

  				gl.uniform1i( uniforms.renderType, 0 );
  				gl.uniform2f( uniforms.scale, scale.x, scale.y );
  				gl.uniform3f( uniforms.screenPosition, screenPosition.x, screenPosition.y, screenPosition.z );

  				state.disable( gl.BLEND );
  				gl.enable( gl.DEPTH_TEST );

  				gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );


  				// copy result to occlusionMap

  				state.activeTexture( gl.TEXTURE0 );
  				state.bindTexture( gl.TEXTURE_2D, occlusionTexture );
  				gl.copyTexImage2D( gl.TEXTURE_2D, 0, gl.RGBA, screenPositionPixels.x - 8, screenPositionPixels.y - 8, 16, 16, 0 );


  				// restore graphics

  				gl.uniform1i( uniforms.renderType, 1 );
  				gl.disable( gl.DEPTH_TEST );

  				state.activeTexture( gl.TEXTURE1 );
  				state.bindTexture( gl.TEXTURE_2D, tempTexture );
  				gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );


  				// update object positions

  				flare.positionScreen.copy( screenPosition );

  				if ( flare.customUpdateCallback ) {

  					flare.customUpdateCallback( flare );

  				} else {

  					flare.updateLensFlares();

  				}

  				// render flares

  				gl.uniform1i( uniforms.renderType, 2 );
  				state.enable( gl.BLEND );

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

  						state.setBlending( sprite.blending, sprite.blendEquation, sprite.blendSrc, sprite.blendDst );
  						renderer.setTexture( sprite.texture, 1 );

  						gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );

  					}

  				}

  			}

  		}

  		// restore gl

  		state.enable( gl.CULL_FACE );
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
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   * @author szimek / https://github.com/szimek/
   */

  function THREE$Texture ( image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
  	this.isTexture = true;

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

  	toJSON: function ( meta ) {

  		if ( meta.textures[ this.uuid ] !== undefined ) {

  			return meta.textures[ this.uuid ];

  		}

  		function getDataURL( image ) {

  			var canvas;

  			if ( image.toDataURL !== undefined ) {

  				canvas = image;

  			} else {

  				canvas = document.createElement( 'canvas' );
  				canvas.width = image.width;
  				canvas.height = image.height;

  				canvas.getContext( '2d' ).drawImage( image, 0, 0, image.width, image.height );

  			}

  			if ( canvas.width > 2048 || canvas.height > 2048 ) {

  				return canvas.toDataURL( 'image/jpeg', 0.6 );

  			} else {

  				return canvas.toDataURL( 'image/png' );

  			}

  		}

  		var output = {
  			metadata: {
  				version: 4.4,
  				type: 'Texture',
  				generator: 'Texture.toJSON'
  			},

  			uuid: this.uuid,
  			name: this.name,

  			mapping: this.mapping,

  			repeat: [ this.repeat.x, this.repeat.y ],
  			offset: [ this.offset.x, this.offset.y ],
  			wrap: [ this.wrapS, this.wrapT ],

  			minFilter: this.minFilter,
  			magFilter: this.magFilter,
  			anisotropy: this.anisotropy
  		};

  		if ( this.image !== undefined ) {

  			// TODO: Move to THREE.Image

  			var image = this.image;

  			if ( image.uuid === undefined ) {

  				image.uuid = THREE$Math.generateUUID(); // UGH

  			}

  			if ( meta.images[ image.uuid ] === undefined ) {

  				meta.images[ image.uuid ] = {
  					uuid: image.uuid,
  					url: getDataURL( image )
  				};

  			}

  			output.image = image.uuid;

  		}

  		meta.textures[ this.uuid ] = output;

  		return output;

  	},

  	update: function () {

  		this.dispatchEvent( { type: 'update' } );

  	},

  	dispose: function () {

  		this.dispatchEvent( { type: 'dispose' } );

  	}

  };

  THREE$EventDispatcher.prototype.apply( THREE$Texture.prototype );

  var __count = 0;
  function THREE$TextureIdCount () { return __count++; }


  /**
   * @author mikael emtinger / http://gomo.se/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$SpritePlugin ( renderer, sprites ) {
  	this.isSpritePlugin = true;

  	var gl = renderer.context;
  	var state = renderer.state;

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

  		state.initAttributes();
  		state.enableAttribute( attributes.position );
  		state.enableAttribute( attributes.uv );
  		state.disableUnusedAttributes();

  		state.disable( gl.CULL_FACE );
  		state.enable( gl.BLEND );

  		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
  		gl.vertexAttribPointer( attributes.position, 2, gl.FLOAT, false, 2 * 8, 0 );
  		gl.vertexAttribPointer( attributes.uv, 2, gl.FLOAT, false, 2 * 8, 8 );

  		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );

  		gl.uniformMatrix4fv( uniforms.projectionMatrix, false, camera.projectionMatrix.elements );

  		state.activeTexture( gl.TEXTURE0 );
  		gl.uniform1i( uniforms.map, 0 );

  		var oldFogType = 0;
  		var sceneFogType = 0;
  		var fog = scene.fog;

  		if ( fog ) {

  			gl.uniform3f( uniforms.fogColor, fog.color.r, fog.color.g, fog.color.b );

  			if ( (fog && fog.isFog) ) {

  				gl.uniform1f( uniforms.fogNear, fog.near );
  				gl.uniform1f( uniforms.fogFar, fog.far );

  				gl.uniform1i( uniforms.fogType, 1 );
  				oldFogType = 1;
  				sceneFogType = 1;

  			} else if ( (fog && fog.isFogExp2) ) {

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

  			state.setBlending( material.blending, material.blendEquation, material.blendSrc, material.blendDst );
  			state.setDepthTest( material.depthTest );
  			state.setDepthWrite( material.depthWrite );

  			if ( material.map && material.map.image && material.map.image.width ) {

  				renderer.setTexture( material.map, 0 );

  			} else {

  				renderer.setTexture( texture, 0 );

  			}

  			gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );

  		}

  		// restore gl

  		state.enable( gl.CULL_FACE );

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
  						'fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );',
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

  	}

  	function painterSortStable ( a, b ) {

  		if ( a.z !== b.z ) {

  			return b.z - a.z;

  		} else {

  			return b.id - a.id;

  		}

  	}

  }


  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Light ( color ) {
  	this.isLight = true;

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
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$DirectionalLight ( color, intensity ) {
  	this.isDirectionalLight = true;

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
  	this.shadowCascadeFarZ = [ 0.990, 0.998, 1.000 ];

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
  	light.shadowCascadeFarZ = this.shadowCascadeFarZ.slice( 0 );

  	return light;

  };

  THREE$DirectionalLight.prototype.toJSON = function ( meta ) {

  	var data = THREE$Object3D.prototype.toJSON.call( this, meta );

  	data.object.color = this.color.getHex();
  	data.object.intensity = this.intensity;

  	return data;

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$LineSegments ( geometry, material ) {
  	this.isLineSegments = true;

  	THREE$Line.call( this, geometry, material );

  	this.type = 'LineSegments';

  }

  THREE$LineSegments.prototype = Object.create( THREE$Line.prototype );
  THREE$LineSegments.prototype.constructor = THREE$LineSegments;

  THREE$LineSegments.prototype.clone = function ( object ) {

  	if ( object === undefined ) object = new THREE$LineSegments( this.geometry, this.material );

  	THREE$Line.prototype.clone.call( this, object );

  	return object;

  };


  /**
   * @author alteredq / http://alteredqualia.com/
   *
   *	- shows frustum, line of sight and up of the camera
   *	- suitable for fast updates
   * 	- based on frustum visualization in lightgl.js shadowmap example
   *		http://evanw.github.com/lightgl.js/tests/shadowmap.html
   */

  function THREE$CameraHelper ( camera ) {
  	this.isCameraHelper = true;

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

  	THREE$LineSegments.call( this, geometry, material );

  	this.camera = camera;
  	this.matrix = camera.matrixWorld;
  	this.matrixAutoUpdate = false;

  	this.pointMap = pointMap;

  	this.update();

  }

  THREE$CameraHelper.prototype = Object.create( THREE$LineSegments.prototype );
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

  function THREE$OrthographicCamera ( left, right, top, bottom, near, far ) {
  	this.isOrthographicCamera = true;

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

  	return camera;
  };

  THREE$OrthographicCamera.prototype.toJSON = function ( meta ) {

  	var data = THREE$Object3D.prototype.toJSON.call( this, meta );

  	data.object.zoom = this.zoom;
  	data.object.left = this.left;
  	data.object.right = this.right;
  	data.object.top = this.top;
  	data.object.bottom = this.bottom;
  	data.object.near = this.near;
  	data.object.far = this.far;

  	return data;

  };



  /**
   * @author szimek / https://github.com/szimek/
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$WebGLRenderTarget ( width, height, options ) {
  	this.isWebGLRenderTarget = true;

  	this.uuid = THREE$Math.generateUUID();

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

  		if ( this.width !== width || this.height !== height ) {

  			this.width = width;
  			this.height = height;

  			this.dispose();

  		}
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
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$Gyroscope () {
  	this.isGyroscope = true;

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
   * @author bhouston / http://exocortex.com
   */

  function THREE$Plane ( normal, constant ) {
  	this.isPlane = true;

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

  			if ( denominator === 0 ) {

  				// line is coplanar, return origin
  				if ( this.distanceToPoint( line.start ) === 0 ) {

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

  		return plane.normal.equals( this.normal ) && ( plane.constant === this.constant );

  	},

  	clone: function () {

  		return new THREE$Plane().copy( this );

  	}

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   * @author alteredq / http://alteredqualia.com/
   * @author bhouston / http://exocortex.com
   */

  function THREE$Frustum ( p0, p1, p2, p3, p4, p5 ) {
  	this.isFrustum = true;

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
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$WebGLShadowMap ( _renderer, _lights, _objects ) {
  	this.isWebGLShadowMap = true;

  	var _gl = _renderer.context,
  	_state = _renderer.state,
  	_frustum = new THREE$Frustum(),
  	_projScreenMatrix = new THREE$Matrix4(),

  	_min = new THREE$Vector3(),
  	_max = new THREE$Vector3(),

  	_webglObjects = _objects.objects,
  	_webglObjectsImmediate = _objects.objectsImmediate,

  	_matrixPosition = new THREE$Vector3(),

  	_renderList = [];

  	// init

  	var depthShader = THREE$ShaderLib[ "depthRGBA" ];
  	var depthUniforms = THREE$UniformsUtils.clone( depthShader.uniforms );

  	var _depthMaterial = new THREE$ShaderMaterial( {
  		uniforms: depthUniforms,
  		vertexShader: depthShader.vertexShader,
  		fragmentShader: depthShader.fragmentShader
  	 } );

  	var _depthMaterialMorph = new THREE$ShaderMaterial( {
  		uniforms: depthUniforms,
  		vertexShader: depthShader.vertexShader,
  		fragmentShader: depthShader.fragmentShader,
  		morphTargets: true
  	} );

  	var _depthMaterialSkin = new THREE$ShaderMaterial( {
  		uniforms: depthUniforms,
  		vertexShader: depthShader.vertexShader,
  		fragmentShader: depthShader.fragmentShader,
  		skinning: true
  	} );

  	var _depthMaterialMorphSkin = new THREE$ShaderMaterial( {
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

  	//

  	var scope = this;

  	this.enabled = false;

  	this.autoUpdate = true;
  	this.needsUpdate = false;

  	this.type = THREE$PCFShadowMap;
  	this.cullFace = THREE$CullFaceFront;
  	this.cascade = false;

  	this.render = function ( scene, camera ) {

  		if ( scope.enabled === false ) return;
  		if ( scope.autoUpdate === false && scope.needsUpdate === false ) return;

  		var i, il, j, jl, n,

  		shadowMap, shadowMatrix, shadowCamera,
  		webglObject, object, material, light,

  		lights = [],
  		k = 0,

  		fog = null;

  		// set GL state for depth map

  		_gl.clearColor( 1, 1, 1, 1 );
  		_state.disable( _gl.BLEND );

  		_state.enable( _gl.CULL_FACE );
  		_gl.frontFace( _gl.CCW );

  		if ( scope.cullFace === THREE$CullFaceFront ) {

  			_gl.cullFace( _gl.FRONT );

  		} else {

  			_gl.cullFace( _gl.BACK );

  		}

  		_state.setDepthTest( true );

  		// preprocess lights
  		// 	- skip lights that are not casting shadows
  		//	- create virtual lights for cascaded shadow maps

  		for ( i = 0, il = _lights.length; i < il; i ++ ) {

  			light = _lights[ i ];

  			if ( ! light.castShadow ) continue;

  			if ( ( (light && light.isDirectionalLight) ) && light.shadowCascade ) {

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

  				if ( scope.type === THREE$PCFSoftShadowMap ) {

  					shadowFilter = THREE$NearestFilter;

  				}

  				var pars = { minFilter: shadowFilter, magFilter: shadowFilter, format: THREE$RGBAFormat };

  				light.shadowMap = new THREE$WebGLRenderTarget( light.shadowMapWidth, light.shadowMapHeight, pars );
  				light.shadowMapSize = new THREE$Vector2( light.shadowMapWidth, light.shadowMapHeight );

  				light.shadowMatrix = new THREE$Matrix4();

  			}

  			if ( ! light.shadowCamera ) {

  				if ( (light && light.isSpotLight) ) {

  					light.shadowCamera = new THREE$PerspectiveCamera( light.shadowCameraFov, light.shadowMapWidth / light.shadowMapHeight, light.shadowCameraNear, light.shadowCameraFar );

  				} else if ( (light && light.isDirectionalLight) ) {

  					light.shadowCamera = new THREE$OrthographicCamera( light.shadowCameraLeft, light.shadowCameraRight, light.shadowCameraTop, light.shadowCameraBottom, light.shadowCameraNear, light.shadowCameraFar );

  				} else {

  					console.error( "THREE.ShadowMapPlugin: Unsupported light type for shadow", light );
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

  			projectObject( scene, shadowCamera );


  			// render regular objects

  			var objectMaterial, useMorphing, useSkinning;

  			for ( j = 0, jl = _renderList.length; j < jl; j ++ ) {

  				webglObject = _renderList[ j ];

  				object = webglObject.object;

  				// culling is overridden globally for all objects
  				// while rendering depth map

  				// need to deal with MeshFaceMaterial somehow
  				// in that case just use the first of material.materials for now
  				// (proper solution would require to break objects by materials
  				//  similarly to regular rendering and then set corresponding
  				//  depth materials per each chunk instead of just once per object)

  				objectMaterial = getObjectMaterial( object );

  				useMorphing = object.geometry.morphTargets !== undefined && object.geometry.morphTargets.length > 0 && objectMaterial.morphTargets;
  				useSkinning = (object && object.isSkinnedMesh) && objectMaterial.skinning;

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
  				_renderer.renderBufferDirect( shadowCamera, _lights, fog, material, object );

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
  		_state.enable( _gl.BLEND );

  		if ( scope.cullFace === THREE$CullFaceFront ) {

  			_gl.cullFace( _gl.BACK );

  		}

  		_renderer.resetGLState();

  		scope.needsUpdate = false;

  	};

  	function projectObject( object, shadowCamera ) {

  		if ( object.visible === true ) {

  			var webglObject = _objects.objects[ object.id ];

  			if ( webglObject && object.castShadow && ( object.frustumCulled === false || _frustum.intersectsObject( object ) === true ) ) {

  				object._modelViewMatrix.multiplyMatrices( shadowCamera.matrixWorldInverse, object.matrixWorld );
  				_renderList.push( webglObject );

  			}

  			for ( var i = 0, l = object.children.length; i < l; i ++ ) {

  				projectObject( object.children[ i ], shadowCamera );

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

  		return (object.material && object.material.isMeshFaceMaterial)
  			? object.material.materials[ 0 ]
  			: object.material;

  	}

  }


  /**
  * @author mrdoob / http://mrdoob.com/
  */

  function THREE$WebGLExtensions ( gl ) {
  	this.isWebGLExtensions = true;

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

  			console.warn( 'THREE.WebGLRenderer: ' + name + ' extension not supported.' );

  		}

  		extensions[ name ] = extension;

  		return extension;

  	};

  }


  /**
  * @author mrdoob / http://mrdoob.com/
  */

  function THREE$WebGLGeometries ( gl, info ) {
  	this.isWebGLGeometries = true;

  	var geometries = {};

  	this.get = function ( object ) {

  		var geometry = object.geometry;

  		if ( geometries[ geometry.id ] !== undefined ) {

  			return geometries[ geometry.id ];

  		}

  		geometry.addEventListener( 'dispose', onGeometryDispose );

  		if ( (geometry && geometry.isBufferGeometry) ) {

  			geometries[ geometry.id ] = geometry;

  		} else {

  			geometries[ geometry.id ] = new THREE$BufferGeometry().setFromObject( object );

  		}

  		info.memory.geometries ++;

  		return geometries[ geometry.id ];

  	};

  	function onGeometryDispose( event ) {

  		var geometry = event.target;
  		var buffergeometry = geometries[ geometry.id ];

  		for ( var name in buffergeometry.attributes ) {

  			var attribute = buffergeometry.attributes[ name ];

  			if ( attribute.buffer !== undefined ) {

  				gl.deleteBuffer( attribute.buffer );

  				delete attribute.buffer;

  			}

  		}

  		geometry.removeEventListener( 'dispose', onGeometryDispose );

  		delete geometries[ geometry.id ];

  		info.memory.geometries --;

  	}

  }


  /**
  * @author mrdoob / http://mrdoob.com/
  */

  function THREE$WebGLObjects ( gl, properties, info ) {
  	this.isWebGLObjects = true;

  	var objects = {};
  	var objectsImmediate = [];

  	var morphInfluences = new Float32Array( 8 );

  	var geometries = new THREE$WebGLGeometries( gl, info );

  	//

  	function onObjectRemoved( event ) {

  		var object = event.target;

  		object.traverse( function ( child ) {

  			child.removeEventListener( 'remove', onObjectRemoved );
  			removeObject( child );

  		} );

  	}

  	function removeObject( object ) {

  		if ( (object && object.isMesh) ||
  			 (object && object.isPointCloud) ||
  			 (object && object.isLine) ) {

  			delete objects[ object.id ];

  		} else if ( (object && object.isImmediateRenderObject) || object.immediateRenderCallback ) {

  			removeInstances( objectsImmediate, object );

  		}

  		delete object._modelViewMatrix;
  		delete object._normalMatrix;

  		properties.delete( object );

  	}

  	function removeInstances( objlist, object ) {

  		for ( var o = objlist.length - 1; o >= 0; o -- ) {

  			if ( objlist[ o ].object === object ) {

  				objlist.splice( o, 1 );

  			}

  		}

  	}

  	//

  	this.objects = objects;
  	this.objectsImmediate = objectsImmediate;

  	this.geometries = geometries;

  	this.init = function ( object ) {

  		var objectProperties = properties.get( object );

  		if ( objectProperties.__webglInit === undefined ) {

  			objectProperties.__webglInit = true;
  			object._modelViewMatrix = new THREE$Matrix4();
  			object._normalMatrix = new THREE$Matrix3();

  			object.addEventListener( 'removed', onObjectRemoved );

  		}

  		if ( objectProperties.__webglActive === undefined ) {

  			objectProperties.__webglActive = true;

  			if ( (object && object.isMesh) || (object && object.isLine) || (object && object.isPointCloud) ) {

  				objects[ object.id ] = {
  					id: object.id,
  					object: object,
  					z: 0
  				};

  			} else if ( (object && object.isImmediateRenderObject) || object.immediateRenderCallback ) {

  				objectsImmediate.push( {
  					id: null,
  					object: object,
  					opaque: null,
  					transparent: null,
  					z: 0
  				} );

  			}

  		}

  	};

  	function numericalSort ( a, b ) {

  		return b[ 0 ] - a[ 0 ];

  	}

  	function updateObject( object ) {

  		var geometry = geometries.get( object );

  		if ( object.geometry.dynamic === true ) {

  			geometry.updateFromObject( object );

  		}

  		// morph targets

  		if ( object.morphTargetInfluences !== undefined ) {

  			var activeInfluences = [];
  			var morphTargetInfluences = object.morphTargetInfluences;

  			for ( var i = 0, l = morphTargetInfluences.length; i < l; i ++ ) {

  				var influence = morphTargetInfluences[ i ];
  				activeInfluences.push( [ influence, i ] );

  			}

  			activeInfluences.sort( numericalSort );

  			if ( activeInfluences.length > 8 ) {

  				activeInfluences.length = 8;

  			}

  			for ( var i = 0, l = activeInfluences.length; i < l; i ++ ) {

  				morphInfluences[ i ] = activeInfluences[ i ][ 0 ];

  				var attribute = geometry.morphAttributes[ activeInfluences[ i ][ 1 ] ];
  				geometry.addAttribute( 'morphTarget' + i, attribute );

  			}

  			var material = object.material;

  			if ( material.program !== undefined ) {

  				var uniforms = material.program.getUniforms();

  				if ( uniforms.morphTargetInfluences !== null ) {

  					gl.uniform1fv( uniforms.morphTargetInfluences, morphInfluences );

  				}

  			} else {

  				console.warn( 'TOFIX: material.program is undefined' );

  			}

  		}

  		//

  		var attributes = geometry.attributes;

  		for ( var name in attributes ) {

  			var attribute = attributes[ name ];

  			var bufferType = ( name === 'index' ) ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;

  			var data = ( (attribute && attribute.isInterleavedBufferAttribute) ) ? attribute.data : attribute;

  			var attributeProperties = properties.get( data );

  			if ( attributeProperties.__webglBuffer === undefined ) {

  				attributeProperties.__webglBuffer = gl.createBuffer();
  				gl.bindBuffer( bufferType, attributeProperties.__webglBuffer );

  				var usage = gl.STATIC_DRAW;

  				if ( (data && data.isDynamicBufferAttribute)
  						 || ( (data && data.isInstancedBufferAttribute) && data.dynamic === true )
  						 || ( (data && data.isInterleavedBuffer) && data.dynamic === true ) ) {

  					usage = gl.DYNAMIC_DRAW;

  				}

  				gl.bufferData( bufferType, data.array, usage );

  				data.needsUpdate = false;

  			} else if ( data.needsUpdate === true ) {

  				gl.bindBuffer( bufferType, attributeProperties.__webglBuffer );

  				if ( data.updateRange === undefined || data.updateRange.count === -1 ) { // Not using update ranges

  					gl.bufferSubData( bufferType, 0, data.array );

  				} else if ( data.updateRange.count === 0 ) {

  					console.error( 'THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually.' );

  				} else {

  					gl.bufferSubData( bufferType, data.updateRange.offset * data.array.BYTES_PER_ELEMENT,
  									 data.array.subarray( data.updateRange.offset, data.updateRange.offset + data.updateRange.count ) );

  					data.updateRange.count = 0; // reset range

  				}

  				data.needsUpdate = false;

  			}

  		}

  	};

  	// returns the webgl buffer for a specified attribute
  	this.getAttributeBuffer = function ( attribute ) {

  		if ( (attribute && attribute.isInterleavedBufferAttribute) ) {

  			return properties.get( attribute.data ).__webglBuffer

  		}

  		return properties.get( attribute ).__webglBuffer;

  	}

  	this.update = function ( renderList ) {

  		for ( var i = 0, ul = renderList.length; i < ul; i++ ) {

  			var object = renderList[i].object;

  			if ( object.material.visible !== false ) {

  				updateObject( object );

  			}

  		}

  	};

  	this.clear = function () {

  		objects = {};
  		objectsImmediate = [];

  	};

  }


  /**
  * @author fordacious / fordacious.github.io
  */

  function THREE$WebGLProperties () {
  	this.isWebGLProperties = true;

  	var properties = {};

  	this.get = function ( object ) {

  		var uuid = object.uuid;
  		var map = properties[ uuid ];

  		if ( map === undefined ) {

  			map = {};
  			properties[ uuid ] = map;

  		}

  		return map;

  	};

  	this.delete = function ( object ) {

  		delete properties[ object.uuid ];

  	};

  	this.clear = function () {

  		properties = {};

  	};

  }


  /**
  * @author mrdoob / http://mrdoob.com/
  */

  function THREE$WebGLState ( gl, paramThreeToGL ) {
  	this.isWebGLState = true;

  	var _this = this;

  	var newAttributes = new Uint8Array( 16 );
  	var enabledAttributes = new Uint8Array( 16 );

  	var switches = {};

  	var currentBlending = null;
  	var currentBlendEquation = null;
  	var currentBlendSrc = null;
  	var currentBlendDst = null;
  	var currentBlendEquationAlpha = null;
  	var currentBlendSrcAlpha = null;
  	var currentBlendDstAlpha = null;

  	var currentDepthFunc = null;
  	var currentDepthTest = null;
  	var currentDepthWrite = null;

  	var currentColorWrite = null;

  	var currentFlipSided = null;

  	var currentLineWidth = null;

  	var currentPolygonOffset = null;
  	var currentPolygonOffsetFactor = null;
  	var currentPolygonOffsetUnits = null;

  	var maxTextures = gl.getParameter( gl.MAX_TEXTURE_IMAGE_UNITS );

  	var currentTextureSlot = undefined;
  	var currentBoundTextures = {};

  	this.init = function () {

  		gl.clearColor( 0, 0, 0, 1 );
  		gl.clearDepth( 1 );
  		gl.clearStencil( 0 );

  		gl.enable( gl.DEPTH_TEST );
  		gl.depthFunc( gl.LEQUAL );

  		gl.frontFace( gl.CCW );
  		gl.cullFace( gl.BACK );
  		this.enable( gl.CULL_FACE );

  		this.enable( gl.BLEND );
  		gl.blendEquation( gl.FUNC_ADD );
  		gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );

  	};

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

  	this.enable = function ( id ) {

  		if ( switches[ id ] !== true ) {

  			gl.enable( id );
  			switches[ id ] = true;

  		}

  	};

  	this.disable = function ( id ) {

  		if ( switches[ id ] !== false ) {

  			gl.disable( id );
  			switches[ id ] = false;

  		}

  	};

  	this.setBlending = function ( blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha ) {

  		if ( blending !== currentBlending ) {

  			if ( blending === THREE$NoBlending ) {

  				this.disable( gl.BLEND );

  			} else if ( blending === THREE$AdditiveBlending ) {

  				this.enable( gl.BLEND );
  				gl.blendEquation( gl.FUNC_ADD );
  				gl.blendFunc( gl.SRC_ALPHA, gl.ONE );

  			} else if ( blending === THREE$SubtractiveBlending ) {

  				// TODO: Find blendFuncSeparate() combination

  				this.enable( gl.BLEND );
  				gl.blendEquation( gl.FUNC_ADD );
  				gl.blendFunc( gl.ZERO, gl.ONE_MINUS_SRC_COLOR );

  			} else if ( blending === THREE$MultiplyBlending ) {

  				// TODO: Find blendFuncSeparate() combination

  				this.enable( gl.BLEND );
  				gl.blendEquation( gl.FUNC_ADD );
  				gl.blendFunc( gl.ZERO, gl.SRC_COLOR );

  			} else if ( blending === THREE$CustomBlending ) {

  				this.enable( gl.BLEND );

  			} else {

  				this.enable( gl.BLEND );
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

  	this.setDepthFunc = function ( depthFunc ) {

  		if ( currentDepthFunc !== depthFunc ) {

  			if ( depthFunc ) {

  				switch ( depthFunc ) {

  					case THREE$NeverDepth:

  						gl.depthFunc( gl.NEVER );
  						break;

  					case THREE$AlwaysDepth:

  						gl.depthFunc( gl.ALWAYS );
  						break;

  					case THREE$LessDepth:

  						gl.depthFunc( gl.LESS );
  						break;

  					case THREE$LessEqualDepth:

  						gl.depthFunc( gl.LEQUAL );
  						break;

  					case THREE$EqualDepth:

  						gl.depthFunc( gl.EQUAL );
  						break;

  					case THREE$GreaterEqualDepth:

  						gl.depthFunc( gl.GEQUAL );
  						break;

  					case THREE$GreaterDepth:

  						gl.depthFunc( gl.GREATER );
  						break;

  					case THREE$NotEqualDepth:

  						gl.depthFunc( gl.NOTEQUAL );
  						break;

  					default:

  						gl.depthFunc( gl.LEQUAL );

  				}

  			} else {

  				gl.depthFunc( gl.LEQUAL );

  			}

  			currentDepthFunc = depthFunc;

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

  	// texture

  	this.activeTexture = function ( webglSlot ) {

  		if ( webglSlot === undefined ) webglSlot = gl.TEXTURE0 + maxTextures - 1;

  		if ( currentTextureSlot !== webglSlot ) {

  			gl.activeTexture( webglSlot );
  			currentTextureSlot = webglSlot;

  		}

  	}

  	this.bindTexture = function ( webglType, webglTexture ) {

  		if ( currentTextureSlot === undefined ) {

  			_this.activeTexture();

  		}

  		var boundTexture = currentBoundTextures[currentTextureSlot];

  		if ( boundTexture === undefined ) {

  			boundTexture = { type: undefined, texture: undefined };
  			currentBoundTextures[currentTextureSlot] = boundTexture;

  		}

  		if ( boundTexture.type !== webglType || boundTexture.texture !== webglTexture ) {

  			gl.bindTexture( webglType, webglTexture );

  			boundTexture.type = webglType;
  			boundTexture.texture = webglTexture;

  		}

  	};

  	this.compressedTexImage2D = function () {

  		try {

  			gl.compressedTexImage2D.apply( gl, arguments );

  		} catch ( error ) {

  			console.error( error );

  		}

  	};

  	this.texImage2D = function () {

  		try {

  			gl.texImage2D.apply( gl, arguments );

  		} catch ( error ) {

  			console.error( error );

  		}

  	};

  	//

  	this.reset = function () {

  		for ( var i = 0; i < enabledAttributes.length; i ++ ) {

  			if ( enabledAttributes[ i ] === 1 ) {

  				gl.disableVertexAttribArray( i );
  				enabledAttributes[ i ] = 0;

  			}

  		}

  		switches = {};

  		currentBlending = null;
  		currentDepthTest = null;
  		currentDepthWrite = null;
  		currentColorWrite = null;

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
  	this.isWebGLRenderer = true;

  	console.log( 'THREE.WebGLRenderer', "jsnext" );

  	parameters = parameters || {};

  	var _canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElement( 'canvas' ),
  	_context = parameters.context !== undefined ? parameters.context : null,

  	_width = _canvas.width,
  	_height = _canvas.height,

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

  	// morphs

  	this.maxMorphTargets = 8;
  	this.maxMorphNormals = 4;

  	// flags

  	this.autoScaleCubemaps = true;

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

  	},

  	// info

  	_infoMemory = {

  		programs: 0,
  		geometries: 0,
  		textures: 0

  	},

  	_infoRender = {

  		calls: 0,
  		vertices: 0,
  		faces: 0,
  		points: 0

  	};

  	this.info = {

  		render: _infoRender,
  		memory: _infoMemory,
  		programs: _programs

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

  			objects.clear();
  			properties.clear();

  		}, false );

  	} catch ( error ) {

  		console.error( 'THREE.WebGLRenderer: ' + error );

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

  	var properties = new THREE$WebGLProperties();
  	var objects = new THREE$WebGLObjects( _gl, properties, this.info );

  	var extensions = new THREE$WebGLExtensions( _gl );

  	extensions.get( 'OES_texture_float' );
  	extensions.get( 'OES_texture_float_linear' );
  	extensions.get( 'OES_texture_half_float' );
  	extensions.get( 'OES_texture_half_float_linear' );
  	extensions.get( 'OES_standard_derivatives' );
  	extensions.get( 'ANGLE_instanced_arrays' );

  	if ( extensions.get( 'OES_element_index_uint' ) ) {

  		THREE$BufferGeometry.MaxIndex = 4294967296;

  	}

  	if ( _logarithmicDepthBuffer ) {

  		extensions.get( 'EXT_frag_depth' );

  	}

  	//

  	function glClearColor( r, g, b, a ) {

  		if ( _premultipliedAlpha === true ) {

  			r *= a; g *= a; b *= a;

  		}

  		_gl.clearColor( r, g, b, a );

  	}

  	function setDefaultGLState() {

  		state.init();

  		_gl.viewport( _viewportX, _viewportY, _viewportWidth, _viewportHeight );

  		glClearColor( _clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha );

  	}

  	function resetGLState() {

  		_currentProgram = null;
  		_currentCamera = null;

  		_currentGeometryProgram = '';
  		_currentMaterialId = - 1;

  		_lightsNeedUpdate = true;

  		state.reset();

  	}

  	setDefaultGLState();

  	this.context = _gl;
  	this.extensions = extensions;
  	this.state = state;

  	// shadow map

  	var shadowMap = new THREE$WebGLShadowMap( this, lights, objects );

  	this.shadowMap = shadowMap;

  	// GPU capabilities

  	var _maxTextures = _gl.getParameter( _gl.MAX_TEXTURE_IMAGE_UNITS );
  	var _maxVertexTextures = _gl.getParameter( _gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS );
  	var _maxTextureSize = _gl.getParameter( _gl.MAX_TEXTURE_SIZE );
  	var _maxCubemapSize = _gl.getParameter( _gl.MAX_CUBE_MAP_TEXTURE_SIZE );

  	var _supportsVertexTextures = _maxVertexTextures > 0;
  	var _supportsBoneTextures = _supportsVertexTextures && extensions.get( 'OES_texture_float' );
  	var _supportsInstancedArrays = extensions.get( 'ANGLE_instanced_arrays' );

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
  			console.warn( 'THREE.WebGLRenderer: highp not supported, using mediump.' );

  		} else {

  			_precision = 'lowp';
  			console.warn( 'THREE.WebGLRenderer: highp and mediump not supported, using lowp.' );

  		}

  	}

  	if ( _precision === 'mediump' && ! mediumpAvailable ) {

  		_precision = 'lowp';
  		console.warn( 'THREE.WebGLRenderer: mediump not supported, using lowp.' );

  	}

  	// Plugins

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

  	this.supportsInstancedArrays = function () {

  		return _supportsInstancedArrays;

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

  			if ( value !== undefined ) return value;

  			var extension = extensions.get( 'EXT_texture_filter_anisotropic' );

  			if ( extension !== null ) {

  				value = _gl.getParameter( extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT );

  			} else {

  				value = 0;

  			}

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

  		if ( value !== undefined ) pixelRatio = value;

  	};

  	this.getSize = function () {

  		return {
  			width: _width,
  			height: _height
  		};

  	};

  	this.setSize = function ( width, height, updateStyle ) {

  		_width = width;
  		_height = height;

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

  	// Events

  	function onTextureDispose( event ) {

  		var texture = event.target;

  		texture.removeEventListener( 'dispose', onTextureDispose );

  		deallocateTexture( texture );

  		_infoMemory.textures --;


  	}

  	function onRenderTargetDispose( event ) {

  		var renderTarget = event.target;

  		renderTarget.removeEventListener( 'dispose', onRenderTargetDispose );

  		deallocateRenderTarget( renderTarget );

  		_infoMemory.textures --;

  	}

  	function onMaterialDispose( event ) {

  		var material = event.target;

  		material.removeEventListener( 'dispose', onMaterialDispose );

  		deallocateMaterial( material );

  	}

  	// Buffer deallocation

  	function deallocateTexture( texture ) {

  		var textureProperties = properties.get( texture );

  		if ( texture.image && textureProperties.__image__webglTextureCube ) {

  			// cube texture

  			_gl.deleteTexture( textureProperties.__image__webglTextureCube );

  		} else {

  			// 2D texture

  			if ( textureProperties.__webglInit === undefined ) return;

  			_gl.deleteTexture( textureProperties.__webglTexture );

  		}

  		// remove all webgl properties
  		properties.delete( texture );

  	}

  	function deallocateRenderTarget( renderTarget ) {

  		var renderTargetProperties = properties.get( renderTarget );

  		if ( ! renderTarget || renderTargetProperties.__webglTexture === undefined ) return;

  		_gl.deleteTexture( renderTargetProperties.__webglTexture );

  		if ( (renderTarget && renderTarget.isWebGLRenderTargetCube) ) {

  			for ( var i = 0; i < 6; i ++ ) {

  				_gl.deleteFramebuffer( renderTargetProperties.__webglFramebuffer[ i ] );
  				_gl.deleteRenderbuffer( renderTargetProperties.__webglRenderbuffer[ i ] );

  			}

  		} else {

  			_gl.deleteFramebuffer( renderTargetProperties.__webglFramebuffer );
  			_gl.deleteRenderbuffer( renderTargetProperties.__webglRenderbuffer );

  		}

  		properties.delete( renderTargetProperties );

  	}

  	function deallocateMaterial( material ) {

  		releaseMaterialProgramReference( material );

  		properties.delete( material );

  	}


  	function releaseMaterialProgramReference( material ) {

  		var program = properties.get( material ).program.program;

  		if ( program === undefined ) return;

  		material.program = undefined;

  		for ( var i = 0, n = _programs.length; i !== n; ++ i ) {

  			var programInfo = _programs[ i ];

  			if ( programInfo.program === program ) {

  				var newReferenceCount = -- programInfo.usedTimes;

  				if ( newReferenceCount === 0 ) {

  					// the last meterial that has been using the program let
  					// go of it, so remove it from the (unordered) _programs
  					// set and deallocate the GL resource

  					var newLength = n - 1;

  					_programs[ i ] = _programs[ newLength ];
  					_programs.pop();

  					_gl.deleteProgram( program );

  					_infoMemory.programs = newLength;

  				}

  				break;

  			}

  		}

  	}

  	// Buffer rendering

  	this.renderBufferImmediate = function ( object, program, material ) {

  		state.initAttributes();

  		var objectProperties = properties.get( object );

  		if ( object.hasPositions && ! objectProperties.__webglVertexBuffer ) objectProperties.__webglVertexBuffer = _gl.createBuffer();
  		if ( object.hasNormals && ! objectProperties.__webglNormalBuffer ) objectProperties.__webglNormalBuffer = _gl.createBuffer();
  		if ( object.hasUvs && ! objectProperties.__webglUvBuffer ) objectProperties.__webglUvBuffer = _gl.createBuffer();
  		if ( object.hasColors && ! objectProperties.__webglColorBuffer ) objectProperties.__webglColorBuffer = _gl.createBuffer();

  		var attributes = program.getAttributes();

  		if ( object.hasPositions ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, objectProperties.__webglVertexBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, object.positionArray, _gl.DYNAMIC_DRAW );

  			state.enableAttribute( attributes.position );
  			_gl.vertexAttribPointer( attributes.position, 3, _gl.FLOAT, false, 0, 0 );

  		}

  		if ( object.hasNormals ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, objectProperties.__webglNormalBuffer );

  			if ( (material && material.isMeshPhongMaterial) === false && material.shading === THREE$FlatShading ) {

  				var nx, ny, nz,
  					nax, nbx, ncx, nay, nby, ncy, naz, nbz, ncz,
  					normalArray,
  					i, il = object.count * 3;

  				for ( i = 0; i < il; i += 9 ) {

  					normalArray = object.normalArray;

  					nax = normalArray[ i ];
  					nay = normalArray[ i + 1 ];
  					naz = normalArray[ i + 2 ];

  					nbx = normalArray[ i + 3 ];
  					nby = normalArray[ i + 4 ];
  					nbz = normalArray[ i + 5 ];

  					ncx = normalArray[ i + 6 ];
  					ncy = normalArray[ i + 7 ];
  					ncz = normalArray[ i + 8 ];

  					nx = ( nax + nbx + ncx ) / 3;
  					ny = ( nay + nby + ncy ) / 3;
  					nz = ( naz + nbz + ncz ) / 3;

  					normalArray[ i     ] = nx;
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

  			state.enableAttribute( attributes.normal );

  			_gl.vertexAttribPointer( attributes.normal, 3, _gl.FLOAT, false, 0, 0 );

  		}

  		if ( object.hasUvs && material.map ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, objectProperties.__webglUvBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, object.uvArray, _gl.DYNAMIC_DRAW );

  			state.enableAttribute( attributes.uv );

  			_gl.vertexAttribPointer( attributes.uv, 2, _gl.FLOAT, false, 0, 0 );

  		}

  		if ( object.hasColors && material.vertexColors !== THREE$NoColors ) {

  			_gl.bindBuffer( _gl.ARRAY_BUFFER, objectProperties.__webglColorBuffer );
  			_gl.bufferData( _gl.ARRAY_BUFFER, object.colorArray, _gl.DYNAMIC_DRAW );

  			state.enableAttribute( attributes.color );

  			_gl.vertexAttribPointer( attributes.color, 3, _gl.FLOAT, false, 0, 0 );

  		}

  		state.disableUnusedAttributes();

  		_gl.drawArrays( _gl.TRIANGLES, 0, object.count );

  		object.count = 0;

  	};

  	function setupVertexAttributes( material, program, geometry, startIndex ) {

  		var extension;

  		if ( (geometry && geometry.isInstancedBufferGeometry) ) {

  			extension = extensions.get( 'ANGLE_instanced_arrays' );

  			if ( extension === null ) {

  				console.error( 'THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
  				return;

  			}

  		}

  		var geometryAttributes = geometry.attributes;

  		var programAttributes = program.getAttributes();

  		var materialDefaultAttributeValues = material.defaultAttributeValues;

  		for ( var name in programAttributes ) {

  			var programAttribute = programAttributes[ name ];

  			if ( programAttribute >= 0 ) {

  				var geometryAttribute = geometryAttributes[ name ];

  				if ( geometryAttribute !== undefined ) {

  					var size = geometryAttribute.itemSize;
  					state.enableAttribute( programAttribute );

  					var buffer = objects.getAttributeBuffer(geometryAttribute);

  					if ( (geometryAttribute && geometryAttribute.isInterleavedBufferAttribute) ) {

  						var data = geometryAttribute.data;
  						var stride = data.stride;
  						var offset = geometryAttribute.offset;

  						_gl.bindBuffer( _gl.ARRAY_BUFFER, buffer );
  						_gl.vertexAttribPointer( programAttribute, size, _gl.FLOAT, false, stride * data.array.BYTES_PER_ELEMENT, ( startIndex * stride + offset ) * data.array.BYTES_PER_ELEMENT );

  						if ( (data && data.isInstancedInterleavedBuffer) ) {

  							if ( extension === null ) {

  								console.error( 'THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.' );
  								return;

  							}

  							extension.vertexAttribDivisorANGLE( programAttribute, data.meshPerAttribute );

  							if ( geometry.maxInstancedCount === undefined ) {

  								geometry.maxInstancedCount = data.meshPerAttribute * data.count;

  							}

  						}

  					} else {

  						_gl.bindBuffer( _gl.ARRAY_BUFFER, buffer );
  						_gl.vertexAttribPointer( programAttribute, size, _gl.FLOAT, false, 0, startIndex * size * 4 ); // 4 bytes per Float32

  						if ( (geometryAttribute && geometryAttribute.isInstancedBufferAttribute) ) {

  							if ( extension === null ) {

  								console.error( 'THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.' );
  								return;

  							}

  							extension.vertexAttribDivisorANGLE( programAttribute, geometryAttribute.meshPerAttribute );

  							if ( geometry.maxInstancedCount === undefined ) {

  								geometry.maxInstancedCount = geometryAttribute.meshPerAttribute * geometryAttribute.count;

  							}

  						}

  					}

  				} else if ( materialDefaultAttributeValues !== undefined ) {

  					var value = materialDefaultAttributeValues[ name ];
  					if ( value !== undefined ) {

  						switch ( value.length ) {

  							case 2:
  								_gl.vertexAttrib2fv( programAttribute, value );
  								break;

  							case 3:
  								_gl.vertexAttrib3fv( programAttribute, value );
  								break;

  							case 4:
  								_gl.vertexAttrib4fv( programAttribute, value );
  								break;

  							default:
  								_gl.vertexAttrib1fv( programAttribute, value );

  						}

  					}

  				}

  			}

  		}

  		state.disableUnusedAttributes();

  	}

  	this.renderBufferDirect = function ( camera, lights, fog, material, object ) {

  		if ( material.visible === false ) return;

  		setMaterial( material );

  		var geometry = objects.geometries.get( object );
  		var program = setProgram( camera, lights, fog, material, object );

  		var updateBuffers = false,
  			wireframeBit = material.wireframe ? 1 : 0,
  			geometryProgram = geometry.id + '_' + program.id + '_' + wireframeBit;

  		if ( geometryProgram !== _currentGeometryProgram ) {

  			_currentGeometryProgram = geometryProgram;
  			updateBuffers = true;

  		}

  		if ( updateBuffers ) {

  			state.initAttributes();

  		}

  		if ( (object && object.isMesh) ) {

  			renderMesh( material, geometry, object, program, updateBuffers );

  		} else if ( (object && object.isLine) ) {

  			renderLine( material, geometry, object, program, updateBuffers );

  		} else if ( (object && object.isPointCloud) ) {

  			renderPointCloud( material, geometry, object, program, updateBuffers );

  		}

  	};

  	function renderMesh( material, geometry, object, program, updateBuffers ) {

  		var mode = _gl.TRIANGLES;

  		if ( material.wireframe === true ) {

  			mode = _gl.LINES;
  			state.setLineWidth( material.wireframeLinewidth * pixelRatio );

  		}

  		var index = geometry.attributes.index;

  		if ( index ) {

  			// indexed triangles

  			var type, size;

  			var indexBuffer = objects.getAttributeBuffer(index);

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
  					_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, indexBuffer );

  				}

  				if ( (geometry && geometry.isInstancedBufferGeometry) && geometry.maxInstancedCount > 0 ) {

  					var extension = extensions.get( 'ANGLE_instanced_arrays' );

  					if ( extension === null ) {

  						console.error( 'THREE.WebGLRenderer.renderMesh: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
  						return;

  					}

  					extension.drawElementsInstancedANGLE( mode, index.array.length, type, 0, geometry.maxInstancedCount ); // Draw the instanced meshes

  				} else {

  					_gl.drawElements( mode, index.array.length, type, 0 );

  				}
  				_infoRender.calls ++;
  				_infoRender.vertices += index.array.length; // not really true, here vertices can be shared
  				_infoRender.faces += index.array.length / 3;

  			} else {

  				// if there is more than 1 chunk
  				// must set attribute pointers to use new offsets for each chunk
  				// even if geometry and materials didn't change

  				updateBuffers = true;

  				for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  					var startIndex = offsets[ i ].index;

  					if ( updateBuffers ) {

  						setupVertexAttributes( material, program, geometry, startIndex );
  						_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, indexBuffer );

  					}

  					// render indexed triangles

  					if ( (geometry && geometry.isInstancedBufferGeometry) && offsets[i].instances > 0 ) {

  						var extension = extensions.get( 'ANGLE_instanced_arrays' );

  						if ( extension === null ) {

  							console.error( 'THREE.WebGLRenderer.renderMesh: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
  							return;

  						}

  						extension.drawElementsInstancedANGLE( mode, offsets[i].count, type, offsets[i].start * size, offsets[i].count, type, offsets[i].instances ); // Draw the instanced meshes

  					} else {

  						_gl.drawElements( mode, offsets[ i ].count, type, offsets[ i ].start * size );

  					}

  					_infoRender.calls ++;
  					_infoRender.vertices += offsets[ i ].count; // not really true, here vertices can be shared
  					_infoRender.faces += offsets[ i ].count / 3;

  				}

  			}

  		} else {

  			// non-indexed triangles

  			var offsets = geometry.offsets;

  			if ( offsets.length === 0 ) {

  				if ( updateBuffers ) {

  					setupVertexAttributes( material, program, geometry, 0 );

  				}

  				var position = geometry.attributes.position;

  				// render non-indexed triangles

  				if ( (geometry && geometry.isInstancedBufferGeometry) && geometry.maxInstancedCount > 0 ) {

  					var extension = extensions.get( 'ANGLE_instanced_arrays' );

  					if ( extension === null ) {

  						console.error( 'THREE.WebGLRenderer.renderMesh: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
  						return;

  					}

  					if ( (position && position.isInterleavedBufferAttribute) ) {

  						extension.drawArraysInstancedANGLE( mode, 0, position.data.count, geometry.maxInstancedCount ); // Draw the instanced meshes

  					} else {

  						extension.drawArraysInstancedANGLE( mode, 0, position.count, geometry.maxInstancedCount ); // Draw the instanced meshes

  					}

  				} else {

  					if ( (position && position.isInterleavedBufferAttribute) ) {

  						_gl.drawArrays( mode, 0, position.data.count );

  					} else {

  						_gl.drawArrays( mode, 0, position.count );

  					}

  				}

  				_infoRender.calls++;
  				_infoRender.vertices += position.count;
  				_infoRender.faces += position.array.length / 3;

  			} else {

  				// if there is more than 1 chunk
  				// must set attribute pointers to use new offsets for each chunk
  				// even if geometry and materials didn't change

  				if ( updateBuffers ) {

  					setupVertexAttributes( material, program, geometry, 0 );

  				}

  				for ( var i = 0, il = offsets.length; i < il; i++ ) {

  					// render non-indexed triangles

  					if ( (geometry && geometry.isInstancedBufferGeometry) ) {

  						console.error( 'THREE.WebGLRenderer.renderMesh: cannot use drawCalls with THREE.InstancedBufferGeometry.' );
  						return;

  					} else {

  						_gl.drawArrays( mode, offsets[ i ].start, offsets[ i ].count );

  					}

  					_infoRender.calls++;
  					_infoRender.vertices += offsets[ i ].count;
  					_infoRender.faces += ( offsets[ i ].count  ) / 3;

  				}
  			}
  		}

  	}

  	function renderLine( material, geometry, object, program, updateBuffers ) {

  		var mode = (object && object.isLineSegments) ? _gl.LINES : _gl.LINE_STRIP;

  		// In case user is not using Line*Material by mistake
  		var lineWidth = material.linewidth !== undefined ? material.linewidth : 1;

  		state.setLineWidth( lineWidth * pixelRatio );

  		var index = geometry.attributes.index;

  		if ( index ) {

  			// indexed lines

  			var type, size;

  			var indexBuffer = objects.getAttributeBuffer(index);

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
  					_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, indexBuffer );

  				}

  				_gl.drawElements( mode, index.array.length, type, 0 ); // 2 bytes per Uint16Array

  				_infoRender.calls ++;
  				_infoRender.vertices += index.array.length; // not really true, here vertices can be shared

  			} else {

  				// if there is more than 1 chunk
  				// must set attribute pointers to use new offsets for each chunk
  				// even if geometry and materials didn't change

  				if ( offsets.length > 1 ) updateBuffers = true;

  				for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  					var startIndex = offsets[ i ].index;

  					if ( updateBuffers ) {

  						setupVertexAttributes( material, program, geometry, startIndex );
  						_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, indexBuffer );

  					}

  					// render indexed lines

  					_gl.drawElements( mode, offsets[ i ].count, type, offsets[ i ].start * size ); // 2 bytes per Uint16Array

  					_infoRender.calls ++;
  					_infoRender.vertices += offsets[ i ].count; // not really true, here vertices can be shared

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

  				_infoRender.calls ++;
  				_infoRender.vertices += position.array.length / 3;

  			} else {

  				for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  					_gl.drawArrays( mode, offsets[ i ].index, offsets[ i ].count );

  					_infoRender.calls ++;
  					_infoRender.vertices += offsets[ i ].count;

  				}

  			}

  		}

  	}

  	function renderPointCloud( material, geometry, object, program, updateBuffers ) {

  		var mode = _gl.POINTS;

  		var index = geometry.attributes.index;

  		if ( index ) {

  			// indexed points

  			var type, size;

  			var indexBuffer = objects.getAttributeBuffer( index );

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
  					_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, indexBuffer );

  				}

  				_gl.drawElements( mode, index.array.length, type, 0);

  				_infoRender.calls ++;
  				_infoRender.points += index.array.length;

  			} else {

  				// if there is more than 1 chunk
  				// must set attribute pointers to use new offsets for each chunk
  				// even if geometry and materials didn't change

  				if ( offsets.length > 1 ) updateBuffers = true;

  				for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  					var startIndex = offsets[ i ].index;

  					if ( updateBuffers ) {

  						setupVertexAttributes( material, program, geometry, startIndex );
  						_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, indexBuffer );

  					}

  					// render indexed points

  					_gl.drawElements( mode, offsets[ i ].count, type, offsets[ i ].start * size );

  					_infoRender.calls ++;
  					_infoRender.points += offsets[ i ].count;

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

  				_infoRender.calls ++;
  				_infoRender.points += position.array.length / 3;

  			} else {

  				for ( var i = 0, il = offsets.length; i < il; i ++ ) {

  					_gl.drawArrays( mode, offsets[ i ].index, offsets[ i ].count );

  					_infoRender.calls ++;
  					_infoRender.points += offsets[ i ].count;

  				}

  			}

  		}

  	}

  	// Sorting

  	function painterSortStable ( a, b ) {

  		if ( a.object.renderOrder !== b.object.renderOrder ) {

  			return a.object.renderOrder - b.object.renderOrder;

  		} else if ( a.object.material.id !== b.object.material.id ) {

  			return a.object.material.id - b.object.material.id;

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

  	// Rendering

  	this.render = function ( scene, camera, renderTarget, forceClear ) {

  		if ( (camera && camera.isCamera) === false ) {

  			console.error( 'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.' );
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

  		objects.update( opaqueObjects );
  		objects.update( transparentObjects );

  		//

  		shadowMap.render( scene, camera );

  		//

  		_infoRender.calls = 0;
  		_infoRender.vertices = 0;
  		_infoRender.faces = 0;
  		_infoRender.points = 0;

  		this.setRenderTarget( renderTarget );

  		if ( this.autoClear || forceClear ) {

  			this.clear( this.autoClearColor, this.autoClearDepth, this.autoClearStencil );

  		}

  		// set matrices for immediate objects

  		for ( var i = 0, il = objects.objectsImmediate.length; i < il; i ++ ) {

  			var webglObject = objects.objectsImmediate[ i ];
  			var object = webglObject.object;

  			if ( object.visible === true ) {

  				setupMatrices( object, camera );

  				var material = object.material;

  				if ( material.transparent ) {

  					webglObject.transparent = material;
  					webglObject.opaque = null;

  				} else {

  					webglObject.opaque = material;
  					webglObject.transparent = null;

  				}

  			}

  		}

  		if ( scene.overrideMaterial ) {

  			var overrideMaterial = scene.overrideMaterial;

  			renderObjects( opaqueObjects, camera, lights, fog, overrideMaterial );
  			renderObjects( transparentObjects, camera, lights, fog, overrideMaterial );
  			renderObjectsImmediate( objects.objectsImmediate, '', camera, lights, fog, overrideMaterial );

  		} else {

  			// opaque pass (front-to-back order)

  			state.setBlending( THREE$NoBlending );

  			renderObjects( opaqueObjects, camera, lights, fog, null );
  			renderObjectsImmediate( objects.objectsImmediate, 'opaque', camera, lights, fog, null );

  			// transparent pass (back-to-front order)

  			renderObjects( transparentObjects, camera, lights, fog, null );
  			renderObjectsImmediate( objects.objectsImmediate, 'transparent', camera, lights, fog, null );

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

  		if ( object.visible === true ) {

  			if ( (object && object.isScene) || (object && object.isGroup) ) {

  				// skip

  			} else {

  				// update Skeleton objects
  				if ( (object && object.isSkinnedMesh) ) {

  					object.skeleton.update();

  				}

  				objects.init( object );

  				if ( (object && object.isLight) ) {

  					lights.push( object );

  				} else if ( (object && object.isSprite) ) {

  					sprites.push( object );

  				} else if ( (object && object.isLensFlare) ) {

  					lensFlares.push( object );

  				} else {

  					var webglObject = objects.objects[ object.id ];

  					if ( webglObject && ( object.frustumCulled === false || _frustum.intersectsObject( object ) === true ) ) {

  						var material = object.material;

  						if ( properties.get( material ) ) {

  							material.program = properties.get( material ).program;

  						}

  						if ( material.transparent ) {

  							transparentObjects.push( webglObject );

  						} else {

  							opaqueObjects.push( webglObject );

  						}

  						if ( _this.sortObjects === true ) {

  							_vector3.setFromMatrixPosition( object.matrixWorld );
  							_vector3.applyProjection( _projScreenMatrix );

  							webglObject.z = _vector3.z;

  						}

  					}

  				}

  			}

  			for ( var i = 0, l = object.children.length; i < l; i ++ ) {

  				projectObject( object.children[ i ] );

  			}

  		}

  	}

  	function renderObjects( renderList, camera, lights, fog, overrideMaterial ) {

  		var material = overrideMaterial;

  		for ( var i = 0, l = renderList.length; i < l; i ++ ) {

  			var webglObject = renderList[ i ];

  			var object = webglObject.object;

  			setupMatrices( object, camera );

  			if ( overrideMaterial === null ) material = object.material;

  			if ( (material && material.isMeshFaceMaterial) ) {

  				var materials = material.materials;

  				for ( var j = 0, jl = materials.length; j < jl; j ++ ) {

  					_this.renderBufferDirect( camera, lights, fog, materials[ j ], object );

  				}

  				continue;

  			}

  			_this.renderBufferDirect( camera, lights, fog, material, object );

  		}

  	}

  	function renderObjectsImmediate ( renderList, materialType, camera, lights, fog, overrideMaterial ) {

  		var material = overrideMaterial;

  		for ( var i = 0, l = renderList.length; i < l; i ++ ) {

  			var webglObject = renderList[ i ];
  			var object = webglObject.object;

  			if ( object.visible === true ) {

  				if ( overrideMaterial === null ) material = webglObject[ materialType ];

  				if ( ! material ) continue;

  				_this.renderImmediateObject( camera, lights, fog, material, object );

  			}

  		}

  	}

  	this.renderImmediateObject = function ( camera, lights, fog, material, object ) {

  		setMaterial( material );

  		var program = setProgram( camera, lights, fog, material, object );

  		_currentGeometryProgram = '';

  		if ( object.immediateRenderCallback ) {

  			object.immediateRenderCallback( program, _gl, _frustum );

  		} else {

  			object.render( function ( object ) { _this.renderBufferImmediate( object, program, material ); } );

  		}

  	};

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

  		var materialProperties = properties.get( material );

  		var shaderID = shaderIDs[ material.type ];

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
  			aoMap: !! material.aoMap,
  			emissiveMap: !! material.emissiveMap,
  			bumpMap: !! material.bumpMap,
  			normalMap: !! material.normalMap,
  			specularMap: !! material.specularMap,
  			alphaMap: !! material.alphaMap,

  			combine: material.combine,

  			vertexColors: material.vertexColors,

  			fog: fog,
  			useFog: material.fog,
  			fogExp: (fog && fog.isFogExp2),

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
  			shadowMapEnabled: shadowMap.enabled && object.receiveShadow && maxShadows > 0,
  			shadowMapType: shadowMap.type,
  			shadowMapDebug: shadowMap.debug,
  			shadowMapCascade: shadowMap.cascade,

  			alphaTest: material.alphaTest,
  			metal: material.metal,
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
  		var programChange = true;

  		if ( !materialProperties.program ) {

  			// new material
  			material.addEventListener( 'dispose', onMaterialDispose );

  		} else if ( materialProperties.program.code !== code ) {

  			// changed glsl or parameters
  			releaseMaterialProgramReference( material );

  		} else if ( shaderID !== undefined ) {

  			// same glsl and uniform list
  			return;

  		} else {

  			// only rebuild uniform list
  			programChange = false;

  		}

  		if ( shaderID ) {

  			var shader = THREE$ShaderLib[ shaderID ];

  			materialProperties.__webglShader = {
  				name: material.type,
  				uniforms: THREE$UniformsUtils.clone( shader.uniforms ),
  				vertexShader: shader.vertexShader,
  				fragmentShader: shader.fragmentShader
  			}

  		} else {

  			materialProperties.__webglShader = {
  				name: material.type,
  				uniforms: material.uniforms,
  				vertexShader: material.vertexShader,
  				fragmentShader: material.fragmentShader
  			}

  		}

  		var program;

  		// Check if code has been already compiled

  		for ( var p = 0, pl = _programs.length; p < pl; p ++ ) {

  			var programInfo = _programs[ p ];

  			if ( programInfo.code === code ) {

  				program = programInfo;

  				if ( programChange ) {

  					program.usedTimes ++;

  				}

  				break;

  			}

  		}

  		if ( program === undefined ) {

  			material.__webglShader = materialProperties.__webglShader;
  			program = new THREE$WebGLProgram( _this, code, material, parameters );
  			_programs.push( program );

  			_infoMemory.programs = _programs.length;

  		}

  		materialProperties.program = program;

  		var attributes = program.getAttributes();

  		if ( material.morphTargets ) {

  			material.numSupportedMorphTargets = 0;

  			for ( var i = 0; i < _this.maxMorphTargets; i ++ ) {

  				if ( attributes[ 'morphTarget' + i ] >= 0 ) {

  					material.numSupportedMorphTargets ++;

  				}

  			}

  		}

  		if ( material.morphNormals ) {

  			material.numSupportedMorphNormals = 0;

  			for ( i = 0; i < _this.maxMorphNormals; i ++ ) {

  				if ( attributes[ 'morphNormal' + i ] >= 0 ) {

  					material.numSupportedMorphNormals ++;

  				}

  			}

  		}

  		materialProperties.uniformsList = [];

  		var uniformLocations = materialProperties.program.getUniforms();
  		for ( var u in materialProperties.__webglShader.uniforms ) {

  			var location = uniformLocations[ u ];

  			if ( location ) {
  				materialProperties.uniformsList.push( [ materialProperties.__webglShader.uniforms[ u ], location ] );
  			}

  		}

  	}

  	function setMaterial( material ) {

  		setMaterialFaces( material );

  		if ( material.transparent === true ) {

  			state.setBlending( material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha );

  		} else {

  			state.setBlending( THREE$NoBlending );

  		}

  		state.setDepthFunc( material.depthFunc );
  		state.setDepthTest( material.depthTest );
  		state.setDepthWrite( material.depthWrite );
  		state.setColorWrite( material.colorWrite );
  		state.setPolygonOffset( material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits );

  	}

  	function setMaterialFaces( material ) {

  		material.side !== THREE$DoubleSide ? state.enable( _gl.CULL_FACE ) : state.disable( _gl.CULL_FACE );
  		state.setFlipSided( material.side === THREE$BackSide );

  	}

  	function setProgram( camera, lights, fog, material, object ) {

  		_usedTextureUnits = 0;

  		var materialProperties = properties.get( material );

  		if ( material.needsUpdate || ! materialProperties.program ) {

  			initMaterial( material, lights, fog, object );
  			material.needsUpdate = false;

  		}

  		var refreshProgram = false;
  		var refreshMaterial = false;
  		var refreshLights = false;

  		var program = materialProperties.program,
  			p_uniforms = program.getUniforms(),
  			m_uniforms = materialProperties.__webglShader.uniforms;

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

  			if ( (material && material.isShaderMaterial) ||
  				 (material && material.isMeshPhongMaterial) ||
  				 material.envMap ) {

  				if ( p_uniforms.cameraPosition !== null ) {

  					_vector3.setFromMatrixPosition( camera.matrixWorld );
  					_gl.uniform3f( p_uniforms.cameraPosition, _vector3.x, _vector3.y, _vector3.z );

  				}

  			}

  			if ( (material && material.isMeshPhongMaterial) ||
  				 (material && material.isMeshLambertMaterial) ||
  				 (material && material.isMeshBasicMaterial) ||
  				 (material && material.isShaderMaterial) ||
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

  			if ( (material && material.isMeshPhongMaterial) ||
  				 (material && material.isMeshLambertMaterial) ||
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

  			if ( (material && material.isMeshBasicMaterial) ||
  				 (material && material.isMeshLambertMaterial) ||
  				 (material && material.isMeshPhongMaterial) ) {

  				refreshUniformsCommon( m_uniforms, material );

  			}

  			// refresh single material specific uniforms

  			if ( (material && material.isLineBasicMaterial) ) {

  				refreshUniformsLine( m_uniforms, material );

  			} else if ( (material && material.isLineDashedMaterial) ) {

  				refreshUniformsLine( m_uniforms, material );
  				refreshUniformsDash( m_uniforms, material );

  			} else if ( (material && material.isPointCloudMaterial) ) {

  				refreshUniformsParticle( m_uniforms, material );

  			} else if ( (material && material.isMeshPhongMaterial) ) {

  				refreshUniformsPhong( m_uniforms, material );

  			} else if ( (material && material.isMeshLambertMaterial) ) {

  				refreshUniformsLambert( m_uniforms, material );

  			} else if ( (material && material.isMeshBasicMaterial) ) {

  				refreshUniformsBasic( m_uniforms, material );

  			} else if ( (material && material.isMeshDepthMaterial) ) {

  				m_uniforms.mNear.value = camera.near;
  				m_uniforms.mFar.value = camera.far;
  				m_uniforms.opacity.value = material.opacity;

  			} else if ( (material && material.isMeshNormalMaterial) ) {

  				m_uniforms.opacity.value = material.opacity;

  			}

  			if ( object.receiveShadow && ! material._shadowPass ) {

  				refreshUniformsShadow( m_uniforms, lights );

  			}

  			// load common uniforms

  			loadUniformsGeneric( materialProperties.uniformsList );

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
  		// 1. color map
  		// 2. specular map
  		// 3. normal map
  		// 4. bump map
  		// 5. alpha map
  		// 6. emissive map

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

  		} else if ( material.emissiveMap ) {

  			uvScaleMap = material.emissiveMap;

  		}

  		if ( uvScaleMap !== undefined ) {

  			var offset = uvScaleMap.offset;
  			var repeat = uvScaleMap.repeat;

  			uniforms.offsetRepeat.value.set( offset.x, offset.y, repeat.x, repeat.y );

  		}

  		uniforms.envMap.value = material.envMap;
  		uniforms.flipEnvMap.value = ( (material.envMap && material.envMap.isWebGLRenderTargetCube) ) ? 1 : - 1;

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

  		if ( (fog && fog.isFog) ) {

  			uniforms.fogNear.value = fog.near;
  			uniforms.fogFar.value = fog.far;

  		} else if ( (fog && fog.isFogExp2) ) {

  			uniforms.fogDensity.value = fog.density;

  		}

  	}

  	function refreshUniformsPhong ( uniforms, material ) {

  		uniforms.shininess.value = material.shininess;

  		uniforms.emissive.value = material.emissive;
  		uniforms.specular.value = material.specular;

  		uniforms.lightMap.value = material.lightMap;
  		uniforms.lightMapIntensity.value = material.lightMapIntensity;

  		uniforms.aoMap.value = material.aoMap;
  		uniforms.aoMapIntensity.value = material.aoMapIntensity;

  		uniforms.emissiveMap.value = material.emissiveMap;

  	}

  	function refreshUniformsLambert ( uniforms, material ) {

  		uniforms.emissive.value = material.emissive;

  	}

  	function refreshUniformsBasic ( uniforms, material ) {

  		uniforms.aoMap.value = material.aoMap;
  		uniforms.aoMapIntensity.value = material.aoMapIntensity;

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

  				if ( (light && light.isSpotLight) || ( (light && light.isDirectionalLight) && ! light.shadowCascade ) ) {

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

  			console.warn( 'WebGLRenderer: trying to use ' + textureUnit + ' texture units while this GPU supports only ' + _maxTextures );

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

  						uniform._array[ offset + 0 ] = value[ i ].x;
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

  						uniform._array[ offset + 0 ] = value[ i ].x;
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

  						uniform._array[ offset + 0 ] = value[ i ].x;
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

  					if ( (texture && texture.isCubeTexture) ||
  						 ( Array.isArray( texture.image ) && texture.image.length === 6 ) ) { // CompressedTexture can have Array in image :/

  						setCubeTexture( texture, textureUnit );

  					} else if ( (texture && texture.isWebGLRenderTargetCube) ) {

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

  					console.warn( 'THREE.WebGLRenderer: Unknown uniform type: ' + type );

  			}

  		}

  	}

  	function setupMatrices ( object, camera ) {

  		object._modelViewMatrix.multiplyMatrices( camera.matrixWorldInverse, object.matrixWorld );
  		object._normalMatrix.getNormalMatrix( object._modelViewMatrix );

  	}

  	function setColorLinear( array, offset, color, intensity ) {

  		array[ offset + 0 ] = color.r * intensity;
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

  			if ( (light && light.isAmbientLight) ) {

  				if ( ! light.visible ) continue;

  				r += color.r;
  				g += color.g;
  				b += color.b;

  			} else if ( (light && light.isDirectionalLight) ) {

  				dirCount += 1;

  				if ( ! light.visible ) continue;

  				_direction.setFromMatrixPosition( light.matrixWorld );
  				_vector3.setFromMatrixPosition( light.target.matrixWorld );
  				_direction.sub( _vector3 );
  				_direction.normalize();

  				dirOffset = dirLength * 3;

  				dirPositions[ dirOffset + 0 ] = _direction.x;
  				dirPositions[ dirOffset + 1 ] = _direction.y;
  				dirPositions[ dirOffset + 2 ] = _direction.z;

  				setColorLinear( dirColors, dirOffset, color, intensity );

  				dirLength += 1;

  			} else if ( (light && light.isPointLight) ) {

  				pointCount += 1;

  				if ( ! light.visible ) continue;

  				pointOffset = pointLength * 3;

  				setColorLinear( pointColors, pointOffset, color, intensity );

  				_vector3.setFromMatrixPosition( light.matrixWorld );

  				pointPositions[ pointOffset + 0 ] = _vector3.x;
  				pointPositions[ pointOffset + 1 ] = _vector3.y;
  				pointPositions[ pointOffset + 2 ] = _vector3.z;

  				// distance is 0 if decay is 0, because there is no attenuation at all.
  				pointDistances[ pointLength ] = distance;
  				pointDecays[ pointLength ] = ( light.distance === 0 ) ? 0.0 : light.decay;

  				pointLength += 1;

  			} else if ( (light && light.isSpotLight) ) {

  				spotCount += 1;

  				if ( ! light.visible ) continue;

  				spotOffset = spotLength * 3;

  				setColorLinear( spotColors, spotOffset, color, intensity );

  				_direction.setFromMatrixPosition( light.matrixWorld );

  				spotPositions[ spotOffset + 0 ] = _direction.x;
  				spotPositions[ spotOffset + 1 ] = _direction.y;
  				spotPositions[ spotOffset + 2 ] = _direction.z;

  				spotDistances[ spotLength ] = distance;

  				_vector3.setFromMatrixPosition( light.target.matrixWorld );
  				_direction.sub( _vector3 );
  				_direction.normalize();

  				spotDirections[ spotOffset + 0 ] = _direction.x;
  				spotDirections[ spotOffset + 1 ] = _direction.y;
  				spotDirections[ spotOffset + 2 ] = _direction.z;

  				spotAnglesCos[ spotLength ] = Math.cos( light.angle );
  				spotExponents[ spotLength ] = light.exponent;
  				spotDecays[ spotLength ] = ( light.distance === 0 ) ? 0.0 : light.decay;

  				spotLength += 1;

  			} else if ( (light && light.isHemisphereLight) ) {

  				hemiCount += 1;

  				if ( ! light.visible ) continue;

  				_direction.setFromMatrixPosition( light.matrixWorld );
  				_direction.normalize();

  				hemiOffset = hemiLength * 3;

  				hemiPositions[ hemiOffset + 0 ] = _direction.x;
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

  			state.disable( _gl.CULL_FACE );

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

  			state.enable( _gl.CULL_FACE );

  		}

  	};

  	this.setMaterialFaces = setMaterialFaces;

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

  				console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( ' + texture.sourceFile + ' )' );

  			}

  			_gl.texParameteri( textureType, _gl.TEXTURE_MAG_FILTER, filterFallback( texture.magFilter ) );
  			_gl.texParameteri( textureType, _gl.TEXTURE_MIN_FILTER, filterFallback( texture.minFilter ) );

  			if ( texture.minFilter !== THREE$NearestFilter && texture.minFilter !== THREE$LinearFilter ) {

  				console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( ' + texture.sourceFile + ' )' );

  			}

  		}

  		extension = extensions.get( 'EXT_texture_filter_anisotropic' );

  		if ( extension && texture.type !== THREE$FloatType && texture.type !== THREE$HalfFloatType ) {

  			if ( texture.anisotropy > 1 || properties.get( texture ).__currentAnisotropy ) {

  				_gl.texParameterf( textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min( texture.anisotropy, _this.getMaxAnisotropy() ) );
  				properties.get( texture ).__currentAnisotropy = texture.anisotropy;

  			}

  		}

  	}

  	this.uploadTexture = function ( texture, slot ) {

  		var textureProperties = properties.get( texture );

  		if ( textureProperties.__webglInit === undefined ) {

  			textureProperties.__webglInit = true;

  			texture.__webglInit = true;

  			texture.addEventListener( 'dispose', onTextureDispose );

  			textureProperties.__webglTexture = _gl.createTexture();

  			_infoMemory.textures ++;

  		}

  		state.activeTexture( _gl.TEXTURE0 + slot );
  		state.bindTexture( _gl.TEXTURE_2D, textureProperties.__webglTexture );

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

  		if ( (texture && texture.isDataTexture) ) {

  			// use manually created mipmaps if available
  			// if there are no manual mipmaps
  			// set 0 level mipmap and then use GL to generate other mipmap levels

  			if ( mipmaps.length > 0 && isImagePowerOfTwo ) {

  				for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

  					mipmap = mipmaps[ i ];
  					state.texImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

  				}

  				texture.generateMipmaps = false;

  			} else {

  				state.texImage2D( _gl.TEXTURE_2D, 0, glFormat, image.width, image.height, 0, glFormat, glType, image.data );

  			}

  		} else if ( (texture && texture.isCompressedTexture) ) {

  			for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

  				mipmap = mipmaps[ i ];

  				if ( texture.format !== THREE$RGBAFormat && texture.format !== THREE$RGBFormat ) {

  					if ( getCompressedTextureFormats().indexOf( glFormat ) > -1 ) {

  						state.compressedTexImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, mipmap.data );

  					} else {

  						console.warn( "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()" );

  					}

  				} else {

  					state.texImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

  				}

  			}

  		} else { // regular Texture (image, video, canvas)

  			// use manually created mipmaps if available
  			// if there are no manual mipmaps
  			// set 0 level mipmap and then use GL to generate other mipmap levels

  			if ( mipmaps.length > 0 && isImagePowerOfTwo ) {

  				for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

  					mipmap = mipmaps[ i ];
  					state.texImage2D( _gl.TEXTURE_2D, i, glFormat, glFormat, glType, mipmap );

  				}

  				texture.generateMipmaps = false;

  			} else {

  				state.texImage2D( _gl.TEXTURE_2D, 0, glFormat, glFormat, glType, texture.image );

  			}

  		}

  		if ( texture.generateMipmaps && isImagePowerOfTwo ) _gl.generateMipmap( _gl.TEXTURE_2D );

  		texture.needsUpdate = false;

  		if ( texture.onUpdate ) texture.onUpdate( texture );

  	};

  	this.setTexture = function ( texture, slot ) {

  		// if the image has been uploaded into a separate renderer, will need to reupload to this renderer
  		if ( ( texture.image && texture.image.complete !== false ) && texture.__webglInit === true && properties.get( texture ).__webglInit === undefined ) {

  			texture.needsUpdate = true;

  		}

  		if ( texture.needsUpdate === true ) {

  			var image = texture.image;

  			if ( image === undefined ) {

  				console.warn( 'THREE.WebGLRenderer: Texture marked for update but image is undefined', texture );
  				return;

  			}

  			if ( image.complete === false ) {

  				console.warn( 'THREE.WebGLRenderer: Texture marked for update but image is incomplete', texture );
  				return;

  			}

  			_this.uploadTexture( texture, slot );
  			return;

  		}

  		state.activeTexture( _gl.TEXTURE0 + slot );
  		state.bindTexture( _gl.TEXTURE_2D, properties.get( texture ).__webglTexture );

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

  			console.warn( 'THREE.WebGLRenderer: image is too big (' + image.width + 'x' + image.height + '). Resized to ' + canvas.width + 'x' + canvas.height, image );

  			return canvas;

  		}

  		return image;

  	}

  	function setCubeTexture ( texture, slot ) {

  		var textureProperties = properties.get( texture );

  		if ( texture.image.length === 6 ) {

  			if ( texture.needsUpdate ) {

  				if ( ! textureProperties.__image__webglTextureCube ) {

  					texture.addEventListener( 'dispose', onTextureDispose );

  					textureProperties.__image__webglTextureCube = _gl.createTexture();

  					_infoMemory.textures ++;

  				}

  				state.activeTexture( _gl.TEXTURE0 + slot );
  				state.bindTexture( _gl.TEXTURE_CUBE_MAP, textureProperties.__image__webglTextureCube );

  				_gl.pixelStorei( _gl.UNPACK_FLIP_Y_WEBGL, texture.flipY );

  				var isCompressed = (texture && texture.isCompressedTexture);
  				var isDataTexture = (texture.image[ 0 ] && texture.image[ 0 ].isDataTexture);

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

  							state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, cubeImage[ i ].width, cubeImage[ i ].height, 0, glFormat, glType, cubeImage[ i ].data );

  						} else {

  							state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, glFormat, glType, cubeImage[ i ] );

  						}

  					} else {

  						var mipmap, mipmaps = cubeImage[ i ].mipmaps;

  						for ( var j = 0, jl = mipmaps.length; j < jl; j ++ ) {

  							mipmap = mipmaps[ j ];

  							if ( texture.format !== THREE$RGBAFormat && texture.format !== THREE$RGBFormat ) {

  								if ( getCompressedTextureFormats().indexOf( glFormat ) > -1 ) {

  									state.compressedTexImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, mipmap.data );

  								} else {

  									console.warn( "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()" );

  								}

  							} else {

  								state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

  							}

  						}

  					}

  				}

  				if ( texture.generateMipmaps && isImagePowerOfTwo ) {

  					_gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );

  				}

  				texture.needsUpdate = false;

  				if ( texture.onUpdate ) texture.onUpdate( texture );

  			} else {

  				state.activeTexture( _gl.TEXTURE0 + slot );
  				state.bindTexture( _gl.TEXTURE_CUBE_MAP, textureProperties.__image__webglTextureCube );

  			}

  		}

  	}

  	function setCubeTextureDynamic ( texture, slot ) {

  		state.activeTexture( _gl.TEXTURE0 + slot );
  		state.bindTexture( _gl.TEXTURE_CUBE_MAP, properties.get( texture ).__webglTexture );

  	}

  	// Render targets

  	function setupFrameBuffer ( framebuffer, renderTarget, textureTarget ) {

  		_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );
  		_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, textureTarget, properties.get( renderTarget ).__webglTexture, 0 );

  	}

  	function setupRenderBuffer ( renderbuffer, renderTarget ) {

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

  		var isCube = ( (renderTarget && renderTarget.isWebGLRenderTargetCube) );

  		if ( renderTarget && properties.get( renderTarget ).__webglFramebuffer === undefined ) {

  			var renderTargetProperties = properties.get( renderTarget );

  			if ( renderTarget.depthBuffer === undefined ) renderTarget.depthBuffer = true;
  			if ( renderTarget.stencilBuffer === undefined ) renderTarget.stencilBuffer = true;

  			renderTarget.addEventListener( 'dispose', onRenderTargetDispose );

  			renderTargetProperties.__webglTexture = _gl.createTexture();

  			_infoMemory.textures ++;

  			// Setup texture, create render and frame buffers

  			var isTargetPowerOfTwo = THREE$Math.isPowerOfTwo( renderTarget.width ) && THREE$Math.isPowerOfTwo( renderTarget.height ),
  				glFormat = paramThreeToGL( renderTarget.format ),
  				glType = paramThreeToGL( renderTarget.type );

  			if ( isCube ) {

  				renderTargetProperties.__webglFramebuffer = [];
  				renderTargetProperties.__webglRenderbuffer = [];

  				state.bindTexture( _gl.TEXTURE_CUBE_MAP, renderTargetProperties.__webglTexture );

  				setTextureParameters( _gl.TEXTURE_CUBE_MAP, renderTarget, isTargetPowerOfTwo );

  				for ( var i = 0; i < 6; i ++ ) {

  					renderTargetProperties.__webglFramebuffer[ i ] = _gl.createFramebuffer();
  					renderTargetProperties.__webglRenderbuffer[ i ] = _gl.createRenderbuffer();

  					state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null );

  					setupFrameBuffer( renderTargetProperties.__webglFramebuffer[ i ], renderTarget, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i );
  					setupRenderBuffer( renderTargetProperties.__webglRenderbuffer[ i ], renderTarget );

  				}

  				if ( renderTarget.generateMipmaps && isTargetPowerOfTwo ) _gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );

  			} else {

  				renderTargetProperties.__webglFramebuffer = _gl.createFramebuffer();

  				if ( renderTarget.shareDepthFrom ) {

  					renderTargetProperties.__webglRenderbuffer = renderTarget.shareDepthFrom.__webglRenderbuffer;

  				} else {

  					renderTargetProperties.__webglRenderbuffer = _gl.createRenderbuffer();

  				}

  				state.bindTexture( _gl.TEXTURE_2D, renderTargetProperties.__webglTexture );
  				setTextureParameters( _gl.TEXTURE_2D, renderTarget, isTargetPowerOfTwo );

  				state.texImage2D( _gl.TEXTURE_2D, 0, glFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null );

  				setupFrameBuffer( renderTargetProperties.__webglFramebuffer, renderTarget, _gl.TEXTURE_2D );

  				if ( renderTarget.shareDepthFrom ) {

  					if ( renderTarget.depthBuffer && ! renderTarget.stencilBuffer ) {

  						_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderTargetProperties.__webglRenderbuffer );

  					} else if ( renderTarget.depthBuffer && renderTarget.stencilBuffer ) {

  						_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderTargetProperties.__webglRenderbuffer );

  					}

  				} else {

  					setupRenderBuffer( renderTargetProperties.__webglRenderbuffer, renderTarget );

  				}

  				if ( renderTarget.generateMipmaps && isTargetPowerOfTwo ) _gl.generateMipmap( _gl.TEXTURE_2D );

  			}

  			// Release everything

  			if ( isCube ) {

  				state.bindTexture( _gl.TEXTURE_CUBE_MAP, null );

  			} else {

  				state.bindTexture( _gl.TEXTURE_2D, null );

  			}

  			_gl.bindRenderbuffer( _gl.RENDERBUFFER, null );
  			_gl.bindFramebuffer( _gl.FRAMEBUFFER, null );

  		}

  		var framebuffer, width, height, vx, vy;

  		if ( renderTarget ) {

  			var renderTargetProperties = properties.get( renderTarget );

  			if ( isCube ) {

  				framebuffer = renderTargetProperties.__webglFramebuffer[ renderTarget.activeCubeFace ];

  			} else {

  				framebuffer = renderTargetProperties.__webglFramebuffer;

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

  		if ( ! ( (renderTarget && renderTarget.isWebGLRenderTarget) ) ) {

  			console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.' );
  			return;

  		}

  		if ( properties.get( renderTarget ).__webglFramebuffer ) {

  			if ( renderTarget.format !== THREE$RGBAFormat ) {

  				console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.' );
  				return;

  			}

  			var restore = false;

  			if ( properties.get( renderTarget ).__webglFramebuffer !== _currentFramebuffer ) {

  				_gl.bindFramebuffer( _gl.FRAMEBUFFER, properties.get( renderTarget ).__webglFramebuffer );

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

  		if ( (renderTarget && renderTarget.isWebGLRenderTargetCube) ) {

  			state.bindTexture( _gl.TEXTURE_CUBE_MAP, properties.get( renderTarget ).__webglTexture );
  			_gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );
  			state.bindTexture( _gl.TEXTURE_CUBE_MAP, null );

  		} else {

  			state.bindTexture( _gl.TEXTURE_2D, properties.get( renderTarget ).__webglTexture );
  			_gl.generateMipmap( _gl.TEXTURE_2D );
  			state.bindTexture( _gl.TEXTURE_2D, null );

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
  			// ( for example when prebuilding shader to be used with multiple objects )
  			//
  			//  - leave some extra space for other uniforms
  			//  - limit here is ANGLE's 254 max uniform vectors
  			//    (up to 54 should be safe)

  			var nVertexUniforms = _gl.getParameter( _gl.MAX_VERTEX_UNIFORM_VECTORS );
  			var nVertexMatrices = Math.floor( ( nVertexUniforms - 20 ) / 4 );

  			var maxBones = nVertexMatrices;

  			if ( object !== undefined && (object && object.isSkinnedMesh) ) {

  				maxBones = Math.min( object.skeleton.bones.length, maxBones );

  				if ( maxBones < object.skeleton.bones.length ) {

  					console.warn( 'WebGLRenderer: too many bones - ' + object.skeleton.bones.length + ', this GPU supports just ' + maxBones + ' (try OpenGL instead of ANGLE)' );

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

  			if ( (light && light.isDirectionalLight) ) dirLights ++;
  			if ( (light && light.isPointLight) ) pointLights ++;
  			if ( (light && light.isSpotLight) ) spotLights ++;
  			if ( (light && light.isHemisphereLight) ) hemiLights ++;

  		}

  		return { 'directional': dirLights, 'point': pointLights, 'spot': spotLights, 'hemi': hemiLights };

  	}

  	function allocateShadows( lights ) {

  		var maxShadows = 0;

  		for ( var l = 0, ll = lights.length; l < ll; l ++ ) {

  			var light = lights[ l ];

  			if ( ! light.castShadow ) continue;

  			if ( (light && light.isSpotLight) ) maxShadows ++;
  			if ( (light && light.isDirectionalLight) && ! light.shadowCascade ) maxShadows ++;

  		}

  		return maxShadows;

  	}

  	// DEPRECATED

  	this.initMaterial = function () {

  		console.warn( 'THREE.WebGLRenderer: .initMaterial() has been removed.' );

  	};

  	this.addPrePlugin = function () {

  		console.warn( 'THREE.WebGLRenderer: .addPrePlugin() has been removed.' );

  	};

  	this.addPostPlugin = function () {

  		console.warn( 'THREE.WebGLRenderer: .addPostPlugin() has been removed.' );

  	};

  	this.updateShadowMap = function () {

  		console.warn( 'THREE.WebGLRenderer: .updateShadowMap() has been removed.' );

  	};

  	Object.defineProperties( this, {
  		shadowMapEnabled: {
  			get: function () {
  				return shadowMap.enabled;
  			},
  			set: function ( value ) {
  				console.warn( 'THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.' );
  				shadowMap.enabled = value;
  			}
  		},
  		shadowMapType: {
  			get: function () {
  				return shadowMap.type;
  			},
  			set: function ( value ) {
  				console.warn( 'THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.' );
  				shadowMap.type = value;
  			}
  		},
  		shadowMapCullFace: {
  			get: function () {
  				return shadowMap.cullFace;
  			},
  			set: function ( value ) {
  				console.warn( 'THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.' );
  				shadowMap.cullFace = value;
  			}
  		},
  		shadowMapDebug: {
  			get: function () {
  				return shadowMap.debug;
  			},
  			set: function ( value ) {
  				console.warn( 'THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug.' );
  				shadowMap.debug = value;
  			}
  		},
  		shadowMapCascade: {
  			get: function () {
  				return shadowMap.cascade;
  			},
  			set: function ( value ) {
  				console.warn( 'THREE.WebGLRenderer: .shadowMapCascade is now .shadowMap.cascade.' );
  				shadowMap.cascade = value;
  			}
  		}
  	} );

  }


  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$Scene () {
  	this.isScene = true;

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


  THREE$FontUtils.loadFace({"glyphs":{"ο":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},"S":{"x_min":0,"x_max":826,"ha":915,"o":"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{"x_min":196.109375,"x_max":632.5625,"ha":828,"o":"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},"Τ":{"x_min":-0.609375,"x_max":808,"ha":878,"o":"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},"y":{"x_min":0,"x_max":738.890625,"ha":828,"o":"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},"Π":{"x_min":0,"x_max":809,"ha":922,"o":"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},"ΐ":{"x_min":-162,"x_max":364,"ha":364,"o":"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},"g":{"x_min":0,"x_max":724,"ha":839,"o":"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{"x_min":0,"x_max":463,"ha":560,"o":"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},"Κ":{"x_min":0,"x_max":899.671875,"ha":969,"o":"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},"ƒ":{"x_min":-46,"x_max":440,"ha":525,"o":"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},"e":{"x_min":0,"x_max":708,"ha":808,"o":"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},"ό":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},"J":{"x_min":0,"x_max":649,"ha":760,"o":"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{"x_min":-0.234375,"x_max":526,"ha":624,"o":"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},"ώ":{"x_min":0,"x_max":945,"ha":1051,"o":"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{"x_min":197.21875,"x_max":630.5625,"ha":828,"o":"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{"x_min":0,"x_max":526.546875,"ha":624,"o":"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},"D":{"x_min":0,"x_max":864,"ha":968,"o":"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1056.953125,"ha":1150,"o":"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},"$":{"x_min":0,"x_max":704,"ha":800,"o":"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{"x_min":-0.03125,"x_max":434.765625,"ha":532,"o":"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},"µ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"Ι":{"x_min":42,"x_max":250,"ha":413,"o":"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},"Ύ":{"x_min":0,"x_max":1211.15625,"ha":1289,"o":"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},"Ν":{"x_min":0,"x_max":833,"ha":946,"o":"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{"x_min":27.78125,"x_max":413.890625,"ha":525,"o":"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},"Q":{"x_min":0,"x_max":995.59375,"ha":1096,"o":"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},"ς":{"x_min":0,"x_max":731.78125,"ha":768,"o":"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},"M":{"x_min":0,"x_max":1019,"ha":1135,"o":"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},"Ψ":{"x_min":0,"x_max":995,"ha":1085,"o":"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},"C":{"x_min":0,"x_max":970.828125,"ha":1043,"o":"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{"x_min":0,"x_max":204,"ha":307,"o":"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{"x_min":0,"x_max":501.390625,"ha":599,"o":"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},"X":{"x_min":0,"x_max":894.453125,"ha":999,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{"x_min":0,"x_max":1019.453125,"ha":1117,"o":"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},"ι":{"x_min":42,"x_max":242,"ha":389,"o":"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},"Ά":{"x_min":0,"x_max":995.828125,"ha":1072,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{"x_min":0,"x_max":389,"ha":486,"o":"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},"ε":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},"Δ":{"x_min":0,"x_max":981.953125,"ha":1057,"o":"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{"x_min":0,"x_max":500,"ha":597,"o":"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{"x_min":0,"x_max":1681,"ha":1775,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},"a":{"x_min":0,"x_max":700,"ha":786,"o":"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{"x_min":29.171875,"x_max":798.609375,"ha":828,"o":"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},"N":{"x_min":0,"x_max":833,"ha":949,"o":"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"ρ":{"x_min":0,"x_max":722,"ha":810,"o":"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{"x_min":64,"x_max":764,"ha":828,"o":"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"¯":{"x_min":0,"x_max":775,"ha":771,"o":"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},"Z":{"x_min":0,"x_max":804.171875,"ha":906,"o":"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},"u":{"x_min":0,"x_max":668,"ha":782,"o":"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},"k":{"x_min":0,"x_max":688.890625,"ha":771,"o":"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},"Η":{"x_min":0,"x_max":837,"ha":950,"o":"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},"Α":{"x_min":0,"x_max":966.671875,"ha":1043,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},"s":{"x_min":0,"x_max":681,"ha":775,"o":"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},"B":{"x_min":0,"x_max":835,"ha":938,"o":"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{"x_min":0,"x_max":819,"ha":963,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{"x_min":1,"x_max":687,"ha":785,"o":"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},"H":{"x_min":0,"x_max":838,"ha":953,"o":"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},"ν":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"c":{"x_min":0,"x_max":751.390625,"ha":828,"o":"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{"x_min":0,"x_max":703,"ha":789,"o":"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},"Μ":{"x_min":0,"x_max":1019,"ha":1132,"o":"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},"Ό":{"x_min":0.15625,"x_max":1174,"ha":1271,"o":"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},"Ή":{"x_min":0,"x_max":1248,"ha":1361,"o":"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{"x_min":-27.78125,"x_max":691.671875,"ha":775,"o":"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{"x_min":0,"x_max":836,"ha":931,"o":"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{"x_min":0,"x_max":388.890625,"ha":486,"o":"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},"U":{"x_min":0,"x_max":813,"ha":926,"o":"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},"γ":{"x_min":0.0625,"x_max":729.234375,"ha":815,"o":"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},"α":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},"F":{"x_min":0,"x_max":706.953125,"ha":778,"o":"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},"Χ":{"x_min":0,"x_max":894.453125,"ha":978,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{"x_min":115,"x_max":713,"ha":828,"o":"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{"x_min":0,"x_max":809,"ha":894,"o":"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{"x_min":-1,"x_max":363,"ha":460,"o":"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},"V":{"x_min":0,"x_max":895.828125,"ha":997,"o":"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},"Ξ":{"x_min":0,"x_max":751.390625,"ha":800,"o":"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "}," ":{"x_min":0,"x_max":0,"ha":853},"Ϋ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{"x_min":51,"x_max":779,"ha":828,"o":"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"”":{"x_min":0,"x_max":469,"ha":567,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{"x_min":0,"x_max":1276,"ha":1374,"o":"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},"Ί":{"x_min":0,"x_max":619,"ha":732,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},"i":{"x_min":14,"x_max":214,"ha":326,"o":"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},"Β":{"x_min":0,"x_max":835,"ha":961,"o":"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"υ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{"x_min":0,"x_max":349,"ha":446,"o":"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},"m":{"x_min":0,"x_max":1065,"ha":1174,"o":"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},"χ":{"x_min":0,"x_max":759.71875,"ha":847,"o":"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{"x_min":57,"x_max":770,"ha":828,"o":"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},"ί":{"x_min":42,"x_max":371.171875,"ha":389,"o":"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},"Ζ":{"x_min":0,"x_max":804.171875,"ha":886,"o":"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},"R":{"x_min":0,"x_max":836.109375,"ha":947,"o":"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},"o":{"x_min":0,"x_max":764,"ha":871,"o":"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{"x_min":59,"x_max":767,"ha":828,"o":"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{"x_min":65.28125,"x_max":762.5,"ha":828,"o":"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},"K":{"x_min":0,"x_max":900,"ha":996,"o":"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},"d":{"x_min":0,"x_max":722,"ha":836,"o":"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{"x_min":212,"x_max":609,"ha":933,"o":"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},"E":{"x_min":0,"x_max":761.109375,"ha":824,"o":"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"Y":{"x_min":0,"x_max":836,"ha":931,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"\"":{"x_min":0,"x_max":357,"ha":454,"o":"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{"x_min":0,"x_max":483,"ha":588,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},"δ":{"x_min":6,"x_max":732,"ha":835,"o":"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},"έ":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"ω":{"x_min":0,"x_max":945,"ha":1051,"o":"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{"x_min":0,"x_max":132,"ha":299,"o":"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{"x_min":29,"x_max":798,"ha":828,"o":"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"ϋ":{"x_min":0,"x_max":656,"ha":767,"o":"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{"x_min":0,"x_max":633,"ha":731,"o":"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},"b":{"x_min":0,"x_max":722,"ha":822,"o":"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},"q":{"x_min":0,"x_max":722,"ha":833,"o":"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},"Ω":{"x_min":-0.03125,"x_max":1008.53125,"ha":1108,"o":"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},"ύ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},"z":{"x_min":0,"x_max":663.890625,"ha":753,"o":"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{"x_min":0,"x_max":951,"ha":1063,"o":"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},"ή":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},"Θ":{"x_min":0,"x_max":993,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{"x_min":0,"x_max":851,"ha":949,"o":"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},"Ε":{"x_min":0,"x_max":761.546875,"ha":824,"o":"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{"x_min":0,"x_max":467,"ha":564,"o":"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{"x_min":0,"x_max":347.21875,"ha":444,"o":"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},"L":{"x_min":0,"x_max":704.171875,"ha":763,"o":"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},"σ":{"x_min":0,"x_max":851.3125,"ha":940,"o":"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},"ζ":{"x_min":0,"x_max":622,"ha":701,"o":"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},"θ":{"x_min":0,"x_max":714,"ha":817,"o":"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},"Ο":{"x_min":0,"x_max":995,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"Γ":{"x_min":0,"x_max":703.84375,"ha":742,"o":"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":0,"x_max":1111,"ha":1213,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},"P":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},"Έ":{"x_min":0,"x_max":1172.546875,"ha":1235,"o":"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"Ώ":{"x_min":0.4375,"x_max":1189.546875,"ha":1289,"o":"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},"_":{"x_min":61.109375,"x_max":766.671875,"ha":828,"o":"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},"Ϊ":{"x_min":-56,"x_max":342,"ha":503,"o":"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{"x_min":43,"x_max":784,"ha":828,"o":"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{"x_min":0,"x_max":1090,"ha":1188,"o":"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},"Ρ":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},"ª":{"x_min":0,"x_max":350,"ha":393,"o":"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{"x_min":57,"x_max":584,"ha":753,"o":"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},"T":{"x_min":0,"x_max":809,"ha":894,"o":"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},"Φ":{"x_min":0,"x_max":949,"ha":1032,"o":"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},"j":{"x_min":-45.828125,"x_max":242,"ha":361,"o":"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},"Σ":{"x_min":0,"x_max":772.21875,"ha":849,"o":"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{"x_min":197.609375,"x_max":628,"ha":828,"o":"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"›":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{"x_min":0,"x_max":716.546875,"ha":814,"o":"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},"t":{"x_min":0,"x_max":412,"ha":511,"o":"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{"x_min":0,"x_max":704,"ha":801,"o":"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},"λ":{"x_min":0,"x_max":701.390625,"ha":775,"o":"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},"W":{"x_min":0,"x_max":1291.671875,"ha":1399,"o":"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"v":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"τ":{"x_min":0.28125,"x_max":618.734375,"ha":699,"o":"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},"ξ":{"x_min":0,"x_max":640,"ha":715,"o":"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{"x_min":-1,"x_max":910.109375,"ha":1007,"o":"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},"Λ":{"x_min":0,"x_max":894.453125,"ha":974,"o":"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},"I":{"x_min":41,"x_max":249,"ha":365,"o":"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},"G":{"x_min":0,"x_max":971,"ha":1057,"o":"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},"ΰ":{"x_min":0,"x_max":655,"ha":767,"o":"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{"x_min":0,"x_max":190,"ha":288,"o":"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"Υ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"r":{"x_min":0,"x_max":431.9375,"ha":513,"o":"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},"x":{"x_min":0,"x_max":738.890625,"ha":826,"o":"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},"μ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"h":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},"φ":{"x_min":-1,"x_max":921,"ha":990,"o":"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{"x_min":0,"x_max":208,"ha":306,"o":"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},"f":{"x_min":0,"x_max":424,"ha":525,"o":"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{"x_min":0,"x_max":468,"ha":567,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},"A":{"x_min":0,"x_max":966.671875,"ha":1069,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{"x_min":57,"x_max":771,"ha":828,"o":"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"‘":{"x_min":0,"x_max":190,"ha":289,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},"ϊ":{"x_min":-55,"x_max":337,"ha":389,"o":"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},"π":{"x_min":0.5,"x_max":838.890625,"ha":938,"o":"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},"ά":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"O":{"x_min":0,"x_max":994,"ha":1094,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"n":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{"x_min":61,"x_max":767,"ha":828,"o":"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{"x_min":58,"x_max":769,"ha":828,"o":"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},"l":{"x_min":41,"x_max":240,"ha":363,"o":"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{"x_min":40.265625,"x_max":727.203125,"ha":825,"o":"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},"κ":{"x_min":0,"x_max":691.84375,"ha":779,"o":"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{"x_min":53,"x_max":775.21875,"ha":828,"o":"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},"p":{"x_min":0,"x_max":722,"ha":824,"o":"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{"x_min":0,"x_max":809,"ha":894,"o":"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},"ψ":{"x_min":0,"x_max":875,"ha":979,"o":"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},"η":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},"cssFontWeight":"bold","ascender":1216,"underlinePosition":-100,"cssFontStyle":"normal","boundingBox":{"yMin":-333,"xMin":-162,"yMax":1216,"xMax":1681},"resolution":1000,"original_font_information":{"postscript_name":"Helvetiker-Bold","version_string":"Version 1.00 2004 initial release","vendor_url":"http://www.magenta.gr","full_font_name":"Helvetiker Bold","font_family_name":"Helvetiker","copyright":"Copyright (c) Magenta ltd, 2004.","description":"","trademark":"","designer":"","designer_url":"","unique_font_identifier":"Magenta ltd:Helvetiker Bold:22-10-104","license_url":"http://www.ellak.gr/fonts/MgOpen/license.html","license_description":"Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\"Fonts\") and associated documentation files (the \"Font Software\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r\n\r\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r\n\r\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \"MgOpen\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r\n\r\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \"MgOpen\" name.\r\n\r\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r\n\r\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.","manufacturer_name":"Magenta ltd","font_sub_family_name":"Bold"},"descender":-334,"familyName":"Helvetiker","lineHeight":1549,"underlineThickness":50});

  var renderer;
  var scene;
  var camera;
  var stats;

  var object;
  var uniforms;

  init();
  animate();

  function init() {

  	camera = new THREE$PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
  	camera.position.z = 400;

  	scene = new THREE$Scene();

  	uniforms = {

  		amplitude: { type: "f", value: 5.0 },
  		opacity:   { type: "f", value: 0.3 },
  		color:     { type: "c", value: new THREE$Color( 0xff0000 ) }

  	};

  	var shaderMaterial = new THREE$ShaderMaterial( {

  		uniforms:       uniforms,
  		attributes:     [ 'displacement', 'customColor' ],
  		vertexShader:   document.getElementById( 'vertexshader' ).textContent,
  		fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
  		blending:       THREE$AdditiveBlending,
  		depthTest:      false,
  		transparent:    true

  	});

  	var geometry = new THREE$TextGeometry( 'three.js', {

  		size: 50,
  		height: 15,
  		curveSegments: 10,

  		font: 'helvetiker',
  		weight: 'bold',
  		style: 'normal',

  		bevelThickness: 5,
  		bevelSize: 1.5,
  		bevelEnabled: true,
  		bevelSegments: 10,

  		steps: 40

  	});

  	geometry.center();

  	var vertices = geometry.vertices;

  	var buffergeometry = new THREE$BufferGeometry();

  	var position = new THREE$Float32Attribute( vertices.length * 3, 3 ).copyVector3sArray( vertices );
  	buffergeometry.addAttribute( 'position', position )

  	var displacement = new THREE$Float32Attribute( vertices.length * 3, 3 );
  	buffergeometry.addAttribute( 'displacement', displacement );

  	var customColor = new THREE$Float32Attribute( vertices.length * 3, 3 );
  	buffergeometry.addAttribute( 'customColor', customColor );

  	var color = new THREE$Color( 0xffffff );

  	for( var i = 0, l = customColor.count; i < l; i ++ ) {

  		color.setHSL( i / l, 0.5, 0.5 );
  		color.toArray( customColor.array, i * customColor.itemSize );

  	}

  	object = new THREE$Line( buffergeometry, shaderMaterial );
  	object.rotation.x = 0.2;
  	scene.add( object );

  	renderer = new THREE$WebGLRenderer( { antialias: true } );
  	renderer.setClearColor( 0x050505 );
  	renderer.setPixelRatio( window.devicePixelRatio );
  	renderer.setSize( window.innerWidth, window.innerHeight );

  	var container = document.getElementById( 'container' );
  	container.appendChild( renderer.domElement );

  	stats = new Stats();
  	stats.domElement.style.position = 'absolute';
  	stats.domElement.style.top = '0px';
  	container.appendChild( stats.domElement );

  	//

  	window.addEventListener( 'resize', onWindowResize, false );

  }

  function onWindowResize() {

  	camera.aspect = window.innerWidth / window.innerHeight;
  	camera.updateProjectionMatrix();

  	renderer.setSize( window.innerWidth, window.innerHeight );

  }

  function animate() {

  	requestAnimationFrame( animate );

  	render();
  	stats.update();

  }

  function render() {

  	var time = Date.now() * 0.001;

  	object.rotation.y = 0.25 * time;

  	uniforms.amplitude.value = Math.sin( 0.5 * time );
  	uniforms.color.value.offsetHSL( 0.0005, 0, 0 );

  	var attributes = object.geometry.attributes;
  	var array = attributes.displacement.array;

  	for ( var i = 0, l = array.length; i < l; i += 3 ) {

  		array[ i     ] += 0.3 * ( 0.5 - Math.random() );
  		array[ i + 1 ] += 0.3 * ( 0.5 - Math.random() );
  		array[ i + 2 ] += 0.3 * ( 0.5 - Math.random() );

  	}

  	attributes.displacement.needsUpdate = true;

  	renderer.render( scene, camera );

  }

})();