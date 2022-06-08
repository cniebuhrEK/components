import React from 'react'
import Component from './Text'

const Template = args => <Component {...args} />

export const Text = Template.bind({})
Text.args = {
  bold: false,
  size: 'm',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat tempus sagittis. Donec aliquam massa sit amet erat bibendum blandit. Maecenas consectetur est velit. Suspendisse laoreet posuere nisi, vitae dignissim massa consequat sed. Vivamus nunc metus, consectetur vitae nunc a, lacinia dignissim purus. Phasellus malesuada quam a ligula molestie molestie. Sed suscipit et magna eu dignissim.'
}

export default {
  title: 'Atoms/Typography',
  component: Component
}
