import React from 'react'
import Modal from '../Modal'
import styled from 'styled-components'

import PeriodicIcon from '../../../../examIcons/Periodic'

interface PeriodicTableProps {
  handleClose: () => void
  open: boolean
  [x: string]: any
}

const PeriodicTable = ({
  open,
  handleClose,
  ...rest
}: PeriodicTableProps): JSX.Element => {
  return (
    <Modal
      showBottomResizeIcons
      showBottomCloseButton
      handleClose={handleClose}
      open={open}
      title={
        <div>
          <PeriodicIcon /> Periodic Table
        </div>
      }
      initWidth={1100}
      initHeight={600}
      {...rest}
    >
      <PeriodicTableContainer>
        <div className='periodic-table-container'>
          <img
            alt='Periodic Table'
            className='periodic-table'
            src='/assets/exam/PeriodicTable.png'
          />
        </div>
      </PeriodicTableContainer>
    </Modal>
  )
}

PeriodicTable.defaultProps = {}

export default PeriodicTable

export const PeriodicTableContainer = styled.div`
  height: 100%;

  .periodic-table-container {
    max-height: 1000px;
    background-color: ${props => props.theme.palette.white};
  }
`
