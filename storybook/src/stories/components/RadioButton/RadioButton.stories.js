import React from 'react'
import { RadioButton } from 'examkrackers-components'
import styled from 'styled-components'

const Mock = props => {
  const [value, setValue] = React.useState()

  const onChange = val => {
    setValue(val)
  }

  return (
    <Container>
      <RadioButton
        {...props}
        label='Option OptionOptionO ptionOptionO ption Option Option Option #1'
        value='A'
        isChecked={value === 'A'}
        onChange={onChange}
      />
      <RadioButton
        {...props}
        label='Option #2'
        value='B'
        isChecked={value === 'B'}
        onChange={onChange}
      />
      <RadioButton
        {...props}
        label='Option #3'
        value='C'
        isChecked={value === 'C'}
        onChange={onChange}
      />
      <br />
      <br />
      <br />
      <div>Value is: {value}</div>
    </Container>
  )
}

const Container = styled.div`
  display: block;
  height: 720px;
`

const Template = args => <Mock {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'question'
}

export default {
  title: 'Atoms/Radio',
  component: RadioButton
}
