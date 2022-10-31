import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useThemeSwitcherStore } from '../providers/RootStoreProvider';

export const useThemeManager = () => {
  const { asPath } = useRouter();
  const switchStore = useThemeSwitcherStore();

  const switchToLight = useCallback(() => {
    return switchStore.makeThemeLight();
  }, [switchStore]);

  const switchToDark = useCallback(() => {
    return switchStore.makeThemeDark();
  }, [switchStore]);

  useEffect(() => {
    switch (asPath) {
      case '/playbook/two-worlds':
      case '/playbook/why-climate-stories':
        switchToDark();
        break;
      default:
        switchToLight();
    }
  }, [asPath, switchToDark, switchToLight]);
};
