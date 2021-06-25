import React from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'

import TimerIcon from '../../../../../examIcons/Timer'

interface TimeEndWarningProps {
  handleConfirm: () => void
  open: boolean
  minLeft: string
  [x: string]: any
}

const TimeEndWarning = ({
  open,
  handleClose,
  handleConfirm,
  minLeft,
  ...rest
}: TimeEndWarningProps): JSX.Element => {
  return (
    <Modal
      handleClose={handleClose}
      open={open}
      title={
        <div>
          <TimerIcon /> {minLeft}-minute Warning
        </div>
      }
      initWidth={350}
      initHeight={190}
      showConfirmButton={false}
      showCancelButton={false}
      showBottomCloseButton
      {...rest}
    >
      <TimeEndWarningContainer>
        You have {minLeft} minutes to complete this section
      </TimeEndWarningContainer>
    </Modal>
  )
}

TimeEndWarning.defaultProps = {}

export default TimeEndWarning

export const TimeEndWarningContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${props => props.theme.palette.white};
  color: ${props => props.theme.palette.black};
  height: 100%;
  margin: 0 15px;
`
