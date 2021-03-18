import React from 'react'
import styled from 'styled-components'

const buttonSizes = {
  normal: 'normal',
  small: 'small',
  large: 'large',
}

const buttonVariants = {
  contained: 'contained',
  outlined: 'outlined',
}

const buttonColors = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
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
    id,
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
  border-radius: ${props => props.theme.shape.borderRadius};
  display: inline-flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  padding: 0 16px;
  font-size: ${props => {
    switch (props.size) {
      case buttonSizes.small:
        return '12px'
      case buttonSizes.large:
        return '14px'
      default:
        return '14px'
    }
  }};
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 400;
  height: ${props => {
    switch (props.size) {
      case buttonSizes.small:
        return props.theme.dimensions.buttonSmallHeight
      case buttonSizes.large:
        return props.theme.dimensions.buttonLargeHeight
      default:
        return props.theme.dimensions.buttonNormalHeight
    }
  }};
  color: ${props => {
    switch (true) {
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.primary:
        return props.theme.palette.primary.contrastText
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.secondary:
        return props.theme.palette.secondary.contrastText
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.tertiary:
        return props.theme.palette.tertiary.contrastText
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.primary:
        return props.theme.palette.primary.main
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.secondary:
        return props.theme.palette.secondary.main
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.tertiary:
        return props.theme.palette.tertiary.main
      default:
        return props.theme.palette.text.main
    }
  }};
  background-color: ${props => {
    switch (true) {
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.primary:
        return props.theme.palette.primary.main
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.secondary:
        return props.theme.palette.secondary.main
      case props.variant === buttonVariants.contained &&
        props.color === buttonColors.tertiary:
        return props.theme.palette.tertiary.main
      default:
        return 'transparent'
    }
  }};
  border-width: ${props =>
    props.variant === buttonVariants.contained ? '0px' : '2px'};
  border-style: ${props =>
    props.variant === buttonVariants.contained ? 'none' : 'solid'};
  border-color: ${props => {
    switch (true) {
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.primary:
        return props.theme.palette.primary.main
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.secondary:
        return props.theme.palette.secondary.main
      case props.variant === buttonVariants.outlined &&
        props.color === buttonColors.tertiary:
        return props.theme.palette.tertiary.main
      default:
        return 'transparent'
    }
  }};
  background-position: center;
  transition: background 800ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled {
    cursor: pointer;
    outline: none;
    background: ${props => {
      switch (true) {
        case props.variant === buttonVariants.contained &&
          props.color === buttonColors.primary:
          return `${props.theme.palette.primary.light} radial-gradient(circle, transparent 1%, ${props.theme.palette.primary.light} 1%) center/15000%`
        case props.variant === buttonVariants.contained &&
          props.color === buttonColors.secondary:
          return `${props.theme.palette.secondary.light} radial-gradient(circle, transparent 1%, ${props.theme.palette.secondary.light} 1%) center/15000%`
        case props.variant === buttonVariants.contained &&
          props.color === buttonColors.tertiary:
          return `${props.theme.palette.tertiary.light} radial-gradient(circle, transparent 1%, ${props.theme.palette.tertiary.light} 1%) center/15000%`
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.primary:
          return `${props.theme.palette.primary.light} radial-gradient(circle, transparent 1%, ${props.theme.palette.common.white} 1%) center/15000%`
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.secondary:
          return `${props.theme.palette.secondary.light} radial-gradient(circle, transparent 1%, ${props.theme.palette.common.white} 1%) center/15000%`
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.tertiary:
          return `${props.theme.palette.tertiary.light} radial-gradient(circle, transparent 1%, ${props.theme.palette.common.white} 1%) center/15000%`
        default:
          return 'transparent'
      }
    }};
    border-color: ${props => {
      switch (true) {
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.primary:
          return props.theme.palette.primary.light
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.secondary:
          return props.theme.palette.secondary.light
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.tertiary:
          return props.theme.palette.tertiary.light
        default:
          return 'transparent'
      }
    }};
  }
  &:active:enabled {
    outline: none;
    background-color: ${props => {
      switch (true) {
        case props.variant === buttonVariants.contained &&
          props.color === buttonColors.primary:
          return props.theme.palette.primary.dark
        case props.variant === buttonVariants.contained &&
          props.color === buttonColors.secondary:
          return props.theme.palette.secondary.dark
        case props.variant === buttonVariants.contained &&
          props.color === buttonColors.tertiary:
          return props.theme.palette.tertiary.dark
        default:
          return 'transparent'
      }
    }};
    border-color: ${props => {
      switch (true) {
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.primary:
          return props.theme.palette.primary.dark
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.secondary:
          return props.theme.palette.secondary.dark
        case props.variant === buttonVariants.outlined &&
          props.color === buttonColors.tertiary:
          return props.theme.palette.tertiary.dark
        default:
          return 'transparent'
      }
    }};
    background-size: 100%;
    transition: background 0ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .button__start-icon {
    margin-right: 8px;
  }
`

Button.defaultProps = {
  disabled: false,
  type: 'button',
  size: buttonSizes.normal,
  variant: buttonVariants.contained,
  color: buttonColors.primary,
}

export default Button
