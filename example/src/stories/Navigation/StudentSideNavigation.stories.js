import React from 'react'
import styled from 'styled-components'
import { StudentSideNavigation as Component } from './StudentSideNavigation'
import { Accordion, AccordionItem } from 'components'

export default {
  title: 'Atoms/Navigation',
  component: Component
}

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

const PageMock = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`

const Template = args => (
  <PageMock>
    <Component {...args}>
      <Accordion button={<Link />} link>
        <Accordion button={<Link />} link arrow>
          <Accordion button={<Link />} link arrow>
            <AccordionItem>Hello, world!</AccordionItem>
            <AccordionItem>Hello, world!</AccordionItem>
          </Accordion>
        </Accordion>
      </Accordion>
    </Component>
  </PageMock>
)

export const StudentSideNavigation = Template.bind({})

StudentSideNavigation.args = {}
