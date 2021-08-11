const fs = require('fs')
const sass = require('sass')

const PATH_TEST = /url\(['"]([^)]+)['"]\)/g
const dataUrlRE = /^\s*data:/i

const isDataUrl = url => dataUrlRE.test(url)
const imageRE = /^[.\/]+img\//

const DEFAULT_OPTIONS = {
  includes: /src/,
  external: /node_modules/,
  test: /.scss$/,
}

function replaceScssUrl(content, options) {
  options = Object.assign({}, DEFAULT_OPTIONS, options)

  return {
    name: 'vite-plugin-scss-url', // 必须的，将会在 warning 和 error 中显示
    resolveId(id) {
      console.log('idididid', id)
      if (!options.test.test(id)) return id
      return id.replace(options.test.test, 'css')
    },
    async load(id) {
      if (options.external.test(id)) return
      if (!options.test.test(id)) return
      let content = await loadSass({ file: id })
      if (!PATH_TEST.test(content)) return content
      content = content.replace(PATH_TEST, (str, $1) => {
        if (isDataUrl($1) || $1.startsWith('@')) return str
        const newUrl = $1.replace(imageRE, '@/img/')
        return str.replace($1, newUrl)
      })
      return content
    }
  }
}

/**
 * @param options
 * @return {Promise<Object>}
 */
const loadSass = (options) => {
  return new Promise((resolve, reject) => {
    sass.render(options, (error, result) => {
      if (error) reject(error)
      resolve(result.css.toString())
    })
  })
}

export default replaceScssUrl

