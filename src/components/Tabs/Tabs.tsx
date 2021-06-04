import React from 'react'
import styled from 'styled-components'
import Tab from './Tab'

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState<string>(
    children[0].props.label
  )
  return (
    <TabsContainer>
      <TabsHeader>
        {children.map((child: JSX.Element) => (
          <Tab
            activeTab={activeTab}
            key={child.props.label}
            label={child.props.label}
            onClick={(tab: string) => setActiveTab(tab)}
          />
        ))}
      </TabsHeader>
      <TabContent>
        {children.map((child: JSX.Element) => {
          if (child.props.label !== activeTab) {
            return undefined
          }

          return child
        })}
      </TabContent>
    </TabsContainer>
  )
}

const TabsContainer = styled.div`
  display: block;
`

const TabsHeader = styled.ol`
  border-bottom: 2px solid #ccc;
  padding: 4px 8px;
`

const TabContent = styled.div`
  display: block;
`

export default Tabs
