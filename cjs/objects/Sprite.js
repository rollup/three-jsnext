Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

var _mathVector3 = require('../math/Vector3');

var _materialsSpriteMaterial = require('../materials/SpriteMaterial');

var _coreBufferAttribute = require('../core/BufferAttribute');

var _coreIndexBufferAttribute = require('../core/IndexBufferAttribute');

var _coreBufferGeometry = require('../core/BufferGeometry');

var THREE$Particle;
var THREE$Sprite;

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

exports.THREE$Sprite = THREE$Sprite = (function () {

	var indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
	var vertices = new Float32Array([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0]);
	var uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);

	var geometry = new _coreBufferGeometry.THREE$BufferGeometry();
	geometry.addAttribute('index', new _coreIndexBufferAttribute.THREE$IndexBufferAttribute(indices, 1));
	geometry.addAttribute('position', new _coreBufferAttribute.THREE$BufferAttribute(vertices, 3));
	geometry.addAttribute('uv', new _coreBufferAttribute.THREE$BufferAttribute(uvs, 2));

	return function Sprite(material) {

		_coreObject3D.THREE$Object3D.call(this);

		this.type = 'Sprite';

		this.geometry = geometry;
		this.material = material !== undefined ? material : new _materialsSpriteMaterial.THREE$SpriteMaterial();
	};
})();

THREE$Sprite.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$Sprite.prototype.constructor = THREE$Sprite;

THREE$Sprite.prototype.raycast = (function () {

	var matrixPosition = new _mathVector3.THREE$Vector3();

	return function raycast(raycaster, intersects) {

		matrixPosition.setFromMatrixPosition(this.matrixWorld);

		var distanceSq = raycaster.ray.distanceSqToPoint(matrixPosition);
		var guessSizeSq = this.scale.x * this.scale.y;

		if (distanceSq > guessSizeSq) {

			return;
		}

		intersects.push({

			distance: Math.sqrt(distanceSq),
			point: this.position,
			face: null,
			object: this

		});
	};
})();

THREE$Sprite.prototype.clone = function () {

	return new this.constructor(this.material).copy(this);
};

THREE$Sprite.prototype.toJSON = function (meta) {

	var data = _coreObject3D.THREE$Object3D.prototype.toJSON.call(this, meta);

	// only serialize if not in meta materials cache
	if (meta.materials[this.material.uuid] === undefined) {

		meta.materials[this.material.uuid] = this.material.toJSON();
	}

	data.object.material = this.material.uuid;

	return data;
};

// Backwards compatibility

exports.THREE$Particle = THREE$Particle = THREE$Sprite;

exports.THREE$Particle = THREE$Particle;
exports.THREE$Sprite = THREE$Sprite;