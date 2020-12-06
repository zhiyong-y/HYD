module.exports = {
  //设置跟路径
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  // outputDir: "",
  // assetsDir: "",
  // pages: {},
  lintOnSave: true,
  // 解决安装 less 以及 less-loader 后报错，JavaScript 不被允许使用
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  // 配置跨域
  devServer: {
    port: 8080, //默认的打开端口号
    open: true, //自动打开浏览器
    host: "localhost", //本地地址
    proxy: {
      //在此配置跨域
      // '/api' 这里是你需要配置的接口地址域名后跟的后缀，
      // 即为地址后的/api,例如这个地址http://www.xxxxxx.com/api
      "/api": {
        target: "http://localhost:3000", //后端的接口地址
        changeOrigin: true, //开启跨域
        pathRewrite: {
          "^/api": "" //这里即为重写后的地址，baseURL里的地址要换成这个
        }
      }
    }
  }
};
