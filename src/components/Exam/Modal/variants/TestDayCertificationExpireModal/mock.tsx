import React from 'react'
import TestDayCertificationExpireModal from './TestDayCertificationExpireModal'

interface TestDayCertificationExpireModalProps {
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
const TestDayCertificationExpireModalContainer = (
  props: TestDayCertificationExpireModalProps
) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <TestDayCertificationExpireModal
        open={isOpen || props.open}
        handleClose={handleClose}
      />
    </>
  )
}

TestDayCertificationExpireModalContainer.defaultProps = {}
export default TestDayCertificationExpireModalContainer
