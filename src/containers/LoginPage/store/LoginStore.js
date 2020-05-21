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

    @action toggleLogin = () => {
        this.assignData({ isLogin: !this.isLogin })
    }

    @action onChangeStore = (e) => {
        this.assignData({
            [e.target.name]: e.target.value
        })
    }

    @action setImgDidLoad = () => {
        this.assignData({
            imgDidLoad: true
        })
    }

    @action checkImgLoad = (imgSrc) => {
        var img = new Image();
        img.onload = action(function () {
            this.setImgDidLoad()
        }.bind(this));
        img.src = imgSrc;
    }

    @action onSubmit = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.toggleLogin()
    }
}

