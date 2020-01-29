import styled from '@emotion/styled'
import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SiteMetadata } from '../common/siteMetadata'

const SocialMedia = () => {
  const { social } = SiteMetadata()

  return (
    <Container>
      {social.map(({ link, site }, i) => (
        <List key={link + i}>
          <Link
            aria-label={`Visit ${link}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site === 'facebook' && <FaFacebookF />}
            {site === 'instagram' && <FaInstagram />}
            {site === 'email' && <FaEnvelope />}
          </Link>
        </List>
      ))}
    </Container>
  )
}

export default SocialMedia

const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

const List = styled.li`
  padding: 0 0.5rem;
`

const Link = styled.a`
  svg {
    height: 20px;
    width: 20px;
  }
`
