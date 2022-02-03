// IconButton/IconButton.tsx - Icon button component

import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  color?: 'orange' | 'green' | 'blue' | 'transparent' | 'red' | 'black'
  onClick?: (e: any) => void
  icon?: any
  type?: string
  disabled?: boolean
  autofocus?: boolean
  id?: string
  name?: string
  variant?: 'filled' | 'outlined' | 'transparent'
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
  transparent: 'transparent',
  red: 'red',
  black: 'black'
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
  border-radius: 4px;
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
        return theme.palette.green01
      case variant === variants.filled && color === buttonColors.blue:
        return theme.palette.orange01
      case variant === variants.filled && color === buttonColors.transparent:
        return theme.palette.grey07
      case variant === variants.filled && color === buttonColors.red:
        return theme.palette.brightred01
      case variant === variants.filled && color === buttonColors.black:
        return theme.palette.panelBackground

      // Outlined variant
      case variant === variants.outlined && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variants.outlined && color === buttonColors.green:
        return theme.palette.green01
      case variant === variants.outlined && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === variants.outlined && color === buttonColors.transparent:
        return theme.palette.grey07
      case variant === variants.outlined && color === buttonColors.red:
        return theme.palette.brightred01
      case variant === variants.outlined && color === buttonColors.black:
        return theme.palette.textDark

      // Transparent variant
      case variant === variants.transparent && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variants.transparent && color === buttonColors.green:
        return theme.palette.green04
      case variant === variants.transparent && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === variants.transparent && color === buttonColors.red:
        return theme.palette.brightred01
      case variant === variants.transparent && color === buttonColors.black:
        return theme.palette.textDark
      case variant === variants.transparent &&
        color === buttonColors.transparent:
        return theme.palette.textDark
      default:
        return theme.palette.textDark
    }
  }};
  background-color: ${({ variant, color, theme }) => {
    switch (true) {
      // filled
      case variant === variants.filled && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variants.filled && color === buttonColors.green:
        return theme.palette.green10
      case variant === variants.filled && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === variants.filled && color === buttonColors.red:
        return theme.palette.brightred07
      case variant === variants.filled && color === buttonColors.black:
        return theme.palette.textDark

      // outlined
      case variant === variants.outlined && color !== buttonColors.transparent:
        return theme.palette.panelBackground

      // transparent
      case variant === variants.transparent:
      case color === buttonColors.transparent:
        return 'transparent'

      default:
        return theme.palette.orange02
    }
  }};
  box-shadow: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ variant, theme, color }) => {
    switch (true) {
      case variant === variants.outlined && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === variants.outlined && color === buttonColors.green:
      case variant === variants.filled && color === buttonColors.green:
        return theme.palette.green01
      case variant === variants.outlined && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === variants.outlined && color === buttonColors.red:
      case variant === variants.filled && color === buttonColors.red:
        return theme.palette.brightred01
      case variant === variants.outlined && color === buttonColors.black:
        return theme.palette.textDark
      case variant === variants.outlined && color === buttonColors.transparent:
        return theme.palette.grey07
      default:
        return 'transparent'
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
        case variant === variants.outlined && color === buttonColors.orange:
          return theme.palette.orange02
        case variant === variants.outlined && color === buttonColors.green:
          return theme.palette.green04
        case variant === variants.outlined && color === buttonColors.blue:
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
    background-color ${({ theme }) => theme.palette.disabledBackground};
    border-color: ${({ color, theme }) => {
      switch (true) {
        case color === buttonColors.transparent:
          return 'transparent'
        default:
          return theme.palette.disabledFont
      }
    }};
    svg {
      color: ${({ theme }) => theme.palette.disabledFont};
    }
  }

  &:hover:enabled,
  &:active:enabled {
    color: ${({ color, theme }) => {
      switch (true) {
        case color === buttonColors.orange:
        case color === buttonColors.blue:
        case color === buttonColors.green:
        case color === buttonColors.red:
        case color === buttonColors.black:
          return theme.palette.panelBackground
        case color === buttonColors.transparent:
        default:
          return theme.palette.orange01
      }
    }};
    background-color: ${({ color, theme }) => {
      switch (true) {
        case color === buttonColors.orange:
          return theme.palette.orange01
        case color === buttonColors.blue:
          return theme.palette.darkblue02
        case color === buttonColors.green:
          return theme.palette.green01
        case color === buttonColors.transparent:
          return 'transparent'
        case color === buttonColors.red:
          return theme.palette.brightred01
        case color === buttonColors.black:
          return theme.palette.headingDark
        default:
          return theme.palette.panelBackground
      }
    }};
    border-color: ${({ color, theme }) => {
      switch (true) {
        case color === buttonColors.transparent:
          return theme.palette.orange01
        default:
          return 'none'
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
