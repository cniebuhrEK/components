import React from 'react'
import UnderlinedTabs from './UnderlinedTabs'
import { BookIcon, GlossaryIcon } from '../../icons'

export default {
  title: 'Atoms/UnderlinedTabs',
  component: UnderlinedTabs
}

const Template = args => (
  <div style={{ height: '300px', width: '300px', background: 'white' }}>
    <UnderlinedTabs {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  activeTab: 'glossary',
  tabs: [
    {
      label: (
        <React.Fragment>
          <GlossaryIcon />
          <span>Glossary</span>
        </React.Fragment>
      ),
      value: 'glossary'
    },
    {
      label: (
        <React.Fragment>
          <BookIcon />
          <span>Index</span>
        </React.Fragment>
      ),
      value: 'book'
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
