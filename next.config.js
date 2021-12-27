const withImages = require('next-images')
module.exports = withImages({
  trailingSlash: true,
  webpack5: false,
  images: {
    loader: "imgix",
    path: "",
  },
  async rewrites() {
    return [
      {
        source: '/email-templates/',
        destination: '/email-templates/categories/all',
      },
      {
        source: '/developers/ZG9jOjE2MjM4MTIz-mailmodo-api-for-transactional-email/',
        destination: '/developers/',
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/generateRSS')
    }

    return config
  }
})
