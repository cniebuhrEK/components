// InfoTile.tsx - InfoTile component

import React from 'react'
import styled from 'styled-components'
import McatForChartIcon from '../../icons/McatForChart'
import EditIcon from '../../icons/Edit'

interface InfoTileProps {
  icon: any
  content: {
    title: string
    score?: number
    button?: JSX.Element[] | JSX.Element | null
  }
}

const InfoTile = (props: InfoTileProps): JSX.Element => {
  const { icon, content } = props
  const { score, title, button } = content
  const maxLength = score ? 7 : 10

  return (
    <Container>
      {icon}
      <Content>
        <Title score={score}>
          {title.length > maxLength
            ? title.substring(0, maxLength) + '...'
            : title}{' '}
        </Title>
        {score ? <Score>{score}</Score> : null}
        {button}
      </Content>
    </Container>
  )
}

InfoTile.defaultProps = {
  icon: <McatForChartIcon />,
  content: {
    title: 'Title',
    score: 0,
    icon: <EditIcon />
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 32px;
  gap: 12px;
  padding: 2px 10px;
  min-width: 80px;
  max-width: 160px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.palette.white};

  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.palette.orange01};
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 7px;
  color: ${({ theme }) => theme.palette.black};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 16px;

  svg {
    color: ${({ theme }) => theme.palette.black};
    font-size: 14px;
    cursor: pointer;
  }
`

const Title = styled.div`
  font-weight: ${({ score }) => (score ? '400' : '700')};
`
const Score = styled.div`
  font-weight: 700;
`

export default InfoTile
