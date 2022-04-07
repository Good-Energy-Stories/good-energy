// ./web/pages/api/exit-preview.js

export default function exit(req, res) {
  res.clearPreviewData();
  res.writeHead(307, { Location: `/playbook/${req?.query?.slug}` ?? `/` });
}
