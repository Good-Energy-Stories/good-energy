import { makeObservable, observable, computed } from 'mobx';
import { RootStore } from './RootStore';

export enum MODE {
  RISE = 'RISE',
  COLLAPSE = 'COLLAPSE',
}

export class TwoWorldsStore {
  root: RootStore;
  mode: MODE;

  constructor(root: RootStore) {
    this.root = root;
    this.mode = MODE.RISE;
    makeObservable(this, {
      mode: observable,
      isRiseMode: computed,
      isCollapseMode: computed,
    });
  }

  get isRiseMode() {
    return this.mode === MODE.RISE;
  }
  get isCollapseMode() {
    return this.mode === MODE.COLLAPSE;
  }
}
