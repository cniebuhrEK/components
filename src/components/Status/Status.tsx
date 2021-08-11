// Status/Status.tsx - Status component

import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

interface StatusProps {
  success: boolean
  warning: boolean
  error: boolean
  disabled: boolean
  status: string
}

export const Status = (props: StatusProps): JSX.Element => {
  const { success, warning, error, disabled, status } = props

  const containerClass = cx({
    '--success': success,
    '--warning': warning,
    '--error': error,
    '--disabled': disabled
  })

  return (
    <StatusContainer className={containerClass}>
      <div className='status__icon' />
      <div>{status}</div>
    </StatusContainer>
  )
}

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.darkblue01};

  .status__icon {
    width: 8px;
    height: 8px;
    margin-right: 8px;
    margin-bottom: 3px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.grey08};
  }

  &.--success {
    .status__icon {
      background-color: ${({ theme }) => theme.palette.green01};
    }
  }

  &.--warning {
    .status__icon {
      background-color: ${({ theme }) => theme.palette.orange05};
    }
  }

  &.--error {
    .status__icon {
      background-color: ${({ theme }) => theme.palette.red05};
    }
  }

  &.--disabled {
    .status__icon {
      background-color: ${({ theme }) => theme.palette.inactive};
    }
  }
`

Status.defaultProps = {
  success: false,
  warning: false,
  error: false,
  disabled: false,
  status: 'Active'
}

export default Status
