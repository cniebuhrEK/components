import React from 'react'
import AccordionTabs from './AccordionTabs'

const Template = args => (
  <div style={{ maxWidth: '500px', height: '500px' }}>
    <AccordionTabs {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  onDelete: tab => console.log(tab),
  activeTab: 'MCAT',
  tabs: [
    {
      label: 'MCAT',
      value: 'MCAT'
    },
    {
      label: 'High School',
      value: 'high-school'
    }
  ],
  tabContents: [
    {
      value: 'MCAT',
      content: <div>MCAT</div>
    },
    {
      value: 'high-school',
      content: <div>High School</div>
    }
  ]
}

export default {
  title: 'Atoms/AccordionTabs',
  component: AccordionTabs
}
