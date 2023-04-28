// Next.js libraries
import Head from 'next/head'

// Custom Components
import BackToHome from 'components/BackToHome'

// Page component
export default function StaticSideGeneration({ jsonData }) {
  return (
    <>
      <Head>
        <title>Static-Site Generation (SSG) • Demo</title>
        <meta name="description" content="Example page using Static-Site Generation (SSG) with Next.js and React"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackToHome/>
      <h1>Static-Site Generation (SSG)</h1>
      <p>Data fetched at build-time on the server-side before sending to the client.</p>
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch('https://reqres.in/api/users?page=2')
  const jsonData = await res.json()

  return {
    props: {
      jsonData, // will be passed to the page component as props
    },
  }
}