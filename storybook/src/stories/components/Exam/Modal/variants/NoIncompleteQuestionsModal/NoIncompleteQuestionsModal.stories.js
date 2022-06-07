import React from 'react'
import { NoIncompleteQuestionsModal } from 'examkrackers-components'

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <NoIncompleteQuestionsModal
        {...args}
        open={isOpen || args.open}
        handleClose={handleClose}
      />
    </>
  )
}

export const NoIncompleteQuestions = Template.bind({})
NoIncompleteQuestions.args = {}

export default {
  title: 'Exam/Modal',
  component: NoIncompleteQuestionsModal
}
