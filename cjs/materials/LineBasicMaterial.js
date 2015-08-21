Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Material = require('./Material');

var _Three = require('../Three');

var _mathColor = require('../math/Color');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  linewidth: <float>,
 *  linecap: "round",
 *  linejoin: "round",
 *
 *  vertexColors: <bool>
 *
 *  fog: <bool>
 * }
 */

function THREE$LineBasicMaterial(parameters) {
  this.isLineBasicMaterial = true;

  _Material.THREE$Material.call(this);

  this.type = 'LineBasicMaterial';

  this.color = new _mathColor.THREE$Color(0xffffff);

  this.linewidth = 1;
  this.linecap = 'round';
  this.linejoin = 'round';

  this.vertexColors = _Three.THREE$NoColors;

  this.fog = true;

  this.setValues(parameters);
};

THREE$LineBasicMaterial.prototype = Object.create(_Material.THREE$Material.prototype);
THREE$LineBasicMaterial.prototype.constructor = THREE$LineBasicMaterial;

THREE$LineBasicMaterial.prototype.copy = function (source) {

  _Material.THREE$Material.prototype.copy.call(this, source);

  this.color.copy(source.color);

  this.linewidth = source.linewidth;
  this.linecap = source.linecap;
  this.linejoin = source.linejoin;

  this.vertexColors = source.vertexColors;

  this.fog = source.fog;

  return this;
};

exports.THREE$LineBasicMaterial = THREE$LineBasicMaterial;