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
      dataStore: {
        clearRouteVariablesData,
        setPlaybookNavTableOfContents,
        setPlaybookSections,
      },
      uiStore: {
        navOverlayOpen,
        clearRouteVariables,
        updateScrollPosition,
        updateWindowSize,
        borderColor,
        textColor,
        backgroundColor,
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
    }, [router.events, clearRouteVariables]);

    useEffect(() => {
      const initializePlaybookTOC = async () => {
        const playbookStructure = await getClient().fetch(
          groq`${queries.playbookStructureQuery}`,
        );

        const climateStoryTellingSections = await getClient().fetch(
          groq`${queries.sectionsFirstArticle}`,
        );
        const mainSections = await getClient().fetch(
          groq`${queries.structureSectionsFirstArticle}`,
        );

        const introSection = {
          title: 'Foreword',
          firstArticle: mainSections.introduction[0],
          articles: mainSections.introduction,
        };
        const whySection = {
          title: 'The Why',
          firstArticle: mainSections.why[0],
          articles: mainSections.why,
        };
        const whatsNextSection = {
          title: "What's Next",
          firstArticle: mainSections.whatsNext[0],
          articles: mainSections.whatsNext,
        };

        const creditsSection = {
          title: 'Credits',
          firstArticle: mainSections.credits,
          articles: [mainSections.credits],
        };

        const sections = [
          introSection,
          whySection,
          ...mainSections.climateStorytelling,
          whatsNextSection,
          creditsSection,
        ].map((s) => {
          return {
            label: s.title,
            firstArticle: s.firstArticle,
            articles: s.articles,
            href: `/playbook/${s.firstArticle?.slug}`,
          };
        });

        setPlaybookSections(sections);
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
    }, [updateScrollPosition, updateWindowSize]);

    return (
      <Provider store={store}>
        <DefaultSeo {...defaultSEO} />
        <NavOverlay />
        <PlaybookNavOverlay />
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            overflow: ${navOverlayOpen ? 'hidden' : 'auto'};
            border-width: 12px;
            border-style: solid;
            border-color: ${borderColor};
            color: ${textColor};
            background-color: ${backgroundColor};
            transition-delay: 2s;
            transition: border-color, background-color,
              background-color 1s ease-in-out;
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
  : MyApp;
