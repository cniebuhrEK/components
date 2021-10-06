import React from 'react'
import styled from 'styled-components'

type PanelHeaderProps = {
  title: string
  onDrag: any
  handleClose: any
}

const PanelHeader = (props: PanelHeaderProps): JSX.Element => {
  const { onDrag, title } = props
  const [mouseDown, setMouseDown] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleMouseUp = () => setMouseDown(false)

    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  React.useEffect(() => {
    const handleMouseMove = (e: any) => onDrag(e.movementX, e.movementY)

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown, onDrag])

  const handleMouseDown = () => setMouseDown(true)

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
