var fs = require( 'fs' );
var path = require( 'path' );

var version = require( '../three.js/package.json' ).version;
var pkg = require( '../package.json' );

pkg.version = version;

fs.writeFileSync( path.resolve( __dirname, '../package.json' ), JSON.stringify( pkg, null, '  ' ) );
