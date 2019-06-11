import Document, { Head, Main, NextScript } from "next/document";
import styled, { ServerStyleSheet, createGlobalStyle } from "styled-components";

const Blur = styled.div`
  .content-container {
    width: 100%;
    height: 1000px;
    position: relative;
    overflow: hidden;
    transform: translateZ(0);
  }

  .blur {
    transform: translate(0px, 0px, 0px);
    background-image: linear-gradient(
      to top right,
      rgba(84, 119, 151, 0.8) 0%,
      rgba(142, 163, 184, 0.8) 45%,
      rgba(69, 77, 91, 0.6) 80%
    );
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    top: -70px;
    right: -70px;
    left: -70px;
    padding: 70px;
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1001;
      background-image: linear-gradient(
        -19deg,
        rgba(43, 40, 50, 0.8) 0%,
        rgba(43, 40, 50, 0.4) 46%,
        rgba(0, 0, 0, 0.05) 50%
      );
      filter: blur(70px);
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body,
  html {
  margin: 0;
  background-color: rgb(43, 40, 50);
}
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <GlobalStyle />
          <Blur>
            <div className="content-container">
              <div className="blur" />
              <Main />
            </div>
          </Blur>
          <NextScript />
        </body>
      </html>
    );
  }
}
