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
  endIcon?: any
  type?: string
  disabled?: boolean
  isLoading?: boolean
  autofocus?: boolean
  name?: string
  value?: string
  id?: string
}

const Button = (props: ButtonProps): JSX.Element => {
  const { children, startIcon, endIcon, isLoading, autofocus } = props

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
      {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
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
  color: ${({ variant, color, theme }) =>
    theme.colors.buttons[variant][color].font || theme.colors.main.text};
  background-color: ${({ variant, color, theme }) =>
    theme.colors.buttons[variant][color].background || theme.colors.main.white};
  border-color: ${({ variant, color, theme }) =>
    theme.colors.buttons[variant][color].border || 'transparent'};
  box-shadow: none;
  border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
  border-width: 1px;
  border-style: solid;
  background-position: center;
  transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  .loader {
    margin: 0 auto;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ variant, theme }) =>
      theme.colors.buttons[variant].disabled.font || theme.colors.main.grey400};
    background-color: ${({ variant, theme }) =>
      theme.colors.buttons[variant].disabled.background ||
      theme.colors.main.grey200};
    border-color: ${({ variant, theme }) =>
      theme.colors.buttons[variant].disabled.border || 'transparent'};
    border-style: solid;
    border-width: 1px;
  }

  &:hover:enabled,
  &:active:enabled {
    color: ${({ variant, color, theme }) =>
      theme.colors.buttons[variant][color].fontActive || 'inherit'};
    background-color: ${({ variant, color, theme }) =>
      theme.colors.buttons[variant][color].backgroundActive || 'inherit'};
    border-color: ${({ variant, color, theme }) =>
      theme.colors.buttons[variant][color].borderActive || 'inherit'};
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

const EndIconContainer = styled.div`
  margin-left: 8px;
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
