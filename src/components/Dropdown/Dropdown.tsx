import React from 'react'
import styled from 'styled-components'
import { ArrowDownIcon } from '../../icons'

type MenuOption = {
  id: string
  label: string
  onClick?: () => void
}

type DropdownButtonProps = {
  label: string
  isOpen: boolean
  isDisabled: boolean
  onClick: () => void
}

type DropdownProps = {
  label?: string
  options: MenuOption[]
  activeId: string
  disabled?: boolean
}

const DropdownButton = (props: DropdownButtonProps): JSX.Element => {
  const { label, isOpen, isDisabled, onClick } = props

  return (
    <DropdownButtonContainer disabled={isDisabled} onClick={onClick}>
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
  const { label, options, disabled, activeId } = props
  const [open, setOpen] = React.useState<boolean>(false)
  const ref = React.useRef<HTMLDivElement>()

  function handleToggle(): void {
    setOpen(!open)
  }

  function handleClose(): void {
    setOpen(false)
  }

  React.useEffect(() => {
    function handleClickOutside(e: any): void {
      if (open && ref.current && !ref.current.contains(e.target)) {
        handleClose()
      }
    }

    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleOnClick = (handler?: VoidFunction) => (): void => {
    if (handler) {
      handler()
    }

    setOpen(false)
  }

  return (
    <Container ref={ref}>
      <DropdownButton
        label={label}
        isOpen={open}
        isDisabled={disabled}
        onClick={handleToggle}
      />
      <Menu open={open}>
        {options.map((l: MenuOption, i: number) => (
          <ItemContainer
            key={`dropdown-menu-item-${i}`}
            isBold={l.id === activeId}
            onClick={handleOnClick(l.onClick)}
          >
            {l.label}
          </ItemContainer>
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
  display: block;
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
  min-width: 128px;
  width: fit-content;
  max-height: 172px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.palette.brown01}
    ${({ theme }) => theme.palette.brown09};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.brown01};
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.brown09};
  }
`

const ItemContainer = styled.div`
  display: block;
  line-height: normal;
  width: 100%;
  padding: 12px 16px;
  color: ${({ theme }) => theme.palette.darkblue01};
  border-left: 3px solid transparent;
  white-space: nowrap;
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};

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
