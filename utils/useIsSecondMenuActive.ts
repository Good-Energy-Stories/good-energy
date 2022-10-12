import { useRouter } from 'next/router';

export default function useIsPlaybook() {
  const router = useRouter();
  return router.pathname.includes('playbook');
}
