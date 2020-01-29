import { Location } from '@reach/router'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LogoSVG from '../../assets/icons/logo-full.svg'
import SocialMedia from '../common/socialMedia'
import {
  Button,
  Container,
  CustomLink,
  Group,
  GroupLinks,
  GroupParent,
  LogoFull,
  Nav,
  NavLinks,
  NavLogo,
  Socials,
} from './styles'

const NavBar = ({ scroll, subNav, title }) => {
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
            <LogoFull src={LogoSVG} alt={title} />
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
          <Socials>
            <SocialMedia />
          </Socials>
        </NavLinks>
        <Button onClick={handleMenuToggle}>
          {active ? <FaTimes /> : <FaBars />}
        </Button>
      </Container>
    </Nav>
  )
}

export default ({ scroll, subNav, title }) => (
  <Location>
    {route => (
      <NavBar scroll={scroll} subNav={subNav} title={title} {...route} />
    )}
  </Location>
)
