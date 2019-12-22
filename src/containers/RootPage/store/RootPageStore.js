import storeAction from "@storeAction";
import { action, extendObservable } from "mobx";

const initState = {
  isFetching: false,
  didInvalidate: true,
  mobxCount: 0,
  list: []
};

export default class RootPageStore extends storeAction {
  constructor(props) {
    super(props);
    this.initState = this.returnCombineState(props, initState);
    extendObservable(this, this.initState);
  }
}
