import React from 'react'
import WysiwygEditor from './WysiwygEditor'

const Template = args => <WysiwygEditor {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  label: 'Label',
  required: false,
  error: false,
  errorText: 'required field',
  id: 'text-editor-container',
  onChange: e => console.log(e),
  formats: {
    size: true,
    header: true,
    direction: true,
    bold: true,
    italic: true,
    underline: true,
    strike: true,
    orderedList: true,
    bulletList: true,
    increaseIndent: true,
    decreaseIndent: true,
    align: true,
    scriptSuper: true,
    scriptSub: true,
    blockquote: true,
    formula: true,
    glossary: true
  },
  glossaryDefinitions: [
    {
      id: 'foo-123',
      word: 'ipsum',
      content: 'Lorem ipsum'
    },
    {
      id: 'foo-456',
      word: 'dolor',
      content: 'Dolor sit amet'
    }
  ]
}

export default {
  title: 'Atoms/Wysiwyg',
  component: WysiwygEditor
}
