module.exports = {
  transpileDependencies: [],
  configureWebpack: {
    node: {
      process: false,
      url: false,
      crypto: false,
      stream: false,
      assert: false,
      http: false,
      https: false,
      os: false
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Phasmophobia/'
    : '/'
}
