import React, { useState, useEffect } from 'react'
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
  timeValueForWaning?: string
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
    pagesVisibility,
    timeValueForWaning
  } = props

  const [timerExpanded, setTimerExpanded] = useState(true)
  const [pageExpanded, setPageExpanded] = useState(true)
  const [warningReached, setWarningReached] = useState(false)

  const timerClass = cx({
    '--condensed': !timerExpanded,
    '--hidden': !timerVisibility,
    '--warning': warningReached
  })

  const pagesClass = cx({
    '--condensed': !pageExpanded,
    '--hidden': !pagesVisibility
  })

  const toggleTimerVisibility = (e) => {
    e.preventDefault()
    !warningReached && setTimerExpanded(prevState => !prevState)
  }
  const togglePageVisibility = (e) => {
    e.preventDefault()
    !warningReached && setPageExpanded(prevState => !prevState)
  }

  useEffect(() => {
    if (timer === timeValueForWaning) {
      setWarningReached(true)
      setPageExpanded(true)
      setWarningReached(true)
    }
  }, [timer])

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

Header.defaultProps = {
  timeValueForWaning: '00:05:00'
}

export default Header
