# hyper-native

This theme will make your instance of [Hyper](https://hyper.is) look like macOS' native Terminal app:

<p align="center">
  <img src="http://i.imgur.com/eeRssvz.png" width="700">
</p>

## Usage

Simply add the theme to your `~/.hyper.js`:

```js
plugins: [
  'hyper-native'
]
```

## Config

Add following to `~/.hyper.js` in the `config` section:

```js
hyperNative: {
  darkMode: true, // Can enable or disable Dark mode. The value value is 'false'
  colors: { // Can customize the colors
    black: "#000000",
    red: "#ab1500",
    green: "#39fd35",
    yellow: "#a9a600",
    blue: "#36a5fc",
    magenta: "#c12dbf",
    cyan: "#00b3bf",
    white: "#cacaca",
    lightBlack: "#797979",
    lightRed: "#ec2100",
    lightGreen: "#00db00",
    lightYellow: "#eae600",
    lightBlue: "#36a5fc",
    lightMagenta: "#ec3aea",
    lightCyan: "#00e8ea",
    lightWhite: "#eaeaea",
  },
  backgroundColor: '#fff' // If omitted, it will use 'darkMode' property to define it as '#fff' or '#000'
  foregroundColor: '#000' // If omitted, it will use 'darkMode' property to define it as '#000' or '#fff'
}
```

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device (make sure that it's located in `~/.hyper-plugins/local`)
2. Add "hyper-native" to the `localPlugins` property within `~/.hyper.js`
3. Restart Hyper

As always, you can run the tests using: `npm test`

## Author

Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo))
