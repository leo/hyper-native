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
  css: (config.css || '') + styles,
  colors
})

exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  titleBarStyle: 'default',
  transparent: false
})

exports.getTabsProps = (parentProps, props) => {
  const hyper = document.querySelector('.hyper_main')

  if (props.tabs.length <= 1) {
    hyper.classList.add('closed-tabs')
  } else {
    hyper.classList.remove('closed-tabs')
  }

  return Object.assign({}, parentProps, props)
}
