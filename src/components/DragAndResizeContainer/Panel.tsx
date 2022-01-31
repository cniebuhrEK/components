import React from 'react'
import styled from 'styled-components'

import PanelHeader from './components/PanelHeader'
import Resizer from './components/Resizer'

import { Direction } from './components/Resizer/constants'

const Panel = ({
  title,
  initWidth,
  initHeight,
  showBottomResizeIcons,
  handleClose,
  children,
  onResize,
  id,
  type
}) => {
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

  const resizeCallback = () => {
    if (onResize) {
      onResize()
    }
  }

  // Handle resizing the panel
  function handleResize(
    direction: string,
    movementX: number,
    movementY: number
  ): void {
    const panel = panelRef.current
    if (!panel) return

    const { width, height, x, y } = panel.getBoundingClientRect()

    const resizeTop = () => {
      panel.style.height = `${
        height - movementY < 100 ? 100 : height - movementY
      }px`
      panel.style.top = `${y + movementY}px`
      resizeCallback()
    }

    const resizeRight = () => {
      panel.style.width = `${
        width + movementX < 100 ? 100 : width + movementX
      }px`
      resizeCallback()
    }

    const resizeBottom = () => {
      panel.style.height = `${
        height + movementY < 100 ? 100 : height + movementY
      }px`
      resizeCallback()
    }

    const resizeLeft = () => {
      panel.style.width = `${
        width - movementX < 100 ? 100 : width - movementX
      }px`
      panel.style.left = `${x + movementX}px`
      resizeCallback()
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
    <PanelContainer
      ref={panelRef}
      initWidth={initWidth}
      initHeight={initHeight}
      type={type}
    >
      <div className='panel__container'>
        <Resizer onResize={handleResize} />
        <PanelHeader
          title={title}
          handleClose={handleClose}
          onDrag={handleDrag}
        />
        <div className='panel__content' id={id}>
          <div className='panel__children-container'>{children}</div>
          {showBottomResizeIcons && (
            <div className='panel__bottom-resize-icons'>
              <div className='panel__bottom-resize-left'>
                <img src='/assets/exam/resize-left.gif' />
              </div>
              <div className='panel__bottom-resize-right'>
                <img src='/assets/exam/resize-right.gif' />
              </div>
            </div>
          )}
        </div>
      </div>
    </PanelContainer>
  )
}

const PanelContainer = styled.div`
  position: fixed;
  top: ${props =>
    props?.type === 'student-book-video'
      ? `calc(100% - ${props.initHeight}px)` /* bottom right corner  */
      : `calc((100% - ${props.initHeight}px) / 2)`};
  left: ${props =>
    props?.type === 'student-book-video'
      ? `calc(100% - ${props.initWidth}px)` /* bottom right corner  */
      : `calc((100% - ${props.initWidth}px) / 2)`};
  width: ${props => props.initWidth}px;
  height: ${props => props.initHeight}px;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndex.modal};
  box-shadow: ${props => props.theme.shadows.darkShadow};

  .panel__container {
    height: 100%;
    position: relative;
  }

  .panel__content {
    position: relative;
    font-size: 16px;
    height: calc(100% - 28px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.palette.biege};
    overflow: hidden;
  }

  .panel__children-container {
    height: 100%;
    overflow: hidden;
  }

  .panel__header {
    height: 28px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 16px;
    line-height: 24px;
    cursor: move;
    background: ${props => props.theme.palette.biege};
    z-index: ${({ theme }) => theme.zIndex.modal + 10};

    strong {
      font-weight: 700;
    }

    svg {
      transform: translateY(3px);
    }

    user-select: none;
  }

  .panel__buttons-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .panel__bottom-resize-icons {
  }

  .panel__bottom-resize-left {
    position: absolute;
    bottom: 0px;
    left: 3px;
    color: ${props => props.theme.palette.textDark};

    img {
      transform: scaleX(-1);
      width: 11px;
      height: 11px;
    }
  }

  .panel__bottom-resize-right {
    position: absolute;
    bottom: 0px;
    right: 3px;
    color: ${props => props.theme.palette.textDark};

    img {
      width: 11px;
      height: 11px;
    }
  }

  .panel__close {
    font-family: ${props => props.theme.typography.fontFamilySecondary};
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    color: ${props => props.theme.palette.textDark};
    font-size: 17px;
    line-height: 24px;
  }

  .top-left {
    position: absolute;
    cursor: nwse-resize;
    height: 10px;
    width: 10px;
    z-index: 2;
    left: 0;
    top: 0;
  }

  .top {
    position: absolute;
    cursor: ns-resize;
    height: 4px;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0;
  }

  .top-right {
    position: absolute;
    cursor: nesw-resize;
    height: 10px;
    width: 10px;
    z-index: 2;
    right: 0;
    top: 0;
  }

  .right {
    position: absolute;
    cursor: ew-resize;
    width: 4px;
    height: 100%;
    z-index: 1;
    right: 0;
    top: 0;
  }

  .bottom-left {
    position: absolute;
    cursor: nesw-resize;
    width: 10px;
    height: 10px;
    z-index: 2;
    left: 0;
    bottom: 0;
  }

  .bottom {
    position: absolute;
    cursor: ns-resize;
    width: 100%;
    height: 4px;
    z-index: 1;
    bottom: 0;
    left: 0;
  }

  .right-bottom {
    position: absolute;
    cursor: nwse-resize;
    width: 10px;
    height: 10px;
    z-index: 2;
    right: 0;
    bottom: 0;
  }

  .left {
    position: absolute;
    cursor: ew-resize;
    width: 4px;
    height: 100%;
    z-index: 1;
    left: 0;
    top: 0;
  }
`

export default Panel
