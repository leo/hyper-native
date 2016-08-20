const fs = require('fs')
const path = require('path')

let styles = ''

try {
  styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8')
} catch (err) {
  throw err
}

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor: '#fff',
  foregroundColor: '#000',
  css: (config.css || '') + styles
})
