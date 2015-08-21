Object.defineProperty(exports, '__esModule', {
	value: true
});

var _ShaderChunk = require('./ShaderChunk');

var _UniformsLib = require('./UniformsLib');

var _UniformsUtils = require('./UniformsUtils');

var _mathColor = require('../../math/Color');

var THREE$ShaderLib;

/**
 * Webgl Shader Library for three.js
 *
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 */

exports.THREE$ShaderLib = THREE$ShaderLib = {

	'basic': {

		uniforms: _UniformsUtils.THREE$UniformsUtils.merge([_UniformsLib.THREE$UniformsLib['common'], _UniformsLib.THREE$UniformsLib['aomap'], _UniformsLib.THREE$UniformsLib['fog'], _UniformsLib.THREE$UniformsLib['shadowmap']]),

		vertexShader: [_ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['uv_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['uv2_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['envmap_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['color_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['morphtarget_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['skinning_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['shadowmap_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', _ShaderChunk.THREE$ShaderChunk['uv_vertex'], _ShaderChunk.THREE$ShaderChunk['uv2_vertex'], _ShaderChunk.THREE$ShaderChunk['color_vertex'], _ShaderChunk.THREE$ShaderChunk['skinbase_vertex'], '\t#ifdef USE_ENVMAP', _ShaderChunk.THREE$ShaderChunk['morphnormal_vertex'], _ShaderChunk.THREE$ShaderChunk['skinnormal_vertex'], _ShaderChunk.THREE$ShaderChunk['defaultnormal_vertex'], '\t#endif', _ShaderChunk.THREE$ShaderChunk['morphtarget_vertex'], _ShaderChunk.THREE$ShaderChunk['skinning_vertex'], _ShaderChunk.THREE$ShaderChunk['default_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], _ShaderChunk.THREE$ShaderChunk['worldpos_vertex'], _ShaderChunk.THREE$ShaderChunk['envmap_vertex'], _ShaderChunk.THREE$ShaderChunk['shadowmap_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform vec3 diffuse;', 'uniform float opacity;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['color_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['uv_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['uv2_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['map_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['alphamap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['aomap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['envmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['shadowmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['specularmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {', '\tvec3 outgoingLight = vec3( 0.0 );', '\tvec4 diffuseColor = vec4( diffuse, opacity );', '\tvec3 totalAmbientLight = vec3( 1.0 );', // hardwired

		_ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], _ShaderChunk.THREE$ShaderChunk['map_fragment'], _ShaderChunk.THREE$ShaderChunk['color_fragment'], _ShaderChunk.THREE$ShaderChunk['alphamap_fragment'], _ShaderChunk.THREE$ShaderChunk['alphatest_fragment'], _ShaderChunk.THREE$ShaderChunk['specularmap_fragment'], _ShaderChunk.THREE$ShaderChunk['aomap_fragment'], '\toutgoingLight = diffuseColor.rgb * totalAmbientLight;', // simple shader

		_ShaderChunk.THREE$ShaderChunk['envmap_fragment'], _ShaderChunk.THREE$ShaderChunk['shadowmap_fragment'], // TODO: Shadows on an otherwise unlit surface doesn't make sense.

		_ShaderChunk.THREE$ShaderChunk['linear_to_gamma_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_fragment'], '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );', '}'].join('\n')

	},

	'lambert': {

		uniforms: _UniformsUtils.THREE$UniformsUtils.merge([_UniformsLib.THREE$UniformsLib['common'], _UniformsLib.THREE$UniformsLib['fog'], _UniformsLib.THREE$UniformsLib['lights'], _UniformsLib.THREE$UniformsLib['shadowmap'], {
			'emissive': { type: 'c', value: new _mathColor.THREE$Color(0x000000) }
		}]),

		vertexShader: ['#define LAMBERT', 'varying vec3 vLightFront;', '#ifdef DOUBLE_SIDED', '\tvarying vec3 vLightBack;', '#endif', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['uv_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['uv2_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['envmap_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['lights_lambert_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['color_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['morphtarget_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['skinning_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['shadowmap_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', _ShaderChunk.THREE$ShaderChunk['uv_vertex'], _ShaderChunk.THREE$ShaderChunk['uv2_vertex'], _ShaderChunk.THREE$ShaderChunk['color_vertex'], _ShaderChunk.THREE$ShaderChunk['morphnormal_vertex'], _ShaderChunk.THREE$ShaderChunk['skinbase_vertex'], _ShaderChunk.THREE$ShaderChunk['skinnormal_vertex'], _ShaderChunk.THREE$ShaderChunk['defaultnormal_vertex'], _ShaderChunk.THREE$ShaderChunk['morphtarget_vertex'], _ShaderChunk.THREE$ShaderChunk['skinning_vertex'], _ShaderChunk.THREE$ShaderChunk['default_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], _ShaderChunk.THREE$ShaderChunk['worldpos_vertex'], _ShaderChunk.THREE$ShaderChunk['envmap_vertex'], _ShaderChunk.THREE$ShaderChunk['lights_lambert_vertex'], _ShaderChunk.THREE$ShaderChunk['shadowmap_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform vec3 diffuse;', 'uniform vec3 emissive;', 'uniform float opacity;', 'varying vec3 vLightFront;', '#ifdef DOUBLE_SIDED', '\tvarying vec3 vLightBack;', '#endif', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['color_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['uv_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['uv2_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['map_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['alphamap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['envmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['shadowmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['specularmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {', '\tvec3 outgoingLight = vec3( 0.0 );', // outgoing light does not have an alpha, the surface does
		'\tvec4 diffuseColor = vec4( diffuse, opacity );', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], _ShaderChunk.THREE$ShaderChunk['map_fragment'], _ShaderChunk.THREE$ShaderChunk['color_fragment'], _ShaderChunk.THREE$ShaderChunk['alphamap_fragment'], _ShaderChunk.THREE$ShaderChunk['alphatest_fragment'], _ShaderChunk.THREE$ShaderChunk['specularmap_fragment'], '\t#ifdef DOUBLE_SIDED', '\t\tif ( gl_FrontFacing )', '\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;', '\t\telse', '\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;', '\t#else', '\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;', '\t#endif', _ShaderChunk.THREE$ShaderChunk['envmap_fragment'], _ShaderChunk.THREE$ShaderChunk['shadowmap_fragment'], _ShaderChunk.THREE$ShaderChunk['linear_to_gamma_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_fragment'], '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );', '}'].join('\n')

	},

	'phong': {

		uniforms: _UniformsUtils.THREE$UniformsUtils.merge([_UniformsLib.THREE$UniformsLib['common'], _UniformsLib.THREE$UniformsLib['aomap'], _UniformsLib.THREE$UniformsLib['lightmap'], _UniformsLib.THREE$UniformsLib['emissivemap'], _UniformsLib.THREE$UniformsLib['bump'], _UniformsLib.THREE$UniformsLib['normalmap'], _UniformsLib.THREE$UniformsLib['fog'], _UniformsLib.THREE$UniformsLib['lights'], _UniformsLib.THREE$UniformsLib['shadowmap'], {
			'emissive': { type: 'c', value: new _mathColor.THREE$Color(0x000000) },
			'specular': { type: 'c', value: new _mathColor.THREE$Color(0x111111) },
			'shininess': { type: 'f', value: 30 }
		}]),

		vertexShader: ['#define PHONG', 'varying vec3 vViewPosition;', '#ifndef FLAT_SHADED', '\tvarying vec3 vNormal;', '#endif', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['uv_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['uv2_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['envmap_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['lights_phong_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['color_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['morphtarget_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['skinning_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['shadowmap_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', _ShaderChunk.THREE$ShaderChunk['uv_vertex'], _ShaderChunk.THREE$ShaderChunk['uv2_vertex'], _ShaderChunk.THREE$ShaderChunk['color_vertex'], _ShaderChunk.THREE$ShaderChunk['morphnormal_vertex'], _ShaderChunk.THREE$ShaderChunk['skinbase_vertex'], _ShaderChunk.THREE$ShaderChunk['skinnormal_vertex'], _ShaderChunk.THREE$ShaderChunk['defaultnormal_vertex'], '#ifndef FLAT_SHADED', // Normal computed with derivatives when FLAT_SHADED

		'\tvNormal = normalize( transformedNormal );', '#endif', _ShaderChunk.THREE$ShaderChunk['morphtarget_vertex'], _ShaderChunk.THREE$ShaderChunk['skinning_vertex'], _ShaderChunk.THREE$ShaderChunk['default_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], '\tvViewPosition = - mvPosition.xyz;', _ShaderChunk.THREE$ShaderChunk['worldpos_vertex'], _ShaderChunk.THREE$ShaderChunk['envmap_vertex'], _ShaderChunk.THREE$ShaderChunk['lights_phong_vertex'], _ShaderChunk.THREE$ShaderChunk['shadowmap_vertex'], '}'].join('\n'),

		fragmentShader: ['#define PHONG', 'uniform vec3 diffuse;', 'uniform vec3 emissive;', 'uniform vec3 specular;', 'uniform float shininess;', 'uniform float opacity;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['color_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['uv_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['uv2_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['map_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['alphamap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['aomap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['lightmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['emissivemap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['envmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['lights_phong_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['shadowmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['bumpmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['normalmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['specularmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {', '\tvec3 outgoingLight = vec3( 0.0 );', '\tvec4 diffuseColor = vec4( diffuse, opacity );', '\tvec3 totalAmbientLight = ambientLightColor;', '\tvec3 totalEmissiveLight = emissive;', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], _ShaderChunk.THREE$ShaderChunk['map_fragment'], _ShaderChunk.THREE$ShaderChunk['color_fragment'], _ShaderChunk.THREE$ShaderChunk['alphamap_fragment'], _ShaderChunk.THREE$ShaderChunk['alphatest_fragment'], _ShaderChunk.THREE$ShaderChunk['specularmap_fragment'], _ShaderChunk.THREE$ShaderChunk['lightmap_fragment'], _ShaderChunk.THREE$ShaderChunk['aomap_fragment'], _ShaderChunk.THREE$ShaderChunk['emissivemap_fragment'], _ShaderChunk.THREE$ShaderChunk['lights_phong_fragment'], _ShaderChunk.THREE$ShaderChunk['envmap_fragment'], _ShaderChunk.THREE$ShaderChunk['shadowmap_fragment'], _ShaderChunk.THREE$ShaderChunk['linear_to_gamma_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_fragment'], '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );', '}'].join('\n')

	},

	'particle_basic': {

		uniforms: _UniformsUtils.THREE$UniformsUtils.merge([_UniformsLib.THREE$UniformsLib['particle'], _UniformsLib.THREE$UniformsLib['shadowmap']]),

		vertexShader: ['uniform float size;', 'uniform float scale;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['color_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['shadowmap_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', _ShaderChunk.THREE$ShaderChunk['color_vertex'], '\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );', '\t#ifdef USE_SIZEATTENUATION', '\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );', '\t#else', '\t\tgl_PointSize = size;', '\t#endif', '\tgl_Position = projectionMatrix * mvPosition;', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], _ShaderChunk.THREE$ShaderChunk['worldpos_vertex'], _ShaderChunk.THREE$ShaderChunk['shadowmap_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform vec3 psColor;', 'uniform float opacity;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['color_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['map_particle_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['shadowmap_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {', '\tvec3 outgoingLight = vec3( 0.0 );', '\tvec4 diffuseColor = vec4( psColor, opacity );', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], _ShaderChunk.THREE$ShaderChunk['map_particle_fragment'], _ShaderChunk.THREE$ShaderChunk['color_fragment'], _ShaderChunk.THREE$ShaderChunk['alphatest_fragment'], '\toutgoingLight = diffuseColor.rgb;', // simple shader

		_ShaderChunk.THREE$ShaderChunk['shadowmap_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_fragment'], '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );', '}'].join('\n')

	},

	'dashed': {

		uniforms: _UniformsUtils.THREE$UniformsUtils.merge([_UniformsLib.THREE$UniformsLib['common'], _UniformsLib.THREE$UniformsLib['fog'], {
			'scale': { type: 'f', value: 1 },
			'dashSize': { type: 'f', value: 1 },
			'totalSize': { type: 'f', value: 2 }
		}]),

		vertexShader: ['uniform float scale;', 'attribute float lineDistance;', 'varying float vLineDistance;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['color_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', _ShaderChunk.THREE$ShaderChunk['color_vertex'], '\tvLineDistance = scale * lineDistance;', '\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );', '\tgl_Position = projectionMatrix * mvPosition;', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform vec3 diffuse;', 'uniform float opacity;', 'uniform float dashSize;', 'uniform float totalSize;', 'varying float vLineDistance;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['color_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['fog_pars_fragment'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {', '\tif ( mod( vLineDistance, totalSize ) > dashSize ) {', '\t\tdiscard;', '\t}', '\tvec3 outgoingLight = vec3( 0.0 );', '\tvec4 diffuseColor = vec4( diffuse, opacity );', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], _ShaderChunk.THREE$ShaderChunk['color_fragment'], '\toutgoingLight = diffuseColor.rgb;', // simple shader

		_ShaderChunk.THREE$ShaderChunk['fog_fragment'], '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );', '}'].join('\n')

	},

	'depth': {

		uniforms: {

			'mNear': { type: 'f', value: 1.0 },
			'mFar': { type: 'f', value: 2000.0 },
			'opacity': { type: 'f', value: 1.0 }

		},

		vertexShader: [_ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['morphtarget_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', _ShaderChunk.THREE$ShaderChunk['morphtarget_vertex'], _ShaderChunk.THREE$ShaderChunk['default_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform float mNear;', 'uniform float mFar;', 'uniform float opacity;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], '\t#ifdef USE_LOGDEPTHBUF_EXT', '\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;', '\t#else', '\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;', '\t#endif', '\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );', '\tgl_FragColor = vec4( vec3( color ), opacity );', '}'].join('\n')

	},

	'normal': {

		uniforms: {

			'opacity': { type: 'f', value: 1.0 }

		},

		vertexShader: ['varying vec3 vNormal;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['morphtarget_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', '\tvNormal = normalize( normalMatrix * normal );', _ShaderChunk.THREE$ShaderChunk['morphtarget_vertex'], _ShaderChunk.THREE$ShaderChunk['default_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform float opacity;', 'varying vec3 vNormal;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {', '\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], '}'].join('\n')

	},

	/* -------------------------------------------------------------------------
 //	Cube map shader
  ------------------------------------------------------------------------- */

	'cube': {

		uniforms: { 'tCube': { type: 't', value: null },
			'tFlip': { type: 'f', value: -1 } },

		vertexShader: ['varying vec3 vWorldPosition;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', '\tvWorldPosition = transformDirection( position, modelMatrix );', '\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform samplerCube tCube;', 'uniform float tFlip;', 'varying vec3 vWorldPosition;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {', '\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], '}'].join('\n')

	},

	/* -------------------------------------------------------------------------
 //	Cube map shader
  ------------------------------------------------------------------------- */

	'equirect': {

		uniforms: { 'tEquirect': { type: 't', value: null },
			'tFlip': { type: 'f', value: -1 } },

		vertexShader: ['varying vec3 vWorldPosition;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', '\tvWorldPosition = transformDirection( position, modelMatrix );', '\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform sampler2D tEquirect;', 'uniform float tFlip;', 'varying vec3 vWorldPosition;', _ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'void main() {',

		// "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
		'vec3 direction = normalize( vWorldPosition );', 'vec2 sampleUV;', 'sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );', 'sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;', 'gl_FragColor = texture2D( tEquirect, sampleUV );', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], '}'].join('\n')

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

		vertexShader: [_ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['morphtarget_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['skinning_pars_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_vertex'], 'void main() {', _ShaderChunk.THREE$ShaderChunk['skinbase_vertex'], _ShaderChunk.THREE$ShaderChunk['morphtarget_vertex'], _ShaderChunk.THREE$ShaderChunk['skinning_vertex'], _ShaderChunk.THREE$ShaderChunk['default_vertex'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_vertex'], '}'].join('\n'),

		fragmentShader: [_ShaderChunk.THREE$ShaderChunk['common'], _ShaderChunk.THREE$ShaderChunk['logdepthbuf_pars_fragment'], 'vec4 pack_depth( const in float depth ) {', '\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );', '\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );', '\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );', // "	vec4 res = fract( depth * bit_shift );",
		'\tres -= res.xxyz * bit_mask;', '\treturn res;', '}', 'void main() {', _ShaderChunk.THREE$ShaderChunk['logdepthbuf_fragment'], '\t#ifdef USE_LOGDEPTHBUF_EXT', '\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );', '\t#else', '\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );', '\t#endif',

		//"gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z / gl_FragCoord.w );",
		//"float z = ( ( gl_FragCoord.z / gl_FragCoord.w ) - 3.0 ) / ( 4000.0 - 3.0 );",
		//"gl_FragData[ 0 ] = pack_depth( z );",
		//"gl_FragData[ 0 ] = vec4( z, z, z, 1.0 );",

		'}'].join('\n')

	}

};

exports.THREE$ShaderLib = THREE$ShaderLib;