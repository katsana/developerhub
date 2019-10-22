module.exports = {
  title: 'KATSANA Developer Hub',
  description: 'Learn to Integrate with KATSANA API and SDK',
  themeConfig: {
    algolia: {
      apiKey: '36e7be2c28c0e0c8a97e9998ba19c3a1',
      indexName: 'developerhub'
    },
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
