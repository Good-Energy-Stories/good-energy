// ./studio/resolveProductionUrl.js

const previewSecret =
  'tmQGZcFgU3szcOVZZxclhvEH2I44heqyo64b8yhRpxgpcZdZmfasyCZq8Rif';

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://good-energy.vercel.app`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === 'localhost' ? localUrl : remoteUrl;

  var path = '';
  switch (doc._type) {
    case 'article':
      path = `playbook`;
  }

  const url = `${baseUrl}/${path}`;
  const previewUrl = new URL(url);

  previewUrl.pathname = `/api/articlePreview`;

  var slug = doc?.slug?.current;

  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, slug ?? `/`);

  return previewUrl.toString();
}
