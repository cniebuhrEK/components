import * as React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'

const BasicTimePicker = () => {
  const theme = createTheme({
    palette: {
      primary: { main: '#F8961A' }
    }
  })
  const [value, setValue] = React.useState<Date | null>(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CustomTimePicker
          value={value}
          onChange={newValue => {
            // @ts-ignore
            setValue(newValue)
          }}
        />
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default BasicTimePicker

const CustomTimePicker = styled(TimePicker)`
  .MuiInputBase-root {
    border-radius: 6px;
    border: 1px solid #dddee0;
    height: 48px;
    width: 128px;
    color: #444;
    &:hover {
      cursor: pointer;
    }
  }
  .MuiSvgIcon-root {
    color: #f8961a;
  }
`
