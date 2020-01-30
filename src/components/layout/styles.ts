import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const theme = {
  breakpoints: {
    tablet: '(max-width: 600px)',
    tablet768: '(max-width: 768px)',
    desktop: '(max-width: 1025px)',
  },

  colors: {
    main: '#00c2bd',
    text: '#222222',
    background: '#fbfbfb',
    teal: '#00c2bd',
  },
}

export const globalStyle = css`
  :root {
    --primary: ${theme.colors.main};
    --secondary: ${theme.colors.teal};
    --text: ${theme.colors.text};
    --background: ${theme.colors.background};
    --black: #000;
    --white: #ffffff;
    --offwhite: #f9f9f9;
    --lightGrey: whitesmoke;
    --darkGrey: #272727;
    --borderRadius: 2px;
    --font-primary: 'Open Sans', sans-serif;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: var(--font-primary);
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.6;
    margin: 0 auto;
    max-width: 1280px;
    padding: 20px 30px;
    -webkit-font-smoothing: antialiased;

    @media ${theme.breakpoints.tablet} {
      padding: 0 20px;
    }
  }

  a {
    color: var(--text);
    text-decoration: none;
  }

  p {
    margin-bottom: 1em;
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5em;
  }

  ::selection {
    background: rgba(0, 194, 189, 0.6);
  }

  .active {
    font-weight: 600 !important;
  }

  .slick-slide div {
    height: 400px;
  }
`

export const Main = styled.main``
