import React from 'react'
import styled from 'styled-components'
import { includes } from 'ramda'

import PageNext from './PageNext'
import PageNumber from './PageNumber'
import PagePrevious from './PagePrevious'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page) => any
}

const PAGES_RANGE = 4

const Pagination = (props: PaginationProps): JSX.Element => {
  const { currentPage, totalPages, onPageChange } = props

  const calculatePaging = () => {
    const range = totalPages < PAGES_RANGE ? totalPages : PAGES_RANGE
    let start = 1

    if (currentPage < range / 2 + 1) {
      start = 1
    } else if (currentPage >= totalPages - range / 2) {
      start = Math.floor(totalPages - range + 1)
    } else {
      start = currentPage - Math.floor(range / 2)
    }

    return Array.from({ length: range }, (_el, i) => start + i)
  }

  const setCurrentPage = number => () => onPageChange(number)

  const renderPages = () =>
    calculatePaging().map(page => (
      <PageNumber
        isLast={false}
        isFirst={false}
        isCurrent={page === currentPage}
        key={`page-${page}`}
        onClick={setCurrentPage(page)}
        id={`page-number-${page.toString()}`}
      >
        {page.toString()}
      </PageNumber>
    ))

  const goFirst = () =>
    !includes(1, calculatePaging()) && (
      <PageNumber
        isLast={false}
        isFirst
        isCurrent={false}
        onClick={setCurrentPage(1)}
        id='page-number-1'
      >
        1
      </PageNumber>
    )

  const goLast = () =>
    !includes(totalPages, calculatePaging()) && (
      <PageNumber
        isLast
        isFirst={false}
        isCurrent={false}
        onClick={setCurrentPage(totalPages)}
        id={`page-number-${totalPages}`}
      >
        {totalPages.toString()}
      </PageNumber>
    )

  const goNext = () =>
    currentPage < totalPages && (
      <PageNext onClick={setCurrentPage(currentPage + 1)} />
    )

  const goPrevious = () =>
    currentPage > 1 && (
      <PagePrevious onClick={setCurrentPage(currentPage - 1)} />
    )

  return totalPages > 1 ? (
    <StyledPagination>
      {goPrevious()}
      {goFirst()}
      {renderPages()}
      {goLast()}
      {goNext()}
    </StyledPagination>
  ) : (
    <div />
  )
}

const StyledPagination = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size:  ${props => props.theme.typography.fontSizeSmall};

  li {
    list-style-type: none;
    cursor: pointer;
  }
`

Pagination.defaultProps = {}

export default Pagination
