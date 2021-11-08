import React from 'react'
import styled from 'styled-components'

const tagColors = {
  purple: 'purple',
  red: 'red',
  blue: 'blue',
  green: 'green',
  orange: 'orange',
  brown: 'brown',
  mathPurple: 'mathPurple',
  aquamarine: 'aquamarine',
  turquoise: 'turquoise'
}

interface TagProps {
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
  onClick?: (e: any, color: any) => void
  text: string | JSX.Element
  id?: string
  name?: string
  isActive?: boolean
  isStatic?: boolean
  uppercase?: boolean
}

export const Tag = (props: TagProps): JSX.Element => {
  const { uppercase, id, name, text, color, isActive, isStatic, onClick } =
    props

  const handleClick = e => (onClick ? onClick(e, color) : {})

  return (
    <TagContainer
      uppercase={uppercase}
      name={name}
      id={id}
      onClick={handleClick}
      color={color}
      isActive={isActive}
      isStatic={isStatic}
    >
      {text}
    </TagContainer>
  )
}

Tag.defaultProps = {
  uppercase: true
}

export default Tag

const TagContainer = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.darkShadow};
  line-height: ${({ theme }) => theme.dimensions.tagHeight};
  cursor: ${({ isStatic }) => (isStatic ? 'text' : 'pointer')};
  padding: 0 11px;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  border: 1px solid
    ${({ theme, isActive }) =>
      isActive ? theme.palette.brown01 : 'transparent'};
  border-radius: 2px;
  text-align: center;
  color: ${({ theme }) => theme.palette.brown01};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
  background-color: ${({ theme, color, isActive }) => {
    switch (true) {
      case color === tagColors.purple && isActive:
        return theme.palette.purple06
      case color === tagColors.purple && !isActive:
        return theme.palette.purple08
      case color === tagColors.red && isActive:
        return theme.palette.deepred05
      case color === tagColors.red && !isActive:
        return theme.palette.deepred07
      case color === tagColors.blue && isActive:
        return theme.palette.lightblue03
      case color === tagColors.blue && !isActive:
        return theme.palette.lightblue05
      case color === tagColors.green && isActive:
        return theme.palette.green06
      case color === tagColors.green && !isActive:
        return theme.palette.green08
      case color === tagColors.orange && isActive:
        return theme.palette.orange04
      case color === tagColors.orange && !isActive:
        return theme.palette.orange06
      case color === tagColors.mathPurple && isActive:
        return theme.palette.mathPurple06
      case color === tagColors.mathPurple && !isActive:
        return theme.palette.mathPurple08
      case color === tagColors.aquamarine && isActive:
        return theme.palette.aquamarine06
      case color === tagColors.aquamarine && !isActive:
        return theme.palette.aquamarine08
      case color === tagColors.turquoise && isActive:
        return theme.palette.turquoise06
      case color === tagColors.turquoise && !isActive:
        return theme.palette.turquoise08
      default:
        return theme.palette.orange06
    }
  }};

  &:hover,
  &:active {
    border-color: ${({ theme, isStatic }) =>
      isStatic ? 'transparent' : theme.palette.brown01};
    background-color: ${({ theme, color, isStatic }) => {
      switch (true) {
        case color === tagColors.purple && !isStatic:
          return theme.palette.purple06
        case color === tagColors.purple && isStatic:
          return theme.palette.purple08
        case color === tagColors.red && !isStatic:
          return theme.palette.deepred05
        case color === tagColors.red && isStatic:
          return theme.palette.deepred07
        case color === tagColors.blue && !isStatic:
          return theme.palette.lightblue03
        case color === tagColors.blue && isStatic:
          return theme.palette.lightblue05
        case color === tagColors.green && !isStatic:
          return theme.palette.green06
        case color === tagColors.green && isStatic:
          return theme.palette.green08
        case color === tagColors.orange && !isStatic:
          return theme.palette.orange04
        case color === tagColors.orange && isStatic:
          return theme.palette.orange06
        case color === tagColors.mathPurple && !isStatic:
          return theme.palette.mathPurple06
        case color === tagColors.mathPurple && isStatic:
          return theme.palette.mathPurple08
        case color === tagColors.aquamarine && !isStatic:
          return theme.palette.aquamarine06
        case color === tagColors.aquamarine && isStatic:
          return theme.palette.aquamarine08
        case color === tagColors.turquoise && !isStatic:
          return theme.palette.turquoise06
        case color === tagColors.turquoise && isStatic:
          return theme.palette.turquoise08
        default:
          return theme.palette.orange06
      }
    }};
  }
`
