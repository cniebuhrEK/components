import React from 'react'
import styled from 'styled-components'

interface Heading2Props {
  bold: boolean
  children: React.ReactNode
}

const Heading2 = (props: Heading2Props) => (
  <Container isBold={props.bold}>{props.children}</Container>
)

const Container = styled.h2`
  color: ${({ theme }) => theme.palette.brown01};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 19px;
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  line-height: 23px;
  letter-spacing: 0;
  margin: 0;
`

Heading2.defaultProps = {
  bold: false
}

export default Heading2
