import React from 'react'
import styled from 'styled-components'
import { Pin as PinIcon } from '../../icons/Pin'

interface PinProps {
  variant?: 'A' | 'B' | 'C'
  onClick?: (e: any) => void
}

export const Pin = (props: PinProps): JSX.Element => {
  const { variant, onClick } = props

  return (
    <IconVariant variant={variant} onClick={onClick}>
      <PinIcon />
    </IconVariant>
  )
}

export default Pin

const IconVariant = styled.div`
  color: ${({ theme, variant }) => {
    switch (true) {
      case variant === 'A':
        return theme.colors.pins.variantA.shape
      case variant === 'B':
        return theme.colors.pins.variantB.shape
      case variant === 'C':
        return theme.colors.pins.variantC.shape
      default:
        return theme.colors.pins.variantA.shape
    }
  }};
  background-color: ${({ theme, variant }) => {
    switch (true) {
      case variant === 'A':
        return theme.colors.pins.variantA.background
      case variant === 'B':
        return theme.colors.pins.variantB.background
      case variant === 'C':
        return theme.colors.pins.variantC.background
      default:
        return theme.colors.pins.variantA.background
    }
  }};
  border: 1px solid
    ${({ theme, variant }) => {
      switch (true) {
        case variant === 'A':
          return theme.colors.pins.variantA.shape
        case variant === 'B':
          return theme.colors.pins.variantB.shape
        case variant === 'C':
          return theme.colors.pins.variantC.shape
        default:
          return theme.colors.pins.variantA.shape
      }
    }};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 4px;
`
