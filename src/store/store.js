import React from 'react';
import { action, observable } from "mobx";
import { useStaticRendering, MobXProviderContext } from "mobx-react";

/** 拿來取代 inject */
export function useStores() {
  return React.useContext(MobXProviderContext)
}

const isServer = !process.browser;
useStaticRendering(isServer);

/** import all subStore */
import RootPageStore from "@containers/RootPage/store/RootPageStore";

class Store {
  constructor(isServer, initialData = {}) {
    const ctx = isServer ? {} : this;
    this.isServer = isServer;
    this.RootPageStore = new RootPageStore({
      ctx,
      initialData,
      storeName: "RootPageStore"
    });
  }
}

let store = null;
export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }
  if (store === null) {
    store = new Store(isServer, initialData);
  }
  return store;
}
