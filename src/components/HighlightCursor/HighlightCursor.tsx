import React from 'react'
import styled from 'styled-components'
import { HighlighterIcon } from '../../icons'
import * as R from 'ramda'

export const hasHighlightCursorClass = event => {
  const elementsPath = R.propOr([], 'path', event)
  const elementHasHighlightCursorClass = el =>
    R.pipe(R.propOr([], 'classList'), R.any(R.equals('highlight-cursor')))(el)

  return R.any(elementHasHighlightCursorClass, elementsPath)
}

export const HighlightCursor = (): JSX.Element => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isCursorChanged, setIsCursorChanged] = React.useState(false)

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setIsCursorChanged(hasHighlightCursorClass(event))
    setMousePosition({ x, y })
  }

  const disableDefaultCursor = () => {
    const rootElement = document.getElementsByTagName('body')
    if (rootElement) {
      rootElement[0].classList.add('remove-cursor')
    }
  }

  const enableDefaultCursor = () => {
    const rootElement = document.getElementsByTagName('body')
    if (rootElement) {
      rootElement[0].classList.remove('remove-cursor')
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  React.useEffect(() => {
    if (isCursorChanged) {
      disableDefaultCursor()
    } else {
      enableDefaultCursor()
    }

    return () => {
      enableDefaultCursor()
    }
  }, [isCursorChanged])

  const { x, y } = mousePosition
  return isCursorChanged ? (
    <CursorContainer
      className='highlight-cursor'
      style={{
        left: `${x}px`,
        top: `${y}px`
      }}
    >
      <HighlighterIcon />
    </CursorContainer>
  ) : (
    <div />
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
