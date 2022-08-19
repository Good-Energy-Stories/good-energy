import React, { useEffect, useCallback } from 'react';
import '../styles/globals.css';
import '../styles/fonts.css';
import { useStore } from '../stores/store';
import * as ga from '../lib/ga';
import { Provider } from 'mobx-react';
import { isBrowser } from '../utils/isBrowser';
import { useRouter } from 'next/router';
import { signature } from '../utils/signature';
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
        setPlaybookCredits,
        setSocialLinks,
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
    }, [router.events, clearRouteVariables, clearRouteVariablesData]);

    const buildTableOfContents = useCallback((content) => {
      const introSection = {
        title: 'Foreword',
        firstArticle: content.introduction[0],
        articles: content.introduction,
      };
      const whySection = {
        title: 'The Why',
        firstArticle: content.why[0],
        articles: content.why,
      };
      const whatsNextSection = {
        title: "What's Next",
        firstArticle: content.whatsNext[0],
        articles: content.whatsNext,
      };

      const creditsSection = {
        title: 'Credits',
        firstArticle: content.credits,
        articles: [content.credits],
      };

      return [
        introSection,
        whySection,
        ...content.climateStorytelling,
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
    }, []);

    const initializePlaybookTOC = useCallback(async () => {
      const playbookStructure = await getClient().fetch(
        groq`${queries.playbookStructureQuery}`,
      );

      const mainSections = await getClient().fetch(
        groq`${queries.structureSectionsFirstArticle}`,
      );

      const sections = buildTableOfContents(mainSections);

      setPlaybookCredits(mainSections.credits);
      setPlaybookSections(sections);
      setPlaybookNavTableOfContents(playbookStructure);
    }, [
      buildTableOfContents,
      setPlaybookCredits,
      setPlaybookNavTableOfContents,
      setPlaybookSections,
    ]);

    const getSocials = useCallback(async () => {
      const socials = await getClient().fetch(groq`${queries.socialsQuery}`);
      setSocialLinks(socials);
    }, [setSocialLinks]);

    useEffect(() => {
      initializePlaybookTOC();
      getSocials();
    }, [initializePlaybookTOC, getSocials]);

    useEffect(() => {
      window.addEventListener('resize', updateWindowSize);
      window.addEventListener('scroll', updateScrollPosition);
      return () => {
        window.removeEventListener('scroll', updateScrollPosition);
        window.removeEventListener('resize', updateWindowSize);
      };
    }, [updateScrollPosition, updateWindowSize]);

    return (
      <>
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
      </>
    );
  },
);

export default MyApp;
