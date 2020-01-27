import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Carousel from '../../components/carousel'
import Container from '../../components/common/container'
import Content from '../../components/common/content'
import Featured from '../../components/featured'
import Instagram from '../../components/instagram'
import Layout from '../../components/layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  carousel,
  featuredTitle,
  featured,
  section,
  instagramTitle,
  instagram,
}) => (
  <Fragment>
    <Carousel carousel={carousel} />

    <Container>
      <Featured title={featuredTitle} featured={featured} />
    </Container>

    <Container>
      <Content source={section} />
    </Container>

    <Container>
      <Instagram title={instagramTitle} instagram={instagram} />
    </Container>
  </Fragment>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page, instagram } }) => (
  <Layout meta={page.frontmatter.meta.title || page.frontmatter.title}>
    <HomePageTemplate {...page} {...page.frontmatter} instagram={instagram} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        title
        carousel {
          image
          alt
        }
        featuredTitle
        featured {
          image
          title
        }
        featuredImage
        section
        instagramTitle
      }
    }

    instagram: allInstaNode(
      sort: { fields: timestamp, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          original
          localFile {
            childImageSharp {
              fixed(width: 230, height: 230, quality: 80) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`
