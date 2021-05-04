import React from 'react';
import PropTypes from 'prop-types';

import { ExamQuestionsReviewList as ExamQuestionsReviewListComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ExamQuestionsReviewList = props => {
  return (
    <>
      <ExamQuestionsReviewListComponent {...props} />
    </>
  );
};

ExamQuestionsReviewList.propTypes = {
  items: PropTypes.array
};

ExamQuestionsReviewList.defaultProps = {
  items: [
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
  ]
};
