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
  color?: 'orange' | 'green' | 'blue' | 'transparent'
}

const variants = {
  filled: 'filled',
  transparent: 'transparent'
}

const buttonColors = {
  orange: 'orange',
  green: 'green',
  blue: 'blue',
  transparent: 'transparent'
}

const IconButton = (props: ButtonProps): JSX.Element => {
  const {
    onClick,
    icon,
    type,
    disabled,
    autofocus,
    id,
    name,
    variant,
    color = buttonColors.orange
  } = props

  return (
    <StyledButton
      name={name}
      onClick={onClick}
      autoFocus={autofocus}
      disabled={disabled}
      type={type}
      id={id}
      variant={variant}
      color={color}
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
  color: ${({ variant, color, theme }) => {
    switch (true) {
      case variant === variants.filled && color === buttonColors.orange:
        return theme.palette.darkblue01
      case variant === variants.filled && color === buttonColors.green:
        return theme.palette.biege
      case variant === variants.filled && color === buttonColors.blue:
        return theme.palette.orange01
      case variant === variants.filled && color === buttonColors.transparent:
        return theme.palette.grey07

      case variant === variants.transparent && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variants.transparent && color === buttonColors.green:
        return theme.palette.green04
      case variant === variants.transparent && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === variants.transparent &&
        color === buttonColors.transparent:
        return theme.palette.grey07
      default:
        return theme.palette.darkblue01
    }
  }};
  background-color: ${({ variant, color, theme }) => {
    switch (true) {
      case variant === variants.filled && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variants.filled && color === buttonColors.green:
        return theme.palette.green04
      case variant === variants.filled && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === variants.filled && color === buttonColors.transparent:
        return 'none'
      default:
        return theme.palette.orange02
    }
  }};
  box-shadow: none;
  border: none;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  svg {
    color: ${({ theme, variant, color }) => {
      switch (true) {
        case variant === variants.filled && color === buttonColors.orange:
          return theme.palette.darkblue01
        case variant === variants.filled && color === buttonColors.green:
          return theme.palette.biege
        case variant === variants.filled && color === buttonColors.blue:
          return theme.palette.orange01
        case variant === variants.filled && color === buttonColors.transparent:
          return theme.palette.grey07

        case variant === variants.transparent && color === buttonColors.orange:
          return theme.palette.orange02
        case variant === variants.transparent && color === buttonColors.green:
          return theme.palette.green04
        case variant === variants.transparent && color === buttonColors.blue:
          return theme.palette.darkblue01
        case variant === variants.transparent &&
          color === buttonColors.transparent:
          return theme.palette.grey07
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
    color: ${({ color, theme }) => {
      switch (true) {
        case color === buttonColors.orange:
          return theme.palette.background
        case color === buttonColors.blue:
          return theme.palette.background
        case color === buttonColors.green:
          return theme.palette.biege
        case color === buttonColors.transparent:
          return theme.palette.orange01
        default:
          return theme.palette.background
      }
    }};
    background-color: ${({ color, theme }) => {
      switch (true) {
        case color === buttonColors.orange:
          return theme.palette.orange01
        case color === buttonColors.blue:
          return theme.palette.darkblue04
        case color === buttonColors.green:
          return theme.palette.green04
        case color === buttonColors.transparent:
          return theme.palette.grey08
        default:
          return theme.palette.orange01
      }
    }};
  }
`

IconButton.defaultProps = {
  disabled: false,
  type: 'button',
  variant: 'transparent',
  color: 'orange'
}

export default IconButton
