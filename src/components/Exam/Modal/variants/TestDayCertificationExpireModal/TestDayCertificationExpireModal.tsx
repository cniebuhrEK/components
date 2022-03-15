import React from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'

import TimeIcon from '../../../../../examIcons/Timer'

interface TestDayCertificationExpireModalProps {
  handleClose: () => void
  open: boolean
  [x: string]: any
}

const TestDayCertificationExpireModal = ({
  open,
  handleClose,
  ...rest
}: TestDayCertificationExpireModalProps): JSX.Element => {
  return (
    <Modal
      showBottomCloseButton
      disableOutsideClick
      handleClose={handleClose}
      open={open}
      title={
        <div>
          <TimeIcon /> 1 minute Warning
        </div>
      }
      initWidth={700}
      initHeight={265}
      {...rest}
    >
      <TestDayCertificationExpireModalContainer>
        <div className='expire-message-container'>
          <div className='expire-message'>
            <strong>Warning</strong>
            <br />
            <br />
            <p>
              <strong>
                Your Test-Day Certification will expire in 1 minute.
              </strong>
            </p>
            <br />
            <p>
              Confirm your selection within 1 minute, and select{' '}
              <strong>
                <span className='underline'>N</span>ext
              </strong>{' '}
              to continue to the Tutorial. If time expires before you submit
              your selection, your answer will default to your current
              selection.
            </p>
          </div>
        </div>
      </TestDayCertificationExpireModalContainer>
    </Modal>
  )
}

TestDayCertificationExpireModal.defaultProps = {}

export default TestDayCertificationExpireModal

export const TestDayCertificationExpireModalContainer = styled.div`
  padding: 0 20px;

  .expire-message-container {
    padding: 20px;
    background-color: ${props => props.theme.exam.original.white};
  }

  .expire-message {
    border: 1px solid #000000;
    background-color: #fff9e8;
    padding: 10px;
    box-shadow: 0px 0px 0px 10px ${props => props.theme.exam.original.yellow02};
    box-sizing: border-box;
    text-align: center;
    color: ${props => props.theme.exam.original.black};
  }

  p {
    text-align: left;
  }

  strong {
    font-weight: 700;
  }

  .bottom-close {
    display: inline-block;
    position: absolute;
    bottom: 5px;
    right: 20px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.exam.original.yellow02};
    }

    svg {
      transform: translateY(3px);
    }
  }
`
