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
}

const Button = (props: ButtonProps): JSX.Element => {
  const { onClick, icon, type, disabled, autofocus, id, name } = props

  return (
    <StyledButton
      name={name}
      onClick={onClick}
      autoFocus={autofocus}
      disabled={disabled}
      type={type}
      id={id}
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
  font-size:  ${({ theme }) => theme.typography.fontSizeNormal};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.grey07};
  background-color: transparent;
  box-shadow: none;
  border: none;
  transition: all 300ms ${({ theme }) =>
    theme.transitions.easing.easeInOut} 0ms;

  svg {
    color: ${({ theme }) => theme.palette.grey07};
  }

  &:disabled {
    svg {
      color: ${({ theme }) => theme.palette.grey08};
    }
  }

  &:hover:enabled,
  &:active:enabled {
    background-color: ${({ theme }) => theme.palette.grey10}};
  }
`

Button.defaultProps = {
  disabled: false,
  type: 'button'
}

export default Button
