/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.themoviedb.org'],
  },
};

module.exports = nextConfig;
