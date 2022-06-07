import React from 'react'
import { EndExamModal } from 'examkrackers-components'

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <EndExamModal
        {...args}
        open={isOpen || args.open}
        handleClose={handleClose}
      />
    </>
  )
}

export const EndExam = Template.bind({})
EndExam.args = {}

export default {
  title: 'Exam/Modal',
  component: EndExamModal
}
