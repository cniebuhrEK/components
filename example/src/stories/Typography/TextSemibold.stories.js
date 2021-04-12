import React from 'react';

import { TextSemibold as TextSemiboldComponent } from './TextSemibold';

export default {
  title: 'Typography/Text',
  component: TextSemiboldComponent
};

const Template = (args) =>
  <TextSemiboldComponent {...args} />;

export const TextSemibold = Template.bind({});
TextSemibold.args = {
  children: 'Text semibold',
  size: 'm'
};
