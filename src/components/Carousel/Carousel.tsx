import React from 'react'
import styled from 'styled-components'
import {
  ExamIconArrowLeft as ArrowLeft,
  ExamIconArrowRight as ArrowRight
} from '../../examIcons'

type CarouselProps = {
  children?: JSX.Element[] | JSX.Element | string
  controls?: JSX.Element[] | JSX.Element | string
  showNumbers?: boolean
}

const Carousel = (props: CarouselProps): JSX.Element => {
  const { children, controls, showNumbers } = props
  const items: any[] = React.Children.toArray(children)
  const [active, setActive] = React.useState(0)

  function handlePreviousClick(): void {
    if (active > 0) {
      setActive(active - 1)
    }
  }

  function handleNextClick(): void {
    if (active < items.length - 1) {
      setActive(active + 1)
    }
  }

  return (
    <Container>
      {showNumbers ? <Index>{`${active + 1}.`}</Index> : <></>}
      <Panel>{items.filter((_, i: number) => i === active)}</Panel>
      <Controls>
        <Hoverable>
          {active <= 0 ? (
            <Empty />
          ) : (
            <ArrowLeft
              width='1.6em'
              height='1.6em'
              onClick={handlePreviousClick}
            />
          )}
        </Hoverable>
        <ControlsCenter>{controls}</ControlsCenter>
        <Hoverable>
          {active >= items.length - 1 ? (
            <Empty />
          ) : (
            <ArrowRight
              width='1.6em'
              height='1.6em'
              onClick={handleNextClick}
            />
          )}
        </Hoverable>
      </Controls>
    </Container>
  )
}

Carousel.defaultProps = {
  showNumbers: false
}

const Container = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  padding: 1em;
`

const Index = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
`

const Panel = styled.div`
  height: 80%;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  color: ${({ theme }) => theme.palette.darkblue01};
`

const ControlsCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Hoverable = styled.div`
  &:hover {
    cursor: pointer;
  }
`

// The height and width here should be the same as the icons.
const Empty = styled.div`
  height: 1.6em;
  width: 1.6em;
`

export default Carousel
