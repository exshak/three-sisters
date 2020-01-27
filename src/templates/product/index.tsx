import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Container from '../../components/common/container'
import Layout from '../../components/layout'
import ProductCard from '../../components/productCard'
import ProductInfo from '../../components/productInfo'
import { byCollection, byDate } from '../../utils/sort'
import { Collection, Meta, Title } from './styles'

// Export Template for use in CMS preview
export const ProductTemplate = ({
  id,
  oneProduct,
  collections = [],
  allProducts = [],
}) => {
  const collection = collections[0].collection
  const filteredProducts =
    allProducts && !!allProducts.length
      ? byCollection(byDate(allProducts), collection, 'collections').filter(
          product => product.id !== id
        )
      : []

  return (
    <Fragment>
      {!!oneProduct && (
        <Container borderless thin>
          {!!collections.length && (
            <Meta>
              {collections.map(({ collection }, i) => (
                <span key={collection + i}>
                  {collection}
                  {i !== collections.length - 1 ? ',' : ''}
                </span>
              ))}
            </Meta>
          )}
          <ProductInfo {...oneProduct} />
        </Container>
      )}

      {!!filteredProducts.length && (
        <Container>
          <Title>More from this collection</Title>
          <Collection>
            {filteredProducts.slice(0, 4).map((product, i) => (
              <ProductCard key={product.title + i} {...product} />
            ))}
          </Collection>
        </Container>
      )}
    </Fragment>
  )
}

// Export Default Product for front-end
const Product = ({ data: { product, allProducts } }) => (
  <Layout meta={product.frontmatter.meta.title || product.frontmatter.title}>
    <ProductTemplate
      {...product}
      oneProduct={product.frontmatter}
      collections={product.frontmatter.collections}
      allProducts={allProducts.edges.map(({ node }) => ({
        ...node,
        ...node.fields,
        ...node.frontmatter,
      }))}
    />
  </Layout>
)

export default Product

export const pageQuery = graphql`
  query Product($id: String!) {
    product: markdownRemark(id: { eq: $id }) {
      ...Meta
      id
      frontmatter {
        template
        date
        title
        price
        body
        featuredImage
        galleryImages
        collections {
          collection
        }
      }
    }

    allProducts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "products" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
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
  }
`
