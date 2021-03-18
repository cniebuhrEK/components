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

## Deploy a new version 

tbc
