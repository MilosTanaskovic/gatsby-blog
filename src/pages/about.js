import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="Your description" />
    </>
)

export default about