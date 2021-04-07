import React from 'react';

import { Status as StatusComponent } from './Status';

export default {
  title: 'Atoms/Status',
  component: StatusComponent
};

const Template = (args) =>
  <StatusComponent {...args} />;

export const ActiveStatus = Template.bind({});
ActiveStatus.args = {
  isActive: false,
  activeStatus: 'Active',
  inactiveStatus: 'Inactive'
};
