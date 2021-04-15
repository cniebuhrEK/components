import React from 'react';

import { ResponseRequiredModal } from './ResponseRequiredModal';

export default {
  title: 'Exam/Tooltip',
  component: ResponseRequiredModal
};

const Template = (args) => <ResponseRequiredModal {...args} />;

export const ResponseRequired = Template.bind({});
ResponseRequired.args = {};
