# Document Ready

A [Tiny](https://bundlephobia.com/result?p=@document/ready) function that tells you when the document is ready.

## Install

```
# yarn
yarn add @document/ready

# npm
npm install --save @document/ready
```

## Usage

```typescript
import ready from '@document/ready';

ready(() => {
  console.log('🎉 Whoop whoop. The document is ready');
});
```

## API

### `ready(cb)`

Create a dom ready listener.

#### `cb: () => void`

A callback function which will be called when the document is ready.

#### Returns

Returns a dispose function. If you call it, the listener will be revoked.

## License

MIT © [Tobias Herber](https://github.com/herber)

[![Made by Varld](https://potato.varld.co/oss/badge.svg)](https://varld.co)
