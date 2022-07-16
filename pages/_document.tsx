import Document, { Html, Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();
    return { html, head, styles };
  }
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <link
            rel="preload"
            href="/fonts/Pressura/PressuraMonoRegular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Flexa/FlexaVAR.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Flexa/FlexaMonoVAR.woff2"
            as="font"
            crossOrigin=""
          />

          <link
            rel="shortcut icon"
            href="/touch-icons/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            href="/touch-icons/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/touch-icons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/touch-icons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/touch-icons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/touch-icons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/touch-icons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/touch-icons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/touch-icons/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/touch-icons/apple-touch-icon-180x180.png"
          />

          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Ryan Sheehan" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
          <meta name="viewport" content="width=device-width" />
        </Head>

        <body data-content="main">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
