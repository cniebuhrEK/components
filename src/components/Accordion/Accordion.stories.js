// Accordion/Accordion.stories.js - Accordion story

import React from 'react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'

const Template = args => (
  <Accordion {...args}>
    <Accordion button='Accordion 2' light={args.light} arrow>
      <Accordion button='Accordion 3' light={args.light} arrow link>
        <AccordionItem active={args.active} light={args.light}>
          <p>Hello, world!</p>
        </AccordionItem>
      </Accordion>
    </Accordion>
  </Accordion>
)

export const Primary = Template.bind({})
Primary.args = {
  button: 'Accordion 1',
  light: true,
  active: true,
  arrow: true
}

export default {
  title: 'Atoms/Accordion',
  component: Accordion
}
