Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

var _objectsGroup = require('../objects/Group');

var _objectsSprite = require('../objects/Sprite');

var _objectsPointCloud = require('../objects/PointCloud');

var _objectsLine = require('../objects/Line');

var _objectsMesh = require('../objects/Mesh');

var _lightsHemisphereLight = require('../lights/HemisphereLight');

var _lightsSpotLight = require('../lights/SpotLight');

var _lightsPointLight = require('../lights/PointLight');

var _lightsDirectionalLight = require('../lights/DirectionalLight');

var _lightsAreaLight = require('../lights/AreaLight');

var _lightsAmbientLight = require('../lights/AmbientLight');

var _camerasOrthographicCamera = require('../cameras/OrthographicCamera');

var _camerasPerspectiveCamera = require('../cameras/PerspectiveCamera');

var _scenesScene = require('../scenes/Scene');

var _mathMatrix4 = require('../math/Matrix4');

var _mathVector2 = require('../math/Vector2');

var _texturesTexture = require('../textures/Texture');

var _ImageLoader = require('./ImageLoader');

var _LoadingManager = require('./LoadingManager');

var _Three = require('../Three');

var _MaterialLoader = require('./MaterialLoader');

var _extrasGeometriesTextGeometry = require('../extras/geometries/TextGeometry');

var _extrasGeometriesTorusKnotGeometry = require('../extras/geometries/TorusKnotGeometry');

var _extrasGeometriesTorusGeometry = require('../extras/geometries/TorusGeometry');

var _extrasGeometriesRingGeometry = require('../extras/geometries/RingGeometry');

var _extrasGeometriesTetrahedronGeometry = require('../extras/geometries/TetrahedronGeometry');

var _extrasGeometriesOctahedronGeometry = require('../extras/geometries/OctahedronGeometry');

var _extrasGeometriesIcosahedronGeometry = require('../extras/geometries/IcosahedronGeometry');

var _extrasGeometriesDodecahedronGeometry = require('../extras/geometries/DodecahedronGeometry');

var _extrasGeometriesSphereBufferGeometry = require('../extras/geometries/SphereBufferGeometry');

var _extrasGeometriesSphereGeometry = require('../extras/geometries/SphereGeometry');

var _extrasGeometriesCylinderGeometry = require('../extras/geometries/CylinderGeometry');

var _extrasGeometriesCircleGeometry = require('../extras/geometries/CircleGeometry');

var _extrasGeometriesCircleBufferGeometry = require('../extras/geometries/CircleBufferGeometry');

var _extrasGeometriesBoxGeometry = require('../extras/geometries/BoxGeometry');

var _BufferGeometryLoader = require('./BufferGeometryLoader');

var _JSONLoader = require('./JSONLoader');

var _XHRLoader = require('./XHRLoader');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$ObjectLoader(manager) {
	this.isObjectLoader = true;

	this.manager = manager !== undefined ? manager : _LoadingManager.THREE$DefaultLoadingManager;
	this.texturePath = '';
};

THREE$ObjectLoader.prototype = {

	constructor: THREE$ObjectLoader,

	load: function (url, onLoad, onProgress, onError) {

		if (this.texturePath === '') {

			this.texturePath = url.substring(0, url.lastIndexOf('/') + 1);
		}

		var scope = this;

		var loader = new _XHRLoader.THREE$XHRLoader(scope.manager);
		loader.setCrossOrigin(this.crossOrigin);
		loader.load(url, function (text) {

			scope.parse(JSON.parse(text), onLoad);
		}, onProgress, onError);
	},

	setTexturePath: function (value) {

		this.texturePath = value;
	},

	setCrossOrigin: function (value) {

		this.crossOrigin = value;
	},

	parse: function (json, onLoad) {

		var geometries = this.parseGeometries(json.geometries);

		var images = this.parseImages(json.images, function () {

			if (onLoad !== undefined) onLoad(object);
		});

		var textures = this.parseTextures(json.textures, images);
		var materials = this.parseMaterials(json.materials, textures);
		var object = this.parseObject(json.object, geometries, materials);

		if (json.images === undefined || json.images.length === 0) {

			if (onLoad !== undefined) onLoad(object);
		}

		return object;
	},

	parseGeometries: function (json) {

		var geometries = {};

		if (json !== undefined) {

			var geometryLoader = new _JSONLoader.THREE$JSONLoader();
			var bufferGeometryLoader = new _BufferGeometryLoader.THREE$BufferGeometryLoader();

			for (var i = 0, l = json.length; i < l; i++) {

				var geometry;
				var data = json[i];

				switch (data.type) {

					case 'PlaneGeometry':
					case 'PlaneBufferGeometry':

						geometry = new THREE[data.type](data.width, data.height, data.widthSegments, data.heightSegments);

						break;

					case 'BoxGeometry':
					case 'CubeGeometry':
						// backwards compatible

						geometry = new _extrasGeometriesBoxGeometry.THREE$BoxGeometry(data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments);

						break;

					case 'CircleBufferGeometry':

						geometry = new _extrasGeometriesCircleBufferGeometry.THREE$CircleBufferGeometry(data.radius, data.segments, data.thetaStart, data.thetaLength);

						break;

					case 'CircleGeometry':

						geometry = new _extrasGeometriesCircleGeometry.THREE$CircleGeometry(data.radius, data.segments, data.thetaStart, data.thetaLength);

						break;

					case 'CylinderGeometry':

						geometry = new _extrasGeometriesCylinderGeometry.THREE$CylinderGeometry(data.radiusTop, data.radiusBottom, data.height, data.radialSegments, data.heightSegments, data.openEnded, data.thetaStart, data.thetaLength);

						break;

					case 'SphereGeometry':

						geometry = new _extrasGeometriesSphereGeometry.THREE$SphereGeometry(data.radius, data.widthSegments, data.heightSegments, data.phiStart, data.phiLength, data.thetaStart, data.thetaLength);

						break;

					case 'SphereBufferGeometry':

						geometry = new _extrasGeometriesSphereBufferGeometry.THREE$SphereBufferGeometry(data.radius, data.widthSegments, data.heightSegments, data.phiStart, data.phiLength, data.thetaStart, data.thetaLength);

						break;

					case 'DodecahedronGeometry':

						geometry = new _extrasGeometriesDodecahedronGeometry.THREE$DodecahedronGeometry(data.radius, data.detail);

						break;

					case 'IcosahedronGeometry':

						geometry = new _extrasGeometriesIcosahedronGeometry.THREE$IcosahedronGeometry(data.radius, data.detail);

						break;

					case 'OctahedronGeometry':

						geometry = new _extrasGeometriesOctahedronGeometry.THREE$OctahedronGeometry(data.radius, data.detail);

						break;

					case 'TetrahedronGeometry':

						geometry = new _extrasGeometriesTetrahedronGeometry.THREE$TetrahedronGeometry(data.radius, data.detail);

						break;

					case 'RingGeometry':

						geometry = new _extrasGeometriesRingGeometry.THREE$RingGeometry(data.innerRadius, data.outerRadius, data.thetaSegments, data.phiSegments, data.thetaStart, data.thetaLength);

						break;

					case 'TorusGeometry':

						geometry = new _extrasGeometriesTorusGeometry.THREE$TorusGeometry(data.radius, data.tube, data.radialSegments, data.tubularSegments, data.arc);

						break;

					case 'TorusKnotGeometry':

						geometry = new _extrasGeometriesTorusKnotGeometry.THREE$TorusKnotGeometry(data.radius, data.tube, data.radialSegments, data.tubularSegments, data.p, data.q, data.heightScale);

						break;

					case 'BufferGeometry':

						geometry = bufferGeometryLoader.parse(data);

						break;

					case 'Geometry':

						geometry = geometryLoader.parse(data.data, this.texturePath).geometry;

						break;

					case 'TextGeometry':

						geometry = new _extrasGeometriesTextGeometry.THREE$TextGeometry(data.text, data.data);

						break;

				}

				geometry.uuid = data.uuid;

				if (data.name !== undefined) geometry.name = data.name;

				geometries[data.uuid] = geometry;
			}
		}

		return geometries;
	},

	parseMaterials: function (json, textures) {

		var materials = {};

		if (json !== undefined) {

			var getTexture = function (name) {

				if (textures[name] === undefined) {

					console.warn('THREE.ObjectLoader: Undefined texture', name);
				}

				return textures[name];
			};

			var loader = new _MaterialLoader.THREE$MaterialLoader();

			for (var i = 0, l = json.length; i < l; i++) {

				var data = json[i];
				var material = loader.parse(data);

				material.uuid = data.uuid;

				if (data.depthTest !== undefined) material.depthTest = data.depthTest;
				if (data.depthWrite !== undefined) material.depthWrite = data.depthWrite;

				if (data.name !== undefined) material.name = data.name;

				if (data.map !== undefined) material.map = getTexture(data.map);

				if (data.alphaMap !== undefined) {

					material.alphaMap = getTexture(data.alphaMap);
					material.transparent = true;
				}

				if (data.bumpMap !== undefined) material.bumpMap = getTexture(data.bumpMap);
				if (data.bumpScale !== undefined) material.bumpScale = data.bumpScale;

				if (data.normalMap !== undefined) material.normalMap = getTexture(data.normalMap);
				if (data.normalScale) material.normalScale = new _mathVector2.THREE$Vector2(data.normalScale, data.normalScale);

				if (data.specularMap !== undefined) material.specularMap = getTexture(data.specularMap);

				if (data.envMap !== undefined) {

					material.envMap = getTexture(data.envMap);
					material.combine = _Three.THREE$MultiplyOperation;
				}

				if (data.reflectivity) material.reflectivity = data.reflectivity;

				if (data.lightMap !== undefined) material.lightMap = getTexture(data.lightMap);
				if (data.lightMapIntensity !== undefined) material.lightMapIntensity = data.lightMapIntensity;

				if (data.aoMap !== undefined) material.aoMap = getTexture(data.aoMap);
				if (data.aoMapIntensity !== undefined) material.aoMapIntensity = data.aoMapIntensity;

				materials[data.uuid] = material;
			}
		}

		return materials;
	},

	parseImages: function (json, onLoad) {

		var scope = this;
		var images = {};

		if (json !== undefined && json.length > 0) {

			var manager = new _LoadingManager.THREE$LoadingManager(onLoad);

			var loader = new _ImageLoader.THREE$ImageLoader(manager);
			loader.setCrossOrigin(this.crossOrigin);

			var loadImage = function (url) {

				url = scope.texturePath + url;

				scope.manager.itemStart(url);

				return loader.load(url, function () {

					scope.manager.itemEnd(url);
				});
			};

			for (var i = 0, l = json.length; i < l; i++) {

				var image = json[i];
				images[image.uuid] = loadImage(image.url);
			}
		}

		return images;
	},

	parseTextures: function (json, images) {

		function parseConstant(value) {

			if (typeof value === 'number') return value;

			console.warn('THREE.ObjectLoader.parseTexture: Constant should be in numeric form.', value);

			return THREE[value];
		}

		var textures = {};

		if (json !== undefined) {

			for (var i = 0, l = json.length; i < l; i++) {

				var data = json[i];

				if (data.image === undefined) {

					console.warn('THREE.ObjectLoader: No "image" specified for', data.uuid);
				}

				if (images[data.image] === undefined) {

					console.warn('THREE.ObjectLoader: Undefined image', data.image);
				}

				var texture = new _texturesTexture.THREE$Texture(images[data.image]);
				texture.needsUpdate = true;

				texture.uuid = data.uuid;

				if (data.name !== undefined) texture.name = data.name;
				if (data.mapping !== undefined) texture.mapping = parseConstant(data.mapping);
				if (data.repeat !== undefined) texture.repeat = new _mathVector2.THREE$Vector2(data.repeat[0], data.repeat[1]);
				if (data.minFilter !== undefined) texture.minFilter = parseConstant(data.minFilter);
				if (data.magFilter !== undefined) texture.magFilter = parseConstant(data.magFilter);
				if (data.anisotropy !== undefined) texture.anisotropy = data.anisotropy;
				if (Array.isArray(data.wrap)) {

					texture.wrapS = parseConstant(data.wrap[0]);
					texture.wrapT = parseConstant(data.wrap[1]);
				}

				textures[data.uuid] = texture;
			}
		}

		return textures;
	},

	parseObject: (function () {

		var matrix = new _mathMatrix4.THREE$Matrix4();

		return function (data, geometries, materials) {

			var object;

			var getGeometry = function (name) {

				if (geometries[name] === undefined) {

					console.warn('THREE.ObjectLoader: Undefined geometry', name);
				}

				return geometries[name];
			};

			var getMaterial = function (name) {

				if (materials[name] === undefined) {

					console.warn('THREE.ObjectLoader: Undefined material', name);
				}

				return materials[name];
			};

			switch (data.type) {

				case 'Scene':

					object = new _scenesScene.THREE$Scene();

					break;

				case 'PerspectiveCamera':

					object = new _camerasPerspectiveCamera.THREE$PerspectiveCamera(data.fov, data.aspect, data.near, data.far);

					break;

				case 'OrthographicCamera':

					object = new _camerasOrthographicCamera.THREE$OrthographicCamera(data.left, data.right, data.top, data.bottom, data.near, data.far);

					break;

				case 'AmbientLight':

					object = new _lightsAmbientLight.THREE$AmbientLight(data.color);

					break;

				case 'AreaLight':

					object = new _lightsAreaLight.THREE$AreaLight(data.color, data.intensity);

					break;

				case 'DirectionalLight':

					object = new _lightsDirectionalLight.THREE$DirectionalLight(data.color, data.intensity);

					break;

				case 'PointLight':

					object = new _lightsPointLight.THREE$PointLight(data.color, data.intensity, data.distance, data.decay);

					break;

				case 'SpotLight':

					object = new _lightsSpotLight.THREE$SpotLight(data.color, data.intensity, data.distance, data.angle, data.exponent, data.decay);

					break;

				case 'HemisphereLight':

					object = new _lightsHemisphereLight.THREE$HemisphereLight(data.color, data.groundColor, data.intensity);

					break;

				case 'Mesh':

					object = new _objectsMesh.THREE$Mesh(getGeometry(data.geometry), getMaterial(data.material));

					break;

				case 'Line':

					object = new _objectsLine.THREE$Line(getGeometry(data.geometry), getMaterial(data.material), data.mode);

					break;

				case 'PointCloud':

					object = new _objectsPointCloud.THREE$PointCloud(getGeometry(data.geometry), getMaterial(data.material));

					break;

				case 'Sprite':

					object = new _objectsSprite.THREE$Sprite(getMaterial(data.material));

					break;

				case 'Group':

					object = new _objectsGroup.THREE$Group();

					break;

				default:

					object = new _coreObject3D.THREE$Object3D();

			}

			object.uuid = data.uuid;

			if (data.name !== undefined) object.name = data.name;
			if (data.matrix !== undefined) {

				matrix.fromArray(data.matrix);
				matrix.decompose(object.position, object.quaternion, object.scale);
			} else {

				if (data.position !== undefined) object.position.fromArray(data.position);
				if (data.rotation !== undefined) object.rotation.fromArray(data.rotation);
				if (data.scale !== undefined) object.scale.fromArray(data.scale);
			}

			if (data.castShadow !== undefined) object.castShadow = data.castShadow;
			if (data.receiveShadow !== undefined) object.receiveShadow = data.receiveShadow;

			if (data.visible !== undefined) object.visible = data.visible;
			if (data.userData !== undefined) object.userData = data.userData;

			if (data.children !== undefined) {

				for (var child in data.children) {

					object.add(this.parseObject(data.children[child], geometries, materials));
				}
			}

			return object;
		};
	})()

};

exports.THREE$ObjectLoader = THREE$ObjectLoader;