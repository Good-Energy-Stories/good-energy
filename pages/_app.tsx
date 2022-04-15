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
import { NavOverlay, PlaybookNavOverlay } from '../components';
import { getClient } from '../lib/sanity/sanity.server';
import { groq } from 'next-sanity';
import { queries } from '../data';
import { observer } from 'mobx-react-lite';

// Console Credits
if (isBrowser) {
  signature;
}

const MyApp = observer(
  ({ Component, pageProps }: { Component: any; pageProps: any }) => {
    const store = useStore(pageProps.initialState);

    const {
      dataStore: { setPlaybookNavTableOfContents },
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
        clearRouteVariables();
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
      const initializePlaybookTOC = async () => {
        const playbookStructure = await getClient().fetch(
          groq`${queries.playbookStructureQuery}`,
        );
        setPlaybookNavTableOfContents(playbookStructure);
      };
      initializePlaybookTOC();
    }, []);

    useEffect(() => {
      window.addEventListener('resize', updateWindowSize);
      window.addEventListener('scroll', updateScrollPosition);
      return () => {
        window.removeEventListener('scroll', updateScrollPosition);
        window.removeEventListener('resize', updateWindowSize);
      };
    }, [updateScrollPosition]);

    return (
      <Provider store={store}>
        <DefaultSeo {...defaultSEO} />
        <NavOverlay />
        <PlaybookNavOverlay />
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            overflow: ${navOverlayOpen ? 'hidden' : 'auto'};
          }
        `}</style>
      </Provider>
    );
  },
);

export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(MyApp, {
      loginComponentProps: {
        logo: '/light-logo.png',
        buttonBackgroundColor: 'var(--pink)',
      },
      loginApiUrl: '/api/login',
    })
  : App;
