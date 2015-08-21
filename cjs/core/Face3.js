Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mathColor = require('../math/Color');

var _mathVector3 = require('../math/Vector3');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$Face3(a, b, c, normal, color, materialIndex) {
	this.isFace3 = true;

	this.a = a;
	this.b = b;
	this.c = c;

	this.normal = normal && normal.isVector3 ? normal : new _mathVector3.THREE$Vector3();
	this.vertexNormals = Array.isArray(normal) ? normal : [];

	this.color = color && color.isColor ? color : new _mathColor.THREE$Color();
	this.vertexColors = Array.isArray(color) ? color : [];

	this.vertexTangents = [];

	this.materialIndex = materialIndex !== undefined ? materialIndex : 0;
};

THREE$Face3.prototype = {

	constructor: THREE$Face3,

	clone: function () {

		return new this.constructor().copy(this);
	},

	copy: function (source) {

		this.a = source.a;
		this.b = source.b;
		this.c = source.c;

		this.normal.copy(source.normal);
		this.color.copy(source.color);

		this.materialIndex = source.materialIndex;

		for (var i = 0, il = source.vertexNormals.length; i < il; i++) {

			this.vertexNormals[i] = source.vertexNormals[i].clone();
		}

		for (var i = 0, il = source.vertexColors.length; i < il; i++) {

			this.vertexColors[i] = source.vertexColors[i].clone();
		}

		for (var i = 0, il = source.vertexTangents.length; i < il; i++) {

			this.vertexTangents[i] = source.vertexTangents[i].clone();
		}

		return this;
	}

};

exports.THREE$Face3 = THREE$Face3;