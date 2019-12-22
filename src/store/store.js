import React from 'react';
import { useStaticRendering, MobXProviderContext } from "mobx-react";
import allStore from './allStore'

/** 拿來取代 inject */
export function useStores() {
  return React.useContext(MobXProviderContext)
}

const isServer = !process.browser;
useStaticRendering(isServer);


class Store {
  constructor(isServer, initialData = {}) {
    const ctx = isServer ? {} : this;
    this.isServer = isServer;
    for (const k in allStore) {
      if (allStore.hasOwnProperty(k)) {
        this[k] = new allStore[k]({ ctx, isServer, initialData: initialData[k], storeName: "RootPageStore" })
      }
    }
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
