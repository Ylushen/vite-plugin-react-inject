const HAS_REACT = /import([{}\s\w_,*]+)React([{}\s\w_,*]+)from\s+['"]react['"]/


const str = `
import React from 'react'
import ReactDOM from 'react-dom'
`

const str2 = `
import {useState}, React from 'react'
import ReactDOM from 'react-dom'
`

const str3 = `
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
`

;[str, str2, str3].forEach(str => {
	console.log(HAS_REACT.exec(str))
})

