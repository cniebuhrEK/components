# examkrackers-components

> atom components for examkrackers project

[![NPM](https://img.shields.io/npm/v/components.svg)](https://www.npmjs.com/package/components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## How to develop with local components library:

1. Clone the components git repository in the same catalog where you keep your **local project**
2. In components project install packages by running `yarn`
3. In components project run `yarn start` to build the library with tracking changes
4. Go to your **local project**, and edit your package.json dependencies:

```
    "examkrackers-components": "link:../components",
    "styled-components": "link:../components/node_modules/styled-components",
    "react": "link:../components/node_modules/react",
    "react-dom": "link:../components/node_modules/react-dom",
```

5. In your **local project** remove yarn.lock file and run yarn install (or run `yarn reset` if it is defined in package.json)
6. In your **local project** run `yarn start`

### Now every change in 'components' will be visible in your local project :)

> **⚠ WARNING:** Remember to remove the changes from package.json and reset yarn.lock of the **local project** when you are finished.

## Storybook Development

1. Clone the components git repository
2. Install packages by running `yarn`
3. Run `yarn storybook:start` to build the storybook

## Install in your project

1. To install in the project add:

```
{
    dependencies: {
        ...
        "examkrackers-components": "https://git.desmart.com/examkrackers/components.git"
    }
}
```

in your project dependencies and run `yarn` or remove yarn.lock and then run `yarn`

2. Import the ThemeProvider and wrap your application with it:

```
...
import { ThemeProvider } from 'examkrackers-components';
...

const Root = (props) => {
  return (
    <ThemeProvider>
      <App {...context} />
    </ThemeProvider>
  )
}

```

and you can use the components within the project, eg.

```
...
import { Button } from 'examkrackers-components';

const SubmitButton = (props) => {
  return (
    <Button>
      Submit
    </Button>
  )
}

```

## Adding assets

All assets are kept in the `src/assets` directory.

1. On admin/front directory under `yarn start` there is a script which makes a copy of the assets catalog from `/node_modules/examkrackers-components/build/assets` and paste it into local `/public/assets`
2. After assets are copied, you can use them within the project using relative paths, eg:
By adding a new asset `src/assets/images/example.png`, the source would be: `/assets/images/example.png`

![Assets](docs/assets_explanation.png)

## Deploy a new version

If you want to update the components directory remember about few things:

1. Update yarn.lock of each project that is using this directory
2. Bump package.json version of components directory and push a new tag with the new version
