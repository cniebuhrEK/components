import React from 'react'
import { Tabs as Component } from 'components'

export default {
  title: 'Atoms/Tabs',
  component: Component
}

const Template = args => (
  <Component {...args}>
    <div className='item' label='Answer Sheet'>
      The view for tab1 should now be visible.
    </div>
    <div className='item' label='Diagnostic'>
      The view for tab2 should now be visible.
    </div>
  </Component>
)

export const Tabs = Template.bind({})
Tabs.args = {}
