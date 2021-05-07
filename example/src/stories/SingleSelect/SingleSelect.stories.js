import React from 'react';

import { SingleSelect } from './SingleSelect';

export default {
  title: 'Atoms/SingleSelect',
  component: SingleSelect
};

const Template = (args) =>
  <div style={{ marginBottom: '100px' }}><SingleSelect {...args} /></div>;

export const BasicSingleSelect = Template.bind({});
BasicSingleSelect.args = {
  label: 'Select',
  size: 'normal',
  isSearchable: true
};
