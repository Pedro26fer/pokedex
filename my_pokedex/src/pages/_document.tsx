import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <Script
          id="9094217428"
          onError={(e) => { console.error("Script failed to load", e); }}
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          strategy="afterInteractive"
          crossOrigin="anonymous" */}
        {/* /> */}
      </Head>
      <body>
        <Main />
        {/* <NextScript /> */}
      </body>
    </Html>
  );
}
