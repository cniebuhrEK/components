import React from 'react'
import * as R from 'ramda'
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
  secondsLeftForWarning?: number
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
    secondsLeftForWarning = 300
  } = props

  const extractedTime = R.split(':', timer)
  const [hh, mm, ss] = extractedTime
  const secondsLeft = Number(hh) * 60 * 60 + Number(mm) * 60 + Number(ss)

  const [timerExpanded, setTimerExpanded] = React.useState(true)
  const [pageExpanded, setPageExpanded] = React.useState(true)
  const warningReached = secondsLeft <= secondsLeftForWarning

  const timerClass = cx({
    '--condensed': !timerExpanded,
    '--hidden': !timerVisibility,
    '--warning': warningReached
  })

  const pagesClass = cx({
    '--condensed': !pageExpanded,
    '--hidden': !pagesVisibility
  })

  const toggleTimerVisibility = (e: any): void => {
    e.preventDefault()
    !warningReached && setTimerExpanded(prevState => !prevState)
  }
  const togglePageVisibility = (e: any): void => {
    e.preventDefault()
    !warningReached && setPageExpanded(prevState => !prevState)
  }

  React.useEffect(() => {
    if (secondsLeft <= secondsLeftForWarning) {
      setPageExpanded(true)
      setTimerExpanded(true)
    }
  }, [timer])

  return (
    <ExamHeaderContainer>
      <ExamHeaderTitle>{title}</ExamHeaderTitle>
      <NotOfficialMCATContainer>
        This is not an official MCAT.
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
  secondsLeftForWarning: 300
}

export default Header
