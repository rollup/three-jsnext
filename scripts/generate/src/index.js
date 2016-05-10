const { lsrSync, readFileSync, rimrafSync, writeFileSync } = require( 'sander' );
const { basename, dirname, extname, join, relative, resolve } = require( 'path' );

const Module = require( './Module' );
const createAlias = require( './utils/createAlias' );
const isExport = require( './utils/isExport' );

const srcDir = resolve( __dirname, '../../../three.js/src' );
const destDir = resolve( __dirname, '../../../src' );

module.exports = function () {
	rimrafSync( destDir );

	const files = lsrSync( srcDir ).filter( file => extname( file ) === '.js' ); // .glsl files must be handled differently

	// Scan files - parse them, and extract metadata
	let modules = files.map( file => {
		return new Module( join( srcDir, file ) );
	});

	// First, figure out which file exports what
	let pathByExportName = {};
	let exportNamesByPath = {};

	modules.forEach( module => {
		exportNamesByPath[ module.file ] = [];

		Object.keys( module.exports ).forEach( name => {
			if ( !!pathByExportName[ name ] ) {
				console.log( 'already exported %s: %s (in %s)', name, pathByExportName[ name ], module.file );
			}

			pathByExportName[ name ] = module.file;
			exportNamesByPath[ module.file ].push( name );
		});
	});

	modules.forEach( module => {
		const rendered = module.render({
			pathByExportName,
			exportNamesByPath
		});

		if ( rendered ) {
			writeFileSync( module.file.replace( srcDir, destDir ), rendered );
		}
	});

	// create index.js
	let indexBlock = [];

	Object.keys( exportNamesByPath ).map( path => {
		const names = exportNamesByPath[ path ]
			.filter( isExport );

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

			indexBlock.push( `${declaration} from '${relativePath}';` );
		}
	});

	writeFileSync( destDir, 'index.js', indexBlock.join( '\n' ) );
};
