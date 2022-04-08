// InfoTile/InfoTile.stories.js - InfoTile story

import React from 'react'
import InfoTile from './InfoTile'
import McatForChartIcon from '../../icons/McatForChart'
import EditIcon from '../../icons/Edit'

const DefaultTemplate = args => <InfoTile {...args} />

export const Default = DefaultTemplate.bind({})

Default.args = {
  icon: <McatForChartIcon />,
  content: {
    title: 'Title',
    score: 0,
    icon: <EditIcon />
  }
}

export default {
  title: 'Atoms/Info Tile',
  component: InfoTile
}
