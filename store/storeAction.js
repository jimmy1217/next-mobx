import { action, extendObservable, computed } from "mobx";

/** 共用的 store action */
export default class storeAction {
  constructor({ ctx, initialData, storeName }) {
    this.initState = {};
    /** 此處處理初始化時,非同步項目的初始化狀態 */
    if (!!process.browser) {
      const serverState = { ...initialData[storeName] };
      delete serverState.initState;
      this.serverState = serverState;
    }
  }

  /** action - 多項改變  */
  @action assignData = (obj, validKey) => {
    Object.assign(this, obj);
  };

  /** action - params 多項改變 */
  @action paramsAssign = obj => {
    const params = { ...this.params, ...obj };
    this.assignData({ params });
  };

  /** reset 狀態 */
  @action reset = () => {
    Object.assign(this, this.initState);
  };
}
