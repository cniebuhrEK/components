import React from 'react'
import { EndSectionModal } from 'examkrackers-components'

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <EndSectionModal
        {...args}
        open={isOpen || args.open}
        handleClose={handleClose}
      />
    </>
  )
}

export const EndSection = Template.bind({})
EndSection.args = {
  incomplete: 12,
  isLoading: false
}

export default {
  title: 'Exam/Modal',
  component: EndSectionModal
}
