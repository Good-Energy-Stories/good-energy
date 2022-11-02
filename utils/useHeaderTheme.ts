import { useRouter } from 'next/router';

const useHeaderTheme = () => {
  const { asPath } = useRouter();
  switch (asPath) {
    case '/':
      return 'LANDING';
    default:
      return null;
  }
};

export default useHeaderTheme;
