import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

interface PageNumberProps {
  isCurrent: boolean
  isLast: boolean
  isFirst: boolean
  children: JSX.Element | string
  onClick: (e) => any
  id: string
}

const PageNumber = (props: PageNumberProps): JSX.Element => {
  const { isCurrent, isLast, isFirst, children, onClick, id } = props

  const pageClass = cx({
    page_number: true,
    'page_number--last': isLast,
    'page_number--first': isFirst,
  })

  const getTitleIfString = typeof children === 'string' ? `Page number: ${children}` : 'Page number'

  return (
    <StyledPageNumber id={id} onClick={onClick}>
      {isCurrent ? (
        <span title={getTitleIfString} className='page_number--current'>{children}</span>
      ) : (
        <span title={getTitleIfString} className={pageClass}>{children}</span>
      )}
    </StyledPageNumber>
  )
}

const StyledPageNumber = styled.li`
  margin-top: 4px;

  &:not(:first-child) {
    margin-left: 4px;
  }

  .page_number--current,
  .page_number {
    min-width: 16px;
    height: 16px;
    line-height: 16px;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    color: ${props => props.theme.palette.brown01};
    transition: all 0.2s ${props => props.theme.transitions.easing.easeInOut} 0s;

    &:hover {
      text-decoration: underline;
    }
  }

  .page_number--current,
  .page_number--current:hover {
    text-decoration: underline;
  }

  .page_number--last {
    margin-left: 28px;
    position: relative;
    font-size: 14px;
    line-height: 16px;

    &:before {
      content: '...';
      position: absolute;
      top: 0;
      color: ${props => props.theme.palette.brown01};
      left: calc(0px - 27px);
      width: 16px;
      line-height: 16px;
      text-align: center;
      pointer-events: none;
      border: 1px solid transparent;
    }
  }

  .page_number--first {
    margin-right: 28px;
    position: relative;
    font-size: 14px;
    line-height: 16px;

    &:after {
      content: '...';
      position: absolute;
      top: 0;
      color: ${props => props.theme.palette.brown01};
      right: calc(0px - 27px);
      width: 16px;
      line-height: 16px;
      text-align: center;
      pointer-events: none;
      border: 1px solid transparent;
    }
  }
`

PageNumber.defaultProps = {}

export default PageNumber
