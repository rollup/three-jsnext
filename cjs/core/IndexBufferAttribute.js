Object.defineProperty(exports, '__esModule', {
  value: true
});

var _BufferAttribute = require('./BufferAttribute');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$IndexBufferAttribute(array, itemSize) {
  this.isIndexBufferAttribute = true;

  _BufferAttribute.THREE$BufferAttribute.call(this, array, itemSize);
};

THREE$IndexBufferAttribute.prototype = Object.create(_BufferAttribute.THREE$BufferAttribute.prototype);
THREE$IndexBufferAttribute.prototype.constructor = THREE$IndexBufferAttribute;

exports.THREE$IndexBufferAttribute = THREE$IndexBufferAttribute;