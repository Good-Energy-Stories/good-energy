import Head from 'next/head';

const Meta = ({
  title,
  image,
  slug,
  description,
}: {
  title?: string;
  image?: string;
  slug?: string;
  description?: string;
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title ?? 'Good Energy'}</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☀️</text></svg>"
      />
      <meta name="description" content={description} />

      <meta property="og:title" content={title ?? 'Good Energy'} />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content={
          `https://www.goodenergystories.com/${slug}` ??
          'https://www.goodenergystories.com/'
        }
      />

      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={
          `https://www.goodenergystories.com/${slug}` ??
          'https://www.goodenergystories.com/'
        }
      />
      <meta property="og:image" content={image} />

      <meta name="viewport" content="width=device-width, minimal-ui" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="twitter:title" content={title ?? 'Good Energy'} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="goodenergystories.com" />
      <meta
        property="twitter:url"
        content="https://www.goodenergystories.com/"
      />

      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;
