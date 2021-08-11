const PATH_TEST = /url\(['"]([^)]+)['"]\)/g

const dataUrlRE = /^\s*data:/i
const isDataUrl = url => dataUrlRE.test(url)
const isImage = /^[.\/]+img\//

let str = `
body {
  font-size: 20px;
  background-image: url("@/img/login-intranet.png");
}

body {
  font-size: 20px;
  background-image: url("../../img/login-intranet.png");
}

body {
  font-size: 20px;
  background-image: url("../img/login-intranet.png");
}
`

str = str.replace(PATH_TEST, (str, $1) => {
  if (isDataUrl($1) || $1.startsWith('@')) return str
  console.log(str, $1)
  const newUrl = $1.replace(isImage, '@/img/')
  return str.replace($1, newUrl)
})

console.log(str)
