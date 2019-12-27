import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from '../common/siteMetadata'
import Footer from '../footer'
import Header from '../header'
import { globalStyle, Main, theme } from './styles'
// import './layout.css'

const Layout = ({ children }) => {
  const { title, author } = SiteMetadata()

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Header siteTitle={title} />
        <Main>{children}</Main>
        <Footer siteTitle={title} siteAuthor={author} />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
