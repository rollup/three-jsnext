import { THREE$Texture } from './Texture';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$CanvasTexture ( canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
	this.isCanvasTexture = true;

	THREE$Texture.call( this, canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.needsUpdate = true;

};

THREE$CanvasTexture.prototype = Object.create( THREE$Texture.prototype );
THREE$CanvasTexture.prototype.constructor = THREE$CanvasTexture;


export { THREE$CanvasTexture };