import Head from 'next/head'
import ThemeProvider from '../ThemeProvider'
import { AppProps } from 'next/app'
import { FC } from 'react'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Start App</title>
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
