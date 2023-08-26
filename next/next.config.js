/** @type {import('next').NextConfig} */
const nextConfig = {

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
