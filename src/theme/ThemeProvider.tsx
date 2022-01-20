import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './theme'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { mergeDeepRight } from 'ramda'

import Fonts from './fonts'

interface ThemeProviderProps {
  theme?: any
  children: JSX.Element
}

const ThemeProvider = ({
  theme = {},
  children
}: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={mergeDeepRight(defaultTheme, theme)}>
    <DndProvider backend={HTML5Backend}>
      <Fonts />
      {children}
    </DndProvider>
  </StyledThemeProvider>
)

export default ThemeProvider
