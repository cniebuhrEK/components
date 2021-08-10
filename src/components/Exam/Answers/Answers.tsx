import React from 'react'
import styled from 'styled-components'
import QuestionAnswered from '../../../examIcons/QuestionAnswered'
import QuestionUnanswered from '../../../examIcons/QuestionUnanswered'
import cx from 'classnames'

interface AnswerProps {
  answerCode: string
  isSelected: boolean
  answerCodeHidden?: boolean
  answerContent: JSX.Element | string
  onClick: (code: string) => void
}

const Answer = (props: AnswerProps): JSX.Element => {
  const handleSelect = () => props.onClick(props.answerCode)

  const answerClass = cx({
    answer: true,
    'answer--selected': props.isSelected
  })

  return (
    <div>
      <div
        className={answerClass}
        onClick={handleSelect}
        id={`answer-${props.answerCode}`}
        data-is-selected={`${props.isSelected}`}
      >
        <div className='answer__code'>
          <div className='answer__icon--answered'>
            <QuestionAnswered />
          </div>
          <div className='answer__icon--unanswered'>
            <QuestionUnanswered />
          </div>{' '}
          {!props.answerCodeHidden && `${props.answerCode}. `}
        </div>
        <div
          className='answer__content'
          id={`answer-content-${props.answerCode}`}
        >
          {props.answerContent}
        </div>
      </div>
    </div>
  )
}

interface AnswerI {
  answerCode: string
  answerContent: JSX.Element | string
}

interface AnswersProps {
  answers: AnswerI[]
  onSelectAnswer: (e: string) => void
  selectedAnswerCode?: string
  answerCodeHidden?: boolean
}

const Answers = (props: AnswersProps): JSX.Element => {
  const renderAnswers = props.answers.map(answer => (
    <Answer
      answerCodeHidden={props.answerCodeHidden}
      key={answer.answerCode}
      answerCode={answer.answerCode}
      answerContent={answer.answerContent}
      onClick={props.onSelectAnswer}
      isSelected={props.selectedAnswerCode === answer.answerCode}
    />
  ))

  return (
    <AnswersContainer data-selected-answer={`${props.selectedAnswerCode}`}>
      {renderAnswers}
    </AnswersContainer>
  )
}

Answers.defaultProps = {
  answerCodeHidden: false
}

export default Answers

export const AnswersContainer = styled.div`
  .answer {
    display: inline-flex;
    font-size: 16px;
    align-items: flex-start;
    cursor: pointer;
    margin-top: 13.5552px;
    user-select: none;
    background-color: #fff !important;

    &[data-is-selected='true'] {
      .answer__icon--answered {
        display: inline-block;
      }

      .answer__icon--unanswered {
        display: none;
      }
    }

    &[data-is-selected='false'] {
      .answer__icon--answered {
        display: none;
      }

      .answer__icon--unanswered {
        display: inline-block;
      }
    }
  }

  svg {
    transform: translateY(3px);
    margin-right: 4px;
    font-size: 12px;
    border: 1px solid transparent;
    box-sizing: content-box;
    padding: 2px;
  }

  .answer--selected {
    svg {
      border: 1px solid #000000;
      padding: 2px;
    }
  }

  .answer__code {
    font-weight: 700;
    margin-right: 10.3552px;
    transform: translateY(-4px);
    white-space: nowrap;
    font-size: 15px;
    user-select: none;
    background-color: #fff !important;
    text-decoration: none !important;

    & * {
      background-color: #fff !important;
      text-decoration: none !important;
    }
  }

  .answer__content {
    font-size: 16px;
    line-height: 20.7104px;
    user-select: all;
  }
`
