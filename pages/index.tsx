import Head from 'next/head'

import { Layout } from '../components/design/Layout'
import { Home } from '../components/pages/Home'

// export const getStaticPaths = async () => {
//   const paths = PostData.map(data => ({
//     params: { id: data.id }
//   }))
//   return { paths, fallback: false }
// }

// export const getStaticProps = async () => {
//   const data = await PostData
//   const postData = data
//   return {
//     props: {
//       postData,
//     }
//   }
// }


const index = () => {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default index

