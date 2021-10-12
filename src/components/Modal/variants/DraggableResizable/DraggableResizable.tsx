import React from 'react'
import styled from 'styled-components'
import { DraggableResizable } from '../../../DraggableResizable'

type DraggableResizableModalProps = {
  children: React.ReactNode
  height: number
  width: number
  open?: boolean
  isStatic?: boolean
}

const DraggableResizableModal = (
  props: DraggableResizableModalProps
): JSX.Element => {
  const { children, height, width, open, isStatic } = props

  if (open) {
    return !isStatic ? (
      <DraggableResizable width={width} height={height}>
        <Content>{children}</Content>
      </DraggableResizable>
    ) : (
      <Container width={width} height={height}>
        <Content>{children}</Content>
      </Container>
    )
  }

  return <React.Fragment />
}

DraggableResizableModal.defaultArgs = {
  open: false,
  isStatic: false
}

const Container = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  font-family: ${({ theme }) => theme.typography.fontFamilySecondary};
  height: ${({ height }) => height}px;
  left: calc((100% - ${({ width }) => width}px) / 2);
  overflow: hidden;
  position: fixed;
  top: calc((100% - ${({ height }) => height}px) / 2);
  width: ${({ width }) => width}px;
  z-index: 1300;
`

const Content = styled.div`
  background: ${({ theme }) => theme.palette.blue02};
  color: ${({ theme }) => theme.palette.white};
  font-family: ${({ theme }) => theme.typography.fontFamilySecondary};
  font-size: 16px;
  overflow: hidden;
  padding: 0.6em 2em;
  position: relative;
  width: 100%;
`

export default DraggableResizableModal
