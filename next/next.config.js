/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    serverActions: true,
  },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.unsplash.com',
          },
          {
            protocol: 'http',
            hostname: 'localhost'
          }
        ],
      },
}

module.exports = nextConfig
