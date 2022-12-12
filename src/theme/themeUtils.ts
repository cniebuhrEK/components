import { useEffect, useState } from 'react'
import defaultTheme from './theme'
import themeDark from './themeDark'
import themeLight from './themeLight'
import mitt from 'mitt'

export const themeEvents = mitt()

export const eventsNames = {
  themeUpdated: 'ek-theme-updated'
}

export const themeKey = 'ek-theme'
export const themeWithNotificationKey = 'ek-theme-notification'
export const themeLightVariant = 'light'
export const themeDarkVariant = 'dark'

export const setLightTheme = () => {
  localStorage.setItem(themeKey, themeLightVariant)
  themeEvents.emit(eventsNames.themeUpdated)
}

export const setDarkTheme = () => {
  localStorage.setItem(themeKey, themeDarkVariant)
  themeEvents.emit(eventsNames.themeUpdated)
}

export const setThemeNotificationVisibility = isVisible => {
  localStorage.setItem(themeWithNotificationKey, isVisible)
  themeEvents.emit(eventsNames.themeUpdated)
}

export const getTheme = () => {
  const notificationTheme = {
    ...defaultTheme,
    withNotification: true,
    dimensions: {
      ...defaultTheme.dimensions
      // commented because of issue on safari
      // studentTopNavHeight: '112px'
    }
  }
  const notification = localStorage.getItem(themeWithNotificationKey) || 'false'
  const mode = localStorage.getItem(themeKey) || themeLightVariant

  const currentTheme =
    notification === 'true' ? notificationTheme : defaultTheme

  return mode === themeDarkVariant
    ? {
        ...currentTheme,
        ...themeDark
      }
    : {
        ...currentTheme,
        ...themeLight
      }
}

export const useTheme = () => {
  const [theme, setTheme] = useState(getTheme())
  const updateCurrentTheme = () => setTheme(getTheme())

  useEffect(() => {
    themeEvents.on(eventsNames.themeUpdated, updateCurrentTheme)
    return () => {
      themeEvents.off(eventsNames.themeUpdated, updateCurrentTheme)
    }
  }, [])

  return theme
}
