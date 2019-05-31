import React, { Component } from "react";
import RootPageComponent from "@components/RootPageComponent";

class RootPage extends Component {
  static async getInitialProps({ mobxStore }) {
    mobxStore.RootPageStore.assignData({ name: "jimmy" });
    return { test: "" };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RootPageComponent />
    );
  }
}

export default RootPage;
