export default function resolveProductionUrl(document) {
  return `https://good-energy.vercel.app/playbook/${document.slug.current}`;
}
