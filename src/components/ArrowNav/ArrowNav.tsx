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
        <span>{text}</span>
      </Container>
    )
  }

  return (
    <Container onClick={onClick}>
      <span>{text}</span>
      <RightIcon>
        <NavArrowRightIcon />
      </RightIcon>
    </Container>
  )
}

const LeftIcon = styled.div`
  position: absolute;
  left: 0;
  cursor: pointer;
`

const RightIcon = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 132px;
  color: ${({ theme }) => theme.palette.darkblue01};
  font-weight: 700;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`

ArrowNav.defaultProps = {
  direction: 'left',
  text: '',
  onClick: () => {}
}

export default ArrowNav
