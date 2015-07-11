import { THREE$BoxGeometry } from './BoxGeometry';
import { THREE$warn } from '../../Three';

/**
 * @author mrdoob / http://mrdoob.com/
 */


function THREE$CubeGeometry ( width, height, depth, widthSegments, heightSegments, depthSegments ) {
	this.isCubeGeometry = true;

	THREE$warn( 'THREE.CubeGeometry has been renamed to THREE.BoxGeometry.' );
	return new THREE$BoxGeometry( width, height, depth, widthSegments, heightSegments, depthSegments );

 };


export { THREE$CubeGeometry };