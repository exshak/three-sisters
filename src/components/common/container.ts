import styled from '@emotion/styled'

const Container = styled.section`
  border-bottom: ${({ borderless }) =>
    borderless ? 'none' : '1px solid #f1f1f1'};
  margin: 0 auto;
  max-width: ${({ skinny }) => (skinny ? '888px' : 'auto')};
  padding: ${({ short }) => (short ? '5rem 0 0' : '5rem 0')};
  padding-top: ${({ shorter }) => (shorter ? '3rem' : '5rem')};
  text-align: ${({ center }) => center && '-webkit-center'};
  width: 100%;

  :last-child {
    border: 0;
  }

  @media (max-width: 600px) {
    padding: 1rem 0;
    width: 100%;
  }
`

export default Container
