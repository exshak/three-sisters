import PropTypes from 'prop-types'
import React from 'react'
import Image from '../common/image'
import { Card, Collection, Content, Product, Title } from './styles'

const ProductCard = ({
  slug,
  title,
  featuredImage,
  collections = [],
  ...props
}) => (
  <Card to={slug}>
    {featuredImage && (
      <Product>
        <Image
          src={featuredImage}
          alt={title}
          background
          size="cover"
          resolutions="small"
        />
      </Product>
    )}
    <Content>
      {title && <Title>{title}</Title>}
      <Collection>
        {collections &&
          collections.map(({ collection }) => collection).join(', ')}
      </Collection>
    </Content>
  </Card>
)

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  collections: PropTypes.array.isRequired,
}

export default ProductCard
