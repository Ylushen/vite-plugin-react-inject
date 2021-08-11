const fs = require('fs')

const HAS_REACT = /import([{}\s\w_,*]+)React([{}\s\w_,*]+)from\s+['"]react['"]/

const DEFAULT_OPTIONS = {
	includes: /src/,
	external: /node_modules/,
	test: /.jsx?$/,
}

function injectReact(options) {
	options = Object.assign({}, DEFAULT_OPTIONS, options)

	return {
		name: 'vite-plugin-react-inject', // 必须的，将会在 warning 和 error 中显示
		load(id) {
			if (options.external.test(id)) return
			if (!options.test.test(id)) return
			let content = fs.readFileSync(id, 'utf-8')
			if (HAS_REACT.test(content)) return content
			content = `import React from 'react'\n` + content
			return content
		}
	}
}

export default injectReact

