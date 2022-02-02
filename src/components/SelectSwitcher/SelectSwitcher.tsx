import React from 'react'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../../utils/ramda'

interface SelectSwitcherProps {
  value: string
  label?: string
  width?: string
  onChange: (v) => void
  id: string
  options: {
    label: string
    value: string
  }[]
}

export const SelectSwitcher = (props: SelectSwitcherProps): JSX.Element => {
  const {
    options,
    value: defaultValue,
    id,
    onChange = () => {},
    label,
    width
  } = props

  const [dimensionLeft, setDimensionLeft] = React.useState(0)
  const [containerWidth, setContainerWidth] = React.useState(0)
  const [value, setValue] = React.useState(defaultValue)

  const saveDimensions = () => {
    setDimensionLeft(0)
    const containerElement = document.getElementById(id)
    const activeElement = document.getElementById(`switcher-option-${value}`)
    if (activeElement && containerElement) {
      const activeElementDimensions = activeElement.getBoundingClientRect()
      const containerElementDimensions =
        containerElement.getBoundingClientRect()

      setContainerWidth(containerElementDimensions.width)

      const offset =
        activeElementDimensions.left - containerElementDimensions.left
      setDimensionLeft(offset)
    }
  }

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  React.useEffect(() => {
    saveDimensions()
    onChange(value)
  }, [value])

  const handleClick = value => () => setValue(value)

  const findOptionPosition = value => {
    const containerElement = document.getElementById(id)
    const optionElement = document.getElementById(`switcher-option-${value}`)

    if (optionElement && containerElement) {
      const containerElementDimensions =
        containerElement.getBoundingClientRect()
      const optionElementDimensions = optionElement.getBoundingClientRect()

      return optionElementDimensions.left - containerElementDimensions.left
    } else {
      return 0
    }
  }

  const RenderOptions = options.map(option => (
    <SwitcherOption
      key={`switcher-option-${option.value}`}
      id={`switcher-option-${option.value}`}
    />
  ))

  const RenderTriggers = options.map(option => (
    <SwitcherTrigger
      onClick={handleClick(option.value)}
      id={`switcher-trigger-${option.value}`}
      key={`switcher-trigger-${option.value}`}
      width={100 / options.length}
      left={findOptionPosition(option.value)}
    >
      <div className='switcher-option-label'>{option.label}</div>
    </SwitcherTrigger>
  ))

  return (
    <React.Fragment>
      <Container width={width}>
        {label && <SwitcherLabel width={containerWidth}>{label}</SwitcherLabel>}
        <SwitcherContainer id={id}>
          {RenderOptions}
          <ActiveOption
            isVisible={isNotNilOrEmpty(value)}
            dimensionLeft={dimensionLeft}
          />
          <SwitcherTriggers>{RenderTriggers}</SwitcherTriggers>
        </SwitcherContainer>
      </Container>
    </React.Fragment>
  )
}

export default SelectSwitcher

const Container = styled.div`
  display: inline-block;
  width: ${({ width }) => width || '100px'};
`

const SwitcherContainer = styled.div`
  position: relative;
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  background-color: ${({ theme }) => theme.palette.panelBackground};
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
`

const SwitcherOption = styled.div`
  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`

const ActiveOption = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'inline-block' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  position: absolute;
  left: ${({ dimensionLeft }) => dimensionLeft}px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.green01};
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
`

const SwitcherTriggers = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`

const SwitcherLabel = styled.div`
  display: block;
  text-align: center;
  width: ${({ width }) => width}px;
  font-size: 11px;
  line-height: 16px;
  color: ${props => props.theme.palette.textDark};
`

const SwitcherTrigger = styled.div`
  width: ${({ width }) => width}%;
  height: 100%;

  .switcher-option-label {
    position: absolute;
    text-align: center;
    top: calc(100%);
    left: ${({ left }) => left}px;
    color: ${props => props.theme.palette.textDark};
    font-size: 11px;
    line-height: 16px;
    color: ${props => props.theme.palette.textDark};
  }

  &:last-child {
    .switcher-option-label {
      left: auto;
      right: 0;
    }
  }
`
