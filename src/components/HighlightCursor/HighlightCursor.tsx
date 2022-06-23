import React from 'react'
import styled from 'styled-components'
import { HighlighterIcon } from '../../icons'

export const HighlightCursor = (): JSX.Element => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x, y })
  }

  const disableDefaultCursor = () => {
    const rootElement = document.getElementById('root')
    if (rootElement) {
      rootElement.classList.add('remove-cursor')
    }
  }

  const enableDefaultCursor = () => {
    const rootElement = document.getElementById('root')
    if (rootElement) {
      rootElement.classList.remove('remove-cursor')
    }
  }

  React.useEffect(() => {
    disableDefaultCursor()
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      enableDefaultCursor()
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const { x, y } = mousePosition
  return (
    <CursorContainer
      className='highlight-cursor'
      style={{
        left: `${x}px`,
        top: `${y}px`
      }}
    >
      <HighlighterIcon />
    </CursorContainer>
  )
}

export default HighlightCursor

const CursorContainer = styled.div`
  position: fixed;
  z-index: 999999999;
  transform: translate(0, -10px);
  pointer-events: none;
  cursor: none;
  color: ${({ theme }) => theme.colors.main.text};
`
