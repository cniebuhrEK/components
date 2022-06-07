import React from 'react'
import { TimeExpiredModal } from 'examkrackers-components'

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <TimeExpiredModal
        {...args}
        open={isOpen || args.open}
        handleClose={handleClose}
      />
    </>
  )
}

export const TimeExpired = Template.bind({})
TimeExpired.args = {
  handleConfirm: () => console.log('confirm')
}

export default {
  title: 'Exam/Modal',
  component: TimeExpiredModal
}
