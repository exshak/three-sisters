import styled from '@emotion/styled'

export const Meta = styled.div`
  font-size: 1rem;
  margin: 0 0 2rem 0;
  text-align: center;

  > * + * {
    margin-left: 0.75em;
  }
`

export const Title = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  text-align: left;
`

export const Collection = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  margin: 1rem 0rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);

    :first-of-type(div) {
      height: 10rem;
    }
  }
`
