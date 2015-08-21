Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mathColor = require('../math/Color');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$Fog(color, near, far) {
	this.isFog = true;

	this.name = '';

	this.color = new _mathColor.THREE$Color(color);

	this.near = near !== undefined ? near : 1;
	this.far = far !== undefined ? far : 1000;
};

THREE$Fog.prototype.clone = function () {

	return new THREE$Fog(this.color.getHex(), this.near, this.far);
};

exports.THREE$Fog = THREE$Fog;