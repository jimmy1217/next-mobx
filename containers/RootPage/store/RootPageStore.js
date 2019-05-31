import storeAction from "@storeAction";
import { action, extendObservable } from "mobx";

const initState = {
  name: "no name"
};

export default class RootPageStore extends storeAction {
  constructor({ ctx, initialData }) {
    super();
    this.initState = initState;
    if (!!process.browser) {
      this.rootStore = ctx;
      const mobxStoreState = { ...initialData.RootPageStore };
      delete mobxStoreState.initState;
      Object.assign(initState, mobxStoreState);
    }
    extendObservable(this, initState);
  }
  @action test = () => {
    console.log("hello");
  };
}
