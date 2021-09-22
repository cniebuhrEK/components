import React from 'react'
import VimeoPlayer from 'react-player/vimeo'

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
    onError
  } = props

  return (
    <VimeoPlayer
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
