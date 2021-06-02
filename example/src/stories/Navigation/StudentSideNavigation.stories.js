import React from 'react'
import { StudentSideNavigation as Component } from './StudentSideNavigation'
import { Accordion, AccordionItem } from 'components'
// import { UserIcon } from 'components'

export default {
  title: 'Atoms/Navigation',
  component: Component
}

const Template = args => (
  <Component {...args}>
    <Accordion text='Accordion 1' level={1}>
      <Accordion text='Accordion 2' level={2}>
        <Accordion text='Accordion 3' level={3}>
          <AccordionItem>Hello, world!</AccordionItem>
          <AccordionItem>Hello, world!</AccordionItem>
        </Accordion>
      </Accordion>
    </Accordion>
  </Component>
)

export const StudentSideNavigation = Template.bind({})

StudentSideNavigation.args = {}
