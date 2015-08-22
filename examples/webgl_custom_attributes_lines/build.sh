( cd "$( dirname "${BASH_SOURCE[0]}" )"
	rollup -i main.js -o bundle.js -f iife
	uglifyjs -c -m -o bundle.min.js -- bundle.js
)
