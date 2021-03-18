# umi-plugin-inject-assets

[![NPM version](https://img.shields.io/npm/v/umi-plugin-inject-assets.svg?style=flat)](https://npmjs.org/package/umi-plugin-inject-assets) [![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-inject-assets.svg?style=flat)](https://npmjs.org/package/umi-plugin-inject-assets)

assets

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [['umi-plugin-inject-assets']],
  cssReplacer: {
    filename: '', // file to generate alone and inject to html
  },
};
```

## LICENSE

MIT
