import { enableStaticRendering } from 'mobx-react-lite';
import { createContext, ReactNode, useContext } from 'react';
import { RootStore, RootStoreHydration } from '../stores/RootStore';

enableStaticRendering(typeof window === 'undefined');

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = 'StoreContext';

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
}

export function useCounterStore() {
  const { counterStore } = useRootStore();
  return counterStore;
}

export function useDataStore() {
  const { dataStore } = useRootStore();
  return dataStore;
}

export function useUIStore() {
  const { uiStore } = useRootStore();
  return uiStore;
}

export function useThemeSwitcherStore() {
  const { themeSwitcherStore } = useRootStore();
  return themeSwitcherStore;
}

export function useTwoWorldsSwitcherStore() {
  const { twoWorldsSwitcherStore } = useRootStore();
  return twoWorldsSwitcherStore;
}
export function useTwoWorldsStore() {
  const { twoWorldsStore } = useRootStore();
  return twoWorldsStore;
}
export function RootStoreProvider({
  children,
  hydrationData,
}: {
  children: ReactNode;
  hydrationData?: RootStoreHydration;
}) {
  const store = initializeStore(hydrationData);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

function initializeStore(initialData?: RootStoreHydration): RootStore {
  const _store = store ?? new RootStore();

  if (initialData) {
    _store.hydrate(initialData);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}
