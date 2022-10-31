import '../styles/Settings.css'
import '../styles/index.css'
import '../styles/GameComponent.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
