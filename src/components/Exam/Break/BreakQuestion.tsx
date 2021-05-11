import React from 'react'
import {
  BreakOverlay,
  BreakQuestionContainer,
  BreakQuestionHeader,
  BreakQuestionBody,
  BreakQuestionFooter,
  BreakQuestionButton
} from './styles'

interface QuestionBreakProps {
  handleConfirm: () => void
  handleCancel: () => void
  breakTime: number | string
  breakOrder: string
}

const BreakQuestion = (props: QuestionBreakProps): JSX.Element => {
  const handleConfirm = e => {
    e.preventDefault()
    props.handleConfirm()
  }

  const handleCancel = e => {
    e.preventDefault()
    props.handleCancel()
  }

  return (
    <BreakOverlay>
      <BreakQuestionContainer>
        <BreakQuestionHeader />
        <BreakQuestionBody>
          <img
            className='break-question-image'
            src='/assets/exam/question-cloud.svg'
          />
          <div className='break-question-message'>
            <p>
              You have two 10-minute breaks and one 30-minute break during this{' '}
              exam.
            </p>
            <p>
              This is your {props.breakOrder} optional break. The time you spend{' '}
              break will not be deducted from your available exam time, as your{' '}
              break does not exceed {props.breakTime} minutes.
            </p>
            <p>
              If you wish to take this break, select Yes and raise your hand.{' '}
              The test administrator will come to you.
            </p>
            <p>
              If you do NOT wish to take this break, select No to advance to the
              next exam section.
            </p>
          </div>
        </BreakQuestionBody>
        <BreakQuestionFooter>
          <BreakQuestionButton
            id='break-answer-yes'
            onClick={handleConfirm}
            href='#'
            role='button'
          >
            <span className='underline'>Y</span>
            <span>es</span>
          </BreakQuestionButton>
          <BreakQuestionButton
            id='break-answer-no'
            onClick={handleCancel}
            href='#'
            role='button'
          >
            <span className='underline'>N</span>
            <span>o</span>
          </BreakQuestionButton>
        </BreakQuestionFooter>
      </BreakQuestionContainer>
    </BreakOverlay>
  )
}

export default BreakQuestion
