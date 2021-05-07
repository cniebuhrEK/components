import React from 'react'
import Modal from '../Modal'
import styled from 'styled-components'

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
  incomplete,
  ...rest
}: EndSectionModalProps): JSX.Element => {
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
        You have chosen to end this exam section, bu you have {incomplete}{' '}
        incomplete questions. Select "Yes" to confirm that you wish to end this
        exam section, or "No" to return to the Section Review.
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

EndSectionModal.defaultProps = {}

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
