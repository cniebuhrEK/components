import React from 'react'
import TimeExpiredModal from './TimeExpiredModal'

interface TimeExpiredModalProps {
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
export const TimeExpiredModalContainer = (props: TimeExpiredModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <TimeExpiredModal
        {...props}
        open={isOpen || props.open}
        handleClose={handleClose}
      />
    </>
  )
}

TimeExpiredModalContainer.defaultProps = {
  handleConfirm: () => console.log('confirm')
}
