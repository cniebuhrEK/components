import React from 'react'
import styled from 'styled-components'
import { ArrowDownIcon } from '../../icons'

type MenuOption = {
  label: string
  onClick?: () => void
}

type DropdownButtonProps = {
  label: string
  isOpen: boolean
  isDisabled: boolean
  onClick: () => void
  onBlur: () => void
}

type DropdownProps = {
  label?: string
  options: MenuOption[]
  disabled?: boolean
}

const DropdownButton = (props: DropdownButtonProps): JSX.Element => {
  const { label, isOpen, isDisabled, onClick, onBlur } = props

  return (
    <DropdownButtonContainer
      disabled={isDisabled}
      onBlur={onBlur}
      onClick={onClick}
    >
      {label}
      <IconContainer isOpen={isOpen}>
        <ArrowDownIcon />
      </IconContainer>
    </DropdownButtonContainer>
  )
}

DropdownButton.defaultProps = {
  label: '',
  isOpen: false,
  isDisabled: false,
  onClick: () => {}
}

const Dropdown = (props: DropdownProps): JSX.Element => {
  const { label, options, disabled } = props
  const [open, setOpen] = React.useState<boolean>(false)

  function handleToggle(): void {
    setOpen(!open)
  }

  function handleClose(): void {
    setOpen(false)
  }

  return (
    <Container>
      <DropdownButton
        label={label}
        isOpen={open}
        isDisabled={disabled}
        onClick={handleToggle}
        onBlur={handleClose}
      />
      <Menu open={open}>
        {options.map((l: MenuOption, i: number) => (
          <MenuItem key={`dropdown-menu-item-${i}`} onClick={l.onClick}>
            {l.label}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  )
}

Dropdown.defaultProps = {
  label: '',
  options: [],
  disabled: false
}

const Container = styled.div`
  position: relative;
  display: initial;
  z-index: ${({ theme }) => theme.zIndex.menu};
`

const Menu = styled.div`
  background-color ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.shape.borderRadiusBig};
  box-shadow: 0px 10px 20px #CDC5BB;
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.menu};
  transition: opacity 700ms ${({ theme }) =>
    theme.transitions.easing.easeInOut};
  width: 100%;
`

const MenuItem = styled.div`
  display: block;
  line-height: normal;
  width: 100%;
  padding: 12px 16px;
  color: ${({ theme }) => theme.palette.darkblue01};
  border-left: 3px solid transparent;

  &:hover {
    border-left: 3px solid ${({ theme }) => theme.palette.orange02};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`

export const DropdownButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  padding: 0 12px;
  letter-spacing: -0.1px;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
  height: ${({ theme }) => theme.dimensions.buttonSmallHeight};
  justify-content: center;
  min-width: auto;
  color: ${({ theme }) => theme.palette.darkblue01};
  background-color: ${({ theme }) => theme.palette.orange02};
  background-position: center;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadiusSmall};
  border-style: none;
  border-width: 0px;
  box-shadow: none;
  transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.palette.background};
    background-color: ${({ theme }) => theme.palette.inactive};
    border-color: transparent;
  }
`

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 16px;
  margin-left: 4px;
  width: 16px;
  transform: ${({ isOpen }) => (!isOpen ? 'initial' : 'rotate(180deg)')};
`

export default Dropdown
