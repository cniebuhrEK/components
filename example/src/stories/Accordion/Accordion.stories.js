import React from 'react'
import { Accordion as Component, AccordionItem } from 'components'

export default {
  title: 'Atoms/Accordion',
  component: Component
}

const Template = args => (
  <Component {...args}>
    <Component text='Accordion 2' light={args.light} level={2}>
      <Component text='Accordion 3' light={args.light} level={3}>
        <AccordionItem light={args.light}>Hello, world!</AccordionItem>
      </Component>
    </Component>
  </Component>
)

export const Accordion = Template.bind({})
Accordion.args = {
  text: 'Accordion',
  light: true,
  level: 1
}
