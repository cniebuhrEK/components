import React, { useState } from 'react'
import cx from 'classnames'

import {
  ExamHeaderContainer,
  TimeAndPageContainer,
  ExamHeaderTitle,
  TimeAndPageElement,
  NotOfficialMCATContainer
} from './styles'

import TimerIcon from '../../../examIcons/Timer'
import QuestionIcon from '../../../examIcons/Question'

interface HeaderProps {
  title: string
  timer?: any
  currentPage?: number
  totalPages?: number
  timerVisibility: boolean
  pagesVisibility: boolean
}

const Header = (props: HeaderProps): JSX.Element => {
  const [timerExpanded, setTimerExpanded] = useState(true)
  const {
    title,
    timer,
    currentPage,
    totalPages,
    timerVisibility,
    pagesVisibility
  } = props

  const timerClass = cx({
    '--condensed': !timerExpanded
  })

  const toggleTimerVisibility = () => setTimerExpanded(prevState => !prevState)

  return (
    <ExamHeaderContainer>
      <ExamHeaderTitle>{title}</ExamHeaderTitle>
      <NotOfficialMCATContainer>
        This is not an official MCAT
      </NotOfficialMCATContainer>
      <TimeAndPageContainer>
        {timerVisibility && (
          <TimeAndPageElement
            onClick={toggleTimerVisibility}
            className={timerClass}
          >
            <TimerIcon />
            <div className='content'>Time Remaining: {timer}</div>
          </TimeAndPageElement>
        )}
        {pagesVisibility && (
          <TimeAndPageElement>
            <QuestionIcon />
            <div className='content'>
              {currentPage} of {totalPages}
            </div>
          </TimeAndPageElement>
        )}
      </TimeAndPageContainer>
    </ExamHeaderContainer>
  )
}

Header.defaultProps = {}

export default Header
