const withVercelAnalytics = require('@vercel/analytics');

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = withVercelAnalytics(nextConfig);