import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import PlayIcon from '../../icons/Play'
import PauseIcon from '../../icons/Pause'
import StopIcon from '../../icons/Stop'

interface AnimationProps {
  data: any
}

const Animation = (props: AnimationProps): JSX.Element => {
  const { data } = props
  const dropdownRef = React.useRef(null)

  const [isSpeedOpen, setIsSpeedOpen] = React.useState(false)
  const [isPaused, setIsPaused] = React.useState(false)
  const [isStopped, setIsStopped] = React.useState(true)
  const [speed, setSpeed] = React.useState(1)

  const handleStop = e => {
    e.stopPropagation()
    setIsStopped(true)
  }
  const handlePlay = e => {
    e.stopPropagation()
    isPaused ? setIsPaused(false) : setIsStopped(false)
  }
  const handlePause = e => {
    e.stopPropagation()
    setIsPaused(true)
  }
  const openSpeedMenu = e => {
    e.stopPropagation()
    setIsSpeedOpen(true)
  }
  const handleSelectSpeed = speed => () => {
    setSpeed(speed)
    setIsSpeedOpen(false)
  }

  const options = {
    animationData: data,
    autoplay: false
  }

  React.useEffect(() => {
    function handleClickOutside(event) {
      // @ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSpeedOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <AnimationContainer
      isStopped={isStopped}
      isPaused={isPaused}
      isOpen={isSpeedOpen}
    >
      <Lottie
        options={options}
        isStopped={isStopped}
        isPaused={isPaused}
        width={208}
        speed={speed}
      />
      <div className='controls-container'>
        <SpeedSelection isOpen={isSpeedOpen} ref={dropdownRef}>
          <div className='selected-speed' onClick={openSpeedMenu}>
            {speed} x
          </div>
          <div className='speed-options'>
            <div className='speed-option' onClick={handleSelectSpeed(1)}>
              1 x
            </div>
            <div className='speed-option' onClick={handleSelectSpeed(1.5)}>
              1.5 x
            </div>
            <div className='speed-option' onClick={handleSelectSpeed(2)}>
              2 x
            </div>
          </div>
        </SpeedSelection>
        <button className='animation-control stop' onClick={handleStop}>
          <StopIcon />
        </button>
        <button className='animation-control play' onClick={handlePlay}>
          <PlayIcon />
        </button>
        <button className='animation-control pause' onClick={handlePause}>
          <PauseIcon />
        </button>
      </div>
    </AnimationContainer>
  )
}

Animation.defaultProps = {
  loop: false,
  autoplay: false,
  isPaused: false,
  speed: 1
}

export default Animation

export const AnimationContainer = styled.div`
  display: inline-block;

  .controls-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .animation-control {
    background-color: transparent;
    border: none;
    padding: 0;
    font-size: 9px;
    color: ${({ theme }) => theme.palette.darkblue02};

    &:not(last-of-type) {
      margin-right: 9px;
    }
  }

  .play {
    color: ${({ theme }) => theme.palette.orange01};
  }

  .pause {
    color: ${({ theme, isPaused, isStopped }) =>
      isPaused || isStopped
        ? theme.palette.inactive
        : theme.palette.darkblue02};
  }

  .stop {
    color: ${({ theme, isStopped }) =>
      isStopped ? theme.palette.inactive : theme.palette.darkblue02};
  }
`

const SpeedSelection = styled.div`
  color: ${({ theme }) => theme.palette.darkblue02};
  font-size: 11px;
  line-height: 15px;
  letter-spacing: -0.1px;
  border: 1px solid ${({ theme }) => theme.palette.darkblue02};
  border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
  position: relative;
  min-width: 30px;
  text-align: center;
  margin-right: 9px;
  cursor: pointer;

  //.selected-speed {
  //
  //}

  .speed-options {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
    overflow: hidden;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.biege};
    box-shadow: ${props => props.theme.shadows.darkShadow};
    width: 100%;
    top: calc(100% + 5px);
    left: 0;
    transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
  }

  .speed-option {
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.palette.grey10};
    }
  }
`
