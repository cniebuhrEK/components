import React from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'

interface ResponseRequiredModalProps {
  handleClose: () => void
  open: boolean
  [x: string]: any
}

const ResponseRequiredModal = ({
  open,
  handleClose,
  ...rest
}: ResponseRequiredModalProps): JSX.Element => {
  return (
    <Modal
      handleClose={handleClose}
      open={open}
      title='Response required'
      initWidth={700}
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
          <p>You cannot advance without answering this question.</p>
        </div>
      </ResponseRequiredModalContainer>
    </Modal>
  )
}

ResponseRequiredModal.defaultProps = {}

export default ResponseRequiredModal

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
