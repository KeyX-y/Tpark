const path = require('path')

module.exports = {
  entry: 'src/entry.js',
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, './dist')
  }
}