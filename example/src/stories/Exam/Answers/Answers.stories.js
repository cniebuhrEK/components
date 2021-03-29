import React from 'react';

import { Answers } from './Answers';

export default {
  title: 'Exam/Answers',
  component: Answers
};

const Template = (args) => <Answers {...args} />;

export const ExamAnswers = Template.bind({});
ExamAnswers.args = {
  answers: [{ answerCode: 'A', answerContent: 'Yes' }, { answerCode: 'B', answerContent: 'No' }]
};
