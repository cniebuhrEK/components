import React from 'react'
import styled from 'styled-components'

interface TextProps {
  bold: boolean
  size: 'xs' | 's' | 'm'
  children: React.ReactNode
}

const Text = (props: TextProps) => (
  <Container isBold={props.bold} size={props.size}>
    {props.children}
  </Container>
)

const Container = styled.p`
  margin: 0;
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  font-family: ${({ theme }) => theme.typography.fontFamily};

  font-size: ${({ size, theme }) => {
    switch (true) {
      case size === 'xs':
        return theme.typography.fontSizeExtraSmall
      case size === 's':
        return theme.typography.fontSizeSmall
      case size === 'm':
      default:
        return theme.typography.fontSizeNormal
    }
  }};

  line-height: ${({ size }) => {
    switch (true) {
      case size === 'xs':
        return '15px'
      case size === 's':
        return '16px'
      case size === 'm':
        return '19px'
      default:
        return '0px'
    }
  }};
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.palette.gray1};
`

export default Text
