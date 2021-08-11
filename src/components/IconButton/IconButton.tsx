// IconButton/IconButton.tsx - Icon button component

import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  onClick?: (e: any) => void
  icon?: any
  type?: string
  disabled?: boolean
  autofocus?: boolean
  id?: string
  name?: string
  variant?: 'filled' | 'transparent'
}

const variants = {
  filled: 'filled',
  transparent: 'transparent'
}

const IconButton = (props: ButtonProps): JSX.Element => {
  const { onClick, icon, type, disabled, autofocus, id, name, variant } = props

  return (
    <StyledButton
      name={name}
      onClick={onClick}
      autoFocus={autofocus}
      disabled={disabled}
      type={type}
      id={id}
      variant={variant}
      {...props}
    >
      {icon}
    </StyledButton>
  )
}

export const StyledButton = styled.button`
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  letter-spacing: -0.1px;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  color: ${({ theme, variant }) => {
    switch (true) {
      case variant === variants.filled:
        return theme.palette.darkblue01
      default:
        return theme.palette.darkblue01
    }
  }};
  background-color: ${({ theme, variant }) => {
    switch (true) {
      case variant === variants.filled:
        return theme.palette.orange02
      default:
        return 'none'
    }
  }};
  box-shadow: none;
  border: none;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  svg {
    color: ${({ theme, variant }) => {
      switch (true) {
        case variant === variants.filled:
          return theme.palette.darkblue01
        default:
          return theme.palette.darkblue01
      }
    }};
  }

  &:disabled {
    svg {
      color: ${({ theme }) => theme.palette.grey08};
    }
  }

  &:hover:enabled,
  &:active:enabled {
    background-color: ${({ theme, variant }) => {
      switch (true) {
        case variant === variants.filled:
          return theme.palette.orange01
        default:
          return theme.palette.gray10
      }
    }};
  }
`

IconButton.defaultProps = {
  disabled: false,
  type: 'button',
  variant: 'transparent'
}

export default IconButton
