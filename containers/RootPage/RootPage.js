import React, { Component } from "react";
import RootPageComponent from "@components/RootPageComponent";
import { callGetUser } from "@api";

class RootPage extends Component {
  static async getInitialProps({ mobxStore }) {
    try {
      const res = await callGetUser();
      mobxStore.RootPageStore.assignData({
        list: res.data.map(item => ({ id: item.id, username: item.username })),
        didInvalidate: false
      });
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
