import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './theme'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { mergeDeepRight } from 'ramda'

import Fonts from './fonts'

interface ThemeProviderProps {
  theme?: any
  withNotification?: boolean
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
  withNotification
}: ThemeProviderProps): JSX.Element => {
  const currentTheme = withNotification ? notificationTheme : defaultTheme

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
