import React from 'react'
import styled from 'styled-components'

import { Loader } from '../Loader'

const buttonSizes = {
  normal: 'normal',
  small: 'small'
}

const buttonVariants = {
  contained: 'contained',
  outlined: 'outlined'
}

const buttonColors = {
  orange: 'orange',
  green: 'green',
  blue: 'blue',
  transparent: 'transparent',
  red: 'red',
  black: 'black'
}

interface ButtonProps {
  onClick?: (e: any) => void
  onMouseEnter?: (e: any) => void
  onMouseLeave?: (e: any) => void
  children?: JSX.Element | string
  size?: 'small' | 'normal'
  color?: 'orange' | 'green' | 'blue' | 'transparent' | 'red' | 'black'
  variant?: 'contained' | 'outlined'
  startIcon?: any
  type?: string
  disabled?: boolean
  isLoading?: boolean
  autofocus?: boolean
  name?: string
  value?: string
  id?: string
}

const Button = (props: ButtonProps): JSX.Element => {
  const { children, startIcon, isLoading, autofocus } = props

  return (
    <StyledButton {...props} autoFocus={autofocus}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {isLoading ? (
        <div className='loader'>
          <Loader />
        </div>
      ) : (
        <span className='children-container'>{children}</span>
      )}
    </StyledButton>
  )
}

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  padding: 0 16px;
  padding: ${({ size }) => {
    switch (size) {
      case buttonSizes.small:
        return '0 18.5px'
      case buttonSizes.normal:
      default:
        return '0 16px;'
    }
  }};
  letter-spacing: -0.1px;
  font-size: ${({ size, theme }) => {
    switch (size) {
      case buttonSizes.small:
        return theme.typography.fontSizeSmall
      case buttonSizes.normal:
      default:
        return theme.typography.fontSizeNormal
    }
  }};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ size }) => {
    switch (size) {
      case buttonSizes.small:
        return 'normal'
      case buttonSizes.normal:
      default:
        return '600'
    }
  }};
  height: ${({ size, theme }) => {
    switch (size) {
      case buttonSizes.small:
        return theme.dimensions.buttonSmallHeight
      case buttonSizes.normal:
      default:
        return theme.dimensions.buttonNormalHeight
    }
  }};
  justify-content: center;
  min-width: ${({ size, theme }) => {
    switch (size) {
      case buttonSizes.normal:
        return theme.dimensions.buttonNormalMinWidth
      case buttonSizes.small:
      default:
        return theme.dimensions.buttonSmallMinWidth
    }
  }};
  color: ${({ variant, color, theme }) => {
    switch (true) {
      case variant === buttonVariants.contained &&
        color === buttonColors.orange:
        return theme.palette.darkblue01
      case variant === buttonVariants.contained && color === buttonColors.blue:
        return theme.palette.orange01
      case variant === buttonVariants.outlined && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === buttonVariants.outlined && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === buttonVariants.contained &&
        color === buttonColors.transparent:
      case variant === buttonVariants.outlined &&
        color === buttonColors.transparent:
        return theme.palette.textDark
      case variant === buttonVariants.contained && color === buttonColors.green:
      case variant === buttonVariants.outlined && color === buttonColors.green:
        return theme.palette.green01
      case variant === buttonVariants.contained && color === buttonColors.red:
      case variant === buttonVariants.outlined && color === buttonColors.red:
        return theme.palette.brightred01
      case variant === buttonVariants.contained && color === buttonColors.black:
        return theme.palette.panelBackground
      default:
        return theme.palette.textDark
    }
  }};
  background-color: ${({ variant, color, theme }) => {
    switch (true) {
      case variant === buttonVariants.contained &&
        color === buttonColors.orange:
        return theme.palette.orange02
      case variant === buttonVariants.contained && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === buttonVariants.contained &&
        color === buttonColors.transparent:
      case variant === buttonVariants.outlined &&
        color === buttonColors.transparent:
        return 'transparent'
      case variant === buttonVariants.contained && color === buttonColors.green:
        return theme.palette.green10
      case variant === buttonVariants.contained && color === buttonColors.red:
        return theme.palette.brightred07
      case variant === buttonVariants.contained && color === buttonColors.black:
        return theme.palette.textDark
      default:
        return theme.palette.panelBackground
    }
  }};
  box-shadow: none;
  border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
  border-width: ${({ variant }) =>
    variant === buttonVariants.contained ? '0px' : '1px'};
  border-width: ${({ variant, color }) => {
    switch (true) {
      case variant === buttonVariants.outlined:
      case variant === buttonVariants.contained && color === buttonColors.green:
      case variant === buttonVariants.contained && color === buttonColors.red:
        return '1px'
      default:
        return '0px'
    }
  }};
  border-style: ${({ variant, color }) => {
    switch (true) {
      case variant === buttonVariants.outlined:
      case variant === buttonVariants.contained && color === buttonColors.green:
      case variant === buttonVariants.contained && color === buttonColors.red:
        return 'solid'
      default:
        return 'none'
    }
  }};
  border-color: ${({ variant, color, theme }) => {
    switch (true) {
      case variant === buttonVariants.outlined && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === buttonVariants.outlined && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === buttonVariants.outlined &&
        color === buttonColors.transparent:
        return theme.palette.textDark
      case variant === buttonVariants.contained && color === buttonColors.green:
      case variant === buttonVariants.outlined && color === buttonColors.green:
        return theme.palette.green01
      case variant === buttonVariants.contained && color === buttonColors.red:
      case variant === buttonVariants.outlined && color === buttonColors.red:
        return theme.palette.brightred01
      case variant === buttonVariants.outlined && color === buttonColors.black:
        return theme.palette.textDark
      default:
        return 'transparent'
    }
  }};
  background-position: center;
  transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  .loader {
    margin: 0 auto;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.palette.disabledFont};
    background-color: ${({ variant, size, color, theme }) => {
      switch (true) {
        case variant === buttonVariants.outlined:
          return theme.palette.background
        case size === buttonSizes.small && variant === buttonVariants.contained:
          return theme.palette.background
        case color === buttonColors.orange &&
          variant !== buttonVariants.outlined:
          return theme.palette.orange05
        case color === buttonColors.green &&
          variant !== buttonVariants.outlined:
          return theme.palette.green10
        case color === buttonColors.blue && variant !== buttonVariants.outlined:
          return theme.palette.background
        case color === buttonColors.transparent:
        default:
          return 'transparent'
      }
    }};
    border-color: ${({ color, theme, variant }) => {
      switch (true) {
        case color === buttonColors.red:
        case color === buttonColors.green:
        case color === buttonColors.transparent &&
          variant === buttonVariants.outlined:
          return theme.palette.disabledFont
        case color === buttonColors.transparent:
          return 'transparent'
        default:
          return theme.palette.disabledFont
      }
    }};
    border-style: ${({ color }) => {
      switch (true) {
        case color === buttonColors.red:
        case color === buttonColors.green:
        case color === buttonColors.transparent:
          return 'solid'
        default:
          return 'none'
      }
    }};
    border-width: ${({ color }) => {
      switch (true) {
        case color === buttonColors.red:
        case color === buttonColors.green:
        case color === buttonColors.transparent:
          return '1px'
        default:
          return '0'
      }
    }};
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
    border-color: ${({ color, theme }) => {
      switch (true) {
        case color === buttonColors.transparent:
          return theme.palette.orange01
        default:
          return 'none'
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
  }

  .children-container {
    min-width: 0;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const IconContainer = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
`

Button.defaultProps = {
  disabled: false,
  type: 'button',
  size: buttonSizes.normal,
  variant: buttonVariants.contained,
  color: buttonColors.orange
}

export default Button
