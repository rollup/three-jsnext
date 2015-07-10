import { THREE, THREE$warn } from '../../Three';
import { THREE$BoxGeometry } from './BoxGeometry';

/**
 * @author mrdoob / http://mrdoob.com/
 */


function THREE$CubeGeometry ( width, height, depth, widthSegments, heightSegments, depthSegments ) {

	THREE$warn( 'THREE.CubeGeometry has been renamed to THREE.BoxGeometry.' );
	return new THREE$BoxGeometry( width, height, depth, widthSegments, heightSegments, depthSegments );

 };


export { THREE$CubeGeometry };