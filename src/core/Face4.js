import { Face3 } from './Face3';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function Face4 ( a, b, c, d, normal, color, materialIndex ) {
	this.isFace4 = true;

	console.warn( 'THREE.Face4 has been removed. A THREE.Face3 will be created instead.' );
	return new Face3( a, b, c, normal, color, materialIndex );

};


export { Face4 };