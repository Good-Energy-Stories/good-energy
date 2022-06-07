/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  experimental: {
    removeConsole: {
      exclude: ['error'],
    },
    // Uncomment this to suppress all logs.
    // removeConsole: true,
  },
  env: {
    // Add any logic you want here, returning `true` to enable password protect.
    PASSWORD_PROTECT: process.env.ENVIRONMENT === 'staging',
    SANITY_PROJECT_ID: 'jkhcjumj',
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
    MAILCHIMP_API_KEY: '85faf5d485c149a9c41ff41f65777482-us14',
    MAILCHIMP_SERVER_PREFIX: 'us14',
    MAILCHIMP_LIST_ID: 'b993388cce',
  },
  reactStrictMode: true,
};
