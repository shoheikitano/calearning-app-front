module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devtool: 'source-map'
  }
},
module.exports = {
  devServer: {
    proxy: 'http://localhost:8888'
  }
};
