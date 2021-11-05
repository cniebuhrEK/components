import React from 'react'
import styled from 'styled-components'
import {
  ExamIconArrowLeft as ArrowLeft,
  ExamIconArrowRight as ArrowRight
} from '../../examIcons'

type CarouselProps = {
  children?: React.ReactNode | React.ReactNode[]
  controls?: React.ReactNode
  activeItem?: number
  showNumbers?: boolean
}

const Carousel = (props: CarouselProps): JSX.Element => {
  const items: React.ReactNode[] = React.Children.toArray(props.children)
  const [active, setActive] = React.useState<number>(props.activeItem || 0)

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

  React.useEffect(() => {
    if (props.activeItem && props.activeItem > 0) {
      setActive(props.activeItem)
    }
  }, [props.activeItem])

  return (
    <Container>
      <div className='container-inner'>
        <Index>{props.showNumbers ? `${active + 1}.` : ''}</Index>
        <Panel>{items.filter((_, i: number) => i === active)}</Panel>
      </div>
      <Controls>
        <Hoverable>
          {active <= 0 ? (
            <Empty />
          ) : (
            <ArrowLeft onClick={handlePreviousClick} />
          )}
        </Hoverable>
        <ControlsCenter>{props.controls}</ControlsCenter>
        <Hoverable>
          {active >= items.length - 1 ? (
            <Empty />
          ) : (
            <ArrowRight onClick={handleNextClick} />
          )}
        </Hoverable>
      </Controls>
    </Container>
  )
}

Carousel.defaultProps = {
  showNumbers: false,
  activeItem: 0
}

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  .container-inner {
    flex-grow: 1;
    width: 100%;
  }
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
  height: auto;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  color: ${({ theme }) => theme.palette.darkblue01};
  z-index: ${({ theme }) => theme.zIndex.drawer + 200};
`

const ControlsCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Hoverable = styled.div`
  font-size: 14px;

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
