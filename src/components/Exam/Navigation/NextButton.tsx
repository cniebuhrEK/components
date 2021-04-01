import React from 'react'

import { ExamNavRight } from './styles'
import ExamIconNext from '../../../examIcons/Next'

interface NextButtonProps {
  onClick: (e) => any
}

const NextButton = (props: NextButtonProps): JSX.Element => {
  return (
    <ExamNavRight onClick={props.onClick} id='next-btn'>
      <div>
        <span className='underline'>N</span>ext
      </div>
      <ExamIconNext />
    </ExamNavRight>
  )
}

export default NextButton
