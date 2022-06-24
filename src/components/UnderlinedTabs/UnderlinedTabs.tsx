import React from 'react'
import { propOr, find, propEq } from 'ramda'
import styled from 'styled-components'

interface IUnderlinedTabs {
  onChange?: (e: any) => void
  activeTab: string
  tabs: {
    label: string | JSX.Element
    value: string
  }[]
  tabContents: {
    value: string
    content: JSX.Element[] | JSX.Element | null
  }[]
}

export const UnderlinedTabs = (props: IUnderlinedTabs): JSX.Element => {
  const { tabs, activeTab, tabContents, onChange } = props

  const [active, setActive] = React.useState(activeTab)

  const activeContent = find(propEq('value', active))(tabContents)

  const handleSetActive = value => () => {
    setActive(value)
    if (onChange) {
      onChange(value)
    }
  }

  const renderTabTriggers = tabs.map(tab => (
    <TabTrigger
      name={propOr('', 'value', tab)}
      isActive={active === propOr('', 'value', tab)}
      data-active={active === propOr('', 'value', tab)}
      onClick={handleSetActive(propOr('', 'value', tab))}
      className='underlined-tab-trigger'
      key={`underlined-tab-trigger-${propOr('', 'value', tab)}`}
    >
      {propOr('', 'label', tab)}
    </TabTrigger>
  ))

  React.useEffect(() => {
    setActive(activeTab)
  }, [activeTab])

  return (
    <Container>
      <TabTriggersContainer>
        <TabInnerContainer>{renderTabTriggers}</TabInnerContainer>
      </TabTriggersContainer>
      <TabContent>{propOr('', 'content', activeContent)}</TabContent>
    </Container>
  )
}

export default UnderlinedTabs

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const TabContent = styled.div`
  width: 100%;
  height: 100%;
`

const TabTriggersContainer = styled.div`
  margin-top: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main.grey200};
`

const TabInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8px;
`

const TabTrigger = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4px;
  justify-content: center;
  line-height: 26px;
  border-bottom: 1px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.main.primary500 : 'transparent'};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.main.primary500 : 'inherit'};
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};

  svg {
    font-size: 20px;
  }
`
