import React, { useRef } from 'react'
import styled from 'styled-components'

import PanelHeader from './components/PanelHeader'
import Resizer from './components/Resizer'

import { Direction } from './components/Resizer/constants'
import CloseIcon from '../../../examIcons/Close'
import ResizeLeft from '../../../examIcons/ResizeLeft'
import ResizeRight from '../../../examIcons/ResizeRight'

const Panel = ({
  title,
  initWidth = 700,
  initHeight = 140,
  handleConfirm,
  handleCancel,
  showConfirmButton,
  confirmButtonName,
  showCancelButton,
  cancelButtonName,
  showBottomCloseButton,
  showBottomResizeIcons,
  handleClose,
  children
}) => {
  const panelRef = useRef(null)

  const handleDrag = (movementX, movementY) => {
    const panel = panelRef.current
    if (!panel) return

    // @ts-ignore
    const { x, y } = panel.getBoundingClientRect()

    // @ts-ignore
    panel.style.left = `${x + movementX}px`
    // @ts-ignore
    panel.style.top = `${y + movementY}px`
  }

  const handleResize = (direction, movementX, movementY) => {
    const panel = panelRef.current
    if (!panel) return

    // @ts-ignore
    const { width, height, x, y } = panel.getBoundingClientRect()

    const resizeTop = () => {
      // @ts-ignore
      panel.style.height = `${height - movementY}px`
      // @ts-ignore
      panel.style.top = `${y + movementY}px`
    }

    const resizeRight = () => {
      // @ts-ignore
      panel.style.width = `${width + movementX}px`
    }

    const resizeBottom = () => {
      // @ts-ignore
      panel.style.height = `${height + movementY}px`
    }

    const resizeLeft = () => {
      // @ts-ignore
      panel.style.width = `${width - movementX}px`
      // @ts-ignore
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
    <PanelContainer
      ref={panelRef}
      initWidth={initWidth}
      initHeight={initHeight}
    >
      <div className='panel__container'>
        <Resizer onResize={handleResize} />
        <PanelHeader
          title={title}
          handleClose={handleClose}
          onDrag={handleDrag}
        />
        <div className='panel__content'>
          <div className='panel__children-container'>{children}</div>
          <div className='panel__buttons-container'>
            {showConfirmButton && (
              <div
                className='panel_button'
                id='exam-modal-confirm-btn'
                onClick={handleConfirm}
              >
                {confirmButtonName}
              </div>
            )}
            {showCancelButton && (
              <div
                className='panel_button'
                id='exam-modal-cancel-btn'
                onClick={handleCancel}
              >
                {cancelButtonName}
              </div>
            )}
            {showBottomCloseButton && (
              <div className='panel__bottom-close' onClick={handleClose}>
                <CloseIcon />
                Close
              </div>
            )}
          </div>
          {showBottomResizeIcons && (
            <div className='panel__bottom-resize-icons'>
              <div className='panel__bottom-resize-left'>
                <ResizeLeft />
              </div>
              <div className='panel__bottom-resize-right'>
                <ResizeRight />
              </div>
            </div>
          )}
        </div>
      </div>
    </PanelContainer>
  )
}

export default Panel

const PanelContainer = styled.div`
  position: fixed;
  top: 25%;
  left: calc((100% - ${props => props.initWidth}px) / 2);
  width: ${props => props.initWidth}px;
  height: ${props => props.initHeight}px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.palette.black};

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
    background: ${props => props.theme.palette.blue02};
    color: ${props => props.theme.palette.white};
    overflow: hidden;
  }

  .panel__children-container {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar-track {
      box-shadow: ${props => props.theme.shadows.scrollbarTrack};
      background-color: ${props => props.theme.palette.white};
    }

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 18px;
    }

    &::-webkit-scrollbar-thumb {
      -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
      background-color: ${props => props.theme.palette.blue01};
      box-shadow: ${props => props.theme.shadows.scrollbarThumb};
    }

    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      height: 18px;
      width: 18px;
      display: block;
      background-color: ${props => props.theme.palette.blue01};
    }

    &::-webkit-scrollbar-button:vertical:increment {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcTDx43AHTppQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAm0lEQVQ4y+2Suw3CQBBE39xdjoREE27FvVABIR1QAEW4EIhcByHB2UPAIVlgI+wMySNNsp+3u9LCqv+TxoNhj9hg8qDGiIS5mf703pNGQWIn4gH5Y4TVHe0ZqwbFa1RyVLoXOyheFtysuoBysYXquZxYtmoKzEGxGeZmgUDVCwSqvoHSBKh75tya/gwY3Jb6vPQ1tsWT77LqNz0Anmsn5gIKn8AAAAAASUVORK5CYII=);
      background-size: cover;
      background-repeat: no-repeat;
      border-top: 1px solid
        ${props => props.theme.palette.white};
    }

    &::-webkit-scrollbar-button:vertical:decrement {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAKJJREFUOBHtUcENwjAQu0vSBRijq3QnPswBSzAI7MGnzz5Kgx2cX4QieCE1kuvcxbbSi9m+fpmAy3wAE1y19646v4m6EMIFOMtTep3+IosSj9FTJlCP6tUzlZ+piN3jtQZx/00QPZNCVjDBW00K66fg4a6gBUxk9G79CVBiuKfoQ5mNwrQfMs9aYc1X2DZ7mD2PMKxAfXL+WrJscyto7/3jBF4VyyFYXSX8JQAAAABJRU5ErkJggg==);
      background-size: cover;
      background-repeat: no-repeat;
      border-bottom: 1px solid
        ${props => props.theme.palette.white};
    }

    &::-webkit-scrollbar-button:horizontal:increment {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAvElEQVQ4Ee1ROw7CMAy1nSJ2jsHSg1BmbsHKxNR7cAl6DaQusHASpCbuM1KkKC2RmGDokyzZsd/zJ0QL/uECchSRNpnEwTf7FnJ2vFJh6cHcJewKPifx25X8IYkHIgVDasdVx+yuyG1heEciQ0kodn2B44W4geAd614QbzIdKgnltTGeTGMJ2/cTImFtBYG0U/UnLPWYI5QmQhMGL/RehwYiewiYyOyxC9/JNYvegoYDyE+Y1VpjD1vwywuMc2QovmDQf+cAAAAASUVORK5CYII=');
      background-size: cover;
      background-repeat: no-repeat;
      border-right: 1px solid
        ${props => props.theme.palette.white};
    }

    &::-webkit-scrollbar-button:horizontal:decrement {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAyUlEQVQ4Ee1Ruw3CQAy1fUH0jAFsQlgie1BRIRZgEJaABtEgsUQmSO7FzkfKSQ6iSpUnOXf+vdjviBbMpkD48SfLiRqsRkTOAO/VfZr/D1iLslHhQVhegVdKKKdRPLmOG4aETVCpbZnDRYjzLtEOZnEXHtFG17gypOg7aj2NYK1m07owDTxMNnjFFvOIyhhjUaPaRcJda0x0m8bQ7tdd069HNIj9AeqjEuag+O638qRoGaeeP2p2eP4vCDcWygAqdahHOsviza5AA+J9L9WtRJHRAAAAAElFTkSuQmCC');
      background-size: cover;
      background-repeat: no-repeat;
      border-left: 1px solid
        ${props => props.theme.palette.white};
    }
  }

  .panel__header {
    background: ${props => props.theme.palette.blue02};
    border-bottom: 1px solid
      ${props => props.theme.palette.white};
    color: ${props => props.theme.palette.white};
    height: 28px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    cursor: move;

    svg {
      transform: translateY(3px);
    }
  }

  .panel__buttons-container {
    padding: 10px 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.palette.blue02};
    color: ${props => props.theme.palette.white};
  }

  .panel__bottom-resize-icons {}

  .panel__bottom-resize-left {
    position: absolute;
    bottom: -2px;
    left: 1px;
    color: ${props => props.theme.palette.white};
  }

  .panel__bottom-resize-right {
    position: absolute;
    bottom: -2px;
    right: 1px;
    color: ${props => props.theme.palette.white};
  }

  .panel__bottom-close {
    display: inline-block;
    margin-left: auto;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.palette.yellow02};
    }

    svg {
      transform: translateY(3px);
    }
  }

  .panel_button {
    color: ${props => props.theme.palette.white};
    border: 1px solid ${props => props.theme.palette.white};
    padding: 3px 10px;
    cursor: pointer;
    font-size: 12pt;
    text-decoration: none;
    margin: 10px 0;

    &:first-letter {
      text-decoration: underline;
    }

    &:hover {
      color: ${props => props.theme.palette.yellow02};
    }
  }

  .panel_button + .panel_button {
    margin-left: 5px;
  }

  .panel__close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    color: ${props => props.theme.palette.white};
    font-size: 16px;

    &:hover {
      color: ${props => props.theme.palette.yellow02};
    }
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
