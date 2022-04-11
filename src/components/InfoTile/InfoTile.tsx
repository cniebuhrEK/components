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
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  min-height: 30px;
  max-height: 34px;
  gap: 10px;
  padding: 5px 8px;
  min-width: 80px;
  max-width: 160px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.palette.white};
`

const Icon = styled.div`
  height: 26px;
  svg {
    font-size: 26px;
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
