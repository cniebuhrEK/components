import React from 'react'
import styled from 'styled-components'
import { propOr, find, propEq } from 'ramda'

interface TabProps {
  hideTabs?: boolean
  onChange?: (e: any) => void
  activeTab: string
  position: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft'
  tabs: {
    label: string
    value: string
  }[]
  tabContents: {
    value: string
    content: JSX.Element[] | JSX.Element | null
  }[]
}

export const Tabs = (props: TabProps) => {
  const { position, tabs, activeTab, tabContents, hideTabs, onChange } = props

  const [active, setActive] = React.useState(activeTab)

  const handleSetActive = value => () => {
    setActive(value)
    if (onChange) {
      onChange(value)
    }
  }

  React.useEffect(() => {
    setActive(activeTab)
  }, [activeTab])

  const renderTabTriggers = tabs.map(tab => (
    <TabTrigger
      position={position}
      name={propOr('', 'value', tab)}
      active={active === propOr('', 'value', tab)}
      data-active={active === propOr('', 'value', tab)}
      onClick={handleSetActive(propOr('', 'value', tab))}
      className='tab-trigger'
      key={`tab-trigger-${propOr('', 'value', tab)}`}
    >
      {propOr('', 'label', tab)}
    </TabTrigger>
  ))

  const activeContent = find(propEq('value', active))(tabContents)

  return (
    <Container position={position}>
      <TabContent>{propOr('', 'content', activeContent)}</TabContent>
      {!hideTabs && (
        <TabTriggersContainer position={position}>
          {renderTabTriggers}
        </TabTriggersContainer>
      )}
    </Container>
  )
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: ${props => props.theme.shadows.mainShadow};
  background-color: ${props => props.theme.colors.backgrounds.main};
`

const TabTriggersContainer = styled.div`
  position: absolute;
  top: ${({ position }) =>
    position === 'topRight' || position === 'topLeft' ? 0 : 'auto'};
  bottom: ${({ position }) =>
    position === 'bottomRight' || position === 'bottomLeft' ? 0 : 'auto'};
  left: ${({ position }) =>
    position === 'topLeft' || position === 'bottomLeft' ? '10px' : 'auto'};
  right: ${({ position }) =>
    position === 'topRight' || position === 'bottomRight' ? 0 : 'auto'};
  display: flex;
  align-items: ${({ position }) =>
    position === 'topRight' || position === 'topLeft'
      ? 'flex-end'
      : 'flex-start'};
  gap: 2px;
  transform: translateY(
    ${({ position }) =>
      position === 'topRight' || position === 'topLeft' ? '-100%' : '100%'}
  );
`

const TabTrigger = styled.div`
  cursor: pointer;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.tabs.backgroundActive : theme.colors.tabs.background};
  color: ${({ theme, active }) =>
    active ? theme.colors.tabs.fontActive : theme.colors.tabs.font};
  min-width: 80px;
  text-align: center;
  line-height: ${({ active }) => (active ? '21px' : '21px')};
  height: ${({ active }) => (active ? '21px' : '21px')};
  font-weight: bold;
  font-size: 11px;
  letter-spacing: -0.1px;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
  border-radius: ${({ position }) =>
    position === 'bottomRight' || position === 'bottomLeft'
      ? '0px 0px 6px 6px'
      : '6px 6px 0px 0px'};
`

const TabContent = styled.div`
  width: 100%;
  height: 100%;
`

export default Tabs
