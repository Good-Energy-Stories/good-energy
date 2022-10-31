import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useDataStore, useUIStore } from '../providers/RootStoreProvider';

export const useRouterEvents = ({ onRouteChange }) => {
  const router = useRouter();
  const uiStore = useUIStore();
  const dataStore = useDataStore();

  const handleRouteChange = useCallback(
    (url) => {
      dataStore.clearRouteVariables();
      uiStore.clearRouteVariables();
      if (onRouteChange) {
        onRouteChange(url);
      }
    },
    [dataStore, uiStore, onRouteChange],
  );

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, handleRouteChange]);
};
