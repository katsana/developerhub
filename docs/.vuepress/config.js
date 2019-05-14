module.exports = {
  title: 'KATSANA Developer Hub',
  description: 'Learn to Integrate with KATSANA API and SDK',
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
        'vehicles',
        'vehicles/travels',
        'vehicles/summaries'
      ]
    }
  }
}
