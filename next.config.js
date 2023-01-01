const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withMarkdoc(nextConfig)({
  pageExtensions: ['md', 'js', 'jsx']
});