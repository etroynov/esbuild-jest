# esbuild-jest

### A Jest transformer using esbuild
With this transformer you can use and transform (ts, js, tsx and jsx) files

[![npm](https://img.shields.io/npm/v/esbuild-jest.svg)](https://www.npmjs.com/package/esbuild-jest)
![build status](https://github.com/etroynov/esbuild-jest/actions/workflows/ci.yml/badge.svg)

## Install

```bash
npm install --save-dev esbuild-jest2 esbuild
```

#### Setting up Jest config file

esbuild-jest transformer should be used in your Jest config file like this:

```js
{
  "transform": {
    "^.+\\.tsx?$": "esbuild-jest"
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
      "esbuild-jest", 
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
