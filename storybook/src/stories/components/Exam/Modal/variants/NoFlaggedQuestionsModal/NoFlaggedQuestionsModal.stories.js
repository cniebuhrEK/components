import React from 'react'
import { NoFlaggedQuestionsModal } from 'examkrackers-components'

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <NoFlaggedQuestionsModal
        {...args}
        open={isOpen || args.open}
        handleClose={handleClose}
      />
    </>
  )
}

export const NoFlaggedQuestions = Template.bind({})
NoFlaggedQuestions.args = {}

export default {
  title: 'Exam/Modal',
  component: NoFlaggedQuestionsModal
}
