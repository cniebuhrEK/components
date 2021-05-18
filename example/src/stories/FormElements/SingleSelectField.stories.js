import React from 'react';

import { SingleSelect } from './SingleSelectField';

export default {
  title: 'Form elements/SingleSelect',
  component: SingleSelect
};

const Template = (args) =>
  <div style={{ marginBottom: '100px' }}><SingleSelect {...args} /></div>;

export const SingleSelectField = Template.bind({});
SingleSelectField.args = {
  label: 'Select',
  size: 'normal',
  isSearchable: true
};
