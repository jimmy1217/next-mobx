import storeAction from "@storeAction";
import { action, extendObservable } from "mobx";

const initState = {
    isLogin: false,
    account: "",
    password: "",
    imgDidLoad: false,
};

export default class Store extends storeAction {
    constructor(props) {
        super(props);
        this.initState = initState;
        // this.initState = this.returnCombineState(props, initState);
        // extendObservable(this, this.initState);
    }
}

