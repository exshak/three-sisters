import styled from '@emotion/styled'

export const Title = styled.div`
  line-height: 1.2;
  margin: 0 auto 4rem auto;
  max-width: 200px;
  width: 100%;
`

export const Grid = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;

  > * {
    margin-bottom: 4rem;
    width: calc(33.33% - 2rem);
  }

  @supports (display: grid) {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(5, 1fr);

    > * {
      margin: 0;
      width: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 4rem;

    @supports (display: grid) {
      grid-gap: 1;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (max-width: 888px) {
    margin: 0 auto;
    margin-bottom: 3rem;
    max-width: 50rem;
    width: 100%;

    @supports (display: grid) {
      grid-gap: 1;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 600px) {
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
    max-width: 20rem;
    width: 100%;

    @supports (display: grid) {
      display: block;
      grid-gap: 0;
      grid-template-columns: 1;
    }
  }
`

export const Container = styled.div`
  text-align: center;
`

export const LoadButton = styled.button`
  background-color: var(--white);
  border: 2px solid var(--black);
  cursor: pointer;
  margin-top: 1rem;
  padding: 1rem 2rem;

  :hover {
    background: var(--black);
    border: 2px solid var(--white);
    color: var(--white);
  }
`
