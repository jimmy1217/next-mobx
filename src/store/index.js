import { action, observable, computed, runInAction } from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
const isServer = typeof window === 'undefined';
import { configure } from "mobx"

/** import all store */
import LoginStore from "@containers/LoginPage/store/LoginStore";



useStaticRendering(isServer)
configure({ enforceActions: "observed" })

let store

class Store {
    constructor(initialData) {
        const ctx = isServer ? undefined : this;
        this.loginStore = new LoginStore({ storeName: 'loginStore', ctx, isServer, initialData })
    }

    /** 此處處理 server side 同步 client side store */
    // hydrate = initialData => {
    //     if (!initialData) return


    //     this.lastUpdate = initialData.lastUpdate !== null ? initialData.lastUpdate : Date.now()
    //     this.light = !!initialData.light
    // }
}

function initializeStore(initialData = null) {
    const _store = store ?? new Store(initialData)

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // if (initialData) {
    //     _store.hydrate(initialData)
    // }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}
let defaultInitialState
export function useStore(initialState) {
    if(initialState){
        defaultInitialState = initialState
    }
    const store = useMemo(() => initializeStore(defaultInitialState), [defaultInitialState])
    return store
}
