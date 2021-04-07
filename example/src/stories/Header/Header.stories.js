import React from 'react';

import { Header as HeaderComponent } from './Header';

export default {
  title: 'Atoms/Header',
  component: HeaderComponent
};

const Template = (args) =>
  <HeaderComponent {...args} />;

export const BasicHeader = Template.bind({});
BasicHeader.args = {
  children: 'Admin dashboard'
};
