const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const config = {
  // Vos configurations Next.js, par exemple:
  poweredByHeader: false,
  reactStrictMode: true,
  // Autres configurations...
};

module.exports = withNextIntl(config);
