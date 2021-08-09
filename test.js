const HAS_REACT = /import\s+React\s+from\s+['"]react['"]/g


const str = `
import React from 'react'
import ReactDOM from 'react-dom'
`

console.log(HAS_REACT.test(str))
