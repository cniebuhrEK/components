import React from 'react'

import { ExamNavContainer, ButtonsContainer } from './styles'

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

interface NavigationProps {
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
  endExamButtonOnClick: (e) => void
  endSectionButtonOnClick: (e) => void
  endTestDayCertificationOnClick: (e) => void
  navigationButtonOnClick: (e) => void
  nextButtonOnClick: (e) => void
  periodicTableButtonOnClick: (e) => void
  previousButtonOnClick: (e) => void
  reviewAllButtonOnClick: (e) => void
  reviewFlaggedButtonOnClick: (e) => void
  reviewIncompleteButtonOnClick: (e) => void
  reviewScreenButtonOnClick: (e) => void
}

const Navigation = (props: NavigationProps): JSX.Element => {
  const {
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
    endExamButtonOnClick,
    endSectionButtonOnClick,
    endTestDayCertificationOnClick,
    navigationButtonOnClick,
    nextButtonOnClick,
    periodicTableButtonOnClick,
    previousButtonOnClick,
    reviewAllButtonOnClick,
    reviewFlaggedButtonOnClick,
    reviewIncompleteButtonOnClick,
    reviewScreenButtonOnClick
  } = props

  return (
    <ExamNavContainer>
      <ButtonsContainer>
        {periodicTableButton && (
          <PeriodicTableButton onClick={periodicTableButtonOnClick} />
        )}
        {endExamButton && <EndExamButton onClick={endExamButtonOnClick} />}
        {endSectionButton && (
          <EndSectionButton onClick={endSectionButtonOnClick} />
        )}
        {endTestDayCertification && (
          <EndTestDayCertification onClick={endTestDayCertificationOnClick} />
        )}
        {reviewScreenButton && (
          <ReviewScreenButton onClick={reviewScreenButtonOnClick} />
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
        {previousButton && <PreviousButton onClick={previousButtonOnClick} />}
        {navigationButton && (
          <NavigationButton onClick={navigationButtonOnClick} />
        )}
        {nextButton && <NextButton onClick={nextButtonOnClick} />}
      </ButtonsContainer>
    </ExamNavContainer>
  )
}

Navigation.defaultProps = {}

export default Navigation
