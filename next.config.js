/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable SWC minification if it causes issues
  swcMinify: true,
  // Ensure trailing slashes for static export
  trailingSlash: true,
  // Skip type checking during build (Vercel will handle this)
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
