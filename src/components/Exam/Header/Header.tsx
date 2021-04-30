import React, { useEffect, useState } from 'react'
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
  const {
    title,
    timer,
    currentPage,
    totalPages,
    timerVisibility,
    pagesVisibility
  } = props

  const [timerExpanded, setTimerExpanded] = useState(true)
  const [pageExpanded, setPageExpanded] = useState(true)
  const [initialTimer, setInitialTimer] = useState(timer)

  const timerClass = cx({
    '--condensed': !timerExpanded,
    '--warning': timer !== initialTimer,
    '--hidden': !timerVisibility
  })

  const pagesClass = cx({
    '--condensed': !pageExpanded,
    '--hidden': !pagesVisibility
  })

  useEffect(() => {
    setInitialTimer(timer)
  }, [])

  const toggleTimerVisibility = () => setTimerExpanded(prevState => !prevState)
  const togglePageVisibility = () => setPageExpanded(prevState => !prevState)

  return (
    <ExamHeaderContainer>
      <ExamHeaderTitle>{title}</ExamHeaderTitle>
      <NotOfficialMCATContainer>
        This is not an official MCAT
        <br />
        Examkrackers is not affiliated with the AAMC.
      </NotOfficialMCATContainer>
      <TimeAndPageContainer>
        <TimeAndPageElement
          href='#'
          onClick={toggleTimerVisibility}
          className={timerClass}
        >
          <TimerIcon />
          <div className='content'>Time Remaining: {timer}</div>
        </TimeAndPageElement>
        <TimeAndPageElement
          href='#'
          className={pagesClass}
          onClick={togglePageVisibility}
        >
          <QuestionIcon />
          <div className='content'>
            {currentPage} of {totalPages}
          </div>
        </TimeAndPageElement>
      </TimeAndPageContainer>
    </ExamHeaderContainer>
  )
}

Header.defaultProps = {}

export default Header
