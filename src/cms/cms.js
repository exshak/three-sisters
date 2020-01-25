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
  <HomePageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('shop-page', ({ entry }) => (
  <ShopPageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('collections', ({ entry }) => (
  <ShopPageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('products', ({ entry }) => (
  <ProductTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
