import React from 'react'

import { ExamNavLeft } from './styles'
import ExamIconEndSection from '../../../examIcons/EndSection'

interface EndTestDayCertificationProps {
  onClick: (e) => any
}

const EndTestDayCertification = (
  props: EndTestDayCertificationProps
): JSX.Element => {
  return (
    <ExamNavLeft onClick={props.onClick} id='end-test-day-certification-btn'>
      <ExamIconEndSection />
      <div>
        <span className='underline'>E</span>nd Test-Day Certification
      </div>
    </ExamNavLeft>
  )
}

export default EndTestDayCertification
