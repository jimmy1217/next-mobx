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
    // @action hydrate = initialData => {
    //     if (!initialData) return


    //     this.lastUpdate = initialData.lastUpdate !== null ? initialData.lastUpdate : Date.now()
    //     this.light = !!initialData.light
    // }
}

