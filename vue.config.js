const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log'];
    }
  },
  productionSourceMap: false,
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { //配置跨域
      '/api': {
        target: 'http://47.111.0.26:31980/', //这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '' //请求的时候使用这个api就可以
        }
      }
    }
  },

  chainWebpack(config) {
    // 第1个参数：别名，第2个参数：路径  （设置路径别名）
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@pages', resolve('./src/page'))
      .set('@router', resolve('./src/router'))
      .set('@store', resolve('./src/store'))
      .set('@utils', resolve('./src/utils'))
    config.plugin('html').tap(args => {
      args[0].title = '模版'
      return args
    })
    config
      .optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          element: {
            name: 'chunk-element-ui', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          // echarts: {
          //   name: 'chunk-echarts', // split elementUI into a single package
          //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          //   test: /[\\/]node_modules[\\/]_?echarts(.*)/ // in order to adapt to cnpm
          // },
        }
      })
  }

}