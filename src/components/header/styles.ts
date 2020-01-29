import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const navLink = keyframes`
  from {
    opacity: 0;
    transform: translate(0rem, 1rem);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`

const navLinks = keyframes`
  from {
    opacity: 0;
  }
`

const activeOpen = css`
  div {
    display: flex;
  }

  a {
    animation: ${navLink} 0.3s ease-out;
    animation-fill-mode: both;
  }
`

const subNavOpen = css`
  span::after {
    top: calc(50% + 0.2rem);
    transform: translateY(-50%) rotate(-135deg);
  }

  div {
    max-height: 100vh;
    opacity: 1;
    transition: 0.6s ease all;
  }
`

const subLinkOpen = css`
  display: block;
  position: relative;
  width: 11rem;
`

const getLinkStyles = ({ active, subnav, sublink }) => {
  if (active) return activeOpen
  if (subnav) return subNavOpen
  if (sublink) return subLinkOpen
}

export const SiteHeader = styled.header`
  background: var(--background);
  border-bottom: 1px solid var(--lightGrey);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`

export const SiteLogo = styled.div`
  left: calc(50% - 120px);
  opacity: ${({ scroll }) => (scroll ? 0 : 1)};
  position: absolute;
  top: 1rem;
  transition: opacity 1.5s ease, visibility 0.1s ease;
  visibility: ${({ scroll }) => (scroll ? 'hidden' : 'visible')};

  img {
    height: 1.5rem;
  }

  @media (max-width: 600px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
`

export const Nav = styled.nav`
  /* background: var(--background); */
  /* border-bottom: 1px solid var(--lightGrey); */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.025); */
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 2; */

  @media (max-width: 600px) {
    ${getLinkStyles}
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  padding: ${({ scroll }) => (scroll ? '0.5rem 0 0.5rem' : '4rem 0 0.5rem')};
  transition: all 0.5s ease;

  @media (max-width: 600px) {
    padding: 0.5rem 0 0.5rem;
    transition: all 0s none;
  }
`

export const NavLogo = styled.div`
  opacity: ${({ scroll }) => (scroll ? 1 : 0)};
  transition: all 0.5s ease;
  width: 20%;

  @media (max-width: 600px) {
    opacity: 1;
  }
`

export const Logo = styled.img`
  width: auto;
`

export const LogoFull = styled.img`
  margin-right: 3rem;
  position: relative;
  width: 222px;

  @media (max-width: 768px) {
    margin-top: 0.2rem;
    width: 150px;
    z-index: 1;
  }

  @media (max-width: 600px) {
    width: 200px;
    z-index: 1;
  }
`

export const NavLinks = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  width: 60%;

  > * + * {
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    letter-spacing: 0rem;
  }

  @media (max-width: 600px) {
    align-items: center;
    animation: ${navLinks} 0.2s ease;
    background-color: var(--background);
    bottom: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: 100%;

    > * + * {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`

export const Group = styled.div`
  cursor: pointer;
  position: relative;

  ${getLinkStyles}

  @media (max-width: 600px) {
    display: block !important;

    span {
      font-size: 1.5rem;
      font-weight: 300;
      padding-left: 3rem;
      position: relative;
    }
  }
`

export const GroupParent = styled.span`
  padding-right: 3rem;

  ::after {
    border-bottom: 2px solid var(--darkGrey);
    border-right: 2px solid var(--darkGrey);
    content: '';
    display: block;
    height: 0.8rem;
    position: absolute;
    right: 1rem;
    top: calc(50% - 0.2rem);
    transform: translateY(-50%) rotate(45deg);
    transition: 0.3s ease all;
    width: 0.8rem;
  }
`

export const GroupLinks = styled.div`
  background: var(--background);
  left: 0;
  max-height: 0;
  /* opacity: 0; */
  overflow: hidden;
  position: absolute;
  text-transform: capitalize;
  top: 100%;
  transition: 0.3s ease all;
  width: auto;

  @media (max-width: 600px) {
    background-color: var(--background);
    flex-direction: column;
    position: relative;
    top: 0;

    a {
      font-size: 1.2rem;
      width: auto;
    }
  }
`

export const CustomLink = styled(Link)`
  border-bottom: 2px solid;
  border-bottom-color: transparent;
  color: inherit;
  display: block;
  font-weight: 500;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.2s, border-bottom-color 0.2s;

  :focus,
  :hover {
    /* border-bottom-color: currentColor; */
    /* color: var(--primary); */
  }

  ${getLinkStyles}

  @media (max-width: 768px) {
    padding: 0.5rem 0rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    font-weight: 300;

    :nth-of-type(2) {
      animation-delay: 0.1s;
    }
    :nth-of-type(3) {
      animation-delay: 0.2s;
    }
    :nth-of-type(4) {
      animation-delay: 0.3s;
    }
    :nth-of-type(5) {
      animation-delay: 0.4s;
    }
    :nth-of-type(6) {
      animation-delay: 0.5s;
    }
    :nth-of-type(7) {
      animation-delay: 0.6s;
    }
    :nth-of-type(8) {
      animation-delay: 0.7s;
    }
    :nth-of-type(7) {
      animation-delay: 0.6s;
    }
  }
`

export const Socials = styled.div`
  justify-content: flex-end;
  position: absolute;
  right: 0;

  @media (max-width: 600px) {
    justify-content: center;
    position: relative;
  }
`

export const Button = styled.button`
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  display: none !important;
  justify-content: center;
  outline: none;

  svg {
    height: 20px;
    width: 20px;
  }

  @media (max-width: 600px) {
    display: block !important;
    margin-left: auto;
    z-index: 1;
  }
`
