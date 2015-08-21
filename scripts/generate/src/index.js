import { lsrSync, readFileSync, rimrafSync, writeFileSync } from 'sander';
import { basename, dirname, extname, join, relative, resolve } from 'path';

import Module from './Module';
import createAlias from './utils/createAlias';
import isExport from './utils/isExport';

const srcDir = resolve( __dirname, '../../../three.js/src' );
const destDir = resolve( __dirname, '../../../src' );

export default function () {
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
				return `${alias} as ${alias.slice(6)}`;
			});

			const declaration = exports.length > 3 ?
				`export {\n  ${exports.join(',\n  ')}\n}` :
				`export { ${exports.join(', ')} }`;

			indexBlock.push( `${declaration} from '${relativePath}';` );
		}
	});

	writeFileSync( destDir, 'index.js', indexBlock.join( '\n' ) );
}
