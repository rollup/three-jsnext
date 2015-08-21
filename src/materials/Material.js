import { THREE$EventDispatcher } from '../core/EventDispatcher';
import { THREE$FrontSide, THREE$NormalBlending, THREE$SmoothShading, THREE$NoColors, THREE$LessEqualDepth, THREE$AddEquation, THREE$OneMinusSrcAlphaFactor, THREE$SrcAlphaFactor } from '../Three';
import { THREE$Texture } from '../textures/Texture';
import { THREE$Color } from '../math/Color';
import { THREE$Vector3 } from '../math/Vector3';
import { THREE$Math } from '../math/Math';

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

	this.precision = null; // override the renderer's default precision for this material

	this.polygonOffset = false;
	this.polygonOffsetFactor = 0;
	this.polygonOffsetUnits = 0;

	this.alphaTest = 0;

	this.overdraw = 0; // Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer

	this.visible = true;

	this._needsUpdate = true;

};

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
		if ( this.alphaTest > 0 ) data.alphaTest = this.alphaTest;
		if ( this.wireframe === true ) data.wireframe = this.wireframe;
		if ( this.wireframeLinewidth > 1 ) data.wireframeLinewidth = this.wireframeLinewidth;

		return data;

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.name = source.name;

		this.side = source.side;

		this.opacity = source.opacity;
		this.transparent = source.transparent;

		this.blending = source.blending;

		this.blendSrc = source.blendSrc;
		this.blendDst = source.blendDst;
		this.blendEquation = source.blendEquation;
		this.blendSrcAlpha = source.blendSrcAlpha;
		this.blendDstAlpha = source.blendDstAlpha;
		this.blendEquationAlpha = source.blendEquationAlpha;

		this.depthFunc = source.depthFunc;
		this.depthTest = source.depthTest;
		this.depthWrite = source.depthWrite;

		this.precision = source.precision;

		this.polygonOffset = source.polygonOffset;
		this.polygonOffsetFactor = source.polygonOffsetFactor;
		this.polygonOffsetUnits = source.polygonOffsetUnits;

		this.alphaTest = source.alphaTest;

		this.overdraw = source.overdraw;

		this.visible = source.visible;

		return this;

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
function THREE$MaterialIdCount () { return count++; };


export { THREE$MaterialIdCount, THREE$Material };