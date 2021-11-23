import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import {
  ExamIconArrowLeft as ArrowLeft,
  ExamIconArrowRight as ArrowRight
} from '../../examIcons'
import usePrevious from '../../hooks/usePrevious'

type CarouselProps = {
  children?: React.ReactNode | React.ReactNode[]
  controls?: React.ReactNode
  onSlideChange?: () => void
  activeItem?: number
  showNumbers?: boolean
  disabled?: boolean
}

const Carousel = (props: CarouselProps): JSX.Element => {
  const items: React.ReactNode[] = React.Children.toArray(props.children)
  const [active, setActive] = React.useState<number>(props.activeItem || 0)
  const prevChildren = usePrevious(props.children)

  function handlePreviousClick(): void {
    if (active > 0 && !props.disabled) {
      setActive(active - 1)
      props.onSlideChange && props.onSlideChange()
    }
  }

  function handleNextClick(): void {
    if (active < items.length - 1 && !props.disabled) {
      setActive(active + 1)
      props.onSlideChange && props.onSlideChange()
    }
  }

  React.useEffect(() => {
    if (props.activeItem && props.activeItem > 0) {
      setActive(props.activeItem)
    }
  }, [props.activeItem])

  React.useEffect(() => {
    const prevLength = R.propOr(0, 'length', prevChildren)
    const currentLength = R.pathOr(0, ['children', 'length'], props)

    if (
      R.not(R.isNil(prevChildren)) &&
      R.not(R.equals(prevLength, currentLength))
    ) {
      setActive(currentLength - 1)
    }

    if (R.isNil(prevChildren)) {
      setActive(0)
    }
  }, [props.children])

  return (
    <Container>
      <div className='container-inner'>
        <Index>{props.showNumbers ? `${active + 1}.` : ''}</Index>
        <Panel>{items.filter((_, i: number) => i === active)}</Panel>
      </div>
      <Controls disabled={props.disabled}>
        <Hoverable disabled={props.disabled}>
          {active <= 0 ? (
            <Empty />
          ) : (
            <ArrowLeft onClick={handlePreviousClick} />
          )}
        </Hoverable>
        <ControlsCenter>{props.controls}</ControlsCenter>
        <Hoverable disabled={props.disabled}>
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
  z-index: ${({ theme }) => theme.zIndex.drawer + 80};
  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
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
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`

// The height and width here should be the same as the icons.
const Empty = styled.div`
  height: 19px;
  width: 16px;
`

export default Carousel
