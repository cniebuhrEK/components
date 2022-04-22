import React, { useEffect, useRef, useState } from 'react'
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
  onChangeSort?: (e: any) => any
}

export const SORT_DIRECTION = {
  asc: 'asc',
  desc: 'desc'
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

  const [isSticky, setIsSticky] = useState(0)
  const headerRef = useRef(null)

  const handleScroll = () => {
    // @ts-ignore
    const windowOffset = document.documentElement.scrollTop || 0
    // @ts-ignore
    const offset = headerRef.current.getBoundingClientRect().top
    // @ts-ignore
    setIsSticky(windowOffset > offset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSort = () => {
    if (sortable && onChangeSort) {
      onChangeSort(columnId)
    }
  }

  return (
    <StyledTableHeader
      ref={headerRef}
      align={align}
      sortable={sortable}
      sticky={sticky}
      sortDirection={sortDirection}
      isSortActive={isSortActive}
      onClick={handleSort}
      id={id}
      isSticky={isSticky}
    >
      {sortable && align === 'right' && (
        <ArrowContainer>
          <ArrowDown />
        </ArrowContainer>
      )}
      {children}
      {sortable && align === 'left' && (
        <ArrowContainer
          isSortActive={isSortActive}
          sortDirection={sortDirection}
        >
          <ArrowDown />
        </ArrowContainer>
      )}
    </StyledTableHeader>
  )
}

const StyledTableHeader = styled.th`
  border-color: ${({ theme }) => theme.colors.table.border};
  background-color: ${({ theme, isSticky }) =>
    isSticky ? theme.colors.table.background : 'transparent'};
  border-spacing: 0;
  border-style: solid;
  border-width: 0 0 1px;
  box-sizing: border-box;
  color: inherit;
  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'text')};
  display: table-cell;
  padding: 8px;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  text-align: ${({ align }) => align};
  top: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  vertical-align: bottom;
  white-space: nowrap;
  z-index: 1;

  &:last-child,
  &:first-child {
    padding: 8px 0;
  }
`

const ArrowContainer = styled.div`
  color: ${({ theme }) => theme.colors.table.font};
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  line-height: 14px;
  opacity: ${({ isSortActive }) => (isSortActive ? '1' : '0')};
  padding: 0 5px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transform: rotate(
      ${({ sortDirection }) =>
        sortDirection === SORT_DIRECTION.asc ? '0deg' : '180deg'}
    )
    translateY(
      ${({ sortDirection }) =>
        sortDirection === SORT_DIRECTION.asc ? '10%' : '0'}
    );

  &:hover {
    opacity: ${({ isSortActive }) => (isSortActive ? '1' : '0.5')};
  }
`

TableHeader.defaultProps = {
  sortable: false,
  align: 'left',
  sortDirection: SORT_DIRECTION.desc,
  sticky: false,
  isSortActive: false,
  onChangeSort: () => {}
}

export default TableHeader
