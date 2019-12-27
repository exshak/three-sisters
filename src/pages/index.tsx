import React from 'react'
import Home from '../components/home'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'

export default () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)
