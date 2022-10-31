import { makeObservable, observable } from 'mobx';
import { RootStore } from './RootStore';

export type CounterHydration = {
  start: number;
};

export enum THEME {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export class ThemeStore {
  root: RootStore;
  theme: THEME;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      theme: observable,
    });
  }
}
