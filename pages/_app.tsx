import '../styles/Settings.css'
import '../styles/index.css'
import '../styles/GameComponent.css'
import '../styles/WinScreen.css'
import '../styles/AnswerElement.css'
import '../styles/ArrayElement.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
