const sass = require('sass')
const path = require('path')

const sassPath = path.resolve(__dirname, './src/img/test.scss')

sass.render({
  file: sassPath,
  outFile: 'test_build.css',
  importer: url => {
    console.log(url, 'importer')
  }
}, (exception, result) => {
  console.log(result.css.toString())
})