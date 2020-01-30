import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Container from '../../components/common/container'
import Content from '../../components/common/content'
import Layout from '../../components/layout'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({ title, body }) => (
  <Fragment>
    <Container>
      <Title>{title}</Title>
      <Content source={body} />
    </Container>
  </Fragment>
)

const DefaultPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta.title || page.frontmatter.title}>
    <DefaultPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
      }
    }
  }
`

const Title = styled.h1`
  text-align: center;
`
