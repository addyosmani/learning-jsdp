// React libraries
import React from 'react'

// Next.js libraries
import Head from 'next/head'

// Version
import packageJson from 'package.json'

// Page component
export default function Home() {

  // Package.json dependencies
  const dependencies = []
  for (const [key, value] of Object.entries(packageJson.dependencies)) {
    dependencies.push(<li key={key}>{`${key}: ${value}`}</li>)
  }

  return (
    <>
    <Head>
      <title>Next.js Page Rendering • Demo</title>
      <meta name="description" content="Next.js support 4 rendering strategies to generate, deliver and render a React Single Page App on the client-side: SSG, SSR, ISR and CSR."/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Next.js Page Rendering</h1>
    <p>Next.js support 4 rendering strategies to generate, deliver and render a React Single Page App on the client-side: <b>SSG</b>, <b>SSR</b>, <b>ISR</b> and <b>CSR</b>.</p>

    <h2>Next.js Data Fetching examples</h2>
    <ul>
      <li><a href="/static-site-generation">Static-Site Generation (SSG)</a></li>
      <li><a href="/server-side-rendering">Server-Side Rendering (SSR)</a></li>
      <li><a href="/incremental-static-regeneration">Incremental Static Regeneration (ISR)</a></li>
      <li><a href="/client-side-rendering">Client-Side Rendering (CSR)</a></li>
    </ul>

    <h2>Github</h2>
    <p>Source code based on:<br/>
      <a href="https://github.com/guydumais/next-page-rendering">Next.js Page Rendering source code</a>
    </p>
    <h3>Version</h3>
    <p>{packageJson.version}</p>

    <h3>Dependencies</h3>
    <ul>
    {dependencies}
    </ul>
    </>
  )

}
