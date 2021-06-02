import React from 'react'
import { Accordion as Component, AccordionItem } from 'components'

export default {
  title: 'Atoms/Accordion',
  component: Component
}

const Template = args => (
  <Component {...args}>
    <Component text='Accordion 2' light={args.light} level={1}>
      <Component text='Accordion 3' light={args.light} level={2}>
        <AccordionItem light={args.light}>
          <p className={args.active ? '--isActive' : ''}>Hello, world!</p>
        </AccordionItem>
      </Component>
    </Component>
  </Component>
)

export const Accordion = Template.bind({})
Accordion.args = {
  text: 'Accordion',
  light: true,
  level: 0,
  active: false
}
