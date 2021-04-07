import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

interface StatusProps {
  isActive: boolean
  activeStatus: string
  inactiveStatus: string
}

export const Status = (props: StatusProps): JSX.Element => {
  const { isActive, activeStatus, inactiveStatus } = props

  const containerClass = cx({
    '--isActive': isActive
  })

  return (
    <StatusContainer className={containerClass}>
      <div className='status__icon' />
      <div>{isActive ? activeStatus : inactiveStatus}</div>
    </StatusContainer>
  )
}

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.brown01};

  .status__icon {
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.grey08};
  }

  &.--isActive {
    .status__icon {
      background-color: ${props => props.theme.palette.green04};
    }
  }
`

Status.defaultProps = {
  isActive: false,
  activeStatus: 'Active',
  inactiveStatus: 'Inactive'
}

export default Status
