// MediaControl/MediaControl.tsx - Media Control component

import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

import { Pause } from '../../icons/Pause'
import { Play } from '../../icons/Play'
import { Plus } from '../../icons/Plus'
import { Tickmark } from '../../icons/Tickmark'

interface MediaControlProps {
  pause: boolean
  play: boolean
  tickmark: boolean
  plus: boolean
  text: string
}

export const MediaControl = (props: MediaControlProps): JSX.Element => {
  const { pause, play, tickmark, plus, text } = props

  const containerClass = cx({
    '--play': play,
    '--pause': pause,
    '--tickmark': tickmark,
    '--plus': plus
  })

  const getIcon = () => {
    switch (true) {
      case play:
        return <Play />
      case tickmark:
        return <Tickmark />
      case pause:
        return <Pause />
      case plus:
        return <Plus />
      default:
        return ''
    }
  }

  return (
    <MediaControlContainer className={containerClass}>
      <div className='media-control__icon'>{getIcon()}</div>
      <div>{text}</div>
    </MediaControlContainer>
  )
}

const MediaControlContainer = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${props => props.theme.palette.brown01};
  line-height: 16px;

  svg {
    margin-right: 8px;
    margin-top: 1px;
    font-size: 12px;
  }

  &.--play {
    .media-control__icon {
      color: ${props => props.theme.palette.green04};
    }
  }

  &.--pause {
    .media-control__icon {
      color: ${props => props.theme.palette.orange05};
    }
  }

  &.--tickmark {
    .media-control__icon {
      color: ${props => props.theme.palette.brown01};
    }
  }

  &.--plus {
    .media-control__icon {
      color: ${props => props.theme.palette.brown01};
    }
  }
`

MediaControl.defaultProps = {
  play: false,
  pause: false,
  tickmark: false,
  plus: false,
  text: 'EK-1'
}

export default MediaControl
