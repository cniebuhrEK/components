import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './theme'
import { mergeDeepRight } from 'ramda'

import Fonts from './fonts'

interface ThemeProviderProps {
  theme?: any
  children: JSX.Element
}

const ThemeProvider = ({
  theme = {},
  children
}: ThemeProviderProps): JSX.Element => {
  console.log({ theme, defaultTheme })

  return (
    <StyledThemeProvider theme={mergeDeepRight(defaultTheme, theme)}>
      <Fonts />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
