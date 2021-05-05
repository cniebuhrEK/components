import React from 'react';

import { ExamCheckbox as Checkbox } from './Checkbox';

export default {
  title: 'Exam/Checkbox',
  component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const ExamCheckbox = Template.bind({});
ExamCheckbox.args = {
  name: 'question',
  isSelected: true,
  onChange: () => {}
};
