import React from 'react'
import { Tabs } from 'examkrackers-components'

export default {
  title: 'Atoms/Tabs',
  component: Tabs
}

const Template = args => (
  <div style={{ height: '300px', width: '300px' }}>
    <Tabs {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  activeTab: 'flashcards',
  position: 'bottomRight',
  tabs: [
    {
      label: 'Images',
      value: 'images'
    },
    {
      label: 'Flashcards',
      value: 'flashcards'
    }
  ],
  tabContents: [
    {
      value: 'images',
      content: <div>IMAGES</div>
    },
    {
      value: 'flashcards',
      content: <div>FLASHCARDS</div>
    }
  ]
}
