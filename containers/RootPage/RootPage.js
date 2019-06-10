import React, { Component } from "react";
import RootPageComponent from "@components/RootPageComponent";
import { callGetUser } from "@api";

class RootPage extends Component {
  static async getInitialProps({ mobxStore }) {
    try {
      const { assignData } = mobxStore.RootPageStore;
      assignData({ isFetching: true });
      const res = await callGetUser();
      assignData({ isFetching: false });
      assignData({ list: res.data, didInvalidate: false });
    } catch (error) {
      console.log(error);
    }
    return {};
  }
  constructor(props) {
    super(props);
  }
  render() {
    return <RootPageComponent />;
  }
}

export default RootPage;
