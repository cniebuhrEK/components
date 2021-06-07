import React from 'react'
import styled from 'styled-components'
import Tab from './Tab'

interface TabsProps {
  children: React.ReactNode
}

export const Tabs = (props: TabsProps) => {
  const children: any = React.Children.toArray(props.children)
  const [activeTab, setActiveTab] = React.useState<string>(
    children[0].props['data-label']
  )

  return (
    <TabsContainer>
      <TabsHeader>
        {children.map((child: any) => (
          <Tab
            activeTab={activeTab}
            key={child.props['data-label']}
            label={child.props['data-label']}
            onClick={(tab: string) => setActiveTab(tab)}
          />
        ))}
      </TabsHeader>
      <TabContent>
        {children.map((child: any) => {
          if (child.props['data-label'] !== activeTab) {
            return undefined
          }

          return child
        })}
      </TabContent>
    </TabsContainer>
  )
}

Tabs.defaultProps = {
  children: (
    <div className='tab-panel' data-label='Default'>
      Please add some child elements to create tabs.
    </div>
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
