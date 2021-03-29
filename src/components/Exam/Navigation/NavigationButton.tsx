import React from 'react'

import { ExamNavRight } from './styles'
import ExamIconNavigation from '../../../examIcons/Navigation'

interface NavigationButtonProps {
  onClick: (e) => any
}

const NavigationButton = (props: NavigationButtonProps): JSX.Element => {
  return (
    <ExamNavRight onClick={props.onClick}>
      <ExamIconNavigation />
      <div>
        Na<span className='underline'>v</span>igation
      </div>
    </ExamNavRight>
  )
}

export default NavigationButton
