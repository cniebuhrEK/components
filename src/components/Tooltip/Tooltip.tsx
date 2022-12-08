// Tooltip/Tooltip.tsx - Tooltip component

import React from 'react'
import styled from 'styled-components'

import ReactTooltip from 'react-tooltip'
import QuestionCircle from '../../icons/QuestionCircle'

type TooltipProps =
  | {
      children: JSX.Element | string
      tooltipContent: JSX.Element | string
      id: string
      info?: boolean
      infoIconColor?: string
      place?: 'top' | 'right' | 'bottom' | 'left'
      [x: string]: any
    }
  | {
      children?: JSX.Element | string
      tooltipContent: JSX.Element | string
      id: string
      info: boolean
      infoIconColor?: string
      place?: 'top' | 'right' | 'bottom' | 'left'
      [x: string]: any
    }

const Tooltip = ({
  children,
  tooltipContent,
  id,
  info,
  infoIconColor,
  place,
  ...rest
}: TooltipProps): JSX.Element => {
  return (
    <Wrapper>
      <TooltipContainer data-tip data-for={id}>
        {info ? <QuestionMarkIcon color={infoIconColor} /> : children}
      </TooltipContainer>
      <ReactTooltip
        id={id}
        place={place || 'top'}
        effect='solid'
        data-class='tooltip-content'
        {...rest}
      >
        {tooltipContent}
      </ReactTooltip>
    </Wrapper>
  )
}

export default Tooltip

const Wrapper = styled.div`
  display: inline-block;
  line-height: 1.05;
  .__react_component_tooltip {
    background-color: ${props =>
      props.theme.colors.tooltip.background} !important;
    color: ${props => props.theme.colors.tooltip.font} !important;
    font-family: ${props => props.theme.typography.fontFamily} !important;
    z-index: ${({ theme }) => theme.zIndex.navigation + 1} !important;
    max-width: 250px;
    text-align: center;
  }
`

export const TooltipContainer = styled.div`
  display: inline-block;
  cursor: help;
`

const QuestionMarkIcon = styled(QuestionCircle)`
  color: ${({ theme, color }) => color || theme.colors.main.primary500};
`
