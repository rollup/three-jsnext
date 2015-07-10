import { THREE } from '../../Three';
import { THREE$Geometry } from '../../core/Geometry';
import { THREE$PlaneBufferGeometry } from './PlaneBufferGeometry';

/**
 * @author mrdoob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Plane.as
 */

function THREE$PlaneGeometry ( width, height, widthSegments, heightSegments ) {

	console.info( 'THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.' );

	THREE$Geometry.call( this );

	this.type = 'PlaneGeometry';

	this.parameters = {
		width: width,
		height: height,
		widthSegments: widthSegments,
		heightSegments: heightSegments
	};

	this.fromBufferGeometry( new THREE$PlaneBufferGeometry( width, height, widthSegments, heightSegments ) );

};

THREE$PlaneGeometry.prototype = Object.create( THREE$Geometry.prototype );
THREE$PlaneGeometry.prototype.constructor = THREE$PlaneGeometry;


export { THREE$PlaneGeometry };