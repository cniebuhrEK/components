// AssigmentTag - will be used for assigning different elements

import React from 'react'
import styled from 'styled-components'
import CloseIcon from '../../icons/Close'

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
        <CloseIcon />
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
  background: ${({ theme }) => theme.palette.grey12};
  padding: 4px 12px;
  border-radius: 20px;
  line-height: 20px;
`
const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.grey13};
  border-radius: 10px;
  padding: 3px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  &:hover {
    color: ${({ theme }) => theme.palette.grey13};
    background: ${({ theme }) => theme.palette.white};
  }
`

export default AssigmentTag
