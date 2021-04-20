import React, { useEffect } from 'react'
import styled from 'styled-components'

interface ExamContainerProps {
  children: JSX.Element | string
  [x: string]: any
}

const ExamContainer = (props: ExamContainerProps): JSX.Element => {
  const disableRightClick = e => {
    e.preventDefault()
  }

  useEffect(() => {
    document.addEventListener('contextmenu', disableRightClick)

    return () => {
      document.removeEventListener('contextmenu', disableRightClick)
    }
  }, [])

  return (
    <ExamContainerStyles {...props.rest}>{props.children}</ExamContainerStyles>
  )
}

const ExamContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
`

export default ExamContainer
