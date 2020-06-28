import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const Script = ({ children }) => (
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }}></script>
);

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => {
      /** 自定義 document 時, getLayout 這邊要處理 */
      const getLayout = App.getLayout || (page => page)
      return (
        sheet.collectStyles(getLayout(<App {...props} />))
      )
    });
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/example/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/example/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/example/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicons/example/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/example/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <Script>
            {
              () => {
                (function () {
                  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () { }
                })();
              }
            }
          </Script>
        </body>
      </html>
    );
  }
}
