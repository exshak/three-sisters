import { Location } from '@reach/router'
import { graphql } from 'gatsby'
import qs from 'qs'
import React, { Fragment } from 'react'
import Container from '../../components/common/container'
import Layout from '../../components/layout'
import ShopNav from '../../components/shopNav'
import ShopSection from '../../components/shopSection'
import { byCollection, byDate } from '../../utils/sort'

// Export Template for use in CMS preview
export const ShopPageTemplate = ({
  title,
  contentType,
  products = [],
  collections = [],
  enableSearch = true,
}) => (
  <Location>
    {({ location }) => {
      let filteredProducts =
        products && !!products.length
          ? byCollection(byDate(products), title, contentType)
          : []

      let queryObj = location.search.replace('?', '')
      queryObj = qs.parse(queryObj)

      if (enableSearch && queryObj.s) {
        const searchTerm = queryObj.s.toLowerCase()
        filteredProducts = filteredProducts.filter(({ frontmatter }) =>
          frontmatter.title.toLowerCase().includes(searchTerm)
        )
      }

      return (
        <Fragment>
          {!!collections.length && (
            <Container borderless thin>
              <ShopNav collections={collections} enableSearch />
            </Container>
          )}

          {!!products.length && (
            <Container>
              <ShopSection products={filteredProducts} />
            </Container>
          )}
        </Fragment>
      )
    }}
  </Location>
)

// Export Default ShopPage for front-end
const ShopPage = ({ data: { page, products, collections } }) => (
  <Layout meta={page.frontmatter.meta.title || page.frontmatter.title}>
    <ShopPageTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      products={products.edges.map(({ node }) => ({
        ...node,
        ...node.fields,
        ...node.frontmatter,
      }))}
      collections={collections.edges.map(({ node }) => ({
        ...node,
        ...node.fields,
        ...node.frontmatter,
      }))}
    />
  </Layout>
)

export default ShopPage

export const pageQuery = graphql`
  query ShopPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        template
        title
      }
    }

    products: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "products" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            featuredImage
            collections {
              collection
            }
          }
        }
      }
    }

    collections: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "collections" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
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
`
