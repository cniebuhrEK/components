import React from 'react'
import styled from 'styled-components'

type ScrollerProps = {
  children?: JSX.Element[] | JSX.Element | string
}

const Scroller = (props: ScrollerProps): JSX.Element => {
  const { children } = props

  return <Container>{children}</Container>
}

const Container = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.palette.brown01}
    ${({ theme }) => theme.palette.brown09};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.brown09};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.brown01};
  }
`

export default Scroller
