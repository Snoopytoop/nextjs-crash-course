import Head from 'next/head'
import Para from '@/components/Para'

export default function Home() {

  return (
   <div>
    <Head>
      <title>WebDev News</title>
      <meta name='keywords' content='web development, programming' />
    </Head>
    <h1>
      Welcome to Nextjs
    </h1>
    {/* <Para /> */}
   </div>
  )
}
