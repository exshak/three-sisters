import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Container from '../../components/common/container'
import Content from '../../components/common/content'
import Layout from '../../components/layout'
import { Contact, Details, Form, Title } from './styles'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({ title, body }) => (
  <Fragment>
    <Container skinny>
      <Contact>
        <Details>
          <Title>{title}</Title>
          <Content source={body} />
        </Details>
        <Form />
      </Contact>
    </Container>
  </Fragment>
)

// Export Default ContactPage for front-end
const ContactPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta.title || page.frontmatter.title}>
    <ContactPageTemplate {...page.frontmatter} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        template
        title
        body
      }
    }
  }
`
