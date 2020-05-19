import App from "next/app";
import React from "react";
import Head from "next/head";
import { useStore } from '@store'
import { Provider } from 'mobx-react'
import {
  GlobalStyle, MainContainer
} from '@css/globalStyle';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)
  return (
    <MainContainer>
      <Head>
        <title>next Mobx</title>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MainContainer>
  )
}

export default MyApp