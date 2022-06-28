// IconButton/IconButton.tsx - Icon button component

import React from 'react'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../../utils/ramda'
import { Tooltip } from '../Tooltip'

type ButtonProps =
  | {
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
      onClick?: (e: any) => void
      icon?: any
      type?: string
      size?: 'small' | 'medium'
      disabled?: boolean
      tooltip?: JSX.Element | string
      tooltipId?: string
      autofocus?: boolean
      id?: string
      name?: string
      variant?: 'filled' | 'outlined' | 'transparent'
      text?: string
    }
  | {
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
      onClick?: (e: any) => void
      size?: 'small' | 'medium'
      icon?: any
      type?: string
      disabled?: boolean
      tooltip: JSX.Element | string
      tooltipId: string
      autofocus?: boolean
      id?: string
      name?: string
      variant?: 'filled' | 'outlined' | 'transparent'
      text?: string
    }

const variants = {
  filled: 'filled',
  outlined: 'outlined',
  transparent: 'transparent'
}

const sizes = {
  small: 'small',
  medium: 'medium'
}

// this is because there was inconsistency of naming variants
const variantsMap = {
  [variants.filled]: 'contained',
  [variants.outlined]: 'outlined',
  [variants.transparent]: 'transparent'
}

const buttonColors = {
  tertiary: 'tertiary',
  orange: 'orange',
  green: 'green',
  blue: 'blue',
  transparent: 'transparent',
  red: 'red',
  black: 'black'
}

// this is because there was inconsistency of naming colors
const colorsMap = {
  primary: 'primary',
  tertiary: 'tertiary',
  [buttonColors.orange]: 'primary',
  [buttonColors.green]: 'green',
  [buttonColors.blue]: 'secondary',
  secondary: 'secondary',
  [buttonColors.transparent]: 'transparent',
  [buttonColors.red]: 'red',
  [buttonColors.black]: 'black'
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
    tooltip,
    tooltipId,
    size,
    color = buttonColors.orange,
    text
  } = props

  const renderButton = (
    <StyledButton
      name={name}
      onClick={onClick}
      autoFocus={autofocus}
      disabled={disabled}
      type={type}
      id={id}
      variant={variant}
      color={color}
      size={size}
      text={text}
      {...props}
    >
      {text && <TextWrapper>{text}</TextWrapper>}
      {icon}
    </StyledButton>
  )

  return isNotNilOrEmpty(tooltip) ? (
    // @ts-ignore
    <Tooltip tooltipContent={tooltip} id={tooltipId}>
      {renderButton}
    </Tooltip>
  ) : (
    renderButton
  )
}

export const TextWrapper = styled.div`
  margin-right: 5px;
`

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
  width: ${({ size }) => (size === sizes.small ? 24 : 32)}px;
  height: ${({ size }) => (size === sizes.small ? 24 : 32)}px;
  justify-content: center;
  color: ${({ variant, color, theme }) =>
    theme.colors.buttons[variantsMap[variant]][colorsMap[color]].font ||
    theme.colors.main.text};
  background: ${({ variant, color, theme }) =>
    theme.colors.buttons[variantsMap[variant]][colorsMap[color]].background ||
    theme.colors.main.white};
  border-color: ${({ variant, color, theme }) =>
    theme.colors.buttons[variantsMap[variant]][colorsMap[color]].border ||
    'transparent'};
  box-shadow: none;
  border-width: ${({ variant }) => (variant === variants.filled ? '0' : '1px')};
  border-style: solid;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  svg {
    fill: ${({ variant, color, theme }) =>
      theme.colors.buttons[variantsMap[variant]][colorsMap[color]].font ||
      theme.colors.main.text};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:hover:enabled,
  &:active:enabled {
    color: ${({ variant, color, theme }) =>
      theme.colors.buttons[variantsMap[variant]][colorsMap[color]].fontActive ||
      theme.colors.main.text};
    background: ${({ variant, color, theme }) =>
      theme.colors.buttons[variantsMap[variant]][colorsMap[color]]
        .backgroundActive || theme.colors.main.white};
    border-color: ${({ variant, color, theme }) =>
      theme.colors.buttons[variantsMap[variant]][colorsMap[color]]
        .borderActive || 'transparent'};
  }
`

IconButton.defaultProps = {
  disabled: false,
  type: 'button',
  variant: 'transparent',
  color: 'orange'
}

export default IconButton
