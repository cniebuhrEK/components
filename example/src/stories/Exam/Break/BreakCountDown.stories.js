import React from 'react';

import { ExamBreakCountDown as BreakCountDown } from './BreakCountDown';

export default {
  title: 'Exam/Break',
  component: BreakCountDown
};

const Template = (args) => <BreakCountDown {...args} />;

export const ExamBreakCountDown = Template.bind({});
ExamBreakCountDown.args = {
  handleResume: () => {},
  userName: 'Ann Brown',
  examTitle: 'EK-1',
  timeRemaining: '00:09:59'
};
