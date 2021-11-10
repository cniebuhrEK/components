// EntitiesList/EntitiesList.tsx - Full functional table component

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Table from '../Table/Table'
import TableBody from '../Table/TableBody'
import TableCell from '../Table/TableCell'
import TableHead from '../Table/TableHead'
import TablePaginationContainer from '../Table/TablePaginationContainer'
import TableHeader, {
  // eslint-disable-next-line no-unused-vars
  TableHeaderProps,
  SORT_DIRECTION
} from '../Table/TableHeader'
import TableRow from '../Table/TableRow'
import Pagination from '../Pagination/Pagination'
import RowsPerPage from '../RowsPerPage/RowsPerPage'
import WarningReversed from '../../icons/WarningReversed'

const DEFAULT_ROWS_PER_PAGE = 10

interface CellProps {
  children: JSX.Element | string
  columnId: string
  align?: string
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
  defaultRowsPerPage?: 10 | 50 | 100 | undefined
  defaultSortColumnId: string
  defaultSortDirection: string
  onTableStateChange: (state: {
    sortBy: string
    dir: string
    page: number
    take: number
  }) => any

  // Highlight table rows when hovered
  highlight: boolean
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
    size,
    highlight,
    defaultRowsPerPage
  } = props

  const [sortedColumnId, setSortedColumnId] = useState(defaultSortColumnId)
  const [sortDirection, setSortDirection] = useState(defaultSortDirection)
  const [currentPage, setCurrentPage] = useState(defaultPage)
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)

  useEffect(() => {
    onTableStateChange({
      sortBy: sortedColumnId,
      dir: sortDirection,
      page: currentPage,
      take: rowsPerPage || DEFAULT_ROWS_PER_PAGE
    })
  }, [sortedColumnId, sortDirection, currentPage, rowsPerPage])

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
      align={header.align}
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
    <TableRow key={row.id} id={row.id} highlight={highlight}>
      {row.cells.map(cell => (
        <TableCell key={cell.columnId} {...cell.cellProps}>
          {cell.children}
        </TableCell>
      ))}
    </TableRow>
  ))

  const renderEmptyState = (
    <TableRow highlight={highlight}>
      <TableCell colSpan={headers.length}>
        <TableEmptyState>
          <WarningReversed />
          {emptyStateText}
        </TableEmptyState>
      </TableCell>
    </TableRow>
  )

  return (
    <div>
      <TableActionBar>
        {resultsText !== undefined && (
          <div className='table-results'>{resultsText}</div>
        )}
        {tableActions !== undefined && (
          <div className='table-actions'>{tableActions}</div>
        )}
      </TableActionBar>
      <TableContainer>
        <Table size={size}>
          <TableHead>
            <TableRow highlight={highlight}>{renderHeaders}</TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 ? renderEmptyState : renderRows}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePaginationContainer>
        {defaultRowsPerPage && rows.length > 10 && (
          <RowsPerPage
            onChange={setRowsPerPage}
            defaultValue={rowsPerPage || DEFAULT_ROWS_PER_PAGE}
          />
        )}
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
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
    font-size: ${({ theme }) => theme.typography.fontSizeNormal};
    line-height: 19px;
    letter-spacing: -0.00450187px;
    color: ${({ theme }) => theme.palette.brown01};
  }
`

const TableEmptyState = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.brown01};
  font-size: ${({ theme }) => theme.typography.fontSizeSmall};

  svg {
    color: ${({ theme }) => theme.palette.red05};
    margin-right: 10px;
    font-size: 20px;
  }
`

const TableContainer = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.darkShadow};
  padding-bottom: 36px;
`

EntitiesList.defaultProps = {
  defaultSortDirection: SORT_DIRECTION.desc,
  defaultPage: 1,
  highlight: false
}

export default EntitiesList
