import React, { useEffect } from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'
import { CHECK_SHORTCUT } from '../../../../../utils/shortcuts'

interface EndSectionModalProps {
  handleConfirm: () => void
  open: boolean
  incomplete: number
  [x: string]: any
}

const EndSectionModal = ({
  open,
  handleClose,
  handleConfirm,
  incomplete = 0,
  ...rest
}: EndSectionModalProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    e.preventDefault()

    if (CHECK_SHORTCUT(e).altY) {
      handleConfirm && handleConfirm()
    }

    if (CHECK_SHORTCUT(e).altN) {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [handleClose])

  const completeContent = (
    <div className='warning-content'>
      <p>
        You have chosen to end the current section. If you click "yes", you will
        NOT be able to return to this section.
      </p>
      <br />
      <p>Are you sure you want to end this section of the test?</p>
    </div>
  )
  const incompleteContent = (
    <div className='warning-content'>
      <p>
        You have chosen to end this exam section, but you have{' '}
        {incomplete.toString()} incomplete questions. Select "Yes" to confirm
        that you wish to end this exam section, or "No" to return to the Section
        Review.
      </p>
      <br />
      <p>
        If you select "Yes", you will NOT be able to return to this section.
      </p>
    </div>
  )

  return (
    <Modal
      disableOutsideClick
      handleClose={handleClose}
      open={open}
      title='End Section'
      initWidth={700}
      initHeight={250}
      showConfirmButton
      showCancelButton
      handleConfirm={handleConfirm}
      handleCancel={handleClose}
      {...rest}
    >
      <EndSectionModalContainer>
        <img className='warning-icon' src='/assets/exam/Alert.svg' />
        {Number(incomplete) > 0 ? incompleteContent : completeContent}
      </EndSectionModalContainer>
    </Modal>
  )
}

EndSectionModal.defaultProps = {
  incomplete: 0
}

export default EndSectionModal

export const EndSectionModalContainer = styled.div`
  display: flex;
  padding: 20px;

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
