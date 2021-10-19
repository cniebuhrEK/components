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
  handleS3Upload: file => {
    const result = URL.createObjectURL(file)
    return {
      data: {
        url: result,
        data: 'data'
      }
    }
  },
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
    glossary: true,
    customImage: true,
    adminHighlights: true
  },
  handleFetchGlossaryList: query => console.log(query),
  glossaryEntriesPagination: {
    page: 1,
    take: 10,
    recordsTotal: 2,
    pagesTotal: 1
  },
  getPhraseDetails: () => ({
    id: 'foo-123',
    phrase: 'ipsum',
    explanation: 'Lorem ipsum'
  }),
  glossaryEntries: [
    {
      id: 'foo-123',
      phrase: 'ipsum',
      explanation: 'Lorem ipsum'
    },
    {
      id: 'foo-456',
      phrase: 'dolor',
      explanation: 'Dolor sit amet'
    }
  ]
}

export default {
  title: 'Atoms/Wysiwyg',
  component: WysiwygEditor
}
