import { RootStore } from './RootStore';
import { autorun, makeAutoObservable } from 'mobx';
import { THEME } from './ThemeStore';

export function themeSwitcherStoreFactory(root: RootStore) {
  autorun(() => {
    document.body.dataset.theme = root.themeStore.theme;
  });
  return makeAutoObservable({
    makeThemeDark: () => {
      root.themeStore.theme = THEME.DARK;
    },
    makeThemeLight: () => {
      root.themeStore.theme = THEME.LIGHT;
    },
  });
}
