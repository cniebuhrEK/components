import React from 'react'
import DnDList from './DnDList'

const Template = args => <DnDList {...args} />

const ChildComponent = ({ item }) => <div>{item.label}</div>

export const Default = Template.bind({})
Default.args = {
  ChildComponent,
  items: [
    { label: 'one' },
    { label: 'two' },
    { label: 'three' },
    { label: 'four' }
  ],
  onChange: (cards, dragItem) => console.log({ cards, dragItem })
}

export default {
  title: 'Atoms/DnDList',
  component: DnDList
}
