import React from 'react'
import Modal from '../Modal'
import styled from 'styled-components'

import TimeIcon from '../../../../examIcons/Timer'
import CloseIcon from '../../../../examIcons/Close'

interface TestDayCertificationExpireModalProps {
  handleClose: () => void
  open: boolean
  [x: string]: any
}

const TestDayCertificationExpireModal = ({
  open,
  handleClose
}: TestDayCertificationExpireModalProps): JSX.Element => {
  return (
    <Modal
      handleClose={handleClose}
      open={open}
      title={
        <div>
          <TimeIcon /> 1 minute Warning
        </div>
      }
      initWidth={700}
      initHeight={275}
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
        <div className='bottom-close' onClick={handleClose}>
          <CloseIcon />
          Close
        </div>
      </TestDayCertificationExpireModalContainer>
    </Modal>
  )
}

TestDayCertificationExpireModal.defaultProps = {}

export default TestDayCertificationExpireModal

export const TestDayCertificationExpireModalContainer = styled.div`
  .expire-message-container {
    background-color: #fff;
    padding: 20px;
  }

  .expire-message {
    border: 1px solid #000000;
    background-color: #fff9e8;
    padding: 10px;
    box-shadow: 0px 0px 0px 10px yellow;
    box-sizing: border-box;
    text-align: center;
    color: ${props => props.theme.palette.common.black};
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
      color: ${props => props.theme.palette.secondary.main};
    }

    svg {
      transform: translateY(3px);
    }
  }
`
