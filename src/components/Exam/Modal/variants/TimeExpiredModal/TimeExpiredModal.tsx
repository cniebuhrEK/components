import React, { useEffect } from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'
import { CHECK_SHORTCUT } from '../../../../../utils/shortcuts'

interface TimeExpiredModalProps {
  handleClose: () => void
  handleConfirm: () => void
  open: boolean
  [x: string]: any
}

const TimeExpiredModal = ({
  open,
  handleClose,
  handleConfirm,
  ...rest
}: TimeExpiredModalProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    e.preventDefault()
    if (CHECK_SHORTCUT(e).altO) {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [handleClose])

  return (
    <Modal
      disableOutsideClick
      handleClose={handleClose}
      open={open}
      title='Time expired'
      initWidth={700}
      initHeight={180}
      showConfirmButton
      confirmButtonName='OK'
      handleConfirm={handleConfirm}
      {...rest}
    >
      <TimeExpiredModalContainer>
        <img className='warning-icon' src='/assets/exam/Info.svg' />
        <div className='warning-content'>
          <p>Your time has expired. Select OK to continue.</p>
        </div>
      </TimeExpiredModalContainer>
    </Modal>
  )
}

TimeExpiredModal.defaultProps = {}

export default TimeExpiredModal

export const TimeExpiredModalContainer = styled.div`
  display: flex;
  padding: 20px;
  min-width: 40px;

  strong {
    font-weight: 700;
  }

  .warning-icon {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    display: block;
  }
`
