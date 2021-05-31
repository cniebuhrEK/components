import React from 'react'

import { IconButton as IconButtonComponent } from './IconButton'
import { TrashIcon } from 'components'

export default {
  title: 'Atoms/Button',
  component: IconButtonComponent
}

const Template = args => <IconButtonComponent {...args} />

export const IconButton = Template.bind({})
IconButton.args = {
  icon: <TrashIcon />,
  onClick: () => {}
}
