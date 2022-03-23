import React, { useEffect } from 'react';
import App from 'next/app';
import '../styles/globals.css';
import '../styles/fonts.css';
import { useStore } from '../stores/store';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ga from '../lib/ga';
import { Provider } from 'mobx-react';
import { AnimatePresence } from 'framer-motion';
import { isBrowser } from '../utils/isBrowser';
import { useRouter } from 'next/router';
import { signature } from '../utils/signature';
import { withPasswordProtect } from '../lib/withPasswordProtect';
import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '../seo';

// Console Credits
if (isBrowser) {
  signature;
}

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  const {
    uiStore: { updateScrollPosition },
  } = store;

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [updateScrollPosition]);

  return (
    <Provider store={store}>
      <DefaultSeo {...defaultSEO} />

      <Component {...pageProps} />
    </Provider>
  );
}

export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(MyApp, {
      loginComponentProps: {
        logo: '/light-logo.png',
        buttonBackgroundColor: 'var(--pink)',
      },
      loginApiUrl: '/api/login',
    })
  : App;
