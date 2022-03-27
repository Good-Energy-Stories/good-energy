/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
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
    SANITY_API_TOKEN:
      'skv8sFUWj4BmKtUby5AbMFUSMXUZKQZrLozYBeZqv058HECQ8ZMVtbI5yd11bui2t5VxvkwJp39SWAGdRsPXyqzMWA2rb7TkLunElunRKfvxIX5OA7SZdJ6RQvtuOLVgp7MlCdsznUjovm9iF8dgQRHLcPGZqSzORBQ5bHoM7DxmiTpPIw3J',
    SANITY_PROJECT_DATASET: 'development',
  },
  reactStrictMode: true,
};
