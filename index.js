const fs = require('fs')
const path = require('path')

let styles = ''

try {
  styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8')
} catch (err) {
  throw err
}

const colors = {
  yellow: '#afaf00',
  lightGreen: '#30de04'
}

exports.decorateConfig = config => Object.assign({}, config, {
  padding: '0px 7px',
  backgroundColor: '#fff',
  foregroundColor: '#000',
  cursorColor: '#000',
  cursorShape: 'BEAM',
  css: (config.css || '') + styles,
  colors
})

exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  titleBarStyle: 'default',
  transparent: false
})
