import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Image from '../common/image'
import { Container, Overlay, StyledLink, Title } from './styles'

const Instagram = ({ title, instagram }) => (
  <Fragment>
    <Title>{title}</Title>
    {instagram && instagram.edges.length > 0 && (
      <Container>
        {instagram.edges.map(({ node: { id, caption, original } }) => (
          <StyledLink
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Post Link"
            href={`https://instagram.com/p/${id}`}
          >
            <Image
              src={original}
              alt={caption}
              lazy
              background
              resolutions="small"
            />
            <Overlay />
          </StyledLink>
        ))}
      </Container>
    )}
  </Fragment>
)

Instagram.propTypes = {
  title: PropTypes.string,
  instagram: PropTypes.object.isRequired,
}

export default Instagram
