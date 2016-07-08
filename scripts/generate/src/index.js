const { lsrSync, readFileSync, rimrafSync, writeFileSync } = require( 'sander' );
const { basename, dirname, extname, join, relative, resolve } = require( 'path' );

const Module = require( './Module' );
const ConstantsModule = require( './ConstantsModule' );
const KeyframeTrackModule = require( './KeyframeTrackModule' );
const KeyframeTrackConstructorModule = require( './KeyframeTrackConstructorModule' );
const KeyframeTrackPrototypeModule = require( './KeyframeTrackPrototypeModule' );
const TrackModule = require( './TrackModule' );
const createAlias = require( './utils/createAlias' );
const isExport = require( './utils/isExport' );

const srcDir = resolve( __dirname, '../../../three.js/src' );
const destDir = resolve( __dirname, '../../../src' );

module.exports = function () {
	rimrafSync( destDir );

	const files = lsrSync( srcDir ).filter( file => {
		if ( !/\.js$/.test( file ) ) return false; // .glsl files must be handled differently
		if ( /Three\.Legacy\.js/.test( file ) ) return false;
		if ( /Three\.js/.test( file ) ) return false;
		if ( /animation\/KeyframeTrack\.js/.test( file ) ) return false;
		return true;
	});

	let prototypeChains = {};

	// Scan files - parse them, and extract metadata
	let modules = files.map( file => {
		file = join( srcDir, file );

		const module = /animation\/tracks/.test( file ) ?
			new TrackModule( file ) : // awkward special case...
			new Module( file );

		module.analyse( prototypeChains );
		return module;
	});

	// First, figure out which file exports what
	let pathByExportName = {};
	let exportNamesByPath = {};
	let moduleLookup = {};

	const constantsModule = new ConstantsModule( join( srcDir, 'Three.js' ) );

	// KeyframeTrack is a special (and highly awkward) case
	const keyframeTrackSrc = join( srcDir, 'animation/KeyframeTrack.js' );
	const keyframeTrackModule = new KeyframeTrackModule( keyframeTrackSrc );
	const keyframeTrackConstructorModule = new KeyframeTrackConstructorModule( keyframeTrackSrc );
	const keyframeTrackPrototypeModule = new KeyframeTrackPrototypeModule( keyframeTrackSrc );

	[ constantsModule, keyframeTrackModule, keyframeTrackConstructorModule, keyframeTrackPrototypeModule ].forEach( module => module.analyse( prototypeChains ) );

	modules.push( constantsModule, keyframeTrackModule, keyframeTrackConstructorModule, keyframeTrackPrototypeModule );

	modules.forEach( module => {
		exportNamesByPath[ module.file ] = [];

		Object.keys( module.exports ).forEach( name => {
			if ( !!pathByExportName[ name ] ) {
				console.log( 'already exported %s: %s (in %s)', name, pathByExportName[ name ], module.file );
			}

			pathByExportName[ name ] = module.file;
			exportNamesByPath[ module.file ].push( name );
		});

		moduleLookup[ module.file ] = module;
	});


	modules.forEach( module => {
		let rendered;

		try {
			rendered = module.render({
				pathByExportName,
				exportNamesByPath,
				prototypeChains
			});
		} catch ( err ) {
			console.log( 'module.file', module.file );
			console.log( 'module.constructor.name', module.constructor.name )
			throw err;
		}

		if ( rendered ) {
			writeFileSync( module.file.replace( srcDir, destDir ), rendered );
		}
	});

	// create index.js
	let indexBlock = [].concat(
		require( '../../../three.js/utils/build/includes/extras.json' ),
		require( '../../../three.js/utils/build/includes/common.json' )
	).reverse().map( path => {
		path = resolve( 'three.js', path );

		let names = exportNamesByPath[ path ];
		if ( !names ) return null;

		names = names.filter( isExport );

		if ( names.length ) {
			const relativePath = `./${relative( srcDir, path )}`;

			const exports = names.map( keypath => {
				const alias = createAlias( keypath );
				const exported = keypath.slice( 6 );

				return alias === exported ? alias : `${alias} as ${exported}`;
			});

			const declaration = exports.length > 3 ?
				`export {\n  ${exports.join(',\n  ')}\n}` :
				`export { ${exports.join(', ')} }`;

			return `${declaration} from '${relativePath}';`;
		}

		// AudioContext is a special case
		console.error( 'warning: no exports from ' + path );
	});

	indexBlock.push( `export * from './constants.js';` );

	writeFileSync( destDir, 'index.js', indexBlock.filter( Boolean ).join( '\n' ) );
};
