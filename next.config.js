/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'images.unsplash.com', 'img2.freepng.es' ]
  }
}

module.exports = nextConfig
