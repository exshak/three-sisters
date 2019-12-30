import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import NavBar from './navBar'

const Header = ({ siteTitle }) => {
  const [navbarColor, setNavbarColor] = useState(false)
  const [navbarCollapse, setNavbarCollapse] = useState(false)

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
  }

  useEffect(() => {
    const updateNavbarColor = () => {
      if (window.pageYOffset || document.body.scrollTop > 99) {
        setNavbarColor(true)
      } else if (window.pageYOffset || document.body.scrollTop < 100) {
        setNavbarColor(false)
      }
    }

    window.addEventListener('scroll', updateNavbarColor, { passive: true })

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor, { passive: true })
    }
  }, [])

  return (
    <header>
      <div css={HeaderStyles}>
        <div style={{ margin: '0 auto', maxWidth: '1300px' }}>
          {/* <h1 css={TitleStyles}> */}
          <TitleLogo isScrolled={navbarColor}>
            <Link to="/">{siteTitle}</Link>
          </TitleLogo>
          {/* </h1> */}
          <NavBar isScrolled={navbarColor} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderStyles = theme => css`
  background: ${theme.colors.white};
  /* background: white; */
  text-align: center;
  text-transform: uppercase;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 20px 40px;
  z-index: 1;
`

const TitleStyles = css`
  font-weight: 400;
  letter-spacing: 0.1em;
  padding: 20px;
`

const TitleLogo = styled.h1`
  @-webkit-keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(-100%);
    }
  }

  opacity: ${props => (props.isScrolled ? 0 : 1)};
  height: ${props => props.isScrolled && 0};
  visibility: ${props => (props.isScrolled ? 'hidden' : 'visible')};
  font-weight: 400;
  letter-spacing: 0.1em;
  padding: 20px;
  display: ${props => props.isScrolled && 'none'};
  /* animation: ${props => props.isScrolled && 'slide-down 3s ease-out'}; */
  transition: opacity 0.5s ease-in-out, height 0.5s ease-in-out, visibility, 0.5s ease-in-out;
`
