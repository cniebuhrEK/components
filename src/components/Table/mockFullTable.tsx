// Table/mockFullTable.tsx - Full table mock

import React from 'react'
import EntitiesList from '../EntitiesList/EntitiesList'
import Button from '../Button/Button'
import { AddIcon } from '../../icons'
import { headers, rows } from './mockData'

interface FullTableProps {
  /**
   * Pagination total pages
   */
  totalPages: number
  /**
   * Rows that will be displayed inside the table
   */
  rows: any[]
  /**
   * Headers that will be displayed inside the table
   */
  headers: any[]
  /**
   * Empty state text
   */
  emptyStateText: string
  /**
   * Column id by which the table will be sorted on initial state
   */
  defaultSortColumnId: string
  /**
   * Sort direction by which the table will be sorted on initial state
   */
  defaultSortDirection: 'DESC' | 'ASC'

  size: 'xs' | 's' | 'm'
  /**
   * Page number by which the table will be paginated on initial state
   */
  defaultPage: number
  /**
   * Function that is triggered when the sort or page is changed
   */
  onTableStateChange: any

  /**
   * Flag to set a background to a table row while hovering.
   */
  highlight: boolean
}

const FullTable = (props: FullTableProps): JSX.Element => {
  const [tableState, setTableState] = React.useState({
    sortBy: 'firstname',
    dir: 'DESC',
    page: 1
  })

  const handleTableStateChange = (state: any) => {
    setTableState(state)
  }

  return (
    <div>
      <div>
        sortBy: {tableState.sortBy} dir: {tableState.dir} page:{' '}
        {tableState.page}
      </div>
      <EntitiesList
        size={props.size}
        resultsText='40 admins'
        tableActions={<Button startIcon={<AddIcon />}>Add admin</Button>}
        headers={props.headers}
        rows={props.rows}
        totalPages={props.totalPages}
        emptyStateText={props.emptyStateText}
        defaultSortColumnId='firstname'
        defaultSortDirection='DESC'
        defaultPage={1}
        onTableStateChange={handleTableStateChange}
        highlight={props.highlight}
      />
    </div>
  )
}

FullTable.defaultProps = {
  totalPages: 20,
  emptyStateText: 'Rows are empty',
  headers: headers,
  rows: rows,
  defaultSortColumnId: 'firstname',
  defaultSortDirection: 'DESC',
  size: 's',
  defaultPage: 1,
  highlight: false
}

export default FullTable
