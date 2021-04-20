import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

import DraggableAndResizable from '../DraggableAndResizable'

interface ExamModalProps {
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

const ExamModal = ({
  children,
  handleClose,
  open,
  title,
  showConfirmButton,
  confirmButtonName,
  showCancelButton,
  showBottomCloseButton,
  showBottomResizeIcons,
  cancelButtonName,
  handleConfirm,
  handleCancel,
  initWidth,
  initHeight,
  disableOutsideClick
}: ExamModalProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (CHECK_SHORTCUT(e).altC) {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  return open ? (
    <div>
      {disableOutsideClick && <BackgroundLayer />}
      <DraggableAndResizable
        title={title}
        handleClose={handleClose}
        initWidth={initWidth}
        initHeight={initHeight}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        showConfirmButton={showConfirmButton}
        confirmButtonName={confirmButtonName}
        showCancelButton={showCancelButton}
        cancelButtonName={cancelButtonName}
        showBottomCloseButton={showBottomCloseButton}
        showBottomResizeIcons={showBottomResizeIcons}
      >
        {children}
      </DraggableAndResizable>
    </div>
  ) : (
    <div />
  )
}

ExamModal.defaultProps = {
  showConfirmButton: false,
  confirmButtonName: 'Yes',
  showCancelButton: false,
  cancelButtonName: 'No'
}

export default ExamModal

const BackgroundLayer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
