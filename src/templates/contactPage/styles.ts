import styled from '@emotion/styled'

export const Contact = styled.div`
  @media (min-width: 750px) {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    > * {
      width: calc(50% - 1rem);
    }
  }
`

export const Details = styled.div``

export const Title = styled.h1`
  text-align: center;
`
export const Form = styled.div`
  margin-top: 3rem;

  /* border-top: 1px solid var(--lightGrey); */
  color: inherit;
  display: flex;
  font-weight: 500;
  padding: 2rem 0;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  :focus,
  :hover {
    color: var(--primary);
  }

  svg {
    color: var(--primary);
    margin-right: 1.5rem;
  }
`
