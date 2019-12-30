import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Home = () => {
  const { backgrounds, gallery, instagram } = useStaticQuery(graphql`
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
      gallery: allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        limit: 0
      ) {
        nodes {
          childImageSharp {
            fluid(
              quality: 80
              maxWidth: 1920 # duotone: { highlight: "#000000", shadow: "#000000", opacity: 30 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      instagram: allInstaNode(
        sort: { fields: timestamp, order: DESC }
        limit: 10
      ) {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fixed(quality: 100, width: 240, height: 240) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    fade: true,
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
          <div style={{ position: 'relative' }}>
            {/* <h1 style={{ zIndex: 1, color: 'white', position: 'absolute' }}>
              Three Sisters
            </h1> */}
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
      <div css={GalleryStyles}>
        {gallery.nodes.map(node => (
          <div style={{ margin: '0 auto', padding: '8px' }}>
            <Link to={node.childImageSharp.fluid.src}>
              <Img
                fluid={node.childImageSharp.fluid}
                style={{
                  height: 200,
                  width: 280,
                }}
              />
            </Link>
          </div>
        ))}
      </div>
      {/* <hr style={{ margin: '0 auto', width: 1300 }} /> */}
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 500,
        }}
      >
        check out our Instagram
      </h2>
      <div css={InstagramStyles}>
        {instagram.edges.map(({ node }) => {
          const date = new Date(node.timestamp * 1000).toLocaleDateString(
            'us-EN'
          )
          return (
            <Item
              href={`https://www.instagram.com/p/${node.id}/`}
              key={node.id}
            >
              <Overlay />
              <Img fixed={node.localFile.childImageSharp.fixed} />
              <Content>
                <Title>{date}</Title>
              </Content>
            </Item>
          )
        })}
      </div>
    </div>
  )
}

export default Home

const GalleryStyles = css`
  /* display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
`

const InstagramStyles = css`
  /* display: grid;
  grid-gap: 10px;
grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease 0s;
  margin-bottom: 4px;
`
const Title = styled.div`
  color: white;
  font-weight: 700;
  font-size: 16px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transform: translateY(-45px);
  transition: all 0.4s ease 0s;
  opacity: 0;
`

const Item = styled.a`
  position: relative;
  overflow: hidden;
  margin: 8px;

  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
    ${Title} {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
`
