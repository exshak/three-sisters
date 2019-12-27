import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import { SiteMetadata } from '../common/siteMetadata'
import SocialLink from '../common/socialLink'

const NavBar = ({ isScrolled }) => {
  const { title, navigation, social } = SiteMetadata()

  return (
    <div css={HeaderStyles}>
      <div css={LogoStyles}>
        <SiteLogo isScrolled={isScrolled}>{title}</SiteLogo>
      </div>
      <div css={NavStyles}>
        {navigation.map((item, key) => (
          <li css={NavLinkStyles} className="nav-item">
            <Link
              key={key}
              to={item.to}
              className="nav-link"
              activeClassName="active"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </div>
      <div css={SocialStyles}>
        {social.map((link: any) => (
          <SocialLink {...link} />
        ))}
      </div>
    </div>
  )
}

export default NavBar

const HeaderStyles = css`
  display: flex;
  list-style: none;
`

const LogoStyles = css`
  align-items: center;
  display: flex;
  /* padding-left: 20px; */
  width: 20%;
`

const SiteLogo = styled.div`
  opacity: ${props => (!props.isScrolled ? 0 : 1)};
  transition: all 0.5s ease-in-out;
`

const NavStyles = css`
  display: flex;
  justify-content: center;
  width: 60%;
`

const SocialStyles = css`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 20%;
`

const NavLinkStyles = css`
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
`
