import React from 'react'
import styled from 'styled-components'

type PanelHeaderProps = {
  title: string
  onDrag: any
  handleClose: any
  panelRef: React.RefObject<HTMLDivElement>
}

const PanelHeader = (props: PanelHeaderProps): JSX.Element => {
  const { onDrag, title, panelRef } = props
  const [mouseDown, setMouseDown] = React.useState<boolean>(false)
  const handleMouseDown = () => setMouseDown(true)
  const handleMouseUp = () => setMouseDown(false)
  const handleMouseMove = (e: any) => onDrag(e.movementX, e.movementY)

  function setParentSelect(state: string): void {
    if (panelRef && panelRef.current) {
      panelRef.current.style.userSelect = state
    }
  }

  React.useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  React.useEffect(() => {
    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove)
      setParentSelect('none')
    } else {
      setParentSelect('initial')
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown, onDrag])

  return <Container onMouseDown={handleMouseDown}>{title}</Container>
}

const Container = styled.div`
  position: relative;
  z-index: 1;
  height: 24px;

  &:hover {
    cursor: move;
  }
`

export default PanelHeader
