module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? '/ScreenToGif-Website-Alpha/' : '/', //Erase later when using custom domain.
  lintOnSave: false,

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
};
