import React from 'react'
import styled from 'styled-components'

import {
  ExamIconClose,
  ExamIconCorrect,
  ExamIconDown,
  ExamIconEnd,
  ExamIconEndSection,
  ExamIconFlagMark,
  ExamIconFlagUnmark,
  ExamIconIncomplete,
  ExamIconIncorrect,
  ExamIconLeft,
  ExamIconMinusSign,
  ExamIconNavigation,
  ExamIconNext,
  ExamIconNoteFill,
  ExamIconNoteOutline,
  ExamIconPeriodic,
  ExamIconPlusSign,
  ExamIconPrevious,
  ExamIconPrint,
  ExamIconQuestion,
  ExamIconQuestionAnswered,
  ExamIconQuestionUnanswered,
  ExamIconResizeLeft,
  ExamIconResizeRight,
  ExamIconReviewAll,
  ExamIconRight,
  ExamIconScoreReport,
  ExamIconSolution,
  ExamIconStrikethrough,
  ExamIconTimer,
  ExamIconUp,
  ExamIconArrowUp,
  ExamIconArrowLeft,
  ExamIconArrowRight,
  ExamIconArrowDown
} from 'examkrackers-components'

const IconContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-flow: row;
  align-items: center;

  p {
    margin-right: 8px;
  }
`

/**
 * Primary UI component for user interaction
 */
export const AllIcons = () => {
  const icons = [
    { component: ExamIconClose, title: 'Close' },
    { component: ExamIconCorrect, title: 'Correct' },
    { component: ExamIconDown, title: 'Down' },
    { component: ExamIconEnd, title: 'End' },
    { component: ExamIconEndSection, title: 'End Section' },
    { component: ExamIconFlagMark, title: 'Flag Mark' },
    { component: ExamIconFlagUnmark, title: 'Flag Unmark' },
    { component: ExamIconIncomplete, title: 'Incomplete' },
    { component: ExamIconIncorrect, title: 'Incorrect' },
    { component: ExamIconLeft, title: 'Left' },
    { component: ExamIconMinusSign, title: 'Minus Sign' },
    { component: ExamIconNavigation, title: 'Navigation' },
    { component: ExamIconNext, title: 'Next' },
    { component: ExamIconNoteFill, title: 'Note Fill' },
    { component: ExamIconNoteOutline, title: 'Note Outline' },
    { component: ExamIconPeriodic, title: 'Periodic' },
    { component: ExamIconPlusSign, title: 'Plus Sign' },
    { component: ExamIconPrevious, title: 'Previous' },
    { component: ExamIconPrint, title: 'Print' },
    { component: ExamIconQuestion, title: 'Question' },
    { component: ExamIconQuestionAnswered, title: 'Question Answered' },
    { component: ExamIconQuestionUnanswered, title: 'Question Unanswered' },
    { component: ExamIconResizeLeft, title: 'Resize Left' },
    { component: ExamIconResizeRight, title: 'Resize Right' },
    { component: ExamIconReviewAll, title: 'Review All' },
    { component: ExamIconRight, title: 'Right' },
    { component: ExamIconScoreReport, title: 'Score Report' },
    { component: ExamIconSolution, title: 'Solution' },
    { component: ExamIconStrikethrough, title: 'Strikethrough' },
    { component: ExamIconTimer, title: 'Timer' },
    { component: ExamIconUp, title: 'Up' },
    { component: ExamIconArrowUp, title: 'Arrow Up' },
    { component: ExamIconArrowLeft, title: 'Arrow Left' },
    { component: ExamIconArrowRight, title: 'Arrow Right' },
    { component: ExamIconArrowDown, title: 'Arrow Down' }
  ]
  return (
    <React.Fragment>
      {icons.map(
        ({ component: I, title }, i) => (
          <IconContainer key={i}>
            <p>{`${title}:`}</p>
            <I />
          </IconContainer>
        )
      )}
    </React.Fragment>
  )
}

AllIcons.propTypes = {}
AllIcons.defaultProps = {}

export default AllIcons
