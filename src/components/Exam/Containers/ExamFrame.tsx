import React from 'react'
import styled from 'styled-components'

import ExamContent from './ExamContent'

interface ExamFrameProps {
  left: JSX.Element | string
  right: JSX.Element | string
}

const ExamFrame = (props: ExamFrameProps): JSX.Element => {
  const { left, right } = props

  return (
    <FrameContainer>
      <div className='panel'>
        <ExamContent id='exam-left-panel'>{left}</ExamContent>
      </div>
      <div className='panel'>
        <ExamContent id='exam-right-panel'>{right}</ExamContent>
      </div>
    </FrameContainer>
  )
}

export const FrameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.palette.blue02};
  height: 100%;
  font-size: 16px;
  box-sizing: border-box;
  min-height: 0;
  flex-grow: 1;

  .panel {
    height: 100%;
    background: ${props => props.theme.palette.white};
    width: calc(50% - 13px);
    box-sizing: border-box;
  }
`

export default ExamFrame
