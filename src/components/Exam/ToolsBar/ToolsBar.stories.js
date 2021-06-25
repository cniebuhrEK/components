// Exam/ToolsBar/ToolsBar.stories.js

import React from 'react'
import ToolsBar from './mock'

const Template = args => <ToolsBar {...args} />

export const ExamToolsBar = Template.bind({})
ExamToolsBar.args = {
  highlightButton: true,
  strikethroughButton: true,
  flagForReviewButton: true,
  handleStrikethrough: e => console.log(e),
  onFlagClick: e => console.log(e),
  isFlagged: false
}

export default {
  title: 'Exam/ToolsBar',
  component: ToolsBar
}
