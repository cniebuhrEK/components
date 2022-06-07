import React from 'react'
import { TimeEndWarning } from 'examkrackers-components'

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <TimeEndWarning
        {...args}
        open={isOpen || args.open}
        handleClose={handleClose}
        minLeft={String(args.minLeft)}
      />
    </>
  )
}

export const TimeEnd = Template.bind({})
TimeEnd.args = {
  minLeft: 30
}

export default {
  title: 'Exam/Modal',
  component: TimeEndWarning
}
