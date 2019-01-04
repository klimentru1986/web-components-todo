const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    components: './src/components/components.js'
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
