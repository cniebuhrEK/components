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
    min-width: ${props => props.theme.dimensions.buttonSmallHeight};
    height: ${props => props.theme.dimensions.buttonSmallHeight};
    line-height: ${props => props.theme.dimensions.buttonSmallHeight};
    border-radius: ${props => props.theme.shape.borderRadius};
    border: 1px solid ${props => props.theme.palette.common.gray400};
    display: inline-block;
    text-align: center;
    font-size: 14px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      background-color: ${props => props.theme.palette.primary.light};
      color: ${props => props.theme.palette.primary.contrastText};
      border-color: ${props => props.theme.palette.primary.contrastText};
    }
  }

  .page_number--current,
  .page_number--current:hover {
    background-color: ${props => props.theme.palette.primary.main};
    border-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.contrastText};
  }

  .page_number--last {
    margin-left: 28px;
    position: relative;
    font-size: 14px;
    line-height: 34px;

    &:before {
      content: '...';
      position: absolute;
      top: 0;
      color: ${props => props.theme.palette.text.main};
      left: calc(
        0px - ${props => props.theme.dimensions.buttonSmallHeight} - 2px
      );
      width: ${props => props.theme.dimensions.buttonSmallHeight};
      line-height: ${props => props.theme.dimensions.buttonSmallHeight};
      text-align: center;
      pointer-events: none;
      border: 1px solid transparent;
    }
  }

  .page_number--first {
    margin-right: 28px;
    position: relative;
    font-size: 14px;
    line-height: 34px;

    &:after {
      content: '...';
      position: absolute;
      top: 0;
      color: ${props => props.theme.palette.text.main};
      right: calc(
        0px - ${props => props.theme.dimensions.buttonSmallHeight} - 2px
      );
      width: ${props => props.theme.dimensions.buttonSmallHeight};
      line-height: ${props => props.theme.dimensions.buttonSmallHeight};
      text-align: center;
      pointer-events: none;
      border: 1px solid transparent;
    }
  }
`

PageNumber.defaultProps = {}

export default PageNumber
