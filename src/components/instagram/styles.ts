import styled from '@emotion/styled'

export const Title = styled.h2`
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
`

export const StyledLink = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: calc(50% / 5) 0;
  position: relative;
  transition: 1s ease all;
  width: calc(100% / 5);

  div {
    height: 95%;
    margin: 0 auto;
    width: 95%;
  }

  @media screen and (max-width: 1120px) {
    height: auto;
    padding: calc(50% / 5) 0;
    width: calc(100% / 5);
  }

  @media screen and (max-width: 500px) {
    padding: calc(50% / 2) 0;
    width: calc(100% / 2);

    :nth-of-type(n + 5) {
      display: none;
    }
  }
`

export const Overlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s linear;

  :hover {
    background-color: var(--black);
    opacity: 0.5;
    position: absolute;
    top: 0;
  }
`
