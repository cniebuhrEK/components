import React from 'react'
import styled from 'styled-components'

import ArrowDown from '../../icons/ArrowDown'

interface PageNextProps {
  onClick: (e) => void
}

const PageNext = (props: PageNextProps): JSX.Element => {
  const { onClick } = props

  return (
    <StyledPageNext onClick={onClick}>
      <a className='page_next'>
        <ArrowDown />
      </a>
    </StyledPageNext>
  )
}

const StyledPageNext = styled.li`
  margin-top: 4px;

  &:not(:first-child) {
    margin-left: 4px;
  }

  .page_next {
    width: auto;
    height: ${props => props.theme.dimensions.buttonSmallHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: ${props => props.theme.dimensions.buttonSmallHeight};
    margin-left: 11px;
    transform: rotate(-90deg);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`

PageNext.defaultProps = {}

export default PageNext
