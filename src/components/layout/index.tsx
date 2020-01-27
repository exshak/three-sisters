import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from '../common/siteMetadata'
import Footer from '../footer'
import Header from '../header'
import SEO from './seo'
import { globalStyle, Main, theme } from './styles'

const Layout = ({ meta, children }) => {
  const { title } = SiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <SEO title={meta} />
      <Header siteTitle={title} />
      <Main>{children}</Main>
      <Footer siteTitle={title} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  meta: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
