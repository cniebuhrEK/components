// Navigation/Student/SideNav.stories.js - SideNav story

import React from 'react'
import styled from 'styled-components'
import SideNav from './SideNav'
import Accordion from '../../Accordion/Accordion'
import AccordionItem from '../../Accordion/AccordionItem'

const LinkContainer = styled.a`
  &.--isActive {
    background-color: ${({ light }) =>
      light ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.05)'};
  }
`

const Link = () => {
  return (
    <LinkContainer href='https://examkrackers.com' light>
      Accordion
    </LinkContainer>
  )
}

const Template = args => (
  <SideNav {...args}>
    <Accordion button={<Link />} link>
      <Accordion button={<Link />} link arrow>
        <Accordion button={<Link />} link arrow>
          <AccordionItem>Hello, world!</AccordionItem>
          <AccordionItem>Hello, world!</AccordionItem>
        </Accordion>
      </Accordion>
    </Accordion>
  </SideNav>
)

export const SideNavigation = Template.bind({})
SideNavigation.args = {}

export default {
  title: 'Layout/Navigation/Student',
  component: SideNav
}
