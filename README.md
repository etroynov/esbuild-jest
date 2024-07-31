## What is the esbuild-jest2?

This is a fork of [esbuild-jest](https://github.com/aelbore/esbuild-jest), created because the original project was abandoned. It also includes changes from other similar projects, such as:
- [esjest-transform](https://github.com/threepointone/esjest-transform);
- [jest-esbuild](https://www.npmjs.com/package/jest-esbuild);
- [esbuild-runner](https://www.npmjs.com/package/esbuild-runner);
- [esbuild-jest-transform](https://www.npmjs.com/package/esbuild-jest-transform);

Also:
- support jest v29+;

## A Jest transformer using esbuild
With this transformer you can use and transform (ts, js, tsx and jsx) files

## Install

```bash
npm install --save-dev esbuild-jest2 esbuild
```

### Setting up Jest config file

esbuild-jest transformer should be used in your Jest config file like this:

```js
{
  "transform": {
    "^.+\\.tsx?$": "esbuild-jest2"
  }
}
```

#### Setting up Jest config file with transformOptions
```typescript
export interface Options {
  jsxFactory?: string
  jsxFragment?: string
  sourcemap?: boolean | 'inline' | 'external'
  loaders?: {
    [ext: string]: Loader
  },
  target?: string
  format?: string
}
```

```js
{
  "transform": {
    "^.+\\.tsx?$": [ 
      "esbuild-jest2", 
      { 
        sourcemap: true,
        loaders: {
          '.spec.ts': 'tsx'
        }
      } 
    ]
  }
}
```

> Note: if you are using tsconfig.json and jsconfig.json with "paths", Please look `alias-hq` and there documentation https://github.com/davestewart/alias-hq/blob/master/docs/integrations.md


# Authors

<table>
  <tbody>
    <tr>
      <td align="center">
        <img
          src="https://avatars.githubusercontent.com/u/18069807?v=4"
          width="150"
        />
        <br>
        <a href="https://github.com/aelbore">Jay Aelbore</a>
        <div>(Author)</div>
      </td>
      <td align="center">
        <img
          src="https://avatars.githubusercontent.com/u/4591518?v=4"
          width="150"
        />
        <br>
        <a href="https://github.com/etroynov">Evgenii Troinov</a>
        <div>(maintainer)</div>
      </td>
    </tr>
  </tbody>
</table>
