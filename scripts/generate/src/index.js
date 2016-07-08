const { lsrSync, readFileSync, rimrafSync, writeFileSync } = require( 'sander' );
const { basename, dirname, extname, join, relative, resolve } = require( 'path' );

const Module = require( './Module' );
const ConstantsModule = require( './ConstantsModule' );
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
		return true;
	});

	let prototypeChains = {};

	// Scan files - parse them, and extract metadata
	let modules = files.map( file => {
		const module = new Module( join( srcDir, file ) );

		module.analyse( prototypeChains );
		return module;
	});

	// First, figure out which file exports what
	let pathByExportName = {};
	let exportNamesByPath = {};
	let moduleLookup = {};

	const constantsModule = new ConstantsModule( join( srcDir, 'Three.js' ) );
	constantsModule.analyse();

	modules.concat( constantsModule ).forEach( module => {
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


	// TEMP discover mutual strong dependencies
	modules.forEach( module => {

		function testKeypath ( keypath ) {
			const path = pathByExportName[ keypath ];
			const module = moduleLookup[ path ];

			if ( !module ) {
				console.log( keypath )
			}
		}

		Object.keys( module.strongDeps ).forEach( testKeypath );
	});


	modules.forEach( module => {
		const rendered = module.render({
			pathByExportName,
			exportNamesByPath,
			prototypeChains
		});

		if ( rendered ) {
			writeFileSync( module.file.replace( srcDir, destDir ), rendered );
		}
	});

	// create constants
	writeFileSync( destDir, 'constants.js', constantsModule.render() );

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
