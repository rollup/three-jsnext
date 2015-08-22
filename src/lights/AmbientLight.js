import { Object3D } from '../core/Object3D';
import { Light } from './Light';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function AmbientLight ( color ) {
	this.isAmbientLight = true;

	Light.call( this, color );

	this.type = 'AmbientLight';

};

AmbientLight.prototype = Object.create( Light.prototype );
AmbientLight.prototype.constructor = AmbientLight;

AmbientLight.prototype.clone = function () {

	var light = new AmbientLight();

	Light.prototype.clone.call( this, light );

	return light;

};

AmbientLight.prototype.toJSON = function ( meta ) {

	var data = Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();

	return data;

};


export { AmbientLight };