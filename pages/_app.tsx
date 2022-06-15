import '../styles/globals.css'
import { Layout } from '../components'
import { AlliumProvider } from '@telus-uds/ds-allium'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlliumProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlliumProvider>
  )
}

export default MyApp
