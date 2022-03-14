import React from 'react'
import styled from 'styled-components'
import NavArrowLeftIcon from '../../icons/NavArrowLeft'
import NavArrowRightIcon from '../../icons/NavArrowRight'

interface ArrowNavProps {
  direction?: 'left' | 'right'
  text?: string
  onClick?: (e: any) => void
}

const directions = {
  left: 'left',
  right: 'right'
}

const ArrowNav = (props: ArrowNavProps): JSX.Element => {
  const { direction, text, onClick } = props

  if (direction === directions.left) {
    return (
      <Container onClick={onClick}>
        <LeftIcon>
          <NavArrowLeftIcon />
        </LeftIcon>
        <TextContainer direction={directions.left}>{text}</TextContainer>
      </Container>
    )
  }

  return (
    <Container onClick={onClick}>
      <TextContainer direction={directions.right}>{text}</TextContainer>
      <RightIcon>
        <NavArrowRightIcon />
      </RightIcon>
    </Container>
  )
}

const LeftIcon = styled.div`
  margin-right: 8px;
  cursor: pointer;
`

const RightIcon = styled.div`
  margin-left: 8px;
  cursor: pointer;
`

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 32px;
  color: ${({ theme }) => theme.colors.main.tertinary600};
  font-weight: 700;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`

const TextContainer = styled.span`
  text-align: ${({ direction }) => direction};
`

ArrowNav.defaultProps = {
  direction: 'left',
  text: '',
  onClick: () => {}
}

export default ArrowNav
