import React from 'react'
import { Tabs as Component } from 'components'

export default {
  title: 'Atoms/Tabs',
  component: Component
}

const MultipleTemplate = args => (
  <Component {...args}>
    <div className='item' data-label='Answer Sheet'>
      The view for tab1 should now be visible.
    </div>
    <div className='item' data-label='Diagnostic'>
      The view for tab2 should now be visible.
    </div>
  </Component>
)

const SingleTemplate = args => (
  <Component {...args}>
    <div className='item' data-label='Answer Sheet'>
      The view for tab1 should now be visible.
    </div>
  </Component>
)

export const Multiple = MultipleTemplate.bind({})
export const Single = SingleTemplate.bind({})
Multiple.args = {}
