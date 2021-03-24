import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Table from './Table/Table'
import TableBody from './Table/TableBody'
import TableCell from './Table/TableCell'
import TableFoot from './Table/TableFoot'
import TableHead from './Table/TableHead'
import TableHeader, {
  // eslint-disable-next-line no-unused-vars
  TableHeaderProps,
  SORT_DIRECTION,
} from './Table/TableHeader'
import TableRow from './Table/TableRow'
import Pagination from './Pagination/Pagination'

interface CellProps {
  children: JSX.Element | string
  columnId: string
  cellProps?: object
}

interface RowsProps {
  id: string
  cells: CellProps[]
}

interface EntitiesListProps {
  headers: TableHeaderProps[]
  rows: RowsProps[]
  totalPages: number
  emptyStateText: string
  defaultPage: number
  defaultSortColumnId: string
  defaultSortDirection: string
  onTableStateChange: (state: {
    sortBy: string
    dir: string
    page: number
  }) => any
}

const EntitiesList = (props: EntitiesListProps): JSX.Element => {
  const {
    headers,
    rows,
    defaultPage,
    totalPages,
    onTableStateChange,
    emptyStateText,
    defaultSortColumnId,
    defaultSortDirection,
  } = props

  const [sortedColumnId, setSortedColumnId] = useState(defaultSortColumnId)
  const [sortDirection, setSortDirection] = useState(defaultSortDirection)
  const [currentPage, setCurrentPage] = useState(defaultPage)

  useEffect(() => {
    onTableStateChange({
      sortBy: sortedColumnId,
      dir: sortDirection,
      page: currentPage,
    })
  }, [sortedColumnId, sortDirection, currentPage])

  const setNewSortedColumnId = id => () => {
    setSortedColumnId(id)
    setSortDirection(prevState =>
      prevState === SORT_DIRECTION.desc
        ? SORT_DIRECTION.asc
        : SORT_DIRECTION.desc
    )
  }

  const renderHeaders = headers.map((header: TableHeaderProps) => (
    <TableHeader
      key={header.columnId}
      sortable={header.sortable}
      sortDirection={sortDirection}
      columnId={header.columnId}
      id={header.id}
      sticky
      isSortActive={sortedColumnId === header.columnId}
      onChangeSort={setNewSortedColumnId(header.columnId)}
    >
      {header.children}
    </TableHeader>
  ))

  const renderRows = rows.map(row => (
    <TableRow key={row.id} id={row.id}>
      {row.cells.map(cell => (
        <TableCell key={cell.columnId} {...cell.cellProps}>
          {cell.children}
        </TableCell>
      ))}
    </TableRow>
  ))

  const renderEmptyState = (
    <TableRow>
      <TableCell colSpan={headers.length}>
        <TableEmptyState>{emptyStateText}</TableEmptyState>
      </TableCell>
    </TableRow>
  )

  return (
    <Table>
      <TableHead>
        <TableRow>{renderHeaders}</TableRow>
      </TableHead>
      <TableBody>{rows.length === 0 ? renderEmptyState : renderRows}</TableBody>
      <TableFoot>
        <TableRow>
          <TableCell colSpan={headers.length}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </TableCell>
        </TableRow>
      </TableFoot>
    </Table>
  )
}

const TableEmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  color: ${props => props.theme.palette.common.gray300};
  font-size: 14px;
`

EntitiesList.defaultProps = {
  defaultSortDirection: SORT_DIRECTION.desc,
  defaultPage: 1,
}

export default EntitiesList
