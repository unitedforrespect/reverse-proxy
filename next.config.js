// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  async rewrites() {
    return [
      {
        source: `${process.env.SOURCE_PATH}/:path*`,
        destination: `${process.env.DESTINATION_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
