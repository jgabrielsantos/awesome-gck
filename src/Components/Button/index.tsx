import React from 'react'
import * as Styled from './styles'
import { ButtonPropsType } from './types'

export const Button = ({
  className,
  children,
  size = 'medium',
  theme = 'primary',
  loading = false,
  disable = false,
  role = ''
}: ButtonPropsType) => (
  <Styled.ButtonStyled
    role={role}
    className={className}
    type='button'
    size={size}
    theme={theme}
    disabled={disable || loading} // automatically disables the component and allows prop to focus on specific cases
  >
    {!loading && children}
  </Styled.ButtonStyled>
)