import { RootStore } from './RootStore';
import { autorun, makeAutoObservable } from 'mobx';
import { MODE } from './TwoWorldsStore';

export function twoWorldsSwitcherStoreFactory(root: RootStore) {
  autorun(() => {});
  return makeAutoObservable({
    makeModeRise: () => {
      root.twoWorldsStore.mode = MODE.RISE;
    },
    makeModeCollapse: () => {
      root.twoWorldsStore.mode = MODE.COLLAPSE;
    },
  });
}
