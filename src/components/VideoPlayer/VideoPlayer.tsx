import React from 'react'
import VimeoPlayer from 'react-player/vimeo'
import styled from 'styled-components'

type VideoPlayerProps = {
  url: string
  width?: string
  height?: string
  playing?: boolean
  loop?: boolean
  controls?: boolean
  muted?: boolean
  styles?: any
  light?: boolean
  progressInterval?: number
  onReady?(player: any): void
  onStart?(): void
  onPlay?(): void
  onPause?(): void

  // This will not fire when loop is set to true.
  onEnded?(): void

  onError?(error: any, data?: any, hlsInstance?: any, hlsGlobal?: any): void
  onDuration?(duration: number): void
  onSeek?(seconds: number): void
  onProgress?(state: { played: number; playedSeconds: number }): void
}

// Render a Vimeo video player
const VideoPlayer = (props: VideoPlayerProps): JSX.Element => {
  const {
    url,
    controls,
    width,
    height,
    playing,
    muted,
    loop,
    styles,
    light,
    onReady,
    onStart,
    onPlay,
    onPause,
    onEnded,
    onError,
    progressInterval
  } = props

  return (
    <VideoContainer width={width} height={height}>
      <VimeoPlayer
        progressInterval={progressInterval}
        controls={controls}
        playing={playing}
        url={url}
        styles={styles}
        width={width}
        height={height}
        muted={muted}
        light={light}
        loop={loop}
        onReady={onReady}
        onStart={onStart}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        onError={onError}
      />
    </VideoContainer>
  )
}

VideoPlayer.defaultProps = {
  controls: false,
  playing: false,
  styles: {},
  loop: false,
  muted: false,
  width: '100%',
  height: '100%',
  light: false
}

export default VideoPlayer

const VideoContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  iframe {
    width: ${({ width }) => width} !important;
    height: ${({ height }) => height} !important;
  }
`
