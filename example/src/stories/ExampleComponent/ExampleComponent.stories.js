import React from 'react';

import { ExampleComponentUI } from './ExampleComponent';

export default {
  title: 'Example/ExampleComponent',
  component: ExampleComponentUI
};

const Template = (args) => <ExampleComponentUI {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary'
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large'
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small'
};
