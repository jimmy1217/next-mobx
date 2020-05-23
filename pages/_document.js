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
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap&subset=chinese-traditional"
            rel="stylesheet"
          ></link>
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
