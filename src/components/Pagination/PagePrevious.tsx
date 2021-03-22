import React from 'react'
import styled from 'styled-components'

import ArrowDown from '../../icons/ArrowDown'

interface PagePreviousProps {
  onClick: (e) => void
}

const PagePrevious = (props: PagePreviousProps): JSX.Element => {
  const { onClick } = props

  return (
    <StyledPagePrevious onClick={onClick}>
      <a className='page_previous'>
        <ArrowDown />
      </a>
    </StyledPagePrevious>
  )
}

const StyledPagePrevious = styled.li`
  margin-top: 4px;

  &:not(:first-child) {
    margin-left: 4px;
  }

  .page_previous {
    width: auto;
    height: ${props => props.theme.dimensions.buttonSmallHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: ${props => props.theme.dimensions.buttonSmallHeight};
    margin-left: 0;
    margin-right: 11px;
    transform: rotate(90deg);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`

PagePrevious.defaultProps = {}

export default PagePrevious
