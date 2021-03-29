import React from 'react';

import { ToolsBar } from './ToolsBar';

export default {
  title: 'Exam/ToolsBar',
  component: ToolsBar
};

const Template = (args) => <ToolsBar {...args} />;

export const ExamToolsBar = Template.bind({});
ExamToolsBar.args = {
  highlightButton: true,
  strikethroughButton: true,
  flagForReviewButton: true,
  handleStrikethrough: (e) => console.log(e),
  onFlagClick: (e) => console.log(e),
  isFlagged: false
};
