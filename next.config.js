/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
    images: {
        domains: ['m.media-amazon.com', "www.codeswear.com", "images.unsplash.com"],
      },
}

module.exports = nextConfig