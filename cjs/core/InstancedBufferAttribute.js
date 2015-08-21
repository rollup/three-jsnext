Object.defineProperty(exports, '__esModule', {
	value: true
});

var _DynamicBufferAttribute = require('./DynamicBufferAttribute');

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

function THREE$InstancedBufferAttribute(array, itemSize, meshPerAttribute, dynamic) {
	this.isInstancedBufferAttribute = true;

	_DynamicBufferAttribute.THREE$DynamicBufferAttribute.call(this, array, itemSize);

	this.dynamic = dynamic || false;
	this.meshPerAttribute = meshPerAttribute || 1;
};

THREE$InstancedBufferAttribute.prototype = Object.create(_DynamicBufferAttribute.THREE$DynamicBufferAttribute.prototype);
THREE$InstancedBufferAttribute.prototype.constructor = THREE$InstancedBufferAttribute;

THREE$InstancedBufferAttribute.prototype.clone = function () {

	return new THREE$InstancedBufferAttribute(new this.array.constructor(this.array), this.itemSize, this.meshPerAttribute, this.dynamic);
};

exports.THREE$InstancedBufferAttribute = THREE$InstancedBufferAttribute;