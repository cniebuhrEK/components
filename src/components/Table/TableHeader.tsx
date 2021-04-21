import React from 'react'
import styled from 'styled-components'
import ArrowDown from '../../icons/ArrowDown'

export interface TableHeaderProps {
  sortable?: boolean
  children: JSX.Element | string
  sortDirection?: string
  align?: string
  columnId: string
  id: string
  sticky?: boolean
  isSortActive?: boolean
  onChangeSort?: (e) => any
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
    id,
    align
  } = props

  const handleSort = () => {
    if (sortable && onChangeSort) {
      onChangeSort(columnId)
    }
  }

  return (
    <StyledTableHeader
      align={align}
      sortable={sortable}
      sticky={sticky}
      sortDirection={sortDirection}
      isSortActive={isSortActive}
      onClick={handleSort}
      id={id}
    >
      {sortable && align === 'right' && (
        <span className='table-header__sort-arrow'>
          <ArrowDown />
        </span>
      )}
      <span>{children}</span>
      {sortable && align === 'left' && (
        <span className='table-header__sort-arrow'>
          <ArrowDown />
        </span>
      )}
    </StyledTableHeader>
  )
}

const StyledTableHeader = styled.th`
  box-sizing: border-box;
  padding: 8px 18px;
  cursor: ${props => (props.sortable ? 'pointer' : 'text')};
  color: inherit;
  display: table-cell;
  vertical-align: middle;
  border-spacing: 0;
  border-style: solid;
  position: ${props => (props.sticky ? 'sticky' : 'static')};
  background-color: ${props =>
    props.sticky ? props.theme.palette.biege : 'transparent'};
  top: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border-color: ${props => props.theme.palette.grey09};
  border-width: 0 0 1px;
  border-style: solid;
  text-align: ${props => props.align};

  .table-header__sort-arrow {
    display: inline-block;
    opacity: ${props => (props.isSortActive ? '1' : '0')};
    color: ${props => props.theme.palette.brown01};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    padding: 0 5px;
    line-height: 14px;
    font-size: ${props => props.theme.typography.fontSizeNormal};
    transform: rotate(
        ${props =>
          props.sortDirection === SORT_DIRECTION.asc ? '0deg' : '180deg'}
      )
      translateY(
        ${props => (props.sortDirection === SORT_DIRECTION.asc ? '10%' : '0')}
      );
  }

  &:hover .table-header__sort-arrow {
    opacity: ${props => (props.isSortActive ? '1' : '0.5')};
  }
`

TableHeader.defaultProps = {
  sortable: false,
  align: 'left',
  sortDirection: SORT_DIRECTION.desc,
  sticky: false,
  isSortActive: false,
  onChangeSort: () => {},
}

export default TableHeader
