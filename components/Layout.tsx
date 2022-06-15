import Navigation from './Navigation'
import Head from 'next/head'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
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
