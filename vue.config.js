module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? '/ScreenToGif-Website/' : '/',
  publicPath: "/",
  lintOnSave: false,

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },

  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          quietDeps: true,
        },
      },
      sass: {
        sassOptions: {
          quietDeps: true,
        },
      },
    },
  },

  configureWebpack: {
    devtool: "source-map"
  }
};