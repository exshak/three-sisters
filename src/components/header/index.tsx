import { graphql, Link, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import LogoSVG from '../../assets/icons/logo.svg'
import NavBar from './navBar'
import { Logo, SiteHeader, SiteLogo } from './styles'

const Header = ({ siteTitle }) => {
  const { allProducts } = useStaticQuery(graphql`
    query HeaderQuery {
      allProducts: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "collections" } } }
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const subNav = {
    products: allProducts.hasOwnProperty('edges')
      ? allProducts.edges.map(({ node: { fields, frontmatter } }) => {
          return { ...fields, ...frontmatter }
        })
      : false,
  }

  const [navbarCollapse, setNavbarCollapse] = useState(false)

  useEffect(() => {
    const updateNavbarCollapse = () => {
      if (window.pageYOffset || document.body.scrollTop > 99) {
        setNavbarCollapse(true)
      } else if (window.pageYOffset || document.body.scrollTop < 100) {
        setNavbarCollapse(false)
      }
    }

    window.addEventListener('scroll', updateNavbarCollapse, { passive: true })

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarCollapse, {})
    }
  }, [])

  return (
    <SiteHeader>
      <SiteLogo scroll={navbarCollapse}>
        <Link to="/">
          <Logo src={LogoSVG} alt={siteTitle} />
        </Link>
      </SiteLogo>
      <NavBar scroll={navbarCollapse} subNav={subNav} />
    </SiteHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
