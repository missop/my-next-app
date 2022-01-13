/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
  redirects: () => {
    return [
      {
        source: '/',
        permanent: false,
        destination: '/html',
      },
    ]
  },
}
