import React from 'react'
import { CustomButtonContainer } from './styles'

export const CustomButton = ({ label, ...props }) => (
  <CustomButtonContainer {...props}>{label}</CustomButtonContainer>
)

export default CustomButton
