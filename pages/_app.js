import App from "next/app";
import React from "react";
import { initializeStore } from "@store/store";
import { Provider } from "mobx-react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
  }
  html, body {
    height: 100%;
  }
  html * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: rgb(43, 40, 50);
  }
  input {
    border:0;
    padding:0;
  }
  input:focus {
    outline: none;
    outline-offset:0;
  }
  body > div {
    height:100%;
  }
`;

const MainContainer = styled.div`
  height:100%;
`

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
      <MainContainer>
        <Head>
          <title>next Mobx</title>
        </Head>
        <GlobalStyle />
        <Provider store={this.mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </MainContainer>
    );
  }
}
export default MyMobxApp;
