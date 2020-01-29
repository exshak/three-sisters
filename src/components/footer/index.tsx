import PropTypes from 'prop-types'
import React from 'react'
import SocialMedia from '../common/socialMedia'
import { SiteFooter, SubTitle } from './styles'

const Footer = ({ siteTitle }) => (
  <SiteFooter>
    <SubTitle>Follow Us</SubTitle>
    <SocialMedia />
    Copyright © {new Date().getFullYear()}, {siteTitle}
  </SiteFooter>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
