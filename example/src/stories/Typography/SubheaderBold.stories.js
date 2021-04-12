import React from 'react';

import { SubheaderBold as SubheaderBoldComponent } from './SubheaderBold';

export default {
  title: 'Typography/Subheader',
  component: SubheaderBoldComponent
};

const Template = (args) =>
  <SubheaderBoldComponent {...args} />;

export const SubheaderBold = Template.bind({});
SubheaderBold.args = {
  children: 'Subheader Bold'
};
