import React from 'react'
import NoIncompleteQuestionsModal from './NoIncompleteQuestionsModal'

interface NoIncompleteQuestionsModalProps {
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
const NoIncompleteQuestionsModalContainer = (
  props: NoIncompleteQuestionsModalProps
) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <NoIncompleteQuestionsModal
        open={isOpen || props.open}
        handleClose={handleClose}
      />
    </>
  )
}

NoIncompleteQuestionsModalContainer.defaultProps = {}

export default NoIncompleteQuestionsModalContainer
