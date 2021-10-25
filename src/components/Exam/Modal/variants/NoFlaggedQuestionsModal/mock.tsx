import React from 'react'
import NoFlaggedQuestionsModal from './NoFlaggedQuestionsModal'

interface NoFlaggedQuestionsModalProps {
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
const NoFlaggedQuestionsModalContainer = (
  props: NoFlaggedQuestionsModalProps
) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <NoFlaggedQuestionsModal
        open={isOpen || props.open}
        handleClose={handleClose}
      />
    </>
  )
}

NoFlaggedQuestionsModalContainer.defaultProps = {}

export default NoFlaggedQuestionsModalContainer
