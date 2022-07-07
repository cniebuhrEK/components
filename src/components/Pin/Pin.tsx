import React from 'react'
import styled from 'styled-components'
import { Pin as PinIcon } from '../../icons/Pin'

interface PinProps {
  variant?: 'A' | 'B' | 'C'
  onClick?: (e: any) => void
  active?: boolean
  children?: any
}

export const Pin = (props: PinProps): JSX.Element => {
  const { variant, onClick, active, children } = props

  return (
    <Container>
      <IconVariant onClick={onClick} variant={variant} active={active}>
        <PinIcon />
      </IconVariant>
      {active ? <ChildrenWrapper>{children}</ChildrenWrapper> : null}
    </Container>
  )
}

export default Pin

const Container = styled.div`
  position: relative;
`
const IconVariant = styled.div`
  color: ${({ theme, variant, active }) => {
    switch (true) {
      case variant === 'A':
        return active
          ? theme.colors.main.white
          : theme.colors.pins.variantA.shape
      case variant === 'B':
        return active
          ? theme.colors.main.white
          : theme.colors.pins.variantB.shape
      case variant === 'C':
        return active
          ? theme.colors.main.white
          : theme.colors.pins.variantC.shape
      default:
        return theme.colors.pins.variantA.shape
    }
  }};
  background-color: ${({ theme, variant, active }) => {
    switch (true) {
      case variant === 'A':
        return active
          ? theme.colors.pins.variantA.backgroundActive
          : theme.colors.pins.variantA.background
      case variant === 'B':
        return active
          ? theme.colors.pins.variantB.backgroundActive
          : theme.colors.pins.variantB.background
      case variant === 'C':
        return active
          ? theme.colors.pins.variantC.backgroundActive
          : theme.colors.pins.variantC.background
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
  position: relative;
`
const ChildrenWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 24px;
`
