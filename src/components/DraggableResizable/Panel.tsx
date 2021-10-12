import React from 'react'
import usePortal from 'react-useportal'
import styled from 'styled-components'

import PanelHeader from './PanelHeader'
import Resizer from './Resizer'
import { Direction } from './util/constants'

type PanelProps = {
  title: string
  width: number
  height: number
  handleClose: any
  children: React.ReactNode
}

const Panel = (props: PanelProps): JSX.Element => {
  const { title, width, height, handleClose, children } = props
  const panelRef = React.useRef<HTMLDivElement>(null)

  // Handle the dragging of the panel.
  // Use movement and enforce collisions inside the window.
  function handleDrag(movementX: number, movementY: number): void {
    const panel = panelRef.current
    if (!panel) return

    const { x, y, width, height } = panel.getBoundingClientRect()

    const parentX: number = window.innerWidth
    const parentY: number = window.innerHeight
    const newX: number = x + movementX
    const newY: number = y + movementY

    // Left collisions
    if (newX < 0) {
      panel.style.left = `0px`
      return
    }

    // Top collisions
    if (newY < 0) {
      panel.style.top = `0px`
      return
    }

    // Right collisions
    if (newX + width >= parentX) {
      panel.style.left = `${parentX - width}px`
      return
    }

    // Bottom collisions
    if (newY + height >= parentY) {
      panel.style.top = `${parentY - height}px`
      return
    }

    // Handle moving
    panel.style.left = `${x + movementX}px`
    panel.style.top = `${y + movementY}px`
  }

  // Handle resizing the panel
  function handleResize(
    direction: Direction,
    movementX: number,
    movementY: number
  ): void {
    const panel: any = panelRef.current
    if (!panel) return

    const { width, height, x, y } = panel.getBoundingClientRect()
    const minWidth: number = 24
    const minHeight: number = 24

    function resizeTop(): void {
      panel.style.height = `${
        height - movementY < minHeight ? minHeight : height - movementY
      }px`

      panel.style.top = `${y + movementY}px`
    }

    function resizeRight(): void {
      panel.style.width = `${
        width + movementX < minWidth ? minWidth : width + movementX
      }px`
    }

    function resizeBottom(): void {
      panel.style.height = `${
        height + movementY < minHeight ? minHeight : height + movementY
      }px`
    }

    function resizeLeft(): void {
      panel.style.width = `${
        width - movementX < minWidth ? minWidth : width - movementX
      }px`

      panel.style.left = `${x + movementX}px`
    }

    switch (direction) {
      case Direction.TopLeft:
        resizeTop()
        resizeLeft()
        break

      case Direction.Top:
        resizeTop()
        break

      case Direction.TopRight:
        resizeTop()
        resizeRight()
        break

      case Direction.Right:
        resizeRight()
        break

      case Direction.BottomRight:
        resizeBottom()
        resizeRight()
        break

      case Direction.Bottom:
        resizeBottom()
        break

      case Direction.BottomLeft:
        resizeBottom()
        resizeLeft()
        break

      case Direction.Left:
        resizeLeft()
        break

      default:
        break
    }
  }

  return (
    <Container ref={panelRef} width={width} height={height}>
      <Resizer onResize={handleResize} />
      <PanelHeader
        title={title}
        handleClose={handleClose}
        onDrag={handleDrag}
        panelRef={panelRef}
      />
      <React.Fragment>{children}</React.Fragment>
    </Container>
  )
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

const PanelPortal = (props: any) => {
  const { Portal } = usePortal({
    // @ts-ignore
    bindTo: document.getElementById('panel-portal')
  })

  return (
    <Portal>
      <Panel {...props} />
    </Portal>
  )
}

export default PanelPortal
