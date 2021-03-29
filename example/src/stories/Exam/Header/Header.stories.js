import React from 'react';

import { Header } from './Header';

export default {
  title: 'Exam/Header',
  component: Header
};

const Template = (args) => <Header {...args} />;

export const ExamHeader = Template.bind({});
ExamHeader.args = {
  title: 'Exam title',
  timer: '1:37',
  currentPage: 1,
  totalPages: 59,
  timerVisibility: true,
  pagesVisibility: true
};
