import React from 'react';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button'
};
