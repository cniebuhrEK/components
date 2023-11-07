import React from 'react'
import styled from 'styled-components'
import { Tooltip } from '../Tooltip'

import { Loader } from '../Loader'
import { isNotNilOrEmpty } from '../../utils/ramda'

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
  black: 'black',
  tertiary: 'tertiary',
  darkRed: 'darkRed',
  purple: 'purple'
}

// this is because there was inconsistency of naming colors
const colorsMap = {
  tertiary: 'tertiary',
  primary: 'primary',
  [buttonColors.orange]: 'primary',
  [buttonColors.green]: 'green',
  [buttonColors.blue]: 'secondary',
  secondary: 'secondary',
  [buttonColors.transparent]: 'transparent',
  [buttonColors.red]: 'red',
  [buttonColors.black]: 'black',
  [buttonColors.darkRed]: 'darkRed',
  [buttonColors.purple]: 'purple'
}

type ButtonProps =
  | {
      onClick?: (e: any) => void
      onMouseEnter?: (e: any) => void
      onMouseLeave?: (e: any) => void
      children?: JSX.Element | string
      size?: 'small' | 'normal'
      color?:
        | 'tertiary'
        | 'orange'
        | 'green'
        | 'blue'
        | 'transparent'
        | 'red'
        | 'black'
        | 'primary'
        | 'secondary'
        | 'darkRed'
        | 'purple'
      variant?: 'contained' | 'outlined'
      startIcon?: any
      endIcon?: any
      type?: string
      disabled?: boolean
      tooltip?: JSX.Element | string
      tooltipId?: string
      isLoading?: boolean
      autofocus?: boolean
      name?: string
      value?: string
      id?: string
    }
  | {
      onClick?: (e: any) => void
      onMouseEnter?: (e: any) => void
      onMouseLeave?: (e: any) => void
      children?: JSX.Element | string
      size?: 'small' | 'normal'
      color?:
        | 'orange'
        | 'green'
        | 'blue'
        | 'transparent'
        | 'red'
        | 'black'
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'darkRed'
        | 'purple'
      variant?: 'contained' | 'outlined'
      startIcon?: any
      endIcon?: any
      type?: string
      disabled?: boolean
      tooltip: JSX.Element | string
      tooltipId: string
      isLoading?: boolean
      autofocus?: boolean
      name?: string
      value?: string
      id?: string
    }

const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    startIcon,
    endIcon,
    isLoading,
    autofocus,
    tooltip,
    tooltipId
  } = props

  const buttonComponent = (
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

  return isNotNilOrEmpty(tooltip) ? (
    // @ts-ignore
    <Tooltip tooltipContent={tooltip} id={tooltipId}>
      {buttonComponent}
    </Tooltip>
  ) : (
    buttonComponent
  )
}

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  padding: ${({ size }) => {
    switch (size) {
      case buttonSizes.small:
        return '0 12px'
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
  font-weight: bold;
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
    theme.colors.buttons[variant][colorsMap[color]].font ||
    theme.colors.main.text};
  background: ${({ variant, color, theme }) =>
    theme.colors.buttons[variant][colorsMap[color]].background ||
    theme.colors.main.white};
  border-color: ${({ variant, color, theme }) =>
    theme.colors.buttons[variant][colorsMap[color]].border || 'transparent'};
  border-width: ${({ variant }) =>
    variant === buttonVariants.contained ? '0' : '1px'};
  box-shadow: none;
  border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
  border-style: solid;
  background-position: center;
  transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  .loader {
    margin: 0 auto;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:hover:enabled,
  &:active:enabled {
    color: ${({ variant, color, theme }) =>
      theme.colors.buttons[variant][colorsMap[color]].fontActive || 'inherit'};
    background: ${({ variant, color, theme }) =>
      theme.colors.buttons[variant][colorsMap[color]].backgroundActive ||
      'inherit'};
    border-color: ${({ variant, color, theme }) =>
      theme.colors.buttons[variant][colorsMap[color]].borderActive ||
      'inherit'};
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
