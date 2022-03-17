import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { mergeDeepRight } from 'ramda'

import Fonts from './fonts'
import { useTheme } from './themeUtils'

interface ThemeProviderProps {
  theme?: any
  children: JSX.Element
}

const ThemeProvider = ({
  theme = {},
  children
}: ThemeProviderProps): JSX.Element => {
  const currentTheme = useTheme()

  return (
    <StyledThemeProvider theme={mergeDeepRight(currentTheme, theme)}>
      <DndProvider backend={HTML5Backend}>
        <Fonts />
        {children}
      </DndProvider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider
