import React, { useEffect, useMemo, useState } from 'react'
import { SpeakerMuteIcon, SpeakerQuietIcon, SpeakerLoudIcon } from '../../icons'
import styled from 'styled-components'

export const SOUNDS = {
  cqSuccess: '/assets/sounds/cq_success.mp3',
  cqFail: '/assets/sounds/cq_fail.mp3'
}

export const playSound = soundSrc => {
  const volume = localStorage.getItem('volume') || 1
  const isMutedFromLocal = localStorage.getItem('isMuted') || 'false'
  const isMuted = isMutedFromLocal === 'true'
  const audio = new Audio(soundSrc)
  audio.volume = isMuted ? 0 : Number(volume)
  audio.play()
}

export const VolumeControl = () => {
  const volumeFromLocalStorage = localStorage.getItem('volume') || 1
  const isMutedFromLocal = localStorage.getItem('isMuted') || 'false'
  const isInitiallyMuted = isMutedFromLocal === 'true'
  const [volume, setVolume] = useState(volumeFromLocalStorage)
  const [isMuted, setIsMuted] = useState(isInitiallyMuted)

  const handleVolumeChange = e => {
    const value = Number(e.target.value)
    if (value !== 0) {
      setIsMuted(false)
      localStorage.setItem('isMuted', 'false')
    }
    setVolume(value)
  }

  useEffect(() => {
    localStorage.setItem('volume', String(volume))
  }, [volume])

  const toggleMute = () => {
    // @ts-ignore
    setIsMuted(prev => {
      if (prev && volume === 0) {
        setVolume(1)
      }
      localStorage.setItem('isMuted', String(!prev))
      return !prev
    })
  }

  const icon = useMemo(() => {
    switch (true) {
      case volume === 0 || isMuted:
        return <MuteIcon onClick={toggleMute} />
      case volume > 0 && volume <= 0.5:
        return <QuietIcon onClick={toggleMute} />
      case volume > 0.5:
      default:
        return <LoudIcon onClick={toggleMute} />
    }
  }, [volume, isMuted])

  useEffect(() => {
    const refreshStorage = () => {
      const volumeFromLocalStorage = localStorage.getItem('volume') || 1
      const isMutedFromLocal = localStorage.getItem('isMuted') || 'false'
      if (volumeFromLocalStorage !== String(volume)) {
        setVolume(Number(volumeFromLocalStorage))
      }
      setIsMuted(isMutedFromLocal === 'true')
    }
    window.addEventListener('storage', refreshStorage)
    return () => {
      window.removeEventListener('storage', refreshStorage)
    }
  }, [])

  return (
    <Wrapper>
      <span>{icon}</span>
      <Range
        volume={volume}
        type='range'
        min={0}
        max={1}
        value={isMuted ? 0 : volume}
        step={0.1}
        onChange={handleVolumeChange}
      />
    </Wrapper>
  )
}

const MuteIcon = styled(SpeakerMuteIcon)`
  color: ${({ theme }) => theme.palette.grey05};
  cursor: pointer;
  font-size: 24px;
`

const QuietIcon = styled(SpeakerQuietIcon)`
  color: ${({ theme }) => theme.palette.grey05};
  cursor: pointer;
  font-size: 24px;
`

const LoudIcon = styled(SpeakerLoudIcon)`
  color: ${({ theme }) => theme.palette.grey05};
  cursor: pointer;
  font-size: 24px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  max-width: 35px;
`

const Range = styled.input`
  width: 40px;
  height: 2px;
  position: relative;
  left: -10px;
  cursor: pointer;
  transform: rotate(270deg);
  -webkit-appearance: none;

  &::before {
    content: '';
    height: 2px;
    width: ${({ volume }) => volume * 100}%;
    position: absolute;
    z-index: 0;
    left: 0;
    background-color: ${({ theme }) => theme.palette.orange01};
  }

  &::-webkit-slider-runnable-track {
    height: 2px;
    width: 40px;
    background: ${({ theme }) => theme.palette.grey05};
    border-radius: 1px;
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background: ${({ theme }) => theme.palette.orange01};
    margin-top: -4px;
    border: 1px solid white;
    -webkit-appearance: none;
    z-index: 1;
    position: relative;
  }
`
