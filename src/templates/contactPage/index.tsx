import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Container from '../../components/common/container'
import Image from '../../components/common/image'
import ContactForm from '../../components/contactForm'
import Layout from '../../components/layout'
import { Contact, Details, Title } from './styles'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({ title, body, featuredImage }) => (
  <Fragment>
    <Container skinny>
      <Title>{title}</Title>
      <Contact>
        <Details>
          <Image
            src={featuredImage}
            alt={title}
            background
            size="cover"
            resolutions="small"
          />
        </Details>
        <ContactForm title={title} body={body} />
      </Contact>
    </Container>
  </Fragment>
)

// Export Default ContactPage for front-end
const ContactPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta.title || page.frontmatter.title}>
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
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
