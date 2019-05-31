import React, { Component } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";

const RootPage = ({ store }) => <div>{store.RootPageStore.name}</div>;

export default inject("store")(observer(RootPage));
