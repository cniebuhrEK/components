import React from 'react'
import { headers, rows } from './tableData'

import { FullTable } from './Table'

export default {
  title: 'Atoms/Table',
  component: FullTable
}

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
  highlight: true
}
