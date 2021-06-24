import { ThemeProvider, GlobalStyles, ExamGlobalStyles, Container, examTheme } from 'components';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

const withThemeProvider=(Story,context)=>{
  console.log({ Story, context });

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
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
