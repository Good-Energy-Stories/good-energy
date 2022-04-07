// ./web/pages/api/exit-preview.js

export default function exitArticlePreview(req, res) {
  res.clearPreviewData();
  res.writeHead(307, { Location: `/playbook/${req?.query?.slug}` ?? `/` });
  return res.end();
}
