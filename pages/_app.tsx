// @ts-nocheck

import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/fonts.css';
import { useStore } from '../stores/store';
import * as ga from '../lib/ga';
import { isBrowser } from '../utils/isBrowser';
import { useRouter } from 'next/router';
import { signature } from '../utils/signature';
import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '../seo';
import { getClient } from '../lib/sanity/sanity.server';
import { groq } from 'next-sanity';
import { queries } from '../data';
import { observer } from 'mobx-react-lite';

import Menu from '../components/Menu/Menu';
import { Footer } from '../components/Footer';

// Console Credits
if (isBrowser) {
  signature;
}

const App = observer(({ Component, pageProps, pageData }: any) => {
  const store = useStore(pageProps.initialState);

  const {
    dataStore: { clearRouteVariablesData },
    uiStore: {
      navOverlayOpen,
      clearRouteVariables,
      updateScrollPosition,
      updateWindowSize,
    },
  } = store;

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      clearRouteVariablesData();
      clearRouteVariables();
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, clearRouteVariables, clearRouteVariablesData]);

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    window.addEventListener('scroll', updateScrollPosition);
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [updateScrollPosition, updateWindowSize]);

  useEffect(() => {
    switch (router.asPath) {
      case '/playbook/two-worlds':
        document.body.dataset.theme = 'dark';
        break;
      default:
        document.body.dataset.theme = 'light';
    }
  }, [router.asPath]);

  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Menu navigation={pageData?.navigation} />
      <Component {...pageProps} />
      <Footer navigation={pageData?.navigation} />
      <style jsx global>{`
        body {
          overflow: ${navOverlayOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </>
  );
});

export default App;

App.getInitialProps = async () => {
  const navigation = await getClient().fetch(queries.navigationQuery);
  const socials = await getClient().fetch(groq`${queries.socialsQuery}`);

  return { pageData: { navigation, socials } };
};
