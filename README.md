# examkrackers-components

> atom components for examkrackers project

[![NPM](https://img.shields.io/npm/v/components.svg)](https://www.npmjs.com/package/components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

To install in the project add:

```
{
    dependencies: {
        ...
        "examkrackers-components": "https://git.desmart.com/examkrackers/components.git"
    }
}
```
in your project dependencies and run
```
    yarn
```

Then import the ThemeProvider and wrap your application with it:

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

## Development

install the dependencies by running:
```
yarn
cd examples
yarn
```

then in first terminal tab inside the root run:

```
yarn start
```

in second terminal tab open the examples catalog and run
```
yarn start
```

after that in the root repo you will start a build watcher for the new changes inside `/src` catalog
and in `/examples` catalog you will run the storybook project so you can preview the components from the root

## Adding assets

All assets are kept in the `src/assets` directory. To add a new asset you need to remember about few things:
1. After adding a new asset on development mode, you need to re-run the `yarn start` command, so the script can copy-paste the latest version of the directory
2. While using assets use relative paths as you are in the build directory, eg:
  By adding a new asset `src/assets/images/example.png`, the source would be: `/assets/images/example.png`

## Deploy a new version

If you want to update the components directory remember about few things:
1. Update yarn.lock of each project that is using this directory
2. Bump package.json version of components directory and push a new tag with the new version

