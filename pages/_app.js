import App, { Container } from "next/app";
import React from "react";
import { initializeStore } from "@store/store";
import { Provider } from "mobx-react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html, body {
    height: 100%;
  }
  body {
    background-color: rgb(43, 40, 50);
  }
  input {
    border:0;
    padding:0;
  }
  body > div {
    height:100%;
  }
`;

class MyMobxApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    let appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      initialMobxState: mobxStore
    };
  }

  constructor(props) {
    super(props);
    const isServer = !process.browser;
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>next Mobx</title>
        </Head>
        <GlobalStyle />
        <Provider store={this.mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
export default MyMobxApp;
