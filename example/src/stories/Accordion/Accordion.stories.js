import React from 'react'
import { Accordion as Component, AccordionItem } from 'components'

export default {
  title: 'Atoms/Accordion',
  component: Component
}

const Template = args => (
  <Component {...args}>
    <Component button='Accordion 2' light={args.light} arrow>
      <Component button='Accordion 3' light={args.light} arrow>
        <AccordionItem light={args.light}>
          <p className={args.active ? '--isActive' : ''}>Hello, world!</p>
        </AccordionItem>
      </Component>
    </Component>
  </Component>
)

export const Accordion = Template.bind({})
Accordion.args = {
  button: 'Accordion 1',
  light: true,
  active: false,
  arrow: true
}
