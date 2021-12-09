import React from 'react'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../../utils/ramda'

interface SelectSwitcherProps {
  value: string
  label?: string
  onChange: (v) => void
  id: string
  options: {
    label: string
    value: string
  }[]
}

export const SelectSwitcher = (props: SelectSwitcherProps): JSX.Element => {
  const { options, value: defaultValue, id, onChange = () => {}, label } = props

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
    >
      <SwitcherOptionLabel>{option.label}</SwitcherOptionLabel>
    </SwitcherTrigger>
  ))

  return (
    <React.Fragment>
      {label && <SwitcherLabel width={containerWidth}>{label}</SwitcherLabel>}
      <SwitcherContainer id={id}>
        {RenderOptions}
        <ActiveOption
          isVisible={isNotNilOrEmpty(value)}
          dimensionLeft={dimensionLeft}
        />
        <SwitcherTriggers>{RenderTriggers}</SwitcherTriggers>
      </SwitcherContainer>
    </React.Fragment>
  )
}

export default SelectSwitcher

const SwitcherContainer = styled.div`
  position: relative;
  display: inline-flex;
  padding: 2px 8px;
  gap: 22px;
  box-shadow: ${({ theme }) => theme.shadows.darkShadow};
  border-radius: 16px;
  cursor: pointer;
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

const SwitcherTrigger = styled.div`
  position: relative;
  width: ${({ width }) => width}%;
  height: 100%;
`

const SwitcherLabel = styled.div`
  display: block;
  text-align: center;
  width: ${({ width }) => width}px;
  margin-bottom: 6px;
  letter-spacing: -0.1px;
  color: ${props => props.theme.palette.brown01};
`

const SwitcherOptionLabel = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  top: calc(100% + 5px);
  left: 0;
  color: ${props => props.theme.palette.brown01};
  font-size: 12px;
  text-align: center;
  letter-spacing: -0.1px;
  max-width: 30px;
  word-break: break-all;
`
