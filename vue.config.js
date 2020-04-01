module.exports = {
  publicPath: '',
  transpileDependencies: [
    'vuetify'
  ],

  pwa: {
    name: 'Alchemists Tablet',
    themeColor: '#FFF',
    msTitleColor: '#FFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestOptions: {
      description: 'Alchemists Tablet',
      start_url: 'index.html',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#FFF',
      splash_pages: null,
      icons: [
        {
          'src': 'images/icons/icon-72x72.png',
          'sizes': '72x72',
          'type': 'image/png'
        },
        {
          'src': 'images/icons/icon-96x96.png',
          'sizes': '96x96',
          'type': 'image/png'
        },
        {
          'src': 'images/icons/icon-128x128.png',
          'sizes': '128x128',
          'type': 'image/png'
        },
        {
          'src': 'images/icons/icon-144x144.png',
          'sizes': '144x144',
          'type': 'image/png'
        },
        {
          'src': 'images/icons/icon-152x152.png',
          'sizes': '152x152',
          'type': 'image/png'
        },
        {
          'src': 'images/icons/icon-192x192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': 'images/icons/icon-384x384.png',
          'sizes': '384x384',
          'type': 'image/png'
        },
        {
          'src': 'images/icons/icon-512x512.png',
          'sizes': '512x512',
          'type': 'image/png'
        }
      ]
    },
    iconPaths: {
      favicon32: 'img/icons/icon-72x72.png',
      favicon16: 'img/icons/icon-72x72.png',
      appleTouchIcon: 'img/icons/icon-192x192.png',
      maskIcon: 'img/icons/icon-384x384.png',
      msTileImage: 'img/icons/icon-144x144.png'
    }
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Alchemists Tablet';
        return args;
      });
  }
};
