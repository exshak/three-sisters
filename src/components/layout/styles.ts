import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const theme = {
  breakpoints: {
    tablet: '@media (min-width: 600px)',
    tablet768: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1025px)',
  },

  colors: {
    black: '#222222',
    blue: '#1aa0cb',
    white: '#fbfbfb',
  },
}

export const globalStyle = css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    /* font-size: 10px; */
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.white};
    /* color: ${theme.colors.black}; */
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0 auto;
    max-width: 1280px;
  }

  a {
    color: ${theme.colors.black};
    text-decoration: none;
  }

  .active {
    font-weight: 600;
  }

  .slick-slider {
    max-width: 100vw;
  }

  footer {
    margin: 20px 40px;
  }
`

export const Main = styled.main`
  /* background-color: ${theme.colors.black}; */
  /* color: ${theme.colors.white}; */
  /* min-height: 100vh; */
  margin-top: 150px;
  margin: 150px auto 0px;
`
