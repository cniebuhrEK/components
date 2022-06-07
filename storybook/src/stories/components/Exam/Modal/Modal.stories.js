import React from 'react'
import { ExamModal } from 'examkrackers-components'

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <ExamModal {...args} open={isOpen || args.open} handleClose={handleClose}>
        {args.children}
      </ExamModal>
    </>
  )
}

export const PlainModal = Template.bind({})
PlainModal.args = {
  children: 'Hello world!',
  title: 'EndExamModal title'
}

export default {
  title: 'Exam/Modal',
  component: ExamModal
}
