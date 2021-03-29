import React from 'react';
import PropTypes from 'prop-types';

import { ExamNavigation as NavigationComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const Navigation = props => {
  return (
    <>
      <NavigationComponent {...props} />
    </>
  );
};

Navigation.propTypes = {
  endExamButton: PropTypes.bool,
  endSectionButton: PropTypes.bool,
  endTestDayCertification: PropTypes.bool,
  navigationButton: PropTypes.bool,
  nextButton: PropTypes.bool,
  periodicTableButton: PropTypes.bool,
  previousButton: PropTypes.bool,
  reviewAllButton: PropTypes.bool,
  reviewFlaggedButton: PropTypes.bool,
  reviewIncompleteButton: PropTypes.bool,
  reviewScreenButton: PropTypes.bool,
  endExamButtonOnClick: PropTypes.func,
  endSectionButtonOnClick: PropTypes.func,
  endTestDayCertificationOnClick: PropTypes.func,
  navigationButtonOnClick: PropTypes.func,
  nextButtonOnClick: PropTypes.func,
  periodicTableButtonOnClick: PropTypes.func,
  previousButtonOnClick: PropTypes.func,
  reviewAllButtonOnClick: PropTypes.func,
  reviewFlaggedButtonOnClick: PropTypes.func,
  reviewIncompleteButtonOnClick: PropTypes.func,
  reviewScreenButtonOnClick: PropTypes.func,
};

Navigation.defaultProps = {
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
  endExamButtonOnClick: (e) => console.log(e),
  endSectionButtonOnClick: (e) => console.log(e),
  endTestDayCertificationOnClick: (e) => console.log(e),
  navigationButtonOnClick: (e) => console.log(e),
  nextButtonOnClick: (e) => console.log(e),
  periodicTableButtonOnClick: (e) => console.log(e),
  previousButtonOnClick: (e) => console.log(e),
  reviewAllButtonOnClick: (e) => console.log(e),
  reviewFlaggedButtonOnClick: (e) => console.log(e),
  reviewIncompleteButtonOnClick: (e) => console.log(e),
  reviewScreenButtonOnClick: (e) => console.log(e)
};

