import React from 'react'
import styled from 'styled-components'

import Loader from './Loader'

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
  transparent: 'transparent'
}

interface ButtonProps {
  onClick?: (e) => any
  children?: JSX.Element | string
  size?: string
  color?: string
  variant?: string
  startIcon?: any
  type?: string
  disabled?: boolean
  loading?: boolean
  autofocus?: boolean
  name?: string
  value?: string
  id?: string
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    onClick,
    children,
    size,
    color,
    variant,
    startIcon,
    type,
    disabled,
    autofocus,
    name,
    value,
    loading,
    id
  } = props

  return (
    <StyledButton
      onClick={onClick}
      name={name}
      value={value}
      autoFocus={autofocus}
      disabled={disabled}
      type={type}
      size={size}
      color={color}
      variant={variant}
      id={id}
      {...props}
    >
      {startIcon && <div className='button__start-icon'>{startIcon}</div>}
      {loading ? <Loader /> : children}
    </StyledButton>
  )
}

export const StyledButton = styled.button`
  border-radius: ${props => {
    switch (props.size) {
      case buttonSizes.small:
        return props.theme.shape.borderRadiusSmall
      case buttonSizes.normal:
      default:
        return props.theme.shape.borderRadiusNormal
    }
  }};
  display: inline-flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  padding: 0 16px;
  letter-spacing: -0.1px;
  font-size: ${props => {
    switch (props.size) {
      case buttonSizes.small:
        return props.theme.typography.fontSizeSmall
      case buttonSizes.normal:
      default:
        return props.theme.typography.fontSizeSmall
    }
  }};
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 600;
  height: ${props => {
    switch (props.size) {
      case buttonSizes.small:
        return props.theme.dimensions.buttonSmallHeight
      case buttonSizes.normal:
      default:
        return props.theme.dimensions.buttonNormalHeight
    }
  }};
  justify-content: center;
  min-width: ${props => {
    switch (props.size) {
      case buttonSizes.normal:
        return props.theme.dimensions.buttonNormalMinWidth
      case buttonSizes.small:
      default:
        return props.theme.dimensions.buttonSmallMinWidth
    }
  }};
  color: ${props => {
    switch (true) {
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.orange:
        return props.theme.palette.brown01
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.green:
        return props.theme.palette.biege
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.transparent:
        return props.theme.palette.grey07
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.orange:
        return props.theme.palette.orange05
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.green:
        return props.theme.palette.green04
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.transparent:
        return props.theme.palette.grey07
      default:
        return props.theme.palette.brown01
    }
  }};
  background-color: ${props => {
    switch (true) {
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.orange:
        return props.theme.palette.orange05
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.green:
        return props.theme.palette.green04
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.transparent:
      default:
        return 'transparent'
    }
  }};
  box-shadow: none;
  border-width: ${props =>
    props.variant === buttonVariants.contained ? '0px' : '1px'};
  border-style: ${props =>
    props.variant === buttonVariants.contained ? 'none' : 'solid'};
  border-color: ${props => {
    switch (true) {
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.orange:
        return props.theme.palette.orange05
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.green:
        return props.theme.palette.green04
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.transparent:
        return props.theme.palette.grey07
      default:
        return 'transparent'
    }
  }};
  background-position: center;
  transition: all 800ms ${props => props.theme.transitions.easing.easeInOut} 0ms;

  &:disabled {
    cursor: not-allowed;
    color: ${props => {
      switch (true) {
        case props.size === buttonSizes.small &&
          props.variant === buttonVariants.contained:
          return props.theme.palette.biege
        default:
          return props.theme.palette.grey08
      }
    }};
    background-color: ${props => {
      switch (true) {
        case props.variant === buttonVariants.outlined:
          return 'transparent'
        case props.size === buttonSizes.small &&
          props.variant === buttonVariants.contained:
          return props.theme.palette.grey08
        case props.color === buttonColors.orange:
          return props.theme.palette.orange10
        case props.color === buttonColors.green:
          return props.theme.palette.green10
        case props.color === buttonColors.transparent:
        default:
          return 'transparent'
      }
    }};
    border-color: ${props => {
      switch (true) {
        case props.variant === buttonVariants.outlined:
          return props.theme.palette.grey08
        default:
          return 'transparent'
      }
    }};
  }

  &:hover:enabled,
  &:active:enabled {
    color: ${props => {
      switch (true) {
        case props.color === buttonColors.orange:
          return props.theme.palette.biege
        case props.color === buttonColors.green:
          return props.theme.palette.biege
        case props.color === buttonColors.transparent:
        default:
          return props.theme.palette.grey07
      }
    }};

    background-color: ${props => {
      switch (true) {
        case props.color === buttonColors.orange:
          return props.theme.palette.orange04
        case props.color === buttonColors.green:
          return props.theme.palette.green04
        case props.color === buttonColors.transparent:
        default:
          return props.theme.palette.grey10
      }
    }};
    border-color: transparent;
    box-shadow: ${props => {
      switch (true) {
        case props.color === buttonColors.orange:
          return props.theme.shadows.orangeShadow
        case props.color === buttonColors.green:
          return props.theme.shadows.greenShadow
        case props.color === buttonColors.transparent:
        default:
          return 'none'
      }
    }};
  }

  .button__start-icon {
    margin-right: 8px;
    margin-left: -2px;
    line-height: 16px;
    height: 16px;
  }
`

Button.defaultProps = {
  disabled: false,
  type: 'button',
  size: buttonSizes.normal,
  variant: buttonVariants.contained,
  color: buttonColors.orange
}

export default Button
