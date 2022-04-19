const siteTitle = 'Good Energy';

const defaultSeo = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.goodenergystories.com/',
    site_name: siteTitle,
  },
  twitter: {
    handle: '@goodenergystory',
    cardType: 'summary_large_image',
  },
  titleTemplate: `%s | ${siteTitle}`,
};

if (process.env.NODE_ENV === 'development') {
  defaultSeo.titleTemplate = `%s | dev-${siteTitle}`;
}

export default defaultSeo;
