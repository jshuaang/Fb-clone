module.exports = {
  reactStrictMode: true,
  images: {
    domains:['platform-lookaside.fbsbx.com','firebasestorage.googleapis.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}
