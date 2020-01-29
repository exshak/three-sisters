import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Card = styled(Link)`
  /* overflow: hidden; */
  text-decoration: none;
  transition: all 0.15s ease-in-out;

  :focus,
  :hover {
    opacity: 0.8;
  }
`

export const Product = styled.div`
  height: 18rem;
  margin: 0 0 1rem 0;
  position: relative;
  width: 100%;
`

export const Content = styled.div`
  /* padding: 0 2.5rem 2.5rem; */

  @media (max-width: 600px) {
    padding-bottom: 2rem;
  }
`

export const Title = styled.h4`
  margin: 0;
`

export const Collection = styled.div`
  line-height: 1;
  margin: 0.5em 0;
  min-height: 1.2em;
`
