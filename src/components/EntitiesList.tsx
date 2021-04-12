import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Table from './Table/Table'
import TableBody from './Table/TableBody'
import TableCell from './Table/TableCell'
import TableHead from './Table/TableHead'
import TablePaginationContainer from './Table/TablePaginationContainer'
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
  tableActions?: string | JSX.Element
  totalPages: number
  emptyStateText: string
  resultsText: string
  size?: string
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
    resultsText,
    tableActions,
    size
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
    <div>
      <TableActionBar>
        <div className='table-results'>{resultsText}</div>
        <div className='table-actions'>{tableActions}</div>
      </TableActionBar>
      <Table size={size}>
        <TableHead>
          <TableRow>{renderHeaders}</TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? renderEmptyState : renderRows}
        </TableBody>
      </Table>
      <TablePaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </TablePaginationContainer>
    </div>
  )
}

const TableActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;

  .table-results {
    font-weight: 600;
    font-size: ${props => props.theme.typography.fontSizeNormal};
    line-height: 19px;
    letter-spacing: -0.00450187px;
    color: ${props => props.theme.palette.brown01};
  }
`

const TableEmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  color: ${props => props.theme.palette.biege};
  font-size:  ${props => props.theme.typography.fontSizeSmall};
`

EntitiesList.defaultProps = {
  defaultSortDirection: SORT_DIRECTION.desc,
  defaultPage: 1
}

export default EntitiesList
