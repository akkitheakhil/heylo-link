
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}

module.exports = withPWA(nextConfig)
