import React from 'react';

import { UploadFile } from './UploadFileField';

export default {
  title: 'Form elements/UploadFileField',
  component: UploadFile
};

const Template = (args) => <UploadFile {...args} />;

export const UploadFileField = Template.bind({});
UploadFileField.args = {};
