import React from 'react'

import { Tooltip as TooltipComponent } from './Tooltip'

export default {
  title: 'Atoms/Tooltip',
  component: TooltipComponent
}

const Template = args => (
  <TooltipComponent {...args}>{args.children}</TooltipComponent>
)

export const Tooltip = Template.bind({})
Tooltip.args = {
  children: 'Hover over here to see the tooltip',
  id: 'tooltip-example',
  tooltipContent: 'Hello world!'
}
