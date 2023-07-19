// EntitiesList/EntitiesList.tsx - Full functional table component

import React, { useEffect, useMemo, useState } from 'react'
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
import EntitiesListExpandableRow from './EntitiesListExpandableRow'
import { propOr } from 'ramda'
import { BouncingLoader } from '../BouncingLoader'
import { IconButton } from '../IconButton'
import { AddIcon } from '../../icons'

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
  headers: any[]
  rows: RowsProps[]
  tableActions?: string | JSX.Element
  totalPages: number
  paginationPage?: number
  emptyStateText: string
  resultsText?: string
  size?: string
  removeMargin?: boolean
  defaultPage: number
  defaultRowsPerPage?: 5 | 10 | 50 | 100 | undefined
  defaultSortColumnId: string
  defaultSortDirection: string
  onTableStateChange: (state: {
    sortBy: string
    dir: string
    page: number
    take: number
  }) => any
  highlight: boolean
  isLoading?: boolean
  topPagination?: boolean
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
    defaultRowsPerPage,
    paginationPage,
    removeMargin,
    isLoading,
    topPagination
  } = props

  const [sortedColumnId, setSortedColumnId] = useState(defaultSortColumnId)
  const [sortDirection, setSortDirection] = useState(defaultSortDirection)
  const [currentPage, setCurrentPage] = useState(defaultPage)
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setRowsPerPage(defaultRowsPerPage)
  }, [defaultRowsPerPage])

  useEffect(() => {
    paginationPage && setCurrentPage(paginationPage)
  }, [paginationPage])

  const handleRowsPerPageChange = value => {
    setRowsPerPage(value)
    setCurrentPage(1)
  }

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 200)
  }, [])

  useEffect(() => {
    if (isMounted) {
      onTableStateChange({
        sortBy: sortedColumnId,
        dir: sortDirection,
        page: currentPage,
        take: rowsPerPage || DEFAULT_ROWS_PER_PAGE
      })
    }
  }, [sortedColumnId, sortDirection, currentPage, rowsPerPage])

  const setNewSortedColumnId = id => () => {
    setSortedColumnId(id)
    setSortDirection(prevState =>
      prevState === SORT_DIRECTION.desc
        ? SORT_DIRECTION.asc
        : SORT_DIRECTION.desc
    )
  }

  const renderAddButton = id => {
    const handleAddButtonClick = () => {
      const stickyHeadersButton = document.getElementById(id)
      // @ts-ignore
      stickyHeadersButton.click()
    }

    return (
      <IconButton
        icon={<AddIcon />}
        color='secondary'
        variant='filled'
        tooltip='Add new item to the list'
        tooltipId='header-action-button'
        onClick={handleAddButtonClick}
        size='small'
      />
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
      <React.Fragment>
        {header.addButtonId && renderAddButton(header.addButtonId)}
        {header.children}
      </React.Fragment>
    </TableHeader>
  ))

  const rowsToRender = useMemo(() => {
    return rows.map(row => ({
      ...row,
      level: 'level-0',
      children: propOr([], 'children', row).map(childLvl1 => ({
        ...childLvl1,
        level: 'level-1',
        children: propOr([], 'children', childLvl1).map(childLvl2 => ({
          ...childLvl2,
          level: 'level-2'
        }))
      }))
    }))
  }, [rows])

  const renderRows = rowsToRender.map(row => {
    return <EntitiesListExpandableRow key={row.id} row={row} />
  })

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

  const renderLoader = (
    <TableRow highlight={highlight}>
      <TableCell colSpan={headers.length}>
        <TableLoader>
          <BouncingLoader />
        </TableLoader>
      </TableCell>
    </TableRow>
  )

  const renderTableBodyContent = () => {
    switch (true) {
      case isLoading:
        return renderLoader
      case rows.length === 0:
        return renderEmptyState
      default:
        return renderRows
    }
  }

  return (
    <div>
      <TableActionBar removeMargin={removeMargin}>
        {resultsText !== undefined && (
          <div className='table-results'>{resultsText}</div>
        )}
        {tableActions !== undefined && (
          <div className='table-actions'>{tableActions}</div>
        )}
      </TableActionBar>
      {topPagination ? (
        <TablePaginationContainer isTop={topPagination}>
          <RowsPerPage
            onChange={handleRowsPerPageChange}
            defaultValue={rowsPerPage || DEFAULT_ROWS_PER_PAGE}
            isTop
          />
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </TablePaginationContainer>
      ) : null}
      <TableContainerOuter>
        <TableContainer>
          <Table size={size}>
            <TableHead>
              <TableRow highlight={highlight}>{renderHeaders}</TableRow>
            </TableHead>
            <TableBody>{renderTableBodyContent()}</TableBody>
          </Table>
        </TableContainer>
      </TableContainerOuter>
      <TablePaginationContainer>
        <RowsPerPage
          onChange={handleRowsPerPageChange}
          defaultValue={rowsPerPage || DEFAULT_ROWS_PER_PAGE}
        />
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
  margin-bottom: ${({ removeMargin }) => (removeMargin ? 0 : '8px')};

  .table-results {
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.fontSizeNormal};
    line-height: 19px;
    letter-spacing: -0.00450187px;
  }
`

const TableEmptyState = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizeSmall};

  svg {
    color: ${({ theme }) => theme.colors.main.error500};
    margin-right: 10px;
    font-size: 20px;
  }
`

const TableContainerOuter = styled.div`
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.backgrounds.main};
  box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  padding: 16px;
`

const TableContainer = styled.div``

const TableLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

EntitiesList.defaultProps = {
  defaultSortDirection: SORT_DIRECTION.desc,
  defaultPage: 1,
  highlight: false
}

export default EntitiesList
