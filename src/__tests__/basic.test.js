import lightTheme from '../theme/themeLight'
import darkTheme from '../theme/themeDark'

export const generateArrayOfAllAvailablePaths = (
  obj,
  acc = [],
  path = [],
  level = 0
) => {
  Object.keys(obj).forEach((key, i) => {
    if (level === 0) {
      path = []
    }

    if (path.length > level) {
      path.pop()
    }

    path.push(key)

    if (typeof obj[key] === 'string') {
      acc.push(path.join('.'))

      path.pop()

      if (i === Object.keys(obj).length - 1) {
        path.pop()
      }

      return acc
    } else {
      return generateArrayOfAllAvailablePaths(obj[key], acc, path, level + 1)
    }
  })

  return acc
}

test('Checks if darkTheme and lightTheme have the same paths', () => {
  const lightThemePaths = generateArrayOfAllAvailablePaths(lightTheme)
  const darkThemePaths = generateArrayOfAllAvailablePaths(darkTheme)

  expect(lightThemePaths).toEqual(darkThemePaths)
})
