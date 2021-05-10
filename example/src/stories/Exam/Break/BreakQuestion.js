import React from 'react';
import PropTypes from 'prop-types';

import { ExamBreakQuestion as ExamBreakQuestionComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ExamBreakQuestion = props => {
  return (
    <>
      <ExamBreakQuestionComponent {...props} />
    </>
  );
};

ExamBreakQuestion.propTypes = {
  handleConfirm: PropTypes.func,
  handleCancel: PropTypes.func,
  breakTime: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  breakOrder: PropTypes.string
};

ExamBreakQuestion.defaultProps = {
  handleConfirm: () => {},
  handleCancel: () => {},
  breakTime: 10,
  breakOrder: 'first'
};
