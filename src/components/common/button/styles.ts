import { css } from '@emotion/core'
import styled from '@emotion/styled'

const buttonStyles = css`
  background-color: var(--black);
  border: none;
  color: var(--white);

  &:hover {
    background-color: var(--white);
    border: 1px solid var(--black);
    color: var(--black);
  }
`

const invertedButtonStyles = css`
  background-color: var(--white);
  border: 1px solid var(--black);
  color: var(--black);

  &:hover {
    background-color: var(--black);
    border: none;
    color: var(--white);
  }
`

const getButtonStyles = props =>
  props.inverted ? invertedButtonStyles : buttonStyles

export const CustomButtonContainer = styled.button`
  border-radius: var(--borderRadius);
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  letter-spacing: 0.05rem;
  max-width: 300px;
  min-width: 165px;
  padding: 1rem 5rem;
  text-transform: uppercase;
  transition: all 0.2s ease;
  width: ${props => (props.full ? '100%' : 'auto')};

  [disabled] {
    cursor: progress;
    opacity: 0.5;
    pointer-events: none;
  }

  ${getButtonStyles}
`
