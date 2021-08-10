import React, { useEffect } from 'react'
import styled from 'styled-components'
import Tab from './Tab'
import TabPanel from './TabPanel'

interface TabsProps {
  children: JSX.Element[] | JSX.Element | undefined
}

export const Tabs = (props: TabsProps) => {
  // Transform react children to array.
  const children: any = React.Children.toArray(props.children)

  // Check if there is a manual default
  const defaultEl = children.find((el: any): JSX.Element => el.props.active)

  // Set the active tab
  const [activeTab, setActiveTab] = React.useState<string>(
    (defaultEl && defaultEl.props.label) || children[0].props.label
  )

  const setDefaultActiveTab = () => {
    setActiveTab(
      (defaultEl && defaultEl.props.label) || children[0].props.label
    )
  }

  useEffect(() => {
    setDefaultActiveTab()
  }, [children])

  return (
    <TabsContainer>
      <TabsHeader>
        {children.map(child => (
          <Tab
            activeTab={activeTab}
            key={child.props.label}
            label={child.props.label}
            to={child.props.to}
            onClick={(tab: string) => {
              child.props.onClick && child.props.onClick()
              return setActiveTab(tab)
            }}
          />
        ))}
      </TabsHeader>
      <TabContent>
        {children.map((child: any) => {
          if (child.props.label !== activeTab) {
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
    <TabPanel label='Default'>
      Please add some child elements to create tabs.
    </TabPanel>
  )
}

const TabsContainer = styled.div`
  display: block;
`

const TabsHeader = styled.ol`
  border-bottom: 2px solid #ccc;
  padding: 0px;
`

const TabContent = styled.div`
  display: block;
`

export default Tabs
