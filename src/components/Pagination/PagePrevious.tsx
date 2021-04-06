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

  svg {
    font-size: 10px;
  }

  .page_previous {
    width: auto;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-left: 0;
    line-height: 16px;
    margin-right: 11px;
    transform: rotate(90deg);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      color: ${props => props.theme.palette.orange04};
    }
  }
`

PagePrevious.defaultProps = {}

export default PagePrevious
