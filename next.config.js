const path = require('path');

module.exports = {
  rewrites: async () => {
    return [
      {
        source: '/auth',
        destination: '/auth/signin'
      },
      {
        source: '/Home',
        destination: '/home'
      }
    ];
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, 'components'),
      '@utils': path.resolve(__dirname, 'utils'),
    };
    return config;
  },
};
