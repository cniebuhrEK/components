import React from 'react'
import { headers, rows } from './mockData'
import { EntitiesList as Component, AddIcon, Button } from 'examkrackers-components'

const Template = args => {
  const [tableState, setTableState] = React.useState({
    sortBy: 'firstname',
    dir: 'DESC',
    page: 1,
    take: 10
  })

  const handleTableStateChange = (state) => {
    setTableState(state)
  }

  return (
    <div>
      <div>
        sortBy: {tableState.sortBy} dir: {tableState.dir} page:{' '}
        {tableState.page} take: {tableState.take}
      </div>
      <Component
        {...args}
        size={args.size}
        resultsText='40 admins'
        tableActions={<Button startIcon={<AddIcon />}>Add admin</Button>}
        headers={args.headers}
        rows={args.rows}
        totalPages={args.totalPages}
        emptyStateText={args.emptyStateText}
        defaultSortColumnId='firstname'
        defaultSortDirection='DESC'
        defaultPage={1}
        onTableStateChange={handleTableStateChange}
        highlight={args.highlight}
        defaultRowsPerPage={10}
      />
    </div>
  )
}

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

export default {
  title: 'Atoms/Table',
  component: Component
}
