// Tooltip/Tooltip.tsx - Tooltip component

import React from 'react'
import styled from 'styled-components'

import ReactTooltip from 'react-tooltip'

interface TooltipProps {
  children: JSX.Element | string
  tooltipContent: JSX.Element | string
  id: string
}

const Tooltip = ({
  children,
  tooltipContent,
  id
}: TooltipProps): JSX.Element => {
  return (
    <React.Fragment>
      <TooltipContainer data-tip data-for={id}>
        {children}
      </TooltipContainer>
      <ReactTooltip
        id={id}
        place='top'
        effect='solid'
        data-class='tooltip-content'
      >
        {tooltipContent}
      </ReactTooltip>
    </React.Fragment>
  )
}

export default Tooltip

export const TooltipContainer = styled.div`
  display: inline-block;

  .__react_component_tooltip {
    background-color: ${props => props.theme.palette.brown01} !important;
    font-family: ${props => props.theme.typography.fontFamily} !important;
  }
`
