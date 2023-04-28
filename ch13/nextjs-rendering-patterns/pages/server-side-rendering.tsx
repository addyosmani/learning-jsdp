// Next.js libraries
import Head from 'next/head'

// Custom Components
import BackToHome from 'components/BackToHome'

// Page component
export default function ServerSideRendering({ jsonData }) {
  return (
    <>
      <Head>
        <title>Server-Side Rendering (SSR) • Demo</title>
        <meta name="description" content="Example page using Server-Side Rendering (SSR) with Next.js and React"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackToHome/>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>Data fetched on the server-side at <b>each</b> request before sending to the client.</p>
      <ul>
      {
        jsonData.data.map((e) => (
          <li key={e.id}>{e.email}</li>
        ))
      }
      </ul>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://reqres.in/api/users?page=2')
  const jsonData = await res.json()

  return {
    props: {
      jsonData, // will be passed to the page component as props
    },
  }
}
