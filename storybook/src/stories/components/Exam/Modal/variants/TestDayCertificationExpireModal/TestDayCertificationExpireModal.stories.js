import React from 'react'
import { TestDayCertificationExpireModal } from 'examkrackers-components'

const Template = args => {
const [isOpen, setIsOpen] = React.useState(false)

const handleOpen = () => setIsOpen(true)
const handleClose = () => setIsOpen(false)

return (
  <>
    <div onClick={handleOpen}>Click here to open the modal</div>
    <TestDayCertificationExpireModal
      {...args}
      open={isOpen || args.open}
      handleClose={handleClose}
    />
  </>
)
}

export const TestDayCertificationExpire = Template.bind({})
TestDayCertificationExpire.args = {}

export default {
  title: 'Exam/Modal',
  component: TestDayCertificationExpireModal
}
