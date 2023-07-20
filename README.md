# windows-ca-certs

Wrapper library around
[`@vscode/windows-ca-certs`](https://github.com/microsoft/vscode-windows-ca-certs)
with prebuilt win32 included.

## Installation

```bash
npm install windows-ca-certs
```

## Usage

Use a dynamic import to load only if the platform is Windows (only a
win32 binary is included):

```js
const winCA = await import('windows-ca-certs');
const certs = winCA.all();
```

On non-Windows platforms `all` is a no-op that returns an empty array.
