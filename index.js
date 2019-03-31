// Native
const fs = require('fs')
const path = require('path')

const styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8')

const colors = {
  black: '#000000',
  red: '#990000',
  green: '#00A600',
  yellow: '#999900',
  blue: '#0000B2',
  magenta: '#B200B2',
  cyan: '#00A6B2',
  white: '#BFBFBF',
  lightBlack: '#666666',
  lightRed: '#E50000',
  lightGreen: '#00D900',
  lightYellow: '#E5E500',
  lightBlue: '#0000FF',
  lightMagenta: '#E500E5',
  lightCyan: '#00E5E5',
  lightWhite: '#E5E5E5'
}

exports.decorateConfig = config => {
  const isDarkMode = config.hyperNative && config.hyperNative.darkMode

  const hyperNativeConfig = Object.assign({
    padding: '7px 7px',
    backgroundColor: isDarkMode ? '#000' : '#fff',
    foregroundColor: isDarkMode ? '#fff' : '#000',
    css: (config.css || '') + styles,
    colors
  }, config.hyperNative)

  return Object.assign({}, config, hyperNativeConfig)
}

exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  titleBarStyle: 'default',
  transparent: false
})

exports.getTabsProps = (parentProps, props) => {
  const bodyClasses = document.body.classList

  if (props.tabs.length <= 1) {
    bodyClasses.add('closed-tabs')
  } else {
    bodyClasses.remove('closed-tabs')
  }

  return Object.assign({}, parentProps, props)
}
