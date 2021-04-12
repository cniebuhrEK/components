import React from 'react';

import { TextNormal as TextNormalComponent } from './TextNormal';

export default {
  title: 'Typography/Text',
  component: TextNormalComponent
};

const Template = (args) =>
  <TextNormalComponent {...args} />;

export const TextNormal = Template.bind({});
TextNormal.args = {
  children: 'Text semibold',
  size: 'm'
};
