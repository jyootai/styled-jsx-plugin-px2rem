# styled-jsx-plugin-px2rem

Plugin for px to rem support to styled-jsx

## Usage

Install the package first.

```bash
npm install --save-dev styled-jsx-plugin-px2rem
```


Next, add `styled-jsx-plugin-px2rem` to the `styled-jsx`'s `plugins` in your babel configuration:

```json
{
  "plugins": [
    [
      "styled-jsx/babel",
      { "plugins": [["styled-jsx-plugin-px2rem", {"remUnit": 75}]]}
    ]
  ]
}
```

#### Notes

`styled-jsx-plugin-px2rem` uses `styled-jsx`'s plugin system which is supported from version 2.

Read more on their repository for further info.

## License

MIT
