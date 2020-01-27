import styled from '@emotion/styled'

const Container = styled.section`
  border-bottom: ${props => (props.borderless ? 'none' : '1px solid #f1f1f1')};
  max-width: ${props => (props.skinny ? '888px' : 'auto')};
  margin: 0 auto;
  padding: ${props => (props.thin ? '5rem 0 0' : '5rem 0')};
  width: 100%;

  :last-child {
    border: 0;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 1rem 0;
    width: 100%;
  }
`

export default Container
