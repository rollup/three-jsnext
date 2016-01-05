/**
 * @author mrdoob / http://mrdoob.com/
 */

function Uniform ( type, value ) {
	this.isUniform = true;

	this.type = type;
	this.value = value;

	this.dynamic = false;

};

Uniform.prototype = {

	constructor: Uniform,

	onUpdate: function ( callback ) {

		this.dynamic = true;
		this.onUpdateCallback = callback;

		return this;

	}

};


export { Uniform };