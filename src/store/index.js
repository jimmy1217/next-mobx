import { action, observable, computed, runInAction } from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
useStaticRendering(typeof window === 'undefined')

let store

class Store {
  @observable lastUpdate = 0
  @observable light = false

  @action start = () => {
    this.timer = setInterval(() => {
      runInAction(() => {
        this.lastUpdate = Date.now()
        this.light = true
      })
    }, 1000)
  }

  @computed get timeString() {
    const pad = n => (n < 10 ? `0${n}` : n)
    const format = t =>
      `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
        t.getUTCSeconds()
      )}`
    return format(new Date(this.lastUpdate))
  }

  stop = () => clearInterval(this.timer)

  /** 此處處理 server side 同步 client side store */
  hydrate = initialData => {
    if (!initialData) return

    this.lastUpdate = initialData.lastUpdate !== null ? initialData.lastUpdate : Date.now()
    this.light = !!initialData.light
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new Store()

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
