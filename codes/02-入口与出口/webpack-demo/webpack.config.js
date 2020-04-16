const path = require('path')

// 单入口
const config = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist01')
  } 
}

// 多入口
const config_double = {
  entry: {
    app: './src/index.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist')
  }
}

module.exports = config_double