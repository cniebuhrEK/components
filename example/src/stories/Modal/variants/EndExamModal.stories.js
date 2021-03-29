import React from 'react';

import { EndExamModal } from './EndExamModal';

export default {
  title: 'Exam/Modal',
  component: EndExamModal
};

const Template = (args) => <EndExamModal {...args} />;

export const EndExam = Template.bind({});
EndExam.args = {};
