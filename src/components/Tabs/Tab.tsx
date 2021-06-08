import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

export const Tab = ({ activeTab, label, onClick }) => {
  const cx = classnames({
    '--isActive': activeTab === label
  })

  return (
    <TabContainer className={cx} onClick={() => onClick(label)}>
      {label}
    </TabContainer>
  )
}

const TabContainer = styled.li`
  display: inline-block;
  list-style: none;
  margin-right: 24px;
  margin-bottom: -1px;
  padding: 0.5rem 0.25rem;
  user-select: none;

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }

  &.--isActive {
    border: solid #fb9e34;
    border-width: 0px 0px 3px 0px;
    font-weight: 600;
  }
`

export default Tab
