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
  }
};
