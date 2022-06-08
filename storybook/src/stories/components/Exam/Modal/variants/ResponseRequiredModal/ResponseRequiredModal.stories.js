import React from 'react'
import { ResponseRequiredModal } from 'examkrackers-components'

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <ResponseRequiredModal
        {...args}
        open={isOpen || args.open}
        handleClose={handleClose}
      />
    </>
  )
}

export const ResponseRequired = Template.bind({})
ResponseRequired.args = {}

export default {
  title: 'Exam/Modal',
  component: ResponseRequiredModal
}
