import React from 'react'
import { InfoTile, EditIcon, McatForChartIcon } from 'examkrackers-components'

const DefaultTemplate = args => <InfoTile {...args} />

export const Default = DefaultTemplate.bind({})

Default.args = {
  icon: <McatForChartIcon />,
  content: (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: '10px'
      }}
    >
      <div
        style={{
          paddingLeft: '7px'
        }}
      >
        Target:
      </div>
      <div
        style={{
          fontWeight: '700'
        }}
      >
        329
      </div>
      <div
        style={{
          cursor: 'pointer',
          color: '#000',
          fontSize: '14px'
        }}
      >
        <EditIcon onClick={() => console.log('console.log -> onClick')} />
      </div>
    </div>
  )
}

export default {
  title: 'Atoms/Info Tile',
  component: InfoTile
}
