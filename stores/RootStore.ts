import { CounterHydration, CounterStore } from './CounterStore';
import DataStore from './DataStore';
import { ThemeStore } from './ThemeStore';
import { themeSwitcherStoreFactory } from './ThemeSwitcherStore';
import { TwoWorldsStore } from './TwoWorldsStore';
import { twoWorldsSwitcherStoreFactory } from './TwoWorldsSwitcherStore';
import UIStore from './UIStore';

export type RootStoreHydration = {
  stopwatchStore?: CounterHydration;
};
export class RootStore {
  counterStore: CounterStore;
  dataStore: DataStore;
  uiStore: UIStore;
  themeStore: ThemeStore;
  themeSwitcherStore: ReturnType<typeof themeSwitcherStoreFactory>;
  twoWorldsStore: TwoWorldsStore;
  twoWorldsSwitcherStore: ReturnType<typeof twoWorldsSwitcherStoreFactory>;

  constructor() {
    this.counterStore = new CounterStore(this);
    this.dataStore = new DataStore(this);
    this.uiStore = new UIStore(this);
    this.themeStore = new ThemeStore(this);
    this.themeSwitcherStore = themeSwitcherStoreFactory(this);
    this.twoWorldsStore = new TwoWorldsStore(this);
    this.twoWorldsSwitcherStore = twoWorldsSwitcherStoreFactory(this);
  }

  hydrate(data: RootStoreHydration) {
    if (data.stopwatchStore) {
      this.counterStore.hydrate(data.stopwatchStore);
    }
  }
}
