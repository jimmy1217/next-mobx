import storeAction from "@storeAction";
import { action, extendObservable } from "mobx";

const initState = {
  isFetching: false,
  didInvalidate: true,
  list: []
};

export default class RootPageStore extends storeAction {
  constructor(props) {
    super(props);
    Object.assign(initState, this.serverState);
    this.initState = initState;
    extendObservable(this, initState);
  }
}
