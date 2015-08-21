'use strict';

exports.THREE$ObjectLoader = THREE$ObjectLoader;

var Object3D = require('../core/Object3D');
var Group = require('../objects/Group');
var Sprite = require('../objects/Sprite');
var PointCloud = require('../objects/PointCloud');
var Line = require('../objects/Line');
var Mesh = require('../objects/Mesh');
var HemisphereLight = require('../lights/HemisphereLight');
var SpotLight = require('../lights/SpotLight');
var PointLight = require('../lights/PointLight');
var DirectionalLight = require('../lights/DirectionalLight');
var AreaLight = require('../lights/AreaLight');
var AmbientLight = require('../lights/AmbientLight');
var OrthographicCamera = require('../cameras/OrthographicCamera');
var PerspectiveCamera = require('../cameras/PerspectiveCamera');
var Scene = require('../scenes/Scene');
var Matrix4 = require('../math/Matrix4');
var Vector2 = require('../math/Vector2');
var Texture = require('../textures/Texture');
var ImageLoader = require('./ImageLoader');
var LoadingManager = require('./LoadingManager');
var Three = require('../Three');
var MaterialLoader = require('./MaterialLoader');
var TextGeometry = require('../extras/geometries/TextGeometry');
var TorusKnotGeometry = require('../extras/geometries/TorusKnotGeometry');
var TorusGeometry = require('../extras/geometries/TorusGeometry');
var RingGeometry = require('../extras/geometries/RingGeometry');
var TetrahedronGeometry = require('../extras/geometries/TetrahedronGeometry');
var OctahedronGeometry = require('../extras/geometries/OctahedronGeometry');
var IcosahedronGeometry = require('../extras/geometries/IcosahedronGeometry');
var DodecahedronGeometry = require('../extras/geometries/DodecahedronGeometry');
var SphereBufferGeometry = require('../extras/geometries/SphereBufferGeometry');
var SphereGeometry = require('../extras/geometries/SphereGeometry');
var CylinderGeometry = require('../extras/geometries/CylinderGeometry');
var CircleGeometry = require('../extras/geometries/CircleGeometry');
var CircleBufferGeometry = require('../extras/geometries/CircleBufferGeometry');
var BoxGeometry = require('../extras/geometries/BoxGeometry');
var BufferGeometryLoader = require('./BufferGeometryLoader');
var JSONLoader = require('./JSONLoader');
var XHRLoader = require('./XHRLoader');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$ObjectLoader ( manager ) {
	this.isObjectLoader = true;

	this.manager = ( manager !== undefined ) ? manager : LoadingManager.THREE$DefaultLoadingManager;
	this.texturePath = '';

};

THREE$ObjectLoader.prototype = {

	constructor: THREE$ObjectLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		if ( this.texturePath === '' ) {

			this.texturePath = url.substring( 0, url.lastIndexOf( '/' ) + 1 );

		}

		var scope = this;

		var loader = new XHRLoader.THREE$XHRLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( text ) {

			scope.parse( JSON.parse( text ), onLoad );

		}, onProgress, onError );

	},

	setTexturePath: function ( value ) {

		this.texturePath = value;

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	parse: function ( json, onLoad ) {

		var geometries = this.parseGeometries( json.geometries );

		var images = this.parseImages( json.images, function () {

			if ( onLoad !== undefined ) onLoad( object );

		} );

		var textures  = this.parseTextures( json.textures, images );
		var materials = this.parseMaterials( json.materials, textures );
		var object = this.parseObject( json.object, geometries, materials );

		if ( json.images === undefined || json.images.length === 0 ) {

			if ( onLoad !== undefined ) onLoad( object );

		}

		return object;

	},

	parseGeometries: function ( json ) {

		var geometries = {};

		if ( json !== undefined ) {

			var geometryLoader = new JSONLoader.THREE$JSONLoader();
			var bufferGeometryLoader = new BufferGeometryLoader.THREE$BufferGeometryLoader();

			for ( var i = 0, l = json.length; i < l; i ++ ) {

				var geometry;
				var data = json[ i ];

				switch ( data.type ) {

					case 'PlaneGeometry':
					case 'PlaneBufferGeometry':

						geometry = new THREE[ data.type ](
							data.width,
							data.height,
							data.widthSegments,
							data.heightSegments
						);

						break;

					case 'BoxGeometry':
					case 'CubeGeometry': // backwards compatible

						geometry = new BoxGeometry.THREE$BoxGeometry(
							data.width,
							data.height,
							data.depth,
							data.widthSegments,
							data.heightSegments,
							data.depthSegments
						);

						break;

					case 'CircleBufferGeometry':

						geometry = new CircleBufferGeometry.THREE$CircleBufferGeometry(
							data.radius,
							data.segments,
							data.thetaStart,
							data.thetaLength
						);

						break;

					case 'CircleGeometry':

						geometry = new CircleGeometry.THREE$CircleGeometry(
							data.radius,
							data.segments,
							data.thetaStart,
							data.thetaLength
						);

						break;

					case 'CylinderGeometry':

						geometry = new CylinderGeometry.THREE$CylinderGeometry(
							data.radiusTop,
							data.radiusBottom,
							data.height,
							data.radialSegments,
							data.heightSegments,
							data.openEnded,
							data.thetaStart,
							data.thetaLength
						);

						break;

					case 'SphereGeometry':

						geometry = new SphereGeometry.THREE$SphereGeometry(
							data.radius,
							data.widthSegments,
							data.heightSegments,
							data.phiStart,
							data.phiLength,
							data.thetaStart,
							data.thetaLength
						);

						break;

					case 'SphereBufferGeometry':

						geometry = new SphereBufferGeometry.THREE$SphereBufferGeometry(
							data.radius,
							data.widthSegments,
							data.heightSegments,
							data.phiStart,
							data.phiLength,
							data.thetaStart,
							data.thetaLength
						);

						break;

					case 'DodecahedronGeometry':

						geometry = new DodecahedronGeometry.THREE$DodecahedronGeometry(
							data.radius,
							data.detail
						);

						break;

					case 'IcosahedronGeometry':

						geometry = new IcosahedronGeometry.THREE$IcosahedronGeometry(
							data.radius,
							data.detail
						);

						break;

					case 'OctahedronGeometry':

						geometry = new OctahedronGeometry.THREE$OctahedronGeometry(
							data.radius,
							data.detail
						);

						break;

					case 'TetrahedronGeometry':

						geometry = new TetrahedronGeometry.THREE$TetrahedronGeometry(
							data.radius,
							data.detail
						);

						break;

					case 'RingGeometry':

						geometry = new RingGeometry.THREE$RingGeometry(
							data.innerRadius,
							data.outerRadius,
							data.thetaSegments,
							data.phiSegments,
							data.thetaStart,
							data.thetaLength
						);

						break;

					case 'TorusGeometry':

						geometry = new TorusGeometry.THREE$TorusGeometry(
							data.radius,
							data.tube,
							data.radialSegments,
							data.tubularSegments,
							data.arc
						);

						break;

					case 'TorusKnotGeometry':

						geometry = new TorusKnotGeometry.THREE$TorusKnotGeometry(
							data.radius,
							data.tube,
							data.radialSegments,
							data.tubularSegments,
							data.p,
							data.q,
							data.heightScale
						);

						break;

					case 'BufferGeometry':

						geometry = bufferGeometryLoader.parse( data );

						break;

					case 'Geometry':

						geometry = geometryLoader.parse( data.data, this.texturePath ).geometry;

						break;

					case 'TextGeometry':

						geometry = new TextGeometry.THREE$TextGeometry(
							data.text,
							data.data
						);

						break;

				}

				geometry.uuid = data.uuid;

				if ( data.name !== undefined ) geometry.name = data.name;

				geometries[ data.uuid ] = geometry;

			}

		}

		return geometries;

	},

	parseMaterials: function ( json, textures ) {

		var materials = {};

		if ( json !== undefined ) {

			var getTexture = function ( name ) {

				if ( textures[ name ] === undefined ) {

					console.warn( 'THREE.ObjectLoader: Undefined texture', name );

				}

				return textures[ name ];

			};

			var loader = new MaterialLoader.THREE$MaterialLoader();

			for ( var i = 0, l = json.length; i < l; i ++ ) {

				var data = json[ i ];
				var material = loader.parse( data );

				material.uuid = data.uuid;

				if ( data.depthTest !== undefined ) material.depthTest = data.depthTest;
				if ( data.depthWrite !== undefined ) material.depthWrite = data.depthWrite;

				if ( data.name !== undefined ) material.name = data.name;

				if ( data.map !== undefined ) material.map = getTexture( data.map );

				if ( data.alphaMap !== undefined ) {

					material.alphaMap = getTexture( data.alphaMap );
					material.transparent = true;

				}

				if ( data.bumpMap !== undefined ) material.bumpMap = getTexture( data.bumpMap );
				if ( data.bumpScale !== undefined ) material.bumpScale = data.bumpScale;

				if ( data.normalMap !== undefined ) material.normalMap = getTexture( data.normalMap );
				if ( data.normalScale )	material.normalScale = new Vector2.THREE$Vector2( data.normalScale, data.normalScale );

				if ( data.specularMap !== undefined ) material.specularMap = getTexture( data.specularMap );

				if ( data.envMap !== undefined ) {

					material.envMap = getTexture( data.envMap );
					material.combine = Three.THREE$MultiplyOperation;

				}

				if ( data.reflectivity ) material.reflectivity = data.reflectivity;

				if ( data.lightMap !== undefined ) material.lightMap = getTexture( data.lightMap );
				if ( data.lightMapIntensity !== undefined ) material.lightMapIntensity = data.lightMapIntensity;

				if ( data.aoMap !== undefined ) material.aoMap = getTexture( data.aoMap );
				if ( data.aoMapIntensity !== undefined ) material.aoMapIntensity = data.aoMapIntensity;

				materials[ data.uuid ] = material;

			}

		}

		return materials;

	},

	parseImages: function ( json, onLoad ) {

		var scope = this;
		var images = {};

		if ( json !== undefined && json.length > 0 ) {

			var manager = new LoadingManager.THREE$LoadingManager( onLoad );

			var loader = new ImageLoader.THREE$ImageLoader( manager );
			loader.setCrossOrigin( this.crossOrigin );

			var loadImage = function ( url ) {

				url = scope.texturePath + url;

				scope.manager.itemStart( url );

				return loader.load( url, function () {

					scope.manager.itemEnd( url );

				} );

			};

			for ( var i = 0, l = json.length; i < l; i ++ ) {

				var image = json[ i ];
				images[ image.uuid ] = loadImage( image.url );

			}

		}

		return images;

	},

	parseTextures: function ( json, images ) {

		function parseConstant( value ) {

			if ( typeof( value ) === 'number' ) return value;

			console.warn( 'THREE.ObjectLoader.parseTexture: Constant should be in numeric form.', value );

			return THREE[ value ];

		}

		var textures = {};

		if ( json !== undefined ) {

			for ( var i = 0, l = json.length; i < l; i ++ ) {

				var data = json[ i ];

				if ( data.image === undefined ) {

					console.warn( 'THREE.ObjectLoader: No "image" specified for', data.uuid );

				}

				if ( images[ data.image ] === undefined ) {

					console.warn( 'THREE.ObjectLoader: Undefined image', data.image );

				}

				var texture = new Texture.THREE$Texture( images[ data.image ] );
				texture.needsUpdate = true;

				texture.uuid = data.uuid;

				if ( data.name !== undefined ) texture.name = data.name;
				if ( data.mapping !== undefined ) texture.mapping = parseConstant( data.mapping );
				if ( data.repeat !== undefined ) texture.repeat = new Vector2.THREE$Vector2( data.repeat[ 0 ], data.repeat[ 1 ] );
				if ( data.minFilter !== undefined ) texture.minFilter = parseConstant( data.minFilter );
				if ( data.magFilter !== undefined ) texture.magFilter = parseConstant( data.magFilter );
				if ( data.anisotropy !== undefined ) texture.anisotropy = data.anisotropy;
				if ( Array.isArray( data.wrap ) ) {

					texture.wrapS = parseConstant( data.wrap[ 0 ] );
					texture.wrapT = parseConstant( data.wrap[ 1 ] );

				}

				textures[ data.uuid ] = texture;

			}

		}

		return textures;

	},

	parseObject: function () {

		var matrix = new Matrix4.THREE$Matrix4();

		return function ( data, geometries, materials ) {

			var object;

			var getGeometry = function ( name ) {

				if ( geometries[ name ] === undefined ) {

					console.warn( 'THREE.ObjectLoader: Undefined geometry', name );

				}

				return geometries[ name ];

			};

			var getMaterial = function ( name ) {

				if ( materials[ name ] === undefined ) {

					console.warn( 'THREE.ObjectLoader: Undefined material', name );

				}

				return materials[ name ];

			};

			switch ( data.type ) {

				case 'Scene':

					object = new Scene.THREE$Scene();

					break;

				case 'PerspectiveCamera':

					object = new PerspectiveCamera.THREE$PerspectiveCamera( data.fov, data.aspect, data.near, data.far );

					break;

				case 'OrthographicCamera':

					object = new OrthographicCamera.THREE$OrthographicCamera( data.left, data.right, data.top, data.bottom, data.near, data.far );

					break;

				case 'AmbientLight':

					object = new AmbientLight.THREE$AmbientLight( data.color );

					break;


				case 'AreaLight':

					object = new AreaLight.THREE$AreaLight( data.color, data.intensity );

					break;

				case 'DirectionalLight':

					object = new DirectionalLight.THREE$DirectionalLight( data.color, data.intensity );

					break;

				case 'PointLight':

					object = new PointLight.THREE$PointLight( data.color, data.intensity, data.distance, data.decay );

					break;

				case 'SpotLight':

					object = new SpotLight.THREE$SpotLight( data.color, data.intensity, data.distance, data.angle, data.exponent, data.decay );

					break;

				case 'HemisphereLight':

					object = new HemisphereLight.THREE$HemisphereLight( data.color, data.groundColor, data.intensity );

					break;

				case 'Mesh':

					object = new Mesh.THREE$Mesh( getGeometry( data.geometry ), getMaterial( data.material ) );

					break;

				case 'Line':

					object = new Line.THREE$Line( getGeometry( data.geometry ), getMaterial( data.material ), data.mode );

					break;

				case 'PointCloud':

					object = new PointCloud.THREE$PointCloud( getGeometry( data.geometry ), getMaterial( data.material ) );

					break;

				case 'Sprite':

					object = new Sprite.THREE$Sprite( getMaterial( data.material ) );

					break;

				case 'Group':

					object = new Group.THREE$Group();

					break;

				default:

					object = new Object3D.THREE$Object3D();

			}

			object.uuid = data.uuid;

			if ( data.name !== undefined ) object.name = data.name;
			if ( data.matrix !== undefined ) {

				matrix.fromArray( data.matrix );
				matrix.decompose( object.position, object.quaternion, object.scale );

			} else {

				if ( data.position !== undefined ) object.position.fromArray( data.position );
				if ( data.rotation !== undefined ) object.rotation.fromArray( data.rotation );
				if ( data.scale !== undefined ) object.scale.fromArray( data.scale );

			}

			if ( data.castShadow !== undefined ) object.castShadow = data.castShadow;
			if ( data.receiveShadow !== undefined ) object.receiveShadow = data.receiveShadow;

			if ( data.visible !== undefined ) object.visible = data.visible;
			if ( data.userData !== undefined ) object.userData = data.userData;

			if ( data.children !== undefined ) {

				for ( var child in data.children ) {

					object.add( this.parseObject( data.children[ child ], geometries, materials ) );

				}

			}

			return object;

		}

	}()

};