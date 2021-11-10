import React, { useEffect } from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'
import { CHECK_SHORTCUT } from '../../../../../utils/shortcuts'

interface ResponseRequiredModalProps {
  handleClose: () => void
  open: boolean
  [x: string]: any
}

const NoFlaggedQuestionsModal = ({
  open,
  handleClose,
  ...rest
}: ResponseRequiredModalProps): JSX.Element => {
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
      handleClose={handleClose}
      open={open}
      title='No Questions Flagged'
      initWidth={600}
      initHeight={180}
      showConfirmButton
      confirmButtonName='OK'
      handleConfirm={handleClose}
      disableOutsideClick
      {...rest}
    >
      <ResponseRequiredModalContainer>
        <img className='warning-icon' src='/assets/exam/Info.svg' />
        <div className='warning-content'>
          <p>
            No questions have been flagged for review. Please make your
            selections and try again.
          </p>
        </div>
      </ResponseRequiredModalContainer>
    </Modal>
  )
}

NoFlaggedQuestionsModal.defaultProps = {}

export default NoFlaggedQuestionsModal

export const ResponseRequiredModalContainer = styled.div`
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
