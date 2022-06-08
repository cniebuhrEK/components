import React from 'react'
import VideoPlayer from './VideoPlayer'
import styled from 'styled-components'

const Container = styled.div`
  width: 1280px;
  height: 720px;
`

const Template = args => (
  <Container>
    <VideoPlayer {...args} />
  </Container>
)

export const Player = Template.bind({})

Player.args = {
  url: 'https://vimeo.com/90509568',
  muted: true,
  controls: true
}

export default {
  title: 'Atoms/Video Player',
  component: VideoPlayer
}
