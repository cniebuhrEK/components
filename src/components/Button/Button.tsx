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
  transparent: 'transparent'
}

interface ButtonProps {
  onClick?: (e: any) => void
  onMouseEnter?: (e: any) => void
  onMouseLeave?: (e: any) => void
  children?: JSX.Element | string
  size?: string
  color?: 'orange' | 'green' | 'blue' | 'transparent'
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
  font-weight: 600;
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
      case variant === buttonVariants.contained && color === buttonColors.green:
        return theme.palette.biege
      case variant === buttonVariants.contained && color === buttonColors.blue:
        return theme.palette.orange01
      case variant === buttonVariants.contained &&
        color === buttonColors.transparent:
        return theme.palette.grey07

      case variant === buttonVariants.outlined && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === buttonVariants.outlined && color === buttonColors.green:
        return theme.palette.green04
      case variant === buttonVariants.outlined && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === buttonVariants.outlined &&
        color === buttonColors.transparent:
        return theme.palette.grey07
      default:
        return theme.palette.brown01
    }
  }};
  background-color: ${({ variant, color, theme }) => {
    switch (true) {
      case variant === buttonVariants.contained &&
        color === buttonColors.orange:
        return theme.palette.orange02
      case variant === buttonVariants.contained && color === buttonColors.green:
        return theme.palette.green04
      case variant === buttonVariants.contained && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === buttonVariants.contained &&
        color === buttonColors.transparent:
      default:
        return 'transparent'
    }
  }};
  box-shadow: none;
  border-radius: ${({ size, theme }) => {
    switch (size) {
      case buttonSizes.small:
        return theme.shape.borderRadiusSmall
      case buttonSizes.normal:
      default:
        return theme.shape.borderRadiusNormal
    }
  }};

  border-width: ${({ variant }) =>
    variant === buttonVariants.contained ? '0px' : '1px'};
  border-style: ${({ variant }) =>
    variant === buttonVariants.contained ? 'none' : 'solid'};
  border-color: ${({ variant, color, theme }) => {
    switch (true) {
      case variant === buttonVariants.outlined && color === buttonColors.orange:
        return theme.palette.orange02
      case variant === buttonVariants.outlined && color === buttonColors.green:
        return theme.palette.green04
      case variant === buttonVariants.outlined && color === buttonColors.blue:
        return theme.palette.darkblue01
      case variant === buttonVariants.outlined &&
        color === buttonColors.transparent:
        return theme.palette.grey07
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
    color: ${({ color, theme, variant }) => {
      switch (true) {
        case color === buttonColors.blue &&
          variant === buttonVariants.contained:
          return theme.palette.background
        default:
          return theme.palette.inactive
      }
    }};
    background-color: ${({ variant, size, color, theme }) => {
      switch (true) {
        case variant === buttonVariants.outlined:
          return 'transparent'
        case size === buttonSizes.small && variant === buttonVariants.contained:
          return theme.palette.grey08
        case color === buttonColors.orange &&
          variant !== buttonVariants.outlined:
          return theme.palette.orange05
        case color === buttonColors.green &&
          variant !== buttonVariants.outlined:
          return theme.palette.green10
        case color === buttonColors.blue && variant !== buttonVariants.outlined:
          return theme.palette.inactive
        case color === buttonColors.transparent:
        default:
          return 'transparent'
      }
    }};
    border-color: ${({ variant, theme }) => {
      switch (true) {
        case variant === buttonVariants.outlined:
          return theme.palette.grey08
        default:
          return 'transparent'
      }
    }};
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
        default:
          return theme.palette.orange01
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
        default:
          return theme.palette.grey10
      }
    }};
    border-color: transparent;
    box-shadow: ${({ color, theme }) => {
      switch (true) {
        case color === buttonColors.orange:
          return theme.shadows.orangeShadow
        case color === buttonColors.blue:
          return theme.shadows.blueShadow
        case color === buttonColors.green:
          return theme.shadows.greenShadow
        case color === buttonColors.transparent:
        default:
          return 'none'
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
