import React, { useState } from 'react'

import { ExamNavContainer, ButtonsContainer } from './styles'
// eslint-disable-next-line no-unused-vars
import { NavigationItemProps } from '../Modal/variants/NavigationModal'

import AnswerSheetButton from './AnswerSheetButton'
import MarkExamButton from './MarkExamButton'
import EndExamButton from './EndExamButton'
import EndSectionButton from './EndSectionButton'
import EndTestDayCertification from './EndTestDayCertification'
import NavigationButton from './NavigationButton'
import NextButton from './NextButton'
import PeriodicTableButton from './PeriodicTableButton'
import PreviousButton from './PreviousButton'
import ReviewAllButton from './ReviewAllButton'
import ReviewFlaggedButton from './ReviewFlaggedButton'
import ReviewIncompleteButton from './ReviewIncompleteButton'
import ReviewScreenButton from './ReviewScreenButton'
import PeriodicTable from '../Modal/variants/PeriodicTable'

interface NavigationProps {
  navigationItems?: NavigationItemProps[]
  keepPeriodicTable?: boolean
  endExamButton: boolean
  endSectionButton: boolean
  endTestDayCertification: boolean
  navigationButton: boolean
  nextButton: boolean
  periodicTableButton: boolean
  previousButton: boolean
  reviewAllButton: boolean
  reviewFlaggedButton: boolean
  reviewIncompleteButton: boolean
  reviewScreenButton: boolean
  answerSheetButton: boolean
  markExamButton?: boolean
  endExamButtonOnClick: (e) => void
  endSectionButtonOnClick: (e) => void
  endTestDayCertificationOnClick: (e) => void
  nextButtonOnClick: (e) => void
  previousButtonOnClick: (e) => void
  reviewAllButtonOnClick: (e) => void
  reviewFlaggedButtonOnClick: (e) => void
  reviewIncompleteButtonOnClick: (e) => void
  reviewScreenButtonOnClick: (e) => void
  answerSheetButtonOnClick: (e) => void
  markExamButtonOnClick?: (e) => void
}

const Navigation = (props: NavigationProps): JSX.Element => {
  const {
    navigationItems = [],
    keepPeriodicTable,
    endExamButton,
    endSectionButton,
    endTestDayCertification,
    navigationButton,
    nextButton,
    periodicTableButton,
    previousButton,
    reviewAllButton,
    reviewFlaggedButton,
    reviewIncompleteButton,
    reviewScreenButton,
    answerSheetButton,
    markExamButton,
    endExamButtonOnClick,
    endSectionButtonOnClick,
    endTestDayCertificationOnClick,
    nextButtonOnClick,
    previousButtonOnClick,
    reviewAllButtonOnClick,
    reviewFlaggedButtonOnClick,
    reviewIncompleteButtonOnClick,
    reviewScreenButtonOnClick,
    answerSheetButtonOnClick,
    markExamButtonOnClick
  } = props
  const [isPeriodicTableOpen, setPeriodicTableOpen] = useState(false)

  const handleOpenPeriodicTable = () => setPeriodicTableOpen(true)
  const handleClosePeriodicTable = () => setPeriodicTableOpen(false)

  const handleNextClick = e => {
    !keepPeriodicTable && handleClosePeriodicTable()
    nextButtonOnClick(e)
  }

  const handlePrevClick = e => {
    !keepPeriodicTable && handleClosePeriodicTable()
    previousButtonOnClick(e)
  }

  return (
    <div>
      <ExamNavContainer>
        <ButtonsContainer>
          {periodicTableButton && (
            <PeriodicTableButton onClick={handleOpenPeriodicTable} />
          )}
          {endExamButton && <EndExamButton onClick={endExamButtonOnClick} />}
          {answerSheetButton && (
            <AnswerSheetButton onClick={answerSheetButtonOnClick} />
          )}
          {endSectionButton && (
            <EndSectionButton onClick={endSectionButtonOnClick} />
          )}
          {endTestDayCertification && (
            <EndTestDayCertification onClick={endTestDayCertificationOnClick} />
          )}
          {reviewScreenButton && (
            <ReviewScreenButton onClick={reviewScreenButtonOnClick} />
          )}
          {markExamButton && markExamButtonOnClick && (
            <MarkExamButton onClick={markExamButtonOnClick} />
          )}
        </ButtonsContainer>
        <ButtonsContainer>
          {reviewAllButton && (
            <ReviewAllButton onClick={reviewAllButtonOnClick} />
          )}
          {reviewIncompleteButton && (
            <ReviewIncompleteButton onClick={reviewIncompleteButtonOnClick} />
          )}
          {reviewFlaggedButton && (
            <ReviewFlaggedButton onClick={reviewFlaggedButtonOnClick} />
          )}
          {previousButton && <PreviousButton onClick={handlePrevClick} />}
          {navigationButton && <NavigationButton items={navigationItems} />}
          {nextButton && <NextButton onClick={handleNextClick} />}
        </ButtonsContainer>
      </ExamNavContainer>
      <PeriodicTable
        handleClose={handleClosePeriodicTable}
        open={isPeriodicTableOpen}
      />
    </div>
  )
}

Navigation.defaultProps = {}

export default Navigation
