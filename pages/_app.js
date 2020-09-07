import App from "next/app";
import React from "react";
import Head from "next/head";
import { useStore } from '@store'
import { Provider } from 'mobx-react'
import '@css/tailwind.css'
import { GlobalStyle } from '@css/globalStyle';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)
  const getLayout = Component.getLayout || (page => page)
  return (
    <div className="h-full">
      <Head>
        <title>next Mobx</title>
      </Head>
      <GlobalStyle />
      <Provider rootStore={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </div>
  )
}

export default MyApp