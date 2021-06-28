import React from 'react'
import TimeEndWarning from './TimeEndWarning'

interface TimeEndWarningProps {
  /**
   * defines if toast is visible or not
   */
  open: boolean
  /**
   * triggers close of the modal
   */
  handleClose: any
  handleConfirm: any
  minLeft: number
}

/**
 * Primary UI component for user interaction
 */
export const TimeEndWarningContainer = (props: TimeEndWarningProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <TimeEndWarning
        {...props}
        open={isOpen || props.open}
        handleClose={handleClose}
        minLeft={String(props.minLeft)}
      />
    </>
  )
}

TimeEndWarningContainer.defaultProps = {
  minLeft: 30
}

export default TimeEndWarningContainer
