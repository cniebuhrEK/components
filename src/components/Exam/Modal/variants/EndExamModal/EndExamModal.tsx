import React from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'

interface EndExamModalProps {
  handleConfirm: () => void
  open: boolean
  [x: string]: any
}

const EndExamModal = ({
  open,
  handleClose,
  handleConfirm,
  ...rest
}: EndExamModalProps): JSX.Element => {
  return (
    <Modal
      disableOutsideClick
      handleClose={handleClose}
      open={open}
      title='End exam'
      initWidth={700}
      initHeight={390}
      showConfirmButton
      showCancelButton
      handleConfirm={handleConfirm}
      handleCancel={handleClose}
      {...rest}
    >
      <EndExamModalContainer>
        <img className='warning-icon' src='/assets/exam/Alert.svg' />
        <div className='warning-content'>
          <p>
            By selecting&nbsp;
            <strong>
              <span className='underline'>E</span>nd Exam,
            </strong>
            &nbsp;you have indicated that the name or photograph displayed on
            the screen is NOT correct. Raise your hand to contact the test
            administrator, and select&nbsp;
            <strong>
              <span className='underline'>Y</span>es
            </strong>
            &nbsp;to end the exam.
          </p>
          <br />
          <br />
          <p>
            Selecting&nbsp;
            <strong>
              <span className='underline'>Y</span>es
            </strong>
            &nbsp;will end the exam and the test administrator will provide you
            &nbsp;with instructions.
          </p>
          <br />
          <br />
          <p>
            If you chose the wrong answer option, select&nbsp;
            <strong>
              <span className='underline'>N</span>o.
            </strong>
          </p>
        </div>
      </EndExamModalContainer>
    </Modal>
  )
}

EndExamModal.defaultProps = {}

export default EndExamModal

export const EndExamModalContainer = styled.div`
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
