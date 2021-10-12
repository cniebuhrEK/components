import React from 'react'
import styled from 'styled-components'
import { Direction } from './util/constants'

type ResizerProps = {
  onResize: any
}

const Resizer = (props: ResizerProps): JSX.Element => {
  const { onResize } = props
  const [direction, setDirection] = React.useState<Direction>(Direction.Unknown)
  const [mouseDown, setMouseDown] = React.useState<boolean>(false)

  function handleMouseDown(direction: Direction): any {
    return () => {
      setDirection(direction)
      setMouseDown(true)
    }
  }

  // Set up a mouse up event to manage the MouseDown state.
  React.useEffect(() => {
    const handleMouseUp = () => setMouseDown(false)

    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Set up resizing depending on the MouseDown state and direction.
  React.useEffect(() => {
    const handleMouseMove = (e: any) => {
      e.stopPropagation()
      if (!direction) return

      onResize(direction, e.movementX, e.movementY)
    }

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown, direction, onResize])

  return (
    <React.Fragment>
      <TopLeft onMouseDown={handleMouseDown(Direction.TopLeft)} />
      <Top onMouseDown={handleMouseDown(Direction.Top)} />
      <TopRight onMouseDown={handleMouseDown(Direction.TopRight)} />
      <Right onMouseDown={handleMouseDown(Direction.Right)} />
      <RightBottom onMouseDown={handleMouseDown(Direction.BottomRight)} />
      <Bottom onMouseDown={handleMouseDown(Direction.Bottom)} />
      <BottomLeft onMouseDown={handleMouseDown(Direction.BottomLeft)} />
      <Left onMouseDown={handleMouseDown(Direction.Left)} />
    </React.Fragment>
  )
}

const TopLeft = styled.div`
  position: absolute;
  cursor: nwse-resize;
  height: 10px;
  width: 10px;
  z-index: 3;
  left: 0;
  top: 0;
`

const Top = styled.div`
  position: absolute;
  cursor: ns-resize;
  height: 4px;
  width: 100%;
  z-index: 2;
  left: 0;
  top: 0;
`

const TopRight = styled.div`
  position: absolute;
  cursor: nesw-resize;
  height: 10px;
  width: 10px;
  z-index: 3;
  right: 0;
  top: 0;
`

const Right = styled.div`
  position: absolute;
  cursor: ew-resize;
  width: 4px;
  height: 100%;
  z-index: 1;
  right: 0;
  top: 0;
`

const RightBottom = styled.div`
  position: absolute;
  cursor: nwse-resize;
  width: 10px;
  height: 10px;
  z-index: 3;
  right: 0;
  bottom: 0;
`

const Bottom = styled.div`
  position: absolute;
  cursor: ns-resize;
  width: 100%;
  height: 4px;
  z-index: 2;
  bottom: 0;
  left: 0;
`

const BottomLeft = styled.div`
  position: absolute;
  cursor: nesw-resize;
  width: 10px;
  height: 10px;
  z-index: 3;
  left: 0;
  bottom: 0;
`

const Left = styled.div`
  position: absolute;
  cursor: ew-resize;
  width: 4px;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
`

export default Resizer
