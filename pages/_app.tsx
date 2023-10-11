import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-5N235FPF'
    }
    TagManager.initialize(tagManagerArgs)

  }, []);

  return <Component {...pageProps} />
}
