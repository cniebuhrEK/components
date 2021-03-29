import React from 'react'

import { ExamNavLeft } from './styles'
import ExamIconEndSection from '../../../examIcons/EndSection'

interface EndSectionButtonProps {
  onClick: (e) => any
}

const EndSectionButton = (props: EndSectionButtonProps): JSX.Element => {
  return (
    <ExamNavLeft onClick={props.onClick}>
      <ExamIconEndSection />
      <div>
        <span className='underline'>E</span>nd section
      </div>
    </ExamNavLeft>
  )
}

export default EndSectionButton
