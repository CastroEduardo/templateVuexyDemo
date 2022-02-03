module.exports = {
  publicPath: '/',
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
  //lintOnSave: false
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // }
};
