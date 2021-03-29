import React from 'react'
import Modal from '../Modal'
import styled from 'styled-components'

interface ResponseRequiredModalProps {
  children: JSX.Element
  handleClose: () => void
  open: boolean
  [x: string]: any
}

const ResponseRequiredModal = ({
  open,
  handleClose
}: ResponseRequiredModalProps): JSX.Element => {
  return (
    <Modal
      handleClose={handleClose}
      open={open}
      title='Response required'
      initWidth={700}
      initHeight={141}
      showConfirmButton
      confirmButtonName='OK'
      handleConfirm={handleClose}
    >
      <ResponseRequiredModalContainer>
        <img
          className='warning-icon'
          src='https://d2to8dvdqb8lhi.cloudfront.net/app/assets/shared/aamc/info-2a467f3febf94dc3b4eb14015ab860d2dcfe0cbdfcec6d9ef9ae61a7baeb6409.svg'
        />
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
