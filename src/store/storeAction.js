import { action, extendObservable, computed } from "mobx";

/** 共用的 store action */
export default class storeAction {
  constructor(props) {
    this.initState = {};
  }

  @action returnCombineState = (props, initState) => {
    const { isServer, initialData } = props;
    const combineClientServerState = isServer ? initState : { ...initState, ...initialData };
    delete combineClientServerState.initState;
    return combineClientServerState
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
