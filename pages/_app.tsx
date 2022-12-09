// @ts-nocheck

import { useCallback } from 'react';
import '../styles/globals.css';
import '../styles/fonts.css';
import * as ga from '../lib/ga';
import { isBrowser } from '../utils/isBrowser';
import { signature } from '../utils/signature';
import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '../seo';
import { getClient } from '../lib/sanity/sanity.server';
import { queries } from '../data';
import Menu from '../components/Menu/Menu';
import { NextPage } from 'next';
import { RootStoreProvider, useUIStore } from '../providers/RootStoreProvider';
import { useRouterEvents } from '../utils/useRouterEvents';
import { useThemeManager } from '../utils/useThemeManager';
import Footer from '../components/Footer/Footer';
import { observer } from 'mobx-react-lite';
import { withPasswordProtect } from '@/lib/withPasswordProtect';

// Console Credits
if (isBrowser) {
  signature;
}

const App = observer(
  ({
    Component,
    pageProps,
    pageData,
  }: {
    Component: NextPage;
    pageProps: any;
    pageData: any;
  }) => {
    const logPageView = useCallback((url) => {
      ga.pageview(url);
    }, []);

    useRouterEvents({
      onRouteChange: logPageView,
    });

    const { navOverlayOpen } = useUIStore();

    useThemeManager();

    return (
      <>
        <DefaultSeo {...defaultSEO} />
        <Menu navigation={pageData?.navigation} />

        <Component {...pageProps} />
        <Footer navigation={pageData?.navigation} socials={pageData?.socials} />
        <style jsx global>{`
          body {
            overflow: ${navOverlayOpen ? 'hidden' : 'auto'};
          }
        `}</style>
      </>
    );
  },
);

function AppWithProviders(props) {
  return (
    <RootStoreProvider hydrationData={props.pageProps.hydrationData}>
      <App {...props} />
    </RootStoreProvider>
  );
}

const PASSWORD_PROTECTED_ROUTES = ['/end-of-year-report'];

console.log(process.env.PASSWORD_PROTECT);

const PasswordProtectedApp = process.env.PASSWORD_PROTECT
  ? withPasswordProtect(AppWithProviders, {
      bypassProtection: ({ route }) => {
        return !PASSWORD_PROTECTED_ROUTES.includes(route);
      },
    })
  : AppWithProviders;

PasswordProtectedApp.getInitialProps = async () => {
  const navigation = await getClient().fetch(queries.navigationQuery);
  const socials = await getClient().fetch(queries.socialsQuery);
  return { pageData: { navigation, socials } };
};

export default PasswordProtectedApp;
