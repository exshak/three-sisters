import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;

  > * + * {
    margin-left: 1rem;
  }
`

export const CustomLink = styled(Link)`
  border-bottom: 2px solid;
  border-bottom-color: transparent;
  color: inherit;
  display: block;
  font-weight: 500;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.2s, border-bottom-color 0.2s;

  @media (max-width: 888px) {
    padding: 0.5rem 0.5rem;
  }
`

export const Search = styled.input`
  color: var(--black);
  border: 1;
  padding: 0.5rem 1rem;
  position: absolute;
  right: 0;
  width: 20%;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: var(--black);
  }

  @media (max-width: 600px) {
    margin-top: 1rem;
    position: relative;
    width: 100%;
  }
`
