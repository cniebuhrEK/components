import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

interface TabProps {
  activeTab: string
  label: string
  button?: string | JSX.Element
  to?: string
  onClick: (e) => any
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

  a {
    color: ${({ theme }) => theme.palette.black};
    font-weight: 600;
  }
`

export default Tab
