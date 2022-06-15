import '../styles/globals.css'
import { Layout } from '../components'
import { AlliumProvider } from '@telus-uds/ds-allium'

function MyApp({ Component, pageProps }: any) {
  return (
    <AlliumProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlliumProvider>
  )
}

export default MyApp
