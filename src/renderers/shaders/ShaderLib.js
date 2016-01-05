import { ShaderChunk } from './ShaderChunk';
import { Vector3 } from '../../math/Vector3';
import { UniformsLib } from './UniformsLib';
import { UniformsUtils } from './UniformsUtils';
import { Color } from '../../math/Color';

var ShaderLib;

/**
 * Webgl Shader Library for three.js
 *
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 */


ShaderLib = {

	'basic': {

		uniforms: UniformsUtils.merge( [

			UniformsLib[ "common" ],
			UniformsLib[ "aomap" ],
			UniformsLib[ "fog" ],
			UniformsLib[ "shadowmap" ]

		] ),

		vertexShader: [

			ShaderChunk[ "common" ],
			ShaderChunk[ "uv_pars_vertex" ],
			ShaderChunk[ "uv2_pars_vertex" ],
			ShaderChunk[ "envmap_pars_vertex" ],
			ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk[ "uv_vertex" ],
				ShaderChunk[ "uv2_vertex" ],
				ShaderChunk[ "color_vertex" ],
				ShaderChunk[ "skinbase_vertex" ],

			"	#ifdef USE_ENVMAP",

				ShaderChunk[ "beginnormal_vertex" ],
				ShaderChunk[ "morphnormal_vertex" ],
				ShaderChunk[ "skinnormal_vertex" ],
				ShaderChunk[ "defaultnormal_vertex" ],

			"	#endif",

				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk[ "skinning_vertex" ],
				ShaderChunk[ "project_vertex" ],
				ShaderChunk[ "logdepthbuf_vertex" ],

				ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk[ "envmap_vertex" ],
				ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform vec3 diffuse;",
			"uniform float opacity;",

			"#ifndef FLAT_SHADED",

			"	varying vec3 vNormal;",

			"#endif",

			ShaderChunk[ "common" ],
			ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk[ "uv_pars_fragment" ],
			ShaderChunk[ "uv2_pars_fragment" ],
			ShaderChunk[ "map_pars_fragment" ],
			ShaderChunk[ "alphamap_pars_fragment" ],
			ShaderChunk[ "aomap_pars_fragment" ],
			ShaderChunk[ "envmap_pars_fragment" ],
			ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk[ "specularmap_pars_fragment" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec4 diffuseColor = vec4( diffuse, opacity );",

				ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk[ "map_fragment" ],
				ShaderChunk[ "color_fragment" ],
				ShaderChunk[ "alphamap_fragment" ],
				ShaderChunk[ "alphatest_fragment" ],
				ShaderChunk[ "specularmap_fragment" ],

			"	ReflectedLight reflectedLight;",
			"	reflectedLight.directDiffuse = vec3( 0.0 );",
			"	reflectedLight.directSpecular = vec3( 0.0 );",
			"	reflectedLight.indirectDiffuse = diffuseColor.rgb;",
			"	reflectedLight.indirectSpecular = vec3( 0.0 );",

				ShaderChunk[ "aomap_fragment" ],
				ShaderChunk[ "shadowmap_fragment" ],

				"reflectedLight.indirectDiffuse *= shadowMask;",

				"vec3 outgoingLight = reflectedLight.indirectDiffuse;",

				ShaderChunk[ "envmap_fragment" ],
				ShaderChunk[ "linear_to_gamma_fragment" ],
				ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'lambert': {

		uniforms: UniformsUtils.merge( [

			UniformsLib[ "common" ],
			UniformsLib[ "aomap" ],
			UniformsLib[ "lightmap" ],
			UniformsLib[ "emissivemap" ],
			UniformsLib[ "fog" ],
			UniformsLib[ "ambient" ],
			UniformsLib[ "lights" ],
			UniformsLib[ "shadowmap" ],

			{
				"emissive" : { type: "c", value: new Color( 0x000000 ) }
			}

		] ),

		vertexShader: [

			"#define LAMBERT",

			"varying vec3 vLightFront;",

			"#ifdef DOUBLE_SIDED",

			"	varying vec3 vLightBack;",

			"#endif",

			ShaderChunk[ "common" ],
			ShaderChunk[ "uv_pars_vertex" ],
			ShaderChunk[ "uv2_pars_vertex" ],
			ShaderChunk[ "envmap_pars_vertex" ],
			ShaderChunk[ "bsdfs" ],
			ShaderChunk[ "lights_pars" ],
			ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk[ "uv_vertex" ],
				ShaderChunk[ "uv2_vertex" ],
				ShaderChunk[ "color_vertex" ],

				ShaderChunk[ "beginnormal_vertex" ],
				ShaderChunk[ "morphnormal_vertex" ],
				ShaderChunk[ "skinbase_vertex" ],
				ShaderChunk[ "skinnormal_vertex" ],
				ShaderChunk[ "defaultnormal_vertex" ],

				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk[ "skinning_vertex" ],
				ShaderChunk[ "project_vertex" ],
				ShaderChunk[ "logdepthbuf_vertex" ],

				ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk[ "envmap_vertex" ],
				ShaderChunk[ "lights_lambert_vertex" ],
				ShaderChunk[ "shadowmap_vertex" ],

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

			ShaderChunk[ "common" ],
			ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk[ "uv_pars_fragment" ],
			ShaderChunk[ "uv2_pars_fragment" ],
			ShaderChunk[ "map_pars_fragment" ],
			ShaderChunk[ "alphamap_pars_fragment" ],
			ShaderChunk[ "aomap_pars_fragment" ],
			ShaderChunk[ "lightmap_pars_fragment" ],
			ShaderChunk[ "emissivemap_pars_fragment" ],
			ShaderChunk[ "envmap_pars_fragment" ],
			ShaderChunk[ "bsdfs" ],
			ShaderChunk[ "ambient_pars" ],
			ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk[ "specularmap_pars_fragment" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec4 diffuseColor = vec4( diffuse, opacity );",
			"	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",
			"	vec3 totalEmissiveLight = emissive;",

				ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk[ "map_fragment" ],
				ShaderChunk[ "color_fragment" ],
				ShaderChunk[ "alphamap_fragment" ],
				ShaderChunk[ "alphatest_fragment" ],
				ShaderChunk[ "specularmap_fragment" ],
				ShaderChunk[ "emissivemap_fragment" ],
				ShaderChunk[ "shadowmap_fragment" ],

				// accumulation
			"	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );",

				ShaderChunk[ "lightmap_fragment" ],

			"	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );",

			"	#ifdef DOUBLE_SIDED",

			"		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;",

			"	#else",

			"		reflectedLight.directDiffuse = vLightFront;",

			"	#endif",

			"	reflectedLight.directDiffuse *= ( BRDF_Diffuse_Lambert( diffuseColor.rgb ) * shadowMask );",

				// modulation
				ShaderChunk[ "aomap_fragment" ],

			"	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveLight;",

				ShaderChunk[ "envmap_fragment" ],

				ShaderChunk[ "linear_to_gamma_fragment" ],

				ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'phong': {

		uniforms: UniformsUtils.merge( [

			UniformsLib[ "common" ],
			UniformsLib[ "aomap" ],
			UniformsLib[ "lightmap" ],
			UniformsLib[ "emissivemap" ],
			UniformsLib[ "bumpmap" ],
			UniformsLib[ "normalmap" ],
			UniformsLib[ "displacementmap" ],
			UniformsLib[ "fog" ],
			UniformsLib[ "ambient" ],
			UniformsLib[ "lights" ],
			UniformsLib[ "shadowmap" ],

			{
				"emissive" : { type: "c", value: new Color( 0x000000 ) },
				"specular" : { type: "c", value: new Color( 0x111111 ) },
				"shininess": { type: "f", value: 30 }
			}

		] ),

		vertexShader: [

			"#define PHONG",

			"varying vec3 vViewPosition;",

			"#ifndef FLAT_SHADED",

			"	varying vec3 vNormal;",

			"#endif",

			ShaderChunk[ "common" ],
			ShaderChunk[ "uv_pars_vertex" ],
			ShaderChunk[ "uv2_pars_vertex" ],
			ShaderChunk[ "displacementmap_pars_vertex" ],
			ShaderChunk[ "envmap_pars_vertex" ],
			ShaderChunk[ "lights_phong_pars_vertex" ],
			ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk[ "uv_vertex" ],
				ShaderChunk[ "uv2_vertex" ],
				ShaderChunk[ "color_vertex" ],

				ShaderChunk[ "beginnormal_vertex" ],
				ShaderChunk[ "morphnormal_vertex" ],
				ShaderChunk[ "skinbase_vertex" ],
				ShaderChunk[ "skinnormal_vertex" ],
				ShaderChunk[ "defaultnormal_vertex" ],

			"#ifndef FLAT_SHADED", // Normal computed with derivatives when FLAT_SHADED

			"	vNormal = normalize( transformedNormal );",

			"#endif",

				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "displacementmap_vertex" ],
				ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk[ "skinning_vertex" ],
				ShaderChunk[ "project_vertex" ],
				ShaderChunk[ "logdepthbuf_vertex" ],

			"	vViewPosition = - mvPosition.xyz;",

				ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk[ "envmap_vertex" ],
				ShaderChunk[ "lights_phong_vertex" ],
				ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"#define PHONG",

			"uniform vec3 diffuse;",
			"uniform vec3 emissive;",
			"uniform vec3 specular;",
			"uniform float shininess;",
			"uniform float opacity;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk[ "uv_pars_fragment" ],
			ShaderChunk[ "uv2_pars_fragment" ],
			ShaderChunk[ "map_pars_fragment" ],
			ShaderChunk[ "alphamap_pars_fragment" ],
			ShaderChunk[ "aomap_pars_fragment" ],
			ShaderChunk[ "lightmap_pars_fragment" ],
			ShaderChunk[ "emissivemap_pars_fragment" ],
			ShaderChunk[ "envmap_pars_fragment" ],
			ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk[ "bsdfs" ],
			ShaderChunk[ "ambient_pars" ],
			ShaderChunk[ "lights_pars" ],
			ShaderChunk[ "lights_phong_pars_fragment" ],
			ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk[ "bumpmap_pars_fragment" ],
			ShaderChunk[ "normalmap_pars_fragment" ],
			ShaderChunk[ "specularmap_pars_fragment" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec4 diffuseColor = vec4( diffuse, opacity );",
			"	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",
			"	vec3 totalEmissiveLight = emissive;",

				ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk[ "map_fragment" ],
				ShaderChunk[ "color_fragment" ],
				ShaderChunk[ "alphamap_fragment" ],
				ShaderChunk[ "alphatest_fragment" ],
				ShaderChunk[ "specularmap_fragment" ],
				ShaderChunk[ "normal_fragment" ],
				ShaderChunk[ "emissivemap_fragment" ],

				ShaderChunk[ "shadowmap_fragment" ],

				// accumulation
				ShaderChunk[ "lights_phong_fragment" ],
				ShaderChunk[ "lights_template" ],

				// modulation
				ShaderChunk[ "aomap_fragment" ],

				"vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveLight;",

				ShaderChunk[ "envmap_fragment" ],
				ShaderChunk[ "linear_to_gamma_fragment" ],

				ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'standard': {

		uniforms: UniformsUtils.merge( [

			UniformsLib[ "common" ],
			UniformsLib[ "aomap" ],
			UniformsLib[ "lightmap" ],
			UniformsLib[ "emissivemap" ],
			UniformsLib[ "bumpmap" ],
			UniformsLib[ "normalmap" ],
			UniformsLib[ "displacementmap" ],
			UniformsLib[ "roughnessmap" ],
			UniformsLib[ "metalnessmap" ],
			UniformsLib[ "fog" ],
			UniformsLib[ "ambient" ],
			UniformsLib[ "lights" ],
			UniformsLib[ "shadowmap" ],

			{
				"emissive" : { type: "c", value: new Color( 0x000000 ) },
				"roughness": { type: "f", value: 0.5 },
				"metalness": { type: "f", value: 0 },
				"envMapIntensity" : { type: "f", value: 1 } // temporary
			}

		] ),

		vertexShader: [

			"#define STANDARD",

			"varying vec3 vViewPosition;",

			"#ifndef FLAT_SHADED",

			"	varying vec3 vNormal;",

			"#endif",

			ShaderChunk[ "common" ],
			ShaderChunk[ "uv_pars_vertex" ],
			ShaderChunk[ "uv2_pars_vertex" ],
			ShaderChunk[ "displacementmap_pars_vertex" ],
			ShaderChunk[ "envmap_pars_vertex" ],
			ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk[ "specularmap_pars_fragment" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {", // STANDARD

				ShaderChunk[ "uv_vertex" ],
				ShaderChunk[ "uv2_vertex" ],
				ShaderChunk[ "color_vertex" ],

				ShaderChunk[ "beginnormal_vertex" ],
				ShaderChunk[ "morphnormal_vertex" ],
				ShaderChunk[ "skinbase_vertex" ],
				ShaderChunk[ "skinnormal_vertex" ],
				ShaderChunk[ "defaultnormal_vertex" ],

			"#ifndef FLAT_SHADED", // Normal computed with derivatives when FLAT_SHADED

			"	vNormal = normalize( transformedNormal );",

			"#endif",

				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "displacementmap_vertex" ],
				ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk[ "skinning_vertex" ],
				ShaderChunk[ "project_vertex" ],
				ShaderChunk[ "logdepthbuf_vertex" ],

			"	vViewPosition = - mvPosition.xyz;",

				ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk[ "envmap_vertex" ],
				ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"#define STANDARD",

			"uniform vec3 diffuse;",
			"uniform vec3 emissive;",
			"uniform float roughness;",
			"uniform float metalness;",
			"uniform float opacity;",

			"uniform float envMapIntensity;", // temporary

			"varying vec3 vViewPosition;",

			"#ifndef FLAT_SHADED",

			"	varying vec3 vNormal;",

			"#endif",

			ShaderChunk[ "common" ],
			ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk[ "uv_pars_fragment" ],
			ShaderChunk[ "uv2_pars_fragment" ],
			ShaderChunk[ "map_pars_fragment" ],
			ShaderChunk[ "alphamap_pars_fragment" ],
			ShaderChunk[ "aomap_pars_fragment" ],
			ShaderChunk[ "lightmap_pars_fragment" ],
			ShaderChunk[ "emissivemap_pars_fragment" ],
			ShaderChunk[ "envmap_pars_fragment" ],
			ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk[ "bsdfs" ],
			ShaderChunk[ "ambient_pars" ],
			ShaderChunk[ "lights_pars" ],
			ShaderChunk[ "lights_standard_pars_fragment" ],
			ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk[ "bumpmap_pars_fragment" ],
			ShaderChunk[ "normalmap_pars_fragment" ],
			ShaderChunk[ "roughnessmap_pars_fragment" ],
			ShaderChunk[ "metalnessmap_pars_fragment" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec4 diffuseColor = vec4( diffuse, opacity );",
			"	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",
			"	vec3 totalEmissiveLight = emissive;",

				ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk[ "map_fragment" ],
				ShaderChunk[ "color_fragment" ],
				ShaderChunk[ "alphamap_fragment" ],
				ShaderChunk[ "alphatest_fragment" ],
				ShaderChunk[ "specularmap_fragment" ],
				ShaderChunk[ "roughnessmap_fragment" ],
				ShaderChunk[ "metalnessmap_fragment" ],
				ShaderChunk[ "normal_fragment" ],
				ShaderChunk[ "emissivemap_fragment" ],

				ShaderChunk[ "shadowmap_fragment" ],

				// accumulation
				ShaderChunk[ "lights_standard_fragment" ],
				ShaderChunk[ "lights_template" ],

				// modulation
				ShaderChunk[ "aomap_fragment" ],

				"vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveLight;",

				ShaderChunk[ "linear_to_gamma_fragment" ],

				ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'points': {

		uniforms: UniformsUtils.merge( [

			UniformsLib[ "points" ],
			UniformsLib[ "fog" ],
			UniformsLib[ "shadowmap" ]

		] ),

		vertexShader: [

			"uniform float size;",
			"uniform float scale;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk[ "shadowmap_pars_vertex" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk[ "color_vertex" ],
				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "project_vertex" ],

			"	#ifdef USE_SIZEATTENUATION",
			"		gl_PointSize = size * ( scale / - mvPosition.z );",
			"	#else",
			"		gl_PointSize = size;",
			"	#endif",

				ShaderChunk[ "logdepthbuf_vertex" ],
				ShaderChunk[ "worldpos_vertex" ],
				ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform vec3 diffuse;",
			"uniform float opacity;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk[ "map_particle_pars_fragment" ],
			ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk[ "shadowmap_pars_fragment" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	vec3 outgoingLight = vec3( 0.0 );",
			"	vec4 diffuseColor = vec4( diffuse, opacity );",

				ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk[ "map_particle_fragment" ],
				ShaderChunk[ "color_fragment" ],
				ShaderChunk[ "alphatest_fragment" ],
				ShaderChunk[ "shadowmap_fragment" ],

			"	outgoingLight = diffuseColor.rgb * shadowMask;",

				ShaderChunk[ "fog_fragment" ],

			"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",

			"}"

		].join( "\n" )

	},

	'dashed': {

		uniforms: UniformsUtils.merge( [

			UniformsLib[ "common" ],
			UniformsLib[ "fog" ],

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

			ShaderChunk[ "common" ],
			ShaderChunk[ "color_pars_vertex" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk[ "color_vertex" ],

			"	vLineDistance = scale * lineDistance;",

			"	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
			"	gl_Position = projectionMatrix * mvPosition;",

				ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform vec3 diffuse;",
			"uniform float opacity;",

			"uniform float dashSize;",
			"uniform float totalSize;",

			"varying float vLineDistance;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "color_pars_fragment" ],
			ShaderChunk[ "fog_pars_fragment" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	if ( mod( vLineDistance, totalSize ) > dashSize ) {",

			"		discard;",

			"	}",

			"	vec3 outgoingLight = vec3( 0.0 );",
			"	vec4 diffuseColor = vec4( diffuse, opacity );",

				ShaderChunk[ "logdepthbuf_fragment" ],
				ShaderChunk[ "color_fragment" ],

			"	outgoingLight = diffuseColor.rgb;", // simple shader

				ShaderChunk[ "fog_fragment" ],

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

			ShaderChunk[ "common" ],
			ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk[ "project_vertex" ],
				ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform float mNear;",
			"uniform float mFar;",
			"uniform float opacity;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

				ShaderChunk[ "logdepthbuf_fragment" ],

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

			ShaderChunk[ "common" ],
			ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

			"	vNormal = normalize( normalMatrix * normal );",

				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk[ "project_vertex" ],
				ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform float opacity;",
			"varying vec3 vNormal;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",

				ShaderChunk[ "logdepthbuf_fragment" ],

			"}"

		].join( "\n" )

	},

	/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */

	'cube': {

		uniforms: {
			"tCube": { type: "t", value: null },
			"tFlip": { type: "f", value: - 1 }
		},

		vertexShader: [

			"varying vec3 vWorldPosition;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

			"	vWorldPosition = transformDirection( position, modelMatrix );",

			"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

				ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform samplerCube tCube;",
			"uniform float tFlip;",

			"varying vec3 vWorldPosition;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

			"	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",

				ShaderChunk[ "logdepthbuf_fragment" ],

			"}"

		].join( "\n" )

	},

	/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */

	'equirect': {

		uniforms: {
			"tEquirect": { type: "t", value: null },
			"tFlip": { type: "f", value: - 1 }
		},

		vertexShader: [

			"varying vec3 vWorldPosition;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

			"	vWorldPosition = transformDirection( position, modelMatrix );",

			"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

				ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform sampler2D tEquirect;",
			"uniform float tFlip;",

			"varying vec3 vWorldPosition;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

				// "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
				"vec3 direction = normalize( vWorldPosition );",
				"vec2 sampleUV;",
				"sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );",
				"sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;",
				"gl_FragColor = texture2D( tEquirect, sampleUV );",

				ShaderChunk[ "logdepthbuf_fragment" ],

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

			ShaderChunk[ "common" ],
			ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk[ "skinning_pars_vertex" ],
			ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				ShaderChunk[ "skinbase_vertex" ],

				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk[ "skinning_vertex" ],
				ShaderChunk[ "project_vertex" ],
				ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [

			ShaderChunk[ "common" ],
			ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"vec4 pack_depth( const in float depth ) {",

			"	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );",
			"	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );",
			"	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", // "	vec4 res = fract( depth * bit_shift );",
			"	res -= res.xxyz * bit_mask;",
			"	return res;",

			"}",

			"void main() {",

				ShaderChunk[ "logdepthbuf_fragment" ],

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

	},


	'distanceRGBA': {

		uniforms: {

			"lightPos": { type: "v3", value: new Vector3( 0, 0, 0 ) }

		},

		vertexShader: [

			"varying vec4 vWorldPosition;",

			ShaderChunk[ "common" ],
			ShaderChunk[ "morphtarget_pars_vertex" ],
			ShaderChunk[ "skinning_pars_vertex" ],

			"void main() {",

				ShaderChunk[ "skinbase_vertex" ],
				ShaderChunk[ "begin_vertex" ],
				ShaderChunk[ "morphtarget_vertex" ],
				ShaderChunk[ "skinning_vertex" ],
				ShaderChunk[ "project_vertex" ],
				ShaderChunk[ "worldpos_vertex" ],

				"vWorldPosition = worldPosition;",

			"}"

		].join( "\n" ),

		fragmentShader: [

			"uniform vec3 lightPos;",
			"varying vec4 vWorldPosition;",

			ShaderChunk[ "common" ],

			"vec4 pack1K ( float depth ) {",

			"   depth /= 1000.0;",
			"   const vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );",
  			"	const vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );",
   			"	vec4 res = fract( depth * bitSh );",
   			"	res -= res.xxyz * bitMsk;",
   			"	return res; ",

			"}",

			"float unpack1K ( vec4 color ) {",

			"	const vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );",
			"	return dot( color, bitSh ) * 1000.0;",

			"}",

			"void main () {",

			"	gl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );",

			"}"

		].join( "\n" )

	}

};


export { ShaderLib };