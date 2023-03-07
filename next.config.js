const sanityClient = require('@sanity/client');
const client = sanityClient({
  dataset: process.env.SANITY_PROJECT_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25',
});

// get redirects from Sanity for Vercel
async function fetchSanityRedirects() {
  const data = await client.fetch(
    `*[_type == "redirect"]{ from, to, isPermanent, isExternal }`,
  );

  const redirects = data.map((redirect) => {
    return {
      source: `/${redirect.from}`,
      destination: redirect.isExternal ? redirect.to : `/${redirect.to}`,
      permanent: redirect.isPermanent,
      basePath: false,
    };
  });

  return redirects;
}

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
  async redirects() {
    const sanityRedirects = await fetchSanityRedirects();
    return [
      ...sanityRedirects,
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/offerings',
        destination: '/',
        permanent: true,
      },
      {
        source: '/research',
        destination: '/offerings/research',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self';",
          },
        ],
      },
    ];
  },
  experimental: {
    removeConsole: {
      exclude: ['error'],
    },
    // Uncomment this to suppress all logs.
    // removeConsole: true,
  },
  env: {
    PASSWORD_PROTECT: true,
    SANITY_PROJECT_ID: 'jkhcjumj',
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    SANITY_PROJECT_DATASET: 'production',
    MAILCHIMP_API_KEY: '85faf5d485c149a9c41ff41f65777482-us14',
    MAILCHIMP_SERVER_PREFIX: 'us14',
    MAILCHIMP_LIST_ID: 'b993388cce',
  },
  reactStrictMode: true,
};
