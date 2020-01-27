import { Location } from '@reach/router'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LogoSVG from '../../assets/icons/logo-full.svg'
import { SiteMetadata } from '../common/siteMetadata'
import SocialLink from '../common/socialLink'
import {
  Button,
  Container,
  CustomLink,
  Group,
  GroupLinks,
  GroupParent,
  Logo,
  Nav,
  NavLinks,
  NavLogo,
  Social,
} from './styles'

const NavBar = ({ scroll, subNav }) => {
  const { title, social } = SiteMetadata()
  const [active, setActive] = useState(false)
  const [activeSubNav, setActiveSubNav] = useState('')

  const handleMenuToggle = () => setActive(!active)

  const handleLinkClick = () => active && handleMenuToggle()

  const toggleSubNav = subNav =>
    setActiveSubNav(activeSubNav === subNav ? false : subNav)

  const NavLink = ({ to, children, ...props }) => (
    <CustomLink
      to={to}
      activeClassName="active"
      onClick={handleLinkClick}
      {...props}
    >
      {children}
    </CustomLink>
  )

  return (
    <Nav active={active}>
      <Container scroll={scroll}>
        <NavLogo scroll={scroll}>
          <Link to="/" onClick={handleLinkClick}>
            <Logo src={LogoSVG} alt={title} />
          </Link>
        </NavLogo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <Group subnav={activeSubNav}>
            <GroupParent onClick={() => toggleSubNav('products')}>
              Shop
            </GroupParent>
            <GroupLinks>
              <NavLink to="/shop/" sublink="true">
                All Products
              </NavLink>
              {subNav.products.map(({ slug, title }, i) => (
                <NavLink to={slug} key={'subnav-link-' + i} sublink="true">
                  {title}
                </NavLink>
              ))}
            </GroupLinks>
          </Group>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
          <Social>
            {social.map((link, i) => (
              <SocialLink key={link.site + i} {...link} />
            ))}
          </Social>
        </NavLinks>
        <Button onClick={handleMenuToggle}>
          {active ? <FaTimes /> : <FaBars />}
        </Button>
      </Container>
    </Nav>
  )
}

export default ({ scroll, subNav }) => (
  <Location>
    {route => <NavBar scroll={scroll} subNav={subNav} {...route} />}
  </Location>
)
