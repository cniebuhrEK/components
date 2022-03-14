import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

const InputGroup = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

const Container = styled.label`
  position: relative;
  font-size: 10px;
  width: 30px;
  height: 16px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.toggle.font};
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.toggle.background};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 16px;
  border: 1px solid transparent;

  &::before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 3px;
    bottom: 1px;
    background-color: ${({ theme }) => theme.colors.toggle.mark};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${Input}:checked + & {
    background-color: ${({ theme }) => theme.colors.toggle.mark};
    border-color: ${({ theme }) => theme.colors.toggle.markActive};
  }

  ${Input}:checked + &::before {
    background-color: ${({ theme }) => theme.colors.toggle.markActive};
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }

  ${Input}:disabled + & {
    pointer-events: none;
    background: #e6e6e6;
  }
`

interface ToggleSwitchProps {
  value?: boolean
  checked?: boolean
  id?: string
  name: string
  label?: string
  onChange: (e: any) => void
  disabled?: boolean
}

function ToggleSwitch(props: ToggleSwitchProps) {
  const { checked, onChange, name, id, disabled, label } = props
  const [active, setActive] = React.useState(checked)

  // set initial value if it comes as a promise
  React.useEffect(() => {
    setActive(checked)
  }, [checked])

  function handleOnChange(e: any): void {
    setActive(!active)
    onChange(e)
  }

  return (
    <InputGroup>
      <Container htmlFor={name} disabled={disabled}>
        <Input
          id={id}
          type='checkbox'
          name={name}
          value={active}
          disabled={disabled}
          checked={active}
          onChange={handleOnChange}
        />
        <Slider />
      </Container>
      <Label>{label}</Label>
    </InputGroup>
  )
}

ToggleSwitch.defaultProps = {
  value: false,
  checked: false,
  id: '',
  name: '',
  label: '',
  onChange: () => {},
  disabled: false
}

export default ToggleSwitch
