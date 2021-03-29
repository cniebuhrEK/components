import React from 'react';
import PropTypes from 'prop-types';

import { ToolsBar as ToolsBarComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ToolsBar = props => {
  return (
    <div>
      <ToolsBarComponent {...props} />
      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
        <br />
        <br />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
};

ToolsBar.propTypes = {
  highlightButton: PropTypes.bool,
  strikethroughButton: PropTypes.bool,
  flagForReviewButton: PropTypes.bool,
  handleStrikethrough: PropTypes.func,
  onFlagClick: PropTypes.func,
  isFlagged: PropTypes.bool
};

ToolsBar.defaultProps = {
  highlightButton: true,
  strikethroughButton: true,
  flagForReviewButton: true,
  handleStrikethrough: (e) => console.log(e),
  onFlagClick: (e) => console.log(e),
  isFlagged: false
};

