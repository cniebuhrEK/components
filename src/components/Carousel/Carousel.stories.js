import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import { Button } from '../Button'

const Container = styled.div`
  height: 400px;
  width: 640px;

  p {
    text-align: center;
    margin-bottom: 16px;
  }
`

const Image = styled.img`
  display: block;
  height: 240px;
  width: 100%;
  margin-bottom: 16px;
`

const Salty = ({ src, alt, text }) => {
  return (
    <div>
      <Image src={src} alt={alt} />
      <p>{text}</p>
    </div>
  )
}

const Template = args => (
  <Container>
    <Carousel {...args}>
      <Salty
        src='assets/illustrations/SaltyBigBrain.svg'
        alt='salty-big-brain'
        text='Slide #1'
      />
      <Salty
        src='assets/illustrations/SaltyFacePalm.svg'
        alt='salty-face-palm'
        text='Slide #2'
      />
      <Salty
        src='assets/illustrations/SaltyTime.svg'
        alt='salty-time'
        text='Slide #3'
      />
    </Carousel>
  </Container>
)

export const Default = Template.bind({})

Default.args = {
  controls: [
    <Button key='1' color='blue'>
      One
    </Button>,
    <Button key='2' color='blue'>
      Two
    </Button>
  ]
}

export default {
  title: 'Atoms/Carousel',
  component: Carousel
}
