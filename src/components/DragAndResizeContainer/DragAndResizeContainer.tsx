import React from 'react'
import usePortal from 'react-useportal'

import Panel from './Panel'

const DragAndResizeContainer = props => {
  const { Portal } = usePortal({
    // @ts-ignore
    bindTo: document.getElementById('panel-portal')
  })

  return (
    <Portal>
      <Panel {...props} />
    </Portal>
  )
}

export default DragAndResizeContainer
