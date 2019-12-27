import { css } from '@emotion/core'
import React from 'react'
import { SiteMetadata } from '../common/siteMetadata'
import SocialLink from '../common/socialLink'

const Footer = ({ siteTitle, siteAuthor }) => {
  const { social } = SiteMetadata()

  return (
    <footer>
      <div css={FooterStyles}>
        <hr />
        <ul css={SocialStyles}>
          {social.map((link: any) => (
            <SocialLink {...link} />
          ))}
        </ul>
        <div css={CopyrightStyles}>
          Copyright © {new Date().getFullYear()}, {siteTitle} by {siteAuthor}
        </div>
      </div>
    </footer>
  )
}

export default Footer

const FooterStyles = css`
  text-align: center;
`

const SocialStyles = css`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 40px;
`

const CopyrightStyles = css`
  padding: 20px;
`
