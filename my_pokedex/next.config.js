/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["raw.githubusercontent.com"],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
