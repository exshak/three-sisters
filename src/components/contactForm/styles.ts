import styled from '@emotion/styled'

export const Info = styled.div`
  text-align: -webkit-center;
`

export const Body = styled.div`
  max-width: 300px;
  padding-top: 1rem;
`

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2.5rem 0;
  max-width: 500px;
  text-align: left;

  > * + * {
    margin-top: 1rem;
  }
`

export const Alert = styled.div`
  background: var(--lightGrey);
  padding: 2rem;
  text-align: center;
  width: 100%;
`
