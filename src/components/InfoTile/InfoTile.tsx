// InfoTile.tsx - InfoTile component

import React from 'react'
import styled from 'styled-components'

interface InfoTileProps {
  icon: any
  content: JSX.Element[] | JSX.Element | null
}

const InfoTile = (props: InfoTileProps): JSX.Element => {
  const { icon, content } = props

  return (
    <Container>
      <Icon>{icon}</Icon>
      <Content className='infoTileContent'>{content}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-grow: 1
  flex-wrap: nowrap;
  align-items: center;
  height: 30px;
  line-height: 30px;
  min-height: 30px;
  max-height: 34px;
  gap: 16px;
  padding: 4px 8px;
  min-width: 80px;
  max-width: 160px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  background-color: ${({ theme }) => theme.palette.white};
`

const Icon = styled.div`
  height: 22px;
  flex: none;
  svg {
    font-size: 22px;
    color: ${({ theme }) => theme.palette.orange01};
  }
`

const Content = styled.div`
  width: 80%;
  white-space: nowrap;
  * {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default InfoTile
