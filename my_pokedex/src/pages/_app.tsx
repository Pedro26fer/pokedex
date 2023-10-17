import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
       <Script 
            id="9094217428" 
            async
            onError={(e) => { console.error("Script failed to load", e);}}
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-987************676"
            crossOrigin="anonymous"
          />
          <Component {...pageProps} />
    </>
  )
}
