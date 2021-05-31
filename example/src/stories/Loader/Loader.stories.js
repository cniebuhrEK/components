import React from 'react'

import { Loader as LoaderComponent } from './Loader'

export default {
  title: 'Atoms/Loader',
  component: LoaderComponent
}

const Template = args => <LoaderComponent {...args} />

export const Loader = Template.bind({})
Loader.args = {
  size: 4
}
