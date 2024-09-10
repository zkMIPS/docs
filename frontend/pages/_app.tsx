import '../styles/globals.css'
import { AppProps } from 'next/app'

/* eslint-disable react/jsx-props-no-spreading */
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
