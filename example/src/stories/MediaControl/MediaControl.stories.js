import React from 'react';

import { MediaControl as MediaControlComponent } from './MediaControl';

export default {
  title: 'Atoms/MediaControl',
  component: MediaControlComponent
};

const Template = (args) =>
  <MediaControlComponent {...args} />;

export const MediaControlSeverity = Template.bind({});
MediaControlSeverity.args = {
  play: true,
  pause: false,
  tickmark: false,
  plus: false,
  status: 'EK-1'
};