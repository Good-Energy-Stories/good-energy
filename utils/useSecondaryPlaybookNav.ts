import { useRouter } from 'next/router';

export default function useSecondaryPlaybookNav() {
  const { pathname } = useRouter();

  switch (pathname) {
    case '/playbook':
    case '/playbook/[slug]':
    case '/playbook/characters':
      return true;
    case '/playbook/why-climate':
    case '/playbook/two-worlds':
      return false;
    default:
      return false;
  }
}
