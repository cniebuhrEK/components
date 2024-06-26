// Tooltip/Tooltip.stories.js - Tooltip story

import React from 'react'
import Tooltip from './Tooltip'

const Template = args => <Tooltip {...args}>{args.children}</Tooltip>

export const Primary = Template.bind({})
Primary.args = {
  children: 'Hover over here to see the tooltip',
  id: 'tooltip-example',
  tooltipContent: 'Hello world!'
}

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip
}
