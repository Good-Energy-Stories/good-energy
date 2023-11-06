// ./studio/resolveProductionUrl.js

const previewSecret =
  'tmQGZcFgU3szcOVZZxclhvEH2I44heqyo64b8yhRpxgpcZdZmfasyCZq8Rif';

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://www.goodenergystories.com/`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === 'localhost' ? localUrl : remoteUrl;

  var path = '';
  var pathname = '';

  switch (doc._type) {
    case 'article':
      path = `playbook`;
      pathname = 'articlePreview';
      break;
    case 'offeringsPage':
      path = `offerings`;
      pathname = 'offeringsPreview';
      break;
  }

  const url = `${baseUrl}/${path}`;
  const previewUrl = new URL(url);

  previewUrl.pathname = `/api/${pathname}`;

  var slug = doc?.slug?.current;

  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, slug ?? `/`);

  return previewUrl.toString();
}
