// ./web/pages/api/preview.js

export default async function articlePreview(req, res) {
  const corsOrigin =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3333`
      : `https://good-energy.sanity.studio/`;

  res.setHeader('Access-Control-Allow-Origin', corsOrigin);
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req?.query?.fetch === 'true') {
    const proto =
      process.env.NODE_ENV === 'development' ? `http://` : `https://`;
    const host = req.headers.host;
    const pathname = req?.query?.slug ?? `/`;

    const absoluteUrl = new URL(
      `${proto}${host}/playbook/${pathname}`,
    ).toString();
    const previewHtml = await fetch(absoluteUrl, {
      credentials: `include`,
      headers: { Cookie: req.headers.cookie },
    })
      .then((previewRes) => previewRes.text())
      .catch((err) => console.error(err));
    return res.send(previewHtml);
  }

  if (!req?.query?.secret) {
    return res.status(401).json({ message: 'No secret token' });
  }
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.SANITY_PROJECT_SECRET) {
    return res.status(401).json({ message: 'Invalid secret token' });
  }

  if (!req.query.slug) {
    return res.status(401).json({ message: 'No slug' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
  });

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/playbook/${req?.query?.slug}` ?? `/` });

  return res.end();
}
