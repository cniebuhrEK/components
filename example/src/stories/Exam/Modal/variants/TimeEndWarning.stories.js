import React from 'react';

import { TimeEndWarning } from './TimeEndWarning';

export default {
  title: 'Exam/Modal',
  component: TimeEndWarning
};

const Template = (args) => <TimeEndWarning {...args} />;

export const TimeEnd = Template.bind({});
TimeEnd.args = {
  minLeft: 30
};
