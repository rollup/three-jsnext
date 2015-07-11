import './fonts/helvetiker_bold.typeface.es6';
import {
	PerspectiveCamera,
	Scene,
	Color,
	ShaderMaterial,
	AdditiveBlending,
	TextGeometry,
	BufferGeometry,
	Float32Attribute,
	Line,
	WebGLRenderer
} from '../../src/index';

var renderer, scene, camera, stats;

var object, uniforms;

init();
animate();

function init() {

	camera = new PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 400;

	scene = new Scene();

	uniforms = {

		amplitude: { type: "f", value: 5.0 },
		opacity:   { type: "f", value: 0.3 },
		color:     { type: "c", value: new Color( 0xff0000 ) }

	};

	var shaderMaterial = new ShaderMaterial( {

		uniforms:       uniforms,
		attributes:     [ 'displacement', 'customColor' ],
		vertexShader:   document.getElementById( 'vertexshader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
		blending:       AdditiveBlending,
		depthTest:      false,
		transparent:    true

	});

	var geometry = new TextGeometry( 'three.js', {

		size: 50,
		height: 15,
		curveSegments: 10,

		font: 'helvetiker',
		weight: 'bold',
		style: 'normal',

		bevelThickness: 5,
		bevelSize: 1.5,
		bevelEnabled: true,
		bevelSegments: 10,

		steps: 40

	});

	geometry.center();

	var vertices = geometry.vertices;

	var buffergeometry = new BufferGeometry();

	var position = new Float32Attribute( vertices.length * 3, 3 ).copyVector3sArray( vertices );
	buffergeometry.addAttribute( 'position', position )

	var displacement = new Float32Attribute( vertices.length * 3, 3 );
	buffergeometry.addAttribute( 'displacement', displacement );

	var customColor = new Float32Attribute( vertices.length * 3, 3 );
	buffergeometry.addAttribute( 'customColor', customColor );

	var color = new Color( 0xffffff );

	for( var i = 0, l = customColor.count; i < l; i ++ ) {

		color.setHSL( i / l, 0.5, 0.5 );
		color.toArray( customColor.array, i * customColor.itemSize );

	}

	object = new Line( buffergeometry, shaderMaterial );
	object.rotation.x = 0.2;
	scene.add( object );

	renderer = new WebGLRenderer( { antialias: true } );
	renderer.setClearColor( 0x050505 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	var container = document.getElementById( 'container' );
	container.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	render();
	stats.update();

}

function render() {

	var time = Date.now() * 0.001;

	object.rotation.y = 0.25 * time;

	uniforms.amplitude.value = Math.sin( 0.5 * time );
	uniforms.color.value.offsetHSL( 0.0005, 0, 0 );

	var attributes = object.geometry.attributes;
	var array = attributes.displacement.array;

	for ( var i = 0, l = array.length; i < l; i += 3 ) {

		array[ i     ] += 0.3 * ( 0.5 - Math.random() );
		array[ i + 1 ] += 0.3 * ( 0.5 - Math.random() );
		array[ i + 2 ] += 0.3 * ( 0.5 - Math.random() );

	}

	attributes.displacement.needsUpdate = true;

	renderer.render( scene, camera );

}
