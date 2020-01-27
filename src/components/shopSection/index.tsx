import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import ProductCard from '../productCard'
import { Container, Grid, LoadButton, Title } from './styles'

const ShopSection = ({
  title = '',
  products = [],
  perPageLimit = 10,
  showLoadMore = true,
}) => {
  const [limit, setLimit] = useState(10)

  const increaseLimit = () => setLimit(limit + perPageLimit)

  const visibleProducts = products.slice(0, limit || products.length)

  return (
    <Fragment>
      {title && <Title>{title}</Title>}
      {!!visibleProducts.length && (
        <Grid>
          {visibleProducts.map((product, i) => (
            <ProductCard key={product.title + i} {...product} />
          ))}
        </Grid>
      )}
      {showLoadMore && visibleProducts.length < products.length && (
        <Container>
          <LoadButton onClick={increaseLimit}>Load More</LoadButton>
        </Container>
      )}
    </Fragment>
  )
}

ShopSection.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array.isRequired,
}

export default ShopSection
