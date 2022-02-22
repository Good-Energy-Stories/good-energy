import { isServer } from "../utils/isServer";
import UIStore from "./UIStore";
import DataStore from "./DataStore";
import React from "react";

let clientSideStores;

export function getStores(root) {
  if (isServer) {
    return {
      uiStore: new UIStore(),
      dataStore: new DataStore(),
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      uiStore: new UIStore(root.uiStore),
      dataStore: new DataStore(root.dataStore),
    };
  }

  return clientSideStores;
}

const StoreContext = React.createContext();

export function StoreProvider(props) {
  return (
    <StoreContext.Provider value={props.value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useMobxStores() {
  return React.useContext(StoreContext);
}
