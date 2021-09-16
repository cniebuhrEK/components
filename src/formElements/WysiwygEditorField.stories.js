import React from 'react'
import WysiwygEditorField from './WysiwygEditorField'

const Template = args => <WysiwygEditorField {...args} />

export const UploadFileField = Template.bind({})
UploadFileField.args = {
  name: 'test',
  id: 'test-wysiwyg',
  type: 'text',
  onChange: (name, value) => {},
  validate: (name, validationFunc) => {},
  label: 'Test',
  initialValue: {
    ops: [
      {
        insert: 'Lorem '
      },
      {
        attributes: {
          glossary: 'foo-123'
        },
        insert: 'ipsum'
      },
      {
        insert: ' dolor sit amet\n'
      }
    ]
  },
  required: true,
  t: (key, options) => {},
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
  title: 'Form elements/WysiwygEditorField',
  component: WysiwygEditorField
}
