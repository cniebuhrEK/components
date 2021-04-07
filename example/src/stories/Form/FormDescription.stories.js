import React from 'react';

import { FormDescription as FormDescriptionComponent } from './FormDescription';

export default {
  title: 'Atoms/Form',
  component: FormDescriptionComponent
};

const Template = (args) =>
  <FormDescriptionComponent {...args} />;

export const FormDescription = Template.bind({});
FormDescription.args = {
  children: 'password recovery'
};
