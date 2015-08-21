'use strict';

var ShaderChunk = require('./ShaderChunk');
var UniformsLib = require('./UniformsLib');
var UniformsUtils = require('./UniformsUtils');
var Color = require('../../math/Color');

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

		uniforms: UniformsUtils.THREE$UniformsUtils.merge( [

			UniformsLib.THREE$UniformsLib[ "common" ],
			UniformsLib.THREE$UniformsLib[ "aomap" ],
			UniformsLib.THREE$UniformsLib[ "fog" ],
			UniformsLib.THREE$UniformsLib[ "shadowmap" ]

		] ),

		vertexShader: [

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "uv_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "uv2_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "envmap_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "uv_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "uv2_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "color_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinbase_vertex" ],

			"	#ifdef USE_ENVMAP",

				ShaderChunk.THREE$ShaderChunk[ "morphnormal_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinnormal_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "defaultnormal_vertex" ],

			"	#endif",

				ShaderChunk.THREE$ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinning_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "default_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

				ShaderChunk.THREE$ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "envmap_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform vec3 diffuse;",
			"uniform float opacity;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "uv_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "uv2_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "map_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "alphamap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "aomap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "envmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "specularmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec3 outgoingLight = vec3( 0.0 );",
			"	vec4 diffuseColor = vec4( diffuse, opacity );",
			"	vec3 totalAmbientLight = vec3( 1.0 );", // hardwired

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "map_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "color_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "alphamap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "alphatest_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "specularmap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "aomap_fragment" ],

			"	outgoingLight = diffuseColor.rgb * totalAmbientLight;", // simple shader

				ShaderChunk.THREE$ShaderChunk[ "envmap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "shadowmap_fragment" ],		// TODO: Shadows on an otherwise unlit surface doesn't make sense.

				ShaderChunk.THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

				ShaderChunk.THREE$ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'lambert': {

		uniforms: UniformsUtils.THREE$UniformsUtils.merge( [

			UniformsLib.THREE$UniformsLib[ "common" ],
			UniformsLib.THREE$UniformsLib[ "fog" ],
			UniformsLib.THREE$UniformsLib[ "lights" ],
			UniformsLib.THREE$UniformsLib[ "shadowmap" ],

			{
				"emissive" : { type: "c", value: new Color.THREE$Color( 0x000000 ) }
			}

		] ),

		vertexShader: [

			"#define LAMBERT",

			"varying vec3 vLightFront;",

			"#ifdef DOUBLE_SIDED",

			"	varying vec3 vLightBack;",

			"#endif",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "uv_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "uv2_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "envmap_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "lights_lambert_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "uv_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "uv2_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "color_vertex" ],

				ShaderChunk.THREE$ShaderChunk[ "morphnormal_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinbase_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinnormal_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "defaultnormal_vertex" ],

				ShaderChunk.THREE$ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinning_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "default_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

				ShaderChunk.THREE$ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "envmap_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "lights_lambert_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform vec3 diffuse;",
			"uniform vec3 emissive;",
			"uniform float opacity;",

			"varying vec3 vLightFront;",

			"#ifdef DOUBLE_SIDED",

			"	varying vec3 vLightBack;",

			"#endif",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "uv_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "uv2_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "map_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "alphamap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "envmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "specularmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec3 outgoingLight = vec3( 0.0 );",	// outgoing light does not have an alpha, the surface does
			"	vec4 diffuseColor = vec4( diffuse, opacity );",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "map_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "color_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "alphamap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "alphatest_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "specularmap_fragment" ],

			"	#ifdef DOUBLE_SIDED",

			"		if ( gl_FrontFacing )",
			"			outgoingLight += diffuseColor.rgb * vLightFront + emissive;",
			"		else",
			"			outgoingLight += diffuseColor.rgb * vLightBack + emissive;",

			"	#else",

			"		outgoingLight += diffuseColor.rgb * vLightFront + emissive;",

			"	#endif",

				ShaderChunk.THREE$ShaderChunk[ "envmap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "shadowmap_fragment" ],

				ShaderChunk.THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

				ShaderChunk.THREE$ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'phong': {

		uniforms: UniformsUtils.THREE$UniformsUtils.merge( [

			UniformsLib.THREE$UniformsLib[ "common" ],
			UniformsLib.THREE$UniformsLib[ "aomap" ],
			UniformsLib.THREE$UniformsLib[ "lightmap" ],
			UniformsLib.THREE$UniformsLib[ "emissivemap" ],
			UniformsLib.THREE$UniformsLib[ "bump" ],
			UniformsLib.THREE$UniformsLib[ "normalmap" ],
			UniformsLib.THREE$UniformsLib[ "fog" ],
			UniformsLib.THREE$UniformsLib[ "lights" ],
			UniformsLib.THREE$UniformsLib[ "shadowmap" ],

			{
				"emissive" : { type: "c", value: new Color.THREE$Color( 0x000000 ) },
				"specular" : { type: "c", value: new Color.THREE$Color( 0x111111 ) },
				"shininess": { type: "f", value: 30 }
			}

		] ),

		vertexShader: [

			"#define PHONG",

			"varying vec3 vViewPosition;",

			"#ifndef FLAT_SHADED",

			"	varying vec3 vNormal;",

			"#endif",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "uv_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "uv2_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "envmap_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "lights_phong_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "uv_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "uv2_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "color_vertex" ],

				ShaderChunk.THREE$ShaderChunk[ "morphnormal_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinbase_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinnormal_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "defaultnormal_vertex" ],

			"#ifndef FLAT_SHADED", // Normal computed with derivatives when FLAT_SHADED

			"	vNormal = normalize( transformedNormal );",

			"#endif",

				ShaderChunk.THREE$ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinning_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "default_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

			"	vViewPosition = - mvPosition.xyz;",

				ShaderChunk.THREE$ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "envmap_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "lights_phong_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"#define PHONG",

			"uniform vec3 diffuse;",
			"uniform vec3 emissive;",
			"uniform vec3 specular;",
			"uniform float shininess;",
			"uniform float opacity;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "uv_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "uv2_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "map_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "alphamap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "aomap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "lightmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "emissivemap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "envmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "lights_phong_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "bumpmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "normalmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "specularmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec3 outgoingLight = vec3( 0.0 );",
			"	vec4 diffuseColor = vec4( diffuse, opacity );",
			"	vec3 totalAmbientLight = ambientLightColor;",
			"	vec3 totalEmissiveLight = emissive;",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "map_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "color_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "alphamap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "alphatest_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "specularmap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "lightmap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "aomap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "emissivemap_fragment" ],

				ShaderChunk.THREE$ShaderChunk[ "lights_phong_fragment" ],

				ShaderChunk.THREE$ShaderChunk[ "envmap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "shadowmap_fragment" ],

				ShaderChunk.THREE$ShaderChunk[ "linear_to_gamma_fragment" ],

				ShaderChunk.THREE$ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'particle_basic': {

		uniforms: UniformsUtils.THREE$UniformsUtils.merge( [

			UniformsLib.THREE$UniformsLib[ "particle" ],
			UniformsLib.THREE$UniformsLib[ "shadowmap" ]

		] ),

		vertexShader: [

			"uniform float size;",
			"uniform float scale;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "color_vertex" ],

			"	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

			"	#ifdef USE_SIZEATTENUATION",
			"		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );",
			"	#else",
			"		gl_PointSize = size;",
			"	#endif",

			"	gl_Position = projectionMatrix * mvPosition;",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform vec3 psColor;",
			"uniform float opacity;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "map_particle_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec3 outgoingLight = vec3( 0.0 );",
			"	vec4 diffuseColor = vec4( psColor, opacity );",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "map_particle_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "color_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "alphatest_fragment" ],

			"	outgoingLight = diffuseColor.rgb;", // simple shader

				ShaderChunk.THREE$ShaderChunk[ "shadowmap_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'dashed': {

		uniforms: UniformsUtils.THREE$UniformsUtils.merge( [

			UniformsLib.THREE$UniformsLib[ "common" ],
			UniformsLib.THREE$UniformsLib[ "fog" ],

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

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "color_vertex" ],

			"	vLineDistance = scale * lineDistance;",

			"	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
			"	gl_Position = projectionMatrix * mvPosition;",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform vec3 diffuse;",
			"uniform float opacity;",

			"uniform float dashSize;",
			"uniform float totalSize;",

			"varying float vLineDistance;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	if ( mod( vLineDistance, totalSize ) > dashSize ) {",

			"		discard;",

			"	}",

			"	vec3 outgoingLight = vec3( 0.0 );",
			"	vec4 diffuseColor = vec4( diffuse, opacity );",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk.THREE$ShaderChunk[ "color_fragment" ],

			"	outgoingLight = diffuseColor.rgb;", // simple shader

				ShaderChunk.THREE$ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'depth': {

		uniforms: {

			"mNear": { type: "f", value: 1.0 },
			"mFar" : { type: "f", value: 2000.0 },
			"opacity" : { type: "f", value: 1.0 }

		},

		vertexShader: [

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "default_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform float mNear;",
			"uniform float mFar;",
			"uniform float opacity;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],

			"	#ifdef USE_LOGDEPTHBUF_EXT",

			"		float depth = gl_FragDepthEXT / gl_FragCoord.w;",

			"	#else",

			"		float depth = gl_FragCoord.z / gl_FragCoord.w;",

			"	#endif",

			"	float color = 1.0 - smoothstep( mNear, mFar, depth );",
			"	gl_FragColor = vec4( vec3( color ), opacity );",

			"}"

		].join( "\n" )

	},

	'normal': {

		uniforms: {

			"opacity" : { type: "f", value: 1.0 }

		},

		vertexShader: [

			"varying vec3 vNormal;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

			"	vNormal = normalize( normalMatrix * normal );",

				ShaderChunk.THREE$ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "default_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform float opacity;",
			"varying vec3 vNormal;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],

			"}"

		].join( "\n" )

	},

	/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */

	'cube': {

		uniforms: { "tCube": { type: "t", value: null },
					"tFlip": { type: "f", value: - 1 } },

		vertexShader: [

			"varying vec3 vWorldPosition;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

			"	vWorldPosition = transformDirection( position, modelMatrix );",

			"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform samplerCube tCube;",
			"uniform float tFlip;",

			"varying vec3 vWorldPosition;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],

			"}"

		].join( "\n" )

	},

	/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */

	'equirect': {

		uniforms: { "tEquirect": { type: "t", value: null },
					"tFlip": { type: "f", value: - 1 } },

		vertexShader: [

			"varying vec3 vWorldPosition;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

			"	vWorldPosition = transformDirection( position, modelMatrix );",

			"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform sampler2D tEquirect;",
			"uniform float tFlip;",

			"varying vec3 vWorldPosition;",

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

				// "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
				"vec3 direction = normalize( vWorldPosition );",
				"vec2 sampleUV;",
				"sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );",
				"sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;",
				"gl_FragColor = texture2D( tEquirect, sampleUV );",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],

			"}"

		].join( "\n" )

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

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "skinbase_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "skinning_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "default_vertex" ],
				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			ShaderChunk.THREE$ShaderChunk[ "common" ],
			ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"vec4 pack_depth( const in float depth ) {",

			"	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );",
			"	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );",
			"	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", // "	vec4 res = fract( depth * bit_shift );",
			"	res -= res.xxyz * bit_mask;",
			"	return res;",

			"}",

			"void main() {",

				ShaderChunk.THREE$ShaderChunk[ "logdepthbuf_fragment" ],

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

		].join( "\n" )

	}

};

exports.THREE$ShaderLib = THREE$ShaderLib;