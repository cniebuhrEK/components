import React from 'react';

import { HeaderNormal as HeaderNormalComponent } from './HeaderNormal';

export default {
  title: 'Typography/Header',
  component: HeaderNormalComponent
};

const Template = (args) =>
  <HeaderNormalComponent {...args} />;

export const HeaderNormal = Template.bind({});
HeaderNormal.args = {
  children: 'Header Normal'
};
