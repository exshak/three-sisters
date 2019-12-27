import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Home = () => {
  const { backgrounds, gallery } = useStaticQuery(graphql`
    query BackgroundSliders {
      backgrounds: allFile(
        filter: { relativeDirectory: { eq: "backgrounds" } }
      ) {
        nodes {
          childImageSharp {
            fluid(
              quality: 80
              maxWidth: 1920
              maxHeight: 800 # duotone: { highlight: "#000000", shadow: "#000000", opacity: 30 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 80, maxWidth: 300, maxHeight: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
  }

  return (
    <div>
      <Slider {...settings}>
        {backgrounds.nodes.map(node => (
          <div>
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
      <div css={GalleryStyles}>
        {gallery.nodes.map(node => (
          <div>
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

const GalleryStyles = css`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr;
`
