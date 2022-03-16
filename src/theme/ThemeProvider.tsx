import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './theme'
import themeDark from './themeDark'
import themeLight from './themeLight'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { mergeDeepRight } from 'ramda'

import Fonts from './fonts'

interface ThemeProviderProps {
  theme?: any
  withNotification?: boolean
  darkMode?: boolean
  children: JSX.Element
}

const notificationTheme = {
  ...defaultTheme,
  withNotification: true,
  dimensions: {
    ...defaultTheme.dimensions,
    studentTopNavHeight: '112px'
  }
}

const ThemeProvider = ({
  theme = {},
  children,
  withNotification,
  darkMode
}: ThemeProviderProps): JSX.Element => {
  const currentTheme = withNotification ? notificationTheme : defaultTheme
  const themeMode = darkMode
    ? {
        ...currentTheme,
        ...themeDark
      }
    : {
        ...currentTheme,
        ...themeLight
      }

  console.log(mergeDeepRight(themeMode, theme))

  return (
    <StyledThemeProvider theme={mergeDeepRight(themeMode, theme)}>
      <DndProvider backend={HTML5Backend}>
        <Fonts />
        {children}
      </DndProvider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider
