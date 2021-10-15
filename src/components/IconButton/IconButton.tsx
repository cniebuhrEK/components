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
  variant?: 'filled' | 'outlined' | 'transparent'
  color?: 'orange' | 'green' | 'blue' | 'transparent'
}

const variants = {
  filled: 'filled',
  outlined: 'outlined',
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
      // Filled variant
      case variant === variants.filled && color === buttonColors.orange:
        return theme.palette.darkblue01
      case variant === variants.filled && color === buttonColors.green:
        return theme.palette.biege
      case variant === variants.filled && color === buttonColors.blue:
        return theme.palette.orange01
      case variant === variants.filled && color === buttonColors.transparent:
        return theme.palette.grey07

      // Outlined variant
      case variant === variants.outlined && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variants.outlined && color === buttonColors.green:
        return theme.palette.green04
      case variant === variants.outlined && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === variants.outlined && color === buttonColors.transparent:
        return theme.palette.grey07

      // Transparent variant
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
      case variant === variants.transparent:
        return 'transparent'
      case variant === variants.filled && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variants.filled && color === buttonColors.green:
        return theme.palette.green04
      case variant === variants.filled && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === variants.filled && color === buttonColors.transparent:
        return 'transparent'
      case variant === variants.outlined:
        return theme.palette.white
      default:
        return theme.palette.orange02
    }
  }};
  box-shadow: none;
  border-width: ${({ variant }) =>
    variant === variants.outlined ? '1px' : '0px'};
  border-style: solid;
  border-color: ${({ variant, theme, color }) => {
    switch (true) {
      case variant === variant.outlined && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variant.outlined && color === buttonColors.green:
        return theme.palette.green04
      case variant === variant.outlined && color === buttonColors.blue:
        return theme.palette.darkblue01
      default:
        return 'unset'
    }
  }};
  transition: all 300ms ${({ theme }) =>
    theme.transitions.easing.easeInOut} 0ms;

  svg {
    fill: ${({ theme, variant, color }) => {
      switch (true) {
        // Filled variant
        case variant === variants.filled && color === buttonColors.orange:
          return theme.palette.darkblue01
        case variant === variants.filled && color === buttonColors.green:
          return theme.palette.biege
        case variant === variants.filled && color === buttonColors.blue:
          return theme.palette.orange01
        case variant === variants.filled && color === buttonColors.transparent:
          return theme.palette.grey07

        // Outlined variant
        case variant === variant.outlined && color === buttonColors.orange:
          return theme.palette.orange02
        case variant === variant.outlined && color === buttonColors.green:
          return theme.palette.green04
        case variant === variant.outlined && color === buttonColors.blue:
          return theme.palette.darkblue01

        // Transparent variant
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
    background-color ${({ theme }) => theme.palette.inactive};
    border-color: ${({ theme }) => theme.palette.inactive};

    svg {
      color: ${({ theme }) => theme.palette.background};
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
