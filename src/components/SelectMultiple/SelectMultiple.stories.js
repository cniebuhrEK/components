import React from 'react'
import SelectMultiple from './SelectMultiple'

const Template = props => <SelectMultiple {...props} />

export const Default = Template.bind({})

Default.args = {
  options: [
    {
      label: 'foo@mail.tag',
      value: 'example0@mail.tag'
    },
    {
      label: 'bar@mail.tag',
      value: 'example1@mail.tag'
    },
    {
      label: 'john@mail.tag',
      value: 'example2@mail.tag'
    },
    {
      label: 'doe@mail.tag',
      value: 'example3@mail.tag'
    },
    {
      label: 'suzy@mail.tag',
      value: 'example4@mail.tag'
    },
    {
      label: 'smith@mail.tag',
      value: 'example5@mail.tag'
    },
    {
      label: 'elena@mail.tag',
      value: 'example6@mail.tag'
    },
    {
      label: 'brandon@mail.tag',
      value: 'example7@mail.tag'
    },
    {
      label: 'jack@mail.tag',
      value: 'example8@mail.tag'
    },
    {
      label: 'lola@mail.tag',
      value: 'example9@mail.tag'
    }
  ],
  defaultOptions: ['example0@mail.tag', 'example3@mail.tag'],
  placeholder: 'Search for Employee',
  onChange: selectedOptions => console.log(selectedOptions)
}

export default {
  title: 'Atoms/SelectMultiple',
  component: SelectMultiple
}
