import styled from '@emotion/styled'

export const GroupContainer = styled.div`
  position: relative;
`

export const FormInputContainer = styled.input`
  background: transparent;
  border: 1px solid #bababa;
  border-radius: var(--borderRadius);
  color: var(--text);
  display: block;
  flex-grow: 1;
  font-size: 1rem;
  line-height: 1.25em;
  max-width: 300px;
  min-width: 150px;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  width: ${props => (props.full ? '300px' : '100%')};

  &:focus {
    border-color: var(--black);
    outline: none;
  }

  :required:invalid:not(:empty) {
    border-color: red;
  }

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }

  [disabled] {
    cursor: progress;
    opacity: 0.5;
    pointer-events: none;
  }
`

export const FormInputLabel = styled.label`
  color: var(--text);
  pointer-events: none;
`
