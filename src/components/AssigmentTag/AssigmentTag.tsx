// AssigmentTag - will be used for assigning different elements

import React from 'react'
import styled from 'styled-components'
import CloseContainedIcon from '../../icons/CloseContained'

interface AssigmentTagProps {
  children?: JSX.Element | string
  onDelete?: (e: any) => void
}

const AssigmentTag = (props: AssigmentTagProps): JSX.Element => {
  const { children, onDelete } = props

  return (
    <AssigmentTagContainer {...props}>
      {children}
      <Delete onClick={onDelete}>
        <CloseContainedIcon />
      </Delete>
    </AssigmentTagContainer>
  )
}

AssigmentTag.defaultProps = {
  children: ''
}

const AssigmentTagContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.main.grey300};
  padding: 0 12px;
  border-radius: 20px;
  line-height: 24px;
  font-size: 14px;
  letter-spacing: -0.1px;
`
const Delete = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.main.grey600};
  margin-left: 9px;
  cursor: pointer;
  transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  &:hover {
    color: ${({ theme }) => theme.colors.main.white};
  }
`

export default AssigmentTag
