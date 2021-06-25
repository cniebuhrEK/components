import React from 'react'
import EndExamModal from './EndExamModal'

interface EndExamModalProps {
  /**
   * defines if toast is visible or not
   */
  open: boolean
  /**
   * triggers close of the modal
   */
  handleClose: any
  handleConfirm: any
}

/**
 * Primary UI component for user interaction
 */
const EndExamModalContainer = (props: EndExamModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <EndExamModal
        {...props}
        open={isOpen || props.open}
        handleClose={handleClose}
      />
    </>
  )
}

EndExamModalContainer.defaultProps = {
  open: false,
  handleClose: () => {}
}

export default EndExamModalContainer
