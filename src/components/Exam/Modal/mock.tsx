// Exam/Modal/mock.tsx - Modal mock

import React from 'react'
import Modal from './Modal'

interface ModalProps {
  children: JSX.Element
  handleClose: () => void
  open: boolean
  initWidth: number
  initHeight: number
  title: JSX.Element | string
  showConfirmButton?: boolean
  confirmButtonName?: string
  handleConfirm?: () => void
  showCancelButton?: boolean
  showBottomCloseButton?: boolean
  showBottomResizeIcons?: boolean
  disableOutsideClick?: boolean
  cancelButtonName?: string
  handleCancel?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const ModalContainer = (props: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <Modal {...props} open={isOpen || props.open} handleClose={handleClose}>
        {props.children}
      </Modal>
    </>
  )
}

ModalContainer.defaultProps = {
  title: 'EndExamModal title',
  children: '',
  handleClose: () => {},
  handleConfirm: () => {},
  handleCancel: () => {},
  open: false
}

export default ModalContainer
