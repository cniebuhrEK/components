import React from 'react'
import styled from 'styled-components'

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
      {startIcon && <span className='button__start-icon'>{startIcon}</span>}
      {children}
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
  font-size: ${props => {
    switch (props.size) {
      case buttonSizes.small:
        return props.theme.typography.fontSizeSmall
      case buttonSizes.normal:
      default:
        return props.theme.typography.fontSizeNormal
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
        return props.theme.palette.brown01
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
    color: ${props => props.theme.palette.grey08};
    background-color: ${props => {
      switch (true) {
        case props.color === buttonColors.orange:
          return props.theme.palette.orange10
        case props.color === buttonColors.green:
          return props.theme.palette.green10
        case props.color === buttonColors.transparent:
        default:
          return 'transparent'
      }
    }};
    border-color: transparent;
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
  }

  .button__start-icon {
    margin-right: 8px;
    margin-left: -2px;
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
