import React from 'react'
import styled from 'styled-components'

import {
  MVP3BrainBigIcon,
  MVP3BrainSmallIcon,
  MVP3ThinkBigIcon,
  MVP3ThinkSmallIcon,
  MVP3StethoscopeBigIcon,
  MVP3StethoscopeSmallIcon,
  MVP3VideoBigIcon,
  MVP3VideoSmallIcon,
  MVP3EyeIcon,
  MVP3ReloadIcon,
  MVP3PlayIcon,
  MVP3PauseIcon,
  MVP3StopIcon
} from './'

const IconContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;

  p {
    margin-top: 8px;
  }
`

export const AllIcons = () => {
  const icons = [
    {
      component: MVP3BrainBigIcon,
      title: 'Brain Big'
    },
    { component: MVP3BrainSmallIcon, title: 'Brain Small' },
    { component: MVP3EyeIcon, title: 'Eye' },
    { component: MVP3ReloadIcon, title: 'Reload' },
    { component: MVP3ThinkBigIcon, title: 'Think Big' },
    { component: MVP3ThinkSmallIcon, title: 'Think Small' },
    { component: MVP3StethoscopeBigIcon, title: 'Stethoscope Big' },
    { component: MVP3StethoscopeSmallIcon, title: 'Stethoscope Small' },
    { component: MVP3VideoBigIcon, title: 'Video Big' },
    { component: MVP3VideoSmallIcon, title: 'Video Small' },
    { component: MVP3PlayIcon, title: 'Play' },
    { component: MVP3PauseIcon, title: 'Pause' },
    { component: MVP3StopIcon, title: 'Stop' }
  ]

  return (
    <React.Fragment>
      {icons.map(
        ({ component: I, title }, i: number): JSX.Element => (
          <IconContainer key={i}>
            <I />
            <p>{title}</p>
          </IconContainer>
        )
      )}
    </React.Fragment>
  )
}

AllIcons.propTypes = {}
AllIcons.defaultProps = {}

export default AllIcons
