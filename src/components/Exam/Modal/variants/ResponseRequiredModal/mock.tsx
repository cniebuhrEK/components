import React from 'react'
import ResponseRequiredModal from './ResponseRequiredModal'

interface ResponseRequiredModalProps {
  /**
   * defines if toast is visible or not
   */
  open: boolean
  /**
   * triggers close of the modal
   */
  handleClose: any
}

/**
 * Primary UI component for user interaction
 */
const ResponseRequiredModalContainer = (props: ResponseRequiredModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <ResponseRequiredModal
        open={isOpen || props.open}
        handleClose={handleClose}
      />
    </>
  )
}

ResponseRequiredModalContainer.defaultProps = {}

export default ResponseRequiredModalContainer
