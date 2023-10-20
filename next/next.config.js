/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '31.129.103.119',
            port: '1337',
            pathname: '/**'
          },
          {
            protocol: 'http',
            hostname: '31.129.103.119',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
