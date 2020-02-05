import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Container from '../../components/common/container'
import Content from '../../components/common/content'
import Image from '../../components/common/image'
import Layout from '../../components/layout'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({ title, body, featuredImage }) => (
  <Fragment>
    <Container center skinny>
      <Title>{title}</Title>
      <Logo>
        <Image
          src={featuredImage}
          alt={title}
          background
          size="cover"
          resolutions="small"
        />
      </Logo>
      <Content source={body} />
    </Container>
  </Fragment>
)

// Export Default AboutPage for front-end
const AboutPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta.title || page.frontmatter.title}>
    <AboutPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        template
        title
        featuredImage
      }
    }
  }
`

const Title = styled.h1`
  text-align: center;
`

const Logo = styled.div`
  height: 20rem;
  position: relative;
  width: 20rem;
`
