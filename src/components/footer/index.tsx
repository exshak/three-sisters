import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from '../common/siteMetadata'
import SocialLink from '../common/socialLink'
import { SiteFooter, SocialList, SubTitle } from './styles'

const Footer = ({ siteTitle }) => {
  const { social } = SiteMetadata()

  return (
    <SiteFooter>
      <SubTitle>Follow Us</SubTitle>
      <SocialList>
        {social.map((link, i) => (
          <SocialLink key={'link-' + i} {...link} />
        ))}
      </SocialList>
      Copyright © {new Date().getFullYear()}, {siteTitle}
    </SiteFooter>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
