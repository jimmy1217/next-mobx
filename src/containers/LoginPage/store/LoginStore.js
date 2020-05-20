import storeAction from "@storeAction";
import { action, extendObservable } from "mobx";

const initState = {
    isLogin: false,
    account: "",
    password: "",
    imgDidLoad: false,
    lastUpdate: 0
};

export default class LoginStore extends storeAction {
    constructor(props) {
        super(props);
        this.initState = this.returnCombineState(props, initState);
        extendObservable(this, this.initState);
    }
}

