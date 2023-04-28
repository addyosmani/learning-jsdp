import type { AppProps /*, AppContext */ } from 'next/app'
import 'styles.css'

function MainApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MainApp