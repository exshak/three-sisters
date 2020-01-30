import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import React from 'react'
import Container from '../../components/common/container'
import Content from '../../components/common/content'
import Layout from '../../components/layout'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({ title, body }) => (
  <Container skinny>
    <Title>{title}</Title>
    <Content source={body} />
  </Container>
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
      }
    }
  }
`

const Title = styled.h1`
  text-align: center;
`
