import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

import { getOptionByValue } from '../../utils/form'
import { ArrowDownIcon } from '../../icons'

interface RowsPerPageProps {
  defaultValue: 5 | 10 | 50 | 100 | 12 | 52
  onChange: (rowsPerPage) => any
  customOptions?: any[]
}

const ROWS_PER_PAGE_VALUES = [5, 10, 50, 100]

const RowsPerPage = (props: RowsPerPageProps): JSX.Element => {
  const { onChange, defaultValue, customOptions } = props
  const [open, setOpen] = React.useState<boolean>(false)
  const ref = React.useRef<HTMLDivElement>()

  const handleToggle = () => setOpen(prevState => !prevState)
  const handleClose = () => setOpen(false)

  React.useEffect(() => {
    function handleClickOutside(e: any): void {
      if (open && ref.current && !ref.current.contains(e.target)) {
        handleClose()
      }
    }

    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const options = (customOptions || ROWS_PER_PAGE_VALUES).map(value => ({
    label: value.toString(),
    value
  }))

  const defaultOption = getOptionByValue(defaultValue)(options)
  const [selectedOption, setSelectedOption] = React.useState(defaultOption)

  const handleChange = (e: any) => () => {
    onChange(e.value)
    setOpen(false)
    setSelectedOption(e)
  }

  const renderOptions = options.map(option => (
    <ItemContainer
      key={`rows-per-page-${option.value}`}
      onClick={handleChange(option)}
    >
      {option.label}
    </ItemContainer>
  ))

  return (
    <RowsPerPageContainer className='rows-per-page'>
      <div className='rows-per-page-label'>Show:</div>
      <SelectContainer ref={ref}>
        <DropdownTrigger open={open} onClick={handleToggle}>
          <div className='dropdown-label'>
            {R.propOr('', 'label', selectedOption)}
          </div>
          <div className='dropdown-icon'>
            <ArrowDownIcon open={open} />
          </div>
        </DropdownTrigger>
        <Menu open={open}>{renderOptions}</Menu>
      </SelectContainer>
    </RowsPerPageContainer>
  )
}

RowsPerPage.defaultProps = {}

export default RowsPerPage

const RowsPerPageContainer = styled.div`
  color: ${({ theme }) => theme.colors.selects.input.font};
  display: inline-flex;
  align-items: center;
  margin-top: 5px;

  .rows-per-page-label {
    font-size: 12px;
    line-height: 15px;
    margin-right: 9px;
  }
`

const SelectContainer = styled.div`
  min-width: 55px;
  position: relative;
`

const DropdownTrigger = styled.div`
  padding: 8px 12px;
  color: ${({ theme, open }) =>
    theme.colors.selects.input[open ? 'fontActive' : 'font']};
  background-color: ${({ theme, open }) =>
    theme.colors.selects.input[open ? 'backgroundActive' : 'background']};
  border: 1px solid
    ${({ theme, open }) =>
      theme.colors.selects.input[open ? 'borderActive' : 'border']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.selects.input.borderActive};
  }

  .dropdown-icon {
    transform: ${({ open }) => (!open ? 'initial' : 'rotate(180deg)')};
    transition: transform 300ms
      ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
  }
`

const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.selects.option.background};
  border-radius: ${({ theme }) => theme.shape.borderRadiusSmall};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  box-shadow: ${({ theme }) => theme.shadows.darkShadow} !important;
  max-height: ${({ open }) => (open ? '300px' : '0')};
  position: absolute;
  bottom: calc(100% + 5px);
  left: 0;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.menu};
  transition: opacity 700ms ${({ theme }) => theme.transitions.easing.easeInOut};
  min-width: 55px;
  width: fit-content;
  overflow-y: auto;
`

const ItemContainer = styled.div`
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 6px 16px;
  color: ${({ theme }) => theme.colors.selects.option.font};
  background-color: ${({ theme }) => theme.colors.selects.option.background};
  line-height: 1.5;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.selects.option.fontActive};
    background-color: ${({ theme }) =>
      theme.colors.selects.option.backgroundActive};
  }
`
