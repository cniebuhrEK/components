import React from 'react'

import { Navigation } from './Navigation'

export default {
  title: 'Exam/Navigation',
  component: Navigation
}

const Template = args => <Navigation {...args} />

export const ExamNavigation = Template.bind({})
ExamNavigation.args = {
  navigationItems: [
    {
      status: 'complete',
      order: 1,
      flagged: false,
      onClickHandler: () => {},
      displayName: 'Question 1'
    },
    {
      status: 'incomplete',
      order: 2,
      flagged: true,
      onClickHandler: () => {},
      displayName: 'Question 2'
    },
    {
      status: 'unseen',
      order: 3,
      flagged: false,
      onClickHandler: () => {},
      displayName: 'Question 3'
    },
    {
      status: 'unseen',
      order: 4,
      flagged: false,
      onClickHandler: () => {},
      displayName: 'Question 4'
    }
  ],
  endExamButton: false,
  endSectionButton: false,
  endTestDayCertification: false,
  navigationButton: true,
  nextButton: true,
  periodicTableButton: true,
  previousButton: true,
  reviewAllButton: false,
  reviewFlaggedButton: false,
  reviewIncompleteButton: false,
  reviewScreenButton: false,
  endExamButtonOnClick: e => console.log(e),
  endSectionButtonOnClick: e => console.log(e),
  endTestDayCertificationOnClick: e => console.log(e),
  nextButtonOnClick: e => console.log(e),
  previousButtonOnClick: e => console.log(e),
  reviewAllButtonOnClick: e => console.log(e),
  reviewFlaggedButtonOnClick: e => console.log(e),
  reviewIncompleteButtonOnClick: e => console.log(e),
  reviewScreenButtonOnClick: e => console.log(e)
}
