import React from 'react'
import styled from 'styled-components'

interface Heading1Props {
  bold: boolean
  children: React.ReactNode
}

const Heading1 = (props: Heading1Props) => (
  <Container isBold={props.bold}>{props.children}</Container>
)

const Container = styled.h1`
  color: ${({ theme }) => theme.colors.main.heading};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 22px;
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  line-height: 29px;
  letter-spacing: 0;
  margin: 0;
`

Heading1.defaultProps = {
  bold: false
}

export default Heading1
