// npm
import React from 'react'
import { Link } from 'gatsby'
import { useColorMode } from 'theme-ui'


// self
import Head from './head'

export default (props) => {
const [colorMode, setColorMode] = useColorMode()

return (
  <>
    <Head {...props} />
    <h1><Link to="/" >My own ham</Link></h1>

      <button
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>



    {props.children}
  </>
)
}

