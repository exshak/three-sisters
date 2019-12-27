import { css } from '@emotion/core'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialLink = ({ link, site }) => {
  return (
    <li css={SocialStyles}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {site === 'facebook' && <FaFacebookF css={LinkStyles} />}
        {site === 'instagram' && <FaInstagram css={LinkStyles} />}
        {site === 'twitter' && <FaTwitter css={LinkStyles} />}
      </a>
    </li>
  )
}

export default SocialLink

const SocialStyles = css`
  padding: 0 0.5rem;
`

const LinkStyles = css`
  height: 20px;
  width: 20px;
`
