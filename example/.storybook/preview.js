import { ThemeProvider, GlobalStyles, Container } from 'components';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

const withThemeProvider=(Story,context)=>{
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Container>
        <Story {...context} />
      </Container>
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
