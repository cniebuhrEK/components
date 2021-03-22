import React from 'react'
import styled from 'styled-components'
import ArrowDown from '../../icons/ArrowDown'

export interface TableHeaderProps {
  sortable?: boolean
  children: JSX.Element | string
  sortDirection?: string
  columnId: string
  id: string
  sticky?: boolean
  isSortActive?: boolean
  onChangeSort: (e) => any
}

export const SORT_DIRECTION = {
  asc: 'asc',
  desc: 'desc',
}

const TableHeader = (props: TableHeaderProps): JSX.Element => {
  const {
    sortable,
    children,
    sortDirection,
    columnId,
    sticky,
    onChangeSort,
    isSortActive,
  } = props

  const handleSort = () => {
    if (sortable) {
      onChangeSort(columnId)
    }
  }

  return (
    <StyledTableHeader
      sortable={sortable}
      sticky={sticky}
      sortDirection={sortDirection}
      isSortActive={isSortActive}
      onClick={handleSort}
    >
      {sortable && (
        <span className='table-header__sort-arrow'>
          <ArrowDown />
        </span>
      )}
      <span>{children}</span>
    </StyledTableHeader>
  )
}

const StyledTableHeader = styled.th`
  padding: 10px 5px;
  cursor: ${props => (props.sortable ? 'pointer' : 'text')};
  color: inherit;
  display: table-cell;
  vertical-align: middle;
  border-color: ${props => props.theme.palette.common.gray400};
  border-width: 0 0 1px;
  border-style: solid;
  position: ${props => (props.sticky ? 'sticky' : 'static')};
  background-color: ${props =>
    props.sticky ? props.theme.palette.common.white : 'transparent'};
  top: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  .table-header__sort-arrow {
    display: inline-block;
    opacity: ${props => (props.isSortActive ? '1' : '0')};
    color: ${props => props.theme.palette.primary.main};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    padding: 0 5px;
    line-height: 14px;
    transform: rotate(
      ${props => (props.sortDirection === SORT_DIRECTION.asc ? '0deg' : '180deg')}
    );
  }

  &:hover .table-header__sort-arrow {
    opacity: ${props => (props.isSortActive ? '1' : '0.5')};
  }
`

TableHeader.defaultProps = {
  sortable: false,
  sortDirection: SORT_DIRECTION.desc,
  sticky: false,
  isSortActive: false,
  onChangeSort: () => {},
}

export default TableHeader
