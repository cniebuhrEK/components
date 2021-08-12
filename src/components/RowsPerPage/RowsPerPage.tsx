import React from 'react'
import styled from 'styled-components'

import { SingleSelect } from '../SingleSelect'
import { getOptionByValue } from '../../utils/form'

interface RowsPerPageProps {
  defaultValue: 10 | 50 | 100
  onChange: (rowsPerPage) => any
}

const ROWS_PER_PAGE_VALUES = [10, 50, 100]

const RowsPerPage = (props: RowsPerPageProps): JSX.Element => {
  const { onChange, defaultValue } = props

  const options = ROWS_PER_PAGE_VALUES.map(value => ({
    label: value.toString(),
    value
  }))

  const defaultOption = getOptionByValue(defaultValue)(options)
  const [selectedOption, setSelectedOption] = React.useState(defaultOption)

  const handleChange = (e: any) => {
    onChange(e.value)
    setSelectedOption(e)
  }

  return (
    <RowsPerPageContainer>
      <SingleSelect
        options={options}
        label=''
        size='small'
        id='rows-per-page-dropdown'
        isSearchable={false}
        value={selectedOption}
        onChange={handleChange}
      />
    </RowsPerPageContainer>
  )
}

RowsPerPage.defaultProps = {}

export default RowsPerPage

const RowsPerPageContainer = styled.div`
  display: inline-block;
  min-width: 5rem;
  margin-top: -15px;
`
