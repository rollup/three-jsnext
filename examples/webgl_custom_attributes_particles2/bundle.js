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

  var __count = 0;
  function THREE$Object3DIdCount () { return __count++; }


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

  var _count = 0;
  function THREE$TextureIdCount () { return _count++; }


  /**
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$DataTexture ( data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy ) {
  	this.isDataTexture = true;

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
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$CubeTexture ( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
  	this.isCubeTexture = true;

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


  var THREE$DefaultLoadingManager;


  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$LoadingManager ( onLoad, onProgress, onError ) {
  	this.isLoadingManager = true;

  	var scope = this;

  	var loaded = 0, total = 0;

  	this.onLoad = onLoad;
  	this.onProgress = onProgress;
  	this.onError = onError;

  	this.itemStart = function ( url ) {

  		total ++;

  	};

  	this.itemEnd = function ( url ) {

  		loaded ++;

  		if ( scope.onProgress !== undefined ) {

  			scope.onProgress( url, loaded, total );

  		}

  		if ( loaded === total && scope.onLoad !== undefined ) {

  			scope.onLoad();

  		}

  	};

  }

  THREE$DefaultLoadingManager = new THREE$LoadingManager();


  var THREE$Cache;


  /**
   * @author mrdoob / http://mrdoob.com/
   */

  THREE$Cache = {

  	files: {},

  	add: function ( key, file ) {

  		// console.log( 'THREE.Cache', 'Adding key:', key );

  		this.files[ key ] = file;

  	},

  	get: function ( key ) {

  		// console.log( 'THREE.Cache', 'Checking key:', key );

  		return this.files[ key ];

  	},

  	remove: function ( key ) {

  		delete this.files[ key ];

  	},

  	clear: function () {

  		this.files = {};

  	}

  };



  /**
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$ImageLoader ( manager ) {
  	this.isImageLoader = true;

  	this.manager = ( manager !== undefined ) ? manager : THREE$DefaultLoadingManager;

  }

  THREE$ImageLoader.prototype = {

  	constructor: THREE$ImageLoader,

  	load: function ( url, onLoad, onProgress, onError ) {

  		var scope = this;

  		var cached = THREE$Cache.get( url );

  		if ( cached !== undefined ) {

  			if ( onLoad ) {

  				setTimeout( function () {

  					onLoad( cached );

  				}, 0 );

  			}

  			return cached;

  		}

  		var image = document.createElement( 'img' );

  		image.addEventListener( 'load', function ( event ) {

  			THREE$Cache.add( url, this );

  			if ( onLoad ) onLoad( this );

  			scope.manager.itemEnd( url );

  		}, false );

  		if ( onProgress !== undefined ) {

  			image.addEventListener( 'progress', function ( event ) {

  				onProgress( event );

  			}, false );

  		}

  		if ( onError !== undefined ) {

  			image.addEventListener( 'error', function ( event ) {

  				onError( event );

  			}, false );

  		}

  		if ( this.crossOrigin !== undefined ) image.crossOrigin = this.crossOrigin;

  		scope.manager.itemStart( url );

  		image.src = url;

  		return image;

  	},

  	setCrossOrigin: function ( value ) {

  		this.crossOrigin = value;

  	}

  };


  var THREE$ImageUtils;


  /**
   * @author alteredq / http://alteredqualia.com/
   * @author mrdoob / http://mrdoob.com/
   * @author Daosheng Mu / https://github.com/DaoshengMu/
   */

  THREE$ImageUtils = {

  	crossOrigin: undefined,

  	loadTexture: function ( url, mapping, onLoad, onError ) {

  		var loader = new THREE$ImageLoader();
  		loader.crossOrigin = this.crossOrigin;

  		var texture = new THREE$Texture( undefined, mapping );

  		loader.load( url, function ( image ) {

  			texture.image = image;
  			texture.needsUpdate = true;

  			if ( onLoad ) onLoad( texture );

  		}, undefined, function ( event ) {

  			if ( onError ) onError( event );

  		} );

  		texture.sourceFile = url;

  		return texture;

  	},

  	loadTextureCube: function ( array, mapping, onLoad, onError ) {

  		var images = [];

  		var loader = new THREE$ImageLoader();
  		loader.crossOrigin = this.crossOrigin;

  		var texture = new THREE$CubeTexture( images, mapping );

  		// no flipping needed for cube textures

  		texture.flipY = false;

  		var loaded = 0;

  		var loadTexture = function ( i ) {

  			loader.load( array[ i ], function ( image ) {

  				texture.images[ i ] = image;

  				loaded += 1;

  				if ( loaded === 6 ) {

  					texture.needsUpdate = true;

  					if ( onLoad ) onLoad( texture );

  				}

  			}, undefined, onError );

  		};

  		for ( var i = 0, il = array.length; i < il; ++ i ) {

  			loadTexture( i );

  		}

  		return texture;

  	},

  	loadCompressedTexture: function () {

  		console.error( 'THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.' )

  	},

  	loadCompressedTextureCube: function () {

  		console.error( 'THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.' )

  	},

  	getNormalMap: function ( image, depth ) {

  		// Adapted from http://www.paulbrunt.co.uk/lab/heightnormal/

  		var cross = function ( a, b ) {

  			return [ a[ 1 ] * b[ 2 ] - a[ 2 ] * b[ 1 ], a[ 2 ] * b[ 0 ] - a[ 0 ] * b[ 2 ], a[ 0 ] * b[ 1 ] - a[ 1 ] * b[ 0 ] ];

  		};

  		var subtract = function ( a, b ) {

  			return [ a[ 0 ] - b[ 0 ], a[ 1 ] - b[ 1 ], a[ 2 ] - b[ 2 ] ];

  		};

  		var normalize = function ( a ) {

  			var l = Math.sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] );
  			return [ a[ 0 ] / l, a[ 1 ] / l, a[ 2 ] / l ];

  		};

  		depth = depth | 1;

  		var width = image.width;
  		var height = image.height;

  		var canvas = document.createElement( 'canvas' );
  		canvas.width = width;
  		canvas.height = height;

  		var context = canvas.getContext( '2d' );
  		context.drawImage( image, 0, 0 );

  		var data = context.getImageData( 0, 0, width, height ).data;
  		var imageData = context.createImageData( width, height );
  		var output = imageData.data;

  		for ( var x = 0; x < width; x ++ ) {

  			for ( var y = 0; y < height; y ++ ) {

  				var ly = y - 1 < 0 ? 0 : y - 1;
  				var uy = y + 1 > height - 1 ? height - 1 : y + 1;
  				var lx = x - 1 < 0 ? 0 : x - 1;
  				var ux = x + 1 > width - 1 ? width - 1 : x + 1;

  				var points = [];
  				var origin = [ 0, 0, data[ ( y * width + x ) * 4 ] / 255 * depth ];
  				points.push( [ - 1, 0, data[ ( y * width + lx ) * 4 ] / 255 * depth ] );
  				points.push( [ - 1, - 1, data[ ( ly * width + lx ) * 4 ] / 255 * depth ] );
  				points.push( [ 0, - 1, data[ ( ly * width + x ) * 4 ] / 255 * depth ] );
  				points.push( [ 1, - 1, data[ ( ly * width + ux ) * 4 ] / 255 * depth ] );
  				points.push( [ 1, 0, data[ ( y * width + ux ) * 4 ] / 255 * depth ] );
  				points.push( [ 1, 1, data[ ( uy * width + ux ) * 4 ] / 255 * depth ] );
  				points.push( [ 0, 1, data[ ( uy * width + x ) * 4 ] / 255 * depth ] );
  				points.push( [ - 1, 1, data[ ( uy * width + lx ) * 4 ] / 255 * depth ] );

  				var normals = [];
  				var num_points = points.length;

  				for ( var i = 0; i < num_points; i ++ ) {

  					var v1 = points[ i ];
  					var v2 = points[ ( i + 1 ) % num_points ];
  					v1 = subtract( v1, origin );
  					v2 = subtract( v2, origin );
  					normals.push( normalize( cross( v1, v2 ) ) );

  				}

  				var normal = [ 0, 0, 0 ];

  				for ( var i = 0; i < normals.length; i ++ ) {

  					normal[ 0 ] += normals[ i ][ 0 ];
  					normal[ 1 ] += normals[ i ][ 1 ];
  					normal[ 2 ] += normals[ i ][ 2 ];

  				}

  				normal[ 0 ] /= normals.length;
  				normal[ 1 ] /= normals.length;
  				normal[ 2 ] /= normals.length;

  				var idx = ( y * width + x ) * 4;

  				output[ idx ] = ( ( normal[ 0 ] + 1.0 ) / 2.0 * 255 ) | 0;
  				output[ idx + 1 ] = ( ( normal[ 1 ] + 1.0 ) / 2.0 * 255 ) | 0;
  				output[ idx + 2 ] = ( normal[ 2 ] * 255 ) | 0;
  				output[ idx + 3 ] = 255;

  			}

  		}

  		context.putImageData( imageData, 0, 0 );

  		return canvas;

  	},

  	generateDataTexture: function ( width, height, color ) {

  		var size = width * height;
  		var data = new Uint8Array( 3 * size );

  		var r = Math.floor( color.r * 255 );
  		var g = Math.floor( color.g * 255 );
  		var b = Math.floor( color.b * 255 );

  		for ( var i = 0; i < size; i ++ ) {

  			data[ i * 3 ] 	   = r;
  			data[ i * 3 + 1 ] = g;
  			data[ i * 3 + 2 ] = b;

  		}

  		var texture = new THREE$DataTexture( data, width, height, THREE$RGBFormat );
  		texture.needsUpdate = true;

  		return texture;

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

  var count = 0;
  function THREE$GeometryIdCount () { return count++; }


  /**
   * @author mrdoob / http://mrdoob.com/
   * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Cube.as
   */

  function THREE$BoxGeometry ( width, height, depth, widthSegments, heightSegments, depthSegments ) {
  	this.isBoxGeometry = true;

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

  	buildPlane( 'z', 'y', - 1, - 1, depth, height, width_half ); // px
  	buildPlane( 'z', 'y',   1, - 1, depth, height, - width_half ); // nx
  	buildPlane( 'x', 'z',   1,   1, width, depth, height_half ); // py
  	buildPlane( 'x', 'z',   1, - 1, width, depth, - height_half ); // ny
  	buildPlane( 'x', 'y',   1, - 1, width, height, depth_half ); // pz
  	buildPlane( 'x', 'y', - 1, - 1, width, height, - depth_half ); // nz

  	function buildPlane( u, v, udir, vdir, width, height, depth ) {

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

  				scope.faces.push( face );
  				scope.faceVertexUvs[ 0 ].push( [ uva, uvb, uvd ] );

  				face = new THREE$Face3( b + offset, c + offset, d + offset );
  				face.normal.copy( normal );
  				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );

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
   * @author mrdoob / http://mrdoob.com/
   */

  function THREE$SphereGeometry ( radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength ) {
  	this.isSphereGeometry = true;

  	console.log( 'THREE.SphereGeometry: Consider using THREE.SphereBufferGeometry for lower memory footprint.' );

  	THREE$Geometry.call( this );

  	this.type = 'SphereGeometry';

  	this.parameters = {
  		radius: radius,
  		widthSegments: widthSegments,
  		heightSegments: heightSegments,
  		phiStart: phiStart,
  		phiLength: phiLength,
  		thetaStart: thetaStart,
  		thetaLength: thetaLength
  	};

  	radius = radius || 50;

  	widthSegments = Math.max( 3, Math.floor( widthSegments ) || 8 );
  	heightSegments = Math.max( 2, Math.floor( heightSegments ) || 6 );

  	phiStart = phiStart !== undefined ? phiStart : 0;
  	phiLength = phiLength !== undefined ? phiLength : Math.PI * 2;

  	thetaStart = thetaStart !== undefined ? thetaStart : 0;
  	thetaLength = thetaLength !== undefined ? thetaLength : Math.PI;

  	var x, y, vertices = [], uvs = [];

  	for ( y = 0; y <= heightSegments; y ++ ) {

  		var verticesRow = [];
  		var uvsRow = [];

  		for ( x = 0; x <= widthSegments; x ++ ) {

  			var u = x / widthSegments;
  			var v = y / heightSegments;

  			var vertex = new THREE$Vector3();
  			vertex.x = - radius * Math.cos( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );
  			vertex.y = radius * Math.cos( thetaStart + v * thetaLength );
  			vertex.z = radius * Math.sin( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );

  			this.vertices.push( vertex );

  			verticesRow.push( this.vertices.length - 1 );
  			uvsRow.push( new THREE$Vector2( u, 1 - v ) );

  		}

  		vertices.push( verticesRow );
  		uvs.push( uvsRow );

  	}

  	for ( y = 0; y < heightSegments; y ++ ) {

  		for ( x = 0; x < widthSegments; x ++ ) {

  			var v1 = vertices[ y ][ x + 1 ];
  			var v2 = vertices[ y ][ x ];
  			var v3 = vertices[ y + 1 ][ x ];
  			var v4 = vertices[ y + 1 ][ x + 1 ];

  			var n1 = this.vertices[ v1 ].clone().normalize();
  			var n2 = this.vertices[ v2 ].clone().normalize();
  			var n3 = this.vertices[ v3 ].clone().normalize();
  			var n4 = this.vertices[ v4 ].clone().normalize();

  			var uv1 = uvs[ y ][ x + 1 ].clone();
  			var uv2 = uvs[ y ][ x ].clone();
  			var uv3 = uvs[ y + 1 ][ x ].clone();
  			var uv4 = uvs[ y + 1 ][ x + 1 ].clone();

  			if ( Math.abs( this.vertices[ v1 ].y ) === radius ) {

  				uv1.x = ( uv1.x + uv2.x ) / 2;
  				this.faces.push( new THREE$Face3( v1, v3, v4, [ n1, n3, n4 ] ) );
  				this.faceVertexUvs[ 0 ].push( [ uv1, uv3, uv4 ] );

  			} else if ( Math.abs( this.vertices[ v3 ].y ) === radius ) {

  				uv3.x = ( uv3.x + uv4.x ) / 2;
  				this.faces.push( new THREE$Face3( v1, v2, v3, [ n1, n2, n3 ] ) );
  				this.faceVertexUvs[ 0 ].push( [ uv1, uv2, uv3 ] );

  			} else {

  				this.faces.push( new THREE$Face3( v1, v2, v4, [ n1, n2, n4 ] ) );
  				this.faceVertexUvs[ 0 ].push( [ uv1, uv2, uv4 ] );

  				this.faces.push( new THREE$Face3( v2, v3, v4, [ n2.clone(), n3, n4.clone() ] ) );
  				this.faceVertexUvs[ 0 ].push( [ uv2.clone(), uv3, uv4.clone() ] );

  			}

  		}

  	}

  	this.computeFaceNormals();

  	this.boundingSphere = new THREE$Sphere( new THREE$Vector3(), radius );

  }

  THREE$SphereGeometry.prototype = Object.create( THREE$Geometry.prototype );
  THREE$SphereGeometry.prototype.constructor = THREE$SphereGeometry;



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

  var ___count = 0;
  function THREE$MaterialIdCount () { return ___count++; }

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
  	this.isPointCloudMaterial = true;

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
   * @author alteredq / http://alteredqualia.com/
   */

  function THREE$PointCloud ( geometry, material ) {
  	this.isPointCloud = true;

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
  		var localThresholdSq = localThreshold * localThreshold;
  		var position = new THREE$Vector3();

  		var testPoint = function ( point, index ) {

  			var rayPointDistanceSq = ray.distanceSqToPoint( point );

  			if ( rayPointDistanceSq < localThresholdSq ) {

  				var intersectPoint = ray.closestPointToPoint( point );
  				intersectPoint.applyMatrix4( object.matrixWorld );

  				var distance = raycaster.ray.origin.distanceTo( intersectPoint );

  				if ( distance < raycaster.near || distance > raycaster.far ) return;

  				intersects.push( {

  					distance: distance,
  					distanceToRay: Math.sqrt( rayPointDistanceSq ),
  					point: intersectPoint.clone(),
  					index: index,
  					face: null,
  					object: object

  				} );

  			}

  		};

  		if ( (geometry && geometry.isBufferGeometry) ) {

  			var attributes = geometry.attributes;
  			var positions = attributes.position.array;

  			if ( attributes.index !== undefined ) {

  				var indices = attributes.index.array;
  				var offsets = geometry.offsets;

  				if ( offsets.length === 0 ) {

  					offsets.push( {
  						start: 0,
  						count: indices.length,
  						index: 0
  					} );

  				}

  				for ( var oi = 0, ol = offsets.length; oi < ol; ++ oi ) {

  					var offset = offsets[ oi ];

  					var start = offset.start;
  					var count = offset.count;
  					var index = offset.index;

  					for ( var i = start, il = start + count; i < il; i ++ ) {

  						var a = index + indices[ i ];

  						position.fromArray( positions, a * 3 );

  						testPoint( position, a );

  					}

  				}

  			} else {

  				for ( var i = 0, l = positions.length / 3; i < l; i ++ ) {

  					position.fromArray( positions, i * 3 );

  					testPoint( position, i );

  				}

  			}

  		} else {

  			var vertices = geometry.vertices;

  			for ( var i = 0, l = vertices.length; i < l; i ++ ) {

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

  THREE$PointCloud.prototype.toJSON = function ( meta ) {

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


  var renderer;
  var scene;
  var camera;
  var stats;

  var sphere;
  var uniforms;
  var attributes;

  var vc1;

  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;

  init();
  animate();

  function init() {

  	camera = new THREE$PerspectiveCamera( 45, WIDTH / HEIGHT, 1, 10000 );
  	camera.position.z = 300;

  	scene = new THREE$Scene();

  	attributes = {

  		size: {	type: 'f', value: [] },
  		ca:   {	type: 'c', value: [] }

  	};

  	uniforms = {

  		amplitude: { type: "f", value: 1.0 },
  		color:     { type: "c", value: new THREE$Color( 0xffffff ) },
  		texture:   { type: "t", value: THREE$ImageUtils.loadTexture( "textures/sprites/disc.png" ) },

  	};

  	uniforms.texture.value.wrapS = uniforms.texture.value.wrapT = THREE$RepeatWrapping;

  	var shaderMaterial = new THREE$ShaderMaterial( {

  		uniforms:       uniforms,
  		attributes:     attributes,
  		vertexShader:   document.getElementById( 'vertexshader' ).textContent,
  		fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
  		transparent:    true

  	});


  	var radius = 100, segments = 68, rings = 38;
  	var geometry = new THREE$SphereGeometry( radius, segments, rings );

  	vc1 = geometry.vertices.length;

  	var geometry2 = new THREE$BoxGeometry( 0.8 * radius, 0.8 * radius, 0.8 * radius, 10, 10, 10 );
  	geometry.merge( geometry2 );

  	sphere = new THREE$PointCloud( geometry, shaderMaterial );

  	var vertices = sphere.geometry.vertices;
  	var values_size = attributes.size.value;
  	var values_color = attributes.ca.value;

  	for ( var v = 0; v < vertices.length; v ++ ) {

  		values_size[ v ] = 10;
  		values_color[ v ] = new THREE$Color( 0xffffff );

  		if ( v < vc1 ) {

  			values_color[ v ].setHSL( 0.01 + 0.1 * ( v / vc1 ), 0.99, ( vertices[ v ].y + radius ) / ( 4 * radius ) );

  		} else {

  			values_size[ v ] = 40;
  			values_color[ v ].setHSL( 0.6, 0.75, 0.25 + vertices[ v ].y / ( 2 * radius ) );

  		}

  	}

  	scene.add( sphere );

  	renderer = new THREE$WebGLRenderer();
  	renderer.setPixelRatio( window.devicePixelRatio );
  	renderer.setSize( WIDTH, HEIGHT );

  	var container = document.getElementById( 'container' );
  	container.appendChild( renderer.domElement );

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

  }

  function render() {

  	var time = Date.now() * 0.005;

  	sphere.rotation.y = 0.02 * time;
  	sphere.rotation.z = 0.02 * time;

  	for( var i = 0; i < attributes.size.value.length; i ++ ) {

  		if ( i < vc1 )
  			attributes.size.value[ i ] = 16 + 12 * Math.sin( 0.1 * i + time );


  	}

  	attributes.size.needsUpdate = true;

  	renderer.render( scene, camera );

  }

})();