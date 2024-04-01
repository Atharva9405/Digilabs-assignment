const withPWA = require('next-pwa');

const withPwaConfig = withPWA({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPwaConfig(nextConfig);
