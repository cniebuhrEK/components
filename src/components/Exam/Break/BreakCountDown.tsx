import React from 'react'
import {
  BreakOverlay,
  BreakCountDownContainer,
  BreakCountDownHeader,
  BreakCountDownBody,
  BreakQuestionFooter,
  BreakQuestionButton
} from './styles'

interface BreakCountDownProps {
  handleResume: () => void
  userName: string
  examTitle: string
  timeRemaining: string
}

const BreakCountDown = (props: BreakCountDownProps): JSX.Element => {
  const handleResume = e => {
    e.preventDefault()
    props.handleResume()
  }

  return (
    <BreakOverlay>
      <BreakCountDownContainer>
        <BreakCountDownHeader>Active Break</BreakCountDownHeader>
        <BreakCountDownBody>
          <div className='break-countdown-white-box' />
          <form className='break-countdown-content'>
            <fieldset>
              <legend>Break Information</legend>
              <p>Candidate Name: {props.userName}</p>
              <p>Exam Title: {props.examTitle}</p>
              <p>
                Total Break Time Remaining: <span>{props.timeRemaining}</span>
              </p>
              <p>
                Your break has started. For the real exam, you would raise your{' '}
                hand and the test administrator would assist you to sign out.
              </p>
            </fieldset>
          </form>
        </BreakCountDownBody>
        <BreakQuestionFooter>
          <BreakQuestionButton
            id='break-resume'
            onClick={handleResume}
            href='#'
            role='button'
          >
            Resume
          </BreakQuestionButton>
        </BreakQuestionFooter>
      </BreakCountDownContainer>
    </BreakOverlay>
  )
}

export default BreakCountDown
