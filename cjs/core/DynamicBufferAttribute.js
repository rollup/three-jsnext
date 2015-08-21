Object.defineProperty(exports, '__esModule', {
  value: true
});

var _BufferAttribute = require('./BufferAttribute');

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$DynamicBufferAttribute(array, itemSize) {
  this.isDynamicBufferAttribute = true;

  _BufferAttribute.THREE$BufferAttribute.call(this, array, itemSize);

  this.updateRange = { offset: 0, count: -1 };
};

THREE$DynamicBufferAttribute.prototype = Object.create(_BufferAttribute.THREE$BufferAttribute.prototype);
THREE$DynamicBufferAttribute.prototype.constructor = THREE$DynamicBufferAttribute;

exports.THREE$DynamicBufferAttribute = THREE$DynamicBufferAttribute;