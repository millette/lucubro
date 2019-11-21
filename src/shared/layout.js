// npm
import React from 'react'
import { Link } from 'gatsby'

// self
import Head from './head'

export default (props) => (
  <>
    <Head {...props} />
    <h1><Link to="/" >My own ham</Link></h1>
    {props.children}
  </>
)
