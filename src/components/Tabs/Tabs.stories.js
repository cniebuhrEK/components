// Tabs/Tabs.stories.js - Tabs story

import React from 'react'
import Tabs from './Tabs'
import TabPanel from './TabPanel'

export default {
  title: 'Atoms/Tabs',
  component: Tabs
}

const MultipleTemplate = args => (
  <Tabs {...args}>
    <TabPanel label='Answer Sheet'>
      The view for tab1 should now be visible.
    </TabPanel>
    <TabPanel label='Diagnostics' active>
      The view for tab2 should now be visible.
    </TabPanel>
  </Tabs>
)

const SingleTemplate = args => (
  <Tabs {...args}>
    <TabPanel label='Answer Sheet'>
      The view for tab1 should now be visible.
    </TabPanel>
  </Tabs>
)

export const Multiple = MultipleTemplate.bind({})
export const Single = SingleTemplate.bind({})
Multiple.args = {}
