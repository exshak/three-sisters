import styled from '@emotion/styled'

export const Contact = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;

  > * {
    width: calc(50% - 1rem);
  }

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;

    > * {
      width: 100%;
    }
  }
`

export const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`

export const Details = styled.div`
  height: 30rem;
  max-width: 100%;
  position: relative;
`
