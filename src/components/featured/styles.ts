import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Title = styled.h2`
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;

  @media screen and (max-width: 750px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: calc(100% / 3 - 1rem);

  span {
    padding: 1rem 0;
    text-align: center;
  }

  @media screen and (max-width: 750px) {
    max-width: 30rem;
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  height: 25rem;
  position: relative;
  width: 100%;

  @supports (object-fit: cover) {
    img {
      height: 100%;
      left: 50%;
      object-fit: cover;
      object-position: center;
      position: relative;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`
