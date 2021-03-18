import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './theme'
import { mergeDeepRight } from 'ramda'

interface ThemeProviderProps {
  theme?: any
  children: JSX.Element
}

const ThemeProvider = ({ theme = {}, children }: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={mergeDeepRight(defaultTheme, theme)}>
    {children}
  </StyledThemeProvider>
)

export default ThemeProvider
