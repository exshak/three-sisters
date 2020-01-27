import React from 'react'
import { FormInputContainer, FormInputLabel, GroupContainer } from './styles'

const FormInput = ({ label, ...props }) => (
  <GroupContainer>
    {label ? <FormInputLabel>{label}</FormInputLabel> : null}
    <FormInputContainer {...props} />
  </GroupContainer>
)

export default FormInput
