import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

import { Pause } from '../icons/Pause'
import { Play } from '../icons/Play'
import { Stop } from '../icons/Stop'

interface MediaControlProps {
  pause: boolean
  play: boolean
  stop: boolean
  disabled: boolean
  text: string
}

export const MediaControl = (props: MediaControlProps): JSX.Element => {
  const { pause, play, stop, disabled, text } = props

  const containerClass = cx({
    '--play': play,
    '--pause': pause,
    '--stop': stop,
    '--disabled': disabled
  })

  const getIcon = () => {
    switch (true) {
      case play:
        return <Play />
      case stop:
        return <Stop />
      case pause:
        return <Pause />
      case disabled:
        return <div className='media-control__dot' />
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
  align-items: center;
  color: ${props => props.theme.palette.brown01};

  svg {
    margin-right: 8px;
    margin-top: 2px;
    font-size: 12px;
  }

  .media-control__dot {
    width: 8px;
    height: 8px;
    margin-right: 8px;
    margin-bottom: 3px;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.grey08};
  }

  &.--play {
    .media-control__dot {
      background-color: ${props => props.theme.palette.green04};
    }

    .media-control__icon {
      color: ${props => props.theme.palette.green04};
    }
  }

  &.--pause {
    .media-control__dot {
      background-color: ${props => props.theme.palette.orange05};
    }

    .media-control__icon {
      color: ${props => props.theme.palette.orange05};
    }
  }

  &.--stop {
    .media-control__dot {
      background-color: ${props => props.theme.palette.brown01};
    }

    .media-control__icon {
      color: ${props => props.theme.palette.brown01};
    }
  }

  &.--disabled {
    .media-control__dot {
      background-color: ${props => props.theme.palette.grey08};
    }

    .media-control__icon {
      color: ${props => props.theme.palette.grey08};
    }
  }
`

MediaControl.defaultProps = {
  play: false,
  pause: false,
  stop: false,
  disabled: false,
  text: 'EK-1'
}

export default MediaControl
