import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

import { getOptionByValue } from '../../utils/form'
import { ArrowDownIcon } from '../../icons'

interface RowsPerPageProps {
  defaultValue: 10 | 50 | 100
  onChange: (rowsPerPage) => any
}

const ROWS_PER_PAGE_VALUES = [10, 50, 100]

const RowsPerPage = (props: RowsPerPageProps): JSX.Element => {
  const { onChange, defaultValue } = props
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

  const options = ROWS_PER_PAGE_VALUES.map(value => ({
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

  // @ts-ignore
  return (
    <RowsPerPageContainer>
      <div className='rows-per-page-label'>Show:</div>
      <SelectContainer ref={ref}>
        <DropdownTrigger onClick={handleToggle}>
          <div className='dropdown-label'>
            {R.propOr('', 'label', selectedOption)}
          </div>
          <div className='dropdown-icon'>
            <ArrowDownIcon />
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
  color: ${({ theme }) => theme.palette.textDark};
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
  background-color: ${({ theme }) => theme.palette.panelBackground};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Menu = styled.div`
  background-color ${({ theme }) => theme.palette.panelBackground};
  border-radius: ${({ theme }) => theme.shape.borderRadiusSmall};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  box-shadow: ${({ theme }) => theme.shadows.darkShadow} !important;
  max-height: ${({ open }) => (open ? '300px' : '0')};
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.menu};
  transition: opacity 700ms ${({ theme }) =>
    theme.transitions.easing.easeInOut};
  min-width: 55px;
  width: fit-content;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.palette.textDark}
    ${({ theme }) => theme.palette.scroller};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.textDark};
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.scroller};
  }
`

const ItemContainer = styled.div`
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 6px 16px;
  color: ${({ theme }) => theme.palette.textDark};
  line-height: 1.5;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.palette.disabledBackground};
  }
`
