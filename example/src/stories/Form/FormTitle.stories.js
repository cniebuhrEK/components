import React from 'react';

import { FormTitle as FormTitleComponent } from './FormTitle';

export default {
  title: 'Atoms/Form',
  component: FormTitleComponent
};

const Template = (args) =>
  <FormTitleComponent {...args} />;

export const FormTitle = Template.bind({});
FormTitle.args = {
  children: 'Log In'
};
