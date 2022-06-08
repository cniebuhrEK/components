import React from 'react'

const IconFontsComponent = args => (
  <div>
    <i className='icon-ek-salty-bucks' />
    <br />
    <br />
    <code>{`<i className='icon-ek-salty-bucks' />`}</code>
  </div>
)

export const IconFonts = IconFontsComponent.bind({})
IconFonts.args = {}

export default {
  title: 'Atoms/Icons',
  component: IconFontsComponent
}
