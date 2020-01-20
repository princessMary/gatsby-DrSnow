'use strict';

module.exports = {
  url: 'https://drsnow.netlify.com',
  pathPrefix: 'princessmary.github.io',
  title: 'Dr.Snow',
  subtitle: 'Knows everything',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 6,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'Princess Mary sketch book',
      url: 'princessmary.github.io'
    },
    {
      label: 'Princess Mary rose',
      pathToConfigModule: `../src/pages/example.js`,
    },

    {
      label: 'Princess Mary lipstick',
      pathToConfigModule: `../src/pages/example.js`,
    },

    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Dr.Snow',
    photo: '/photo.jpg',
    bio: 'Knows everything',
    contacts: {
      email: '',
      facebook: '',
      telegram: '',
      twitter: '#',
      github: '#',
      rss: '',
      vkontakte: '',
      linkedin: '#',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: ''
    }
  }
};
