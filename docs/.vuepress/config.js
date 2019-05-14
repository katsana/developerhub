module.exports = {
  title: 'KATSANA',
  description: 'Developer Hub',
  themeConfig: {
    displayAllHeaders: true,
    logo: '/images/katsana.png',
    nav: [
      { text: 'API', link: '/api/v1/' }
    ],
    sidebar: {
      '/api/v1/': [
        '',
        'authentication',
        'information',
        'user-profile',
        'vehicles'
      ]
    }
  }
}
