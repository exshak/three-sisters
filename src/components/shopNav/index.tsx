import { Location } from '@reach/router'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import qs from 'qs'
import React from 'react'
import { Container, CustomLink, Search } from './style'

const ShopNav = ({ collections, enableSearch }) => (
  <Container>
    <CustomLink to={`/shop/`} exact="true">
      All
    </CustomLink>
    {collections.map(({ title, slug }, i) => (
      <CustomLink key={title + i} to={slug} exact="true">
        {title}
      </CustomLink>
    ))}

    {enableSearch && (
      <Location>
        {({ location }) => {
          let search = qs.parse(location.search.replace('?', ''))

          return (
            <Search
              type="text"
              value={search.s || ''}
              placeholder="Search..."
              onChange={e => {
                let search = {}
                search.s = e.target.value
                search = qs.stringify(search)

                const url = location.href
                  .replace(location.origin, '')
                  .replace(location.search, '')

                navigate(`${url}?${search}`)
              }}
            />
          )
        }}
      </Location>
    )}
  </Container>
)

ShopNav.propTypes = {
  collections: PropTypes.array.isRequired,
  enableSearch: PropTypes.bool.isRequired,
}

export default ShopNav
