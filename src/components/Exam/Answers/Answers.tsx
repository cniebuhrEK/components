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
  const answerIcon = props.isSelected ? (
    <QuestionAnswered />
  ) : (
    <QuestionUnanswered />
  )

  const answerClass = cx({
    answer: true,
    'answer--selected': props.isSelected
  })

  return (
    <div
      className={answerClass}
      onClick={handleSelect}
      id={`answer-${props.answerCode}`}
      data-is-selected={`${props.isSelected}`}
    >
      <div className='answer__code'>
        {answerIcon} {!props.answerCodeHidden && `${props.answerCode}. `}
      </div>
      <div className='answer__content'>{props.answerContent}</div>
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
    display: flex;
    font-size: 16px;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
  }

  svg {
    transform: translateY(3px);
    margin-right: 5px;
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
    margin-right: 10px;
    transform: translateY(-1px);
  }

  .answer__content {
    font-size: 16px;
  }
`
