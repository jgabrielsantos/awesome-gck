import styled from 'styled-components'
import { SizeType } from '../../../types'

type ButtonStyleProps = {
  readonly size: SizeType
  readonly role: string
}

export const ButtonStyled = styled.button<ButtonStyleProps>`
  background-color: red;
  padding: ${({ size }) => {
    switch(size) {
      case 'large':
        return '12px 24px'
      case 'small':
        return '8px 12px'
      default:
        return '10px 20px'
    }
  }};

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`