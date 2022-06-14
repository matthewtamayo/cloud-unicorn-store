import Navigation from './Navigation'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Unicorn Store</title>
      </Head>
      <Navigation />
      {children}
    </div>
  )
}
