import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

interface TabProps {
  activeTab: string
  label: string
  button?: string | JSX.Element
  to?: string
  onClick: (e: any) => any
}

export const Tab = (props: TabProps) => {
  const { activeTab, label, to, onClick } = props
  const cx = classnames({
    '--isActive': activeTab === label
  })

  if (to !== '') {
    return (
      <TabContainer className={cx}>
        <a href={to}>{label}</a>
      </TabContainer>
    )
  } else {
    return (
      <TabContainer className={cx} onClick={() => onClick(label)}>
        {label}
      </TabContainer>
    )
  }
}

Tab.defaultProps = {
  label: 'Default',
  to: '',
  onClick: () => {}
}

const TabContainer = styled.li`
  display: inline-block;
  list-style: none;
  margin-right: 24px;
  margin-bottom: -1px;
  padding: 4px 0;
  user-select: none;

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }

  &.--isActive {
    border: solid ${({ theme }) => theme.palette.orange01};
    border-width: 0px 0px 3px 0px;
  }

  a {
    color: ${({ theme }) => theme.palette.darkblue01};
    font-weight: 400;
  }
`

export default Tab
