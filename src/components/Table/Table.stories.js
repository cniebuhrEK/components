// Table/Table.stories.js - Table story

import React from 'react'
import { headers, rows } from './mockData'
import FullTable from './mockFullTable'

const Template = args => <FullTable {...args} />

export const EntitiesList = Template.bind({})
EntitiesList.args = {
  totalPages: 20,
  emptyStateText: 'Rows are empty',
  headers: headers,
  rows: rows,
  defaultSortColumnId: 'firstname',
  defaultSortDirection: 'DESC',
  defaultPage: 1,
  highlight: true,
  isLoading: false
}

export default {
  title: 'Atoms/Table',
  component: FullTable
}
