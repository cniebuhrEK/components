import React from 'react'

interface TabPanelProps {
  label: string
  children?: JSX.Element[] | JSX.Element | string | undefined
  active: boolean
  to: string
}

const TabPanel = (props: TabPanelProps) => {
  const { children, label, active } = props

  return (
    <div className='tab-panel' data-label={label} data-active={active}>
      {children}
    </div>
  )
}

TabPanel.defaultProps = {
  to: '',
  active: false
}

export default TabPanel
