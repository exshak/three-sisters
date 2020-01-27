import _kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Image from '../common/image'
import { Container, ImageContainer, StyledLink, Title } from './styles'

const Featured = ({ title, featured }) => (
  <Fragment>
    <Title>{title}</Title>
    {featured && featured.length > 0 && (
      <Container>
        {featured.map(({ image, title }, i) => (
          <StyledLink
            key={_kebabCase(title) + '-' + i}
            to={'/products/' + _kebabCase(title)}
          >
            <ImageContainer>
              <Image
                src={image}
                alt={title}
                background
                size="cover"
                resolutions="small"
              />
            </ImageContainer>
            {title && <span>{title}</span>}
          </StyledLink>
        ))}
      </Container>
    )}
  </Fragment>
)

Featured.propTypes = {
  title: PropTypes.string,
  featured: PropTypes.array.isRequired,
}

export default Featured
