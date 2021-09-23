import React from 'react'
import Lottie from 'react-lottie'

// NOTE: Playing and pausing the component can be controlled manually by clicking
// the animation. This overrides the component props. Controlling the animation
// programmatically could possibly be disrupted by the user.
type AnimationProps = {
  loop?: boolean
  autoplay?: boolean
  width: number
  height: number
  isPlaying?: boolean
  isPaused?: boolean

  // FIXME: Speed doesn't seem to be respected by React Lottie.
  speed?: number
  data: any
}

const Animation = (props: AnimationProps): JSX.Element => {
  const { loop, autoplay, speed, data, width, height, isPlaying, isPaused } =
    props

  const options = {
    loop,
    autoplay: autoplay && !isPaused,
    animationData: data,
    speed,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Lottie
      options={options}
      isPlaying={isPlaying && !isPaused}
      isPaused={isPaused}
      width={width}
      height={height}
      speed={speed}
    />
  )
}

Animation.defaultProps = {
  loop: false,
  autoplay: false,
  isPaused: false,
  speed: 1
}

export default Animation
