import React from 'react'
import styled from 'styled-components'
import CorrectMark from '../../icons/CorrectMark'
import { isNotNilOrEmpty } from '../../utils/ramda'
import { Tooltip } from '../Tooltip'

type TagProps =
  | {
      color:
        | 'purple'
        | 'red'
        | 'blue'
        | 'green'
        | 'orange'
        | 'brown'
        | 'mathPurple'
        | 'aquamarine'
        | 'turquoise'
        | 'yellow'
        | 'grey'
      onClick?: (e: any) => void
      text: string | JSX.Element
      id?: string
      name?: string
      isActive?: boolean
      isStatic?: boolean
      uppercase?: boolean
      disabled?: boolean
      tooltip?: JSX.Element | string
      tooltipId?: string
    }
  | {
      color:
        | 'purple'
        | 'red'
        | 'blue'
        | 'green'
        | 'orange'
        | 'brown'
        | 'mathPurple'
        | 'aquamarine'
        | 'turquoise'
        | 'yellow'
        | 'grey'
      onClick?: (e: any) => void
      text: string | JSX.Element
      id?: string
      name?: string
      isActive?: boolean
      isStatic?: boolean
      uppercase?: boolean
      disabled?: boolean
      tooltip: JSX.Element | string
      tooltipId: string
    }

export const Tag = (props: TagProps): JSX.Element => {
  const {
    uppercase,
    id,
    name,
    text,
    color,
    isActive,
    isStatic,
    onClick,
    tooltip,
    tooltipId,
    disabled
  } = props

  const handleClick = e => {
    e.preventDefault()
    return onClick ? onClick(color) : {}
  }

  const renderTag = (
    <TagContainer
      uppercase={uppercase}
      name={name}
      id={id}
      onClick={handleClick}
      color={color}
      isActive={isActive}
      isStatic={isStatic}
      disabled={disabled}
    >
      {isActive && (
        <IconWrapper>
          <CorrectMark />
        </IconWrapper>
      )}
      {text}
    </TagContainer>
  )

  return isNotNilOrEmpty(tooltip) ? (
    // @ts-ignore
    <Tooltip tooltipContent={tooltip} id={tooltipId}>
      {renderTag}
    </Tooltip>
  ) : (
    renderTag
  )
}

Tag.defaultProps = {
  uppercase: true,
  color: 'orange'
}

export default Tag

const TagContainer = styled.div`
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  line-height: ${({ theme }) => theme.dimensions.tagHeight};
  min-height: ${({ theme }) => theme.dimensions.tagHeight};
  min-width: ${({ theme }) => theme.dimensions.tagWidth};
  cursor: ${({ isStatic }) => (isStatic ? 'text' : 'pointer')};
  color: ${({ theme, isActive, color }) =>
    theme.colors.tags[color][isActive ? 'background' : 'backgroundActive']};
  padding: 0 11px;
  font-size: 10px !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ theme, color }) => theme.colors.tags[color].backgroundActive};
  border-radius: 2px;
  text-align: center;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
  background-color: ${({ theme, color, isActive }) =>
    theme.colors.tags[color][isActive ? 'backgroundActive' : 'background']};

  &:hover {
    color: ${({ theme, color }) => theme.colors.tags[color].backgroundActive};
    border-color: ${({ theme, color, isStatic }) =>
      theme.colors.tags[color][
        isStatic ? 'backgroundActive' : 'backgroundHover'
      ]};
    background-color: ${({ theme, color, isStatic }) =>
      theme.colors.tags[color][isStatic ? 'background' : 'backgroundHover']};
  }
  &:active {
    border-color: ${({ theme, color }) =>
      theme.colors.tags[color].backgroundActive};
    background-color: ${({ theme, color, isStatic }) =>
      theme.colors.tags[color][isStatic ? 'background' : 'backgroundActive']};
  }
`
const IconWrapper = styled.div`
  padding-right: 4px;
  display: inline-flex;
  line-height: ${({ theme }) => theme.dimensions.tagHeight};
  align-items: center;
`
