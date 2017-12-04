// Native
const fs = require('fs')
const path = require('path')

const styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8')

const colors = {
  yellow: '#afaf00',
  lightGreen: '#30de04'
}

exports.decorateConfig = config => Object.assign({}, config, {
  padding: '7px 7px',
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

exports.getTabsProps = (parentProps, props) => {
  const bodyClasses = document.body.classList

  if (props.tabs.length <= 1) {
    bodyClasses.add('closed-tabs')
  } else {
    bodyClasses.remove('closed-tabs')
  }

  return Object.assign({}, parentProps, props)
}
