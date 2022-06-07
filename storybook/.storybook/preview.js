import {
  ThemeProvider,
  GlobalStyles,
  ExamGlobalStyles,
  examTheme
} from 'examkrackers-components'

const withThemeProvider = (Story, context) => {
  const isExamLayout = /Exam/i.test(context.kind)

  return isExamLayout ? (
    <ThemeProvider theme={examTheme}>
      <ExamGlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  ) : (
    <ThemeProvider>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
