// React
import { useEffect, useState } from 'react'

// Next.js
import Head from 'next/head'
import Link from 'next/link'

// Custom Components
import BackToHome from 'components/BackToHome'

// Page component
export default function ClientSideRendered() {

  const [state, setState] = useState([] as any)

  const getData = async () => {
    const res = await fetch('https://reqres.in/api/users?page=2')
    const jsonData = await res.json()
    setState(jsonData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Head>
        <title>Client-Side Rendering (CSR) • Demo</title>
        <meta name="description" content="Example page using Client-Side Rendering (CSR) with Next.js and React"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackToHome/>
      <h1>Client-Side Rendering (CSR)</h1>
      <p>Data fetched on the client-side only.</p>
      <ul>
      {
        state.data?.map((e) => (
          <li key={e.id}>{e.email}</li>
        ))
      }
      </ul>
    </>
  )

}