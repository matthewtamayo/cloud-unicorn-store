import Head from 'next/head'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Unicorn Store</title>
      </Head>
      {children}
    </>
  )
}
