Object.defineProperty(exports, '__esModule', {
  value: true
});

var _objectsLineSegments = require('../../objects/LineSegments');

var _materialsLineBasicMaterial = require('../../materials/LineBasicMaterial');

var _geometriesEdgesGeometry = require('../geometries/EdgesGeometry');

/**
 * @author WestLangley / http://github.com/WestLangley
 * @param object THREE.Mesh whose geometry will be used
 * @param hex line color
 * @param thresholdAngle the minimum angle (in degrees),
 * between the face normals of adjacent faces,
 * that is required to render an edge. A value of 10 means
 * an edge is only rendered if the angle is at least 10 degrees.
 */

function THREE$EdgesHelper(object, hex, thresholdAngle) {
  this.isEdgesHelper = true;

  var color = hex !== undefined ? hex : 0xffffff;

  _objectsLineSegments.THREE$LineSegments.call(this, new _geometriesEdgesGeometry.THREE$EdgesGeometry(object.geometry, thresholdAngle), new _materialsLineBasicMaterial.THREE$LineBasicMaterial({ color: color }));

  this.matrix = object.matrixWorld;
  this.matrixAutoUpdate = false;
};

THREE$EdgesHelper.prototype = Object.create(_objectsLineSegments.THREE$LineSegments.prototype);
THREE$EdgesHelper.prototype.constructor = THREE$EdgesHelper;

exports.THREE$EdgesHelper = THREE$EdgesHelper;