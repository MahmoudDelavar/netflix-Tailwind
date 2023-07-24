/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['image.tmdb.org'],
    // remotePatterns: [{ hostname: 'image.tmdb.org' }],
  },
};

module.exports = nextConfig;
