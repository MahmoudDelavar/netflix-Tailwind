/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: 'image.tmdb.org' }],

    domains: ['api.themoviedb.org'],
  },
};

module.exports = nextConfig;
