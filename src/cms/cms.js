import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import React from 'react'
import { AboutPageTemplate } from '../templates/aboutPage'
import { ContactPageTemplate } from '../templates/contactPage'
import { DefaultPageTemplate } from '../templates/defaultPage'
import { HomePageTemplate } from '../templates/homePage'
import { ProductTemplate } from '../templates/product'
import { ShopPageTemplate } from '../templates/shopPage'
import './utils'

class CSSInjector extends React.Component {
  constructor() {
    super()
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHead = iframe.contentDocument.head
    this.cache = createCache({ container: iframeHead })
  }

  render() {
    return (
      <CacheProvider value={this.cache}>{this.props.children}</CacheProvider>
    )
  }
}

CMS.registerMediaLibrary(uploadcare)

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <CSSInjector>
    <HomePageTemplate {...entry.toJS().data} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('shop-page', ({ entry }) => (
  <CSSInjector>
    <ShopPageTemplate {...entry.toJS().data} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('collections', ({ entry }) => (
  <CSSInjector>
    <ShopPageTemplate {...entry.toJS().data} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('products', ({ entry }) => (
  <CSSInjector>
    <ProductTemplate {...entry.toJS().data} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <CSSInjector>
    <AboutPageTemplate {...entry.toJS().data} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <CSSInjector>
    <ContactPageTemplate {...entry.toJS().data} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <CSSInjector>
    <DefaultPageTemplate {...entry.toJS().data} />
  </CSSInjector>
))
