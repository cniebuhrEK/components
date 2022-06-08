import React from 'react'
import EndSectionModal from './EndSectionModal'

interface EndSectionModalProps {
  /**
   * defines if toast is visible or not
   */
  open: boolean
  /**
   * triggers close of the modal
   */
  handleClose: () => any
  handleConfirm: () => any
  incomplete: number
}

/**
 * Primary UI component for user interaction
 */
const EndSectionModalContainer = (props: EndSectionModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <EndSectionModal
        {...props}
        open={isOpen || props.open}
        handleClose={handleClose}
      />
    </>
  )
}

EndSectionModalContainer.defaultProps = {
  incomplete: 12,
  handleConfirm: () => {}
}

export default EndSectionModalContainer
