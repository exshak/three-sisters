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
  title,
  price,
  body,
  featuredImage,
  galleryImages = [],
  collections = [],
  allProducts = [],
}) => {
  const singleProduct = { title, price, body, featuredImage, galleryImages }
  const collection = collections && collections[0] && collections[0].collection
  const filteredProducts =
    allProducts && !!allProducts.length
      ? byCollection(byDate(allProducts), collection, 'collections').filter(
          product => product.id !== id
        )
      : []

  return (
    <Fragment>
      {!!singleProduct && (
        <Container borderless thin>
          {!!collections && (
            <Meta>
              {collections.map(({ collection }, i) => (
                <span key={collection + i}>
                  {collection}
                  {i !== collections.length - 1 ? ',' : ''}
                </span>
              ))}
            </Meta>
          )}
          <ProductInfo {...singleProduct} />
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
      {...product.frontmatter}
      body={product.html}
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
      html
      id
      frontmatter {
        template
        date
        title
        price
        featuredImage
        galleryImages {
          galleryImage
        }
        collections {
          collection
        }
      }
    }

    allProducts: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "products" } }
        frontmatter: { status: { eq: "Published" } }
      }
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
